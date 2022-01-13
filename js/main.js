let btnGetData = document.getElementById('get-data');



const getData = () => {

    fetch('https://akademia108.pl/api/ajax/get-post.php')
        .then(res => res.json())
        .then(data => {
        
            let pID = document.createElement('p');
            let pUserID = document.createElement('p');
            let pTitle = document.createElement('p');
            let pBody = document.createElement('p');

            pID.innerText = `POST ID: ${data.id}`;
            pUserID.innerText = `User ID: ${data.userId}`;
            pTitle.innerText = `Title: ${data.title}`;
            pBody.innerText = `Body: ${data.body}`;

            document.body.appendChild(pID);
            document.body.appendChild(pUserID);
            document.body.appendChild(pTitle);
            document.body.appendChild(pBody);
        
        // console.log(pbody);
    })

    // console.log(`getData()`)
}

btnGetData.addEventListener('click', getData);