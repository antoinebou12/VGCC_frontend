import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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

  addNewAccountAndFetchEvents(startDate: Date, endDate: Date, addNewAccount: boolean): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/calendar/authorize', {input_boolean : addNewAccount}).pipe(
      switchMap(() => {
        return this.http.get<any>('http://127.0.0.1:8000/get-calendar-events', { params: { startDate: startDate.toString(), endDate: endDate.toString() } });
      }),
      switchMap(() => {
        return this.http.get<any>('http://127.0.0.1:8000/calendar/credentials-info');
      })
    );
  }

  resetAll(): Observable<any> {
    return this.http.delete<any>('http://127.0.0.1:8000/calendar/delete-tokens').pipe(
      switchMap(() => {
        return this.http.delete<any>('http://127.0.0.1:8000/openAI/delete-text');
      }),
      switchMap(() => {
        return this.http.post<any>('http://127.0.0.1:8000/openAI/create-text', {});
      })
    );
  }

  addUser(user: { name: string, description: string }) {
    this.users.push(user);
  }

  clearUsers() {
    this.users = [];
  }
}
