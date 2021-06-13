//Part 1.

class Cat {
  constructor(weight, fed) {
    this.weight = weight;
    this.fed = fed;
  }
  feedMe(){
    console.log("I'm hungry!")
  }
}

const orange = new Cat(15, false)
orange.feedMe()

const black = new Cat(8, true)
black.feedMe()



console.log(Cat)

console.log(orange)

console.log(black)

//Part 2.

function extraWeight(Cat){
   Cat.weight = 20;
}
extraWeight(orange);

console.log(orange)

const catsArr = ['Cat1', 'Cat2', 'Cat3', 'Cat4', 'Cat5', 'Cat6']
for (let i = 0; i < 6; i++) {

}
console.log (catsArr[3])



const catPerson = {
  cats: ['kitten1', 'kitten2', 'kitten3']
}

class Pirate {
  constructor(height, weight, name) {
    this.height = height;
    this.weight = weight;
    this.name = name;
  }
  run(enemy){
    return ('Run!')
  }
  attack(enemy){
    return ('Attack!')
  }
  sleep(pirate){
    return ('Time for bed')
  }
}

const TinyPirates = [
  new Pirate('4 feet', '105', 'Tiny1'),
  new Pirate('2 feet', '65','Tiny2'),
  new Pirate('1.5 feet', '45', 'Tiny3')
];
const FriendlyPirates = [
  new Pirate('6 feet', '220', 'Pirate1'),
  new Pirate('3.5 feet', '75', 'Pirate2'),
  new Pirate('9 feet', '335', 'Pirate3')];

console.log(TinyPirates)
console.log(FriendlyPirates)

TinyPirates.forEach(function(item) {
  console.log(item)
})

FriendlyPirates.forEach(function(item, index) {
  console.log(item, index)
})

// console.log(TinyPirates[0].name)
// console.log(TinyPirates[0].attack(FriendlyPirates[0]))
