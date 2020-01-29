import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Storage } from "@ionic/storage";
import { Router } from "@angular/router";
import { LoginService } from "../login.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-addbday",
  templateUrl: "./addbday.page.html",
  styleUrls: ["./addbday.page.scss"]
})
export class AddbdayPage implements OnInit {
  isloading: boolean = true;
  bdays: any;
  constructor(
    private firestore: AngularFirestore,
    private storage: Storage,
    private login: LoginService,
    private navigator: Router
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
      this.navigator.navigate(["/home"]);
    });
  }
  Refresh(): void {
    location.reload();
  }
}
