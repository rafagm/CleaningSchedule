import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss'],
})
export class TaskDialogComponent implements OnInit {
  form: FormGroup;

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
    console.log(this.form);
    const task: Task = {
      day: this.form.get("day").value,
      owner: this.form.get("owner").value,
      type: this.form.get("nameTask").value
    }

    this.taskService.createTask(task).subscribe(
      response => {
        window.location.reload();
      }
    );
  }

  onDismiss() {
    this.modalController.dismiss({
      'dismissed': true
    })
  }

}
