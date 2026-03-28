// ─── DRINKS ──────────────────────────────────────────────────────────────────
export const drinksCategories = [
  { key: "sparkling",    label: "Sparkling",       emoji: "🥂" },
  { key: "martinis",     label: "Martinis",         emoji: "🍸" },
  { key: "fashionable",  label: "Fashionable",      emoji: "🥃" },
  { key: "mojitos",      label: "Mojitos",           emoji: "🌿" },
  { key: "longdrinks",   label: "Long Drinks",       emoji: "🍹" },
  { key: "afterdinner",  label: "After Dinner",      emoji: "🌙" },
  { key: "virgins",      label: "Virgins",           emoji: "🌸" },
  { key: "shooters",     label: "Shooters",          emoji: "🎯" },
  { key: "aperitivi",    label: "Aperitivi",         emoji: "🍊" },
  { key: "wine",         label: "Wine",              emoji: "🍷" },
  { key: "beers",        label: "Beers",             emoji: "🍺" },
  { key: "spirits",      label: "Spirits",           emoji: "🥃" },
  { key: "fortified",    label: "Porto & Sherry",    emoji: "🍾" },
  { key: "distillates",  label: "Distillates",       emoji: "✨" },
  { key: "softdrinks",   label: "Soft Drinks",       emoji: "🥤" },
  { key: "amari",          label: "Amari",            emoji: "🌿" },
  { key: "liquori",        label: "Liquori",           emoji: "🍬" },
  { key: "hotafterdinner", label: "Hot After Dinner",  emoji: "☕" },
];

export const drinksData = {
  sparkling: {
    label: "Sparkling", emoji: "🥂",
    items: [
      { name: "Bellini", desc: "Peach Juice and Sparkling Wine", price: "12,00" },
      { name: "Rossini", desc: "Strawberry Juice and Sparkling Wine", price: "12,00" },
      { name: "Hugo", desc: "Elderflower Liqueur, Sparkling Wine, Soda Water, Lime, Fresh Mint and Apple", price: "10,00" },
      { name: "Spritz Fashion Mediterraneo", desc: "Aperol or Bitter Campari, Sparkling Wine and Soda Water, Sliced Orange and Twist Lemon", price: "8,00" },
      { name: "Spritz Caravellino", desc: "Aperol and Bitter Campari, Sparkling Wine, Passion Fruit Puree and Soda Water", price: "12,00" },
      { name: "Spritz Beer", desc: "Aperol and Venezia Beer", price: "10,00" },
      { name: "Champagne Cocktail", desc: "Cognac, Grand Marnier, Sugar, Angostura Bitter and Champagne", price: "19,00" },
      { name: "Kir Royal", desc: "Crème de Cassis and Champagne", price: "19,00" },
    ]
  },
  martinis: {
    label: "Martinis", emoji: "🍸",
    items: [
      { name: "Martini Cocktail", desc: "Gin or Vodka, Dry Vermouth and Olive or Lemon Twist", price: "12,00" },
      { name: "Cosmopolitan", desc: "Vodka, Cointreau, Cranberry Juice and Lime Juice", price: "12,00" },
      { name: "Tiramisù Martini", desc: "Vodka, Kahlua, Tiramisù Liqueur, Amaretto, Espresso Coffee", price: "15,00" },
      { name: "Espresso Martini", desc: "Vodka, Kahlua, Espresso Coffee and Sugar", price: "12,00" },
      { name: "Pornstar Martini", desc: "Vanilla Vodka, Passion Fruit Liqueur, Passion Fruit Puree and Vanilla Sugar — served with a shot of prosecco", price: "15,00" },
      { name: "Chocolate Martini", desc: "Vanilla Vodka, Crème de Cacao and Chocolate", price: "12,00" },
    ]
  },
  fashionable: {
    label: "Fashionable", emoji: "🥃",
    items: [
      { name: "Americano", desc: "Bitter Campari, Red Vermouth and Soda Water", price: "12,00" },
      { name: "Americano alla Birra", desc: "Bitter Campari, Red Vermouth and Beer", price: "15,00" },
      { name: "Negroni", desc: "Gin, Bitter Campari and Red Vermouth", price: "12,00" },
      { name: "Negroni Sbagliato", desc: "Bitter Campari, Red Vermouth and Sparkling Wine", price: "12,00" },
      { name: "Manhattan", desc: "Rye Whiskey, Red Vermouth and Angostura Bitter", price: "12,00" },
      { name: "Caipirinha", desc: "Cachaca, Lime and Sugar", price: "12,00" },
      { name: "Margarita", desc: "Tequila, Triple Sec and Lime Juice", price: "12,00" },
      { name: "Frozen Fruit Margarita", desc: "Tequila, Triple Sec, choice of seasonal Fruit and Lime Juice", price: "12,00" },
      { name: "Daiquiri", desc: "White Rum, Lime Juice and Gomme Syrup", price: "12,00" },
      { name: "Frozen Fruit Daiquiri", desc: "Rum, choice of seasonal Fruit, Lime Juice and Gomme Syrup", price: "15,00" },
    ]
  },
  mojitos: {
    label: "Mojitos", emoji: "🌿",
    items: [
      { name: "Mojito", desc: "Rum, Fresh Mint, Fresh Lime, Cane Sugar and Soda Water", price: "15,00" },
      { name: "Mojito Passion", desc: "Rum or Vodka, Passion Fruit Liqueur, Passion Fruit Puree, Lime and Sugar", price: "15,00" },
      { name: "Mojito Peach", desc: "Rum or Vodka, Fresh Peach Puree, Mint, Lime and Cane Sugar", price: "15,00" },
      { name: "Mojito Strawberry", desc: "Rum or Vodka, Fresh Strawberry, Puree Mint, Lime and Cane Sugar", price: "15,00" },
    ]
  },
  longdrinks: {
    label: "Long Drinks", emoji: "🍹",
    items: [
      { name: "Screwdriver", desc: "Vodka and Orange Juice", price: "12,00" },
      { name: "Moscow Mule", desc: "Vodka, Lime and Ginger Beer", price: "18,00" },
      { name: "French Mule", desc: "St. Germain, Lime and Ginger Beer", price: "18,00" },
      { name: "Long Island Ice-Tea", desc: "Gin, Vodka, Rum, Tequila, Cointreau, Sweet and Sour and Coke", price: "18,00" },
      { name: "Tokyo Ice-Tea", desc: "Gin, Vodka, Rum, Tequila, Midori, Sweet and Sour and Sprite", price: "18,00" },
      { name: "Tequila Sunrise", desc: "Tequila, Orange Juice and Grenadine Syrup", price: "12,00" },
      { name: "Harvey Wallbanger", desc: "Vodka, Orange Juice and Galliano", price: "12,00" },
      { name: "Woo Woo", desc: "Vodka, Peach Tree and Cranberry Juice", price: "12,00" },
      { name: "Garibaldi", desc: "Bitter Campari and Orange Juice", price: "12,00" },
      { name: "Bloody Mary", desc: "Vodka, Tomato Juice and Spices", price: "15,00" },
      { name: "Pimm's N.1", desc: "Pimm's N.1, Lemonade or Ginger Ale", price: "15,00" },
      { name: "Pina Colada", desc: "White Rum, Coco Cream and Pineapple Juice", price: "18,00" },
      { name: "Sex on the Beach", desc: "Vodka, Peach Tree, Fresh Orange Juice and Cranberry Juice", price: "12,00" },
      { name: "Red Bull Highball", desc: "Vodka and Red Bull", price: "12,00" },
      { name: "Mai-Tai", desc: "Rum, Cointreau, Lemon, Orange Juice, Grenadina and Orgeat Syrup", price: "15,00" },
      { name: "Green Jamaica", desc: "Midori, Malibu, Banana Liqueur, Pineapple Juice and Lime", price: "18,00" },
    ]
  },
  afterdinner: {
    label: "After Dinner", emoji: "🌙",
    items: [
      { name: "Alexander", desc: "Cognac, Crème de Cacao and Cream", price: "12,00" },
      { name: "Black or White Russian", desc: "Vodka and Kahlua Cream", price: "12,00" },
      { name: "B&B", desc: "Brandy and Benedectine", price: "12,00" },
      { name: "Stinger", desc: "Cognac and Crème de Menthe White", price: "12,00" },
      { name: "White Spider", desc: "Vodka and Crème de Menthe White", price: "12,00" },
      { name: "Rusty Nail", desc: "Whisky and Drambuie", price: "12,00" },
      { name: "Screaming Orgasm", desc: "Vodka, Coffee Liqueur, Irish Cream Liqueur or Amaretto", price: "12,00" },
    ]
  },
  virgins: {
    label: "Virgins", emoji: "🌸",
    items: [
      { name: "Virgin Colada", desc: "Coco Cream and Pineapple Juice", price: "12,00" },
      { name: "Ducale", desc: "Mix of Seasonal Fruit", price: "12,00" },
      { name: "Virgin Mojito", desc: "Mint, Lime, Sugar and Ginger Ale or Sprite", price: "10,00" },
    ]
  },
  shooters: {
    label: "Shooters", emoji: "🎯",
    items: [
      { name: "B52", desc: "Kahlua, Baileys and Grand Marnier", price: "10,00" },
      { name: "Pornshoot", desc: "Vodka and Passion Fruit Liqueur", price: "10,00" },
      { name: "Midori Sour", desc: "Midori, Sweet and Sour", price: "10,00" },
      { name: "Jager Bomb", desc: "Red Bull and Jägermeister", price: "15,00" },
    ]
  },
  aperitivi: {
    label: "Aperitivi", emoji: "🍊",
    items: [
      { name: "Campari Soda", desc: "Classic Italian aperitif", price: "9,50" },
      { name: "Aperol, Martini Bianco, Dry, Rosso, Pernod, Pastis", desc: "Selection of classic aperitifs", price: "7,50" },
    ]
  },
  wine: {
    label: "Wine", emoji: "🍷",
    subcategories: [
      {
        name: "Prosecco & Sparkling",
        items: [
          { name: "Valdobbiadene Prosecco Sup. Brut – F.lli Bortolin", desc: "", price: "7,00 / 35,00", priceNote: "glass / bottle" },
          { name: "Prosecco Spumante Rosè Brut DOC – Barollo", desc: "", price: "7,00 / 35,00", priceNote: "glass / bottle" },
          { name: "Prosecco Treviso Extra Dry – Masottina", desc: "", price: "6,00 / 30,00", priceNote: "glass / bottle" },
          { name: "Franciacorta Brut – z. Agr. San Cristoforo", desc: "", price: "9,00 / 47,00", priceNote: "glass / bottle" },
          { name: "Imperial Brut, Moët & Chandon", desc: "", price: "19,00 / 95,00", priceNote: "glass / bottle" },
          { name: "Rosè Imperial Brut, Moët & Chandon", desc: "", price: "— / 115,00", priceNote: "glass / bottle" },
        ]
      },
      {
        name: "White Wine",
        items: [
          { name: "Pinot Grigio – Cecchetto", desc: "", price: "7,00 / 27,00", priceNote: "glass / bottle" },
          { name: "Frater Bianco Chardonnay DOC – Barollo", desc: "", price: "9,00 / 38,00", priceNote: "glass / bottle" },
          { name: "Sauvignon Isonzo del Friuli – Borgo Conventi", desc: "", price: "7,00 / 32,00", priceNote: "glass / bottle" },
        ]
      },
      {
        name: "Rosé Wine",
        items: [
          { name: "Bardolino Chiaretto – A. Agr. Le Tende", desc: "", price: "7,00 / 28,00", priceNote: "glass / bottle" },
        ]
      },
      {
        name: "Red Wine",
        items: [
          { name: "Valpolicella – Rio Albo", desc: "", price: "8,00 / 33,00", priceNote: "glass / bottle" },
          { name: "Aether Cabernet & Merlot – Masottina", desc: "", price: "7,00 / 26,00", priceNote: "glass / bottle" },
          { name: "Chianti Classico Peppoli – Marchesi Antinori", desc: "", price: "9,00 / 42,00", priceNote: "glass / bottle" },
        ]
      },
      {
        name: "Dessert Wine",
        items: [
          { name: "Ramandolo DRI", desc: "", price: "8,00 / 45,00", priceNote: "glass / bottle" },
          { name: "Vin Santo del Chianti Classico – San Felice", desc: "", price: "11,00 / 36,00", priceNote: "glass / bottle" },
        ]
      }
    ]
  },
  beers: {
    label: "Beers", emoji: "🍺",
    subcategories: [
      {
        name: "Italia",
        items: [
          { name: "Birra Venezia", desc: "Bionda, Artigianale, Lager 4,7° – 33cl. Low fermentation with a pleasant hint of hops.", price: "8,00" },
          { name: "Nora Baladin", desc: "Bionda, Ambrata, 6,8° – 33cl. Inspired by the pharaohs — ginger, orange peel and Ethiopian resin.", price: "9,00" },
          { name: "Italiana", desc: "Bionda, Lager, 5° – 50cl. Refreshing and pleasantly fruity with hop-like hints.", price: "13,00" },
          { name: "Nazionale Baladin", desc: "Bionda, Lager, 6,5° – 33cl. 100% Italian with coriander and bergamot.", price: "9,00" },
          { name: "Super Bitter Baladin", desc: "Ambrata Luppolata, 8° – 33cl. Belgian strong ale with Amarillo hops and brown sugar.", price: "9,00" },
          { name: "Birra Analcolica", desc: "Non-Alcoholic Beer", price: "6,00" },
        ]
      },
      {
        name: "America & Messico",
        items: [
          { name: "Budweiser", desc: "Bionda, Lager, 5° – 33cl", price: "8,00" },
          { name: "Corona Extra", desc: "Bionda, Lager, 4,6° – 33cl. Famous Mexican beer with hoppy aroma.", price: "8,00" },
        ]
      }
    ]
  },
  spirits: {
    label: "Spirits", emoji: "🥃",
    subcategories: [
      {
        name: "Rhum",
        items: [
          { name: "Myers's", desc: "Jamaica", price: "8,00" },
          { name: "Botran", desc: "Solera, Guatemala", price: "10,00" },
          { name: "Barbancourt 4 YO", desc: "Haiti", price: "14,00" },
          { name: "Diplomatico Extra Anejo", desc: "Venezuela", price: "14,00" },
          { name: "El Dorado 12 YO", desc: "Guyana", price: "15,00" },
          { name: "J.M. Agricole X.O.", desc: "Martinique", price: "16,00" },
          { name: "Zacapa Solera 23 YO", desc: "Guatemala", price: "16,00" },
          { name: "Barcelò Imperial", desc: "Rep. Dominicana", price: "30,00" },
        ]
      },
      {
        name: "Vodka",
        items: [
          { name: "Stolichnaya", desc: "Russia", price: "9,00" },
          { name: "Russian Standard", desc: "Russia", price: "9,00" },
          { name: "Absolut", desc: "Sweden", price: "9,00" },
          { name: "Snow Leopard", desc: "Poland", price: "11,00" },
          { name: "Grey Goose", desc: "France", price: "12,00" },
          { name: "Belvedere", desc: "Poland", price: "12,00" },
          { name: "Mamont", desc: "Russia", price: "12,00" },
          { name: "Beluga", desc: "Russia", price: "12,00" },
        ]
      },
      {
        name: "Gin",
        items: [
          { name: "Beefeater, Tanqueray, Gordon's", desc: "", price: "9,00" },
          { name: "Gordon's, Hendrick's, Fred Jerbis, Bombay", desc: "", price: "12,00" },
          { name: "Mare, Puro, Monkey 47, Tanqueray Ten", desc: "", price: "15,00" },
        ]
      },
      {
        name: "Tequila",
        items: [
          { name: "Sauza Silver", desc: "", price: "9,00" },
          { name: "Patron Silver", desc: "", price: "11,00" },
          { name: "Patron Reposado", desc: "", price: "14,00" },
        ]
      },
      {
        name: "Bourbon Whiskey",
        items: [
          { name: "Four Roses", desc: "", price: "7,00" },
          { name: "Jack Daniel's 7 YO", desc: "", price: "12,00" },
          { name: "Maker's Mark", desc: "", price: "14,00" },
        ]
      },
      {
        name: "Canadian Whiskey",
        items: [
          { name: "Canadian Club, Canadian Seagram V.O.", desc: "", price: "7,00" },
          { name: "Crown Royal", desc: "", price: "18,00" },
        ]
      },
      {
        name: "Single Malt Scotch – Highlands",
        items: [
          { name: "Oban 14 YO", desc: "", price: "18,00" },
          { name: "Glenmorangie 12 YO", desc: "", price: "18,00" },
        ]
      },
      {
        name: "Single Malt Scotch – Skye Islands",
        items: [{ name: "Talisker 10 YO", desc: "", price: "17,00" }]
      },
      {
        name: "Single Malt Scotch – Speyside",
        items: [
          { name: "Glen Grant 10 YO", desc: "", price: "10,00" },
          { name: "Glenlivet 12 YO", desc: "", price: "14,00" },
          { name: "Glenfiddich 12 YO", desc: "", price: "16,00" },
        ]
      },
      {
        name: "Single Malt Scotch – Islay",
        items: [
          { name: "Laphroaig 10 YO", desc: "", price: "15,00" },
          { name: "Lagavulin 8 YO", desc: "", price: "20,00" },
        ]
      },
      {
        name: "Scotch Whiskies",
        items: [
          { name: "Ballantine's, J&B, Johnny Walker Red Label", desc: "", price: "7,00" },
          { name: "Chivas Regal 12 YO, Johnny Walker Black Label 12 YO", desc: "", price: "12,00" },
          { name: "Johnny Walker Gold Label 18 YO", desc: "", price: "15,00" },
        ]
      },
      {
        name: "Irish Whiskey",
        items: [{ name: "Bushmills, Jameson", desc: "", price: "10,00" }]
      },
    ]
  },
  fortified: {
    label: "Marsala, Porto & Sherry", emoji: "🍾",
    items: [
      { name: "Marsala Superiore, Canine Florio", desc: "", price: "7,00" },
      { name: "Porto \"Ruby\", Sandeman", desc: "", price: "7,00" },
      { name: "Porto Graham's Tawny 10 YO", desc: "", price: "12,00" },
      { name: "Porto Graham's Tawny 30 YO", desc: "", price: "18,00" },
      { name: "Sherry Fino, Tio Pepe", desc: "", price: "7,00" },
    ]
  },
  distillates: {
    label: "Distillates", emoji: "✨",
    subcategories: [
      {
        name: "Grappe",
        items: [
          { name: "Bonaventura Maschio", desc: "Barrique 903 – Veneto", price: "6,00" },
          { name: "Jacopo Poli", desc: "Grappa di Moscato – Veneto", price: "8,00" },
          { name: "Masi", desc: "Grappa di Amarone – Veneto", price: "12,00" },
          { name: "Bepi Tosolini", desc: "Most – Friuli Venezia Giulia", price: "8,00" },
          { name: "Domenis", desc: "Secolo – Friuli Venezia Giulia", price: "12,00" },
          { name: "Tenuta S. Guido e Poli", desc: "Elevata in Barili di Sassicaia – Toscana", price: "12,00" },
        ]
      },
      {
        name: "Acque Vite d'Uva & Frutta",
        items: [
          { name: "Bonaventura Maschio", desc: "Prime Uve Bianche, Arance – Veneto", price: "8,00" },
          { name: "Bonaventura Maschio", desc: "Prime Uve Nere, Oro – Veneto", price: "8,00" },
          { name: "Morin", desc: "Calvados", price: "10,00" },
        ]
      }
    ]
  },
  softdrinks: {
    label: "Soft Drinks & Water", emoji: "🥤",
    subcategories: [
      {
        name: "Waters",
        items: [
          { name: "S. Benedetto Millennium", desc: "Sparkling / Still – 65cl", price: "4,00" },
          { name: "S. Benedetto Millennium", desc: "Sparkling / Still – 25cl", price: "2,00" },
        ]
      },
      {
        name: "Soft Drinks",
        items: [
          { name: "Coca Cola, Aranciata, Sprite", desc: "", price: "5,00" },
          { name: "Tonic Lemon, Tonic Water, Fever Tree", desc: "", price: "6,00" },
          { name: "Red Bull", desc: "", price: "5,00" },
          { name: "Succo di Frutta", desc: "Fruit Juice", price: "4,00" },
          { name: "Spremuta d'Agrumi", desc: "Fresh Squeezed Juice", price: "6,00" },
          { name: "Tè Freddo alla Pesca – Limone Galvanina Bio", desc: "Iced Tea", price: "5,00" },
        ]
      },
      {
        name: "Hot Beverages",
        items: [
          { name: "Espresso", desc: "", price: "1,50 / 2,50", priceNote: "counter / table" },
          { name: "Caffè Macchiato", desc: "", price: "1,50 / 2,50", priceNote: "counter / table" },
          { name: "Caffè Americano", desc: "", price: "1,80 / 3,00", priceNote: "counter / table" },
          { name: "Cappuccino", desc: "", price: "1,80 / 3,00", priceNote: "counter / table" },
          { name: "Cappuccino di Soia", desc: "Soy Milk", price: "2,30 / 3,80", priceNote: "counter / table" },
          { name: "Ginseng, Orzo Coffee", desc: "", price: "2,00 / 3,50", priceNote: "counter / table" },
          { name: "Cioccolata Calda", desc: "Hot Chocolate", price: "5,00 / 7,00", priceNote: "counter / table" },
          { name: "Infusi, Thè, Tisane", desc: "Infusions, Teas, Herbal Teas", price: "5,00" },
          { name: "Croissant", desc: "", price: "1,20 / 2,00", priceNote: "counter / table" },
          { name: "Croissant Vegano Mignon", desc: "Vegan", price: "1,20 / 2,00", priceNote: "counter / table" },
          { name: "Croissant Vegano all'Albicocca", desc: "Vegan Apricot", price: "2,00 / 3,00", priceNote: "counter / table" },
        ]
      }
    ]
  },

  amari: {
    label: "Amari", emoji: "🌿",
    items: [
      { name: "Averna, Cynar", desc: "", price: "7,00" },
      { name: "Fernet Branca, Fernet Branca Menta", desc: "", price: "7,00" },
      { name: "Jagermeister", desc: "", price: "7,00" },
      { name: "Montenegro, Ramazzotti", desc: "", price: "7,00" },
      { name: "Rabarbaro Zucca", desc: "", price: "7,00" },
    ]
  },
  liquori: {
    label: "Liquori", emoji: "🍬",
    items: [
      { name: "Amaretto Disaronno", desc: "Ilva", price: "7,00" },
      { name: "Galliano", desc: "", price: "7,00" },
      { name: "Limoncello", desc: "", price: "7,00" },
      { name: "Sambuca Bianca / Nera", desc: "Molinari", price: "7,00" },
      { name: "Grand Marnier", desc: "", price: "9,00" },
      { name: "Baileys", desc: "", price: "9,00" },
      { name: "Cointreau", desc: "", price: "9,00" },
      { name: "Tia Maria", desc: "", price: "9,00" },
      { name: "Drambuie", desc: "", price: "9,00" },
    ]
  },
  hotafterdinner: {
    label: "Hot After Dinner", emoji: "☕",
    items: [
      { name: "Irish Coffee", desc: "Irish whiskey, espresso coffee, sugar and cream", price: "15,00" },
      { name: "Winter Italian Alexander", desc: "Italian Brandy, crème de cacao, hot chocolate and cream", price: "15,00" },
      { name: "Winter Espresso Martini", desc: "Vodka, Kahlua, double espresso coffee, sugar and cream", price: "15,00" },
      { name: "Cuban Choc", desc: "Cane rum, hot chocolate and cream", price: "15,00" },
      { name: "Irish Choc", desc: "Baileys Irish cream, hot chocolate and cream", price: "15,00" },
    ]
  },
};

// ─── FOOD (flat list, no subcategory titles) ──────────────────────────────────
export const foodItems = [
  { name: "Cold Dishes", isTitle: true },
  { name: "Baccalà Mantecato, Gamberi in Saor e Crostone di Polenta", desc: "Salted cod Venetian style, shrimps in Saor with polenta crostini", price: "23,00" },
  { name: "Prosciutto Crudo Veneto e Parmigiano Reggiano Riserva", desc: "Venetian ham and Parmesan 36 months old", price: "28,00" },
  { name: "Formaggi Veneti con le nostre composte", desc: "Local cheese with our compotes", price: "28,00" },

  { name: "Salads", isTitle: true },
  { name: "Insalata Il Caravellino", desc: "Mixed salad, marinated artichokes, olives, sweet and sour onions, egg and tuna with mayonnaise", price: "16,00" },
  { name: "Insalata Caprese con Mozzarella e Pomodoro Fresco", desc: "Mozzarella cheese and fresh tomato", price: "16,00" },
  { name: "Insalata Invernale: Radicchio, Finocchio, Arance, Noci, Caprino", desc: "Red chicory, fennel, oranges, walnuts, goat cheese, bread croutons and orange yogurt dressing", price: "18,00" },

  { name: "Pizza / Toast / Focaccia", isTitle: true },
  { name: "Pizza Margherita Trancio", desc: "Pizza Margherita slice", price: "9,00" },
  { name: "Toast Classico con Prosciutto e Formaggio", desc: "Toasted sandwich ham and cheese", price: "6,00" },
  { name: "Tramezzino", desc: "Sandwich", price: "3,50" },
  { name: "Focaccia Vegana con Pomodori Datterini e Olive", desc: "Vegan focaccia with cherry tomatoes and olives", price: "9,00" },

  { name: "Warm Dishes", isTitle: true },
  { name: "Spaghetti Monograno Felicetti Cacio e Pepe", desc: "Spaghetti with Cacio e Pepe sauce", price: "24,00" },
  { name: "Lasagnetta Classica", desc: "Classic Bolognese lasagna", price: "26,00" },
  { name: "Zuppa di Legumi e Ortaggi", desc: "Legumes and veggies winter soup", price: "18,00" },
  { name: "Filetto di Branzino alla Piastra con Verdure Saltate", desc: "Sea bass fillet with sautéed vegetables", price: "27,00" },
  { name: "Hamburger di Manzo, Scamorza Fumé, Pomodoro, Lattuga e Cipolla Caramellata", desc: "Beef hamburger with smoked scamorza cheese, tomato, lettuce and caramelized onion", price: "30,00" },

  { name: "Desserts", isTitle: true },
  { name: "Tiramisù Caravellino Style", desc: "Our signature tiramisù", price: "14,00" },
  { name: "Mousse al Cioccolato Fondente con Panna e Amarene", desc: "Dark chocolate mousse with cream and cherries in syrup", price: "12,00" },
  { name: "Crema Catalana", desc: "Catalan cream", price: "14,00" },
];

// ─── SPECIALTIES (food + fine wines together) ─────────────────────────────────
export const specialtiesData = {
  food: {
    name: "Dalla Cucina – House Specialties",
    items: [
      { name: "Ostrica Gilardeaux al pezzo", desc: "Gilardeaux Oyster per piece", price: "8,00" },
      { name: "Scampo crudo nostrano al pezzo", desc: "Local raw scampi per piece", price: "7,00" },
      { name: "La selezione di crudité di pesce", desc: "Selection of raw fish", price: "38,00" },
      { name: "Spaghetti all'Astice", desc: "Lobster Spaghetti", price: "45,00" },
      { name: "Spaghetti alle vongole", desc: "Spaghetti with clams", price: "30,00" },
      { name: "Fritto di Calamari, gamberi e verdurine croccanti", desc: "Fried local squids, prawns and crunchy vegetables", price: "32,00" },
    ]
  },
  wines: {
    name: "Fine Sparkling Wines",
    items: [
      { name: "Brut \"Pas Operé\" Extra Brut, Bellavista, 2020", desc: "Franciacorta DOCG – 12,5% Chardonnay, Pinot Nero", price: "80,00" },
      { name: "Brut, Az.Ag. San Cristoforo, 2024", desc: "Franciacorta DOCG – 12,5% Chardonnay", price: "47,00" },
      { name: "Rosè pas dosè, Az.Ag. San Cristoforo, 2023", desc: "Franciacorta DOCG – 12,5% Pinot Nero", price: "57,00" },
      { name: "Cuvée \"Anna Maria Clementi\", Ca' Del Bosco, 2016", desc: "Franciacorta DOCG – 13% Chardonnay, Pinot Nero, Pinot Bianco", price: "170,00" },
      { name: "Dosage Zero, Ca' Del Bosco, 2019", desc: "Franciacorta DOCG – 12,5% Chardonnay, Pinot Bianco, Pinot Nero", price: "82,00" },
      { name: "\"Perlè\", Ferrari, F.lli Lunelli, 2021", desc: "Trento DOC – 12,5% Chardonnay", price: "70,00" },
      { name: "\"Perlè Rosè\", Ferrari, F.lli Lunelli, 2024", desc: "Trento DOC – 12,5% Chardonnay, Pinot Nero", price: "85,00" },
      { name: "\"Giulio Ferrari Riserva del Fondatore\", F.lli Lunelli, 2024", desc: "Trento DOC – 12,5% Chardonnay", price: "180,00" },
      { name: "\"Giulio Ferrari Riserva del Fondatore\", F.lli Lunelli, 2022", desc: "Trento DOC – 12,5% Chardonnay", price: "190,00" },
    ]
  }
};
