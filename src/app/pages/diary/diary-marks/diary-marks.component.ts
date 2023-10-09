import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
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
    CommonModule
  ]
})
export class DiaryMarksComponent implements OnInit, OnDestroy {
  public currentMarks!: Observable<MarkValue[] | string>;
  private subs: Subscription = new Subscription();
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
