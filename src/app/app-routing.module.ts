import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from './componens/one/one.component';
import { TwoComponent } from './componens/two/two.component';

const routes: Routes = [
  {path:'one-component',component: OneComponent,},
  {path:'two-component',component: TwoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

