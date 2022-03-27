import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MainSidebarComponent } from './components/main-sidebar/main-sidebar.component';
import { FilterChipsComponent } from './components/filter-chips/filter-chips.component';

const sharedComponents = [MainSidebarComponent, FilterChipsComponent];

@NgModule({
  declarations: [...sharedComponents],
  imports: [CommonModule, MaterialModule],
  exports: [...sharedComponents],
})
export class SharedModule {}
