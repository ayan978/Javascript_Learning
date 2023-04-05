
{
    //Number data type is used for both integer and float/double in Javascript
    let x = 12;
    let y = 9007199254740992;
    console.log(Number.MAX_SAFE_INTEGER);
    console.log(Number.MIN_SAFE_INTEGER);
    console.log(Number.isSafeInteger(x));
    console.log(Number.isSafeInteger(y));

    let a = 2, b = 3;
    console.log(Math.pow(a,b));
    console.log(1/0)

}