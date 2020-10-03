function add(){
    var input = [1,2,3,4,5];
    var angka = ["angka 1","angka 2","angka 3","angka 4","angka 5"];
    
    var total = 0;
    
    input.splice(2, 1);

    for(var i=0; i < input.length; i++){
        total += input[i];
    }

    var join = input.join("+");

    console.log(angka[2] + " : " + join + " = " + total)


}

add();