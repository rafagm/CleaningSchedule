import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { TaskService } from '../task.service';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-delete-task-dialog',
  templateUrl: './delete-task-dialog.component.html',
  styleUrls: ['./delete-task-dialog.component.scss'],
})
export class DeleteTaskDialogComponent implements OnInit {
  public form = [
    { day: 'Monday', isChecked: true },
    { day: 'Tuesday', isChecked: true },
    { day: 'Wednesday', isChecked: true },
    { day: 'Thursday', isChecked: true },
    { day: 'Friday', isChecked: true },
    { day: 'Saturday', isChecked: true },
    { day: 'Sunday', isChecked: true },
  ];
  constructor(private modalController: ModalController,
              private taskService: TaskService,
              private loadingController: LoadingController) { }

  ngOnInit() {}

  onDismiss() {
    this.modalController.dismiss({
      'dismissed': true
    })
  }

  onDelete() {
    this.form
    .filter(dayCheckBox => dayCheckBox.isChecked)
    .forEach(dayCheckbox => {
      this.taskService.getTasksFromDay(dayCheckbox.day).subscribe(
        response => {
          this.deleteTasks(response);
          this.onDismiss();
        }
      );
    });

    this.workaround(); //Workaround until deleteTasksFromClient works
  }

  private async workaround() {
    const loading = await this.loadingController.create({
      message:"Deleting tasks...",
      duration: 2000
    });

    await loading.present();

    await loading.onDidDismiss();
    window.location.reload();
  }

  private deleteTasks(tasksJSON) {
    this.deleteTasksFromClient(tasksJSON); //TODO: Make this function works
    this.deleteTasksFromServer(tasksJSON);
  }

  private deleteTasksFromServer(tasksJSON) {
    for (var taskId  in tasksJSON) {
      if (tasksJSON.hasOwnProperty(taskId))        
        this.taskService.deleteTask(taskId).subscribe();
    }
  }

  private deleteTasksFromClient(tasksJSON) {

  }

}
