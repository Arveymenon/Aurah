import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { async } from "q";


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToLoginPage(){
    this.router.navigateByUrl('/login');
  }

  async goToRegisterPage() {
    this.router.navigateByUrl('/register');
  }

}
