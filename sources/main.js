var randomFish = new Array();

randomFish[0] = "/sources/img/animal-art-beautiful-325045.jpg";
randomFish[1] = "/sources/img/aquarium-aquatic-blue-60090.jpg";
randomFish[2] = "/sources/img/aquarium-boxfish-cowfish-54313.jpg";
randomFish[3] = "/sources/img/animal-catfish-fish-166633.jpg";
randomFish[4] = "/sources/img/animal-fish-fishtank-9339.jpg";
randomFish[5] = "/sources/img/animal-close-up-discus-cichlid-78790.jpg";
randomFish[6] = "/sources/img/beautiful-blue-close-up-1000654.jpg";
randomFish[7] = "/sources/img/animal-aqua-aquatic-472308.jpg";
randomFish[8] = "/sources/img/blur-caviar-close-up-1683545.jpg";

function randomFishImage() {
var number = Math.floor(Math.random()*randomFish.length);

document.write('<img src="' + randomFish[number] + '">');
}

randomFishImage();