const dataCalonVaksin = [
  {
    id: 1,
    name: 'Fikri Rahmat Nurhidayat',
    age: 22
  },
  {
    id: 2,
    name: 'Soeharto',
    age: 86
  },
  {
    id: 3,
    name: 'Megawati',
    age: 74
  },
  {
    id: 4,
    name: 'Jokowi',
    age: 60
  },
  {
    id: 5,
    name: 'Kaesang',
    age: 26
  },
];


function filterCalonVaksinSinovak(data){
  let dataLolosVaksinSinovac = [];

  for (let i = 0; i < data.length; i++){
    if (data[i]['age'] < 60){
      dataLolosVaksinSinovac.push(data[i]);
    } 
  }
  return dataLolosVaksinSinovac;
}



console.log(filterCalonVaksinSinovak(dataCalonVaksin));