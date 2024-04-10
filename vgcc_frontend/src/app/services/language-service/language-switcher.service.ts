// language-switcher.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChildProcess } from 'child_process';

@Injectable({
  providedIn: 'root'
})
export class LanguageSwitcherService {

  constructor(private http: HttpClient) { }

   // Function to run npm script
   runScript(script: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      // Dynamically load npm script file
      const scriptElement = document.createElement('script');
      scriptElement.src = `npm-scripts/${script}.js`; // Adjust the path as needed
      scriptElement.onload = () => {
        console.log(`Script ${script} executed successfully.`);
        resolve();
      };
      scriptElement.onerror = (error) => {
        console.error(`Error occurred while loading script ${script}:`, error);
        reject(error);
      };
      document.body.appendChild(scriptElement);
    });
  }

}
