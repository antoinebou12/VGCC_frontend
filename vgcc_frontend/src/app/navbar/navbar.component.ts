import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';  // Import MatSelectModule
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { LanguageSwitcherService } from '../services/language-service/language-switcher.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  selectedItem: string = '';

  constructor(private router: Router, private languageSwitcherService: LanguageSwitcherService) { }  // Inject Router

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) { // Check for NavigationEnd event
        this.selectedItem = event.urlAfterRedirects; // Update selectedItem
      }
    });
  }

    // Basically my idea was to run a function that turns off the app to rebuild it in the selected language
    // pretty crazy I recognize, nonetheless it was a good idea to try it out.
    // this thing did not work haha, I tried to add this: (valueChange)="rebuildApp($event)" 
    // in the mat-select tag in the html file but it did not work
    // I think that the rebuilding of the applicaction is responsability of the server once this app
    //gets deployed. I will leave this here for now, but I will not use it.
    // Function to rebuild application in the selected language
    rebuildApp(language: string): void {
      let script: string;
      alert(language);
  
      // Determine which npm script to run based on selected language
      switch (language) {
        case 'en':
          script = 'start';
          break;
        case 'fr':
          script = 'start:fr';
          break;
        case 'es':
          script = 'start:es';
          break;
        default:
          // Default to English if language is not recognized
          script = 'start:en';
          break;
      }
  
      // Call npm script using LanguageSwitcherService
      this.languageSwitcherService.runScript(script)
        .then(() => {
          console.log('Application rebuilt successfully.');
        })
        .catch((error) => {
          console.error('Error occurred while rebuilding application:', error);
        });
    }
}
