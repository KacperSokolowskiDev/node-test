const cowSay = require('cowsay');
const myInfo = require('./information.js');

console.log(
    cowSay.say({
        text: `Hello I'm ${myInfo.name} from ${myInfo.school} !`
    })
);
