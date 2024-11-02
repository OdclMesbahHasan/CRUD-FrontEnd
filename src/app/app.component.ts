import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeListComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-frontend';
}
