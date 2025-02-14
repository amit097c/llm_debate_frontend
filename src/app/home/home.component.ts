import { Component,Output,EventEmitter } from '@angular/core';
import { InputComponent } from "../input/input.component";
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { DataTransferService } from '../data-transfer.service';


@Component({
  selector: 'app-home',
  imports: [InputComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  topic = '';

  constructor(private dataService: DataService,
              private dataTransferService: DataTransferService,
              private router: Router
  ) {}

  addTopic(topic: string) {
    this.topic = topic;
  }

  handleAddDebateTopic(topic: string) {
    console.log('Received topic:', topic);
    this.addTopic(topic);
    // this.fetchData(topic);
  }

 isButtonDisabled():boolean
  {
    return this.topic.trim().length==0;
  }

  async fetchData(topic: string) {
    try {
      const response = await this.dataService.getData(topic);
      console.log('Data fetched in home component:', response);
      this.dataTransferService.setDebateData(response);
      this.router.navigate(['/chat']);
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error
    }
  }
}
