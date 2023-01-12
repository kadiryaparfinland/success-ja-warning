import { Component } from '@angular/core';
import { faThumbsUp, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent {
  faThumbsUp = faThumbsUp;
  faSkullCrossbones = faSkullCrossbones;
}
