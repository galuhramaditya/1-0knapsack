var kapasitas = 16;
var barang = [
	{ berat: 2, kuntungan: 20 },
	{ berat: 5, kuntungan: 30 },
	{ berat: 10, kuntungan: 50 },
	{ berat: 5, kuntungan: 10 },
];

var total = [{ himpunan: barang.map(() => 0), bobot: 0, keuntungan: 0 }];
var solusi = total[0];

function combination(temp, data) {
	for (var i = 0; i < data.length; i++) {
		var hasil = {
			himpunan: temp.himpunan.map((val, index) => index == barang.indexOf(data[i]) ? 1 : val),
			bobot: temp.bobot + data[i].berat,
			keuntungan: temp.keuntungan + data[i].kuntungan
		};

		if (hasil.bobot <= kapasitas && solusi.keuntungan <= hasil.keuntungan) {
			solusi = hasil
		};

		total.push(hasil);
		combination(hasil, data.slice(i + 1));
	}
}

combination(solusi, barang);

console.log("kapasitas:", kapasitas, "\n");
console.log("barang:", barang, "\n");
console.log("total:", total, "\n");
console.log("solusi:", solusi, "\n");