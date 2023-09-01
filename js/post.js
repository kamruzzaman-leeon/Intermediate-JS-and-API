// console.log('connect')

function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts'
     )
     .then(res => res.json())
     .then(data => displayData(data))
}

1.

function displayData(posts){
    const container = document.getElementById('posts-container');
    for(const post of posts){
        const div = document.createElement('div');
        div.innerHTML = `
        <h5>Use ID: ${post.userId}</h5>
        `
        console.log(posts);
    }
}

loadPosts();