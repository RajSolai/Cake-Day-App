import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {
  UIDtoken;
  isLoggedin : boolean = false;
  constructor() {}
  saveUID(token) {
    this.UIDtoken = token;
  }
}
