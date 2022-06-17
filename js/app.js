// // back to top
// let mybutton = document.getElementById("btn-back-to-top");
//
// window.onscroll = function () {
// scrollFunction();
// };
//
// function scrollFunction() {
// if (
// document.body.scrollTop > 20 ||
// document.documentElement.scrollTop > 20
// ) {
// mybutton.style.display = "block";
// } else {
// mybutton.style.display = "none";
// }
// }
//
// mybutton.addEventListener("click", backToTop);
//
// function backToTop() {
// document.body.scrollTop = 0;
// document.documentElement.scrollTop = 0;
// }
//
//
// let postContainer = document.querySelector('#post-holder')
// let postForm = document.querySelector('#post-form')
// let title = document.querySelector('#title')
// let body = document.querySelector('#body')
//
// let postArray = []
//
// function renderUI (arr){
//   let postHolder = '';
//   arr.forEach(post => {
//   postHolder += `
//     <div class="card mb-3">
//         <div class="card-body">
//             <p>${post.id}</p>
//             <h6 id="post-title">${post.title}</h6>
//             <p id="post-body">${post.body}</p>
//               <div>
//                 <button class="btn btn-primary" onclick="updatePost(${post.id})">Update</button>
//                 <button class="btn btn-secondary" id="view-btn" onclick="openSingle(${post.id})">View</button>
//                 <button class="btn btn-danger" onclick="deletePost(${post.id})">Delete</button>
//                 </div>
//           </div>
//       </div>
//   `
//
// });
// postContainer.innerHTML = postHolder;
// }
//
// // get post
//
// function getPosts() {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((data) => {
//     postArray = data
//     renderUI(postArray)
//   })
//
//
// }
//
// getPosts();
//
// // create post
//
// postForm.addEventListener('submit', createPost)
//
// function createPost(e) {
//   e.preventDefault();
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: title.value,
//       body: body.value,
//       userId: 2,
//     }),
//     headers: {
//       'Content-type': 'application/json'
//     },
//   })
//   .then((response) => response.json())
//   .then((data) => {
//     postArray.unshift(data);
//     renderUI(postArray)
//   })
// }
//
// // update post
//
// function updatePost(id) {
//     console.log(id)
//
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//         method: 'PUT',
//         body: JSON.stringify({
//             id: id,
//             title: title.value,
//             body: body.value,
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then((response) => response.json())
//         .then((data) => {
//
//             console.log(data)
//             let postTitles = document.querySelectorAll('.post-title') // 100 post titles [0 -99]
//             let postBodies = document.querySelectorAll('.post-body')
//             console.log(postTitles)
//             postTitles.forEach((postTitle, index) => {
//                 if (index + 1 === id) {
//                     if (data.title !== "") {
//                         postTitle.innerHTML = data.title
//                     }
//                 }
//
//             })
//
//             postBodies.forEach((postBody, index) => {
//                 if (index + 1 === id) {
//                     if (data.body !== "") {
//                         postBody.innerHTML = data.body
//                     }
//                 }
//
//             })
//
//         });
// }
//
//
// // view post
//
// function openSingle(id) {
//   fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data)
//       localStorage.setItem('viewedPost', JSON.stringify(data))
//       window.location.href = 'single.html'
//     });
// }
//
// // delete post
//
// function deletePost(id) {
//   fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//     method: 'DELETE',
//     })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data)
//       postArray = postArray.filter(post => post.id !== id)
//       console.log(postArray)
//       renderUI(postArray)
//       })
//   }
