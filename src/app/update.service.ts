import { Injectable } from "@angular/core";
import {SwUpdate} from "@angular/service-worker";
import { interval } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Injectable({
    providedIn: "root"
})
export class UpdateService {
    constructor(public updates: SwUpdate, private snackbar: MatSnackBar) {
        

        if (updates.isEnabled) {
          interval(6 * 60 * 60).subscribe(() => updates.checkForUpdate()
            .then(() => console.log('checking for updates')));
        }
      }
    
      public checkForUpdates(): void {
        this.updates.available.subscribe(event => this.promptUser());
      }
    
      private promptUser(): void {
        
        this.updates.activateUpdate().then(() => {
            const snack = this.snackbar.open('New version of the app is available', 'Reload');
            snack
                .onAction()
                .subscribe(() => {
                window.location.reload();
                });
        }); 
      }
}
