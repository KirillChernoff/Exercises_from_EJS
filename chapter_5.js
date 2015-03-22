function Main_sample_2() {

    min(-6, 10);
    min(4, 2);

    console.log("");

    console.log(isEven(50));
    console.log(isEven(75));
    console.log(isEven(-55));

    console.log("");

    countChars("countAAAAs", "A");
}

function min(num1, num2) {
    if (num1 < num2)
        console.log(num1);
    else
        console.log(num2);
}

function isEven(number){
    if(number == 1){
        return false;
    }else if(number == 0){
        return true;
    }else if(number < 0){
        return isEven(number + 2);
    }else {
        return isEven(number - 2);
    }
}

function countChars(str, ch){
    var count = 0;

    for (var i = 0; i < str.length; i++){
        if(str.charAt(i) == ch){
            count++;
        }
    }

    console.log("Count \"" + ch + "\" in string: " + count);
}
