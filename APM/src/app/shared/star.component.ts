import { Component, OnChanges} from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})


export class StarComponenent implements OnChanges {
rating: number =4;
cropWidth: number= 75;

ngOnChanges(): void {
    this.cropWidth = this.rating * 75/5;
}

}