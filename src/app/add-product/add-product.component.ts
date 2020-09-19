import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ActivatedRoute, Router} from '@angular/router';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import {Product} from './product';

import { ApiService } from '../api.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

 
  form:FormGroup
  product:any=[]
  cat= []
  
  
  

  constructor(private dataService:ApiService,private activatedroute:ActivatedRoute,private router:Router ) {
    
   }

  addproduct()
  {
    console.log(this.form.value);
    //const formData= new FormData();
    //formData.append('myFile',this.form.get('image').value);
    this.dataService.saveData(this.form.value).subscribe((res)=>{
      console.log("data added",res);
      alert("data saved");
      this.router.navigateByUrl("/dashboard1");
    })
  }


  onFileSelect(event)
  {
    if(event.target.files.length > 0)
    {
      const file=event.target.files[0];
      this.form.get('image').setValue(file);
    }
  }

  ngOnInit(): void {
  

  this.form=new FormGroup(
    {
      name:new FormControl(""),
      price:new FormControl(""),
      discount:new FormControl(""),
      withdiscount:new FormControl(""),
      description:new FormControl(""),
      quantity:new FormControl(""),
      ratings:new FormControl(""),
      image:new FormControl("")
    
      
    }
  )

  }
}