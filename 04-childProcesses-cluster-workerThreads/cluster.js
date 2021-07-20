const cluster = require('cluster');
const cpus = require('os').cpus().length;
const http = require('http');

//================ 🔴 lecture part ==============
/*
if (cluster.isMaster) {
  console.log(`forking for ${cpus} CPUs`);

  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }
  Object.values(cluster.workers).forEach(worker => {
    worker.send(`Hello Worker ${worker.id}`);
  });
} else {
  require('./server');
}

 */

//============= 🔴 coding challenge =========
//1️⃣
/*
Write a function which will
1.Calculate factorial of 1-50 in parallel clusters.
2.and return the main result to main thread and sum up in main thread and print the result on the console.
3.Make sure that you will fork process for 2 processor.
 */
const forks = 2;
const factorial = n => (n ? factorial(n - 1) * n : 1);

if (cluster.isMaster) {
  console.log(`[${process.pid}] Forking for 2 CPUs`);
  for (let i = 0; i < forks; i++) {
    cluster.fork();
  }
} else {
  console.log(`[${process.pid}] ${factorial(50)} ${cluster.worker.id}`);
  process.exit(0);
}
