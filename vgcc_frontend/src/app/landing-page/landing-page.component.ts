import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, MatExpansionModule], // Include CommonModule here
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'] // Correct the property name to styleUrls
})
export class LandingPageComponent {
  // Declare the users property
  users: any[] = [
    { name: 'User 1', description: 'Description of User 1' },
    { name: 'User 2', description: 'Description of User 2' },
    // Add more users as neede
  ];

  chatMessages: { sender: string, message: string, senderType: 'sender' | 'receiver' }[] = [];

  constructor() {
    // Add test messages
    this.chatMessages.push({ sender: 'Sender', message: 'Hello!', senderType: 'sender' });
    this.chatMessages.push({ sender: 'Receiver', message: 'Hi there!', senderType: 'receiver' });
  }
}