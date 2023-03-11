import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  response: any;
  constructor(private httpClient: HttpClient) { 
  }
  
  // async getData(){
  //   this.httpClient.get(environment.apiUrl).subscribe(data=>{
  //     this.response = data;
  //     return this.response;
  //   })
  // }

  async getData(){
    this.response = this.httpClient.get(environment.apiUrl).toPromise();
      return this.response;
    }
  

}
