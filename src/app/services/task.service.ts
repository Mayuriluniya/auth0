import { Injectable } from '@angular/core';
import Task from '../models/task';
// import { WebService } from './web.service';
import { HttpClient } from '@angular/common/http';
import List from '../models/list';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  readonly ROOT_URL;

  constructor(private http:HttpClient) { 
    this.ROOT_URL = "http://localhost:3000";
  }
  getLists() : Observable<List[]> {
    return this.http.get<List[]>(`${this.ROOT_URL}/lists`);
  }
  createList(title: string) : Observable<List>{
    return this.http.post<List>(`${this.ROOT_URL}/lists`,{ title });
  }

  getTasks(listId: string) : Observable<Task[]>{
    return this.http.get<Task[]>(`${this.ROOT_URL}/lists/${listId}/tasks`);
  }
  createTask(listId:string,title: string) : Observable<Task> {
    return this.http.post<Task>(`${this.ROOT_URL}/lists/${listId}/tasks`,{ title });
  }
  deleteList(listId:string) : Observable<List>{
    return this.http.delete<List>(`${this.ROOT_URL}/lists/${listId}`);
  }
  deleteTask(listId:string,taskId:string): Observable<Task> {
    return this.http.delete<Task>(`${this.ROOT_URL}/lists/${listId}/tasks/${taskId}`);
  }
  

  setCompleted(listId:string,task:Task): Observable<Task> {
    return this.http.patch<Task>(`${this.ROOT_URL}/lists/${listId}/tasks/${task._id}`,{ completed: !task.completed});
  }
  
}
