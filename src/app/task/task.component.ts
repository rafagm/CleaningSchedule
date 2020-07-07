import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input()
  day: string;

  tasks: Task[] = [];
  owners: string[] = ["Rafa", "Angel", "Papa"];

  constructor(private taskService: TaskService) {
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

  onDelete(task: Task) {
    this.taskService.deleteTask(task.id).subscribe(
      result => {
        this.getTasksFromDay(task.day);
      }
    );
    
  }


}
