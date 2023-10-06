import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AccessTokenService } from './services/storage/access-token/access-token.service';
import { ModalService } from './services/modal/modal.service';
import { RouterModule } from '@angular/router';

describe('AppComponent', () => {
  let component: AppComponent;
  let fiixture: ComponentFixture<AppComponent>;
  let accessTokenService;
  let modalService;

  beforeEach(() => {
    accessTokenService = {
      get prop(): string {
        return 'test';
      }
    };
    modalService = {
      isOpen: false
    };

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        RouterModule
      ],
      providers: [
        {
          provide: AccessTokenService,
          useValue: accessTokenService
        },
        {
          provide: ModalService,
          useValue: modalService
        }
      ]
    });

    fiixture = TestBed.createComponent(AppComponent)
  });

  it('Создать компонент', () => {
    component = fiixture.componentInstance;
    expect(component).toBeDefined();
  });
});
