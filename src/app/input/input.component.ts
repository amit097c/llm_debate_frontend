import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'] // Fix styleUrls property
})
export class InputComponent {
  @Output() // Mark a property as an output property, that parent element can listen to
  addDebateTopicEmitter = new EventEmitter<string>(); // Instantiate an event emitter

  // add_topic(topic: string)
  onInputChange(topic: string) 
  {
     if (!topic) return;
     this.addDebateTopicEmitter.emit(topic);
   }
   
}
