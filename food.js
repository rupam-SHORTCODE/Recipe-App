async function getallfood()
{
    var response = await fetch('https://dummyjson.com/recipes')
    var data = await response.json()
    var recipes = await data.recipes

    var temp = ""
    for(i=0; i<recipes.length; i++)
    {
        temp += '<div class="item">';
            temp += '<img src="'+recipes[i].image+'" alt="">';
            temp += '<h6>'+recipes[i].name+'</h6>';
            temp += '<h4>To know the recipe details click below</h4>';
            temp += '<div class="button-btn">';
            temp += '<button onclick="description('+i+')">Description</button>';
            temp += '</div>';
        temp += '</div>';
    }
    document.getElementById('result').innerHTML = temp;
}

function description(index){
    localStorage.setItem('selectedIndex', index)
    window.location.href = "receipe_details.html"
}

async function getDetails()
{

    const index = localStorage.getItem('selectedIndex')

    var response = await fetch('https://dummyjson.com/recipes')
    var data = await response.json()
    var recipes = await data.recipes

   document.getElementById('image').src = recipes[index].image;
   document.getElementById('name').innerHTML = recipes[index].name;

   var instructions = recipes[index].instructions;
   var temp ="<ol>";

   for(i=0;i<instructions.length;i++)
   {
        temp += "<li>"+instructions[i]+"</li>";
   }
   temp += "</ol>";

   document.getElementById('instructions').innerHTML = temp;

   var ingredients = recipes[index].ingredients;
   var temp1 ="<ol>";

   for(i=0;i<ingredients.length;i++)
   {
        temp1 += "<li>"+ingredients[i]+"</li>";
   }
   temp1 += "</ol>";

   document.getElementById('ingredients').innerHTML = temp1;
}


async function searchFood()
{

    const search = document.getElementById('search').value;

    var response = await fetch('https://dummyjson.com/recipes')
    var data = await response.json()
    var recipes = await data.recipes

    var temp = ""
    var flag = 0
    for(i=0; i<recipes.length; i++)
    {
        var name = (recipes[i].name).toLowerCase();

        if(name.indexOf(search.toLowerCase()) > -1)
        {
            flag = 1
            temp += '<div class="item">';
                temp += '<img src="'+recipes[i].image+'" alt="">';
                temp += '<h6>'+recipes[i].name+'</h6>';
                temp += '<h4>To know the recipe details click below</h4>';
                temp += '<div class="button-btn">';
                temp += '<button>Description</button>';
                
                temp += '</div>';
            temp += '</div>';
        }

       
    }
    if(flag == 1)
        document.getElementById('result').innerHTML = temp;
    else
        document.getElementById('result').innerHTML = "Sorry, Recipe not available....!!!!"
}