import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { DataService } from "./data.service";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(
    private auth: AngularFireAuth,
    private dataservice: DataService,
    private storage: Storage
  ) {}
  /* login with email id and password */
  login(email, password) {
    return (
      this.auth.auth.createUserWithEmailAndPassword(email, password),
      this.dataservice.saveUID(this.auth.auth.currentUser.uid),
      this.storage.set("uid", this.auth.auth.currentUser.uid)
    );
  }
  /* sign in for exitsting users */
  signIn(email, password) {
    return (
      this.auth.auth.signInWithEmailAndPassword(email, password),
      this.dataservice.saveUID(this.auth.auth.currentUser.uid),
      this.storage.set("uid", this.auth.auth.currentUser.uid)
    );
  }
  logOut() {
    return this.auth.auth.signOut(), this.storage.set("uid", null);
  }
}
