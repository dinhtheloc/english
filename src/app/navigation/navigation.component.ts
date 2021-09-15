import { Component } from '@angular/core';
import Routers from '../router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  routers = Routers;
  constructor() { }

}
