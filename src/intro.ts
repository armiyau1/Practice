
class car{
    brand:string;
    model:string;
    year:number;

    constructor (brand:string,model:string,year:number){
this.brand=brand
this.model=model
this.year=year
    }
getCarInfo(){
    return `${this.brand} ${this.model} ${this.brand}`
}
getCarAge(){
    if(this.year < 2015){
        console.log("your car is old")
    }else{
        console.log("your car is new")
    }
}
}
const myCar = new car ("Toyota","Camry",2010)
myCar.getCarAge()
const nyCar = new car ("Toyota","Camry",2022)
myCar.getCarAge()


