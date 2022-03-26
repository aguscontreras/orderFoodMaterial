import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MainMenuComponent, MenuItemComponent],
  imports: [CommonModule, MenuRoutingModule, MaterialModule, HttpClientModule],
})
export class MenuModule {}
