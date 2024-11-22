
//FUNCTION
//What if you don't type
function subTwo(sub){
    return sub -2
}
subTwo(4)

//function with number :Adding numbers 
function addTwo(num:number){
    return num+3
}
addTwo(5)

//function with string: toUpperCase
function letterUpper(val: string){
    return val.toUpperCase
}
letterUpper("hello world")


//function with string, number, boolean for signup
function signUP(name:string, email: string, phone :number, isPaid: boolean){
    
}
signUP("sand", "@gmail", 1, false)


//function for login check
let loginUser= (name: string, email: string, isPaid : boolean =false) =>{

}
loginUser("hello", "@world")





//a better way to write function 
//Assign the type check for function , in below code replace string with boolean and check the error and vice versa
// function getValue(myVal: number):string {
//     if(myVal > 5){
//         return true
//     }
//     return "200 OK "
// }

//See how the hero callback function rely on the context provided heros 
const heros =["Rajesh", "Deepak","Bipin"]
// const heros=[1,2,3]
heros.map((hero): string=>{
    return `hero is ${hero}`
})

//consoleError function
function consoleError(errmsg:string): void{
    console.log(errmsg)
}


//handleError function
function handleError(errmsg:string): never{
    throw new Error(errmsg)
}



export { }

