import { Component } from "@angular/core";
import { Platform } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { NavController } from "@ionic/angular";
import { Plugins, SplashScreen } from "@capacitor/core";
const { StatusBar, LocalNotifications } = Plugins;

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private storage: Storage,
    private nav: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.setBackgroundColor({ color: "#f35588" });
      SplashScreen.hide();
      this.storage.get("uid").then(val => {
        // this.dataservice.saveUID(val);
        console.log("the uid on load is" + val);
        if (val != null) {
          this.nav.navigateRoot(["/addbday"], { replaceUrl: true });
        } else {
          this.nav.navigateRoot(["/home"], { replaceUrl: true });
        }
      });
    });
  }
  notifyUsers(): void {
    LocalNotifications.schedule({
      notifications: [
        {
          title: "Hey Cake Users",
          body: "Check out todays Cakes !",
          id: 1,
          schedule: { every: "day", on: { hour: 8, minute: 0 } },
          sound: "",
          attachments: null,
          actionTypeId: null,
          extra: null
        }
      ]
    });
  }
}
