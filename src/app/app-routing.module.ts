import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import Routers from './router';

const routes: Routes = Routers.map(({display, ...keepAttrs}) => keepAttrs);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
