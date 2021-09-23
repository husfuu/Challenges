/**
 * Class of Hero object
 *
 * You were asked to create a Moba Game In Moba Game, there's an entity called hero.
 *
 * Hero has name, type, and healthpoint. Where:
 * name is a string
 * type is one of 'STRENGTH', 'AGILITY', 'INTELLIGENCE'
 * healthpoint is a number
 *
 * How would you describe the class milord?
 */
class Hero {
  constructor(name, type, healthpoint, max_healthpoint, armor, damage) {
    function typesValidation(type) {
      const types = ['STRENGTH', 'AGILITY', 'INTELLIGENCE'];
      for (let i = 0; i < types.length; i++) {
        if (type === types[i]) {
          return type;
        } else if (i === types.length - 1) {
          throw 'your input regarding the type must be one of the options';
        }
      }
    }
    this.name = name;
    this.type = typesValidation(type);
    this.healthpoint = healthpoint;
    this.max_healthpoint = max_healthpoint;
    this.armor = armor;
    this.damage = damage;
    this.manapoint = manapoint;
    this.max_manapoint = max_manapoint;
  }

  attack(){
    //pass
  }

  castSpell(){
    //pass 
  }
}

class Creep {
  constructor(name, healthpoint, max_healthpoint, armor, damage){
    this.name = name;
    this.healthpoint = healthpoint;
    this.max_healthpoint = max_healthpoint;
    this.armor = armor;
    this.damage = damage;
  }

  attack(){
    const damage_reduction = (this.damage * ((100 - this.armor) / 100));
    const damage_dealt =  (100 - this.armor) / 100;
    return damage_dealt;
  }
}

class Tower {
  constructor(name, healthpoint, max_healthpoint, armor, damage){
    this.name = name;
    this.healthpoint = healthpoint;
    this.max_healthpoint = max_healthpoint;
    this.armor = armor;
    this.damage = damage;
  }

  attack(){
    const damage_reduction = (this.damage * ((100 - this.armor) / 100));
    const damage_dealt =  (100 - this.armor) / 100;
    return damage_dealt;
  }
}


const husni = new Creep('husni', 90, 90, 70, 60);


console.log(husni.attack());






















// correct_example1 = new Hero('Husni', 'INTELLIGENCE', 70);
// correct_example2 = new Hero('Husni', 'STRENGTH', 50);
// wrong_example = new Hero('Husni', 'nyontek', 40);
// console.log(correct_example1);

//console.log(wrong_example);
/**
 * To test out your class
 * You can try to instantiate it in here. And try to run it via terminal.
 *
 * node path/to/this/file.js
 *
 */

// Try to uncomment code below

// const windrunner = new Hero(...YourArgumentsGoesHere);
// console.log(windrunner);
