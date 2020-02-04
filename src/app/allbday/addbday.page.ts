import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Storage } from "@ionic/storage";
import { Router } from "@angular/router";
import { ToastController, Platform } from "@ionic/angular";
import { LoginService } from "../login.service";

@Component({
  selector: "app-addbday",
  templateUrl: "./addbday.page.html",
  styleUrls: ["./addbday.page.scss"]
})
export class AddbdayPage implements OnInit {
  isloading: boolean = true;
  bdays: any;
  counter: number = 0;
  constructor(
    private firestore: AngularFirestore,
    private storage: Storage,
    private login: LoginService,
    private navigator: Router,
    private toaster: ToastController,
    private platform: Platform
  ) {}
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.storage
      .get("uid")
      .then(val => {
        console.log("the uid saved is" + val);
        this.firestore
          .doc("users/" + val)
          .collection("birthdays")
          .valueChanges()
          .subscribe(res => {
            this.bdays = res;
            this.isloading = false;
          });
      })
      .catch(error => {
        alert("user not found");
      });
  }
  getOut(): void {
    this.login.logOut().then(success => {
      this.navigator.navigate(["/home"], { replaceUrl: true });
    });
  }
  Refresh(): void {
    location.reload();
  }
  async presentToast() {
    const toast = await this.toaster.create({
      message: "Tap again to exit app",
      showCloseButton: true,
      duration: 2000
    });
    toast.present();
  }
  exitApp(): void {
    this.platform.backButton.subscribe(() => {
      if (this.counter == 0) {
        this.counter++;
        this.presentToast();
        setTimeout(() => {
          this.counter = 0;
        }, 2000);
      } else {
        navigator["app"].exitApp();
      }
    });
  }
}
