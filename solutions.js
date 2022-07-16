
  //ex1
// const toyota1 = {
//     model: 'Toyota',
//     type: 'Camry',
//     logModel(){
//         console.log(this.model, this.type);
//     }
// }

// const toyota2 = {
//     model: 'Toyota',
//     type: 'Rav4',
// }
// toyota1.logModel.call(toyota2)



// //ex2
// const flights = {

//     flights: [],

//     priorityFlights: [],

//     scheduleFlight(flight){
//         this.flights.push(flight);
//     },

//     removeFlight(flight){
//         this.flights = this.flights.filter(flightFilter.bind(this));
//         function flightFilter(f){
//             if (flight === f){
//                 return this.priorityFlights.includes(flight);
//             }
//             return true
//         }
//     },

//     makePriorityFlight(flight){
//         this.priorityFlights.push(flight);
//     }

// }


// flights.scheduleFlight('1');

//  flights.makePriorityFlight('1');

//  flights.removeFlight('1')

//  console.log(flights.flights);




//ex3
// function CarConstructor(model, year){
//     if(new.target === undefined) {
//         return 'Please call me with new keyword'
//     };
// this.mode = model;
// this.year = year;
// }

// let obj = new CarConstructor('kia',2020)
// console.log(obj);




//ex4
// const objArr = [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }];

// function logName(){
//     console.log(this.name);
// }
// let arr = objArr.map(e=>{
//     e.foo=logName
//     return e
// })
//  console.log(arr[1].foo());



// //ex5
//  const arrayOfObjectNames = [{ name: '1' }, { name: '2' }, { name: '3' }]
//  function logArrayObjectNames(){
//      console.log(this.name);
//  }
//  arrayOfObjectNames.forEach(e => logArrayObjectNames.call(e));



//ex6
// const mappedFunc = arrayOfObjectNames.map( (item) => {
//      return logArrayObjectNames.bind(item)
// } );
// console.log(mappedFunc);
// mappedFunc.forEach(i => i())



//ex7
// const exampleOfAlreadyCreatedObject = {
//     id: 1,
//     model: 'Toyota',
//     year: '1996',
//     color: 'red',
//     driveTrain: '4x4',
// }   

// function CreateCar(id, model, year, color, driveTrain){
//     this.id = id,
//     this.model= model,
//     this.year = year,
//     this.color = color ,
//     this.driveTrain = driveTrain
// }


// const inventory = {

//     cars: [],

//     addCar(car) {
//         this.cars.push(car)
//     },

//     removeCar(id) {
//         this.cars.forEach(e=>id==e.id?this.cars.splice(id,1):this.cars)
//     },

//     listCars(){
//         this.cars.forEach(e=>console.log(e.model))
//     },

//     listCarsByConditionCallback(conditionCallback){
//          this.cars.forEach(e=>{
//             if(conditionCallback(e))console.log(e);
//          })
//     }

// }
// console.log(inventory.cars);

// inventory.addCar(new CreateCar(1, 'Toyota', '1996', 'red', '4x4'));
// inventory.addCar(new CreateCar(2, 'Mercedes', '2000', 'white', 'rear wheel drive'));
// inventory.addCar(new CreateCar(3, 'BMW', '2020', 'black', 'rear wheel drive'));
// inventory.removeCar(1);
// inventory.listCars();
// inventory.listCarsByConditionCallback( (car) => car.model === 'BMW' && car.year === '2020' );



//ex8
// function Song(title, artist) {
//   this.title = title;
//   this.artist = artist;
//   this.play = () => {
//     console.log(`${this.artist} song ${this.title}`);
//   };
// }
// let songObj = new Song('Caruzzo','Pavaroti')
// console.log(songObj.play());



//ex9
//git init
//git commit --allow-empty -m "Empty-Commit"
//git branch [name]


//ex10
//git init
//git commit --allow-empty -m "Empty-Commit"
//git branch rename_me
//git branch delete_me
//git branch -m rename_me renemed_branch
//git branch -D delete_me



//ex11
// const checkKnow = {
//     surname: 'surname',
//     name: 'checkKnow',
//     foo: {
//         name: 'foo',
//         logName(){
//             console.log(this.surname);
//         }
//     },
//     boo(){
//         const obj = {
//             name: 'boo method',
//             check: () => {
//                 console.log(this.name);
//             }
//         }
//         obj.check();
//     }
// }
// checkKnow.foo.logName();//stex this@ mer foo object-ne dra hamar undefined qani vor foo-n surename chuni
// checkKnow.boo();//qani vor arrow functionr-e this-@ klini verevi funkciayi this-@ aysinq checkKnow object@ u ktpi 'checkKnow'










