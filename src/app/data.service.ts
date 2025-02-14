import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs'; // Import lastValueFrom

@Injectable({
  providedIn: 'root'
})
export class DataService {
  api_url = 'http://localhost:8000'; // Ensure the URL has the correct protocol
  private trump_thread_id = ""; // Stores thread ID for Trump
  private trudeau_thread_id = ""; // Stores thread ID for Trudeau
  private turn = "Trudeau"; // Tracks whose turn it is
  private topic="";
  constructor(private http: HttpClient) { }

  async getData(topic: string): Promise<{ thread_id?: string, [key: string]: any }>
   {
    let data = {
       prompt: topic, 
       thread_id: this.turn === "Trump" ? this.trump_thread_id : this.trudeau_thread_id,
       turn:this.turn
       }; // Wrap the topic in an object
      //include message in data payload
    this.topic=topic;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    try 
     {
      const response = await lastValueFrom(this.http.post<{prompt?: string, thread_id?: string,turn?: string }>(this.api_url, data, { headers }));
      console.log('response', response);
       if (this.turn === 'Trump')
        {
          this.trump_thread_id = response.thread_id || this.trump_thread_id;
        }
       else
        {
         this.trudeau_thread_id = response.thread_id || this.trudeau_thread_id;
        }
       this.turn=this.turn=="Trump"?"Trudeau":"Trump";
       return response;
      } 
     catch (error)
      {
       console.error('Error:', error);
       throw error;
      }
  }
  async get_more_data(message:string):Promise<any>
   {
    // message
    //
     try
      {
        // return await this.getData(this.topic);
        //prepare data payload with last debator message and sender details
        // let data = {
        //   prompt: message, 
        //   thread_id: this.turn === "Trump" ? this.trump_thread_id : this.trudeau_thread_id,
        //   turn:this.turn
        //   };
        //change the turns
        //this.turn=this.turn=="Trump"?"Trudeau":"Trump";
        //append the last sender's message to topic variable
        //send post request
        console.log("getting more data and a response for message: ",message)
        return this.getData(message);
      } 
     catch (error)
      {
        console.error('Error fetching more data:', error);
        return null;
      }
   }
  
}
