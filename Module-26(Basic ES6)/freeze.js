const king = { name : 'Mufasa', age : 35, kingdom : 'Pride Lands'};
// Object.freeze(king);
// Object.seal(king);
delete king.age;
delete king.kingdom;

king.queen = 'Sarabi';
king.name = 'King Simba';
king.queen = 'Nala';
delete king.queen;
console.log(king);