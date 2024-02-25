import { Injectable } from '@angular/core';
import { ModalData } from '../../helpers/interfaces/modal';
import { ModalAuthComponent } from '../../shared/components/modal/modal-auth/modal-auth.component';
import { ModalErrorComponent } from '../../shared/components/modal/modal-error/modal-error.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public isOpen: boolean = false;
  private componentData: ModalData[] = [
    {
      component: ModalAuthComponent,
      name: 'auth'
    },
    {
      component: ModalErrorComponent,
      name: 'error'
    }
  ];
  public openModal(name: string, data?: unknown): void {
    this.currenctModal = this.componentData.find(item => item.name === name);
    if(this.currenctModal && data) this.currenctModal.data = data;
    this.isOpen = true;
  }
  public currenctModal?: ModalData;
}
