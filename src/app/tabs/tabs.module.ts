import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { TabsPageRoutingModule } from './tabs.router.module';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { HomePageModule } from '../home/home.module';
import { HelpPageModule } from '../help/help.module';
import { JouerPageModule } from '../jouer/jouer.module';
import { RankPageModule } from '../rank/rank.module';
import { ShopPageModule } from '../shop/shop.module';

const routes: Routes = [
  {
    path: '',
    component: TabsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    IonicModule,
    HomePageModule,
    HelpPageModule,
    JouerPageModule,
    RankPageModule,
    ShopPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
