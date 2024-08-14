let maang = {
  companyName: "Google",
  sallary: "500k",
};
// let employe = {
//   id: 12334,
//   task: function () {
//     console.log("Task assined");
//   },
// };
// employe.__proto__ = maang;

// console.log(employe.__proto__);

//? Using factory function:-
let employe = Object.create(maang, { taskAssined: { value: 2 } });
console.log(employe.taskAssined);
