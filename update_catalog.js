const fs = require('fs');

async function updateCatalog() {
  console.log("Fetching live products from Pallavi Boutique...");
  const response = await fetch('https://pallaviboutique.com/products.json?limit=50');
  const data = await response.json();
  
  const formattedProducts = data.products.map(p => {
    return `    {
      id: "${p.handle}",
      name: "${p.title.replace(/"/g, '\\"')}",
      price: ${parseInt(p.variants[0].price)},
      comparePrice: ${p.variants[0].compare_at_price ? parseInt(p.variants[0].compare_at_price) : null},
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "${p.title.replace(/"/g, '\\"')}. Custom sizes available upon request."
    }`;
  }).join(',\n');

  let catalogFile = fs.readFileSync('catalog.js', 'utf8');
  
  // Replace the products array
  catalogFile = catalogFile.replace(/products: \[\s*[\s\S]*?\s*\],\n\n  customStitching/g, `products: [\n${formattedProducts}\n  ],\n\n  customStitching`);

  fs.writeFileSync('catalog.js', catalogFile);
  console.log("Successfully injected " + data.products.length + " real products into catalog.js!");
}

updateCatalog();
