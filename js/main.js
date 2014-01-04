// var id = 'jofNR_WkoCE';
// var genre = 'club';

// var video = {
//   youtubeId: id,
//   genre: genre
// }

// console.log('Youtube ID:', video.youtubeId);

// console.log('Video genre:', video.genre);

// var dog = {
//   name: 'Bill'
// };

// console.log("The dog's name is:", dog["name"]);

// var book = {
//   title: "How to Ruin People's Lives"
// };

// var propertyName = 'title';

// console.log('The book title is:', book[propertyName]);


// var reservations = {
//   'Alice': true,
//   'Charlie': true
// };

// var checkForReservation = function (name) {
//   var r = reservations[name];
//   // A double bang (!!) turns a truthy value into `true`,
//   // and a falsey value into `false`
//   return !!r;
// };

// console.log('Alice should have a reservation:', checkForReservation('Alice'));
// console.log('Bob should not. Poor Bob', checkForReservation('Bob'));


// var ringDoorbell = function () {
//   console.log('Ding-dong!');
// };
// for (var i=0; i < 16; i++){
//   ringDoorbell();
// }




//create a function strMult that takes two parameters
//str and times and returns that string multiplied by the given number of times
// var strMult = function (str, times) {
//   var result = '';
//   for (;;) {
//     if (times & 1) result += str;
//     times >>= 1;
//     if (times) str += str;
//     else break;
//   }
//   return result;
// };

// console.log("Should be whatwhat:", strMult('what', 2));
// console.log("Should be kkkkk:", strMult('k', 5));



//complete the for loop such that the result is a combination of all
//the strings in the array:
//(is not working the way directions imply it should)
// var array = ['apple', 'tangerine', 'grape', 'tangerine'];

// var result = '';
// for (var i=0; i < array.length; i++) {
//   // ???
//   console.log(array[i]);
// };

// console.log('Result should be "appletangerinegrapetangerine":', result);



//complete the for loop such that the result is a combination 
//of al the strings in the array, spearated by commas and a space, with an 
//exclamation mark at the end:
//unable to put spaces between outcomes
// var array = ['bop it', 'pull it', 'twist it'];

// var result = '';
// for (var i = 0; i < array.length; i++) {
//   console.log(array + "!")
// };

// console.log('Result should be "bop it, pull it, twist it!":', result);



//write a line of code to trigger turkey-run
// var poultryRace = $.observable({});

// poultryRace.on('turkey-run', function () {
//   alert('gobble! gobble!');
// });

// poultryRace.on('chicken-waddle', function () {
//   alert('kachirp kachirp!');
// });

// poultryRace.trigger('turkey-run');




//write the code so that the triggering
//10-story-jump on stuntMan alerts the message
// 'I beLIEVE!':
// var stuntMan = $.observable({});

// stuntMan.on('10-story-jump', function(){
//   alert('I beLIEVE!');
// })

// stuntMan.trigger('10-story-jump')



//write the missing line of code so that the following code makes it rain:
//unable to make it rain
var makeItRain = {
  rainContent: 'dollar bills, yo'
};

console.log('Before:', makeItRain)

var makeItRain = $.observable({});

console.log('After:', makeItRain)

makeItRain.on('rain', function () {
  alert("It's raining " + makeItRain.rainContent + '.');
});

makeItRain.trigger('rain');