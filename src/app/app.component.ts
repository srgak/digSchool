import { Component } from '@angular/core';
import { AuthFlagService } from './services/storage/auth-flag/auth-flag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(
    public authFlag: AuthFlagService
  ) {}
}
