function placeholderSuccess(response){
    let data = response.data;//"post" name doesnt matter
    for (let post of data){
    //When using beforened you want tyo display items in order of display
        document.body.insertAdjacentHTML(`beforeend`, `<h3>${post.id}</h3>`);
        document.body.insertAdjacentHTML(`beforeend`, `<p>${post.body}</p>`);
    }
}

function placeholderFailure(error){
    document.body.insertAdjacentHTML(`afterbegin`, `<h1>There was an error!</h1>`)
    console.log(error);
}

function mealSuccess(response){
    let meals = response.data.meals;
    let resultElements = document.getElementById(`results`);
    resultElements.innerHTML = "";//Repaces the page with an empty string
    for (let meal of meals){
        resultElements.insertAdjacentHTML(`beforeend`, `<h2>${meal.strMeal}</h2>`);
        resultElements.insertAdjacentHTML(`beforeend`, `<img src="${meal.strMealThumb}" alt="${meal.strMeal}">`)
    }
    
}

function mealFailure(error){
    console.log("Meal Failed");
    console.log(error);
}


// axios.request({
//     url : "https://jsonplaceholder.typicode.com/posts"
// }).then(placeholderSuccess).catch(placeholderFailure);

function search(){
    axios.request({
        url : "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata",
        params: {
            s : document.getElementById(`searchBox`).value
        }
    }).then(mealSuccess).catch(mealFailure);
}


document.getElementById(`searchSubmit`).addEventListener(`click`, search);
//We want the user to be able to search from the bos and then the API generates 

//Cool example 