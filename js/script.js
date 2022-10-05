// ambil parent link list
let navigasi = document.querySelectorAll('nav a');
// ambil link list sebagian button
let btnHome = navigasi[0];
let btnAbout = navigasi[1];
let btnPorto = navigasi[2];
let btnArt = navigasi[3];

// ambil parent div
let parentSection = document.querySelectorAll('.hero > div');
// ambil semua div
// let secAsli = parentSection[0];
let secNama = parentSection[0];
let secAbout = parentSection[1];
let secPorto = parentSection[2];
let secArt = parentSection[3];

// berikan fitur klik dan pada setiap button
// dan jalankan function whenOnClik ketika di klik
btnHome.addEventListener('click',whenOnClick);
btnAbout.addEventListener('click',whenOnClick);
btnPorto.addEventListener('click',whenOnClick);
btnArt.addEventListener('click',whenOnClick);

// function whenOnclick dan menampung data event
// event adalah data tombol yg di clik
function whenOnClick(event){
    
    //periksa kondisi
    // ketika tombol yang di klick == btnAbout 
    if (event.target == btnAbout){
        // jalankan function aktifkan
        // dan masukan 2 argumen untuk memunculkan section about, dan menyalakan link
        aktifkan(secAbout,btnAbout)
    } else if (event.target == btnPorto){
        aktifkan(secPorto, btnPorto)
    } else if (event.target == btnArt){
        aktifkan(secArt,btnArt)
    } else {
        aktifkan(secNama,btnHome)
        
    }
    
    event.preventDefault();
};

function aktifkan(a,b){
    munculkanPage(a)
    nyalakanLink(b)

}

function munculkanPage (pageName){
    for(let i of parentSection){
        if(i == pageName){
            pageName.classList.remove('hilang')
        } else {
            i.setAttribute('class','hilang');
            // console.log(pageName);
        }
    }
}

function nyalakanLink(btnName){
    for(let i of navigasi){
        if (i == btnName){
            btnName.setAttribute('class','teksPutih')
        } else {
            i.classList.remove('teksPutih')
        }
    }
}

