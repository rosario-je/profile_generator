const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer1) => {
  rl.question('What is an activity you like doing? ', (answer2) => {
    rl.question('What do you listen to while doing that? ', (answer3) => {
      rl.question('Which meal is your favourite? ', (answer4) => {
        rl.question('What is your favourite thing to eat for that meal? ', (answer5) => {
          rl.question('Which sport is your absolute favourite? ', (answer6) => {
            rl.question('In a few words, tell us what you are amazing at! ', (answer7) => {
              console.log(`My name is ${answer1}.`)
              console.log(`I like to ${answer2}`)
              console.log(`I listen to ${answer3}`)
              console.log(`My favorite meal is ${answer4}`)
              console.log(`My favorite thing to eat for that meal is ${answer5}`)
              console.log(`My absolute favorite sport is ${answer6}`)
              console.log(`I am amazing at ${answer7}`)
            });
          });
        });
      });
    });
  });
});

