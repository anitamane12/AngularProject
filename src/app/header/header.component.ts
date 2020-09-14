import { Component, OnInit } from '@angular/core';
import {Login} from './login';
import {FormGroup,FormControl} from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  form:FormGroup
  login:Login
  constructor() { }

  ngOnInit(): void {
  }

}
