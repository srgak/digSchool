import { Component } from '@angular/core';
import { AuthFlagService } from './services/storage/auth-flag/auth-flag.service';
import { ModalService } from './services/modal/modal.service';
import { AccessTokenService } from './services/storage/access-token/access-token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(
    public accessToken: AccessTokenService,
    public modal: ModalService
  ) {}
}
