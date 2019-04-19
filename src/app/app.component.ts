import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tasks';
  tasks = [];
  task = "";

  add():void {
    if (this.task) {
      this.tasks.push(this.task);
      this.task = "";
    }
  }
}
