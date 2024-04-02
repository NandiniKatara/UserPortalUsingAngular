import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllUsersList } from '../allUsersList';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  users: AllUsersList[] = [];

  constructor(private router: Router, private userDataService: UserDataService) { }
  
  ngOnInit() {
    this.userDataService.users().subscribe((data: AllUsersList[]) => {
      this.users = data;
    });
  }

  navigateToDetails(userId: number) {
    const user = this.users.find(u => u.id === userId);
    if (user) {
      console.log(user);
    }

    this.router.navigate(['/user-details', userId]);
  }
}