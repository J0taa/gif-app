import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gif.interfaces';
import { GifCardComponent } from '../gif-card/gif-card.component';

@Component({
  selector: 'gifs-card-list',
  standalone: true,
  imports: [CardListComponent, GifCardComponent],
  templateUrl: './card-list.component.html',
})
export class CardListComponent {

  @Input()
  public gifs: Gif[] = [];
}
