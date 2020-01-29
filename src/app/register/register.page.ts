import { Component, OnInit } from "@angular/core";
import { LoginService } from "../login.service";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage implements OnInit {
  email: string;
  password: string;
  constructor(private login: LoginService,private nav : NavController) {}
  ngOnInit() {}
  signIN() {
    this.login.login(this.email, this.password);
    this.nav.navigateRoot(["/addbday"]);
  }
}
