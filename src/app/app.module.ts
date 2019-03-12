import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PtActiveComponent } from './pages/pt-active/pt-active.component';
import { PtHistoryComponent } from './pages/pt-history/pt-history.component';
import { BankSubmitComponent } from './pages/bank-submit/bank-submit.component';
import { BankHistoryComponent } from './pages/bank-history/bank-history.component';
import { UpdatePlayerComponent } from './pages/update-player/update-player.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PtActiveComponent,
    PtHistoryComponent,
    BankSubmitComponent,
    BankHistoryComponent,
    UpdatePlayerComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
