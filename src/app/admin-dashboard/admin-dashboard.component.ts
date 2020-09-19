import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Router} from '@angular/router';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router:Router ) { }
  

  onlogout()
  {
    this.router.navigate(['./adminlogin']);
  }
  ngOnInit(): void {
  }

}
