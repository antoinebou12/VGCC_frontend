import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
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

  addMessage(message: { sender: string, message: string, senderType: 'sender' | 'receiver' }) {
    this.chatMessages.push(message);
  }

  clearMessages() {
    this.chatMessages = [];
  }
}
