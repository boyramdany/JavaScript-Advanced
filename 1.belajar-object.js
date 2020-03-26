// 1. Object literal,  
// Problem : Tidak efektif untuk object yang banyak
let mahasiswa = {
    nama: 'Boy Ramdany',
    energi: 10,
    makan: function (porsi) {
        this.energi = this.energi + porsi;
        console.log(`selamat makan ${this.nama}`)
    }
}

// 2. Function declaration, harus di instansiasi & harus di return objectnya
function mahasiswa(nama, energi) {
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    mahasiswa.makan = function (porsi) {
        this.energi += porsi;
        console.log(`halo ${this.nama}, selamat makan`);
    }
    mahasiswa.main = function (jam) {
        this.energi -= jam;
        console.log(`halo ${this.nama}, selamat bermain`);
    }
    return mahasiswa
}
//instansiasi
let sandhika = mahasiswa('sandhika', 10);
let boy = mahasiswa('Boy Ramdany', 100);

// 3. Constructor Function, ga perlu menuliskan deklarasi variabel & return
function mahasiswa(nama, energi) {
    // let mahasiswa = {};
    this.nama = nama;
    this.energi = energi;

    this.makan = function (porsi) {
        this.energi += porsi;
        console.log(`halo ${this.nama}, selamat makan`);
    }
    this.main = function (jam) {
        this.energi -= jam;
        console.log(`halo ${this.nama}, selamat bermain`);
    }
    // return mahasiswa
}
//instansiasi wajib pake new
let sandhika = new mahasiswa('sandhika', 10);
let boy = new mahasiswa('Boy Ramdany', 100);