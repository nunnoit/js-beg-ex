function sing() {
    var w = "";
    var w2 = "";
    for (let i = 0; i < 4; i++) {
        var letitbe = w += 'let it be,' + " ";
    }
    let whisper = "whisper words of wisdom, ";
    for (let i = 0; i < 5; i++) {
        var letitbe2 = w2 += 'let it be,' + " ";
    }
    let answer = "there will be an answer,";
    let letitbend = " let it be";
    return letitbe + whisper + letitbe2 + answer + letitbend;
}

console.log(sing());
