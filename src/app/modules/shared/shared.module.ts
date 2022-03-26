import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { MainSidebarComponent } from './components/main-sidebar/main-sidebar.component';

const sharedComponents = [MainSidebarComponent];

@NgModule({
  declarations: [...sharedComponents],
  imports: [MaterialModule],
  exports: [...sharedComponents],
})
export class SharedModule {}
