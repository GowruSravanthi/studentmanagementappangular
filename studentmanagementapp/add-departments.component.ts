// add-departments.component.ts
import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-departments',
  templateUrl: './add-departments.component.html',
  styleUrls: ['./add-departments.component.css'],
})
export class AddDepartmentsComponent implements OnInit{
  newDepartment: string = '';
  departments: string[] = [];

  constructor(private router: Router ,private departmentService: DepartmentService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addDepartment() {
    this.departmentService.addDepartment(this.newDepartment);
    this.newDepartment = ''; // Clear the form after adding a department
  
  this.departmentService.departments$.subscribe((departments: any) => {
    this.departments = departments;
  });
}
}
