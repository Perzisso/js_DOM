/* 1 script */

var p = document.getElementsByTagName('p');
console.log(p.length)

/* 2 script */

var coucou = document.getElementById('coucou');
console.log(coucou.innerHTML)

/* 3 script */

var a = document.getElementsByTagName('a');
console.log(a[2].href)

/* 4 script */

var e = document.getElementsByClassName('compte-moi');
console.log(e.length)

/* 5 script */

var compte_li = document.querySelectorAll('li.compte-moi');
console.log(compte_li.length)

/* 6 script */

const elements = document.querySelectorAll("ol li.compte-moi");
console.log(elements.length)

/* 7 script */
const div = document.querySelectorAll("div ul")[1];
const li = div.querySelectorAll('li')[0]
console.log(li.innerHTML)
