import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']

})

export class StarComponent implements OnChanges{

    // declare a input property which is bind with DOM
    // input decoretor takes input from container
    @Input() rating : number = 0;
    cropWidth: number = 75;

    // declare an output property to send output to its container
    // output decorator
    @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();

    ngOnChanges(changes: SimpleChanges): void {
        this.cropWidth = this.rating * 75/5;
    }

    onClick(): void{
        // console.log(`The rating ${this.rating} was clicked!`);
        // rating clicked use ad ouput property
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}