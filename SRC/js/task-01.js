const ulCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${ulCategories.length}`);

for (const item of ulCategories) {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    const countItems = item.querySelectorAll('li');
    console.log(`Elements: ${countItems.length}`);
}