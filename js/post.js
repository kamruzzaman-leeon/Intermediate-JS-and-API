// console.log('connect')

function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts'
     )
     .then(res => res.json())
     .then(data => displayData(data))
}

/*
 1.gety the container element where you want to add the new elements
2. create child element
3. set innerText or innerHTML
4. appendChild
*/

function displayData(posts){
    const container = document.getElementById('posts-container');
    for(const post of posts){
        const postdiv = document.createElement('div');
        postdiv.classList.add('post'); 
        postdiv.innerHTML = `
        <h5>Use ID: ${post.userId}</h5>
        <h4>ID: ${post.id}</h4>
        <h4>title: ${post.title}</h4>
        <p>Description: ${post.body}</p>
        `;

        posts-container.appendChild(postdiv);
        console.log(posts);
    }
}

loadPosts();