const satays = ["Sate Bunthel Kambing", "Sate Bunthel Babi", "Sate Kere", "Sate Presiden"];

function getVeganFriendlySatays(givenSatays) {
  let veganSate = [];
  for (let i=0; i < givenSatays.length; i++){
    if (givenSatays[i] === "Sate Kere" || givenSatays[i] === "Sate Presiden"){
      veganSate.push(givenSatays[i]);
    }
  }
  return veganSate;
};

const veganFriendlySatays = getVeganFriendlySatays(satays);

console.log(veganFriendlySatays);