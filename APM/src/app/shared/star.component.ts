import { Component, Input, OnChanges} from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})


export class StarComponenent implements OnChanges {
@Input() rating: number =0;
cropWidth: number= 75;

ngOnChanges(): void {
    this.cropWidth = this.rating * 75/5;
}

}