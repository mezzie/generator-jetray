import {Component} from "@angular/core";
import {Task} from "../models/task";
import {OnInit} from "@angular/core";
import {TaskService} from "../services/task-service";
import {TaskComponent} from "./task.component";

@Component({
    selector: 'task-list',
    templateUrl: './task-list.html',
    styleUrls: ['./task-list.css'],
    providers: [TaskService]
})
export class TaskListComponent implements OnInit {

    todoCount:number;
    selectedTask:Task;
    tasks:Array<Task>;

    constructor(private _taskService:TaskService) {
        this.tasks = _taskService.getTasks();
        this.calculateTodoCount();
    }

    ngOnInit() {
        console.log("Todo component (AOT) initialized with " + this.tasks.length + " tasks.");
    }

    calculateTodoCount() {
        this.todoCount = this.tasks.filter(t => !t.done).length;
    }

    select(task:Task) {
        this.selectedTask = task;
    }
}