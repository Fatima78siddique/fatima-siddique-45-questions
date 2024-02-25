//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
// Define animals with a common characteristic (loyalty)
const loyalAnimals: string[] = ["Dog", "Cat", "lion"];

// Loop through the array and print statements about each animal
for (const animal of loyalAnimals) {
  console.log(`${animal}s would make great pets, offering years of companionship and loyalty.`);
}

// Print the common characteristic
console.log("All of these animals are known for their strong bonds with humans, making them wonderful companions!");