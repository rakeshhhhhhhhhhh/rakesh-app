var button=document.getElementById('search');
var input=document.getElementById('input');
var r;
var next=document.getElementById('next');
var fav=document.getElementById('fav');
var movies=[
{
    id:1,
    name:"rangasthalm",
    year:2017,
    director:"sukumar",
    rating:4
},
{
    id:2,
    name:'bahubali',
    year:2017,
    director:'rajamouli',
    rating:4
}
];

input.addEventListener('keyup',function(e){
if(e.key == 'Enter'){
    r=e.target.value;
    console.log(r);
    

}

});
button.addEventListener('click',function(){
next.style.width=40+'%';
next.style.height=30+'%';
next.style.backgroundColor='black';
next.style.display='inline-block';
next.style.marginTop='10px';
next.style.marginLeft='20px';

for(var i of movies){
        if(i.name == r){
            next.innerHTML+=`<p class="list">${i.name}</p>
            <p class="list">${i.year}</p>
            <p class="list">${i.director}</p>
            <p class="list">${i.rating}</p>
            <button class="favorite" type="submit" id="${i.id}">addtofavourite</button>`
        }
    }
});
function upgrade(id){
for(var i of movies){
    if(i.id==id){
        fav.innerHTML+=`<p class="list">${i.name}</p>`
    }
}
}
document.addEventListener('click',function(e){
const target=e.target;
if(target.className=='favorite'){

    const id=target.id;
    console.log(id);
    upgrade(id);
}
});