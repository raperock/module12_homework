const myObj = {
    color:'black',
    height:'300',
    weight:'100',
}
let value;
obj = function () {
    for(let key in myObj){
        let value =myObj[key];
        if(myObj.hasOwnProperty(key)){
            console.log(key + ' '+ value);
        }
    }
}
obj(myObj);