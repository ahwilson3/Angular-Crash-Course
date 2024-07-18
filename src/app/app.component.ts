import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Tasks} from '../../Task'
import {TASKS} from '../../mock-tasks';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  tasks: Task[] = TASKS;
  
}
