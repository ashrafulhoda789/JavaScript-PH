const address = 'andorKilla';
const part = address.slice(2,5);
// console.log(part);

const sentence = "I am a good and hardworking person";
// console.log(sentence.split(' '));
// console.log(sentence.split('a'));

const friends = 'Rahim,Karim,Fahim,lahim,sahim,dahim';
console.log(friends.split(','));

const realFriends = [ 'Rahim', 'Karim', 'Fahim', 'lahim', 'sahim', 'dahim' ];
console.log(realFriends.join());
console.log(realFriends.join('|'));
console.log(realFriends.join('-'));
