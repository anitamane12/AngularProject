import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'

const api="http://localhost:5555/students/"

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  saveData(data){
    return this.httpclient.post(api,data)
  }

  constructor(private httpclient:HttpClient) { }
}
