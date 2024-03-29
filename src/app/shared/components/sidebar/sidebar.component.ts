import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent {


  constructor(private gifsService: GifsService) {

  }

  get tags() {
    return this.gifsService.tagsHistory;
  }

  buscarGif(tag: string): void {

    this.gifsService.searchTag(tag)
  }

}
