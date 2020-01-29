import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-bdays",
  templateUrl: "./bdays.page.html",
  styleUrls: ["./bdays.page.scss"]
})
export class BdaysPage implements OnInit {
  nametemp: string;
  bdaytemp: string;
  constructor(
    private firestore: AngularFirestore,
    private router: Router,
    private storage: Storage
  ) {}
  ngOnInit(): void {}
  addData(): void {
    let model = {
      bday: this.bdaytemp,
      name: this.nametemp
    };
    this.storage.get("uid").then(val => {
      this.firestore
        .doc("users/" + val)
        .collection("birthdays")
        .add(model)
        .then(success => {
          this.router.navigate(["/addbday"]);
        });
    });
  }
}
