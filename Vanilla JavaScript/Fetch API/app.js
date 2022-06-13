const textBtn = document.getElementById("getText");
textBtn.addEventListener("click", getText);

const userBtn = document.getElementById("getUsers");
userBtn.addEventListener("click", getUsers);

const apiBtn = document.getElementById("getPosts");
apiBtn.addEventListener("click", getPosts);

const form = document.getElementById("addPost");
form.addEventListener("submit", addPost);

const output = document.getElementById("output");

function getText() {
  fetch("sample.txt")
    .then((res) => res.text())
    .then((data) => {
      output.innerHTML = data;
    })
    .catch((err) => console.log("Error"));
}

function getUsers() {
  fetch("users.json")
    .then((res) => res.json())
    .then((data) => {
      output.innerHTML = `<h2> Users </h2>`;
      data.forEach((user) => {
        output.innerHTML += `
            <ul>
                <li> ID: ${user.id}</li>
                <li> ID: ${user.name}</li>
                <li> ID: ${user.email}</li>
             </ul>
        `;
      });
    });
}

function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      output.innerHTML = `<h2> Posts </h2>`;
      data.forEach((post) => {
        output.innerHTML += `
              <div>
                <h3> ${post.title}</h3>
                <p> ${post.body}</p>
               </div>
          `;
      });
    });
}

function addPost(e){
    e.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({title: title, body: body})
    })
    .then(res => res.json())
    .then(data => console.log(data));
}
