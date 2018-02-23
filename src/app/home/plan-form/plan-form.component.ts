import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../task.service";

@Component({
  selector: 'app-plan-form',
  templateUrl: './plan-form.component.html',
  styleUrls: ['./plan-form.component.css']
})
export class PlanFormComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  save(task) {
    this.taskService.create(task);
  }

  ngOnInit() {
  }

}
