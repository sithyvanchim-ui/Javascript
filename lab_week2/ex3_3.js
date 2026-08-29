//Before:
let age = 20;
let canVote;
if (age >= 18) {
  canVote = true;
} else {
  canVote = false;
}
console.log("Canvote:",canVote);

// now
let age = 20;
let canVote =(age >=18) ? true : false;
console.log("Canvote:",canVote);