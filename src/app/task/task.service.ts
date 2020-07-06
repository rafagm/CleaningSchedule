import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTasksFromDay(day: string) {
    console.log("day : " + day);
    
    return this.http.get(environment.firebaseDBURL + `tasks.json?orderBy="day"&equalTo="${day}"`);
  }
}
