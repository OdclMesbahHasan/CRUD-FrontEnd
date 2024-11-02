import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = []; // Initialized as an empty array

  constructor(private employeeService: EmployeeService) { }

  // Ensure ngOnInit method is defined
  ngOnInit(): void {
    this.getEmployees(); // Call to fetch employees when the component initializes
  }

  private getEmployees(): void {
    this.employeeService.getEmployeesList().subscribe({
      next: (data) => {
        this.employees = data; // Assign fetched data to the employees array
      },
      error: (err) => {
        console.error('Error fetching employees:', err); // Log any errors
      }
    });
  }
}
