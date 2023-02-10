import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-started-page',
  templateUrl: './get-started-page.component.html',
  styleUrls: ['../../styles.css'],
  encapsulation: ViewEncapsulation.None
})
export class GetStartedPageComponent implements OnInit {
  constructor(
    private router:Router
  ) { }
  title = 'Get Started';
  userDisplayName = sessionStorage.getItem('loggedUser');
  ngOnInit() {
    this.userDisplayName;
  }
  logout(){
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigateByUrl('/LogIn');
  }
}
