
function Electric(i) {
    this.u_napryshenie = 220;
    this.i_force = i;
    this.status = false; // Флаг, отвечающий за состояние прибора (вкл\выкл). По умолчанию прибор выключен.
}

Electric.prototype.getPower=function () {
    console.log('потребляемая мощность ' + this.i_force * this.u_napryshenie);
}

Electric.prototype.switchOn=function () {
    this.status = true;
}

Electric.prototype.switchOff=function () {
    this.status = false;
}

function Television(i_force, model, madeIn) {
	this.i_force = i_force;
	this.model = model;
	this.madeIn = madeIn;
}

Television.prototype = new Electric();

Television.prototype.getInfo = function() {
	console.log(`TV model is ${this.model}, made in ${this.madeIn}`);
}

const tv = new Television(10, 'Samsung', 'China');
// const pc = new Electric(15);

function ChairElectric(force_i,posion) {
    this.i_force = force_i;
    this.posion = posion;
}
ChairElectric.prototype = new Electric()
const armchair=new ChairElectric(100500, 'sit');
ChairElectric.prototype.getPower = function () {
    console.log('потребляемая мощность стула ' + this.i_force * this.u_napryshenie);
    // const armchair = new ChairElectric(100500, 'sit'); // Зачем здесь создается ещё один экземпляр?
}
armchair.getPower();
tv.getInfo();
// pc.getPower();

// Задание выполнено не до конца. По условию нужно было создать родительскую функцию-конструктор, а так же 2 дочерних конструктора, которые наследуют от родительского. У вас есть только один дочерний конструктор, который имеет в качестве прототипа родительский конструктор Electric. Объекты tv и pc являются просто экземплярами конструктора Electric. Кроме того, дочерние конструкторы должны иметь свои собственные свойства или методы, отличные от родительских. Также у родительского конструктора должны быть методы, отвечающие за включение/выключение прибора, сейчас таких методов нет.
// Выше исправила