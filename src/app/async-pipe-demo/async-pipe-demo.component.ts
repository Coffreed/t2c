import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

export interface Users {
  id: Number;
  first_name: String;
  last_name: String;
}

@Component({
  selector: 'app-async-pipe-demo',
  templateUrl: './async-pipe-demo.component.html',
  styleUrls: ['./async-pipe-demo.component.css']
})
export class AsyncPipeDemoComponent implements OnInit {
  users$: Observable<any> | undefined;
  imageUrl:string;
  href = 'https://reqres.in/api/users?page=2';

  title = 'Asynch Pipe Demo';
  userDisplayName = sessionStorage.getItem('loggedUser');

  greeting: Promise<string>|null = null;
  image: Promise<string>|null = null;
  arrived: boolean = false;

  private resolve: Function|null = null;
  constructor(
    private router:Router,
    private http: HttpClient
  ) {
    this.imageUrl = '../../assets/images/lapinkoira.jpg'
    this.reset();
   }

  ngOnInit() {
    this.fetchData();
  }
  fetchData(){
    this.users$ = this.http
    .get<any>(this.href)
    .pipe(map((results) => results.data));
  }
  getImage(){
    if (this.arrived = false){
      this.image = new Promise((resolve, reject) => {
        resolve(this.imageUrl = '');
      });
    } else {
      this.arrived = false;
      this.image = new Promise((resolve, reject) => {
        resolve(this.imageUrl);
      });
    }
  }
  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => {
      this.resolve = resolve;
    });
  }
  clicked() {
    if (this.arrived) {
      this.reset();
      this.imageUrl;
    } else {
      this.resolve!('hi there!');
      this.getImage();
      this.arrived = true;
    }
  }
  logout(){
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigateByUrl('/LogIn');
  }
}
