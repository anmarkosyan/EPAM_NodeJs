const fs = require('fs');
const crypto = require('crypto');

console.log(require.resolve('fs')); //for checking if such module exist

//1️⃣
/*
const start = new Date();

console.log('------ Start -------');

setTimeout(() => console.log('Timer 1'), 4000);
setImmediate(() => console.log('Immediate 1'));

process.nextTick(() => console.log('Outside next tick'));

process.env.UV_THREADPOOL_SIZE = '2';

fs.readFile('test-file.txt', 'utf-8', (err, data) => {
  console.log('I/O finished');

  setTimeout(() => console.log('Timer 2'), 0);
  setTimeout(() => console.log('Timer 3'), 3000);
  setImmediate(() => console.log('Immediate 2'));

  process.nextTick(() => console.log('Inside next tick'));

  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(new Date() - start, 'password encrypted');
  });
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(new Date() - start, 'password encrypted');
  });
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(new Date() - start, 'password encrypted');
  });
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(new Date() - start, 'password encrypted');
  });
});

console.log('------- End of top-level code-------');
 */

