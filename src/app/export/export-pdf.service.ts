import { Injectable, OnInit } from '@angular/core';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { TaskService } from '../task/task.service';
import { Task } from '../task/task.model';

import { take, map } from 'rxjs/operators';

import {transpose} from 'mathjs';

import * as moment from 'moment';


pdfMake.vfs = pdfFonts.pdfMake.vfs

@Injectable({
  providedIn: 'root'
})
export class ExportPdfService {
  docDefinition: any;

  constructor(private taskService: TaskService) {
  }

  setPdfContent(tasks) {

    let tableBody = this.adjustTableBody(tasks);

    let header = "Cleaning Schedule " + moment().startOf("week").locale("es").format("l") + "    -    " + moment().startOf("week").add(7, "days").locale("es").format("l");
    let footer = "made by Rafael Guardeño";

    this.docDefinition = {
      info: {
        title: 'Cleaning Schedule',
        author: 'Rafael Guardeño',
        subject: 'Cleaning Schedule',
        keywords: 'Cleaning Schedule',
      },
      header: {text: header, fontSize: 16, bold: true, alignment: "center", margin: [0, 10, 0, 20]},
      footer: {text: footer, alignment: "right", margin: [10, 0]},
      content: [
        {
          columns: [
            { width: "*", text: ""},
            {
              width: "auto",
              table: {
                body: [
                 [
                    {
                      text: "Rafa",
                      fillColor: this.getColorFromOwner("Rafa")
                    },
                    {
                      text: "Angel",
                      fillColor: this.getColorFromOwner("Angel")
                    },
                    {
                      text: "Papa",
                      fillColor: this.getColorFromOwner("Papa")
                    }
                  ]
                ]
              },
              margin: [0, 15],
              layout: "noBorders"
            },
            { width: "*", text: ""}
          ]
          
        },
        {
          table: {
            headerRows: 1,
            widths: [ "*", "*", "*", "*", "*", "*", "*"],
            body: tableBody
            
          }
        }
      ]
    };
  }

  adjustTableBody(tasks) {  
    let tableBody = transpose(tasks);
    tableBody.unshift(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]);

    return tableBody;
  }

  getTasksOfTheDay() {
    return this.taskService.getSchedule().pipe(
      take(1),
      map(response => {
          let tasks = {};
          
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              const task: Task = response[key];

              if (!tasks[task.day]) tasks[task.day] = [];
              tasks[task.day].push(task);
            }
          }
          
          return this.makeTheSchedule(tasks);
        }
      )
    );
  }

  openPdfOnNewWindows() {
    this.getTasksOfTheDay().subscribe(
      (response) => {                
        this.setPdfContent(response);

        pdfMake.createPdf(this.docDefinition).download();;
      }
    );
  }

  makeTheSchedule(tasks) {
    let schedule = [];
    let taskCounter = new Array(7).fill(0);

    console.log("tasks: ", tasks);
    

    for (const day in tasks) {
      if (tasks.hasOwnProperty(day)) {
        const dayHash: number = this.dayHash(day);
        const dayTasks = tasks[day];        

        if (!schedule[dayHash]) schedule[dayHash] = [];

        schedule[dayHash] = this.getTasksFromDay(dayTasks);
        taskCounter[dayHash] = dayTasks.length;

      }
    }

    

    return this.formatSchedule(schedule, taskCounter);
  }

  getTasksFromDay(tasks) {
    let dayTasks = [];
    
    for (const task of tasks){
      dayTasks.push({
        text: task.type,
        fillColor: this.getColorFromOwner(task.owner)
      });  
    }

    return dayTasks;
  }

  getColorFromOwner(owner: string) {
    if (owner.toLowerCase() === "rafa")
      return "#cd5c5c";
    else if (owner.toLowerCase() === "angel")
      return "#DEB521";
    else if (owner.toLowerCase() === "papa")
      return "#33B0DE";
    else return "";
  }

  dayHash(day: string) {
    day = day.toLocaleLowerCase();

    if (day === "monday") return 0;
    else if (day === "tuesday") return 1;
    else if (day === "wednesday") return 2;
    else if (day === "thursday") return 3;
    else if (day === "friday") return 4;
    else if (day === "saturday") return 5;
    else if (day === "sunday") return 6;
    else return -1;
  }

  formatSchedule(schedule, taskCounter) {
    const maxNumberOfTaskPerDay = this.getMaxNumberOfTaskPerDay(taskCounter);

    let finalSchedule = [];

    for (let i = 0; i < schedule.length; i++) {      
      if (!schedule[i]) schedule[i] = [];
      if (!finalSchedule[i]) finalSchedule[i] = [];

      for (let j = 0; j < schedule[i].length; j++) {
        finalSchedule[i].push(schedule[i][j]);
      }

      finalSchedule[i] = this.fillTheRestOfTheSchedule(finalSchedule[i], maxNumberOfTaskPerDay);
    }

    return finalSchedule;

  }

  fillTheRestOfTheSchedule(dayTasks, maxNumberOfTaskPerDay) {
    while(dayTasks.length < maxNumberOfTaskPerDay)
      dayTasks.push("");
    
    return dayTasks;
  }

  getMaxNumberOfTaskPerDay(taskCounter) {
    return Math.max(...taskCounter);
  }


}
