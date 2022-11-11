import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

interface Item {
  title: string;
  href: string;
  content: string;
}

@Component({
  selector: 'app-bottomsheet',
  templateUrl: './bottomsheet.component.html',
  styleUrls: ['./bottomsheet.component.css'],
})
export class BottomsheetComponent implements OnInit {
  list: Item[] = [];

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BottomsheetComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: { source: [] }
  ) {}

  ngOnInit(): void {
    console.log(this.data);
    this.list = this.data.source;
  }
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    this._bottomSheetRef.afterDismissed().subscribe(() => {
      console.log('Bottom sheet has been dismissed.');
    });
    event.preventDefault();
  }
}
