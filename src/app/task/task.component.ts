import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task.model';
import { AlertController } from '@ionic/angular';
import { increaseSize, setAnimation } from '../animations/animations';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  animations: [increaseSize, setAnimation]
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
        
        this.sortTasksByDate();
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

  sortTasksByDate() {
    this.tasks.sort(this.compareTask);
  }

  private compareTask(a: Task, b: Task): number {
    if (a.timestamp < b.timestamp)
      return -1;
    else if ( a.timestamp > b.timestamp)
      return 1;
    else 
      return 0;
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
            this.taskHoveredId = "";
          }
        }, {
          text: 'Okay',
          handler: () => {                  
            this.taskService.deleteTask(task.id).subscribe(
              result => {
                this.delete = this.increaseSize = false;                
                this.taskHoveredId = "";
                this.updateTasksOnDelete(task);
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
    console.log("onMouseEnter: ", this.taskHoveredId);
    
  }
  onMouseLeave() {
    this.delete ? this.increaseSize = true : this.increaseSize = false;
  }
  increaseSizeCheck(task: Task) {
    console.log("increasesSize: ", task);
    if (this.increaseSize && task.id === this.taskHoveredId)
      return true;
    else 
    return false;
  }

  updateTasksOnDelete(task: Task) {
    this.tasks = this.tasks.filter(innerTask => task.id !== innerTask.id);
  }


}
