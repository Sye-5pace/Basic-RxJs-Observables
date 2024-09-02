import { Component } from '@angular/core';
import { of } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Basic_Rxjs-Observables';

  // Cold Observable with Rxjs Creational Operators:
  constructor(){
    //Task 1: Creating and Subscribing to an Observable with the 'Of' operator
    const num = of(4,9,1,6,2).subscribe({
      next: (value: number) => console.log('Emits ' + value),
      error: (error) => console.log('Error occur ' + error),
      complete: () => console.log('Observable subscription Completed')
    });


    //Task 2: Creating and Subscribing to an Observable with the 'Of' operator
    // const numArray =
  }

}
