import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  getTasks(): Task[] {
    return [];

    constructor(private taskService: TaskService) { }

    ngOnInit(): void {
      this.tasks = this.taskService.getTasks();
    }

    ngOnInit(): void {
      this.taskService.getTasks().subscribe();
    }
  }


}
