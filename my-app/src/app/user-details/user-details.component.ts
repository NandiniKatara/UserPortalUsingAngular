import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from '../user-data.service';
import { AllUsersList } from '../allUsersList';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  user: AllUsersList | undefined;
  private subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userDataService: UserDataService
  ) { }

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      const id = parseInt(userId, 10);
      this.subscription.add(
        this.userDataService.getUserById(id).subscribe((data: AllUsersList) => {
          this.user = data;
        })
      );
    }
  }

  onClick() {
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
