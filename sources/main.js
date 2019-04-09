var randomFish = new Array();

randomFish[0] = "https://res.cloudinary.com/dqejlzsb4/image/upload/v1554844779/blur-caviar-close-up-1683545.jpg";
randomFish[1] = "https://res.cloudinary.com/dqejlzsb4/image/upload/v1554844775/beautiful-blue-close-up-1000654.jpg";
randomFish[2] = "https://res.cloudinary.com/dqejlzsb4/image/upload/v1554844764/aquarium-boxfish-cowfish-54313.jpg";
randomFish[3] = "https://res.cloudinary.com/dqejlzsb4/image/upload/v1554844757/aquarium-aquatic-blue-60090.jpg";
randomFish[4] = "https://res.cloudinary.com/dqejlzsb4/image/upload/v1554844751/animal-fish-fishtank-9339.jpg";
randomFish[5] = "https://res.cloudinary.com/dqejlzsb4/image/upload/v1554844743/animal-close-up-discus-cichlid-78790.jpg";
randomFish[6] = "https://res.cloudinary.com/dqejlzsb4/image/upload/v1554844735/animal-catfish-fish-166633.jpg";
randomFish[7] = "https://res.cloudinary.com/dqejlzsb4/image/upload/v1554844725/animal-art-beautiful-325045.jpg";
randomFish[8] = "https://res.cloudinary.com/dqejlzsb4/image/upload/v1554844715/animal-aqua-aquatic-472308.jpg";
randomFish[9] = "https://res.cloudinary.com/dqejlzsb4/image/upload/v1553263081/hunter-brumels-760768-unsplash.jpg";

function randomFishImage() {
var number = Math.floor(Math.random()*randomFish.length);

document.write('<img src="' + randomFish[number] + '">');
}

randomFishImage();