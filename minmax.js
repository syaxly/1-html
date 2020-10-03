function add(){
    var total = [14, 13, 12, 11, 10];
    var nilaimax = Math.max.apply(null, total);
    var nilaimin = Math.min.apply(null, total);

    console.log("Maka angka terbesar dan terkecilnya adalah " + nilaimax + " dan " + nilaimin)
}

add();