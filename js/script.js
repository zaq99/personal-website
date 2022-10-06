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
    if (event.target == btnAbout){
        aktifkan(secAbout,btnAbout);
    } else if (event.target == btnPorto){
        aktifkan(secPorto, btnPorto);
    } else if (event.target == btnArt){
        aktifkan(secArt,btnArt);
    } else {
        aktifkan(secNama,btnHome);
    }
    
    // hentikan default refresh pada browser ketika mengklik
    event.preventDefault();
};


// function munculkanPage untuk memunculkan dan menghilangkan page
// tangkap data dari argumen pertama yang diberikan pada function aktifkan
function munculkanPage (pageName){
    // cek semua section yang ada pada parentSection
    for(let i of parentSection){
        if(i == pageName){
            pageName.classList.remove('hilang')
            pageName.classList.add('animate__animated', 'animate__fadeInRight' )
        } else {
            i.setAttribute('class','hilang');
        }
    }
}


// function nyalakanLink untuk merubah warna navigasi/link
// tangkap data dari argumen kedua yang diberikan pada function aktifkan
function nyalakanLink(btnName){
    // cek semua link yang ada pada navigasi
    for(let i of navigasi){
        if (i == btnName){
            btnName.setAttribute('class','teksPutih')
        } else {
            i.classList.remove('teksPutih')
        }
    }
}


// function aktifkan untuk menjalankan kedua function sekaligus
// tangkap 2 argumen yang di berikan sesuai hasil if sebelumya
function aktifkan(a,b){
    // jalankan function dengan parameter yang diterima dari hasil if
    munculkanPage(a)
    nyalakanLink(b)
}