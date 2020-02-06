import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Storage } from "@ionic/storage";
import { AlertController, NavController } from "@ionic/angular";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(
    private auth: AngularFireAuth,
    private storage: Storage,
    private alert: AlertController,
    private nav: NavController,
    private firestore: AngularFirestore
  ) {}
  /* code for alert */
  async presentAlert(message) {
    const alert = await this.alert.create({
      header: "Alert",
      message: message,
      buttons: ["OK"]
    });
    await alert.present();
  }
  async presentAlertCreateUser(message) {
    const alert = await this.alert.create({
      header: "Alert",
      message: message,
      buttons: [
        {
          text: "Create Account",
          handler: () => {
            this.nav.navigateRoot("/register");
          }
        },
        {
          text: "Try Again",
          handler: () => {
            this.nav.navigateRoot("/home");
          }
        }
      ]
    });
    await alert.present();
  }
  /* login with email id and password */
  login(email, password, nickName) {
    return this.auth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(obj => {
        console.log("the uid got its" + this.auth.auth.currentUser.uid);
        this.storage.set("uid", this.auth.auth.currentUser.uid);
        console.dir(obj);
        this.auth.auth.currentUser.updateProfile({ displayName: nickName });
        this.storage.set("username", this.auth.auth.currentUser.displayName);
      })
      .catch(error => {
        console.dir(error);
        if (error.code == "auth/argument-error") {
          console.log("please enter the email");
        } else if (error.code == "auth/user-not-found") {
          console.log("user not found");
        } else {
          console.log("everything is fine");
        }
      });
  }
  /* sign in for exitsting users */
  signIn(email, password) {
    return this.auth.auth
      .signInWithEmailAndPassword(email, password)
      .then(obj => {
        this.storage.set("uid", this.auth.auth.currentUser.uid);
        console.log("the uid saved is\t" + this.auth.auth.currentUser.uid);
        console.dir(obj);
      })
      .catch(error => {
        console.log(error);
        if (error.code == "auth/argument-error") {
          console.log("please enter the email");
        } else if (error.code == "auth/user-not-found") {
          console.log("user not found");
          this.presentAlertCreateUser("User Not 404 found");
        } else {
          console.log("everything is fine");
        }
      });
  }
  /* Password reset for the user account */
  ResetPwd(email) {
    return this.auth.auth.sendPasswordResetEmail(email).then(success => {
      this.presentAlert(
        "The Password Reset link is sent to the given email ID"
      );
    });
  }
  /* logout the current user for application */
  logOut() {
    return this.auth.auth.signOut().then(success => {
      this.storage.clear();
    });
  }
  deleteUser() {
    return (
      this.firestore.collection("/users").doc(this.auth.auth.currentUser.uid).delete(),
      this.auth.auth.currentUser.delete().then(pazz => {
        this.storage.clear();
      })
    );
  }
}
