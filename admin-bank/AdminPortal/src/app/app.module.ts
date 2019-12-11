import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginComponent } from "./login/login.component";
import { HttpClientModule } from "@angular/common/http";
import { routing } from "./app-routing.module";
import { PrimaryTransactionComponent } from './primary-transaction/primary-transaction.component';
import { SavingsTransactionComponent } from './savings-transaction/savings-transaction.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { AppointmentComponent } from './appointment/appointment.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, LoginComponent, PrimaryTransactionComponent, SavingsTransactionComponent, UserAccountComponent, AppointmentComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, routing],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
