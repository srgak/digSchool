import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalComponent } from './journal.component';
import { JournalRoutingModule } from './journal-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SelectDataClassesService } from '../../services/select-data/select-data-classes/select-data-classes.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TablePupilsModule } from '../../shared/components/tables/table-pupils/table-pupils.module';
import { pageName } from '../../helpers/routes';
import { pageNameProvide } from '../../helpers/providers/page-name';

@NgModule({
  declarations: [JournalComponent],
  imports: [
    CommonModule,
    JournalRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    TablePupilsModule,
  ],
  providers: [SelectDataClassesService, pageNameProvide(pageName.Journal)],
})
export class JournalModule {}
