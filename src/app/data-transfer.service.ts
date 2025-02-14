import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService
 {
    constructor(private dataService: DataService) {}
    private debateData: any | undefined;
    setDebateData(data:any)
     {
      this.debateData=data;
     }
    getDebateData()
     {
      return this.debateData;
     } 
    async get_more_data(message:string): Promise<any>
     {
      try
       {
        return await this.dataService.get_more_data(message);
       } 
      catch (error)
       {
        console.error('Error fetching more data:', error);
        return null;
       }
    } 

 }
