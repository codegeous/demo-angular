import { Component } from '@angular/core';
import {UpdateService} from "./update.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youtube-tutorial';
  constructor(private sw: UpdateService){
    this.sw.checkForUpdates();
  }
}
