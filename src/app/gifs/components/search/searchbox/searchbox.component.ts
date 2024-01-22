import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  standalone: true,
  imports: [SearchboxComponent],
  template: `
    <h5>Buscar:</h5>
    <input type="text"
    class="form-control"
    placeholder="Buscar Gifs..."
    (keyup.enter)="searchTag()"
    #txtTagInput
    >
  `,
})
export class SearchboxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private giftService: GifsService) { }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.giftService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
