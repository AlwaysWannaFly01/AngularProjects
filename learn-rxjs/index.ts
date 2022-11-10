import { Observable } from 'rxjs';
import { of, map } from 'rxjs';

const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

// console.log('just before subscribe');
// observable.subscribe({
//   next(x) {
//     console.log('got value ' + x);
//   },
//   error(err) {
//     console.error('something wrong occurred: ' + err);
//   },
//   complete() {
//     console.log('done');
//   },
// });
// console.log('just after subscribe');

// of(1, 2, 3)
//   .pipe(map((x) => x * x))
//   .subscribe((v) => console.log(`value: ${v}`));

// import { interval } from 'rxjs';

// const observable1 = interval(400);
// const observable2 = interval(300);

// const subscription = observable1.subscribe(x => console.log('first: ' + x));
// const childSubscription = observable2.subscribe(x => console.log('second: ' + x));

// subscription.add(childSubscription);

// setTimeout(() => {
//   // Unsubscribes BOTH subscription and childSubscription
//   subscription.unsubscribe();
// }, 1000);

import { Subject } from 'rxjs';

const subject = new Subject<number>();

subject.subscribe({
  next: v => console.log(`observerA: ${v}`),
});
subject.subscribe({
  next: v => console.log(`observerB: ${v}`),
});

subject.next(1);
subject.next(2);
