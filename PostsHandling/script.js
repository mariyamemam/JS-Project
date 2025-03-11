// var posts = [
//     { id:1,title:"daily js news"},
//     { id:2,title:"daily reminder"},
//     { id:3,title:"Figma workshop"},
// ];

// function formSubmit(){
//     function newObject(){
//         id:formId.postId.value;
//         tile:formId.title.value;
//     }
//     posts.push(newObject);
//     window.location.href = "./form.html";
// }
// document.getElementById(".formId");

// var submitBtn=document.querySelector("#submitButton");

// submitBtn.addEventListener("click",function(){
//     var id = document.querySelector("#id").value;
//     var title = document.querySelector("#title").value;
//     posts.push({ id: parseInt(id), title: title }); 
//     localStorage.setItem("posts", JSON.stringify(posts)); // Save to localStorage
//     window.location.href = "index.html"; 
// });

var posts = JSON.parse(localStorage.getItem("posts")) || [
    {id: 1, title: 'daily js news'},
    {id: 2, title: 'Figma Workshop'},
    {id: 3, title: 'daily python news'},
];


function renderTable() {
    const tableBody = document.querySelector("#tablePost tbody");
    tableBody.innerHTML = ""; // Clear previous data
    posts.forEach(post => {
        let row = `<tr>
            <td>${post.id}</td>
            <td>${post.title}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

if (document.querySelector("#tablePost")) {
    renderTable();
}

var submitBtn = document.querySelector("#submit")
submitBtn.addEventListener("click", function () {
    var id = document.querySelector("#id").value;
    var title = document.querySelector("#title").value;
    posts.push({ id: parseInt(id), title: title }); 
    localStorage.setItem("posts", JSON.stringify(posts));
    window.location.href = "index.html"; 
});

