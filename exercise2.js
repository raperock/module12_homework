ourObj={
    size: '3',
    fit: '2',
    both:'70',
}

let checkStr='2'
let value;
let flag;
const checkValue = function () {

    for (let key in ourObj) {
        value=ourObj[key];
        if (checkStr == value)
        {
            flag='true'
            break;
        }
        else flag='false';
    }
   console.log(flag);
}
checkValue();