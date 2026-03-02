function mash(){
let homes = ["mansion", "apartment", "shack", "house", "dog house", "train", "car", "destinys bounty", "drifveil city gym", "pikachus house"]
let jobs = ["Unemployed", "doctor", "McDonalds worker", "Tech CEO", "mafia boss", "youtuber", "streamer", "actor", "pikachu salesman", "nurse joy"]
let partners = ["Snoopy", "Pikachu", "Kai from Ninjago", "Abraham Lincoln", "haxorus", "Hatsune Miku", "statue of liberty", "ghost", "sam altman"]
let cars = ["ferrari", "BMW", "honda", "school bus", "pikachu car", "peel p50", "mclaren", "f1 car", "audi R8", "destinys bounty"]
let pets = ["cat", "angry bird", "pikachu", "haxorus", "dog", "master wus dragon from ninjago", "drowning goldfish", "pichu", "hamster", "cheetah"]
let salarys = ["$100,000", "$1,000,000", "$1,000", "$0.10", "$100,000,000 CA", "5 rupees", "100 euros", "4 cents", "however much money pikachu makes", "however much money hatsune miku makes"]

let name1 = document.getElementById("nameinput1").value;
let name2 = document.getElementById("nameinput2").value;
let name3 = document.getElementById("nameinput3").value;
let name4 = document.getElementById("nameinput4").value;

let homes1 = homes.splice(Math.floor(Math.random() * homes.length), 1)[0];
let jobs1 = jobs.splice(Math.floor(Math.random() * jobs.length), 1)[0];
let partners1 = partners.splice(Math.floor(Math.random() * partners.length), 1)[0];
let cars1 = cars.splice(Math.floor(Math.random() * cars.length), 1)[0];
let pets1 = pets.splice(Math.floor(Math.random() * pets.length), 1)[0];
let salarys1 = salarys.splice(Math.floor(Math.random() * salarys.length), 1)[0];

let homes2 = homes.splice(Math.floor(Math.random() * homes.length), 1)[0];
let jobs2 = jobs.splice(Math.floor(Math.random() * jobs.length), 1)[0];
let partners2 = partners.splice(Math.floor(Math.random() * partners.length), 1)[0];
let cars2 = cars.splice(Math.floor(Math.random() * cars.length), 1)[0];
let pets2 = pets.splice(Math.floor(Math.random() * pets.length), 1)[0];
let salarys2 = salarys.splice(Math.floor(Math.random() * salarys.length), 1)[0];

let homes3 = homes.splice(Math.floor(Math.random() * homes.length), 1)[0];
let jobs3 = jobs.splice(Math.floor(Math.random() * jobs.length), 1)[0];
let partners3 = partners.splice(Math.floor(Math.random() * partners.length), 1)[0];
let cars3 = cars.splice(Math.floor(Math.random() * cars.length), 1)[0];
let pets3 = pets.splice(Math.floor(Math.random() * pets.length), 1)[0];
let salarys3 = salarys.splice(Math.floor(Math.random() * salarys.length), 1)[0];

let homes4 = homes.splice(Math.floor(Math.random() * homes.length), 1)[0];
let jobs4 = jobs.splice(Math.floor(Math.random() * jobs.length), 1)[0];
let partners4 = partners.splice(Math.floor(Math.random() * partners.length), 1)[0];
let cars4 = cars.splice(Math.floor(Math.random() * cars.length), 1)[0];
let pets4 = pets.splice(Math.floor(Math.random() * pets.length), 1)[0];
let salarys4 = salarys.splice(Math.floor(Math.random() * salarys.length), 1)[0];

document.getElementById("output").innerHTML = 
name1 + " will live in a " + homes1 + " will work as a " + jobs1 + " will live with " + partners1 + " will drive a " + cars1 + " will have a " + pets1 + " and will make " + salarys1 + "<br><br>" + name2 + " will live in a " + homes2 + " will work as a " + jobs2 + " will live with " + partners2 + " will drive a " + cars2 + " will have a " + pets2 + " and will make " + salarys2 + "<br><br>" + name3 + " will live in a " + homes3 + " will work as a " + jobs3 + " will live with " + partners3 + " will drive a " + cars3 + " will have a " + pets3 + " and will make " + salarys3 + "<br><br>" + name4 + " will live in a " + homes4 + " will work as a " + jobs4 + " will live with " + partners4 + " will drive a " + cars4 + " will have a " + pets4 + " and will make " + salarys4
}