// Constructor Function sebetulnya punya parent
function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;
}

Mahasiswa.prototype.makan = function (porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, Energy kamu bertambah jadi ${this.energi}`;
}

Mahasiswa.prototype.main = function (jam) {
    this.energi -= jam;
    return `halo ${this.nama}, selamat bermain! energi berkurang ${this.energi}`;
}

Mahasiswa.prototype.tidur = function (jam) {
    this.energi += jam * 2;
    return `halo ${this.nama}, selamat tidur! energi sekarang ${this.energi}`;
}

let boy = new Mahasiswa('Boy Ramdany', 10);


//Versi Class JavaScript, yang di belakang layar sebenernya diatas
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        return `Halo ${this.nama}, Energy kamu bertambah jadi ${this.energi}`;
    }

    main(jam) {
        this.energi -= jam;
        return `halo ${this.nama}, selamat bermain! energi berkurang ${this.energi}`;
    }

    tidur(jam) {
        this.energi += jam * 2;
        return `halo ${this.nama}, selamat tidur! energi sekarang ${this.energi}`;
    }
}