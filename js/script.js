// ambil parent link list
let navigasi = document.querySelectorAll('nav ul li');
// ambil link list sebagian button
let btnHome = navigasi[0];
let btnAbout = navigasi[1];
let btnPorto = navigasi[2];
let btnArt = navigasi[3];

// ambil parent div
let parentSection = document.querySelectorAll('.hero > div');
// ambil semua div
let secNama = parentSection[0];
let secAbout = parentSection[1];
let secPorto = parentSection[2];
let secArt = parentSection[3];


btnAbout.addEventListener('click', testing);

function testing(event){
    btnAbout.setAttribute('class','texsPutih')
    event.preventDefault();
    console.log(event);
}
