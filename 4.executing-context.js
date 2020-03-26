/////////////////////////////////////////////////////////////////////////////////////////////////////
// Javascript Visualizer > pythontutor.com

// 2,1 Executing Context , Hoisting & Scope 
// Creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// Execution phase

/////////////////////////////////////////////////////////////////////////////////////////////////////

var nama = 'Boy';
var umur = 22;

console.log(sayHello());

function sayHello() {
    return `Hallo. nama saya ${nama}. saya ${umur} tahun.`;
}

// function membuat local execution ocntext
// yang didalamnya tedapat creation dan execution phase
// windwo w
// arguments
// hoisting

/////////////////////////////////////////////////////////////////////////////////////////////////////

var nama = 'Boy Ramdany';
var username = '@boyramdany';

function cetakURL(username) {
    var instagramURL = 'http://instagram.com/';
    return instagramURL + username;
}

console.log(cetakURL(username));

/////////////////////////////////////////////////////////////////////////////////////////////////////

function a() {
    console.log('ini a');

    function b() {
        console.log('ini b');

        function c() {
            console.log('ini c ');
        }
        c();
    }

    b();
}
a();