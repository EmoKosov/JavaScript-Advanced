function solve() {
   document.getElementById('btnSend').addEventListener('click', (e) => {
      const restaurants = JSON.parse(document.getElementsByTagName('textarea')[0].value);
      const bestRest = bestRestaurant(restaurants);
      document.querySelector('#bestRestaurant p').textContent = printBestRest(bestRest);
      document.querySelector('#workers p').textContent = printBestWorkers(bestRest);
   });

   function bestRestaurant(arr) {
      console.log(arr);
      const result = arr
         .map(str => str.split(' - '))
         .sort((a, b) => {
            if (a[0] == b[0]) {
               a[1] += ', ' + b[1];
               b.length = 0;
            }
         })
         .filter(arr => arr.length > 0)
         .map(([name, workers]) => {
            const workersAndSalaries = workers
               .split(', ')
               .map(line => line.split(' '))
               .sort((a, b) => b[1] - a[1])
               .filter(n => !isNaN(n[1]));
            const salaries = workersAndSalaries.map(line => Number(line[1]));
            const avgSalary = salaries.reduce((acc, cur, inx, arr) => acc + (cur / arr.length), 0);
            const topSalary = salaries[0];
            return [name, avgSalary, topSalary, workersAndSalaries];
         })
         .sort((a, b) => b[1] - a[1])[0];
  
      return { name: result[0], avgSalary: result[1], topSalary: result[2], topWorkers: result[3] };
   }

   function printBestRest(obj) {
      return `Name: ${obj.name} Average Salary: ${(obj.avgSalary).toFixed(2)} Best Salary: ${(obj.topSalary).toFixed(2)}`;
   }

   function printBestWorkers(obj) {
      return obj.topWorkers.map(([name, salary]) => `Name: ${name} With Salary: ${Number(salary)}`).join(' ');
   }
}