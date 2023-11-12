import { Component, Input } from '@angular/core';
import { GoogleMarker } from 'src/app/interfaces/google-marker';
import { ConstantsService } from 'src/app/services/constants.service';

declare let google: any;

@Component({
    selector: 'app-submissions-map',
    templateUrl: './submissions-map.component.html',
    styleUrls: ['./submissions-map.component.scss'],
})
export class SubmissionsMapComponent {
    @Input() markers: Array<GoogleMarker> = [];

    constructor(private constantService: ConstantsService) {
        this.markers = this.constantService.getMarkers();
        setTimeout(() => {
            this.intializeMap();
        }, 1000);
    }

    intializeMap() {
        const elm = document.getElementById('map');
        const position = this.markers[0];
        const mapOptions = {
            center: position,
            zoom: 16,
        };
        const map: any = new google.maps.Map(elm, mapOptions);
        for (let i = 1; i < this.markers.length; i += 1) {
            const markerOption = {
                position: this.markers[i],
                map: map,
                icon: 'https://s3.amazonaws.com/files.hello360.solutions/zenduforms-map-pin.svg',
            };
            new google.maps.Marker(markerOption);
        }
    }
}
