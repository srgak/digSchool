import { Injectable } from '@angular/core';
import { ModalData } from 'src/app/helpers/interfaces/modal';
import { ModalAuthComponent } from 'src/app/shared/components/modal/modal-auth/modal-auth.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public isOpen: boolean = false;
  private componentData: ModalData[] = [
    {
      component: ModalAuthComponent,
      name: 'auth'
    }
  ];
  public openModal(name: string): void {
    this.currenctModal = this.componentData.find(item => item.name === name);
    this.isOpen = true;
  }
  public currenctModal?: ModalData;
}
