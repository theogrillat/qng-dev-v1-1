import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'app', loadChildren: './tabs/tabs.module#TabsPageModule' },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  // { path: 'jouer', loadChildren: './jouer/jouer.module#JouerPageModule' },
  // { path: 'rank', loadChildren: './rank/rank.module#RankPageModule' },
  // { path: 'help', loadChildren: './help/help.module#HelpPageModule' },
  // { path: 'shop', loadChildren: './shop/shop.module#ShopPageModule' },
  // { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
