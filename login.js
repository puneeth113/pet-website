var image=new Image()
fetch("https://dog.ceo/api/breeds/image/random",{
    method:"POST",
    headers: {
        'content-Type': 'application/json',
    },

    body:JSON_stringify({
        username:'john-doe',
        password:'password123'
    })
    .then(response=>response.json())
    .then(data=>console.log(data))
    .image.src=data
    .catch(error=>console.error(err))

})
