class Car{
   color='red'
constructor (model,name){
    this.model=model
    this.name=name
}

start(){
    console.log("car name is "+this.name +"and model is" +this.model)
}
}

bmw= new Car(2003," Sports Car")
bmw.start()
console.log(bmw.color)