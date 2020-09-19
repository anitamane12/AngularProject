import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  email=''
  password=''
  constructor(private router:Router) { }
  
  onlogin()
  {
    if(this.email =="admin" && this.password == "admin")
    this.router.navigate(['./dashboard1'])
    else
    {
      alert('Invalid username and password')
    }
  }
  ngOnInit(): void {
  }

}
