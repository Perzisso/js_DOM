/* function 1 */

function changeTitles() {

  var titre = document.getElementsByTagName('h1')[0];
  console.log(titre.innerHTML);
  titre.innerHTML = "Ce que j'ai appris à THP";

  var sub = document.getElementsByTagName('p');
  var subtitle = document.getElementsByClassName('lead text-muted')[0];
  console.log(subtitle.innerHTML);
  subtitle.innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
}

/* function 2 */

function changeCallToActions() {

  var button1 = document.getElementsByClassName('btn btn-primary my-2')[0]
  console.log(button1.innerHTML);
  button1.innerHTML = "OK je veux tester !";
  button1.href = "http://www.thehackingproject.org"

  var button2 = document.getElementsByClassName('btn btn-secondary my-2')[0];
  console.log(button2.innerHTML);
  button2.innerHTML = "Non Merci";
  button2.href = "https://www.pole-emploi.fr/accueil/"
}

/* function 3 */

function changeLogoName() {

  var logo = document.getElementsByTagName('strong')[0];
  console.log(logo.innerHTML);
  logo.innerHTML = "The THP Experience";

  logo.style.fontSize = '2em'
}

/*
function changeTitles(){
  let title = document.body.getElementsByClassName("jumbotron-heading")
  title[0].innerHTML = "Ce que j'ai appris à THP"

  let title2 = document.body.getElementsByClassName("lead text-muted")
  title2[0].innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
}

changeTitles();

function changeCalltoActions(){
  let btn1 = document.body.getElementsByClassName("btn btn-primary my-2");
  btn1[0].innerHTML = "OK je veux tester !"
  btn1[0].setAttribute("href", "http://www.thehackingproject.org")

  let btn2 = document.body.getElementsByClassName("btn btn-secondary my-2");
  btn2[0].innerHTML = "Non Merci"
  btn2[0].setAttribute("href", "https://www.pole-emploi.fr/accueil/")
}
*/ 