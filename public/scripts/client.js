var app = angular.module('angApp', []);

app.controller('AngController', function() {
  console.log('AngController loaded');

  var ang = this;

  ang.employees = [];
  ang.totalSalary = [0];
  ang.monthlyExpenditures = [0];

  ang.addEmployee = function(firstName, lastName, id, title, salary) { // pass a param
    ang.employees.push({name: firstName + ' ' +lastName, 'ID': id, 'Job Title': title, 'Annual Salary': salary}); // make our own object
    ang.totalSalary[0] += Number(salary);
    ang.monthlyExpenditures = [(ang.totalSalary[0] / 12).toFixed(2)];
  };

  ang.delEmployee = function(index) {
    ang.totalSalary[0] -= ang.employees[index]['Annual Salary'];
    ang.employees.splice(index, 1);
    ang.monthlyExpenditures = [(ang.totalSalary[0] / 12).toFixed(2)];
  };

});
