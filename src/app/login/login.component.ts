import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  constructor(
    private router:Router
  ) { }

  users: any[] = [];
  userData:any = {
    username: '',
    password: '',
  };
  login: any = {
    username: '',
    password: '',
  }

  ngOnInit(): void {
    const localData = localStorage.getItem('users');
    if (localData != null){
      this.users = JSON.parse(localData);
    }
  }

  onLogin (){
    this.users.push(this.userData);
    localStorage.setItem('users', JSON.stringify(this.users));
    sessionStorage.setItem('loggedUser', this.userData.username);
    this.router.navigateByUrl('/DogBreeds');
  }
}
