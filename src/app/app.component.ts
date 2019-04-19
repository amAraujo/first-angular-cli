import { User } from './models/user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Tasks';
  upperText:string = 'Display uppercase text';
  lowerText:string = 'DISPLAY LOWERCASE TEXT';
  percentValue:number = 0.34;
  date:Date = new Date();
  money:number = 10;
  isAdmin:boolean = true;
  profile:number = 1;

  user: User = {
    name: 'Arthur',
    age: 26
  }
}
