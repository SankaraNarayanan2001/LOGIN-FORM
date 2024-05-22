import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUserName(): string {
    // Implement logic to fetch user name
    return 'John Doe';
  }
}
