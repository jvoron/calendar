import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Task} from '../model/task';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

let counter = 0;


@Injectable()
export class TasksService {

  id:number;

  constructor(private http: HttpClient) {

      counter++;

      this.id = counter;


  }

  loadTasks(): Observable<Task[]> {

      const params = new HttpParams()
          .set("page", "1")
          .set("pageSize", "10");

      return this.http.get<Task[]>('/api/courses', {params});

  }

  saveTask(task:Task) {
      const headers = new HttpHeaders()
          .set("X-Auth", "userId");

      return this.http.put(`/api/tasks/${task.id}`,
          task,{headers});

  }


}
