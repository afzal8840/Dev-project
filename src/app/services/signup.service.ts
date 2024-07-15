import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  
addUsers(data: any){
  return this.http.post<Observable<any>>('https://future-tech.onrender.com/api/admin',data);
  }
}
