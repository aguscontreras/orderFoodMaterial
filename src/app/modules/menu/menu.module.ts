import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

import { MenuService } from './services/menu.service';

import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';

@NgModule({
  imports: [CommonModule, MenuRoutingModule, MaterialModule, SharedModule],
  declarations: [MainMenuComponent, MenuItemComponent],
  providers: [MenuService],
})
export class MenuModule {}
