import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { DataService } from "./data.service";

@Injectable({
  providedIn: "root"
})
export class CrudService {
  tokenID;
  constructor(
    private firestore: AngularFirestore,
    private dataservice: DataService
  ) {
    this.tokenID = dataservice.UIDtoken;
  }
  getEntry() {
    return this.firestore.collection("items").snapshotChanges();
  }
  addEntry(fndetails) {
    return this.firestore.collection("items").add(fndetails);
  }
  createCollection() {
    return this.firestore.doc(this.tokenID + "");
  }
}
