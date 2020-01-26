import { Component, OnInit } from "@angular/core";
import { LoginService } from "../login.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage implements OnInit {
  email: string;
  password: string;
  constructor(private login: LoginService,private nav : Router) {}
  ngOnInit() {}
  signIN() {
    this.login.login(this.email, this.password);
    this.nav.navigate(["/addbday"]);
  }
}
