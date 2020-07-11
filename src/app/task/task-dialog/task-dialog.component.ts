import { Component, OnInit, Input} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})

export class TaskDialogComponent implements OnInit {
  form: FormGroup;

  @Input() days;

  constructor(private taskService: TaskService,
              private modalController: ModalController) { }

  ngOnInit() {
    this.form = new FormGroup({
      day: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required]
      }),
      nameTask: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required]
      }),
      owner: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required]
      })
    })
  }

  onAddTask() {
    const days: string[] = this.form.get("day").value;

    for (const day of days) {
      const task: Task = {
        day,
        owner: this.form.get("owner").value,
        type: this.form.get("nameTask").value,
        timestamp: new Date()
      }

      this.taskService.createTask(task).subscribe(
        response => {
          const dayNumber: number = this.getDayNumber(task.day);
          this.days[dayNumber].onAdd(task);
          this.onDismiss();
        }
      );
    }
  }

  getDayNumber(day: string): number {
    if (day.toLowerCase() === "monday") return 0;
    else if (day.toLowerCase() === "tuesday") return 1;
    else if (day.toLowerCase() === "wednesday") return 2;
    else if (day.toLowerCase() === "thursday") return 3;
    else if (day.toLowerCase() === "friday") return 4;
    else if (day.toLowerCase() === "saturday") return 5;
    else if (day.toLowerCase() === "sunday") return 6;
    else return -1;
  }

  onDismiss() {
    this.modalController.dismiss({
      'dismissed': true
    })
  }

}
