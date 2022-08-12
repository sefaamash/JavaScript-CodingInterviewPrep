class Person{
    constructor(firstName,lastName){
        this.firstName=firstName
        this.lastName=lastName
    }

   get fullname(){
        return `First Name is ${this.firstName} and lastname is ${this.lastName}`
    }

    //set method is used when we want to vhange the default input that we take from constructor
    set fullname(fulname){
    const {firstName,lastName}=fulname.split(" ") // we are writing the full name like Aamash Khan so it it will split Aamash Khan as am array like['Aamash','Khan]
    this.firstName=firstName
    this.lastName=lastName
   
     }
}

p1=new Person('Aamash','Khan')
//Now we are calling full name as a method fullname() using () so if i wana use it as property like this p1.fullname then using get with methodname eg, get fullname()
//console.log(p1.fullname())
//calling as a property
console.log(p1.fullname)
p1.fullname="Zainab Siddiqui"
console.log(p1.fullname)