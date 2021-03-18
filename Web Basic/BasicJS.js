// Function
function add(a,b)
{
    console.log(a + b);
}

function subtract(a,b)
{
    console.log(a - b);
}

function findMin(a,b)
{
    var min = 0;
    a - b < 0 ? min = a : min = b;
    console.log(min);
}

function findMax(a,b)
{
    var max = 0;
    a - b > 0 ? max = a : max = b;
    console.log(max);
}

var arr = [1,2,3]

function findArr(arr,x)
{
    var index = arr.indexOf(x,1)
    console.log(index);
}

add(5,6)
subtract(10,8)
findMin(10,5)
findMax(10,15)
findArr(arr,2)

/*------------------------------------------------------------- */
const students = [
    {
        name: 'Nam',
        age: 24,
        gender: 'male',
    },
    {
        name: 'Mai',
        age: 22,
        gender: 'female',
    },
    {
        name: 'Trang',
        age: 20,
        gender: 'female',
    },
    {
        name: 'An',
        age: 23,
        gender: 'male',
    },
    {
        name: 'Thien',
        age: 27,
        gender: 'male',
    }
]

const s1 = students.filter((x) => x.gender == 'male');
console.log(s1.length)

const s2 = students.filter((x) => x.gender == 'female');
console.log(s2.length)

const map1 = students.map((x) => x.name);

console.log(map1)


/*----------------------------------------------------------- */
// Callback function

function Add(num1, num2, callBack)
{
   callBack(num1 + num2);
}


function show(value)
{
    console.log(value);
}

Add(1,2, show)
