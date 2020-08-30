import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RoundComponent } from '../round/round.component';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html'
})

export class TopBarComponent {

  constructor(public dialog: MatDialog) { }


  openRoundDialog(): void {
    const dialogRef = this.dialog.open(RoundComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
