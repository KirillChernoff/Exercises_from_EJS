function Main_sample_1() {
    Triangle();
    FizzBuzz();
    ChesseMate();
}

function Triangle() {

    var str = "#";

    console.log(str);

    for (var i = 0; str.length < 7; i++){
        str += "#";
        console.log(str);
    }
}

function FizzBuzz(){

    var fizz = "Fizz";
    var buzz = "Buzz";

    var three = 3;
    var five = 5;

    for (var i = 1; i <= 100; i++){

        if((i % three) == 0){
            console.log(i + " " + fizz);

            if((i % five) == 0){
                console.log(i + " " + fizz + buzz);
            }
        }

        if((i % five) == 0){
            console.log(i + " " + buzz);
        }
    }
}

function ChesseMate(){

    var size = 8;

    var str = "";

    for (var j = 0; j < size; j++){
        for (var i = 0; i < size; i++) {
            if((i % 2) == 0) {
                if((j % 2) == 0)
                    str += "#";
                else
                    str += " ";
            }
            else {
                if((j % 2) == 0)
                    str += " ";
                else
                    str += "#";
            }
        }

        console.log(str);

        str = "";
    }
}
