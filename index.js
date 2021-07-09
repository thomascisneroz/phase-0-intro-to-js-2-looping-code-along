// Code your solutions in this file
const names = ["Lisa", "Kaitlin" , "Jan"]


function writeCards(names, event) {
    let messages = []
    for (let i = 0; i < names.length; i++) {
       messages.push(`Thank you, ${names[i]}, for the wonderful ${[event]} gift!`);
       debugger;
    }
    return messages;
}
writeCards(names, 'surprise')

function countDown(num) {
    while(num >=0) {
        console.log(num--)
    } 
}
countDown(10)