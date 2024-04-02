import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AllUsersList } from './allUsersList';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  users(): Observable<AllUsersList[]> {
    return this.http.get<AllUsersList[]>(this.url);
  }

  getUserById(userId: number): Observable<AllUsersList> {
    return this.http.get<AllUsersList>(`${this.url}/${userId}`);
  }
}
