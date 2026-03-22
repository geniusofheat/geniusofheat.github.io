// ============================================================
//  § 1 — STATIC DATA: MONTHS & CATEGORY COLORS
// ============================================================
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const MONTHS_SHORT = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const CATEGORY_COLORS = {
  Meat:"#ff8a80",Seafood:"#80d8ff",Produce:"#b9f6ca",
  Dairy:"#fff9c4",Pantry:"#c5cae9",Bakery:"#ffe0b2",Other:"#f3e5f5"
};
// END § 1 — STATIC DATA: MONTHS & CATEGORY COLORS


// ============================================================
//  § 2 — RECIPES DATA
// ============================================================
const RECIPES = {
  "Grilled Lemon Herb Chicken":{
    emoji:"🍗",time:"35 min",servings:4,
    description:"Juicy grilled chicken marinated in fresh lemon, garlic, and herbs. Light, healthy, and packed with flavor.",
    ingredients:[
      {name:"Chicken breasts",qty:"4 pieces",category:"Meat"},
      {name:"Lemon",qty:"2 whole",category:"Produce"},
      {name:"Garlic cloves",qty:"4 cloves",category:"Produce"},
      {name:"Fresh rosemary",qty:"2 sprigs",category:"Produce"},
      {name:"Fresh thyme",qty:"2 sprigs",category:"Produce"},
      {name:"Olive oil",qty:"3 tbsp",category:"Pantry"},
      {name:"Salt",qty:"1 tsp",category:"Pantry"},
      {name:"Black pepper",qty:"½ tsp",category:"Pantry"},
    ],
    steps:[
      "Whisk together lemon juice, zest, minced garlic, olive oil, rosemary, and thyme in a bowl.",
      "Score chicken breasts lightly and coat in the marinade. Refrigerate for at least 20 minutes.",
      "Preheat grill to medium-high heat. Brush grates with oil.",
      "Grill chicken for 6–7 minutes per side until internal temperature reaches 165°F.",
      "Rest for 5 minutes before serving. Garnish with lemon slices.",
    ]
  },
  "Creamy Tuscan Pasta":{
    emoji:"🍝",time:"25 min",servings:4,
    description:"Sun-dried tomatoes, spinach, and parmesan come together in a silky cream sauce over perfectly al dente pasta.",
    ingredients:[
      {name:"Penne pasta",qty:"12 oz",category:"Pantry"},
      {name:"Heavy cream",qty:"1 cup",category:"Dairy"},
      {name:"Parmesan cheese",qty:"½ cup grated",category:"Dairy"},
      {name:"Sun-dried tomatoes",qty:"⅓ cup",category:"Pantry"},
      {name:"Baby spinach",qty:"2 cups",category:"Produce"},
      {name:"Garlic cloves",qty:"4 cloves",category:"Produce"},
      {name:"Chicken broth",qty:"½ cup",category:"Pantry"},
      {name:"Italian seasoning",qty:"1 tsp",category:"Pantry"},
      {name:"Butter",qty:"2 tbsp",category:"Dairy"},
    ],
    steps:[
      "Cook pasta in salted water until al dente. Reserve ½ cup pasta water before draining.",
      "In a large skillet, melt butter over medium heat. Sauté garlic for 1 minute until fragrant.",
      "Add sun-dried tomatoes and cook 2 minutes. Pour in chicken broth and cream.",
      "Simmer 5 minutes until slightly thickened. Stir in parmesan and spinach.",
      "Toss with pasta, adding pasta water as needed. Season and serve.",
    ]
  },
  "Honey Garlic Salmon":{
    emoji:"🐟",time:"20 min",servings:2,
    description:"Glazed salmon with a sweet and savory honey garlic sauce. Ready in 20 minutes and absolutely stunning.",
    ingredients:[
      {name:"Salmon fillets",qty:"2 fillets (6oz)",category:"Seafood"},
      {name:"Honey",qty:"3 tbsp",category:"Pantry"},
      {name:"Soy sauce",qty:"2 tbsp",category:"Pantry"},
      {name:"Garlic cloves",qty:"3 cloves",category:"Produce"},
      {name:"Butter",qty:"1 tbsp",category:"Dairy"},
      {name:"Lemon juice",qty:"1 tbsp",category:"Produce"},
      {name:"Fresh parsley",qty:"for garnish",category:"Produce"},
    ],
    steps:[
      "Mix honey, soy sauce, minced garlic, and lemon juice in a small bowl.",
      "Pat salmon dry with paper towels. Season with salt and pepper.",
      "Heat butter in an oven-safe skillet over medium-high heat.",
      "Sear salmon skin-side up for 3 minutes. Flip and pour glaze over top.",
      "Transfer to oven at 400°F for 5–7 minutes. Baste with pan juices and garnish.",
    ]
  },
  "Vegetable Stir-Fry":{
    emoji:"🥦",time:"20 min",servings:3,
    description:"Vibrant, crunchy vegetables tossed in a savory ginger-soy sauce. Serve over steamed rice.",
    ingredients:[
      {name:"Broccoli florets",qty:"2 cups",category:"Produce"},
      {name:"Bell peppers",qty:"2 peppers",category:"Produce"},
      {name:"Snap peas",qty:"1 cup",category:"Produce"},
      {name:"Carrots",qty:"2 medium",category:"Produce"},
      {name:"Soy sauce",qty:"3 tbsp",category:"Pantry"},
      {name:"Fresh ginger",qty:"1 tbsp grated",category:"Produce"},
      {name:"Garlic cloves",qty:"3 cloves",category:"Produce"},
      {name:"Sesame oil",qty:"1 tbsp",category:"Pantry"},
      {name:"Cornstarch",qty:"1 tsp",category:"Pantry"},
      {name:"Jasmine rice",qty:"1.5 cups",category:"Pantry"},
    ],
    steps:[
      "Cook jasmine rice according to package directions.",
      "Whisk soy sauce, ginger, garlic, sesame oil, and cornstarch for the sauce.",
      "Heat a wok over high heat with a splash of oil.",
      "Add carrots and broccoli first; stir-fry 3 minutes.",
      "Add peppers and snap peas. Pour sauce over and toss 2–3 minutes until glossy. Serve over rice.",
    ]
  },
  "Classic Beef Tacos":{
    emoji:"🌮",time:"25 min",servings:4,
    description:"Seasoned ground beef in warm corn tortillas with fresh toppings. A weeknight classic everyone loves.",
    ingredients:[
      {name:"Ground beef (80/20)",qty:"1 lb",category:"Meat"},
      {name:"Corn tortillas",qty:"12 small",category:"Pantry"},
      {name:"Taco seasoning",qty:"2 tbsp",category:"Pantry"},
      {name:"Shredded cheddar",qty:"1 cup",category:"Dairy"},
      {name:"Sour cream",qty:"½ cup",category:"Dairy"},
      {name:"Salsa",qty:"½ cup",category:"Pantry"},
      {name:"Romaine lettuce",qty:"1 head",category:"Produce"},
      {name:"Roma tomatoes",qty:"2 tomatoes",category:"Produce"},
      {name:"Lime",qty:"1 whole",category:"Produce"},
      {name:"Avocado",qty:"2 whole",category:"Produce"},
    ],
    steps:[
      "Brown ground beef in a skillet over medium-high heat, breaking it apart.",
      "Drain fat. Add taco seasoning and ¼ cup water; simmer 3 minutes.",
      "Warm tortillas over a gas flame or dry skillet for 30 seconds per side.",
      "Dice tomatoes and avocado; shred lettuce. Squeeze lime over avocado.",
      "Assemble tacos with beef and your preferred toppings.",
    ]
  },
  "Mushroom Risotto":{
    emoji:"🍄",time:"45 min",servings:4,
    description:"Slow-stirred creamy arborio rice with earthy mushrooms, white wine, and parmesan. Pure comfort food.",
    ingredients:[
      {name:"Arborio rice",qty:"1.5 cups",category:"Pantry"},
      {name:"Mixed mushrooms",qty:"2 cups",category:"Produce"},
      {name:"Vegetable broth",qty:"5 cups",category:"Pantry"},
      {name:"Dry white wine",qty:"½ cup",category:"Other"},
      {name:"Parmesan cheese",qty:"¾ cup grated",category:"Dairy"},
      {name:"Shallots",qty:"2 shallots",category:"Produce"},
      {name:"Garlic cloves",qty:"3 cloves",category:"Produce"},
      {name:"Butter",qty:"4 tbsp",category:"Dairy"},
      {name:"Olive oil",qty:"2 tbsp",category:"Pantry"},
      {name:"Fresh thyme",qty:"3 sprigs",category:"Produce"},
    ],
    steps:[
      "Warm broth in a saucepan over low heat; keep warm throughout.",
      "Sauté shallots in butter and oil 3 minutes. Add garlic and mushrooms, cook 5 minutes.",
      "Add rice and toast 2 minutes. Pour in wine and stir until absorbed.",
      "Add warm broth one ladle at a time, stirring constantly (about 25 min).",
      "Remove from heat. Stir in parmesan and remaining butter. Season with thyme, salt, and pepper.",
    ]
  },
  "Baked Ziti":{
    emoji:"🫕",time:"55 min",servings:6,
    description:"Layers of ziti, ricotta, mozzarella, and marinara baked to golden, bubbling perfection.",
    ingredients:[
      {name:"Ziti pasta",qty:"1 lb",category:"Pantry"},
      {name:"Marinara sauce",qty:"24 oz jar",category:"Pantry"},
      {name:"Ricotta cheese",qty:"15 oz",category:"Dairy"},
      {name:"Mozzarella cheese",qty:"2 cups shredded",category:"Dairy"},
      {name:"Parmesan cheese",qty:"½ cup grated",category:"Dairy"},
      {name:"Italian sausage",qty:"1 lb",category:"Meat"},
      {name:"Egg",qty:"1 large",category:"Dairy"},
      {name:"Fresh basil",qty:"¼ cup",category:"Produce"},
      {name:"Garlic powder",qty:"1 tsp",category:"Pantry"},
    ],
    steps:[
      "Preheat oven to 375°F. Cook ziti just under al dente; drain.",
      "Brown sausage in a skillet. Drain fat and combine with marinara.",
      "Mix ricotta, egg, garlic powder, half the parmesan, and most of the basil.",
      "Layer half the ziti in a 9x13 pan, spread ricotta, add half the meat sauce, top with half the mozzarella.",
      "Repeat layers. Top with remaining cheese. Bake covered 30 min, uncovered 15 min until golden.",
    ]
  },
  "Thai Green Curry":{
    emoji:"🍛",time:"30 min",servings:4,
    description:"Fragrant coconut milk curry with green curry paste, tender chicken, and Thai basil.",
    ingredients:[
      {name:"Chicken thighs",qty:"1.5 lbs",category:"Meat"},
      {name:"Coconut milk",qty:"2 cans (13.5oz)",category:"Pantry"},
      {name:"Green curry paste",qty:"3 tbsp",category:"Pantry"},
      {name:"Zucchini",qty:"1 medium",category:"Produce"},
      {name:"Bell pepper",qty:"1 pepper",category:"Produce"},
      {name:"Fish sauce",qty:"2 tbsp",category:"Pantry"},
      {name:"Brown sugar",qty:"1 tbsp",category:"Pantry"},
      {name:"Thai basil",qty:"1 cup",category:"Produce"},
      {name:"Lime",qty:"1 whole",category:"Produce"},
      {name:"Jasmine rice",qty:"1.5 cups",category:"Pantry"},
    ],
    steps:[
      "Cook jasmine rice. Cut chicken into bite-sized pieces.",
      "Heat a large pot over medium heat. Fry curry paste in thick coconut cream 2 minutes.",
      "Add chicken and cook until no longer pink, about 5 minutes.",
      "Pour in remaining coconut milk. Add zucchini and bell pepper.",
      "Season with fish sauce and brown sugar. Simmer 10 minutes. Finish with Thai basil and lime juice.",
    ]
  },
  "BBQ Pulled Pork Bowl":{
    emoji:"🥩",time:"20 min",servings:4,
    description:"Slow-cooked pulled pork in smoky BBQ sauce over rice with coleslaw. Bold and satisfying.",
    ingredients:[
      {name:"Pulled pork (cooked)",qty:"1.5 lbs",category:"Meat"},
      {name:"BBQ sauce",qty:"1 cup",category:"Pantry"},
      {name:"Jasmine rice",qty:"1.5 cups",category:"Pantry"},
      {name:"Coleslaw mix",qty:"2 cups",category:"Produce"},
      {name:"Apple cider vinegar",qty:"2 tbsp",category:"Pantry"},
      {name:"Mayonnaise",qty:"3 tbsp",category:"Pantry"},
      {name:"Corn kernels",qty:"1 cup",category:"Produce"},
      {name:"Green onions",qty:"3 stalks",category:"Produce"},
      {name:"Smoked paprika",qty:"1 tsp",category:"Pantry"},
    ],
    steps:[
      "Cook jasmine rice according to package instructions.",
      "Warm pulled pork with BBQ sauce and smoked paprika in a skillet.",
      "Toss coleslaw mix with mayonnaise, vinegar, salt, and pepper.",
      "Warm corn in the same skillet for 2 minutes.",
      "Build bowls: rice, pulled pork, coleslaw, corn. Top with green onions.",
    ]
  },
  "Avocado & Egg Toast":{
    emoji:"🥑",time:"10 min",servings:2,
    description:"Creamy smashed avocado on thick sourdough with perfectly cooked eggs. A nourishing start.",
    ingredients:[
      {name:"Sourdough bread",qty:"4 thick slices",category:"Bakery"},
      {name:"Ripe avocados",qty:"2 whole",category:"Produce"},
      {name:"Eggs",qty:"4 large",category:"Dairy"},
      {name:"Lemon juice",qty:"1 tbsp",category:"Produce"},
      {name:"Red pepper flakes",qty:"½ tsp",category:"Pantry"},
      {name:"Everything bagel seasoning",qty:"1 tsp",category:"Pantry"},
      {name:"Microgreens or arugula",qty:"1 handful",category:"Produce"},
      {name:"Olive oil",qty:"1 tbsp",category:"Pantry"},
    ],
    steps:[
      "Toast sourdough slices until golden and crisp.",
      "Mash avocados with lemon juice, salt, and pepper; leave slightly chunky.",
      "Fry or poach eggs in a non-stick pan with olive oil.",
      "Spread avocado generously on each toast slice.",
      "Top with egg, microgreens, red pepper flakes, and everything bagel seasoning.",
    ]
  }
};
// END § 2 — RECIPES DATA


// ============================================================
//  § 3 — STATE VARIABLES
// ============================================================
const today = new Date();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth();
let selectedDay = null;
let plannedMeals = {};
let groceryList = [];
let currentSuggestion = null;
// END § 3 — STATE VARIABLES


// ============================================================
//  § 4 — NAVIGATION
// ============================================================
function goToPlanner() { renderCalendar(); }
function goToPlannerAndGrocery() { goToPlanner(); setTimeout(openGrocery, 300); }
function goHome() { selectedDay = null; hideSteps(); }
// END § 4 — NAVIGATION


// ============================================================
//  § 5 — CALENDAR
// ============================================================
function renderCalendar() {
  const grid = document.getElementById('calGrid');
  document.getElementById('monthName').textContent = MONTHS[currentMonth];
  document.getElementById('yearLabel').textContent = currentYear;
  grid.innerHTML = '';
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  for (let i = 0; i < firstDay; i++) {
    grid.appendChild(document.createElement('div'));
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const cell = document.createElement('div');
    cell.className = 'cal-day';
    const key = cellKey(d);
    if (d === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) cell.classList.add('tod');
    if (selectedDay === d) cell.classList.add('sel');
    if (plannedMeals[key]) cell.classList.add('has');
    const num = document.createElement('span');
    num.textContent = d;
    if (d === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear() && selectedDay !== d) num.style.color = '#7ec8ff';
    cell.appendChild(num);
    if (plannedMeals[key]) {
      const em = document.createElement('span');
      em.className = 'meal-emoji';
      em.textContent = RECIPES[plannedMeals[key]]?.emoji || '';
      cell.appendChild(em);
    }
    cell.onclick = () => selectDay(d);
    grid.appendChild(cell);
  }
}
function cellKey(d) { return `${currentYear}-${currentMonth}-${d}`; }
function prevMonth() {
  if (currentMonth === 0) { currentMonth = 11; currentYear--; } else currentMonth--;
  selectedDay = null; hideSteps(); renderCalendar();
}
function nextMonth() {
  if (currentMonth === 11) { currentMonth = 0; currentYear++; } else currentMonth++;
  selectedDay = null; hideSteps(); renderCalendar();
}
function selectDay(d) {
  selectedDay = d;
  currentSuggestion = null;
  hideCookbook();
  document.getElementById('step3').style.display = 'none';
  renderCalendar();
  showStep1();
  showStep2();
}
// END § 5 — CALENDAR


// ============================================================
//  § 6 — STEPS
// ============================================================
function hideSteps() {
  ['step1','step2','step3','cookbookPanel','favoritesPanel','buildPanel'].forEach(id => document.getElementById(id).style.display = 'none');
}
function showStep1() {
  document.getElementById('step1').style.display = 'block';
  document.getElementById('chosenDate').textContent = `${MONTHS[currentMonth]} ${selectedDay}, ${currentYear}`;
}
function showStep2() {
  document.getElementById('step2').style.display = 'block';
}
function suggestMeal() {
  const names = Object.keys(RECIPES);
  currentSuggestion = names[Math.floor(Math.random() * names.length)];
  renderSuggestion();
  document.getElementById('step3').style.display = 'block';
  document.getElementById('step2').style.display = 'none';
}
function renderSuggestion() {
  if (!currentSuggestion) return;
  const r = RECIPES[currentSuggestion];
  document.getElementById('suggestionContent').innerHTML = `
    <div style="display:flex;gap:18px;flex-wrap:wrap;align-items:flex-start">
      <div style="flex:1">
        <p style="font-size:13px;color:rgba(160,200,255,0.45);margin:0 0 4px">How about this for ${MONTHS[currentMonth]} ${selectedDay}?</p>
        <p style="font-size:26px;font-weight:500;color:#fff;margin:0 0 8px">${r.emoji} ${currentSuggestion}</p>
        <p style="font-size:15px;color:rgba(200,220,255,0.45);margin:0 0 8px;line-height:1.55">${r.description}</p>
        <div style="display:flex;gap:12px;font-family:'Josefin Sans',sans-serif;font-size:9px;letter-spacing:2px;color:rgba(130,170,255,0.45);text-transform:uppercase">
          <span>⏱ ${r.time}</span><span>👤 Serves ${r.servings}</span>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px">
        <button class="pb" onclick="planCurrentSuggestion()">✓ Add to Calendar</button>
        <button class="nb" onclick="openRecipe('${currentSuggestion.replace(/'/g,"\\'")}')">👁 View Recipe</button>
        <button class="gb" onclick="addAllIngredients('${currentSuggestion.replace(/'/g,"\\'")}')">🛒 Add to Grocery</button>
        <button class="nb" onclick="suggestMeal()">↺ Try Another</button>
      </div>
    </div>`;
}
function planCurrentSuggestion() {
  if (!currentSuggestion || !selectedDay) return;
  plannedMeals[cellKey(selectedDay)] = currentSuggestion;
  selectedDay = null; currentSuggestion = null;
  hideSteps(); renderCalendar(); renderPlannedMeals(); updateHomeStats();
}
function planMeal(name) {
  if (!selectedDay) return;
  plannedMeals[cellKey(selectedDay)] = name;
  selectedDay = null;
  hideSteps(); renderCalendar(); renderPlannedMeals(); updateHomeStats();
  closeRecipeModal();
}
// END § 6 — STEPS


// ============================================================
//  § 7 — COOKBOOK
// ============================================================
const COOKBOOK_CATEGORIES = [
  { name: "Beverages",       emoji: "🥤", file: "beverages-menu.html" },
  { name: "Beans & Legumes", emoji: "🫘", file: "beans-menu.html" },
  { name: "Breads & Grains", emoji: "🍞", file: "breads-menu.html" },
  { name: "Candy",           emoji: "🍬", file: "candy-menu.html" },
  { name: "Desserts",        emoji: "🍰", file: "desserts-menu.html" },
  { name: "Meats",           emoji: "🥩", file: "meats-menu.html" },
  { name: "Pastas",          emoji: "🍝", file: "pastas-menu.html" },
  { name: "Salads",          emoji: "🥗", file: "salads-menu.html" },
  { name: "Soups & Stews",   emoji: "🍲", file: "soups-and-stews-menu.html" },
  { name: "Side Dishes",     emoji: "🥘", file: "sides-menu.html" },
];

function showCookbook() {
  document.getElementById('step2').style.display = 'none';
  document.getElementById('step3').style.display = 'none';
  const grid = document.getElementById('cookbookGrid');
  grid.innerHTML = '';
  COOKBOOK_CATEGORIES.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'rc';
    card.innerHTML = `
      <div style="font-size:28px;margin-bottom:8px">${cat.emoji}</div>
      <div class="rc-name" style="font-size:18px">${cat.name}</div>
      <div class="rc-btns" style="margin-top:12px">
        <a href="${cat.file}" style="flex:1;text-decoration:none">
          <button class="pb" style="padding:8px 12px;font-size:9px;width:100%">Browse Recipes →</button>
        </a>
      </div>`;
    grid.appendChild(card);
  });
  document.getElementById('cookbookPanel').style.display = 'block';
}
function hideCookbook() {
  document.getElementById('cookbookPanel').style.display = 'none';
}
function selectFromCookbook(name) {
  currentSuggestion = name;
  hideCookbook();
  renderSuggestion();
  document.getElementById('step3').style.display = 'block';
}
// END § 7 — COOKBOOK


// ============================================================
//  § 8 — PLANNED MEALS
// ============================================================
function renderPlannedMeals() {
  const keys = Object.keys(plannedMeals);
  const section = document.getElementById('plannedSection');
  const list = document.getElementById('plannedList');
  if (keys.length === 0) { section.style.display = 'none'; return; }
  section.style.display = 'block';
  document.getElementById('plannedTitle').textContent = `Your Planned Meals — ${keys.length} day${keys.length > 1 ? 's' : ''} scheduled`;
  list.innerHTML = '';
  keys.sort().forEach(key => {
    const mealName = plannedMeals[key];
    const [y, m, d] = key.split('-');
    const r = RECIPES[mealName];
    const safeName = mealName.replace(/'/g, "\\'");
    const row = document.createElement('div');
    row.className = 'meal-row';
    row.innerHTML = `
      <span class="meal-date">${MONTHS_SHORT[parseInt(m)]} ${d}</span>
      <span class="meal-name">${r?.emoji} ${mealName}</span>
      <div class="meal-actions">
        <button class="nb" style="padding:5px 12px;font-size:9px" onclick="openRecipe('${safeName}')">Recipe</button>
        <button class="gb" style="padding:5px 12px;font-size:9px" onclick="addAllIngredients('${safeName}')">+ Grocery</button>
        <button class="del-btn" onclick="deleteMeal('${key}')">✕</button>
      </div>`;
    list.appendChild(row);
  });
}
function deleteMeal(key) {
  delete plannedMeals[key];
  renderCalendar(); renderPlannedMeals(); updateHomeStats();
}
function addAllPlannedToGrocery() {
  Object.values(plannedMeals).forEach(m => addAllIngredients(m));
}
// END § 8 — PLANNED MEALS


// ============================================================
//  § 9 — RECIPE MODAL
// ============================================================
function openRecipe(name) {
  const r = RECIPES[name];
  if (!r) return;
  const safeName = name.replace(/'/g, "\\'");
  let ingHTML = r.ingredients.map(ing => {
    const color = CATEGORY_COLORS[ing.category] || '#c5cae9';
    const added = groceryList.some(g => g.name.toLowerCase() === ing.name.toLowerCase());
    const safeIng = JSON.stringify(ing).replace(/'/g, "\\'");
    return `<div class="ing-row" style="background:${color}0e">
      <div class="ing-left">
        <div class="ing-dot" style="background:${color}"></div>
        <span class="ing-name">${ing.name}</span>
      </div>
      <div class="ing-right">
        <span class="ing-qty">${ing.qty}</span>
        <button class="aib ${added ? 'done' : ''}" id="aib-${ing.name.replace(/\s/g,'_')}" onclick="${added ? '' : `addOneIngredient(${safeIng},'${safeName}',this)`}">${added ? '✓ Added' : '+ List'}</button>
      </div>
    </div>`;
  }).join('');
  let stepsHTML = r.steps.map((s, i) => `
    <div class="step-row">
      <div class="step-circle">${i+1}</div>
      <div class="step-text">${s}</div>
    </div>`).join('');
  let planCTA = selectedDay ? `
    <div class="plan-cta">
      <span class="plan-cta-text">Plan this for <strong style="color:#7ec8ff">${MONTHS[currentMonth]} ${selectedDay}</strong>?</span>
      <button class="pb" onclick="planMeal('${safeName}')">✓ Add to Calendar</button>
    </div>` : '';
  document.getElementById('recipeModalInner').innerHTML = `
    <div class="modal-body">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:18px">
        <div>
          <div style="font-family:'Josefin Sans',sans-serif;font-size:9px;letter-spacing:4px;color:#4a9fff;text-transform:uppercase;margin-bottom:6px">Recipe Detail</div>
          <h2 class="modal-rec-title">${r.emoji} ${name}</h2>
          <div class="modal-meta"><span>⏱ ${r.time}</span><span>👤 Serves ${r.servings}</span></div>
        </div>
        <button class="bb" onclick="closeRecipeModal()">✕ Close</button>
      </div>
      <p class="modal-desc">${r.description}</p>
      <button class="gb" style="width:100%;padding:12px;margin-bottom:22px" onclick="addAllIngredients('${safeName}')">🛒 Add All Ingredients to Grocery List</button>
      <div class="section-title">Ingredients</div>
      ${ingHTML}
      <div class="section-title" style="margin-top:22px">Instructions</div>
      ${stepsHTML}
      ${planCTA}
    </div>`;
  document.getElementById('recipeModal').classList.add('open');
}
function closeRecipeModal() {
  document.getElementById('recipeModal').classList.remove('open');
}
// END § 9 — RECIPE MODAL


// ============================================================
//  § 10 — GROCERY LIST
// ============================================================
function addAllIngredients(mealName) {
  const r = RECIPES[mealName];
  if (!r) return;
  let added = 0;
  r.ingredients.forEach(ing => {
    if (!groceryList.some(g => g.name.toLowerCase() === ing.name.toLowerCase())) {
      groceryList.push({ ...ing, checked: false, fromMeal: mealName });
      added++;
    }
  });
  showToast(added > 0 ? `✓ ${added} items added from ${mealName}` : 'All items already in list');
  renderGrocery(); updateHomeStats();
}
function addOneIngredient(ing, mealName, btn) {
  if (groceryList.some(g => g.name.toLowerCase() === ing.name.toLowerCase())) return;
  groceryList.push({ ...ing, checked: false, fromMeal: mealName });
  if (btn) { btn.textContent = '✓ Added'; btn.classList.add('done'); }
  showToast(`✓ ${ing.name} added`);
  renderGrocery(); updateHomeStats();
}
function renderGrocery() {
  const container = document.getElementById('groceryItems');
  const unchecked = groceryList.filter(i => !i.checked).length;
  document.getElementById('groceryCount').textContent = `${unchecked} item${unchecked !== 1 ? 's' : ''} remaining`;
  const badge = document.getElementById('groceryBadge');
  if (unchecked > 0) { badge.style.display = 'flex'; badge.textContent = unchecked; } else { badge.style.display = 'none'; }
  if (groceryList.length === 0) {
    container.innerHTML = '<div class="grocery-empty"><div class="big">🧺</div><div style="font-size:17px">Your list is empty.</div><div style="font-family:\'Josefin Sans\',sans-serif;font-size:9px;letter-spacing:2px;margin-top:6px;text-transform:uppercase">Open a recipe to add ingredients.</div></div>';
    return;
  }
  const grouped = {};
  groceryList.forEach((item, idx) => {
    if (!grouped[item.category]) grouped[item.category] = [];
    grouped[item.category].push({ ...item, idx });
  });
  container.innerHTML = '';
  Object.entries(grouped).forEach(([cat, items]) => {
    const catDiv = document.createElement('div');
    catDiv.style.marginBottom = '18px';
    catDiv.innerHTML = `<div class="cat-label"><span class="cat-dot" style="background:${CATEGORY_COLORS[cat]||'#c5cae9'}"></span>${cat}</div>`;
    items.forEach(item => {
      const row = document.createElement('div');
      row.className = `grocery-item ${item.checked ? 'checked' : ''}`;
      row.innerHTML = `
        <input type="checkbox" ${item.checked ? 'checked' : ''} onchange="toggleItem(${item.idx})">
        <span class="grocery-item-name">${item.name}</span>
        <span class="grocery-item-qty">${item.qty}</span>
        <button class="grocery-remove" onclick="removeItem(${item.idx})">✕</button>`;
      catDiv.appendChild(row);
    });
    container.appendChild(catDiv);
  });
}
function toggleItem(idx) {
  groceryList[idx].checked = !groceryList[idx].checked;
  renderGrocery();
}
function removeItem(idx) {
  groceryList.splice(idx, 1);
  renderGrocery();
}
function removeChecked() {
  groceryList = groceryList.filter(i => !i.checked);
  renderGrocery();
}
function clearGrocery() {
  groceryList = [];
  renderGrocery();
}
function openGrocery() { document.getElementById('groceryPanel').classList.add('open'); }
function closeGrocery() { document.getElementById('groceryPanel').classList.remove('open'); }
// END § 10 — GROCERY LIST


// ============================================================
//  § 11 — TOAST NOTIFICATION
// ============================================================
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}
// END § 11 — TOAST NOTIFICATION


// ============================================================
//  § 12 — STATS
// ============================================================
function updateHomeStats() {}
// END § 12 — STATS


// ============================================================
//  § 13 — CUSTOM RECIPES & FAVORITES
// ============================================================
let customRecipes = [];

function showFavorites() {
  document.getElementById('favoritesPanel').style.display = 'block';
  document.getElementById('cookbookPanel').style.display = 'none';
  document.getElementById('buildPanel').style.display = 'none';
  const grid = document.getElementById('favoritesGrid');
  if (customRecipes.length === 0) {
    grid.innerHTML = '<div style="text-align:center;padding:30px 0;font-size:16px;color:rgba(160,196,255,0.35)">No saved recipes yet.<br><span style="font-family:\'Josefin Sans\',sans-serif;font-size:9px;letter-spacing:2px;text-transform:uppercase">Build a recipe below to add it here.</span></div>';
    return;
  }
  grid.innerHTML = '';
  customRecipes.forEach((r, i) => {
    const div = document.createElement('div');
    div.className = 'rc';
    div.style.borderColor = 'rgba(255,200,80,0.2)';
    div.innerHTML = `
      <div style="font-size:18px;color:#d0e4ff;margin-bottom:5px">⭐ ${r.name}</div>
      <div style="font-size:13px;color:rgba(160,196,255,0.35);margin-bottom:10px;line-height:1.4">${r.description.slice(0,65)}…</div>
      <div style="display:flex;gap:7px">
        <button class="goldbtn" style="padding:7px 12px;font-size:9px;flex:1" onclick="selectCustomRecipe(${i})">Select</button>
        <button class="nb" style="padding:7px 12px;font-size:9px" onclick="viewCustomRecipe(${i})">Details</button>
      </div>`;
    grid.appendChild(div);
  });
}
function hideFavorites() {
  document.getElementById('favoritesPanel').style.display = 'none';
}
function selectCustomRecipe(i) {
  const r = customRecipes[i];
  currentSuggestion = r.name;
  RECIPES[r.name] = r;
  hideFavorites();
  renderSuggestion();
  document.getElementById('step3').style.display = 'block';
}
function viewCustomRecipe(i) {
  const r = customRecipes[i];
  RECIPES[r.name] = r;
  openRecipe(r.name);
}
function showBuildForm() {
  document.getElementById('buildPanel').style.display = 'block';
  document.getElementById('cookbookPanel').style.display = 'none';
  document.getElementById('favoritesPanel').style.display = 'none';
  document.getElementById('buildName').value = '';
  document.getElementById('buildDesc').value = '';
  document.getElementById('buildIngRows').innerHTML = '';
  document.getElementById('buildStepRows').innerHTML = '';
  addIngRow(); addIngRow(); addStepRow(); addStepRow();
}
function hideBuildForm() {
  document.getElementById('buildPanel').style.display = 'none';
}

let ingRowCount = 0;
let stepRowCount = 0;

function addIngRow() {
  ingRowCount++;
  const id = ingRowCount;
  const num = document.getElementById('buildIngRows').children.length + 1;
  const row = document.createElement('div');
  row.className = 'ing-build-row';
  row.id = `ing-row-${id}`;
  row.innerHTML = `
    <div class="ing-num">${num}</div>
    <input class="ing-name-in" type="text" placeholder="Ingredient name" />
    <input class="ing-qty-in" type="text" placeholder="Qty" />
    <button class="row-del" onclick="document.getElementById('ing-row-${id}').remove();renumberIngs()">✕</button>`;
  document.getElementById('buildIngRows').appendChild(row);
}
function addStepRow() {
  stepRowCount++;
  const id = stepRowCount;
  const num = document.getElementById('buildStepRows').children.length + 1;
  const row = document.createElement('div');
  row.className = 'step-build-row';
  row.id = `step-row-${id}`;
  row.innerHTML = `
    <div class="step-num">${num}</div>
    <textarea placeholder="Describe this step…"></textarea>
    <button class="row-del" onclick="document.getElementById('step-row-${id}').remove();renumberSteps()">✕</button>`;
  document.getElementById('buildStepRows').appendChild(row);
}
function renumberSteps() {
  document.getElementById('buildStepRows').querySelectorAll('.step-build-row').forEach((row, i) => {
    const el = row.querySelector('.step-num'); if (el) el.textContent = i + 1;
  });
}
function renumberIngs() {
  document.getElementById('buildIngRows').querySelectorAll('.ing-build-row').forEach((row, i) => {
    const el = row.querySelector('.ing-num'); if (el) el.textContent = i + 1;
  });
}
function saveCustomRecipe() {
  const name = document.getElementById('buildName').value.trim();
  const desc = document.getElementById('buildDesc').value.trim();
  if (!name) { showToast('Please enter a recipe name'); return; }
  const ingredients = [];
  document.getElementById('buildIngRows').querySelectorAll('.ing-build-row').forEach(row => {
    const inputs = row.querySelectorAll('input');
    const n = inputs[0]?.value.trim();
    const q = inputs[1]?.value.trim();
    if (n) ingredients.push({ name: n, qty: q || '', category: 'Pantry' });
  });
  const steps = [];
  document.getElementById('buildStepRows').querySelectorAll('.step-build-row').forEach(row => {
    const t = row.querySelector('textarea')?.value.trim();
    if (t) steps.push(t);
  });
  const recipe = { name, description: desc || 'A custom recipe.', emoji: '📝', time: '—', servings: '—', ingredients, steps };
  customRecipes.push(recipe);
  RECIPES[name] = recipe;
  hideBuildForm();
  renderMyRecipes();
  showToast(`✓ "${name}" saved!`);
}
function renderMyRecipes() {
  const section = document.getElementById('myRecipesSection');
  const list = document.getElementById('myRecipesList');
  if (customRecipes.length === 0) { section.style.display = 'none'; return; }
  section.style.display = 'block';
  list.innerHTML = '';
  customRecipes.forEach((r, i) => {
    const item = document.createElement('div');
    item.className = 'my-recipe-item';
    item.innerHTML = `
      <div>
        <span class="my-recipe-num">${i + 1}.</span>
        <span class="my-recipe-name" onclick="toggleMyRecipe(${i})">${r.name}</span>
      </div>
      <div class="my-recipe-details" id="my-recipe-detail-${i}">
        <div style="font-size:14px;color:rgba(200,220,255,0.5);margin-bottom:10px;line-height:1.5">${r.description}</div>
        <div style="font-family:'Josefin Sans',sans-serif;font-size:9px;letter-spacing:3px;color:rgba(255,200,80,0.5);text-transform:uppercase;margin-bottom:8px">Ingredients</div>
        ${r.ingredients.map(ing => `<div style="font-size:15px;color:#d0e4ff;padding:4px 0;border-bottom:1px solid rgba(100,160,255,0.08)">• ${ing.name} <span style="color:rgba(160,196,255,0.35);font-size:13px">${ing.qty}</span></div>`).join('')}
        <div style="display:flex;gap:8px;margin-top:12px">
          <button class="goldbtn" style="padding:7px 14px;font-size:9px" onclick="selectCustomRecipe(${i})">Plan This Meal</button>
          <button class="gb" style="padding:7px 14px;font-size:9px" onclick="addAllIngredients('${r.name.replace(/'/g,"\\'")}')">+ Grocery</button>
        </div>
      </div>`;
    list.appendChild(item);
  });
}
function toggleMyRecipe(i) {
  document.getElementById(`my-recipe-detail-${i}`).classList.toggle('open');
}
// END § 13 — CUSTOM RECIPES & FAVORITES


// ============================================================
//  § 14 — INIT
// ============================================================
document.getElementById('recipeModal').addEventListener('click', function(e) {
  if (e.target === this) closeRecipeModal();
});
renderCalendar();
renderGrocery();
// END § 14 — INIT
