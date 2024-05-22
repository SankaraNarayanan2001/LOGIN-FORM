import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loggedInEmail: string = ''; // Ensure this property is declared
  username: string = ''; // Declare property to store username

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.loggedInEmail = params['email'];
      console.log(this.loggedInEmail);
      
      // Extract username from email
      this.username = this.extractUsername(this.loggedInEmail);
    });
  }

  // Function to extract username from email
  private extractUsername(email: string): string {
    return email.split('@')[0]; // Split email at "@" and get the first part
  }
}
