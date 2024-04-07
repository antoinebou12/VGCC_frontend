import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: { name: string, description: string}[] = [];

  constructor(private http: HttpClient) {
    //this.users.push({ name: 'User 1', description: 'Description of User 1' });
    //this.users.push({ name: 'User 2', description: 'Description of User 2' });
    // Add more users as needed
  }

  addNewAccountAndFetchEvents(startDate: Date, endDate: Date, addNewAccount: Boolean):Observable<any> {
    this.http.post<any>('http://127.0.0.1:8000/calendar/authorize', addNewAccount);
    this.http.get<any>('http://127.0.0.1:8000/get-calendar-events', { params: { startDate: startDate.toString(), endDate: endDate.toString() } });  
    return this.http.get<any>('http://127.0.0.1:8000/calendar/credentials-info');
  }

  resetAll():Observable<any> {
    this.http.delete<any>('http://127.0.0.1:8000/calendar/delete-tokens');
    this.http.delete<any>('http://127.0.0.1:8000/openAI/delete-text');  
    return this.http.post<any>('http://127.0.0.1:8000/openAI/create-text',{});
  }

  addUser(user: { name: string, description: string }) {
    this.users.push(user);
  }

  clearUsers() {
    this.users = [];
  }
}
