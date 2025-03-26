// Ambil elemen-elemen yang diperlukan
const btnPersegi = document.getElementById("btnPersegi");
const btnPersegiPanjang = document.getElementById("btnPersegiPanjang");
const persegiCalculator = document.getElementById("persegiCalculator");
const persegiPanjangCalculator = document.getElementById("persegiPanjangCalculator");

// Fungsi untuk menampilkan kalkulator Persegi
btnPersegi.addEventListener("click", function () {
    persegiCalculator.classList.remove("hidden");
    persegiPanjangCalculator.classList.add("hidden");
    btnPersegi.classList.add("active");
    btnPersegiPanjang.classList.remove("active");
});

// Fungsi untuk menampilkan kalkulator Persegi Panjang
btnPersegiPanjang.addEventListener("click", function () {
    persegiPanjangCalculator.classList.remove("hidden");
    persegiCalculator.classList.add("hidden");
    btnPersegiPanjang.classList.add("active");
    btnPersegi.classList.remove("active");
});

// Kalkulasi Luas dan Keliling Persegi
document.getElementById("hitung").addEventListener("click", function () {
    let sisi = document.getElementById("sisi").value;
    let errorMsg = document.getElementById("error-message");
    let hasilLuas = document.getElementById("luas");
    let hasilKeliling = document.getElementById("keliling");

    // Validasi input
    function validateNumber(input) {
        let value = input.value;
    
        // Hapus karakter selain angka
        input.value = value.replace(/[^0-9]/g, '');
    
        // Pastikan tidak bisa kosong atau nol
        if (input.value === "" || input.value <= 0) {
            input.value = "";
            input.setCustomValidity("Hanya boleh memasukkan angka");
        } else {
            input.setCustomValidity("");
        }
    }

    // Hitung luas dan keliling
    let luas = sisi * sisi;
    let keliling = 4 * sisi;

    // Tampilkan hasil
    errorMsg.innerText = "";
    hasilLuas.innerText = "Luas: " + luas;
    hasilKeliling.innerText = "Keliling: " + keliling;
});
// Fungsi validasi input: hanya angka positif, tidak bisa huruf atau negatif
function validateNumber(input) {
    let value = input.value;

    // Hapus karakter selain angka
    input.value = value.replace(/[^0-9]/g, '');

    // Pastikan tidak bisa kosong atau nol
    if (input.value === "" || input.value <= 0) {
        input.value = "";
        input.setCustomValidity("Hanya boleh angka positif lebih dari 0!");
    } else {
        input.setCustomValidity("");
    }
}


// Reset form Persegi
document.getElementById("reset").addEventListener("click", function () {
    document.getElementById("sisi").value = "";
    document.getElementById("luas").innerText = "";
    document.getElementById("keliling").innerText = "";
    document.getElementById("error-message").innerText = "";
});

// Kalkulasi Luas dan Keliling Persegi Panjang
document.getElementById("hitungPP").addEventListener("click", function () {
    let panjang = document.getElementById("panjang").value;
    let lebar = document.getElementById("lebar").value;
    let errorMsgPP = document.getElementById("error-message-pp");
    let hasilLuasPP = document.getElementById("luasPP");
    let hasilKelilingPP = document.getElementById("kelilingPP");

    // Validasi input
    if (panjang === "" || panjang <= 0 || lebar === "" || lebar <= 0) {
        errorMsgPP.innerText = "Masukkan panjang dan lebar yang valid!";
        hasilLuasPP.innerText = "";
        hasilKelilingPP.innerText = "";
        return;
    }

    // Hitung luas dan keliling
    let luasPP = panjang * lebar;
    let kelilingPP = 2 * (parseFloat(panjang) + parseFloat(lebar));

    // Tampilkan hasil
    errorMsgPP.innerText = "";
    hasilLuasPP.innerText = "Luas: " + luasPP;
    hasilKelilingPP.innerText = "Keliling: " + kelilingPP;
});

// Reset form Persegi Panjang
document.getElementById("resetPP").addEventListener("click", function () {
    document.getElementById("panjang").value = "";
    document.getElementById("lebar").value = "";
    document.getElementById("luasPP").innerText = "";
    document.getElementById("kelilingPP").innerText = "";
    document.getElementById("error-message-pp").innerText = "";
});