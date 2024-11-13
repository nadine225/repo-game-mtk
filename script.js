// Fungsi untuk menghasilkan soal matematika acak
function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1; // Angka pertama antara 1-10
    const num2 = Math.floor(Math.random() * 10) + 1; // Angka kedua antara 1-10
    const question = num1 + " + " + num2;
    const correctAnswer = num1 + num2;

    // Menyimpan soal dan jawabannya di sessionStorage
    sessionStorage.setItem("correctAnswer", correctAnswer);

    // Menampilkan soal di HTML
    document.getElementById("question").innerText = "Berapa hasil dari: " + question;
    document.getElementById("feedback").innerText = ""; // Hapus umpan balik
    document.getElementById("answer").value = ""; // Kosongkan inputan jawaban
}

// Fungsi untuk memeriksa jawaban yang dimasukkan
function checkAnswer() {
    const userAnswer = document.getElementById("answer").value;
    const correctAnswer = sessionStorage.getItem("correctAnswer");

    // Cek apakah jawaban benar atau salah
    if (parseInt(userAnswer) === parseInt(correctAnswer)) {
        document.getElementById("feedback").innerText = "Jawaban benar! 🎉";
        document.getElementById("feedback").style.color = "green";
    } else {
        document.getElementById("feedback").innerText = "Jawaban salah! 😔";
        document.getElementById("feedback").style.color = "red";
    }
}

// Menghasilkan soal pertama kali saat halaman dimuat
window.onload = function() {
    generateQuestion();
};
