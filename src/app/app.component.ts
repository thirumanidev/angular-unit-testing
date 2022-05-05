import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-unit-testing';

  sumOfTwoNumbers(a: number, b: number): number {
    return a + b + 30;
  }

  ngOnInit() {
    console.log(this.sumOfTwoNumbers(10, 20));    
  }
}
