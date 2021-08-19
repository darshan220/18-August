// Reduce method 

const info= [
    {employee:'darshan', id: 09, class: 'Reactjs', salary:25000},
    {employee:'hiren', id: 08, class: 'Nodejs', salary:28000},
    {employee:'Hitesh', id: 07, class: 'Reactjs', salary:35000},
    {employee:'Sahil', id: 06, class: 'Reactjs', salary:45000},
];

const total1 = info.reduce((total,user)=> {

    //console.log(total);
    console.log(user.salary);
    total += user.salary
    return total
},0)

console.log(total1)