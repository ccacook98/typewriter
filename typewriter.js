const sentence = "hello there from lighthouse labs";

let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50; //add 50ms to the delay for the next iteration
}
setTimeout(() => { process.stdout.write('\n'); }, delay); //finish off by printing a new line
