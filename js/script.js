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
let secAsli = parentSection[0];
let secNama = parentSection[1];
let secAbout = parentSection[2];
let secPorto = parentSection[3];
let secArt = parentSection[4];


btnHome.addEventListener('click',funcHome);
// btnAbout.addEventListener('click', funcAbout);
// btnPorto.addEventListener('click',funcPorto)

// function funcHome(event){
//     btnHome.setAttribute('class','texsPutih')
//     secNama.setAttribute('class','')
//     event.preventDefault();
//     console.log(event.target);
// }

// function funcAbout(event){
//     btnAbout.setAttribute('class','texsPutih')
//     secAbout.setAttribute('class','');

//     secArt.setAttribute('class','hilang')
//     event.preventDefault();
//     console.log(event.target);
// }

function funcHome(event){
    for(let i of parentSection){
        console.log(i.attributes['id'])
    }
    event.preventDefault()
}
