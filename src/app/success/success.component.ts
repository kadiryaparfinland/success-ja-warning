import { Component } from '@angular/core';
import { faThumbsUp, faWarning } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {
  faThumbsUp = faThumbsUp;
  faWarning = faWarning;
}
