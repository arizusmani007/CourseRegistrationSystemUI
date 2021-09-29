import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'CRS-Demo';
  clickMessage: String = 'Status of Trainee';

  onClickMe() {

    // here we are creating external event to change the message
    console.log('event fired !!--->');
    this.clickMessage = ' Training! is Active ';

  }
}
