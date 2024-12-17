function checkAnemia() {
    const name = document.getElementById('name').value;
    const kecamatan = document.getElementById('kecamatan').value;
    const kelurahan = document.getElementById('kelurahan').value;
    const rtRw = document.getElementById('rt-rw').value;
    const gender = document.getElementById("gender").value;
    const age = parseFloat(document.getElementById("age").value);
    const hemoglobin = parseFloat(document.getElementById("hemoglobin").value);
    const resultElement = document.getElementById("result");


    if (!name || !kecamatan || !kelurahan || !rtRw || !gender || isNaN(age) || isNaN(hemoglobin)) {
        resultElement.style.display = 'none';
        return;
    }

    let diagnosis = "";
    let diagnosisClass = "";
    let suggestion = "";

    resultElement.className = "";
    resultElement.style.display = 'none';

    // Cek diagnosis berdasarkan usia dan jenis kelamin
    if (age >= 0.5 && age < 5) { // Anak 6 - 59 bulan
        if (hemoglobin < 7) {
            diagnosis = "Anemia Berat";
            diagnosisClass = "anemia-berat";
            suggestion = "Segera konsultasikan ke dokter untuk penanganan lebih lanjut.";
        } else if (hemoglobin < 10) {
            diagnosis = "Anemia Sedang";
            diagnosisClass = "anemia-sedang";
            suggestion = "Disarankan untuk meningkatkan asupan gizi dan konsultasi ke dokter.";
        } else if (hemoglobin < 11) {
            diagnosis = "Anemia Ringan";
            diagnosisClass = "anemia-ringan";
            suggestion = "Jangan lupa Pemeriksaan Kesehatan secara berkala ya, istirahat yang cukup dan hindari stress.";
        } else {
            diagnosis = "Tidak Anemia";
            diagnosisClass = "tidak-anemia";
            suggestion = "Mari jaga kesehatan untuk mencegah anemia dengan rutin mengonsumsi Tablet Tambah Darah (TTD) seminggu sekali.";
        }
    } else if (age >= 5 && age < 12) { // Anak 5 - 11 tahun
        if (hemoglobin < 8) {
            diagnosis = "Anemia Berat";
            diagnosisClass = "anemia-berat";
            suggestion = "Segera konsultasikan ke dokter untuk penanganan lebih lanjut.";
        } else if (hemoglobin < 11) {
            diagnosis = "Anemia Sedang";
            diagnosisClass = "anemia-sedang";
            suggestion = "Disarankan untuk meningkatkan asupan gizi dan konsultasi ke dokter.";
        } else if (hemoglobin < 11.5) {
            diagnosis = "Anemia Ringan";
            diagnosisClass = "anemia-ringan";
            suggestion = "Jangan lupa Pemeriksaan Kesehatan secara berkala ya, istirahat yang cukup dan hindari stress.";
        } else {
            diagnosis = "Tidak Anemia";
            diagnosisClass = "tidak-anemia";
            suggestion = "Mari jaga kesehatan untuk mencegah anemia dengan rutin mengonsumsi Tablet Tambah Darah (TTD) seminggu sekali.";
        }
    } else if (age >= 12 && age < 15) { // Anak 12 - 14 tahun
        if (hemoglobin < 8) {
            diagnosis = "Anemia Berat";
            diagnosisClass = "anemia-berat";
            suggestion = "Segera konsultasikan ke dokter untuk penanganan lebih lanjut.";
        } else if (hemoglobin < 11) {
            diagnosis = "Anemia Sedang";
            diagnosisClass = "anemia-sedang";
            suggestion = "Disarankan untuk meningkatkan asupan gizi dan konsultasi ke dokter.";
        } else if (hemoglobin < 12) {
            diagnosis = "Anemia Ringan";
            diagnosisClass = "anemia-ringan";
            suggestion = "Jangan lupa Pemeriksaan Kesehatan secara berkala ya, istirahat yang cukup dan hindari stress.";
        } else {
            diagnosis = "Tidak Anemia";
            diagnosisClass = "tidak-anemia";
            suggestion = "Mari jaga kesehatan untuk mencegah anemia dengan rutin mengonsumsi Tablet Tambah Darah (TTD) seminggu sekali.";
        }
    } else if (gender === "male" && age >= 15) { // Laki-laki ≥ 15 tahun
        if (hemoglobin < 8) {
            diagnosis = "Anemia Berat";
            diagnosisClass = "anemia-berat";
            suggestion = "Segera konsultasikan ke dokter untuk penanganan lebih lanjut.";
        } else if (hemoglobin < 11) {
            diagnosis = "Anemia Sedang";
            diagnosisClass = "anemia-sedang";
            suggestion = "Disarankan untuk meningkatkan asupan gizi dan konsultasi ke dokter.";
        } else if (hemoglobin < 13) {
            diagnosis = "Anemia Ringan";
            diagnosisClass = "anemia-ringan";
            suggestion = "Jangan lupa Pemeriksaan Kesehatan secara berkala ya, istirahat yang cukup dan hindari stress.";
        } else {
            diagnosis = "Tidak Anemia";
            diagnosisClass = "tidak-anemia";
            suggestion = "Mari jaga kesehatan untuk mencegah anemia dengan rutin mengonsumsi Tablet Tambah Darah (TTD) seminggu sekali.";
        }
    } else if (gender === "female" && age >= 15) { // Perempuan ≥ 15 tahun
        if (hemoglobin < 8) {
            diagnosis = "Anemia Berat";
            diagnosisClass = "anemia-berat";
            suggestion = "Segera konsultasikan ke dokter untuk penanganan lebih lanjut.";
        } else if (hemoglobin < 11) {
            diagnosis = "Anemia Sedang";
            diagnosisClass = "anemia-sedang";
            suggestion = "Disarankan untuk meningkatkan asupan gizi dan konsultasi ke dokter.";
        } else if (hemoglobin < 12) {
            diagnosis = "Anemia Ringan";
            diagnosisClass = "anemia-ringan";
            suggestion = "Jangan lupa Pemeriksaan Kesehatan secara berkala ya, istirahat yang cukup dan hindari stress.";
        } else {
            diagnosis = "Tidak Anemia";
            diagnosisClass = "tidak-anemia";
            suggestion = "Mari jaga kesehatan untuk mencegah anemia dengan rutin mengonsumsi Tablet Tambah Darah (TTD) seminggu sekali.";
        }
    }

    // Tampilkan hasil diagnosis dan saran
    resultElement.innerHTML = `<strong>${diagnosis}</strong><br><p>${suggestion}</p>`;
    resultElement.className = "result " + diagnosisClass;
    resultElement.style.display = 'block';

    resultElement.classList.remove('show');
    setTimeout(() => resultElement.classList.add('show'), 100);
}

window.addEventListener('scroll', () => {
    const header = document.getElementById('pageHeader');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Tambahkan event listener ke input form untuk diagnosis otomatis
document.getElementById("gender").addEventListener("input", checkAnemia);
document.getElementById("age").addEventListener("input", checkAnemia);
document.getElementById("hemoglobin").addEventListener("input", checkAnemia);


document.addEventListener("DOMContentLoaded", function() {

    const kelurahanData = {
        "beji": ["Beji", "Beji Timur", "Kemirimuka", "Kukusan", "Pondok Cina", "Tanahbaru"],
        "bojongsari": ["Bojongsari", "Bojongsari Baru", "Curug", "Durenmekar", "Durenseribu", "Pondokpetir", "Serua"],
        "cilodong": ["Cilodong", "Jatimulya", "Kalibaru", "Kalimulya", "Sukamaju"],
        "cimanggis": ["Cisalak Pasar", "Curug", "Harjamukti", "Mekarsari", "Pasir Gunung Selatan", "Tugu"],
        "cinere": ["Cinere", "Gandul", "Pangkalan Jati", "Pangkalan Jati Baru"],
        "cipayung": ["Bojong Pondok Terong", "Cipayung", "Cipayung Jaya", "Pondok Jaya", "Ratujaya"],
        "limo": ["Grogol", "Krukut", "Limo", "Meruyung"],
        "pancoranmas": ["Depok", "Depok Jaya", "Mampang", "Pancoran Mas", "Rangkapan Jaya", "Rangkapan Jaya Baru"],
        "sawangan": ["Bedahan", "Cinangka", "Kedaung", "Pasir Putih", "Pengasinan", "Sawangan Baru", "Sawangan"],
        "sukmajaya": ["Abadijaya", "Baktijaya", "Cisalak", "Mekarjaya", "Sukmajaya", "Tirtajaya"],
        "tapos": ["Cilangkap", "Cimpaeun", "Jatijajar", "Leuwinanggung", "Sukamaju Baru", "Sukatani", "Tapos"]
    };

    const kecamatanSelect = document.getElementById("kecamatan");
    const kelurahanSelect = document.getElementById("kelurahan");


    kecamatanSelect.addEventListener("change", function() {
        const selectedKecamatan = kecamatanSelect.value;


        kelurahanSelect.innerHTML = '<option value="" disabled selected>Pilih Kelurahan</option>';


        if (selectedKecamatan && kelurahanData[selectedKecamatan]) {
            kelurahanData[selectedKecamatan].forEach(kelurahan => {
                const option = document.createElement("option");
                option.value = kelurahan.toLowerCase().replace(/\s/g, "-"); 
                option.textContent = kelurahan;
                kelurahanSelect.appendChild(option);
            });
        }
    });
});