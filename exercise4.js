
function Electric(i) {
    this.u_napryshenie = 220;
    this.i_force = i
}
    Electric.prototype.getPower=function () {
        console.log('потребляемая мощность ' + this.i_force * this.u_napryshenie);

    }
const tv = new Electric(10);
const pc = new Electric(15);

function ChairElectric(force_i,posion) {
    this.i_force = force_i;
    this.posion = posion;
}
ChairElectric.prototype = new Electric()
const armchair=new ChairElectric(100500, 'sit');
ChairElectric.prototype.getPower = function () {
    console.log('потребляемая мощность стула ' + this.i_force * this.u_napryshenie);
    const armchair = new ChairElectric(100500, 'sit');
}
armchair.getPower();
tv.getPower();
pc.getPower();