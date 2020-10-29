class Electric {
    constructor(i) {
        this.u_napryshenie = 220;
        this.i_force = i;
    }
    getPower(i){
        console.log('потребляемая мощность ' + this.i_force * this.u_napryshenie)
    }
}

const tv = new Electric(10);
const pc = new Electric(15);

class Lamp extends Electric{
    constructor() {
        super();
        this.posion =  true;
        this.i_force=400;
    }
}
const lamp =new Lamp();

lamp.getPower();
tv.getPower();
pc.getPower();