import { Component } from 'angular2/core';

@Component({
  selector: 'task-list',
  inputs: ['taskList'],
  template: `
  <h3 *ngFor="#currentTask of taskList" (click)="taskClicked(currentTask)">
    {{ currentTask.description }}
  </h3>
  `
})
export class TaskListComponent {
  public taskList: Task[];
  taskClicked(clickedTask: Task): void {
    console.log(clickedTask);
  }
}

@Component({
  selector: 'my-app',
  directives: [TaskListComponent],
  template: `
    <div class="container">
      <h1>To-Do List</h1>
      <task-list [taskList]="tasks"></task-list>
    </div>
  `
})
export class AppComponent {
  public tasks: Task[];  // Task[] (or Array<Task>) identifies tasks as an array of Task objects
  constructor(){
    this.tasks = [
      new Task("Create To-Do List app.", 0),
      new Task("Learn Kung Fu", 1),
      new Task("Rewatch all the Lord of the Rings movies.", 2),
      new Task("Do the laundry.", 3)
    ];
  }
  taskWasSelected(clickedTask: Task): void{
    console.log(clickedTask);
  }
}

// model
  export class Task {
    public done: boolean = false;
    constructor(public description: string, public id: number) {

  }
}
