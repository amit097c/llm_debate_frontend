import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  trumpResponses: string[] = [];
  trudeauResponses: string[] = [];
  userTopic: string = '';

  addResponse(speaker: 'trump' | 'trudeau', response: string) {
    if (speaker === 'trump') {
      this.trumpResponses.push(response);
    } else {
      this.trudeauResponses.push(response);
    }
  }
}
