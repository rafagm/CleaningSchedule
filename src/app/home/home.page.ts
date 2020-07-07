import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task/task.service';
import { ModalController } from '@ionic/angular';
import { TaskDialogComponent } from '../task/task-dialog/task-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  today: string;

  constructor(private taskService: TaskService,
              private modalController: ModalController) {}

  
  ngOnInit(): void {
    this.getDayNameOfToday();
    
  }

  getDayNameOfToday() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date();
    this.today = days[date.getDay()];
  }

  addTask() {
    this.presentAddTaskPrompt();
  }

  async presentAddTaskPrompt() { 
    const modal = await this.modalController.create({
      component: TaskDialogComponent
    });

    return await modal.present();
  }

}
