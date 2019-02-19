import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

/**
 * This is a component decorator.
 * This means this class is a component
 */
@Component({
    selector: "pm-star",
    templateUrl: "./star.component.html",
    styleUrls: ["./star.component.css"]
})

export class StarComponent implements OnChanges {
 
    @Input() rating: number;
    starWidth: number;
    
  @Output() ratingClicked: EventEmitter<string> =
  new EventEmitter<string>();


    ngOnChanges(): void {
       this.starWidth = this.rating * 86/5;
    }

    onClick(): void{
        
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);

    }

}