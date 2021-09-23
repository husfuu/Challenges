function typesValidation(type) {
  const types = ['STRENGTH', 'AGILITY', 'INTELLIGENCE'];
  for (let i = 0; i < types.length; i++) {
    if (type === types[i]) {
      return type;
    } else if (i === (types.length - 1)) {
      //throw 'your input regarding the type must be one of the options';
      console.log('eheh');
    }
  }
}
a = typesValidation('STRENGTH');
console.log(a);