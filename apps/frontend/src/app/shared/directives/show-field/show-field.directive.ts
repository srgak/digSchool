import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { FieldData } from '../../../helpers/interfaces/field';

@Directive({
  selector: '[uiShowField]',
})
export class ShowFieldDirective {
  @Input('uiShowField') set show(data: FieldData) {
    this.viewContrainer.clear();

    if (data.tagList.includes(data.currentTag)) {
      this.viewContrainer.createEmbeddedView(this.templateRef);
    }
  }
  constructor(
    private readonly templateRef: TemplateRef<any>,
    private readonly viewContrainer: ViewContainerRef,
  ) {}
}
