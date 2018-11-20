import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NavController } from '@ionic/angular';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {
  // // constructor(public navCtrl: NavController) {}
  // async navPages() {
  //   // you can use either of below
  //   this.router.navigateByUrl('/app/tabs/(home:home)');
  //   // this.navCtrl.navigateRoot('/app/tabs/(home:home)');
  // }
}
