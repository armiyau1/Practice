let id: number = 5
let company: string ="traversy media"
let ispublished: boolean = true
let x: any = "hello"
 let ids: number[] = [1,2,3,4,5]
 let arr: any[]=[1,true,"hello"]
  //tuple
  let person: [number, string, boolean]=[1,"brad", true]
  //tuplr array
  let employee: [number, string][]
  employee=[

    [1,"brad"],
    [1,"john"],
    [1,"will"]

  ]
  //union
  let pid:string | number
  pid ="22"
  //enum
  enum direction1{
    up=1,
    down,
    left,
    right,
  }
  //objects
  type user={
    id:number
    name:string
  }
  const User:user={
    id:1,
    name:"armi"
  }
  //type assertion
  let cid: any =1
  let customer = cid as number
  //functions
  function addNum(x:number, y:number):number{
    return x + y
  }
  //interfaces
  interface Userinterface{
id:number
name:string
age?:number
  }

  const user1:Userinterface={
    id:1,
    name:"john"
  }

  interface mathfunc{
    (x:number,y:number):number
  }

  const add: mathfunc=(x:number, y:number): number => x+y
  const sub: mathfunc=(x:number, y:number): number => x-y
  interface Personinterface{
    id:number
    name:string
    register():string
      }
  //classes
  class Person implements Personinterface{
    id:number
    name:string

    constructor(id:number,
        name:string){

            this.id=id
            this.name=name
    }
register(){
    return `${this.name}is now registerd`
}

  }
  const brad = new Person(1,"brad traversy")
  const mike = new Person(1,"brad traversy")

  class Employee extends Person{
    position:string

    constructor(id:number, name:string, position:string){
        super(id,name)
        this.position=position
    }
  }
  const emp = new Employee(3,"shwan","developer")

  //generics
  function getArr<T>(items:T[]):T[]{
    return new Array().concat(items)
  }
  let numArray=getArr<number>([1,2,3,4,5])
  let strArray=getArr<string>(["i","w","e","r","h"])


  