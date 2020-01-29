import { Component, OnInit } from "@angular/core";
import { LoginService } from "../login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  email: string;
  constructor(private login: LoginService) {}
  ngOnInit() {}
  ResetPassword() {
    this.login.ResetPwd(this.email);
  }
}
