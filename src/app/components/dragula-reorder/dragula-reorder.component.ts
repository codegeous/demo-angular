import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-dragula-reorder',
  templateUrl: './dragula-reorder.component.html',
  styleUrls: ['./dragula-reorder.component.css']
})
export class DragulaReorderComponent implements OnInit {

  tasks = [];
  
  constructor(private dragulaService:DragulaService) { 
    dragulaService.createGroup('TASKS', {
      moves: (el, container, handle)=>{
        return handle.classList.contains('handle');
      }
    })
  }

  ngOnInit() {
    this.tasks.push({
      text: "I don't want to be in first place.",
      color: "#34495e"
    });
    this.tasks.push({
      text: "I want to be in last place.",
      color: "#c0392b"
    });
    this.tasks.push({
      text: "I want to be in first place.",
      color: "#16a085"
    });
  }
  
}