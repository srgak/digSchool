import { Component, Type } from "@angular/core";

export interface ModalData {
  component: Type<Component>;
  data?: unknown;
  name: string;
}