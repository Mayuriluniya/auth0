import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { TaskService } from './task.service';
import List from '../models/list';
import Task from '../models/task';
import { createtask, deletelist, deletetask, LISTS, TASKS, updatedlist } from '../../../../backend/database/lists_data';
import { creatlist } from '../../../../backend/database/lists_data';



describe('TaskService', () => {
  let taskservice: TaskService,
      httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [
        TaskService
      ]
    });
    taskservice = TestBed.inject(TaskService);
    httpTestingController = TestBed.inject(HttpTestingController);

    
  });

  //unit tests//

  xit('should be created', () => {
    expect(taskservice).toBeTruthy();
  });


  //getLists()
  it('should fetch all lists', () => {
    
    taskservice.getLists().subscribe(lists => {
      console.log(lists);
      expect(lists).toBeTruthy();
      expect(lists).toEqual(LISTS);
      expect((<any>lists).length).toBe(3);
      const list = (<any>lists).find((list: any) => list._id == '62f1197d8b28935d5f38b71d');
      expect(list.title).toBe('list 1');
    });
    const req = httpTestingController.expectOne('http://localhost:3000/lists');
    expect(req.request.method).toEqual("GET");
    req.flush(Object.values(LISTS));
    httpTestingController.verify();
    


  });

  //getTasks() 

  it('should fetch all tasks', () => {
    taskservice.getTasks("62f1197d8b28935d5f38b71d").subscribe((tasks) => {
      console.log(tasks);
      expect(tasks).toBeTruthy();
      expect((<any>tasks).length).toBe(3);
      const task = (<any>tasks).find((task: any) => task._id == "62fcd171dc1850ddc6a5d9c9");
      console.log(task.title);
      expect(task.title).toBe('task 3');


    });
    const req = httpTestingController.expectOne('http://localhost:3000/lists/62f1197d8b28935d5f38b71d/tasks');
    expect(req.request.method).toEqual("GET");
    req.flush(Object.values(TASKS.slice(0,3)))

  });

  

   //createList() 

   it('should create a list', () => {
   taskservice.createList('list 6').subscribe((list) => {
    console.log(list);
    expect(list).toBeTruthy();
    const slist = (<any>list).find((list: any) => list._id== "62fc8e85602d47c0c80001ae");
    console.log(slist.title);
    expect(slist.title).toBe('list 6');
    
    
    });
  
   const req = httpTestingController.expectOne('http://localhost:3000/lists');
   expect(req.request.method).toEqual("POST");
   req.flush(Object.values(creatlist));
   
   httpTestingController.verify();

   });


   //deleteList() 

   it('should delete a list', () => {
   taskservice.deleteList('62f34d6245d18a938f65eecb').subscribe((list:any) => {
    console.log(list);
    expect(list).toBeTruthy();
    const slist = (<any>list).find((list: any) => list._id== "62f34d6245d18a938f65eecb");
    console.log(slist.title);
    expect(slist.title).toBe('list 4');
   


   });

  const req = httpTestingController.expectOne('http://localhost:3000/lists/62f34d6245d18a938f65eecb');
  expect(req.request.method).toEqual("DELETE");
  req.flush(Object.values(deletelist));

   });

  

  //createTask() 

  it('should create a task', () => {
    taskservice.createTask("62fc8e85602d47c0c80001ac","task 8").subscribe((task) => {
    console.log(task);
    expect(task).toBeTruthy();
    const stask = (<any>task).find((task: any) => task.title== "task 8");
    console.log(stask._id);
    expect(stask.completed).toBe(false);

    });

  
  const req = httpTestingController.expectOne('http://localhost:3000/lists/62fc8e85602d47c0c80001ac/tasks');
  expect(req.request.method).toEqual("POST");
  req.flush(Object.values(createtask));
});


//deleteTask() 

//list 1 and task 2//

it('should delete a task', () => {
  taskservice.deleteTask("62f1197d8b28935d5f38b71d","62fc90de602d47c0c80001f7").subscribe((task) => {
    console.log(task);
    expect(task).toBeTruthy();
    const stask = (<any>task).find((task: any) => task.title== "task 2");
    console.log(stask._id);
    expect(stask._listId).toBe("62f1197d8b28935d5f38b71d");
  });

  const req = httpTestingController.expectOne('http://localhost:3000/lists/62f1197d8b28935d5f38b71d/tasks/62fc90de602d47c0c80001f7');
  expect(req.request.method).toEqual("DELETE");
  req.flush(Object.values(deletetask));

});

//setCompleted() 

it('should update the task', () => {

  taskservice.setCompleted("62fc8e85602d47c0c80001ac",{ "_id": "62fcd18cdc1850ddc6a5d9db", "title": "task 7", "_listId": "62fc8e85602d47c0c80001ac", "completed": false}).subscribe((task) => {
  expect(task).toBeTruthy();
  console.log(task);
  const stask = (<any>task).find((task: any) => task.title== "task 7");
  console.log(stask._id);
  expect(stask.completed).toBe(true);
  });
  const req = httpTestingController.expectOne('http://localhost:3000/lists/62fc8e85602d47c0c80001ac/tasks/62fcd18cdc1850ddc6a5d9db');
  expect(req.request.method).toEqual("PATCH");
  req.flush(Object.values(updatedlist));
});



});
