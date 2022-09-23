// Your code here:
    let lyric1 ;
    let lyric2 ;
    let finalResult;
    for (let i = 99; i >= 0; i--) {
        lyric1 = `${i} bottles of milk on the wall, ${i} bottles of milk.`;
        lyric2 = ` Take one down and pass it around, ${i-1} bottles of milk on the wall.`;
    
        if (i == 2) {
            lyric2 = ` Take one down and pass it around, ${i-1} bottle of milk on the wall.`;
        } else if (i == 1) {
            lyric1 = `${i} bottle of milk on the wall, ${i} bottle of milk.`;
            lyric2 = ` Take one down and pass it around, no more bottles of milk on the wall.`;
        }else if (i == 0){
            lyric1 = `No more bottles of milk on the wall, no more bottles of milk.`;
            lyric2 = ` Go to the store and buy some more, 99 bottles of milk on the wall.`;
        }
        finalResult = lyric1 + lyric2;
        console.log(finalResult)
    }