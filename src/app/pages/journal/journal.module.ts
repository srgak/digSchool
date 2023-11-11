import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalComponent } from './journal.component';
import { JournalRoutingModule } from './journal-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SelectDataClassesService } from 'src/app/services/select-data/select-data-classes/select-data-classes.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TablePupilsModule } from 'src/app/shared/components/tables/table-pupils/table-pupils.module';
import { breadcrumbsProvide } from 'src/app/helpers/providers/breadcrumbs/breadcrumbs';
import { pageBreadcrumbs } from 'src/app/helpers/routes';



@NgModule({
  declarations: [JournalComponent],
  imports: [
    CommonModule,
    JournalRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    TablePupilsModule
  ],
  providers: [
    SelectDataClassesService,
    breadcrumbsProvide(pageBreadcrumbs.journal)
  ]
})
export class JournalModule { }
