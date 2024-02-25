"use strict";
1; //5. Changing Guest List: You just heard that one of your guests can’t make the
//dinner, so you need to send out a new set of invitations. You’ll have to think of//omeone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the
//end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with
console.log(`Q. 15
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
`);
console.log("Solution:");
console.log(`
Here is the list of friends who were invited.`);
let myFriends = ["sajal", "rahat", "laiba"];
console.log(myFriends);
for (let a = 0; a < myFriends.length; a++) {
    //console.log(`${myFriends[a]}`);
}
let absent = myFriends.pop();
// removed last name from the end.
console.log(`${absent} is not coming. Now remaining friends list is  ${myFriends}
  Inviting Talha in the party.
  Here is the list of friends with new entry.
  `);
myFriends.push("sajal");
// added sajal at the end.
console.log(myFriends);
console.log(`
Sending invitation to all friends.`);
for (let i = 0; i < myFriends.length; i++) {
    console.log(`Dear friend, ${myFriends[i]}, you are invited in the dinner today.`);
}
