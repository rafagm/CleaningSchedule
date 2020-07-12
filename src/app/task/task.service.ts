import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { ModalController } from '@ionic/angular';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService { 

  constructor(private http: HttpClient,
              public modalController: ModalController) { }

  getTasksFromDay(day: string) {
    return this.http.get(environment.firebaseDBURL + `tasks.json?orderBy="day"&equalTo="${day}"`);
  }

  getSchedule() {
    return this.http.get(environment.firebaseDBURL + `tasks.json`);
  }

  createTask(task: Task) {  
    return this.http.post(environment.firebaseDBURL + "tasks.json", task);
  }

  deleteTask(taskId: string){
    console.log("Service deleteTask: ", taskId);
    
    return this.http.delete(environment.firebaseDBURL + `tasks/${taskId}.json`);
  }



}
