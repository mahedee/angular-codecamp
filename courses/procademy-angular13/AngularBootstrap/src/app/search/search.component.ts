import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchString: string = '';

  changeSearchValue(eventData: Event){
      //console.log((<HTMLInputElement>eventData.target).value);
      this.searchString = (<HTMLInputElement>eventData.target).value;
  }
}
