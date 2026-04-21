// Pallavi Boutique Product Catalog
// This data is used as context for the AI to answer customer questions accurately

const catalog = {
  brand: {
    name: "Pallavi Boutique",
    tagline: "Stitching a Story",
    location: "Delhi, India",
    instagram: "@pallaviboutique_",
    website: "https://pallaviboutique.com",
    whatsapp: "+91 XXXXXXXXXX" // Replace with real number
  },

  shipping: {
    freeAbove: 999,
    deliveryTime: "5-7 business days",
    dispatchTime: "Ships within 48 hours",
    cod: true,
    codSurcharge: 49,
    returns: "Easy 7-day returns",
    panIndia: true
  },

  products: [
    {
      id: "blue-and-rust",
      name: "Blue and rust",
      price: 1499,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Blue and rust. Custom sizes available upon request."
    },
    {
      id: "blue-farshi-set",
      name: "Blue farshi set",
      price: 1499,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Blue farshi set. Custom sizes available upon request."
    },
    {
      id: "green-farshi-suit-set-1",
      name: "Green farshi suit set (pure cotton)",
      price: 1699,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Green farshi suit set (pure cotton). Custom sizes available upon request."
    },
    {
      id: "black-farshi-suit-set",
      name: "Black Noor-e-Farshi suit set",
      price: 999,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Black Noor-e-Farshi suit set. Custom sizes available upon request."
    },
    {
      id: "maroon-farshi-suit-set",
      name: "Maroon farshi suit set",
      price: 1199,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Maroon farshi suit set. Custom sizes available upon request."
    },
    {
      id: "onion-pink-farshi-suit-set",
      name: "Onion pink farshi suit set",
      price: 1299,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Onion pink farshi suit set. Custom sizes available upon request."
    },
    {
      id: "brown-short-kurti-with-farshi",
      name: "Brown short kurti with farshi",
      price: 2999,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Brown short kurti with farshi. Custom sizes available upon request."
    },
    {
      id: "pink-farshi-set",
      name: "Pink farshi set",
      price: 1299,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Pink farshi set. Custom sizes available upon request."
    },
    {
      id: "yellow-floral-short-kurti",
      name: "Yellow floral short kurti",
      price: 499,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Yellow floral short kurti. Custom sizes available upon request."
    },
    {
      id: "pista-green-sharara",
      name: "Pista green sharara",
      price: 2999,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Pista green sharara. Custom sizes available upon request."
    },
    {
      id: "maroon-and-mustard-faarshi-set",
      name: "Maroon and mustard faarshi set",
      price: 1299,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Maroon and mustard faarshi set. Custom sizes available upon request."
    },
    {
      id: "lehnga-with-lace-border",
      name: "Pink lehnga with lace border",
      price: 2999,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Pink lehnga with lace border. Custom sizes available upon request."
    },
    {
      id: "green-lehnga",
      name: "Green Lehnga",
      price: 5999,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Green Lehnga. Custom sizes available upon request."
    },
    {
      id: "black-bell-sleeves-kurti",
      name: "Black bell sleeves kurti",
      price: 499,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Black bell sleeves kurti. Custom sizes available upon request."
    },
    {
      id: "mustard-yellow-lehnga",
      name: "Mustard yellow lehnga",
      price: 1999,
      comparePrice: 2999,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Mustard yellow lehnga. Custom sizes available upon request."
    },
    {
      id: "sharara-plazo-set",
      name: "Sharara/plazo set",
      price: 6999,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Sharara/plazo set. Custom sizes available upon request."
    },
    {
      id: "untitled-oct16_00-36",
      name: "Offwhite anarkali suit",
      price: 2499,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Offwhite anarkali suit. Custom sizes available upon request."
    },
    {
      id: "untitled-aug19_23-17",
      name: "Olive green suit set",
      price: 1299,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Olive green suit set. Custom sizes available upon request."
    },
    {
      id: "leheriya-suit-set",
      name: "The Leheriya Suit Set | Traditional Rajasthani Leheriya Suit | Perfect for Ethnic",
      price: 1199,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "The Leheriya Suit Set | Traditional Rajasthani Leheriya Suit | Perfect for Ethnic. Custom sizes available upon request."
    },
    {
      id: "bandhni-lehnga",
      name: "Bandhni Lehnga",
      price: 2999,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Bandhni Lehnga. Custom sizes available upon request."
    },
    {
      id: "olive-green-mehndi-suit-set",
      name: "Olive green Mehndi suit set",
      price: 1999,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Olive green Mehndi suit set. Custom sizes available upon request."
    },
    {
      id: "black-short-kurti",
      name: "Black short kurti",
      price: 499,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Black short kurti. Custom sizes available upon request."
    },
    {
      id: "black-suit-set",
      name: "Black suit set",
      price: 1299,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Black suit set. Custom sizes available upon request."
    },
    {
      id: "suit-set-2",
      name: "Suit set",
      price: 999,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Suit set. Custom sizes available upon request."
    },
    {
      id: "short-top",
      name: "Short top",
      price: 399,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Short top. Custom sizes available upon request."
    },
    {
      id: "suit-set-1",
      name: "Suit set",
      price: 1299,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Suit set. Custom sizes available upon request."
    },
    {
      id: "suit-set",
      name: "Suit set",
      price: 1299,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Suit set. Custom sizes available upon request."
    },
    {
      id: "untitled-aug16_23-17",
      name: "Long kurti",
      price: 799,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Long kurti. Custom sizes available upon request."
    },
    {
      id: "yellow-short-kurti",
      name: "Yellow Short kurti",
      price: 499,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Yellow Short kurti. Custom sizes available upon request."
    },
    {
      id: "saiyaaraa-short-kurti",
      name: "Saiyaaraa short kurti",
      price: 399,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Saiyaaraa short kurti. Custom sizes available upon request."
    },
    {
      id: "short-kurti",
      name: "Short kurti",
      price: 499,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Short kurti. Custom sizes available upon request."
    },
    {
      id: "halter-neck-short-kurti",
      name: "Halter neck short kurti",
      price: 599,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Halter neck short kurti. Custom sizes available upon request."
    },
    {
      id: "maroon-red-anarkali-suit-set",
      name: "Maroon red Anarkali suit set",
      price: 1499,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Maroon red Anarkali suit set. Custom sizes available upon request."
    },
    {
      id: "untitled-jul30_23-16",
      name: "Short kurti",
      price: 699,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Short kurti. Custom sizes available upon request."
    },
    {
      id: "collar-suit-pant",
      name: "Collar Suit pant",
      price: 1499,
      comparePrice: 1999,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Collar Suit pant. Custom sizes available upon request."
    },
    {
      id: "floral-peach-short-kurti",
      name: "Floral peach short kurti",
      price: 299,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Floral peach short kurti. Custom sizes available upon request."
    },
    {
      id: "floral-short-kurti",
      name: "Floral short kurti",
      price: 699,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Floral short kurti. Custom sizes available upon request."
    },
    {
      id: "mustard-floral-cotton-straight-set",
      name: "Mustard Floral Cotton Straight Set",
      price: 1499,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Mustard Floral Cotton Straight Set. Custom sizes available upon request."
    },
    {
      id: "teal-blue-floral-anarkali-set",
      name: "Teal Blue Floral Anarkali Set",
      price: 1499,
      comparePrice: 2499,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Teal Blue Floral Anarkali Set. Custom sizes available upon request."
    },
    {
      id: "lavender-georgette-printed-anarkali-set",
      name: "Lavender Georgette Printed Anarkali Set",
      price: 1499,
      comparePrice: 1999,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Lavender Georgette Printed Anarkali Set. Custom sizes available upon request."
    },
    {
      id: "pink-floral-printed-pure-cotton-anarkali-kurta-set-with-dupatta-3-piece-set",
      name: "Floral Printed Pure Cotton Anarkali Kurta Set with Dupatta (3-Piece Set)",
      price: 1299,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Floral Printed Pure Cotton Anarkali Kurta Set with Dupatta (3-Piece Set). Custom sizes available upon request."
    },
    {
      id: "printed-anarkali-cotton-suit-set-3-piece-set",
      name: "Printed Anarkali Cotton Suit Set (3-Piece Set)",
      price: 1299,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Printed Anarkali Cotton Suit Set (3-Piece Set). Custom sizes available upon request."
    },
    {
      id: "black-white-handblock-floral-kurti",
      name: "Black & White Handblock Floral Kurti",
      price: 299,
      comparePrice: null,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Black & White Handblock Floral Kurti. Custom sizes available upon request."
    },
    {
      id: "yellow-hand-block-print-cotton-kurta-set-kurta-pant-dupatta",
      name: "Hand‑Block Print Cotton Kurta Set (Kurta + Pant + Dupatta)",
      price: 1299,
      comparePrice: 1999,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Hand‑Block Print Cotton Kurta Set (Kurta + Pant + Dupatta). Custom sizes available upon request."
    },
    {
      id: "elegant-brown-white-paisley-suit-set",
      name: "Elegant Brown & White Paisley Suit Set",
      price: 1499,
      comparePrice: 1999,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Elegant Brown & White Paisley Suit Set. Custom sizes available upon request."
    },
    {
      id: "beach-blue-olive-floral-block-print-cotton-kurti",
      name: "Beach-Blue & Olive Floral Block‑Print Cotton Kurti",
      price: 799,
      comparePrice: 1299,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Beach-Blue & Olive Floral Block‑Print Cotton Kurti. Custom sizes available upon request."
    },
    {
      id: "🌸-white-green-floral-cotton-tunic",
      name: "🌸 White & Green Floral Cotton Tunic",
      price: 499,
      comparePrice: 999,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "🌸 White & Green Floral Cotton Tunic. Custom sizes available upon request."
    },
    {
      id: "red-floral-sleeveless-cotton-tunic",
      name: "Red Floral Sleeveless Cotton Tunic",
      price: 499,
      comparePrice: 999,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Red Floral Sleeveless Cotton Tunic. Custom sizes available upon request."
    },
    {
      id: "elegant-orange-halter-neck-cotton-kurti",
      name: "Elegant Orange Halter Neck Cotton Kurti",
      price: 799,
      comparePrice: 999,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Elegant Orange Halter Neck Cotton Kurti. Custom sizes available upon request."
    },
    {
      id: "indigo-halter-neck-back-tie-kurti",
      name: "Indigo Halter Neck Back-Tie Kurti",
      price: 699,
      comparePrice: 999,
      category: "Ethnic Wear",
      fabric: "Pure Cotton/Georgette",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Indigo Halter Neck Back-Tie Kurti. Custom sizes available upon request."
    }
  ],

  customStitching: true,
  
  faqs: {
    "custom sizing": "Yes, we offer custom stitching! Please share your measurements and we'll stitch it according to your fit. WhatsApp us for details.",
    "bulk orders": "Yes, we do bulk orders for weddings and events. Please WhatsApp us with your requirements for a special quote.",
    "exchange": "We offer easy 7-day returns and exchanges. The item must be unworn with tags attached.",
    "payment methods": "We accept UPI, Visa, Mastercard, RuPay, Net Banking, Wallets, and Cash on Delivery.",
    "washing": "Machine wash or dry clean. We recommend cold water wash to maintain the print quality."
  }
};

function getCatalogContext() {
  const productList = catalog.products.map(p => {
    const priceStr = p.comparePrice 
      ? `₹${p.price} (was ₹${p.comparePrice}, ${Math.round(((p.comparePrice - p.price) / p.comparePrice) * 100)}% off)`
      : `₹${p.price}`;
    return `- ${p.name}: ${priceStr} | Sizes: ${p.sizes.join(', ')} | Fabric: ${p.fabric} | Description: ${p.description} | Link: https://pallaviboutique.com/products/${p.id}`;
  }).join('\n');

  return `
BRAND: ${catalog.brand.name} — ${catalog.brand.tagline}
LOCATION: ${catalog.brand.location}
WEBSITE: ${catalog.brand.website}
INSTAGRAM: ${catalog.brand.instagram}

SHIPPING POLICY:
- Free shipping on orders above ₹${catalog.shipping.freeAbove}
- ${catalog.shipping.dispatchTime}
- Delivery: ${catalog.shipping.deliveryTime}
- COD available (₹${catalog.shipping.codSurcharge} surcharge)
- ${catalog.shipping.returns}
- Pan-India delivery

PRODUCTS:
${productList}

CUSTOM STITCHING: Available — customer can share measurements

PAYMENT: UPI, Visa, Mastercard, RuPay, Net Banking, Wallets, COD

FAQ:
${Object.entries(catalog.faqs).map(([q, a]) => `Q: ${q}\nA: ${a}`).join('\n\n')}
  `.trim();
}

module.exports = { catalog, getCatalogContext };
