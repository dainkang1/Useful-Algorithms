/ Implement a function, reshape, that maps objects from one shape to another.
const mapping = {
  age: 'Age',
  name: obj => obj.FirstName + ' ' + obj.LastName,
  address: obj => reshape({
    street: 'Address.Street',
    coords: reshape({
      lat: 'Address.Lat',
      lng: 'Address.Long'
    }, obj)
  }, obj)
};

const data = {
  Age: 25,
  FirstName: 'Tom',
  LastName: 'Bingus',
  Address: {
    Street: '1234 Dangus St',
    Lat: 123,
    Long: 10
  }
};


// // Desired Output
// {
//   "age": 25,
//   "name": "Tom Bingus",
//      "address": {
  //     "street": "1234 Dangus St",
  //       "coords": {
  //       "lat": 123,
  //         "lng": 10
//         }
//     }
// }




function reshape(mapping, data) {
    let output = {};

    for (let key in mapping) {
        if (typeof mapping[key] === 'function') {
            output[key] = mapping[key](data);
        } else if (typeof mapping[key] === 'object') {
            output[key] = reshape(mapping[key], data);
        } else {
            output[key] = data[mapping[key]];
        }
    }

    return output;
}