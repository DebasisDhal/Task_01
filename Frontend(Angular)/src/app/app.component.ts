import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { log } from 'node:console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'xyxApplicatin';

  
  students: any[] = [];

  constructor(private http:HttpClient){

  }

  getAllStudent(){
    this.http.get("http://localhost:8082/students/data").subscribe((result:any)=>{
      this.students = result;
    })
  }

  studentObj:any ={
    
    "name": "",
    "contactDetails": "",
    "address": "",
    "pinCode": 0
  }

  // http = inject(HttpClient);

  onSave(){
    this.http.post("http://localhost:8082/students/add",this.studentObj).subscribe((res:any)=>{})


  }
  completeLogin(f:NgForm){
    f.resetForm
  }
}
