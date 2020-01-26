import { Component, OnInit } from "@angular/core";
import { LoginService } from "../login.service";
import { DataService } from "../data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  email: string;
  password: string;
  constructor(
    private login: LoginService,
    private dataservice: DataService,
    private router: Router
  ) {}
  ngOnInit(): void {}
  loginFunction() {
    this.login.signIn(this.email, this.password);
    console.log(this.dataservice.UIDtoken);
    this.router.navigate(["/addbday"])
  }
}
