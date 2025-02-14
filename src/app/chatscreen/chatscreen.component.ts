import { Component,Input } from '@angular/core';
import { DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-chatscreen',
  templateUrl: './chatscreen.component.html',
  styleUrl: './chatscreen.component.css'
})
export class ChatscreenComponent {
 
  // messages = [
  //   { sender: 'Trump', text: 'Hi there! How are you?' },
  //   { sender: 'Trudeau', text: 'I’m doing great! How about you?' },
  //   { sender: 'Trump', text: 'Fantastic. Let’s talk politics!' },
  //   { sender: 'Trudeau', text: 'Sure, let’s keep it civil.' },
  // ];

  constructor(private dataTransferService: DataTransferService){}
  debateData: any;
  messages: { sender: string, text: string }[] = [];

  async ngOnInit() {
    this.debateData = this.dataTransferService.getDebateData();
    console.log('Debate data in ChatScreenComponent:', this.debateData);
    
    if (this.debateData && this.debateData.turn && this.debateData.message)
       {
          this.messages.push({
            sender: this.debateData.turn, 
            text: this.debateData.message 
          });
          let sender_message=this.debateData.message
          let count=0;
          while(true)
            {
              try
                {
                  const response=await this.dataTransferService.get_more_data(sender_message);
                  if(!response)break;
                  this.messages.push({
                    sender:response.turn,
                    text:response.message,
                  })
                  sender_message= response.message;
                  count +=1;
                  console.log("count ",count)
                  if (count == 3)
                    {
                      sender_message += "---conclude debate---";
                      console.log(" inside append count ",count)
                    }
                  if(count == 4)
                    {
                      sender_message += "---conclude debate---";
                      console.log(" inside append count ",count)
                    }  
                  if(count== 5)break;
                }
              catch (error)
                {
                  console.error('Error in chat loop:', error);
                  break;
                }
            } 
      // follow up conversation
      /* define a function in dataTransferService-> get_more_data()
         def get_more_data(this.debateData.message,(topic))
          {
            return data_service.fetchData(topic)
          }
        ------
        while true:
          this.messages.push({
          sender:this.debateData.turn,
          text:this.debateData.message})

       */  
    } 
    else
     {
      console.error('Debate data is not in the expected format:', this.debateData);
     }
  }
   
}