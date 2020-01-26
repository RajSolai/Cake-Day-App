import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Storage } from "@ionic/storage";
import { Router } from "@angular/router";
import { DataService } from "../data.service";
import { LoginService } from "../login.service";

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
    private navigator: Router,
    private dataservice: DataService
  ) {}
  ngOnInit(): void {
    this.getData();
  }
  getData(): void {
    this.storage.get("uid").then(val => {
      this.firestore
        .doc("users/" + val)
        .collection("birthdays")
        .valueChanges()
        .subscribe(res => {
          this.isloading = false
          this.bdays = res;
          console.log(res);
        });
    });
  }
  getOut(): void {
    this.login.logOut();
    this.navigator.navigate(["/home"]);
  }
  nav(): void {
    this.navigator.navigate(["/bdays"]);
  }
}
