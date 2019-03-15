import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { PtHistoryComponent } from './pages/pt-history/pt-history.component';
import { PtActiveComponent } from './pages/pt-active/pt-active.component';
import { BankHistoryComponent } from './pages/bank-history/bank-history.component';
import { BankSubmitComponent } from './pages/bank-submit/bank-submit.component';
import { UpdatePlayerComponent } from './pages/update-player/update-player.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'pt/history', component: PtHistoryComponent },
  { path: 'pt/active', component: PtActiveComponent },
  { path: 'bank', component: BankHistoryComponent },
  { path: 'bank/submit', component: BankSubmitComponent },
  { path: 'updateplayer', component: UpdatePlayerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
