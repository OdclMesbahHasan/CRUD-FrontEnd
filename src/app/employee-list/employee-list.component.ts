import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees: Employee[] = []; // Initialized as an empty array
}
