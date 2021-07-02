const heading = document.querySelector("h3");

heading.addEventListener("mouseover",function(){
    heading.classList.add("heading-style");
});
heading.addEventListener("mouseout",function(){
    heading.classList.remove("heading-style");
});