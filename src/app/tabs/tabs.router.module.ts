import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { HelpPage } from '../help/help.page';
import { JouerPage } from '../jouer/jouer.page';
import { RankPage } from '../rank/rank.page';
import { ShopPage } from '../shop/shop.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full'
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'help',
        outlet: 'help',
        component: HelpPage
      },
      {
        path: 'jouer',
        outlet: 'jouer',
        component: JouerPage
      },
      {
        path: 'rank',
        outlet: 'rank',
        component: RankPage
      },
      {
        path: 'shop',
        outlet: 'shop',
        component: ShopPage
      }
    ]
  },
  // {
  //   path: '',
  //   redirectTo: '/tabs/(home:home)',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
