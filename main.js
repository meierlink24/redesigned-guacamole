const right = document.getElementById("right-arrow");
const left = document.getElementById("left-arrow");
const content = document.getElementById("content");

right.addEventListener("click", () => {
    
content.innerHTML = '<h1 class="header_1"> STEX </h1> <p class="para1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente laborum minus maiores quaerat, eius natus assumenda quisquam sit quas ratione voluptatum facilis omnis quasi labore est voluptatem fugiat, porro reiciendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident veritatis, culpa dignissimos, laboriosam laudantium necessitatibus assumenda vitae nihil ducimus itaque suscipit, obcaecati pariatur consectetur a et libero accusamus sequi.</p> '
}); 

left.addEventListener("click", () => {
content.innerHTML = '<h1 class= "header_1"> about me </h1>';
});