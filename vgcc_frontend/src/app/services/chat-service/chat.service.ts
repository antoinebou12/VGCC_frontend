import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  chatMessages: { sender: string, message: string, senderType: 'sender' | 'receiver' }[] = [];

  constructor(private http: HttpClient) { 
    // Add test messages
    //this.chatMessages.push({ sender: 'You', message: 'Hello!', senderType: 'sender' });
    //this.chatMessages.push({ sender: 'chatGPT', message: 'Hi there!', senderType: 'receiver' });
  }

  postToOpenAI(message: String):Observable<JSON> {
    return this.http.post<JSON>('http://127.0.0.1:8000/openAI/llm/response', message);
  }

  addMessage(message: { sender: string, message: string, senderType: 'sender' | 'receiver' }) {
    this.chatMessages.push(message);
  }

  clearMessages() {
    this.chatMessages = [];
  }
}
