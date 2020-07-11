import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task.model';
import { AlertController } from '@ionic/angular';
import { increaseSize } from '../animations/animations';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  animations: [increaseSize]
})
export class TaskComponent implements OnInit {
  @Input()
  day: string;

  tasks: Task[] = [];
  owners: string[] = ["Rafa", "Angel", "Papa"];

  increaseSize = false;
  delete = false;
  taskHoveredId: string;

  constructor(private taskService: TaskService,
              private alertController: AlertController) {
   }
   
  ngOnInit() {    
    this.getTasksFromDay(this.day);
  }

  getTasksFromDay(day: string) {
    this.taskService.getTasksFromDay(this.day).subscribe(
      response => {
        this.tasks = [];
        
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            let task: Task = response[key];
            task.id = key;
            this.tasks.push(task);
          }
        }
        
      }
    );
  }

  onAdd(task: Task) {
    this.tasks.push(task);
  }
  
  onDelete(task: Task) {
    this.delete = true;
    this.presentAlert(task);
    
  }

  async presentAlert(task) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Do you want to delete this task?',
      message: `Day: <strong>${task.day}</strong><br>Task: <strong>${task.type}</strong>`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.delete = this.increaseSize = false;
          }
        }, {
          text: 'Okay',
          handler: () => {                  
            this.taskService.deleteTask(task.id).subscribe(
              result => {
                this.delete = this.increaseSize = false;                
                this.taskHoveredId = "";
                this.getTasksFromDay(task.day);
              }
            );
          }
        }
      ]
    });

    await alert.present();
  }

  onMouseEnter(task) {
    this.increaseSize = true
    this.taskHoveredId = task.id
  }
  onMouseLeave() {
    this.delete ? this.increaseSize = true : this.increaseSize = false;
  }
  increaseSizeCheck(task: Task) {
    if (this.increaseSize && task.id === this.taskHoveredId)
      return true;
    else 
    return false;
  }


}
