//Converting to promise 
  class User
{
    constructor(name,age)
    {
        this.name=name
        this.age=age
    }
}
   export function printName(user) {
        console.log(`Usaer's name: ${user.name}`);
    }
export function printAge(user) {
        console.log(`User's age: ${user.age}`);
    }

export default User
