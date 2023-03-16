//Exercise 1.1
let person = ["Sofia", "David", "Juan"];
console.log(person);
//Exercise 1.2
person.push("Sara","Austin");
console.log(person);
person.shift();
console.log(person);
//Exercise 1.3
person.splice(person.indexOf('David')+1,0,'Renata');
console.log(person);
person.push('Elena');
console.log(person);

//Exercise 2
for(let i=0; i<1; i++){
    let count="";
    let star= '*';
    for(let j=1;j<6;j++){
        count = star+count;
        console.log(count);
    }
}

//Exercise 3
const countdown = num =>{
    console.log("Start number " + num);
    while(num>0){
        num -= 0.5;
        console.log("Countdown " + num);
    }
}
countdown(5);

const countOddNum = num =>{
    let i = 0;
    while(i<num){
        i++
        i%2 === 1 ? console.log(i) : null;
    }
}
countOddNum(100);


const countNum = num =>{
    console.log(num)
    let i = 0;
    while(i<num){
        i += 1;
        console.log(`[${i}]`);
    }
}

countNum(6);

const totalAdd = num => {
    let i = 0;
    let total = 0;
    while(i<num){
        i++
        total += i;
    }
    console.log(total)
}
totalAdd(5);
totalAdd(19);