import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskService } from '../task/task.service';
import { ModalController } from '@ionic/angular';
import { TaskDialogComponent } from '../task/task-dialog/task-dialog.component';
import { ExportPdfService } from '../export/export-pdf.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  today: string;
  arrayBufferView;


  constructor(private taskService: TaskService,
              private modalController: ModalController,
              private exportPdfService: ExportPdfService) {}

  
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
      component: TaskDialogComponent,
      swipeToClose: true
    });

    return await modal.present();
  }

  onDownloadPdfSchedule() {
    this.exportPdfService.openPdfOnNewWindows();
  }

}