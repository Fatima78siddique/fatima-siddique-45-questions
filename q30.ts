const usernames = ["sajal", "Eric", "rahat", "anmol", "laiba", "john"];

for (const username of usernames) {
  if (username === "sajal") {
    console.log(`Hello ${username}, would you like to see a status report?`);
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}