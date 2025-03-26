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

// Fungsi validasi input (hanya angka positif)
function validateNumber(input, errorMsgId) {
    let value = input.value;
    let errorMsg = document.getElementById(errorMsgId);

    // Hapus karakter selain angka
    input.value = value.replace(/[^0-9]/g, '');

    if (input.value === "" || parseFloat(input.value) <= 0) {
        errorMsg.innerText = "Hanya boleh angka positif lebih dari 0!";
        input.setCustomValidity("Hanya boleh angka positif lebih dari 0!");
    } else {
        errorMsg.innerText = "";
        input.setCustomValidity("");
    }
}

// Tambahkan event listener ke input agar validasi berjalan saat mengetik
document.getElementById("sisi").addEventListener("input", function () {
    validateNumber(this, "error-message");
});

document.getElementById("panjang").addEventListener("input", function () {
    validateNumber(this, "error-message-pp");
});

document.getElementById("lebar").addEventListener("input", function () {
    validateNumber(this, "error-message-pp");
});

// Kalkulasi Luas dan Keliling Persegi (dengan rumus)
document.getElementById("hitung").addEventListener("click", function () {
    let sisi = document.getElementById("sisi").value;
    let errorMsg = document.getElementById("error-message");
    let hasilLuas = document.getElementById("luas");
    let hasilKeliling = document.getElementById("keliling");

    if (sisi === "" || parseFloat(sisi) <= 0) {
        errorMsg.innerText = "Masukkan panjang sisi yang valid!";
        hasilLuas.innerText = "";
        hasilKeliling.innerText = "";
        return;
    }

    // Hitung luas dan keliling
    let luas = sisi * sisi;
    let keliling = 4 * sisi;

    // Tampilkan hasil dengan rumus
    errorMsg.innerText = "";
    hasilLuas.innerHTML = `Luas = sisi × sisi <br> = ${sisi} × ${sisi} <br> = <b>${luas}</b>`;
    hasilKeliling.innerHTML = `Keliling = 4 × sisi <br> = 4 × ${sisi} <br> = <b>${keliling}</b>`;
});

// Reset form Persegi
document.getElementById("reset").addEventListener("click", function () {
    document.getElementById("sisi").value = "";
    document.getElementById("luas").innerText = "";
    document.getElementById("keliling").innerText = "";
    document.getElementById("error-message").innerText = "";
});

// Kalkulasi Luas dan Keliling Persegi Panjang (dengan rumus)
document.getElementById("hitungPP").addEventListener("click", function () {
    let panjang = document.getElementById("panjang").value;
    let lebar = document.getElementById("lebar").value;
    let errorMsgPP = document.getElementById("error-message-pp");
    let hasilLuasPP = document.getElementById("luasPP");
    let hasilKelilingPP = document.getElementById("kelilingPP");

    if (panjang === "" || parseFloat(panjang) <= 0 || lebar === "" || parseFloat(lebar) <= 0) {
        errorMsgPP.innerText = "Masukkan panjang dan lebar yang valid!";
        hasilLuasPP.innerText = "";
        hasilKelilingPP.innerText = "";
        return;
    }

    // Hitung luas dan keliling
    let luasPP = panjang * lebar;
    let kelilingPP = 2 * (parseFloat(panjang) + parseFloat(lebar));

    // Tampilkan hasil dengan rumus
    errorMsgPP.innerText = "";
    hasilLuasPP.innerHTML = `Luas = panjang × lebar <br> = ${panjang} × ${lebar} <br> = <b>${luasPP}</b>`;
    hasilKelilingPP.innerHTML = `Keliling = 2 × (panjang + lebar) <br> = 2 × (${panjang} + ${lebar}) <br> = <b>${kelilingPP}</b>`;
});

// Reset form Persegi Panjang
document.getElementById("resetPP").addEventListener("click", function () {
    document.getElementById("panjang").value = "";
    document.getElementById("lebar").value = "";
    document.getElementById("luasPP").innerText = "";
    document.getElementById("kelilingPP").innerText = "";
    document.getElementById("error-message-pp").innerText = "";
});