import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { ChatService } from '../services/chat-service/chat.service'; // Import ChatService
import { UsersService } from '../services/users-service/users.service'; // Import UsersService
import { MatDialog } from '@angular/material/dialog'; // Import MatDialog
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component'; // Import ConfirmationDialogComponent

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, FormsModule, MatIconModule ], // Include CommonModule here
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'] // Correct the property name to styleUrls
})
export class LandingPageComponent {

  startDate: Date = new Date(); // Initialize with current date
  endDate: Date = new Date();   // Initialize with current date
  openAIResponse: String = ''; // Initialize with empty string

  constructor(
    private chatService: ChatService, 
    private usersService: UsersService,
    private dialog: MatDialog
  ) {}

 
  get chatMessages() {
    return this.chatService.chatMessages;
  }

  get users() {
    return this.usersService.users;
  }

  ngOnInit() {
    this.loadUsers(); // Call loadUsers method when component initializes
  }

  loadUsers() {
    this.usersService.getListOfUsers().subscribe({
      next: response => {
        this.usersService.setUsers(response); // Update users array with response from service
      },
      error: error => {
        console.error('Error fetching users:', error);
      }
    });
  }

  @Input() newMessage! : string;

  sendMessage() {

    if (this.newMessage.trim() !== '') { // Ensure message is not empty
      // Add new message to chatMessages array with sender as "sender"
      this.chatMessages.push({ sender: 'You', message: this.newMessage, senderType: 'sender' });
      
      //API
      this.chatService.postToOpenAI(this.newMessage).subscribe({
        next: response => {
          this.openAIResponse = response['openAI response'];
          //console.log('Response from OpenAI:', this.openAIResponse);
          this.chatMessages.push({ sender: 'chatGPT', message: this.openAIResponse.toString(), senderType: 'receiver' });
        },
        error: error => {
          console.error('Error:', error);
          this.chatMessages.push({ sender: 'chatGPT', message: error.message || 'An error occurred', senderType: 'receiver' });
        }
      }
      );     
      //end of API
      // Clear input box after sending message
      this.newMessage = '';
    }
  }

  addNewAccountAndFetchEvents() {
    //API
    this.usersService.addNewAccountAndFetchEvents(this.startDate, this.endDate, true).subscribe({
        next: response => {
        this.usersService.users = response;
        console.log('Response from addNewAccountAndFetchEvents:', response);
      },
      error: error => {
        console.error('Error:', error);
      }
    }
    );
    //end of API
  }

  resetAll() {
    //API
    this.usersService.resetAll().subscribe({
        next: response => {
        this.usersService.users = [];
          
        console.log('Response from resetAll:', response);
        this.chatService.clearMessages();
      },
      error: error => {
        console.error('Error:', error);
      }
    }
    );
    //end of API
  
  }


  //Create a method in your component to open the popup message:
  openConfirmationDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '300px',
      data: { message: 'Are you sure you want to reset all?' }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Reset all logic goes here
        this.resetAll();
      }
    });
  }


  //Methods for handling key press events

  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
  }

  onShiftEnter(event: KeyboardEvent) {
    const keyboardEvent = event as KeyboardEvent; // Cast event to KeyboardEvent
    if (keyboardEvent.key === 'Enter' && keyboardEvent.shiftKey) {
      event.preventDefault(); // Prevent default behavior of newline insertion
      const textarea = event.target as HTMLTextAreaElement;
      textarea.style.height = 'auto'; // Auto resize
      textarea.style.height = (textarea.scrollHeight + 2) + 'px'; // Adjust height
    }
  }

  showScrollDownButton: boolean = true;

  // Function to handle chat panel scroll event
  onChatScroll(event: Event) {
    const chatPanel = event.target as HTMLElement;
    // Check if the chat panel is scrolled up
    this.showScrollDownButton = chatPanel.scrollTop + chatPanel.clientHeight < chatPanel.scrollHeight;
  }

  // Function to scroll to the top of the chat panel
  scrollToBottom() {
    const chatPanel = document.querySelector('.chat-messages') as HTMLElement;
    if (chatPanel) {
      chatPanel.scrollTop = chatPanel.scrollHeight;
    }
  }
}