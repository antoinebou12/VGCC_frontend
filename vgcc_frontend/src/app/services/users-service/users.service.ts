import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: { name: string, description: string}[] = [];

  constructor() {
    this.users.push({ name: 'User 1', description: 'Description of User 1' });
    this.users.push({ name: 'User 2', description: 'Description of User 2' });
    // Add more users as needed
  }

  addUser(user: { name: string, description: string }) {
    this.users.push(user);
  }

  clearUsers() {
    this.users = [];
  }
}
