let task1 = () => {
    return new Promise((resolve, reject) => {
        let a = 1 + 1;
        if(a ==2){
            resolve("task1 is success");
        }
        else{
            reject("failed");
        }
    })
}

let task2 = () => {
    return new Promise((resolve, reject) => {
        let a = 1 + 1;
        if(a ==2){
            resolve("task2 is success");
        }
        else{
            reject("failed");
        }
    })
}

let task3 = () => {
    return new Promise((resolve, reject) => {
        let a = 1 + 8;
        if(a ==2){
            setTimeout(() =>{
                resolve("task3 is success");
            }, 3000);
           
        }
        else{
            reject("failed");
        }
    })
}


let task4 = () => {
    return new Promise((resolve, reject) => {
        let a = 1 + 1;
        if(a ==2){
            resolve("task4 is success");
        }
        else{
            reject("failed");
        }
    })
}


task1()
.then((res) => {
    console.log(res)
})
.then(task2)
.then((res) => {
    console.log(res)
})

.then(task3)
.then((res) => {
    console.log(res)
})

.then(task4)
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(`the result is ${err}`);
})