class Car{
    constructor(model,name){
        this.model=model;
        this.name=name;
}
start(){
    console.log(this.name)
}
}
class ElecticCar extends Car{
    start(){
        console.log(this.name)
        console.log(super.start())
    }
 
}
car=new ElecticCar(2022, 'tESLA')
car.start()