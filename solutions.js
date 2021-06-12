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
extraWeight(black);

console.log(black)

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
  run(){
    console.log ('Run!')
  }
  attack(){
    console.log('Attack!')
  }
  sleep(){
    console.log('Time for bed')
  }
}

const BlackPearl = [new Pirate('Pirate1'), new Pirate('Pirate2'), new Pirate('Pirate3')];
const FriendlyPirates = ['Pirate1', 'Pirate2', 'Pirate3'];

console.log(BlackPearl)//not working
