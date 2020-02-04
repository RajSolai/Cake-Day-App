import { Component, OnInit } from "@angular/core";
import { LoginService } from "../login.service";
import {
  NavController,
  LoadingController,
  ToastController,
  Platform
} from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  email: string;
  password: string;
  isloading: boolean = false;
  counter: number = 0;
  constructor(
    private login: LoginService,
    private router: NavController,
    private loading: LoadingController,
    private platform: Platform,
    private toaster: ToastController
  ) {}
  ngOnInit(): void {
    this.exitApp();
  }
  async presentToast() {
    const toast = await this.toaster.create({
      message: "Tap again to exit app",
      showCloseButton: true,
      duration: 2000
    });
    toast.present();
  }
  async presentLoading() {
    const load = await this.loading.create({
      message: "Loading",
      duration: 2000
    });
    await load.present();
  }
  /* loading controller code */
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
  exitApp(): void {
    this.platform.backButton.subscribe(() => {
      if (this.counter == 0) {
        this.counter++;
        this.presentToast();
        setTimeout(() => {
          this.counter = 0;
        }, 2000);
      } else {
        navigator["app"].exitApp();
      }
    });
  }
}
