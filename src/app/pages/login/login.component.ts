import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // The form group defines the fields used in the form
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  // Inject the router so we can navigate after a successful login
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  public submit() {
    // Use the form value to do authentication
    console.log(this.form.value);
    // Navigate after successful login
    return this.router.navigate(['/']);
  }
}
