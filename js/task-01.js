// Шукаємо елементи
let categories = document.querySelectorAll(".item");

// Виводимо кількість категорій в консоль через .length
console.log(`Number of categories: ${categories.length} `);

// Перебираємо кожен елемент/дитину з .item
categories.forEach((item) => {
  // Виводимо текст із кожного заголовку
  console.log(`Category: ${item.firstElementChild.textContent}`);

  // Виводимо кількість елементів
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});