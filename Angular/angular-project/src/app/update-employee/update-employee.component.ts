import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

id:number;
  employee: Employee = new Employee();

  constructor(private employeeServuce: EmployeeService,private router:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
  
    this.id=this.router.snapshot.params['id'];

    this.employeeServuce.getEployeeById(this.id).subscribe(data=>{

   this.employee=data;

    },error=>console.log(error))

  }


  /*
saveEmployee(){

  this.employeeServuce.createEmployee(this.employee).subscribe(data=>{
 
   console.log(data);
   this.goToEmployeeList();
 
  },
   error => console.log(error));
    
  
 
 }
 */
 
 goToEmployeeList(){
 
 this.route.navigate(['/employees'])
   
 }
 
 onSubmit(){



  this.employeeServuce.createEmployee(this.employee).subscribe(data=>{
 
    console.log(data);
    this.goToEmployeeList();
  
   },
    error => console.log(error));
 
   console.log(this.employee);
   
 }
 


}
