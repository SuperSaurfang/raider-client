import { Component, OnInit } from '@angular/core';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-noacces',
  templateUrl: './noacces.component.html',
  styleUrls: ['./noacces.component.scss']
})
export class NoaccesComponent implements OnInit {

  public shield = faShieldAlt;
  constructor() { }

  ngOnInit() {
  }

}
