function drawSikuSiku(n) {
    // Validasi input
    if (n <= 0 || n >= 10) {
        console.log("Input harus antara 1 dan 9.");
        return;
    }

    // Fungsi untuk memeriksa apakah sebuah angka adalah bilangan prima
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    // Membuat array bilangan prima
    let primes = [];
    let num = 2;
    while (primes.length < n * (n + 1) / 2) { // Total bilangan prima yang dibutuhkan untuk segitiga
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }

    // Menampilkan segitiga siku-siku terbalik
    let index = 0;
    for (let i = 1; i <= n; i++) {  // Dari baris 1 hingga baris n
        let row = "";
        for (let j = 0; j < i; j++) {  // Cetak i bilangan prima di baris ke-i
            row += primes[index] + " ";
            index++;
        }
        console.log(row.trim());  // Hapus spasi terakhir dan cetak
    }
}

// Contoh penggunaan
drawSikuSiku(7);
