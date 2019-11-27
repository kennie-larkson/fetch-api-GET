const ul = document.getElementById('authors');
ul.style.listStyle = 'none';
const url = 'https://randomuser.me/api/?results=10';

function createNode(element){
    return document.createElement(element);
}
function append(parent, el){
    return parent.appendChild(el);
}


fetch(url)
.then((resp) => resp.json())
.then((data) => {
    let authors = data.results; //Get the results
    return authors.map((author) => {
        let li = createNode('li'), //Create the elements we need
            img = createNode('img'),
            span = createNode('span');
        img.src = author.picture.medium; //Add the source of the image
        span.innerHTML = `${author.name.first} ${author.name.last}`;
        append(li, img);
        append(li, span);
        append(ul, li);
    })
})
.catch((error) => { console.log(error);
});