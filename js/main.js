// var buzzer = {
//   press: function () {
//     this.trigger('buzz');
//   }
// };
// // This adds an `on` method!
// $.observable(buzzer);

// // Now we can use it!
// buzzer.on('buzz', function () {
//   alert('The buzzer went off!');
// });

// buzzer.press();
// buzzer.press();

// var pizzaCook = {
//   ego: 0,
//   spinDough: function () {
//     this.ego += 1;
//     if (this.ego > 10) {
//       this.trigger('confidence');
//     }
//   }
// };

// // TODO: RIGHT HERE
// $.observable(pizzaCook);

// pizzaCook.on('confidence', function () {
//   alert('I HAVE SOLVED WORLD HUNGER');
// });

// for (var i = 0; i < 11; i += 1) {
//   pizzaCook.spinDough();
// }


//cannot get the following trigger events to work :(
// var weather = $.observable({});

// weather.on('snow-storm', function () {
//   alert('Bring your coats');
// });

// weather.on('tornado', function () {
//   alert('Everybody panic!');
// });

// weather.trigger('snow-storm', function () {
//   alert('Bring your coats and gloves!');
// });

// weather.trigger('tornado', function () {
//   alert('Find a nice cellar and avoid andy trips to OZ.');
// });





// var fireEater = {
//   state: 'arrogant',

//   eatFire: function () {
//     if (this.state === 'choking') {
//       this.trigger('choke');
//       return;
//     }

//     var fate = parseInt(Math.random() * 5, 10);
//     if (fate === 0) {
//       this.trigger('choke');
//       this.state = 'choking';
//     }
//     else {
//       this.trigger('pose');
//     }
//   }
// };

// TODO: RIGHT HERE, YES HERE, IN BETWEEN, YES
// $.observable(fireEater);

// fireEater.on('pose', function () {
//   console.log('applause');
// });

// fireEater.on('choke', function () {
//   console.log('audience: "gasp!"');
// });

// for (var i = 0; i < 10; i += 1) {
//   fireEater.eatFire();
// }