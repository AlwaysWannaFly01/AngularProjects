import { from, map, reduce } from 'rxjs';

const persons = [
  { name: 'Dave', age: 34, salary: 2000 },
  { name: 'Nick', age: 37, salary: 32000 },
  { name: 'Howie', age: 40, salary: 26000 },
  { name: 'Brian', age: 40, salary: 30000 },
  { name: 'Kevin', age: 47, salary: 24000 },
];

from(persons)
  .pipe(
    map(p => p.salary),
    reduce((total, current) => total + current, 0),
  )
  .subscribe({
    next: totalSalary => console.log(`Total salary is ${totalSalary}`),
    error: err => console.log(err),
    complete: () => {
      console.log('complete');
    },
  });
