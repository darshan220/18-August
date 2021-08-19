//Async / Await                     


// const example = async () => {
//     return 'Hey, how are you?'
// }

// async function fun(){
//     const result = await example()
//     console.log(result)
// }

// console.log(example()) 

// fun()


  const users =[
      {id: 1,name:'darshan'},
      {id: 2,name:'hitesh'},
      {id: 3,name:'hiren'},
  ]

  const hobby = [
      {userID: 1, hobby: 'piano'},
      {userID: 2, hobby: 'gaming'},
      {userID: 3, hobby: ' football'},
  ]

  const getdata = async () => {
      try 
      {
        const user = await getuser('darshan');
        if (user)
        {
          const hobby = await gethobby(user.id)
          console.log(user);
          console.log(hobby) 
        }
      } catch (error) 
        {
            console.log(error); 
        }  
  }

  getdata()


  function getuser(name) {
      return new Promise((resolve,reject)=> {
          const user = users.find((user)=> user.name === name)

          if (user){
              return resolve(user)
          }
          else{
              reject(`NO such user with name : ${name}`);
          }
      })
  }

  function gethobby(userID){
      return new Promise((resolve,reject)=> {
          const userhobby = hobby.find((user) => user.userID === userID)
            if (userhobby)
            {
                return resolve(userhobby.hobby);
            }
            else
            {
                reject(`Wrong ID`);
            }
      })
  }


































