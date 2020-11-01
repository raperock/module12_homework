const myObj = {
    color:'black',
    height:'300',
    weight:'100',
}
let value;
let obj = function () {
    for(let key in myObj){
        let value =myObj[key];
        if(myObj.hasOwnProperty(key)){
            console.log(key + ' '+ value);
        }
    }
}
obj(myObj);

// Всё верно, но есть важное замечание: если используете Function Expression для объявления функции, не забывайте пожалуйста про ключевые слова. Сейчас функция obj объявлена глобально, что не совсем правильно.