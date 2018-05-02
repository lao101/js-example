// let list = ['a', 'b', 'c', 'd']

// list.forEach((item, idx, items)=>{
//     console.log(`Item: ${item}, Idx: ${idx}, Items: ${item}`);  
// })

// //ลบอันดับที่ 3
// list.splice(2, 1);

// list.forEach((item, idx, items)=>{
//     console.log(`Item: ${item}, Idx: ${idx}, Items: ${item}`);  
// })

let data = {
    id: 1,
    name: 'Name1',
    age: 25,
}

let str = JSON.stringify(data)
console.log(str)

let obj = JSON.parse(str)
console.log(obj)
