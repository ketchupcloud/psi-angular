import { Component, OnInit } from '@angular/core';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-project';

  public tag = [];

  constructor(public testService: TestService) {}
  ngOnInit(){
    this.testTag();
  }

  testTag(){
    this.testService.getTest().subscribe( (res) => {
      this.tag = res;
    });
  }
}
