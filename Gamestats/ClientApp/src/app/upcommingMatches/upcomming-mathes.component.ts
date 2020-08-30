import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion'
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { IUpcommingMatch } from '../models/Match';

@Component({
  selector: 'upcomming-mathes',
  templateUrl: './upcomming-mathes.component.html'
})

export class UpcommingMathesComponent {
  panelOpenState = false;

  myUpcommingMatches: IUpcommingMatch[] = [
    { game: { name: "Lol", id: null }, id: null, date: new Date( new Date().getTime() + (3600 *24) )},
    { game: { name: "OneNight", id: null }, id: null, date: new Date(new Date().getTime() + (3600 * 24*2)) },
    { game: { name: "FiFa", id: null }, id: null, date: new Date(new Date().getTime() + (3600 * 24 * 3)) }
  ]
    
  upcommingMatches: IUpcommingMatch[] = [
    { game: { name: "Lol", id: null }, id: null, date: new Date(new Date().getTime() + (3600 * 2)) },
    { game: { name: "OneNight", id: null }, id: null, date: new Date(new Date().getTime() + (3600 * 24 * 7)) },
    { game: { name: "Lol", id: null }, id: null, date: new Date(new Date().getTime() + (3600 * 7)) }
  ]

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
