import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TaskComponent } from '../task/task.component';
import { OwnersComponent } from '../owners/owners.component';
import { TaskDialogComponent } from '../task/task-dialog/task-dialog.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage, TaskComponent, OwnersComponent, TaskDialogComponent]
})
export class HomePageModule {}
