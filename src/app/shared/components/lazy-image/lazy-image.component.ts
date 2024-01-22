import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
CommonModule
@Component({
  selector: 'shared-lazy-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lazy-image.component.html',
  styles: ``
})
export class LazyImageComponent {

  @Input()
  public url!: string;

  @Input()
  public alt!: string;

  public hasLoaded: boolean = false;

  onLoad() {
    this.hasLoaded = true;
  }

}
