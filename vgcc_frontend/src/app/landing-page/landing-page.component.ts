import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, FormsModule ], // Include CommonModule here
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
    this.chatMessages.push({ sender: 'You', message: 'Hello!', senderType: 'sender' });
    this.chatMessages.push({ sender: 'chatGPT', message: 'Hi there!', senderType: 'receiver' });
    this.chatMessages.push({ sender: 'You', message: 'Hello!', senderType: 'sender' });
    this.chatMessages.push({ sender: 'chatGPT', message: 'Hi there!', senderType: 'receiver' });
    this.chatMessages.push({ sender: 'You', message: 'Hello!', senderType: 'sender' });
    this.chatMessages.push({ sender: 'chatGPT', message: 'Hi there!', senderType: 'receiver' });
    this.chatMessages.push({ sender: 'You', message: 'Hello!', senderType: 'sender' });
    this.chatMessages.push({ sender: 'chatGPT', message: 'Hi there!', senderType: 'receiver' });
    this.chatMessages.push({ sender: 'You', message: 'Hello!', senderType: 'sender' });
    this.chatMessages.push({ sender: 'chatGPT', message: 'Hi there!', senderType: 'receiver' });
    this.chatMessages.push({ sender: 'You', message: 'Hello!', senderType: 'sender' });
    this.chatMessages.push({ sender: 'chatGPT', message: 'Hi there!', senderType: 'receiver' });
    this.chatMessages.push({ sender: 'You', message: 'Hello!', senderType: 'sender' });
    this.chatMessages.push({ sender: 'chatGPT', message: 'Hi there!', senderType: 'receiver' });
    this.chatMessages.push({ sender: 'You', message: 'Hello!', senderType: 'sender' });
    this.chatMessages.push({ sender: 'chatGPT', message: 'Hi there!', senderType: 'receiver' });
    this.chatMessages.push({ sender: 'You', message: 'Hello!', senderType: 'sender' });
    this.chatMessages.push({ sender: 'chatGPT', message: 'Hi there!', senderType: 'receiver' });
    this.chatMessages.push({ sender: 'You', message: 'Hello!', senderType: 'sender' });
    this.chatMessages.push({ sender: 'chatGPT', message: 'Hi there!', senderType: 'receiver' });
    this.chatMessages.push({ sender: 'You', message: 'Hello!', senderType: 'sender' });
    this.chatMessages.push({ sender: 'chatGPT', message: 'Hi there!', senderType: 'receiver' });
  }

  @Input() newMessage! : string;

  sendMessage() {

    if (this.newMessage.trim() !== '') { // Ensure message is not empty
      // Add new message to chatMessages array with sender as "sender"
      this.chatMessages.push({ sender: 'Sender', message: this.newMessage, senderType: 'sender' });
      // Clear input box after sending message
      this.newMessage = '';
    }
  }
}