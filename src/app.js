/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#pick").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let suj = Math.floor(Math.random() * who.length);
  let verb = Math.floor(Math.random() * action.length);
  let obj = Math.floor(Math.random() * what.length);
  let time = Math.floor(Math.random() * when.length);

  return who[suj] + " " + action[verb] + " " + what[obj] + " " + when[time];
};
