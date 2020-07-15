import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  user: any;

  constructor() { }

  ngOnInit(): void {
    //load userInfo from browser Local Storage
    this.user = JSON.parse(localStorage.getItem('userInfo'));
  }

}
