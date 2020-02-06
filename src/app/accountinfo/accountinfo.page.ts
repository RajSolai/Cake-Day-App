import { Component, OnInit } from "@angular/core";
import { LoginService } from "../login.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { Storage } from "@ionic/storage";
import { NavController, AlertController } from "@ionic/angular";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-accountinfo",
  templateUrl: "./accountinfo.page.html",
  styleUrls: ["./accountinfo.page.scss"]
})
export class AccountinfoPage implements OnInit {
  userName: string;
  emailid: string;
  uid: string;
  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private navigator: NavController,
    private storage: Storage,
    private login: LoginService,
    private alert: AlertController
  ) {}
  ngOnInit() {
    this.getUserDetails();
  }
  async presentAlert(buttonName, msg) {
    const alert = await this.alert.create({
      header: "Alert",
      message: msg,
      buttons: [
        {
          text: buttonName,
          handler: () => {
            this.deleteAccountHandler();
          }
        },
        {
          text: "Cancel",
          handler: () => {}
        }
      ]
    });
    await alert.present();
  }
  async presentAlert2(buttonName, msg) {
    const alert = await this.alert.create({
      header: "Alert",
      message: msg,
      buttons: [
        {
          text: buttonName,
          handler: () => {
            this.LogOutHandler();
          }
        },
        {
          text: "Cancel",
          handler: () => {}
        }
      ]
    });
    await alert.present();
  }
  getUserDetails(): void {
    this.userName = this.auth.auth.currentUser.displayName.toString();
    this.emailid = this.auth.auth.currentUser.email.toString();
    this.uid = this.auth.auth.currentUser.uid.toString();
  }
  deleteAccount(): void {
    this.presentAlert(
      "Delete",
      "Do you really want to delete your Cake account"
    );
  }
  deleteAccountHandler(): void {
    this.login.deleteUser().then(pass => {
      this.navigator.navigateRoot(["/home"], { replaceUrl: true });
    });
  }
  logout(): void {
    this.presentAlert2(
      "logout",
      "Do you really want to logout from your Cake account"
    );
  }
  LogOutHandler(): void {
    this.login.logOut().then(success => {
      this.navigator.navigateRoot(["/home"], { replaceUrl: true });
    });
  }
}
