import { Injectable } from '@angular/core';
import { ModalData } from '../../helpers/interfaces/modal';
import { ModalAuthComponent } from '../../shared/components/modal/modal-auth/modal-auth.component';
import { ModalErrorComponent } from '../../shared/components/modal/modal-error/modal-error.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public isOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private readonly componentData: ModalData[] = [
    {
      component: ModalAuthComponent,
      name: 'auth',
    },
    {
      component: ModalErrorComponent,
      name: 'error',
    },
  ];
  public currenctModal?: ModalData;

  public openModal(name: string, data?: unknown): void {
    this.currenctModal = this.componentData.find((item) => item.name === name);

    if (this.currenctModal && data) this.currenctModal.data = data;

    this.isOpen$.next(true);
  }
  public closeModal(): void {
    this.isOpen$.next(false);
  }
}
