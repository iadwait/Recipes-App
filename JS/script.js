const meals = document.getElementById('meals');

getRandomMeal()
// getMealbySearch("Chocolate");
// getMealById('112');

async function getRandomMeal() {
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const responseData = await resp.json();
    // console.log(randomMeal.meals[0])
    const randomMeal = responseData.meals[0]
    // console.log(randomMeal)
    addMeal(randomMeal, true);
}

async function getMealbySearch(searchText) {
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchText);
    const searchMeals = await resp.json();
    console.log(searchMeals);
}

async function getMealById(id) {
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);
    const meal = await resp.json();
    console.log(meal);
}

function addMeal(mealData, random = false) {
    const meal = document.createElement('div');
    meal.classList.add('meal');
    meal.innerHTML = `
                <div class="meal-header">
                ${random ? `<spam class="random">Random Recipes</spam>` : ''}
                <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
                </div>
                <div class="meal-body">
                    <h4>${mealData.strMeal}</h4>
                    <button class="fav-btn"><i class="fas fa-heart"></i></button>
                     </div>
    `

    const btn = meal.querySelector('.meal-body .fav-btn'); 
    btn.addEventListener('click', () => {
       btn.classList.toggle('active'); 
    });

    meals.appendChild(meal);
}
