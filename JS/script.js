getRandomMeal()
getMealbySearch("Chocolate");
getMealById('112');

async function getRandomMeal()
{
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const randomMeal = await resp.json();
    console.log(randomMeal)
}

async function getMealbySearch(searchText)
{
    const resp =  await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+searchText);
    const searchMeals = await resp.json();
    console.log(searchMeals);
}

async function getMealById(id)
{
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id);
    const meal = await resp.json();
    console.log(meal);
}