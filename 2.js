function hitungVoucher(voucher, totalBelanja, uangDibayar) {
    let diskon = 0;
    let totalBayar = totalBelanja;

    if (voucher === "DumbWaysJos") {
        if (totalBelanja >= 50000) {
            diskon = totalBelanja * 0.211; // Potongan 21,1%
            if (diskon > 20000) {
                diskon = 20000; // Maksimal diskon 20000
            }
            totalBayar = totalBelanja - diskon;
        }
    } else if (voucher === "DumbWaysMantap") {
        if (totalBelanja >= 80000) {
            diskon = totalBelanja * 0.3; // Potongan 30%
            if (diskon > 40000) {
                diskon = 40000; // Maksimal diskon 40000
            }
            totalBayar = totalBelanja - diskon;
        }
    }

    // Hitung kembalian
    let kembalian = uangDibayar - totalBayar;

    // Output
    console.log(`Uang yang harus dibayar: ${totalBayar}`);
    console.log(`Diskon: ${diskon}`);
    console.log(`Kembalian: ${kembalian}`);
}

// Contoh penggunaan
hitungVoucher("DumbWaysJos", 100000, 100000);
