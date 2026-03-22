const chicken_data = [

  {
    id: 'roastedChicken',
    icon:"🍗", name:"Roasted Chicken",
    desc:"Whole roasted chicken, spatchcock, rotisserie-style, herb roasted, and classic Sunday roast recipes.",
    recipes:[
      {name:"Classic Whole Roast Chicken",servings:"4 servings",ingredients:["1 whole chicken, 4 lbs (1.8 kg)","4 tbsp unsalted butter, softened","4 garlic cloves, minced","2 tbsp fresh rosemary, chopped","2 tbsp fresh thyme, chopped","1 lemon, halved","Kosher salt and black pepper","2 tbsp olive oil"],prep:"Preheat oven to 425°F (220°C). Pat chicken completely dry inside and out. Mix softened butter with minced garlic, rosemary, and thyme. Gently loosen skin over the breast and thighs and spread herb butter directly on the meat. Rub outside with olive oil. Season generously with salt and pepper. Stuff cavity with lemon halves. Truss legs with twine. Roast breast side up 60–75 minutes until thigh reaches 165°F (74°C). Rest 15 minutes before carving."},
      {name:"Spatchcock Chicken",servings:"4 servings",ingredients:["1 whole chicken, 4 lbs (1.8 kg)","3 tbsp olive oil","4 garlic cloves, minced","1 tbsp fresh rosemary","1 tbsp fresh thyme","1 tsp smoked paprika","Kosher salt and black pepper","1 lemon, zested and juiced"],prep:"Preheat oven to 450°F (230°C). Place chicken breast side down. Using kitchen shears cut along both sides of the backbone and remove it. Flip and press firmly on the breastbone to flatten. Mix olive oil, garlic, herbs, paprika, lemon zest, salt, and pepper. Rub all over chicken including under the skin. Roast 40–45 minutes until skin is deeply golden and thigh reaches 165°F (74°C). Squeeze lemon juice over before serving."},
      {name:"Rotisserie Style Chicken",servings:"4 servings",ingredients:["1 whole chicken, 4 lbs (1.8 kg)","Spice Rub: 2 tsp salt, 1 tsp black pepper, 1 tsp garlic powder, 1 tsp onion powder, 1 tsp smoked paprika, 1 tsp dried thyme, ½ tsp cayenne","2 tbsp olive oil"],prep:"Mix all spice rub ingredients. Pat chicken dry. Rub all over with olive oil then coat completely with spice rub including inside the cavity. Truss tightly with twine. Refrigerate uncovered 4 hours or overnight. Bring to room temperature 30 minutes. Roast at 425°F (220°C) on a roasting rack 60–70 minutes until thigh reaches 165°F (74°C). Rest 15 minutes."},
      {name:"Honey Glazed Roast Chicken",servings:"4 servings",ingredients:["1 whole chicken, 4 lbs","Glaze: 3 tbsp honey, 2 tbsp soy sauce, 2 tbsp butter, 3 garlic cloves minced, 1 tbsp Dijon mustard","Salt, pepper, and olive oil"],prep:"Preheat oven to 425°F (220°C). Pat chicken dry. Season all over with salt and pepper. Rub with olive oil. Roast 40 minutes. Mix glaze ingredients in a small saucepan and warm until combined. Brush glaze over chicken every 10 minutes for the final 20–30 minutes. Chicken is done when thigh reaches 165°F (74°C) and skin is deeply lacquered and golden. Rest 15 minutes."},
      {name:"Greek Roast Chicken",servings:"4 servings",ingredients:["1 whole chicken, 4 lbs","Marinade: ¼ cup olive oil, juice of 2 lemons, 4 garlic cloves minced, 1 tbsp dried oregano, 1 tsp dried thyme, salt and pepper","1 lb baby potatoes","1 cup cherry tomatoes","1 cup Kalamata olives"],prep:"Marinate chicken in olive oil, lemon, garlic, and herbs at least 2 hours. Preheat oven to 400°F (200°C). Toss potatoes, tomatoes, and olives with olive oil, salt, and pepper. Spread in a roasting pan. Place chicken on top. Pour marinade over everything. Roast 70–80 minutes until thigh reaches 165°F (74°C) and potatoes are golden. Rest 15 minutes."}
    ]
  },

  {
    id: 'friedChicken',
    icon:"🍳", name:"Fried Chicken",
    desc:"Southern fried chicken, buttermilk fried, Nashville hot, crispy tenders, and classic pan-fried chicken.",
    recipes:[
      {name:"Southern Fried Chicken",servings:"4 servings",ingredients:["1 whole chicken, cut into 8 pieces","2 cups buttermilk","2 cups all-purpose flour","1 tsp garlic powder","1 tsp onion powder","1 tsp smoked paprika","1 tsp salt","½ tsp black pepper","½ tsp cayenne","Vegetable oil for frying"],prep:"Soak chicken pieces in buttermilk overnight in the refrigerator. Mix flour with all spices. Remove chicken from buttermilk letting excess drip off. Dredge in seasoned flour pressing firmly to coat. Let sit on a rack 10 minutes. Heat oil to 325°F (163°C) in a cast iron skillet. Fry in batches skin side down 12–14 minutes per side until deeply golden and internal temperature reaches 165°F (74°C). Do not crowd the pan. Drain on a wire rack."},
      {name:"Buttermilk Fried Chicken Tenders",servings:"4 servings",ingredients:["1.5 lbs chicken tenders","1.5 cups buttermilk","1 tbsp hot sauce","1.5 cups all-purpose flour","½ cup cornstarch","1 tsp each: garlic powder, onion powder, paprika, salt","½ tsp black pepper","Oil for frying"],prep:"Mix buttermilk and hot sauce. Marinate chicken tenders at least 2 hours. Mix flour, cornstarch, and all seasonings. Remove tenders from buttermilk, dredge in flour mixture pressing firmly. Rest on rack 5 minutes. Heat oil to 350°F (175°C). Fry tenders in batches 5–6 minutes until golden brown and cooked through. Drain on a wire rack. Serve with dipping sauce."},
      {name:"Nashville Hot Chicken",servings:"4 servings",ingredients:["1 whole chicken, cut up","2 cups buttermilk","2 cups flour, seasoned with salt and pepper","Hot Paste: 4 tbsp lard or butter, 3 tbsp cayenne, 1 tbsp brown sugar, 1 tsp garlic powder, 1 tsp smoked paprika","Oil for frying","White bread and pickles to serve"],prep:"Soak chicken in buttermilk overnight. Dredge in seasoned flour. Fry in oil at 325°F (163°C) 12–14 minutes per side until cooked through. While chicken fries make hot paste by combining all ingredients. Brush hot paste generously over fried chicken immediately. Serve on white bread with pickle slices."},
      {name:"Crispy Fried Chicken Sandwich",servings:"4 servings",ingredients:["4 boneless skinless chicken breasts, pounded to even thickness","1.5 cups buttermilk","1.5 cups flour","½ cup cornstarch","Seasoning: salt, pepper, garlic powder, paprika, cayenne","Brioche buns, lettuce, pickles, and sauce","Oil for frying"],prep:"Pound chicken to even ¾-inch thickness. Soak in buttermilk 2 hours. Mix flour, cornstarch, and seasonings. Dredge chicken pressing flour firmly. Fry at 350°F (175°C) for 6–8 minutes per side until golden and internal temperature reaches 165°F (74°C). Rest on a rack. Assemble on toasted brioche buns with lettuce, pickles, and your favorite sauce."},
      {name:"Korean Fried Chicken",servings:"4 servings",ingredients:["2 lbs chicken wings or pieces","Batter: ½ cup flour, ½ cup cornstarch, 1 tsp salt, 1 tsp garlic powder, ¾ cup cold water","Glaze: 3 tbsp gochujang, 2 tbsp soy sauce, 2 tbsp honey, 1 tbsp sesame oil, 3 garlic cloves minced, 1 tbsp rice vinegar","Oil for frying","Sesame seeds and green onions"],prep:"Mix batter ingredients until smooth. Coat chicken pieces in batter. Fry at 350°F (175°C) for 8–10 minutes. Remove and let rest 5 minutes. Fry a second time at 375°F (190°C) for 3–4 minutes until extra crispy. Simmer glaze ingredients 2 minutes until thick. Toss fried chicken in glaze. Garnish with sesame seeds and green onions."}
    ]
  },

  {
    id: 'grilledChicken',
    icon:"🔥", name:"Grilled Chicken",
    desc:"Marinated grilled chicken, BBQ chicken, lemon herb grilled, spicy grilled thighs, and grilled chicken skewers.",
    recipes:[
      {name:"Classic BBQ Grilled Chicken",servings:"4 servings",ingredients:["1 whole chicken, cut into 8 pieces","BBQ Sauce: 1 cup ketchup, 3 tbsp brown sugar, 2 tbsp apple cider vinegar, 1 tbsp Worcestershire sauce, 1 tsp smoked paprika, 1 tsp garlic powder, salt and pepper","2 tbsp vegetable oil","Salt and pepper"],prep:"Season chicken with salt and pepper and brush with oil. Grill over medium heat skin side down 8–10 minutes. Flip and grill 8 more minutes. Start brushing with BBQ sauce in the last 10 minutes of cooking flipping and basting every few minutes. Chicken is done when thigh reaches 165°F (74°C) and sauce is caramelized. Rest 5 minutes before serving."},
      {name:"Lemon Herb Grilled Chicken",servings:"4 servings",ingredients:["4 boneless skinless chicken breasts","Marinade: juice of 2 lemons, 4 tbsp olive oil, 4 garlic cloves minced, 2 tbsp fresh oregano, 1 tbsp fresh thyme, salt and pepper"],prep:"Pound chicken breasts to even thickness. Mix marinade and marinate chicken at least 1 hour or up to 8 hours. Grill over medium-high heat 6–7 minutes per side until internal temperature reaches 165°F (74°C) and grill marks are formed. Rest 5 minutes before slicing. Squeeze fresh lemon juice over before serving."},
      {name:"Spicy Grilled Chicken Thighs",servings:"4 servings",ingredients:["8 bone-in skin-on chicken thighs","Marinade: 3 tbsp olive oil, 3 tbsp hot sauce, 2 tbsp soy sauce, 1 tbsp honey, 4 garlic cloves minced, 1 tsp cumin, 1 tsp smoked paprika, salt and pepper"],prep:"Mix marinade and coat chicken thighs. Marinate at least 2 hours. Grill over medium heat skin side down 10–12 minutes until skin is crispy. Flip and cook 10–12 more minutes until thigh reaches 165°F (74°C). Brush with remaining marinade in the last 5 minutes. Rest 5 minutes before serving."},
      {name:"Chicken Souvlaki",servings:"4 servings",ingredients:["1.5 lbs boneless chicken breast or thigh, cut into 1.5-inch cubes","Marinade: ¼ cup olive oil, juice of 1 lemon, 4 garlic cloves minced, 1 tbsp dried oregano, salt and pepper","Pita bread, tzatziki, tomato, onion, and lettuce to serve","Wooden skewers, soaked"],prep:"Marinate chicken cubes at least 2 hours. Thread onto soaked skewers. Grill over high heat turning every 2 minutes for 8–10 minutes total until slightly charred and cooked through. Serve in warm pita bread with tzatziki, diced tomato, onion, and lettuce."},
      {name:"Teriyaki Grilled Chicken",servings:"4 servings",ingredients:["4 boneless skinless chicken thighs","Teriyaki Sauce: 4 tbsp soy sauce, 2 tbsp mirin, 2 tbsp sake, 2 tbsp sugar, 1 tsp cornstarch dissolved in 1 tbsp water","Sesame seeds and green onions","Steamed rice to serve"],prep:"Simmer teriyaki sauce until slightly thickened with cornstarch. Reserve half for serving. Marinate chicken in remaining sauce 30 minutes. Grill over medium-high heat 5–6 minutes per side. Brush with teriyaki sauce in the last 2 minutes. Chicken is done at 165°F (74°C). Serve over steamed rice with reserved sauce. Garnish with sesame seeds and green onions."}
    ]
  },

  {
    id: 'chickenSoups',
    icon:"🫕", name:"Chicken Soups",
    desc:"Classic chicken noodle, chicken tortilla, creamy chicken soup, chicken and rice, and hearty chicken broth soups.",
    recipes:[
      {name:"Classic Chicken Noodle Soup",servings:"6 servings",ingredients:["1 whole chicken or 3 lbs bone-in chicken pieces","3 carrots, diced","3 celery stalks, diced","1 large onion, diced","4 garlic cloves, minced","3 cups egg noodles","8 cups (1.9 L) chicken broth","Fresh thyme and parsley","2 bay leaves","Salt and pepper","2 tbsp olive oil"],prep:"Brown chicken pieces in olive oil in a large pot. Remove. Cook onion, carrots, celery, and garlic until soft. Return chicken. Add broth, thyme, bay leaves, salt, and pepper. Bring to a boil. Reduce heat and simmer covered 45 minutes until chicken is tender. Remove chicken, shred meat, and discard bones and skin. Return shredded chicken to pot. Add egg noodles and cook 8–10 minutes until tender. Remove bay leaves. Adjust seasoning and garnish with fresh parsley."},
      {name:"Chicken Tortilla Soup",servings:"6 servings",ingredients:["1.5 lbs boneless chicken breast","1 can (14 oz) black beans, drained","1 can (14 oz) corn, drained","2 cans (14 oz each) diced tomatoes","1 can (4 oz) green chiles","1 onion, diced","4 garlic cloves, minced","6 cups chicken broth","2 tsp cumin","1 tsp chili powder","Salt and pepper","Toppings: tortilla strips, sour cream, avocado, cheese, cilantro, lime"],prep:"Cook onion and garlic in oil until soft. Add cumin and chili powder and cook 1 minute. Add broth, tomatoes, green chiles, beans, corn, and raw chicken breasts. Bring to boil. Reduce heat and simmer 20 minutes until chicken is cooked through. Remove chicken and shred. Return to soup. Adjust seasoning. Serve topped with crispy tortilla strips, sour cream, avocado, cheese, and cilantro with lime on the side."},
      {name:"Creamy Chicken and Wild Rice Soup",servings:"6 servings",ingredients:["1.5 lbs boneless chicken breast","1 cup wild rice blend","3 carrots, diced","3 celery stalks, diced","1 onion, diced","4 garlic cloves, minced","4 cups chicken broth","2 cups whole milk","3 tbsp butter","3 tbsp all-purpose flour","1 tsp dried thyme","Salt and pepper"],prep:"Cook onion, carrots, celery, and garlic in butter until soft. Add flour and cook 2 minutes. Gradually add broth stirring constantly. Add chicken, wild rice, and thyme. Simmer 30–35 minutes until rice is tender and chicken is cooked through. Remove chicken and shred. Return to soup. Add milk and simmer 10 more minutes until creamy. Season generously with salt and pepper."},
      {name:"Chicken Pho",servings:"4 servings",ingredients:["1 whole chicken","Broth aromatics: 1 onion charred, 3-inch ginger charred, 3 star anise, 5 cloves, 1 cinnamon stick","2 tbsp fish sauce","1 tsp sugar","Salt","Rice noodles","Toppings: bean sprouts, basil, lime, jalapeño, hoisin, sriracha"],prep:"Char onion and ginger directly over flame. Place whole chicken in a large pot with water to cover. Add charred onion, ginger, star anise, cloves, and cinnamon. Bring to boil. Simmer 45 minutes until chicken is cooked through. Remove chicken and shred breast meat. Continue simmering broth 30 more minutes. Strain. Season with fish sauce, sugar, and salt. Cook rice noodles. Divide into bowls and ladle hot broth over. Top with shredded chicken and toppings."},
      {name:"White Chicken Chili",servings:"6 servings",ingredients:["1.5 lbs boneless chicken breast","2 cans (14 oz each) white cannellini beans, drained","2 cans (4 oz each) diced green chiles","1 onion, diced","4 garlic cloves, minced","4 cups chicken broth","1 tsp cumin","1 tsp dried oregano","½ tsp cayenne","1 cup sour cream","Salt and pepper","Cilantro, lime, and jalapeño to serve"],prep:"Cook onion and garlic in oil until soft. Add cumin, oregano, and cayenne and cook 1 minute. Add broth, green chiles, beans, and raw chicken. Bring to boil. Reduce heat and simmer 20 minutes until chicken is cooked through. Remove chicken and shred. Return to pot. Stir in sour cream over low heat — do not boil. Adjust seasoning. Serve topped with cilantro, lime wedges, and jalapeño slices."}
    ]
  },

  {
    id: 'chickenStews',
    icon:"🥘", name:"Chicken Stews & Braises",
    desc:"Coq au vin, chicken cacciatore, braised chicken thighs, Moroccan chicken tagine, and slow-cooked chicken dishes.",
    recipes:[
      {name:"Coq au Vin",servings:"4 servings",ingredients:["1 whole chicken, cut into 8 pieces","6 oz (170 g) bacon, diced","1 bottle (750 ml) Burgundy or Pinot Noir","2 cups chicken broth","1 onion, diced","4 garlic cloves, minced","2 carrots, diced","500 g (1 lb) cremini mushrooms, quartered","500 g (1 lb) pearl onions","2 tbsp tomato paste","Fresh thyme and bay leaves","3 tbsp flour","3 tbsp olive oil","Salt and pepper"],prep:"Brown bacon in a Dutch oven. Remove. Season chicken and brown in bacon fat in batches. Remove. Cook diced onion, garlic, and carrots until soft. Add tomato paste 2 minutes. Return chicken and bacon. Sprinkle with flour. Add wine, broth, thyme, and bay leaves. Braise covered at 325°F (165°C) for 1.5 hours. Meanwhile brown pearl onions and mushrooms in butter. Add to pot in last 20 minutes. Sauce should be rich and glossy."},
      {name:"Chicken Cacciatore",servings:"4 servings",ingredients:["1 whole chicken, cut into 8 pieces","1 onion, diced","4 garlic cloves, minced","2 bell peppers, sliced","1 cup (240 ml) dry white wine","1 can (28 oz) crushed tomatoes","1 cup chicken broth","1 tsp dried oregano","1 tsp dried thyme","Fresh basil","3 tbsp olive oil","Salt and pepper"],prep:"Season chicken and brown in hot olive oil in a Dutch oven in batches. Remove. Cook onion, peppers, and garlic until soft. Add wine and reduce by half. Add tomatoes, broth, oregano, and thyme. Return chicken. Bring to a boil. Cover and simmer on low heat 45 minutes until chicken is very tender. Adjust seasoning. Garnish with fresh basil. Serve over pasta or with crusty bread."},
      {name:"Moroccan Chicken Tagine",servings:"4 servings",ingredients:["8 bone-in chicken thighs","Spice Blend: 1 tsp cumin, 1 tsp coriander, 1 tsp smoked paprika, ½ tsp cinnamon, ½ tsp turmeric, ½ tsp ginger","1 onion, sliced","4 garlic cloves, minced","1 preserved lemon, quartered","1 cup green olives","1.5 cups chicken broth","2 tbsp olive oil","Fresh cilantro and parsley","Couscous to serve"],prep:"Mix spice blend and coat chicken thighs. Brown in hot oil in a tagine or Dutch oven. Remove. Cook onion and garlic until soft. Return chicken. Add broth, preserved lemon, and olives. Cover and braise over low heat 45 minutes until very tender. Garnish with fresh cilantro and parsley. Serve over fluffy couscous."},
      {name:"Braised Chicken Thighs with White Wine",servings:"4 servings",ingredients:["8 bone-in skin-on chicken thighs","1 cup (240 ml) dry white wine","1 cup chicken broth","4 garlic cloves, sliced","2 shallots, sliced","Fresh thyme and rosemary","2 tbsp butter","2 tbsp olive oil","Salt and pepper"],prep:"Season chicken thighs generously. Heat oil in a Dutch oven over high heat. Sear skin side down 6–8 minutes until deeply golden. Flip and cook 2 minutes. Remove. Cook shallots and garlic until soft. Add wine and reduce by half. Return chicken skin side up. Add broth and herbs. Bring to boil. Cover and braise at 325°F (165°C) for 40 minutes until tender. Remove lid and cook 10 more minutes to concentrate the sauce. Swirl in cold butter for gloss."},
      {name:"Slow Cooker Chicken Stew",servings:"6 servings",ingredients:["2 lbs boneless chicken thighs","3 carrots, cut into chunks","3 potatoes, cubed","2 celery stalks, diced","1 onion, diced","3 garlic cloves, minced","1.5 cups chicken broth","1 cup dry white wine","2 tbsp tomato paste","1 tbsp Worcestershire sauce","1 tsp dried thyme","2 tbsp cornstarch mixed with 2 tbsp water","Salt and pepper"],prep:"Place vegetables in slow cooker. Add chicken thighs on top. Mix broth, wine, tomato paste, Worcestershire sauce, thyme, salt, and pepper. Pour over everything. Cook on LOW 7–8 hours or HIGH 4 hours until chicken is very tender. Shred chicken with forks. Stir in cornstarch slurry. Cook on HIGH 20 more minutes until thickened. Adjust seasoning."}
    ]
  },

  {
    id: 'asianChicken',
    icon:"🍜", name:"Asian Chicken Dishes",
    desc:"General Tso's, kung pao chicken, chicken teriyaki, pad thai with chicken, chicken fried rice, and Asian classics.",
    recipes:[
      {name:"General Tso's Chicken",servings:"4 servings",ingredients:["1.5 lbs boneless skinless chicken thighs, cut into 1-inch pieces","Batter: ½ cup cornstarch, ¼ cup flour, 1 egg, salt and pepper","Sauce: 3 tbsp soy sauce, 2 tbsp hoisin sauce, 2 tbsp rice vinegar, 2 tbsp sugar, 1 tbsp sesame oil, 1 tsp cornstarch, ½ cup chicken broth","4 dried red chilies","3 garlic cloves, minced","1 tbsp fresh ginger","Oil for frying"],prep:"Mix batter and coat chicken pieces. Fry at 350°F (175°C) for 5–6 minutes until crispy. Drain. Make sauce by mixing all sauce ingredients. In a wok cook garlic, ginger, and dried chilies in 1 tbsp oil 30 seconds. Add sauce and bring to a simmer until thickened. Add fried chicken and toss to coat. Serve over steamed rice."},
      {name:"Kung Pao Chicken",servings:"4 servings",ingredients:["1.5 lbs boneless chicken breast, cut into 1-inch cubes","Marinade: 1 tbsp soy sauce, 1 tbsp cornstarch","Sauce: 2 tbsp soy sauce, 1 tbsp dark soy sauce, 1 tbsp rice vinegar, 1 tbsp hoisin, 1 tsp sesame oil, 1 tsp sugar, 1 tsp cornstarch","8 dried red chilies","½ cup roasted peanuts","3 garlic cloves, minced","1 tsp Sichuan peppercorns","3 green onions"],prep:"Marinate chicken 15 minutes. Mix sauce. Heat oil in a wok over very high heat. Stir fry chicken until golden. Remove. Add dried chilies and Sichuan peppercorns and fry 30 seconds. Add garlic and green onion whites. Return chicken. Add sauce and toss over high heat until coated. Add peanuts. Serve over rice."},
      {name:"Chicken Pad Thai",servings:"4 servings",ingredients:["1 lb boneless chicken breast, thinly sliced","200 g (7 oz) flat rice noodles","3 eggs","1 cup bean sprouts","3 green onions","Pad Thai Sauce: 3 tbsp fish sauce, 3 tbsp tamarind paste, 2 tbsp sugar, 1 tbsp soy sauce","¼ cup roasted peanuts","Lime wedges, cilantro, chili flakes","2 tbsp vegetable oil"],prep:"Soak noodles in warm water 20 minutes until pliable. Mix sauce ingredients. Heat oil in a wok over very high heat. Cook chicken until golden. Push to side. Add eggs and scramble. Add noodles and sauce. Toss everything together over high heat 2–3 minutes. Add bean sprouts and green onions and toss briefly. Serve topped with crushed peanuts, lime wedges, cilantro, and chili flakes."},
      {name:"Chicken Teriyaki",servings:"4 servings",ingredients:["4 boneless skinless chicken thighs","Teriyaki Sauce: 4 tbsp soy sauce, 2 tbsp mirin, 2 tbsp sake, 2 tbsp sugar, 1 tsp cornstarch dissolved in 1 tbsp water","2 tbsp vegetable oil","Sesame seeds and green onions","Steamed rice to serve"],prep:"Simmer teriyaki sauce in a small pan until slightly thickened. Reserve half. Marinate chicken in remaining sauce 30 minutes. Heat oil in a skillet over medium-high heat. Cook chicken smooth side down 5–6 minutes until golden. Flip and cook 5 more minutes until cooked through at 165°F (74°C). Brush with reserved teriyaki sauce. Serve sliced over steamed rice. Garnish with sesame seeds and green onions."},
      {name:"Chicken Fried Rice",servings:"4 servings",ingredients:["3 cups cooked day-old rice","1 lb boneless chicken breast, diced","3 large eggs","1 cup frozen peas and carrots","3 garlic cloves, minced","3 green onions, sliced","3 tbsp soy sauce","1 tbsp oyster sauce","1 tsp sesame oil","2 tbsp vegetable oil"],prep:"Heat oil in a wok over very high heat. Cook chicken until golden and cooked through. Remove. Add eggs and scramble. Add garlic and cook 30 seconds. Add cold rice and break up clumps. Stir fry 3 minutes. Return chicken. Add peas and carrots, soy sauce, oyster sauce, and sesame oil. Toss everything together over high heat. Garnish with green onions."}
    ]
  },

  {
    id: 'chickenTacos',
    icon:"🌮", name:"Chicken Tacos & Wraps",
    desc:"Chicken street tacos, chicken burritos, chicken wraps, chicken quesadillas, and chicken shawarma.",
    recipes:[
      {name:"Chicken Street Tacos",servings:"4 servings",ingredients:["1.5 lbs boneless chicken thighs","Marinade: juice of 3 limes, 3 tbsp olive oil, 4 garlic cloves minced, 1 tsp cumin, 1 tsp chili powder, 1 tsp dried oregano, salt and pepper","Corn tortillas","Toppings: diced white onion, fresh cilantro, lime wedges, salsa verde"],prep:"Marinate chicken thighs at least 2 hours. Grill or pan sear over high heat 5–6 minutes per side until cooked through and slightly charred. Rest 5 minutes. Chop into small pieces. Warm corn tortillas directly over flame. Fill with chopped chicken. Top with diced white onion, fresh cilantro, and a squeeze of lime. Serve with salsa verde."},
      {name:"Chicken Burrito",servings:"4 servings",ingredients:["1.5 lbs boneless chicken breast, seasoned with cumin, chili powder, garlic powder, salt","1 cup cooked white rice","1 can (14 oz) black beans, warmed","1 cup shredded Mexican cheese","4 large flour tortillas, warmed","Sour cream, guacamole, salsa, and shredded lettuce"],prep:"Season and cook chicken in a hot skillet until cooked through. Slice or shred. Warm tortillas. Layer rice, beans, chicken, cheese, sour cream, guacamole, salsa, and lettuce in the center of each tortilla. Fold sides in and roll tightly. For a crispy burrito toast in a dry pan 1–2 minutes per side until golden."},
      {name:"Chicken Caesar Wrap",servings:"4 servings",ingredients:["4 grilled or rotisserie chicken breasts, sliced","4 large flour tortillas","2 cups romaine lettuce, chopped","½ cup Parmesan, shaved","Caesar Dressing: ½ cup mayonnaise, 2 tbsp lemon juice, 2 garlic cloves, 1 tbsp Worcestershire sauce, 1 tsp Dijon mustard, salt and pepper","1 cup croutons"],prep:"Mix Caesar dressing. Toss romaine with dressing. Warm tortillas. Layer sliced chicken, dressed romaine, Parmesan, and croutons on each tortilla. Roll tightly, tucking in sides as you go. Slice in half diagonally. Serve immediately."},
      {name:"Chicken Shawarma",servings:"4 servings",ingredients:["1.5 lbs boneless chicken thighs","Marinade: 4 garlic cloves, juice of 1 lemon, 3 tbsp olive oil, 1 tsp cumin, 1 tsp coriander, 1 tsp turmeric, ½ tsp cinnamon, ½ tsp paprika, salt and pepper","4 pita breads","Garlic sauce or hummus","Tomatoes, cucumbers, parsley, pickles"],prep:"Marinate chicken at least 2 hours. Cook in a very hot skillet or grill pan in batches until browned and slightly charred. Rest 5 minutes and slice thin. Warm pita bread. Spread with garlic sauce or hummus. Layer with chicken, tomatoes, cucumbers, pickles, and parsley. Wrap tightly."},
      {name:"Chicken Quesadillas",servings:"4 servings",ingredients:["1.5 lbs boneless chicken breast, seasoned with cumin, chili powder, salt","8 large flour tortillas","2 cups shredded Mexican cheese blend","1 cup bell peppers and onions, sautéed","Sour cream, guacamole, and salsa to serve"],prep:"Cook seasoned chicken in a hot skillet until cooked through. Slice into strips. In a dry skillet over medium heat lay a tortilla. Sprinkle half with cheese. Add chicken strips and sautéed peppers and onions. Fold tortilla over. Cook 2–3 minutes per side until golden and crispy. Slice into wedges. Serve with sour cream, guacamole, and salsa."}
    ]
  },

  {
    id: 'chickenPasta',
    icon:"🍝", name:"Chicken Pasta",
    desc:"Chicken Alfredo, chicken pesto pasta, chicken and mushroom pasta, creamy chicken pasta, and baked chicken pasta.",
    recipes:[
      {name:"Chicken Alfredo",servings:"4 servings",ingredients:["1 lb fettuccine","2 boneless skinless chicken breasts","Alfredo Sauce: 2 cups heavy cream, 1 cup Parmesan grated, 4 tbsp butter, 4 garlic cloves minced, salt and pepper","2 tbsp olive oil","Fresh parsley"],prep:"Cook fettuccine in salted boiling water until al dente. Season chicken with salt and pepper. Cook in olive oil over medium-high heat 6–7 minutes per side until golden and cooked through. Rest and slice. Make sauce: melt butter and cook garlic 1 minute. Add cream and simmer until slightly reduced. Add Parmesan and stir until smooth. Season. Toss with pasta and sliced chicken. Garnish with parsley."},
      {name:"Chicken Pesto Pasta",servings:"4 servings",ingredients:["1 lb penne or fusilli","2 boneless chicken breasts, sliced","Pesto: 2 cups fresh basil, ½ cup pine nuts, ½ cup Parmesan, 2 garlic cloves, ½ cup olive oil, salt","1 cup cherry tomatoes, halved","2 tbsp olive oil"],prep:"Cook pasta in salted boiling water until al dente. Reserve 1 cup pasta water. Season and cook chicken in olive oil until golden and cooked through. Make pesto by blending all ingredients until smooth. Toss hot pasta with pesto, adding pasta water as needed to loosen. Add chicken and cherry tomatoes. Toss well. Serve with extra Parmesan."},
      {name:"Creamy Chicken Mushroom Pasta",servings:"4 servings",ingredients:["1 lb rigatoni","2 boneless chicken breasts, diced","500 g (1 lb) mixed mushrooms, sliced","4 garlic cloves, minced","1 cup heavy cream","½ cup dry white wine","1 cup Parmesan, grated","2 tbsp butter","Fresh thyme","Salt and pepper"],prep:"Cook pasta until al dente. Season and cook chicken in butter until golden. Remove. Cook mushrooms in same pan until golden — about 8 minutes. Add garlic and thyme 1 minute. Add wine and reduce by half. Add cream and simmer 3 minutes. Return chicken. Toss with drained pasta and Parmesan adding pasta water as needed. Season generously."},
      {name:"Chicken Piccata Pasta",servings:"4 servings",ingredients:["1 lb spaghetti or linguine","2 boneless chicken breasts, sliced thin","Sauce: 3 tbsp butter, 4 garlic cloves minced, ½ cup white wine, ½ cup chicken broth, juice of 2 lemons, 3 tbsp capers","¼ cup all-purpose flour","2 tbsp olive oil","Fresh parsley"],prep:"Dredge chicken slices in flour. Cook in olive oil until golden 2–3 minutes per side. Remove. Cook garlic 1 minute. Add wine and reduce by half. Add broth, lemon juice, and capers. Simmer 3 minutes. Swirl in cold butter. Cook pasta until al dente. Toss pasta with sauce. Top with chicken and garnish with fresh parsley."},
      {name:"Baked Chicken Pasta",servings:"6 servings",ingredients:["1 lb penne pasta","2 cups shredded cooked chicken","2 cups marinara sauce","1.5 cups ricotta cheese","2 cups shredded mozzarella","½ cup Parmesan, grated","1 tsp Italian seasoning","Salt and pepper","Fresh basil"],prep:"Preheat oven to 375°F (190°C). Cook pasta until just under al dente — it will continue cooking in the oven. Mix pasta with chicken, marinara, ricotta, Italian seasoning, salt, and pepper. Transfer to a baking dish. Top with mozzarella and Parmesan. Cover with foil and bake 25 minutes. Uncover and bake 10 more minutes until cheese is golden and bubbly. Garnish with fresh basil."}
    ]
  },

  {
    id: 'chickenSalads',
    icon:"🥗", name:"Chicken Salads",
    desc:"Classic chicken salad, grilled chicken Caesar, Asian chicken salad, chicken Cobb salad, and hearty chicken grain bowls.",
    recipes:[
      {name:"Classic Chicken Salad",servings:"4 servings",ingredients:["3 cups cooked chicken, shredded or diced","½ cup mayonnaise","2 celery stalks, finely diced","¼ cup red onion, finely diced","1 tbsp Dijon mustard","1 tbsp lemon juice","Salt and pepper","Fresh parsley","Croissants or bread to serve"],prep:"Mix mayonnaise, Dijon, lemon juice, salt, and pepper until smooth. Fold in chicken, celery, and red onion. Taste and adjust seasoning. Chill at least 30 minutes before serving. Garnish with fresh parsley. Serve on croissants, bread, or over lettuce."},
      {name:"Grilled Chicken Caesar Salad",servings:"4 servings",ingredients:["2 grilled chicken breasts, sliced","2 large heads romaine lettuce, chopped","1 cup croutons","½ cup Parmesan, shaved","Caesar Dressing: ½ cup mayonnaise, 2 tbsp lemon juice, 2 garlic cloves minced, 1 tbsp Worcestershire sauce, 1 tsp Dijon, 2 tbsp Parmesan, salt and pepper"],prep:"Make Caesar dressing by whisking all ingredients together. Toss chopped romaine with dressing until well coated. Add croutons and shaved Parmesan. Top with sliced grilled chicken. Serve immediately."},
      {name:"Asian Sesame Chicken Salad",servings:"4 servings",ingredients:["2 grilled or rotisserie chicken breasts, shredded","4 cups napa cabbage, shredded","1 cup shredded carrots","½ cup edamame","3 green onions, sliced","¼ cup sliced almonds","Asian Dressing: 3 tbsp soy sauce, 2 tbsp rice vinegar, 1 tbsp sesame oil, 1 tbsp honey, 1 tsp ginger, 1 garlic clove","Sesame seeds"],prep:"Mix dressing ingredients. Toss cabbage, carrots, edamame, and green onions in a large bowl. Add shredded chicken. Pour dressing over and toss well. Top with sliced almonds and sesame seeds. Serve immediately."},
      {name:"Chicken Cobb Salad",servings:"4 servings",ingredients:["2 grilled chicken breasts, sliced","6 cups romaine lettuce, chopped","4 slices bacon, cooked and crumbled","2 hard boiled eggs, quartered","1 cup cherry tomatoes, halved","1 avocado, diced","½ cup blue cheese, crumbled","Red Wine Vinaigrette: 3 tbsp olive oil, 2 tbsp red wine vinegar, 1 tsp Dijon, salt and pepper"],prep:"Arrange lettuce in a large bowl. Place toppings in rows across the lettuce: chicken, bacon, eggs, tomatoes, avocado, and blue cheese. Make vinaigrette by whisking all ingredients. Drizzle over salad just before serving."},
      {name:"Chicken and Quinoa Bowl",servings:"4 servings",ingredients:["2 grilled chicken breasts, sliced","2 cups cooked quinoa","1 cup roasted sweet potato, cubed","1 cup chickpeas, roasted","2 cups baby spinach","½ avocado, sliced","Tahini Dressing: 3 tbsp tahini, 2 tbsp lemon juice, 1 garlic clove minced, 2 tbsp water, salt"],prep:"Roast sweet potato cubes and chickpeas at 400°F (200°C) with olive oil, salt, and cumin for 25 minutes. Make tahini dressing by whisking all ingredients adding water to thin to desired consistency. Divide quinoa among bowls. Top with spinach, sweet potato, chickpeas, sliced chicken, and avocado. Drizzle with tahini dressing."}
    ]
  },

  {
    id: 'chickenCasseroles',
    icon:"🧆", name:"Chicken Casseroles",
    desc:"Classic chicken pot pie, chicken and rice casserole, King Ranch chicken, chicken tetrazzini, and baked chicken casseroles.",
    recipes:[
      {name:"Chicken Pot Pie",servings:"6 servings",ingredients:["3 cups cooked chicken, shredded","Filling: 3 tbsp butter, 1 onion diced, 3 carrots diced, 3 celery stalks diced, 3 garlic cloves, ⅓ cup flour, 2 cups chicken broth, 1 cup whole milk, 1 cup frozen peas, 1 tsp thyme, salt and pepper","2 pie crusts (store-bought or homemade)","1 egg for wash"],prep:"Preheat oven to 400°F (200°C). Melt butter and cook onion, carrots, and celery until soft. Add garlic and flour and cook 2 minutes. Gradually add broth and milk stirring constantly until thickened. Add chicken, peas, and thyme. Season. Press one pie crust into a 9-inch pie dish. Add filling. Top with second crust. Crimp edges and cut vents. Brush with egg wash. Bake 35–40 minutes until golden. Rest 10 minutes before serving."},
      {name:"Chicken and Rice Casserole",servings:"6 servings",ingredients:["6 bone-in chicken thighs","1.5 cups long grain white rice","1 onion, diced","3 garlic cloves, minced","2.5 cups chicken broth","1 can (10 oz) cream of mushroom soup","1 tsp dried thyme","1 tsp garlic powder","Salt and pepper","Fresh parsley"],prep:"Preheat oven to 375°F (190°C). Mix rice, onion, garlic, broth, cream of mushroom soup, thyme, and garlic powder in a 9x13 baking dish. Season chicken thighs with salt, pepper, and garlic powder. Place skin side up on top of rice mixture. Cover tightly with foil. Bake 45 minutes. Remove foil and bake 20 more minutes until chicken skin is golden and rice has absorbed all liquid. Rest 5 minutes and garnish with parsley."},
      {name:"King Ranch Chicken Casserole",servings:"8 servings",ingredients:["3 cups cooked chicken, shredded","12 corn tortillas, cut into strips","1 can (10 oz) cream of chicken soup","1 can (10 oz) cream of mushroom soup","1 can (10 oz) Ro-Tel diced tomatoes with green chiles","1 onion, diced","1 cup chicken broth","2 cups shredded cheddar cheese","1 tsp cumin","1 tsp chili powder"],prep:"Preheat oven to 350°F (175°C). Mix soups, Ro-Tel, onion, broth, cumin, and chili powder. Layer tortilla strips in a greased 9x13 dish. Top with chicken. Pour sauce over. Add cheese. Repeat layers ending with cheese. Bake covered 30 minutes. Uncover and bake 15 more minutes until bubbly and golden."},
      {name:"Chicken Tetrazzini",servings:"8 servings",ingredients:["3 cups cooked chicken, shredded","12 oz spaghetti, cooked","Sauce: 4 tbsp butter, 1 onion diced, 3 garlic cloves, 8 oz mushrooms sliced, ¼ cup flour, 2 cups chicken broth, 1 cup heavy cream, ½ cup white wine, ½ cup Parmesan","1 cup shredded mozzarella","Salt and pepper and fresh thyme"],prep:"Preheat oven to 375°F (190°C). Melt butter and cook onion and mushrooms until soft. Add garlic. Add flour and cook 2 minutes. Add wine and reduce. Add broth and cream. Simmer until thickened. Season. Mix sauce with cooked pasta and chicken. Transfer to a greased 9x13 dish. Top with Parmesan and mozzarella. Bake 25–30 minutes until golden and bubbly."},
      {name:"Buffalo Chicken Casserole",servings:"6 servings",ingredients:["3 cups cooked chicken, shredded","3 cups cooked pasta (penne or rotini)","Buffalo Sauce: ½ cup buffalo sauce, 8 oz cream cheese softened, ½ cup ranch dressing, ½ cup sour cream","2 cups shredded mozzarella","½ cup blue cheese crumbles","Green onions to garnish"],prep:"Preheat oven to 350°F (175°C). Mix buffalo sauce, cream cheese, ranch dressing, and sour cream until smooth. Toss with shredded chicken and cooked pasta. Transfer to a greased baking dish. Top with mozzarella and blue cheese crumbles. Bake 25–30 minutes until hot and cheese is bubbly. Garnish with sliced green onions."}
    ]
  }

];

// ================================================================
//  TOGGLE CATEGORY
// ================================================================
function toggleCategory(catId) {
  var ul = document.getElementById(catId);
  if (!ul) return;
  if (ul.style.display === 'block') { ul.style.display = 'none'; return; }
  var cat = chicken_data.find(function(c) { return c.id === catId; });
  if (!cat) return;
  if (ul.innerHTML === '') {
    cat.recipes.forEach(function(recipe) {
      var li = document.createElement('li');
      li.className = 'browser-item';
      li.innerHTML = '<span class="browser-item-name">' + recipe.name + '</span><span class="browser-item-arrow">›</span>';
      li.addEventListener('click', function() { openRecipeModal(recipe, catId); });
      ul.appendChild(li);
    });
  }
  ul.style.display = 'block';
}

// ================================================================
//  RECIPE MODAL
// ================================================================
function openRecipeModal(recipe, catId) {
  var modal = document.getElementById('recipeModal');
  var title = document.getElementById('recipeModalTitle');
  var body  = document.getElementById('recipeModalBody');
  title.textContent = recipe.name;
  body.innerHTML = buildDetailHTML(recipe, catId);
  modal.style.display = 'flex';
}
function closeRecipeModal() {
  document.getElementById('recipeModal').style.display = 'none';
}

// ================================================================
//  BUILD DETAIL HTML
// ================================================================
function buildDetailHTML(recipe, catId) {
  var ingredientItems = recipe.ingredients.map(function(ing) { return '<li>' + ing + '</li>'; }).join('');
  return '' +
    '<div class="sub-heading">Servings</div>' +
    '<p class="toc-text">' + recipe.servings + '</p>' +
    '<div class="sub-heading">Ingredients</div>' +
    '<ul class="recipe-ingredients">' + ingredientItems + '</ul>' +
    '<div class="sub-heading">Preparation</div>' +
    '<p class="recipe-prep">' + recipe.prep + '</p>' +
    '<div class="recipe-actions">' +
      '<button class="btn-gold" onclick="saveToFavorites(\'' + recipe.name.replace(/'/g, "\\'") + '\', \'' + catId + '\')">♡ Save to Favorites</button>' +
    '</div>';
}

// ================================================================
//  SAVE TO FAVORITES
// ================================================================
function saveToFavorites(recipeName, catId) {
  var cat = chicken_data.find(function(c) { return c.id === catId; });
  if (!cat) return;
  var recipe = cat.recipes.find(function(r) { return r.name === recipeName; });
  if (!recipe) return;
  try {
    var favs = JSON.parse(localStorage.getItem('mealplanner_favorites') || '[]');
    var exists = favs.find(function(f) { return f.name === recipeName; });
    if (!exists) {
      favs.push({ name: recipe.name, catName: cat.name, ingredients: recipe.ingredients, prep: recipe.prep });
      localStorage.setItem('mealplanner_favorites', JSON.stringify(favs));
      alert('"' + recipeName + '" saved to favorites!');
    } else {
      alert('"' + recipeName + '" is already in your favorites.');
    }
  } catch(e) {
    alert('"' + recipeName + '" saved!');
  }
}
