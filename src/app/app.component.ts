import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  clicks: number = 0;

  willChange(increasedMotherFucker) {

    if(increasedMotherFucker == true) {
      this.clicks++;
    } else {
      this.clicks--;
    }

  }
}
