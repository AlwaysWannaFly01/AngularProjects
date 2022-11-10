import { from } from 'rxjs';

const persons = [
  { name: 'Dave', age: 34, salary: 2000 },
  { name: 'Nick', age: 37, salary: 32000 },
  { name: 'Howie', age: 40, salary: 26000 },
  { name: 'Brian', age: 40, salary: 30000 },
  { name: 'Kevin', age: 47, salary: 24000 },
];
console.log('my typescript eslint project');

let index = 1;

from(persons).subscribe({
  next: person => {
    console.log(index++, person);
  },
  error: err => console.log(err),
  complete: () => {
    console.log('Streaming is over.');
  },
});
