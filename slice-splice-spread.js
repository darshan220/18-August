// remove data using spread,splice and slice operator 


console.log("using spread operator");


var arr = ['cat','dog','elephant','lion','tiger','mouse'];
console.log(arr);

    function remove(...toRemove)
    {
            toRemove.forEach(item => {

            var index = arr.indexOf(item);

            if (index != -1)
            {
            arr.splice(index,1);
            }
    })
    }

remove('cat','dog')
console.log(arr);

console.log('----------');


console.log("using splice operator");

//Splice method returns the removed items in an array. 
//splice method changes the original array.
//splice method can take n number of argunments.

        var arr = ['luffy','sanji','nami','robin','usoop'];
        console.log(arr);

        var c = arr.splice(2,2,'zoro','brook')
        console.log(c);

        arr.splice(1)//Removed all the index except "1st"---"luffy"
        console.log(arr);

        console.log('----------');

        console.log("using slice operator");

//slice method returns the selected elements in an array, as new object.
//slice method doesn't change the original array.
//slice method takes 2 argunment.


        function fun(){
    
            var arr = [20,23,56,87,75,13];

            var new_arr=arr.slice(2,6);
            console.log(arr);
            console.log(new_arr);

        }
        fun()

