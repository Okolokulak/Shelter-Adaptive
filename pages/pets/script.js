let pets = [
  {
    name: "Jennifer",
    img: "../../assets/images/pets-jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    img: "../../assets/images/pets-sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Woody",
    img: "../../assets/images/pets-woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Scarlett",
    img: "../../assets/images/pets-scarlet.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Katrine",
    img: "../../assets/images/pets-katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Timmy",
    img: "../../assets/images/pets-timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    name: "Freddie",
    img: "../../assets/images/pets-freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Charly",
    img: "../../assets/images/pets-charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];

function shuffle() {
  pets.sort(() => Math.random() - 0.5);
}
shuffle();

function hideWin() {
  let mow = document.querySelector(".mowrapper");
  mow.classList.toggle("show");
  let bd = document.getElementsByTagName("body");
  bd[0].classList.toggle("scrollLock");
}

function hidescroll() {
  let bd = document.getElementsByTagName("body");
  bd[0].classList.toggle("scrollLock");
}

function initCards() {
  let cards = document.querySelectorAll(".card");

  document.querySelector(".c1 img").src = pets[0].img;
  document.querySelector(".c2 img").src = pets[1].img;
  document.querySelector(".c3 img").src = pets[2].img;
  document.querySelector(".c4 img").src = pets[3].img;
  document.querySelector(".c5 img").src = pets[4].img;
  document.querySelector(".c6 img").src = pets[5].img;
  document.querySelector(".c7 img").src = pets[6].img;
  document.querySelector(".c8 img").src = pets[7].img;

  document.querySelector(".c1 .name").innerHTML = pets[0].name;
  document.querySelector(".c2 .name").innerHTML = pets[1].name;
  document.querySelector(".c3 .name").innerHTML = pets[2].name;
  document.querySelector(".c4 .name").innerHTML = pets[3].name;
  document.querySelector(".c5 .name").innerHTML = pets[4].name;
  document.querySelector(".c6 .name").innerHTML = pets[5].name;
  document.querySelector(".c7 .name").innerHTML = pets[6].name;
  document.querySelector(".c8 .name").innerHTML = pets[7].name;
}

initCards();

//let lrn1 = document.querySelector("c1 button");
//document.querySelector("c2 button").classList.add("lrn2")
//document.querySelector("c3 button").classList.add("lrn3")
//document.querySelector("c4 button").classList.add("lrn4")
//document.querySelector("c5 button").classList.add("lrn5")
//document.querySelector("c6 button").classList.add("lrn6")
//document.querySelector("c7 button").classList.add("lrn7")
//document.querySelector("c8 button").classList.add("lrn8")
document.querySelector("#burger + label").addEventListener("click", hidescroll);

function popup1() {
  document.querySelector(".modal .img img").src = "#";
  document.querySelector(".modal").style.top = "15vh";
  document.querySelector(".modal .img img").src = pets[0].img;
  document.querySelector(".winname").innerHTML = pets[0].name;
  document.querySelector(".winbreed").innerHTML =
    pets[0].type + " - " + pets[0].breed;
  document.querySelector(".wintext").innerHTML = pets[0].description;
  document.querySelector(".win li:nth-child(1)").innerHTML =
    "Age: " + pets[0].age;
  document.querySelector(".win li:nth-child(2)").innerHTML =
    "Inoculations: " + pets[0].inoculations.join(", ");
  document.querySelector(".win li:nth-child(3)").innerHTML =
    "Diseases: " + pets[0].diseases.join(", ");
  document.querySelector(".win li:nth-child(4)").innerHTML =
    "Parasites: " + pets[0].parasites.join(", ");
  console.log(pets);
}
function popup2() {
  document.querySelector(".modal .img img").src = "#";
  document.querySelector(".modal").style.top = "15vh";
  document.querySelector(".modal .img img").src = pets[1].img;
  document.querySelector(".winname").innerHTML = pets[1].name;
  document.querySelector(".winbreed").innerHTML =
    pets[1].type + " - " + pets[1].breed;
  document.querySelector(".wintext").innerHTML = pets[1].description;
  document.querySelector(".win li:nth-child(1)").innerHTML =
    "Age: " + pets[1].age;
  document.querySelector(".win li:nth-child(2)").innerHTML =
    "Inoculations: " + pets[1].inoculations.join(", ");
  document.querySelector(".win li:nth-child(3)").innerHTML =
    "Diseases: " + pets[1].diseases.join(", ");
  document.querySelector(".win li:nth-child(4)").innerHTML =
    "Parasites: " + pets[1].parasites.join(", ");
  console.log(pets);
}
function popup3() {
  document.querySelector(".modal .img img").src = "#";
  document.querySelector(".modal").style.top = "15vh";
  document.querySelector(".modal .img img").src = pets[2].img;
  document.querySelector(".winname").innerHTML = pets[2].name;
  document.querySelector(".winbreed").innerHTML =
    pets[2].type + " - " + pets[2].breed;
  document.querySelector(".wintext").innerHTML = pets[2].description;
  document.querySelector(".win li:nth-child(1)").innerHTML =
    "Age: " + pets[2].age;
  document.querySelector(".win li:nth-child(2)").innerHTML =
    "Inoculations: " + pets[2].inoculations.join(", ");
  document.querySelector(".win li:nth-child(3)").innerHTML =
    "Diseases: " + pets[2].diseases.join(", ");
  document.querySelector(".win li:nth-child(4)").innerHTML =
    "Parasites: " + pets[2].parasites.join(", ");
  console.log(pets);
}
function popup4() {
  document.querySelector(".modal .img img").src = "#";
  document.querySelector(".modal").style.top = "15vh";
  document.querySelector(".modal .img img").src = pets[3].img;
  document.querySelector(".winname").innerHTML = pets[3].name;
  document.querySelector(".winbreed").innerHTML =
    pets[3].type + " - " + pets[3].breed;
  document.querySelector(".wintext").innerHTML = pets[3].description;
  document.querySelector(".win li:nth-child(1)").innerHTML =
    "Age: " + pets[3].age;
  document.querySelector(".win li:nth-child(2)").innerHTML =
    "Inoculations: " + pets[3].inoculations.join(", ");
  document.querySelector(".win li:nth-child(3)").innerHTML =
    "Diseases: " + pets[3].diseases.join(", ");
  document.querySelector(".win li:nth-child(4)").innerHTML =
    "Parasites: " + pets[3].parasites.join(", ");
  console.log(pets);
}
function popup5() {
  document.querySelector(".modal .img img").src = "#";
  document.querySelector(".modal").style.top = "55vh";
  document.querySelector(".modal .img img").src = pets[4].img;
  document.querySelector(".winname").innerHTML = pets[4].name;
  document.querySelector(".winbreed").innerHTML =
    pets[4].type + " - " + pets[4].breed;
  document.querySelector(".wintext").innerHTML = pets[0].description;
  document.querySelector(".win li:nth-child(1)").innerHTML =
    "Age: " + pets[4].age;
  document.querySelector(".win li:nth-child(2)").innerHTML =
    "Inoculations: " + pets[4].inoculations.join(", ");
  document.querySelector(".win li:nth-child(3)").innerHTML =
    "Diseases: " + pets[4].diseases.join(", ");
  document.querySelector(".win li:nth-child(4)").innerHTML =
    "Parasites: " + pets[4].parasites.join(", ");
  console.log(pets);
}
function popup6() {
  document.querySelector(".modal .img img").src = "#";
  document.querySelector(".modal").style.top = "55vh";
  document.querySelector(".modal .img img").src = pets[5].img;
  document.querySelector(".winname").innerHTML = pets[5].name;
  document.querySelector(".winbreed").innerHTML =
    pets[5].type + " - " + pets[5].breed;
  document.querySelector(".wintext").innerHTML = pets[5].description;
  document.querySelector(".win li:nth-child(1)").innerHTML =
    "Age: " + pets[5].age;
  document.querySelector(".win li:nth-child(2)").innerHTML =
    "Inoculations: " + pets[5].inoculations.join(", ");
  document.querySelector(".win li:nth-child(3)").innerHTML =
    "Diseases: " + pets[5].diseases.join(", ");
  document.querySelector(".win li:nth-child(4)").innerHTML =
    "Parasites: " + pets[5].parasites.join(", ");
  console.log(pets);
}
function popup7() {
  document.querySelector(".modal .img img").src = "#";
  document.querySelector(".modal").style.top = "55vh";
  document.querySelector(".modal .img img").src = pets[6].img;
  document.querySelector(".winname").innerHTML = pets[6].name;
  document.querySelector(".winbreed").innerHTML =
    pets[6].type + " - " + pets[6].breed;
  document.querySelector(".wintext").innerHTML = pets[6].description;
  document.querySelector(".win li:nth-child(1)").innerHTML =
    "Age: " + pets[6].age;
  document.querySelector(".win li:nth-child(2)").innerHTML =
    "Inoculations: " + pets[6].inoculations.join(", ");
  document.querySelector(".win li:nth-child(3)").innerHTML =
    "Diseases: " + pets[6].diseases.join(", ");
  document.querySelector(".win li:nth-child(4)").innerHTML =
    "Parasites: " + pets[6].parasites.join(", ");
  console.log(pets);
}
function popup8() {
  document.querySelector(".modal .img img").src = "#";
  document.querySelector(".modal").style.top = "55vh";
  document.querySelector(".modal .img img").src = pets[7].img;
  document.querySelector(".winname").innerHTML = pets[7].name;
  document.querySelector(".winbreed").innerHTML =
    pets[7].type + " - " + pets[7].breed;
  document.querySelector(".wintext").innerHTML = pets[7].description;
  document.querySelector(".win li:nth-child(1)").innerHTML =
    "Age: " + pets[7].age;
  document.querySelector(".win li:nth-child(2)").innerHTML =
    "Inoculations: " + pets[7].inoculations.join(", ");
  document.querySelector(".win li:nth-child(3)").innerHTML =
    "Diseases: " + pets[7].diseases.join(", ");
  document.querySelector(".win li:nth-child(4)").innerHTML =
    "Parasites: " + pets[7].parasites.join(", ");
  console.log(pets);
}

function backToStart () {
    if (document.querySelector(".page").innerHTML == "1") return
    shuffle()
    initCards()
    document.querySelector('.page').innerHTML = "1"
}
function back () {
    if (document.querySelector(".page").innerHTML == "1") return
    shuffle()
    initCards()
    function pageCount() {
        document.querySelector(".page").innerHTML = parseInt(document.querySelector(".page").innerHTML) - 1
    }
    pageCount()
}
function forward () {
    if (document.querySelector(".page").innerHTML == "6") return
    shuffle()
    initCards()
    function pageCount() {
        document.querySelector(".page").innerHTML = parseInt(document.querySelector(".page").innerHTML) + 1
    }
    pageCount()
}

function forwardEnd () {
    if (document.querySelector(".page").innerHTML == "6") return
    shuffle()
    initCards()
    function pageCount() {
        document.querySelector(".page").innerHTML = 6
    }
    pageCount()
}

document.querySelector(".c1 button").addEventListener("click", popup1);
document.querySelector(".c2 button").addEventListener("click", popup2);
document.querySelector(".c3 button").addEventListener("click", popup3);
document.querySelector(".c4 button").addEventListener("click", popup4);
document.querySelector(".c5 button").addEventListener("click", popup5);
document.querySelector(".c6 button").addEventListener("click", popup6);
document.querySelector(".c7 button").addEventListener("click", popup7);
document.querySelector(".c8 button").addEventListener("click", popup8);

document.querySelector(".back-start").addEventListener("click", backToStart)
document.querySelector(".back").addEventListener("click", back)
document.querySelector(".forward").addEventListener("click", forward)
document.querySelector(".forward-end").addEventListener("click", forwardEnd)

function provirka() {
  console.log(document.querySelector(".c1 button").classList);
}
document.querySelector(".heading").addEventListener("click", provirka);
document.querySelector(".blackout").addEventListener("click", hideWin);
document.querySelector(".cbtn").addEventListener("click", hideWin);
document
  .querySelectorAll(".cards-container button")
  .forEach((element) => element.addEventListener("click", hideWin));
