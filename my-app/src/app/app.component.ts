import { Component } from '@angular/core';
import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'my-app';
  users: any;
  constructor(private usersData : UserDataService){
    usersData.users().subscribe((data)=>{
     // console.warn("data", data);
      this.users =data;
    }
        
    );

  }
}
