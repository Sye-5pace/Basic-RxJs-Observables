import { Component } from '@angular/core';
import { from, interval, of, take } from 'rxjs';


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


    //Task 2: Working with 'From' operator:
    const colorArray = from(['#965D69','#daa631','#BC7484','#747474','#5D6996'])
    .subscribe({
      next: (color: string) => console.log('Emits color: '+ color),
      error: (error) => console.log('Error occur'+ error),
      complete: () => console.log('Observable subscription Completed')
    });

    //Task 3: Using interval operator:
    const interval$ = interval(1000).pipe(
      take(5)
    )
    interval$.subscribe({
      next: (value) => console.log(`Emits value: ${value}, Timestamp: ${new Date().toLocaleTimeString()}`),
      complete: () => console.log('Observable completed')
    })
  }

}
