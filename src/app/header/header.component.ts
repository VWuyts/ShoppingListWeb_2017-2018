import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  pageTitle = 'Boodschappenlijst';

  constructor(private title: Title, private router: Router) { }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
  }

  onLogin() {
    this.router.navigate(['/login']);
  }

  onRegister() {
    this.router.navigate(['/registreren']);
  }
}
