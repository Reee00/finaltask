function recursiveBubbleSort(arr, n = arr.length) {
    // Base case: Jika panjang array tinggal 1, artinya sudah terurut
    if (n === 1) return;

    // Loop untuk mengurutkan elemen terbesar ke akhir
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            // Tukar elemen jika elemen saat ini lebih besar dari elemen berikutnya
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }

    // Rekursif untuk mengurutkan array sisa
    recursiveBubbleSort(arr, n - 1);
}

function sortArray(arr) {
    // Salin array agar tidak mengubah array aslinya
    let sortedArray = [...arr];

    // Panggil recursive bubble sort
    recursiveBubbleSort(sortedArray);

    // Pisahkan bilangan ganjil dan genap
    let ganjil = [];
    let genap = [];
    for (let num of sortedArray) {
        if (num % 2 === 0) {
            genap.push(num);
        } else {
            ganjil.push(num);
        }
    }

    // Output ganjil hanya satu elemen terakhir (terbesar) dari array ganjil
    let largestOdd = ganjil.pop();

    // Kembalikan hasil
    return {
        sortedArray,
        ganjil: largestOdd, // Bilangan ganjil terbesar
        genap
    };
}

// Contoh penggunaan
const arr = [2, 24, 32, 22, 31];
const result = sortArray(arr);

console.log(`Array: ${result.sortedArray.join(', ')}`);
console.log(`Ganjil: ${result.ganjil}`);
console.log(`Genap: ${result.genap.join(', ')}`);
