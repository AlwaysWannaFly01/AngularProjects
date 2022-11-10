import { Observable, Subject } from 'rxjs';

const stream$ = new Observable(subscriber => {
  setTimeout(() => {
    subscriber.next([1, 2, 3]);
  }, 500);
  setTimeout(() => {
    subscriber.next({ a: 1000 });
  }, 1000);
  setTimeout(() => {
    subscriber.next('end');
  }, 3000);
  setTimeout(() => {
    subscriber.complete();
  }, 4000);
});

// // 记录时间
// const now = new Date().getTime();
// // 启动流
// const subscription1 = stream$.subscribe({
//   complete: () => console.log(new Date().getTime() - now, 'done'),
//   next: v => console.log(new Date().getTime() - now, 'ms stream1', v),
//   error: () => console.log('error'),
// });

// //  延时1s后，启动流
// setTimeout(() => {
//   const subscription2 = stream$.subscribe({
//     next: v => console.log(new Date().getTime() - now, 'ms stream2', v),
//     complete: () => console.log(new Date().getTime() - now, 'ms stream2 done'),
//   });
// }, 1000);

// setTimeout(() => {
//   subscription1.unsubscribe();
// }, 1000);

const subject = new Subject();

// 订阅一个observer
subject.subscribe(v => console.log('stream 1', v));
// 再订阅一个observer
subject.subscribe(v => console.log('stream 2', v));
// 延时1s再订阅一个observer
setTimeout(() => {
  subject.subscribe(v => console.log('stream 3', v));
}, 1000);
// 产生数据1
subject.next(1);
// 产生数据2
subject.next(2);
// 延时3s产生数据3
setTimeout(() => {
  subject.next(3);
}, 3000);
