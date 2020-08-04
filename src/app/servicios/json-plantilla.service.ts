import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JsonPlantillaService {

  constructor(private http: HttpClient) { }


  getPlatilla() {
    return new Promise((resolve, reject) => {
      this.http.get("https://powerful-lake-75890.herokuapp.com/api/persona")
      .subscribe(data => {
        
        resolve(data)
      }, (error) => {
        
        reject (error);
       });
    })
      
  }

}

