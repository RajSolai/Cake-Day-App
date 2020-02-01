import { Component, OnInit } from "@angular/core";
import { LoginService } from "../login.service";
import { NavController, LoadingController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  email: string;
  password: string;
  isloading: boolean = false;
  constructor(
    private login: LoginService,
    private router: NavController,
    private loading: LoadingController
  ) {}
  ngOnInit(): void {}
  /* loading controller code */
  async presentLoading() {
    const load = await this.loading.create({
      message: "Loading",
      duration: 2000
    });
    await load.present();
  }
  async loginFunction() {
    this.presentLoading();
    await this.login
      .signIn(this.email, this.password)
      .then(success => {
        this.router.navigateRoot("/addbday", { replaceUrl: true });
        this.loading.dismiss();
      })
      .catch(error => {
        this.router.navigateRoot("/register");
      });
  }
}
