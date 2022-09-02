const loadAllNewsCategories = async () =>{
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await response.json();
    return data;
}

const setNewsCategory = async () =>{
const data = await loadAllNewsCategories();
const data1 = data.data.news_category;
const categoryContainer = document.getElementById('category-container');

for(const category of data1){
    console.log(category);
const a = document.createElement ('a');
a.innerHTML = `
<a class="category-name category"> ${category.category_name} </a>
`; 
categoryContainer.appendChild(a);

}
}

setNewsCategory();