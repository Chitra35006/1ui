const loadAllCategoriesNewsFeed = async() =>{
    const response = await fetch("https://openapi.programming-hero.com/api/news/category/01");
    const data = await response.json();
    return data;
}

const setFeedsByCategoryId = async() =>{
    const data = await loadAllCategoriesNewsFeed ();

    
}