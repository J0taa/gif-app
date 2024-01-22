import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gif.interfaces';
import { LazyImageComponent } from '../../../shared/components/lazy-image/lazy-image.component';

@Component({
  selector: 'gif-card',
  standalone: true,
  imports: [LazyImageComponent],
  templateUrl: './gif-card.component.html',
  styles: ``
})
export class GifCardComponent {

  @Input()
  public gif!: Gif;

}
