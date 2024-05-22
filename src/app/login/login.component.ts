import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  errorMessage: string = '';
  @Output() loggedInUser: EventEmitter<string> = new EventEmitter<string>();

  constructor(private fb: FormBuilder, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      // Simulate authentication with hardcoded credentials
      const email = this.loginForm.get('email')!.value;
      const password = this.loginForm.get('password')!.value;

      // Hardcoded credentials (replace with actual authentication logic)
      const validEmail = 'test@example.com';
      const validPassword = 'password';

      if (email === validEmail && password === validPassword) {
        // Successful login
        this.errorMessage = '';
        this.loggedInUser.emit(email); // Emit the email of the logged-in user
        alert('Login successful!');
        this.router.navigate(['/dashboard'], { queryParams: { email: email } });
      } else {
        // Invalid credentials
        this.errorMessage = 'Invalid email or password.';
      }
    }
  }
}
