/* ================================================
   UNDERTWENTY COFFEE CO. — Menu Data & Renderer
   ================================================ */

const menuData = {
  istri: [
    { name: "Es Kopi Tanggal Tua", price: "12k", ingredients: "Kopi Tetes, Gula Cair", tag: "Robusta", featured: false },
    { name: "Es Kopi Mertua", price: "15k", ingredients: "Kopi Tetes, Gula Aren", tag: "Robusta", featured: false },
    { name: "Es Kopi Istri Pertama", price: "16k", ingredients: "Kopi Tetes, SKM, Gula Aren, Fresh Milk", tag: "Robusta", featured: false },
    { name: "Es Kopi Istri Muda", price: "17k", ingredients: "Double Kopi Tetes, SKM, Gula Aren, Fresh Milk", tag: "Robusta", featured: true },
    { name: "Es Kopi Istri Tetangga", price: "19k", ingredients: "Double Kopi Tetes, SKM, Gula Aren, Coconut Powder, Fresh Milk, Ice", tag: "Best Seller", featured: true },
    { name: "Es Kopi Buatan Mantan", price: "23k", ingredients: "Double Kopi Tetes, SKM, Gula Aren, Coconut Powder, Fresh Milk, Vanilla Ice Cream", tag: "Premium", featured: true },
  ],
  tanpasusu: [
    { name: "Black Dog Coffee", price: "18k", ingredients: "Espresso, Soda Water, Lemon, Ice", tag: "Refreshing", featured: false },
    { name: "Orange Twist Coffee", price: "18k", ingredients: "Coffee Drip, Orange Juice, Ice", tag: "Fruity", featured: true },
    { name: "Very Berry Cold Coffee", price: "18k", ingredients: "Coffee Drip, Berry Syrup, Ice", tag: "Fruity", featured: false },
    { name: "Melon Breeze Coffee", price: "19k", ingredients: "Espresso, Melon Syrup, Lime Soda, Ice", tag: "Refreshing", featured: false },
    { name: "Black Pink Breeze Coffee", price: "19k", ingredients: "Espresso, Berry Syrup, Lime Soda, Ice", tag: "Best Seller", featured: true },
  ],
  klasik: [
    { name: "Espresso / Ristretto", price: "10k", ingredients: "Inti sari kopi, E 30ml / R 15ml", tag: "Classic", featured: false },
    { name: "Double Espresso", price: "18k", ingredients: "Double intisari kopi, 60ml", tag: "Classic", featured: false },
    { name: "Machiato", price: "14k", ingredients: "Espresso, Milk Foam", tag: "Classic", featured: false },
    { name: "Americano", price: "13k / 14k", ingredients: "Espresso, Water", tag: "Classic", featured: false },
    { name: "Cappuccino", price: "16k / 18k", ingredients: "Espresso, Steam Milk, Milk Foam", tag: "Rekomendasi", featured: true },
    { name: "Latte", price: "16k / 18k", ingredients: "Espresso, Steam Milk", tag: "Classic", featured: false },
    { name: "Flat White", price: "16k / 18k", ingredients: "Espresso, Steam Milk", tag: "Rekomendasi", featured: true },
    { name: "Piccolo Latte", price: "16k / 18k", ingredients: "Espresso, Steam Milk 1:2", tag: "Classic", featured: false },
    { name: "Babyccino", price: "16k / 18k", ingredients: "Baby cappuccino 1:2", tag: "Classic", featured: false },
    { name: "Mochaccinno", price: "18k / 20k", ingredients: "Espresso, Chocolate, Milk", tag: "Classic", featured: false },
    { name: "Cortado", price: "20k", ingredients: "Double Espresso, Steam Milk 2:1", tag: "Rekomendasi", featured: true },
    { name: "Affogato", price: "15k", ingredients: "Espresso, Ice Cream", tag: "Dessert", featured: false },
  ],
  sususpecial: [
    { name: "Kopi Susu Aren", price: "18k / 20k", ingredients: "Espresso, Milk, Gula Aren", tag: "Best Seller", featured: true },
    { name: "Cococino", price: "18k / 20k", ingredients: "Espresso, Coconut Milk, Milk", tag: "Unik", featured: true },
    { name: "Raspberry Café Latte", price: "19k", ingredients: "Coffee, Raspberry Syrup, Milk", tag: "Fruity", featured: false },
    { name: "Melon Café Latte", price: "19k", ingredients: "Coffee, Melon Syrup, Milk", tag: "Fruity", featured: false },
    { name: "Hazelnut Café Latte", price: "20k", ingredients: "Coffee, Hazelnut Syrup, Milk", tag: "Popular", featured: false },
    { name: "Caramel Café Latte", price: "20k", ingredients: "Coffee, Caramel Syrup, Milk", tag: "Popular", featured: false },
    { name: "Matcha Café Latte", price: "22k", ingredients: "Coffee, Matcha, Milk", tag: "Premium", featured: true },
    { name: "Cinnamon Café Latte", price: "19k", ingredients: "Espresso, Milk, Cinnamon Powder", tag: "Spiced", featured: false },
    { name: "Cappuccino Ice Cream", price: "23k", ingredients: "Espresso, Milk, Ice Cream", tag: "Dessert", featured: true },
  ],
  anekasusu: [
    { name: "Milk Tea", price: "17k", ingredients: "Teh Hitam 100%, SKM, Freshmilk", tag: "Favorite", featured: true },
    { name: "Melaka Creamy Latte", price: "16k", ingredients: "Gula Aren, Freshmilk", tag: "Manis", featured: false },
    { name: "Raspberry Milk", price: "17k", ingredients: "Berry Syrup, Steam Milk", tag: "Fruity", featured: false },
    { name: "Melon Milk", price: "17k", ingredients: "Melon Syrup, Steam Milk", tag: "Fruity", featured: false },
    { name: "Hazelnut Milk", price: "18k", ingredients: "Hazelnut Syrup, Steam Milk", tag: "Nutty", featured: false },
    { name: "Caramel Milk", price: "18k", ingredients: "Caramel Syrup, Steam Milk", tag: "Manis", featured: false },
    { name: "Chocomelt", price: "18k / 19k", ingredients: "Dark Chocolate, Milk", tag: "Favorite", featured: true },
    { name: "Matcha Latte", price: "20k", ingredients: "Greentea Jepang Asli, Milk", tag: "Premium", featured: true },
    { name: "Pink Choco Latte", price: "20k", ingredients: "Berry Syrup, Chocolate, Milk", tag: "Unik", featured: false },
    { name: "Melon Choco Latte", price: "20k", ingredients: "Melon Syrup, Chocolate, Milk", tag: "Unik", featured: false },
    { name: "Matcha Choco Latte", price: "22k", ingredients: "Matcha, Chocolate, Milk", tag: "Premium", featured: true },
  ],
  teh: [
    { name: "Tea", price: "6k / 7k", ingredients: "Teh Hitam 100%", tag: "Classic", featured: false },
    { name: "Lemon Tea", price: "13k", ingredients: "Teh Hitam, Lemon Juice", tag: "Segar", featured: false },
    { name: "Orange Tea", price: "13k", ingredients: "Teh Hitam, Orange Juice", tag: "Segar", featured: false },
    { name: "Berry Tea", price: "13k", ingredients: "Teh Hitam, Berry Syrup", tag: "Fruity", featured: false },
    { name: "Melon Tea", price: "13k", ingredients: "Teh Hitam, Melon Syrup", tag: "Fruity", featured: false },
    { name: "Lemon Twist Tea", price: "17k", ingredients: "Teh Hitam, Lemon Juice, Lime Soda", tag: "Sparkling", featured: true },
    { name: "Red Berry Spring Tea", price: "17k", ingredients: "Teh Hitam, Berry Juice, Lime Soda", tag: "Sparkling", featured: true },
    { name: "Lemonade", price: "13k", ingredients: "Es Lemon Super Seger", tag: "Squash", featured: false },
    { name: "Orange Squash", price: "15k", ingredients: "Orange Juice, Soda", tag: "Squash", featured: false },
    { name: "Lemon Squash", price: "15k", ingredients: "Lemon Juice, Soda", tag: "Squash", featured: false },
    { name: "Berry Squash", price: "15k", ingredients: "Berry Syrup, Soda", tag: "Squash", featured: false },
    { name: "Melon Squash", price: "15k", ingredients: "Melon, Soda", tag: "Squash", featured: false },
    { name: "Berry Good", price: "20k", ingredients: "Berry Syrup, Milk, Soda", tag: "Best Seller", featured: true },
  ],
  brew: [
    { name: "Arabica", price: "16k", ingredients: "Single origin Arabica pilihan", tag: "Single Origin", featured: true },
    { name: "Robusta Pilihan", price: "12k", ingredients: "Robusta berkualitas tinggi in-house roast", tag: "Single Origin", featured: false },
    { name: "Specialty", price: "18k", ingredients: "Specialty grade, sesuai ketersediaan", tag: "Premium", featured: true },
  ],
  food: [
    { name: "Singkong Garlic", price: "15k", ingredients: "Singkong bumbu bawang", tag: "Cemilan Gurih", featured: false },
    { name: "Sosis Solo", price: "15k", ingredients: "Sosis solo ayam suwir isi 2", tag: "Cemilan Gurih", featured: false },
    { name: "Tahu Bakso", price: "15k", ingredients: "Tahu Bakso Sapi isi 3", tag: "Cemilan Gurih", featured: false },
    { name: "Shumai Goreng", price: "18k", ingredients: "Shumai daging ayam, isi 5", tag: "Cemilan Gurih", featured: false },
    { name: "French Fries", price: "18k", ingredients: "Kentang Goreng Renyah", tag: "Cemilan Gurih", featured: false },
    { name: "Sausage Platter", price: "20k", ingredients: "Sosis dan Kentang Goreng", tag: "Cemilan Gurih", featured: false },
    { name: "Chicken Stick Platter", price: "20k", ingredients: "Ayam stick dan kentang goreng", tag: "Cemilan Gurih", featured: false },
    { name: "U20 Platter Komplit", price: "23k", ingredients: "Kentang, Sosis, Stick Ayam", tag: "Best Value", featured: true },
    { name: "Pisang Bakar Melaka Keju", price: "18k", ingredients: "Pisang Bakar Gula Aren, Keju", tag: "Cemilan Manis", featured: false },
    { name: "Pisang Bakar Cokelat/Keju", price: "18k", ingredients: "Pisang Bakar Cokelat/Keju", tag: "Cemilan Manis", featured: false },
    { name: "Pisang Bakar Mix Cokju", price: "20k", ingredients: "Pisang Bakar Cokelat Keju Susu", tag: "Cemilan Manis", featured: true },
    { name: "Roti Bakar Melaka Keju", price: "18k", ingredients: "Roti Bakar Gula Aren, Keju", tag: "Cemilan Manis", featured: false },
    { name: "Roti Bakar Cokelat Keju", price: "20k", ingredients: "Roti Bakar Cokelat Keju Susu", tag: "Cemilan Manis", featured: false },
    { name: "Roti Bakar Pisang Cokelat", price: "20k", ingredients: "Roti Bakar Isi Pisang Cokelat", tag: "Cemilan Manis", featured: true },
    { name: "Bakso Buncit — Kosongan", price: "23k", ingredients: "Bakso Urat tanpa mie", tag: "Lunch & Dine", featured: false },
    { name: "Bakso Mie Kuning", price: "25k", ingredients: "Bakso Urat dengan Mie Kuning", tag: "Lunch & Dine", featured: true },
    { name: "Bakso Urat Bihun", price: "25k", ingredients: "Bakso Urat dengan Bihun", tag: "Lunch & Dine", featured: false },
    { name: "Chicken Blackpepper + Fries", price: "30k", ingredients: "Ayam, Kentang, Sayur", tag: "Western", featured: true },
    { name: "Chicken Katsu + Fries", price: "30k", ingredients: "Ayam Katsu, Kentang, Sayur", tag: "Western", featured: false },
    { name: "Indomie Rebus / Goreng", price: "10k / 15k", ingredients: "Single 10k · Double 15k · +Telur 5k", tag: "Aneka Indomie", featured: false },
    { name: "Omelete Indomie", price: "18k", ingredients: "Indomie dengan telur dadar", tag: "Aneka Indomie", featured: false },
    { name: "Bihun Rebus / Goreng", price: "12k / 15k", ingredients: "Single 12k · Double 15k · +Telur 5k", tag: "Aneka Indomie", featured: false },
  ],
};

function renderCard(item) {
  return `
    <div class="menu-card${item.featured ? ' featured' : ''}">
      <div class="menu-card-header">
        ${item.featured ? `<span class="menu-card-badge">⭐ ${item.tag}</span>` : ''}
      </div>
      <div class="menu-card-name">${item.name}</div>
      <div class="menu-card-ingredients">${item.ingredients}</div>
      <div class="menu-card-footer">
        <div class="menu-card-price">Rp ${item.price}<span class="price-unit">rb</span></div>
        ${!item.featured ? `<span class="menu-card-tag">${item.tag}</span>` : ''}
      </div>
    </div>`;
}

function renderMenu() {
  Object.keys(menuData).forEach(key => {
    const grid = document.getElementById(`grid-${key}`);
    if (grid) {
      grid.innerHTML = menuData[key].map(renderCard).join('');
    }
  });
}

renderMenu();
