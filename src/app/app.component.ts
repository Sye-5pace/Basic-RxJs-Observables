import { Component } from '@angular/core';
import { concat, from, interval, of, take, throwError } from 'rxjs';


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
    // Task 1: Creating and Subscribing to an Observable with the 'Of' operator
    const num$ = of(4,9,1,6,2)
    num$.subscribe({
      next: (value: number) => console.log('Emits ' + value),
      error: (error) => console.log('Error occur ' + error),
      complete: () => console.log('Observable subscription Completed')
    });


    //Task 2: Working with 'From' operator on array values of colors then
    // Subscribing to an Observable to log to the console
    const colorArray$ = from(['#965D69','#daa631','#BC7484','#747474','#5D6996'])
    colorArray$.subscribe({
      next: (color: string) => console.log('Emits color: '+ color),
      error: (error) => console.log('Error occur'+ error),
      complete: () => console.log('Observable subscription Completed')
    });


    //Task 3: Using 'interval' operator together with 'pipe' which allows for operations of an Observable
    //  'take' operator allow five values
    // to be emitted at every interval of 1500, subscribes to an observable logging values to the console
    const interval$ = interval(1500).pipe(
      take(5)
    )
    interval$.subscribe({
      next: (value) => console.log(`Emits value: ${value}, Timestamp: ${new Date().toLocaleTimeString()}`),
      complete: () => console.log('Observable subscription completed')
    })


    //Task 4: Combining Observables using concat operator
    // which consists of observables created with of operator and From operator
    const obs1$ = of(9,5,2,4,37,0)
    const obs2$ = from([9,5,2,4,37,0])
    const combinedObservables$ = concat(obs1$, obs2$)
    combinedObservables$.subscribe({
      next: (value: number) => console.log('Emits: '+ value),
      error: (error) => console.log('Error occur'+ error),
      complete: () => console.log('Observable subscription completed ')
    })


    //Task 5: Handling Errors with 'ThrowError' operator
    const valuesObs$ = of(3,6,2,4,37,0)
    const errorMsg$ = throwError(()=> new Error('An Error occurred while emitting'))
    const combinedErrorObservables$ = concat(valuesObs$, errorMsg$)
    combinedErrorObservables$.subscribe({
      next: (value: number) => console.log('Emits:  '+ value),
      error: (error) => console.log('Error occurs:  '+ error.message),
      complete: () => console.log('Observable subscription completed')
    })
  }

}
