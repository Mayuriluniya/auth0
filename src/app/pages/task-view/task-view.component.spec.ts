import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TaskViewComponent } from './task-view.component';
import { TaskService } from 'src/app/services/task.service';
import { RouterTestingModule} from '@angular/router/testing';
import {  DebugElement } from '@angular/core';
//import { taskservicestub } from './test_data';


import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { LISTS, TASKS } from '../../../../../backend/database/lists_data';
import List from 'src/app/models/list';

describe('TaskViewComponent', () => {
  let component: TaskViewComponent;
  let fixture: ComponentFixture<TaskViewComponent>;
  let taskService: any;
  let debug: DebugElement;
  

  beforeEach(async () => {
    const taskServicespy = jasmine.createSpyObj<TaskService>(['getLists','getTasks','deleteList','deleteTask','setCompleted']);
    
    taskServicespy.getLists.and.returnValue(of(LISTS)); 
   
    
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,],
      providers:[{
        provide:TaskService,useValue:taskServicespy
      }],
      declarations: [ TaskViewComponent ]
    })
    .compileComponents()
    .then(() => {

      fixture = TestBed.createComponent(TaskViewComponent);
      component = fixture.componentInstance;
      debug = fixture.debugElement;
      fixture.detectChanges();

    });
  });

  


  it('should create', () => {
    expect(component).toBeTruthy();
    console.log(component.lists);
   });

    it('should get the lists ', () => {
      //console.log(component.lists.length);
      expect(component.lists).toBeTruthy();
      expect(component.lists.length).toBe(3);
      //expect(component.lists.length).toBeGreaterThan(0);
    });

  it('should have the title',() => {
    const compiled = fixture.nativeElement as HTMLElement;
    // expect(compiled.querySelector('.sidebar h1')?.textContent).toContain('auth0 app is running!');
    expect(compiled.querySelector('.sidebar h1')?.textContent).toEqual('Lists');
   

  });

  it('should render lists in HTML',() => {
    const ele = fixture.debugElement.query(By.css('.list-menu')).nativeElement;
    //console.log(ele.childNodes[0].innerHTML)
    expect(ele.childNodes[0].innerHTML).not.toBeNull();
    expect(ele.childNodes[1].innerHTML).not.toBeNull();
    expect(ele.childNodes[2].innerHTML).not.toBeNull();
});

  

   //list of lists unit testing//
  //  xit('should show the list of lists',() => {
        
    // component.lists = setUpLists();
    // taskService.getLists.and.returnValue(of([List]));
   
    // taskService.getLists();
    // console.log(component.lists);
    
    // console.log(debug.nativeElement.outerHTML);
    
    // 
    // const listmenu = debug.queryAll(By.css(".list-menu-item"));

    // console.log(listmenu.length);
    // expect(listmenu).toBeTruthy();
    // console.log(listmenu);
    // expect(listmenu.length).toBe(3);

  // });


    
     
    
    
    //   //list of tasks unit testing//
    //   xit('should show the list of tasks',() => {
    
    //   });
    


  });

  

  // 




///task viw component unit testing///
