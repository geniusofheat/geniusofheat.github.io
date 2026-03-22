const candy_data = [

  // ===========================
  // 🍬 HARD & SYRUP CANDIES
  // ===========================
  {
    id: 'candy',
    icon:"🍬", name:"Hard & Syrup Candies",
    desc:"Traditional sugar candies including brittle, toffee, caramel, and classic hard candies made from cooked sugar syrup.",
    recipes:[

      {name:"Almond Toffee",servings:"8 servings",ingredients:["1 cup butter","1 cup sugar","2 tbsp water","1 cup sliced almonds","1 cup semisweet chocolate chips"],prep:"Melt butter, sugar, and water in a heavy saucepan over medium heat. Cook while stirring until mixture reaches hard-crack stage and turns golden. Stir in almonds and pour onto a parchment-lined sheet. Sprinkle chocolate chips over hot toffee and spread when melted. Cool completely and break into pieces."},

      {name:"Candy Apples",servings:"6 apples",ingredients:["6 small apples, washed and dried","2 cups sugar","½ cup light corn syrup","¾ cup water","1 tsp red food coloring","½ tsp cinnamon extract (optional)"],prep:"Insert sticks into apples. Combine sugar, corn syrup, and water in saucepan and boil without stirring until mixture reaches 300°F hard-crack stage. Remove from heat and add food coloring and flavoring. Quickly dip apples and rotate to coat. Place on greased parchment and allow coating to harden."},

      {name:"Chocolate Fudge",servings:"16 squares",ingredients:["3 cups semisweet chocolate chips","1 can sweetened condensed milk","1 tbsp butter","1 tsp vanilla extract"],prep:"Combine chocolate chips, condensed milk, and butter in a saucepan over low heat. Stir until melted and smooth. Remove from heat and add vanilla. Pour mixture into a parchment-lined pan and smooth top. Chill until firm then cut into squares."},

      {name:"Honey Caramels",servings:"24 pieces",ingredients:["1 cup honey","1 cup sugar","½ cup light corn syrup","½ cup butter","1 cup heavy cream","1 tsp vanilla extract"],prep:"Combine honey, sugar, and corn syrup in saucepan and cook over medium heat. Slowly stir in butter and cream. Continue cooking and stirring until mixture reaches firm-ball stage around 248°F. Remove from heat and add vanilla. Pour into a buttered pan. Cool completely then cut into squares."},

      {name:"Lemonheads",servings:"30 candies",ingredients:["2 cups sugar","½ cup light corn syrup","½ cup water","1 tsp lemon extract","1 tsp citric acid","yellow food coloring"],prep:"Combine sugar, corn syrup, and water in saucepan and cook to hard-crack stage about 300°F. Remove from heat and stir in lemon extract, citric acid, and coloring. Drop small spoonfuls onto parchment or shape into small balls. Allow to cool and harden completely."},

      {name:"Peanut Brittle",servings:"10 servings",ingredients:["1 cup sugar","½ cup light corn syrup","¼ cup water","1 cup raw peanuts","2 tbsp butter","1 tsp baking soda","½ tsp salt"],prep:"Combine sugar, corn syrup, and water in saucepan and cook over medium heat until mixture turns golden. Stir in peanuts and cook until syrup reaches hard-crack stage. Remove from heat and quickly stir in butter, baking soda, and salt. Spread thinly on greased baking sheet and cool before breaking into pieces."},

      {name:"Penuche Fudge",servings:"16 squares",ingredients:["2 cups brown sugar","1 cup milk","2 tbsp butter","1 tsp vanilla extract","1 cup chopped pecans"],prep:"Combine brown sugar, milk, and butter in saucepan and cook to soft-ball stage about 236°F. Remove from heat and beat mixture until thick and creamy. Stir in vanilla and pecans. Spread into greased pan and allow to set before cutting."},

      {name:"Rock Candy",servings:"Several sticks",ingredients:["2 cups water","4 cups sugar","food coloring optional","flavoring extract optional"],prep:"Heat water in saucepan and add sugar gradually while stirring until completely dissolved forming a supersaturated syrup. Pour into jars and add coloring or flavoring if desired. Place sugar-coated sticks or strings into jars and allow crystals to grow for 5–7 days before removing and drying."},

      {name:"Scottish Tablet",servings:"20 pieces",ingredients:["4 cups sugar","1 cup condensed milk","½ cup butter","1 tsp vanilla"],prep:"Combine sugar, condensed milk, and butter in saucepan and bring to a boil. Cook until soft-ball stage while stirring. Remove from heat and beat mixture until thick and slightly grainy. Stir in vanilla and pour into lined pan. Allow to set and cut into squares."}

    ]
  }

];

// ================================================================
//  TOGGLE CATEGORY — shows/hides recipe list under a card
// ================================================================
function toggleCategory(catId) {
  var ul = document.getElementById(catId);
  if (!ul) return;

  if (ul.style.display === 'block') {
    ul.style.display = 'none';
    return;
  }

  var cat = candy_data.find(function(c) { return c.id === catId; });
  if (!cat) return;

  if (ul.innerHTML === '') {
    cat.recipes.forEach(function(recipe, idx) {
      var li = document.createElement('li');
      li.className = 'browser-item';
      li.innerHTML =
        '<span class="browser-item-name">' + recipe.name + '</span>' +
        '<span class="browser-item-arrow">›</span>';
      li.addEventListener('click', function() {
        open_recipe_modal(recipe, catId);
      });
      ul.appendChild(li);
    });
  }

  ul.style.display = 'block';
}

