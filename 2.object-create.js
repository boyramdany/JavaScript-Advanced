// / 2. Function declaration, harus di instansiasi & harus di return objectnya
const methodMahasiswa = {
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`halo ${this.nama} selamat makan`);
    },
    main: function (jam) {
        this.energi -= jam;
        console.log(`halo ${this.nama} selamat main`);
    },
    tidur: function (jam) {
        this.energi += jam * 2;
        console.log(`halo ${this.nama} selamat tidur`);
    }
}

function mahasiswa(nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa);

    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa
}
//instansiasi
let sandhika = mahasiswa('sandhika', 10);
let boy = mahasiswa('Boy Ramdany', 100);