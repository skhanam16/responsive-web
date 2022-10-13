console.count();
fetch("https://jsonplaceholder.typicode.com/posts", {
    method:"POST",
    body: JSON.stringify({
        title: "mytitle",
        age: 60,
        address: "8 Powley street",
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json',
    }

})
.then((res) => {
    if(!res.ok){
        const message = `Error ${res.status}`
        throw new Error(message)
    }
    return ((res.json()))
})
.then((res) => console.log(res))
.catch((err) => {console.log(`${message}`)});