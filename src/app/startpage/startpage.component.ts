import { Component, OnInit } from '@angular/core';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.scss']
})
export class StartpageComponent implements OnInit {

  public signIn = faSignInAlt;
  public userPlus = faUserPlus;
  constructor() { }

  ngOnInit() {
  }

  public login() {

  }
}
