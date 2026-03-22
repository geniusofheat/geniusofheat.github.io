// ================================================================
//  STORE PURCHASE RECOMMENDATIONS
// ================================================================
const storeRecommendations = {
  'flour':           { unit:'cup',  sizes:[{max:4,label:'one 2 lb bag'},{max:8,label:'one 5 lb bag'},{max:999,label:'two 5 lb bags'}] },
  'sugar':           { unit:'cup',  sizes:[{max:2,label:'one 1 lb bag'},{max:4,label:'one 2 lb bag'},{max:8,label:'one 4 lb bag'},{max:999,label:'two 4 lb bags'}] },
  'brown sugar':     { unit:'cup',  sizes:[{max:2,label:'one 1 lb box'},{max:4,label:'one 2 lb box'},{max:999,label:'two 2 lb boxes'}] },
  'powdered sugar':  { unit:'cup',  sizes:[{max:2,label:'one 1 lb box'},{max:4,label:'one 2 lb box'},{max:999,label:'two 2 lb boxes'}] },
  'butter':          { unit:'cup',  sizes:[{max:0.5,label:'one 1/2 lb box (2 sticks)'},{max:1,label:'one 1 lb box (4 sticks)'},{max:999,label:'two 1 lb boxes'}] },
  'milk':            { unit:'cup',  sizes:[{max:2,label:'one 1 pint carton'},{max:4,label:'one 1 quart carton'},{max:999,label:'one 1 gallon jug'}] },
  'heavy cream':     { unit:'cup',  sizes:[{max:2,label:'one 1 pint carton'},{max:4,label:'two 1 pint cartons'},{max:999,label:'one 1 quart carton'}] },
  'eggs':            { unit:'unit', sizes:[{max:6,label:'one dozen'},{max:12,label:'one dozen'},{max:999,label:'two dozen'}] },
  'vanilla':         { unit:'tsp',  sizes:[{max:3,label:'one 1 oz bottle'},{max:999,label:'one 2 oz bottle'}] },
  'baking soda':     { unit:'tsp',  sizes:[{max:999,label:'one 8 oz box'}] },
  'baking powder':   { unit:'tsp',  sizes:[{max:999,label:'one 8 oz can'}] },
  'cocoa powder':    { unit:'cup',  sizes:[{max:1,label:'one 8 oz can'},{max:999,label:'one 16 oz can'}] },
  'chocolate chips': { unit:'cup',  sizes:[{max:2,label:'one 12 oz bag'},{max:999,label:'two 12 oz bags'}] },
  'salt':            { unit:'tsp',  sizes:[{max:999,label:'one 26 oz canister'}] },
  'cinnamon':        { unit:'tsp',  sizes:[{max:999,label:'one 2 oz jar'}] },
  'cornstarch':      { unit:'tbsp', sizes:[{max:6,label:'one 16 oz box'},{max:999,label:'one 16 oz box'}] },
  'vegetable oil':   { unit:'cup',  sizes:[{max:2,label:'one 16 oz bottle'},{max:999,label:'one 32 oz bottle'}] },
  'cream cheese':    { unit:'oz',   sizes:[{max:8,label:'one 8 oz block'},{max:16,label:'two 8 oz blocks'},{max:999,label:'three 8 oz blocks'}] },
  'sour cream':      { unit:'cup',  sizes:[{max:1,label:'one 8 oz container'},{max:999,label:'one 16 oz container'}] },
  'condensed milk':  { unit:'can',  sizes:[{max:1,label:'one 14 oz can'},{max:999,label:'two 14 oz cans'}] },
  'yeast':           { unit:'packet',sizes:[{max:2,label:'one 3-packet strip'},{max:999,label:'two 3-packet strips'}] },
  'gelatin':         { unit:'tsp',  sizes:[{max:4,label:'one 1 oz box'},{max:999,label:'two 1 oz boxes'}] },
  'peanut butter':   { unit:'cup',  sizes:[{max:1,label:'one 16 oz jar'},{max:999,label:'one 40 oz jar'}] },
  'corn syrup':      { unit:'cup',  sizes:[{max:2,label:'one 16 oz bottle'},{max:999,label:'one 32 oz bottle'}] },
  'lemon juice':     { unit:'cup',  sizes:[{max:0.5,label:'two to three fresh lemons'},{max:1,label:'four to five fresh lemons'},{max:999,label:'one 32 oz bottle'}] },
  'oats':            { unit:'cup',  sizes:[{max:3,label:'one 18 oz canister'},{max:999,label:'two 18 oz canisters'}] },
  'raisins':         { unit:'cup',  sizes:[{max:2,label:'one 12 oz box'},{max:999,label:'two 12 oz boxes'}] },
  'molasses':        { unit:'cup',  sizes:[{max:1,label:'one 12 oz bottle'},{max:999,label:'one 32 oz bottle'}] },
};

function getRecommendation(ingredientName, totalAmount, unit) {
  const name = ingredientName.toLowerCase();
  let key = null;
  for (let k in storeRecommendations) {
    if (name.includes(k)) { key = k; break; }
  }
  if (!key) return null;
  const rec = storeRecommendations[key];
  for (let s of rec.sizes) {
    if (totalAmount <= s.max) return s.label;
  }
  return rec.sizes[rec.sizes.length - 1].label;
}

// ================================================================
//  UNIT CONVERSION
// ================================================================
function parseIngredient(str) {
  str = str.toLowerCase().trim();
  const fractions = {'¼':0.25,'½':0.5,'¾':0.75,'⅓':0.333,'⅔':0.667,'⅛':0.125};
  let amount = 0;
  let unit   = '';
  let name   = str;
  for (let f in fractions) { str = str.replace(f, fractions[f]); }
  const match = str.match(/^([\d.]+)\s*(cup|cups|tbsp|tablespoon|tablespoons|tsp|teaspoon|teaspoons|oz|ounce|ounces|lb|pound|pounds|g|gram|grams|ml|liter|liters|l|packet|packets|can|cans|sheet|sheets|stick|sticks|large|medium|small|clove|cloves|pinch|dash)s?\s+(.+)/i);
  if (match) {
    amount = parseFloat(match[1]);
    unit   = match[2].toLowerCase();
    name   = match[3].trim();
  } else {
    const numOnly = str.match(/^([\d.]+)\s+(.+)/);
    if (numOnly) { amount = parseFloat(numOnly[1]); name = numOnly[2].trim(); unit = 'unit'; }
  }
  if (unit === 'tbsp' || unit === 'tablespoon' || unit === 'tablespoons') { amount = amount / 16; unit = 'cup'; }
  if (unit === 'tsp'  || unit === 'teaspoon'   || unit === 'teaspoons')   { amount = amount / 48; unit = 'cup'; }
  if (unit === 'ml')                                                        { amount = amount / 240; unit = 'cup'; }
  if (unit === 'l'    || unit === 'liter'       || unit === 'liters')      { amount = amount * 4.23; unit = 'cup'; }
  if (unit === 'g'    || unit === 'gram'        || unit === 'grams')       { amount = amount / 125; unit = 'cup'; }
  if (unit === 'oz'   || unit === 'ounce'       || unit === 'ounces')      { amount = amount / 8; unit = 'cup'; }
  if (unit === 'lb'   || unit === 'pound'       || unit === 'pounds')      { amount = amount * 2; unit = 'cup'; }
  name = name.replace(/\(.*?\)/g, '').replace(/,.*$/, '').trim();
  return { amount, unit, name };
}

function formatAmount(amount, unit) {
  if (unit === 'cup') {
    if (amount < 0.1)   return 'a pinch';
    if (amount <= 0.13) return '⅛ cup';
    if (amount <= 0.27) return '¼ cup';
    if (amount <= 0.38) return '⅓ cup';
    if (amount <= 0.55) return '½ cup';
    if (amount <= 0.72) return '¾ cup';
    if (amount <= 1.1)  return '1 cup';
    return Math.round(amount * 10) / 10 + ' cups';
  }
  if (unit === 'unit') return Math.ceil(amount) + '';
  return Math.round(amount * 10) / 10 + ' ' + unit;
}

// ================================================================
//  COMBINE INGREDIENTS
// ================================================================
function combineIngredients(recipes) {
  const combined = {};
  recipes.forEach(function(recipe) {
    recipe.ingredients.forEach(function(ingStr) {
      const parsed = parseIngredient(ingStr);
      if (!parsed.name || parsed.name.length < 2) return;
      let foundKey = null;
      for (let key in combined) {
        if (key.includes(parsed.name) || parsed.name.includes(key)) { foundKey = key; break; }
      }
      if (foundKey) {
        combined[foundKey].amount += parsed.amount;
      } else {
        combined[parsed.name] = { amount: parsed.amount, unit: parsed.unit, rawName: parsed.name };
      }
    });
  });
  return combined;
}

// ================================================================
//  STORAGE
// ================================================================
let favorites    = [];
let grocery_list = {};

function load_from_storage() {
  try {
    const stored = localStorage.getItem('mealplanner_favorites');
    if (stored) favorites = JSON.parse(stored);
    const stored_grocery = localStorage.getItem('mealplanner_grocery');
    if (stored_grocery) grocery_list = JSON.parse(stored_grocery);
  } catch(e) { favorites = []; grocery_list = {}; }
}

function save_to_storage() {
  try {
    localStorage.setItem('mealplanner_favorites', JSON.stringify(favorites));
    localStorage.setItem('mealplanner_grocery',   JSON.stringify(grocery_list));
  } catch(e) {}
}

// ================================================================
//  RENDER FAVORITES — grouped by category with toggle cards
// ================================================================
function render_favorites() {
  const container = document.getElementById('favoritesContainer');
  container.innerHTML = '';

  if (favorites.length === 0) {
    container.innerHTML =
      '<div class="nav-pill-wrap"><div class="nav-pill-outer"><div class="card">' +
      '<div class="card-body"><div class="tip-box">' +
      '♡ You have not saved any recipes yet. Go to the Cookbook and tap Save to Favorites on any recipe.' +
      '</div></div></div></div></div>';
    return;
  }

  // Group by category
  const categories = {};
  favorites.forEach(function(fav, idx) {
    const cat = fav.catName || 'Uncategorized';
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push({ fav: fav, idx: idx });
  });

  // Send all checked button
  const send_all_wrap = document.createElement('div');
  send_all_wrap.style.cssText = 'padding:0 16px 12px 16px;';
  send_all_wrap.innerHTML =
    '<button class="btn-blue" style="width:100%;" onclick="send_all_checked()">🛒 Send All Checked to Grocery List</button>';
  container.appendChild(send_all_wrap);

  // One card per category
  Object.keys(categories).forEach(function(cat_name) {
    const items   = categories[cat_name];
    const cat_id  = cat_name.replace(/\s+/g, '_').toLowerCase();

    const wrap = document.createElement('div');
    wrap.className = 'nav-pill-wrap';
    wrap.innerHTML =
      '<div class="nav-pill-outer">' +
      '<div class="card">' +
        '<div class="card-header">' +
          '<div class="card-title">♡ ' + cat_name + '</div>' +
          '<p class="card-desc">' + items.length + ' saved recipe' + (items.length > 1 ? 's' : '') + '</p>' +
          '<div class="gold-rule"></div>' +
        '</div>' +
        '<div class="card-body">' +
          '<button class="btn-blue" style="width:100%;" onclick="toggle_fav_category(\'' + cat_id + '\')">View Recipes</button>' +
          '<ul class="category-list" id="fav_' + cat_id + '"></ul>' +
        '</div>' +
      '</div>' +
      '</div>';
    container.appendChild(wrap);

    // Populate list items
    const ul = wrap.querySelector('#fav_' + cat_id);
    items.forEach(function(item) {
      const li = document.createElement('li');
      li.className = 'browser-item';
      li.style.cssText = 'display:flex;align-items:center;gap:8px;';
      li.innerHTML =
        '<input type="checkbox" id="chk_' + item.idx + '" style="accent-color:gold;">' +
        '<span class="browser-item-name" style="flex:1;" onclick="open_fav_modal(' + item.idx + ')">' + item.fav.name + '</span>' +
        '<button onclick="remove_favorite(' + item.idx + ')" style="background:transparent;border:none;color:rgba(200,169,110,0.6);font-size:16px;cursor:pointer;">✕</button>';
      ul.appendChild(li);
    });
  });
}

// ================================================================
//  TOGGLE CATEGORY LIST
// ================================================================
function toggle_fav_category(cat_id) {
  const ul = document.getElementById('fav_' + cat_id);
  if (!ul) return;
  ul.style.display = ul.style.display === 'block' ? 'none' : 'block';
}

// ================================================================
//  OPEN RECIPE MODAL
// ================================================================
function open_fav_modal(idx) {
  const fav = favorites[idx];
  document.getElementById('recipeModalTitle').textContent = fav.name;

  let html = '';
  if (fav.catName) {
    html += '<p style="font-family:\'Space Mono\',monospace;font-size:11px;color:rgba(200,169,110,0.7);margin:0 0 16px 0;">' + fav.catName + '</p>';
  }
  html += '<p style="font-family:\'Playfair Display\',serif;font-size:15px;color:gold;margin:0 0 8px 0;">Ingredients</p>';
  html += '<ul style="margin:0 0 20px 0;padding-left:18px;">';
  fav.ingredients.forEach(function(ing) {
    html += '<li style="font-family:\'Crimson Pro\',serif;color:#e8dcc8;font-size:15px;margin-bottom:5px;">' + ing + '</li>';
  });
  html += '</ul>';
  html += '<p style="font-family:\'Playfair Display\',serif;font-size:15px;color:gold;margin:0 0 8px 0;">Preparation</p>';
  html += '<p style="font-family:\'Crimson Pro\',serif;color:#e8dcc8;font-size:15px;line-height:1.7;margin:0 0 20px 0;">' + fav.prep + '</p>';
  html += '<button onclick="send_one_to_grocery(' + idx + ')" style="width:100%;padding:12px;background:transparent;border:1px solid rgba(200,169,110,0.5);color:gold;font-family:\'Space Mono\',monospace;font-size:12px;border-radius:8px;cursor:pointer;margin-bottom:8px;">🛒 Send to Grocery List</button>';
  html += '<button onclick="remove_favorite(' + idx + ')" style="width:100%;padding:12px;background:transparent;border:1px solid rgba(255,100,100,0.4);color:rgba(255,150,150,0.8);font-family:\'Space Mono\',monospace;font-size:12px;border-radius:8px;cursor:pointer;">✕ Remove from Favorites</button>';

  document.getElementById('recipeModalBody').innerHTML = html;
  document.getElementById('recipeModal').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeRecipeModal() {
  document.getElementById('recipeModal').style.display = 'none';
  document.body.style.overflow = '';
}

// ================================================================
//  REMOVE FROM FAVORITES
// ================================================================
function remove_favorite(idx) {
  favorites.splice(idx, 1);
  save_to_storage();
  document.getElementById('recipeModal').style.display = 'none';
  document.body.style.overflow = '';
  render_favorites();
}

// ================================================================
//  SEND ONE RECIPE TO GROCERY LIST
// ================================================================
function send_one_to_grocery(idx) {
  add_recipes_to_grocery([favorites[idx]]);
  closeRecipeModal();
  scroll_to_grocery();
}

// ================================================================
//  SEND ALL CHECKED TO GROCERY LIST
// ================================================================
function send_all_checked() {
  const to_send = [];
  favorites.forEach(function(fav, idx) {
    const chk = document.getElementById('chk_' + idx);
    if (chk && chk.checked) to_send.push(fav);
  });
  if (to_send.length === 0) { alert('Please check at least one recipe first.'); return; }
  add_recipes_to_grocery(to_send);
  scroll_to_grocery();
}

// ================================================================
//  ADD RECIPES TO GROCERY LIST
// ================================================================
function add_recipes_to_grocery(recipes) {
  const new_ingredients = combineIngredients(recipes);
  for (let key in new_ingredients) {
    if (grocery_list[key]) {
      grocery_list[key].amount += new_ingredients[key].amount;
    } else {
      grocery_list[key] = new_ingredients[key];
    }
  }
  save_to_storage();
  render_grocery();
  document.getElementById('grocerySection').style.display = 'block';
}

// ================================================================
//  RENDER GROCERY LIST
// ================================================================
function render_grocery() {
  const container = document.getElementById('groceryItems');
  container.innerHTML = '';
  const keys = Object.keys(grocery_list);
  if (keys.length === 0) {
    document.getElementById('grocerySection').style.display = 'none';
    return;
  }
  keys.forEach(function(key) {
    const item      = grocery_list[key];
    const formatted = formatAmount(item.amount, item.unit);
    const rec       = getRecommendation(key, item.amount, item.unit);
    const div = document.createElement('div');
    div.style.cssText = 'display:flex;align-items:flex-start;gap:10px;padding:10px 0;border-bottom:1px solid rgba(200,169,110,0.15);';
    div.innerHTML =
      '<input type="checkbox" style="accent-color:gold;margin-top:3px;">' +
      '<div style="flex:1;">' +
        '<div style="font-family:\'Crimson Pro\',serif;color:#e8dcc8;font-size:15px;">' + item.rawName.charAt(0).toUpperCase() + item.rawName.slice(1) + '</div>' +
        '<div style="font-family:\'Space Mono\',monospace;font-size:11px;color:rgba(200,169,110,0.7);margin-top:3px;">' +
          'Total: ' + formatted +
          (rec ? ' &nbsp;·&nbsp; Buy: ' + rec : '') +
        '</div>' +
      '</div>';
    container.appendChild(div);
  });
}

// ================================================================
//  CLEAR GROCERY LIST
// ================================================================
function clearGrocery() {
  if (!confirm('Clear the entire grocery list?')) return;
  grocery_list = {};
  save_to_storage();
  render_grocery();
}

// ================================================================
//  SCROLL TO GROCERY
// ================================================================
function scroll_to_grocery() {
  const section = document.getElementById('grocerySection');
  section.style.display = 'block';
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ================================================================
//  INITIALIZE
// ================================================================
load_from_storage();
render_favorites();
if (Object.keys(grocery_list).length > 0) render_grocery();
