import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NounComponent} from './views/noun/noun.component';
import {AdjectiveComponent} from './views/adjective/adjective.component';
import {VerbComponent} from './views/verb/verb.component';

const routes: Routes = [
  { path: 'noun', component: NounComponent },
  { path: 'adjective', component: AdjectiveComponent },
  { path: 'verb', component: VerbComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
