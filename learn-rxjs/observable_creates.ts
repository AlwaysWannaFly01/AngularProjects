import { Observable } from 'rxjs';

function getData() {
  const persons = [
    { name: 'Dave', age: 34, salary: 2000 },
    { name: 'Nick', age: 37, salary: 32000 },
    { name: 'Howie', age: 40, salary: 26000 },
    { name: 'Brian', age: 40, salary: 30000 },
    { name: 'Kevin', age: 47, salary: 24000 },
  ];

  return Observable.create(observer => {
    // 这部分就是subscribe function
    persons.forEach(p => observer.next(p));
    observer.complete();
  });
}

getData().subscribe(
  person => console.log(person.name),
  err => console.error(err),
  () => console.log('Streaming is over.'),
);
