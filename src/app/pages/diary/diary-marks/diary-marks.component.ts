import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { MarkValue } from 'src/app/helpers/interfaces/marks';
import { MarksDataService } from 'src/app/services/marks/marks.service';

@Component({
  selector: 'app-diary-marks',
  templateUrl: './diary-marks.component.html',
  styleUrls: ['./diary-marks.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class DiaryMarksComponent implements OnInit, OnDestroy {
  public currentMarks!: Observable<MarkValue[] | string>;
  private subs: Subscription = new Subscription();
  public columnList: string[] = [
    'date',
    'value',
    'type',
    'description'
  ];
  constructor(
    private activeRoute: ActivatedRoute,
    public marksData: MarksDataService
  ) {}

  ngOnInit(): void {
    this.subs.add(
      this.activeRoute.params
        .subscribe(data => {
          this.marksData.getCurrentMarks(data['id']);
        })
    );
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
