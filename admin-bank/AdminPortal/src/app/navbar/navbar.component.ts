import { Component, OnInit } from "@angular/core";
import { LoginService } from "../service/login.service";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean;

  constructor(private loginService: LoginService, private router: Router) {
    if (
      localStorage.getItem("PortalAdminHasLoggedIn") == "" ||
      localStorage.getItem("PortalAdminHasLoggedIn") == null
    ) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
  }

  logout() {
    this.loginService.logout().subscribe(
      res => {
        localStorage.setItem("PortalAdminHasLoggedIn", "");
      },
      err => console.log(err)
    );
    this.router.navigate(["/login"]);
    location.reload();
  }

  getDisplay() {
    if (!this.loggedIn) {
      return "none";
    } else {
      return "";
    }
  }

  ngOnInit() {}
}
