// ===== Game kits: questions, builds, hints and twists from our family game nights =====
// Each kit: decks [{name, level, secs (default timer for cards), items}], twists [], tip, turns (story counter)
// An item is a string, or {q, a (answer), hints [], ask [[question, answer]], secs, note}
// Templates: {kid} = a random kid who's playing, {grown} = a grown-up playing (or "Dad"), {xmas} = days until Christmas
const KITS = {
  estimate: {
    tip: "Guess first, then prove it! Closest guess gets 3 points, second gets 1.",
    decks: [
      {name:"At the table", level:"easy", items:[
        "How many peas, carrots or noodles are on your plate? Count them!",
        "How many seconds can {grown} hold their breath?",
        "How long does it take {grown} to say the alphabet backwards? Time it.",
        "How many Cheerios or goldfish crackers fit in one cup?",
        "How many sips does it take to finish a glass of water?",
        "How many pieces of pasta fit on a full serving spoon?",
        "How many jumping jacks can you do in 30 seconds? Guess, then everyone tries.",
        "How long can each person stand on one foot?",
        "How many words starting with B can you name in 30 seconds?",
        "How many letters are in everyone's full names added together?",
        "How many ice cubes fit in one cup?",
        "How many times can you blink in 10 seconds?",
        "How many coins are in {grown}'s pocket, wallet or coin jar?"]},
      {name:"Around the house", level:"easy", items:[
        "How many forks are in the drawer?",
        "How many shoes are in the house, counting everyone's?",
        "How many light switches are in the whole house?",
        "How many steps is it from the front door to the mailbox?",
        "How many books are on the shelf?",
        "How many seconds does it take {kid} to run around the house?",
        "How many pillows are in the whole house?",
        "How many doors are in the house, counting closets?",
        "How many windows are in the house?",
        "How many cans are in the pantry?",
        "How many socks are in your drawer?",
        "How many things are on the fridge?"]},
      {name:"Our family", level:"medium", items:[
        "How tall is each person in inches? Get the tape measure.",
        {q:"How many times does your heart beat in one minute? Two fingers on your neck and count!", a:"Kids are usually around 70 to 110. Grown-ups about 60 to 100."},
        {q:"How many days until Christmas?", a:"{xmas} days"},
        {q:"How many miles is it from Nephi to Salt Lake City?", a:"About 85 miles"}]},
      {name:"World facts", level:"hard", items:[
        {q:"How many bones are in your body?", a:"206. Babies have around 300, and some fuse together as they grow."},
        {q:"How many hairs are on your head?", a:"About 100,000"},
        {q:"How many keys are on a piano?", a:"88"},
        {q:"How tall is a giraffe?", a:"About 18 feet"},
        {q:"How fast can a cheetah run?", a:"About 70 mph"},
        {q:"How many hearts does an octopus have?", a:"3"},
        {q:"How tall is Mount Timpanogos?", a:"About 11,750 feet"},
        {q:"How tall is the world's tallest building, the Burj Khalifa?", a:"About 2,700 feet"},
        {q:"How far away is the Moon?", a:"About 239,000 miles"},
        {q:"How many seconds are in an hour?", a:"3,600"},
        {q:"How many hours are in a year?", a:"8,760"},
        {q:"How many countries are in the world?", a:"About 195"},
        {q:"How many teeth does a grown-up have?", a:"32. Kids have 20 baby teeth."},
        {q:"How many bones are in one hand?", a:"27"},
        {q:"How long is a blue whale?", a:"About 80 to 100 feet, longer than a school bus"},
        {q:"How much does an elephant weigh?", a:"About 12,000 pounds"},
        {q:"How many eggs does a chicken lay in a year?", a:"About 250 to 300"},
        {q:"How many times does a hummingbird flap its wings in one second?", a:"About 50 to 80"},
        {q:"How tall is the Statue of Liberty, ground to torch?", a:"About 305 feet"},
        {q:"How hot is the surface of the Sun?", a:"About 10,000°F"},
        {q:"How long does sunlight take to reach Earth?", a:"About 8 minutes"},
        {q:"How wide is the Earth?", a:"About 7,900 miles"},
        {q:"How many squares are on a chessboard?", a:"64"},
        {q:"How many dimples are on a golf ball?", a:"Usually around 300 to 400"},
        {q:"How many minutes are in a day?", a:"1,440"}]},
      {name:"🏆 Final round (double points)", level:"final", items:[
        {q:"How many seconds old are you? Guess your own, and one other person's.", a:"Multiply age by 31.5 million. 6 years ≈ 189 million · 8 ≈ 252 million · 10 ≈ 315 million · 30 ≈ 946 million · 35 ≈ 1.1 billion"},
        {q:"How many pennies would it take to make a stack as tall as you?", a:"About 200 pennies per foot. 4 ft ≈ 800 · 5 ft ≈ 1,000 · 6 ft ≈ 1,200. Measure everyone and do the math together!"},
        {q:"How many times does your heart beat in one day?", a:"About 100,000"},
        {q:"How many people live on Earth?", a:"About 8 billion"},
        {q:"How many times will you blink today?", a:"About 15,000 to 20,000"}]}
    ],
    twists: [
      "Price is Right rules: closest without going over wins.",
      "Range round: everyone gives a low and a high guess. Smallest range that still has the answer wins.",
      "Kid host: one kid picks the question and keeps the answer secret. Great for the youngest.",
      "Points jar: 3 points for closest, 1 for second. Weekly winner picks dessert or the next family activity.",
      "Handicap: the youngest counts as exact if they're within 10.",
      "Final round: someone who's losing can bet all their points, like Jeopardy."]
  },

  speedlego: {
    tip: "Tap 🎲 for a build. Use as many bricks as you want, or try 🧱 Hard mode for a brick limit.",
    decks: [
      {name:"Super easy", level:"easy", secs:30, items:[
        "🚦 Traffic light: red, yellow and green", "⛄ Snowman", "🍭 Popsicle", "🚩 Flag", "🕯️ Candle", "✏️ Pencil", "🁫 Domino", "⚔️ Sword",
        "🗼 Tower: stack as tall as you can. Tallest that doesn't fall wins!", "🌈 Rainbow stack: one brick of every color you can find"]},
      {name:"Easy & fun", level:"easy", secs:60, items:[
        "🦆 Duck", "🐟 Fish", "🪱 Worm", "🍦 Ice cream cone", "🌳 Tree", "🤖 Robot face", "🍄 Mushroom: bonus for spots!", "🍪 Cookie", "🛏️ Bed",
        {q:"🍔 Hamburger: brown bun, green lettuce, red tomato, brown bun", secs:120}]},
      {name:"Animals", level:"medium", secs:90, items:[
        "Snake", "Penguin", "Turtle", "Bird on a branch", "Dog", "Spider", "Crab", "🐌 Snail", "Owl", "🐸 Frog", "Bunny", "Bat", "Butterfly", "Shark", "Pig", "Ladybug", "Whale", "Giraffe"]},
      {name:"Things that move", level:"medium", secs:90, items:[
        "Race car", "Skateboard", "Wagon", "Shopping cart", "Tractor", "Airplane", "Boat", "Helicopter", "Train", "Motorcycle", "Hot air balloon", "Submarine", "Rocket", "{grown}'s car"]},
      {name:"Food", level:"medium", secs:90, items:[
        "Ice cream cone", "Slice of pizza", "Carrot", "Cupcake", "Taco", "Hot dog", "Donut", "Sandwich", "Birthday cake", "Strawberry", "Watermelon slice"]},
      {name:"Everyday stuff", level:"medium", secs:90, items:[
        "Chair", "Lamp", "Phone", "TV", "Mailbox", "Trophy", "Key", "Hammer", "Table", "Toothbrush", "Umbrella", "Clock", "Backpack", "Cup", "Fork", "Glasses"]},
      {name:"Silly & wild", level:"medium", secs:90, items:[
        "A robot", "A monster with 3 eyes", "A monster with one giant eye", "An alien spaceship", "A flower in a pot",
        "A soccer ball and goal", "A dragon", "A castle tower", "A dinosaur", "A treasure chest", "A volcano", "A ghost", "A crown", "A tiny house",
        "A UFO", "A pet rock", "A tiny alien", "A hat for your LEGO guy", "A '{grown}' sculpture: everyone builds their version!"]},
      {name:"🧱 Hard mode: brick limit", level:"hard", secs:60, items:[
        {q:"🍭 Popsicle", note:"2 bricks only", secs:30}, {q:"🚩 Flag", note:"2 bricks only", secs:30},
        {q:"🚦 Traffic light", note:"3 bricks only", secs:30}, {q:"⛄ Snowman", note:"3 bricks only", secs:30},
        {q:"🍄 Mushroom", note:"4 bricks only", secs:60}, {q:"🐌 Snail", note:"5 bricks max", secs:60},
        {q:"🤖 Robot", note:"5 bricks max", secs:60}, {q:"🐸 Frog", note:"6 bricks max", secs:90},
        {q:"🦆 Duck", note:"4 bricks max", secs:60}, {q:"🚀 Rocket", note:"5 bricks max", secs:60},
        {q:"🎲 Blind grab", note:"Pull 6 bricks out without looking. Build anything using only those.", secs:90},
        {q:"🔁 Shrinking build", note:"Build a dog with 10 bricks, then again with 5, then with 3.", secs:60}]},
      {name:"🏆 Winner takes all", level:"final", secs:60, items:[
        {q:"Build a pet for {grown}. Any animal, real or made-up.", note:"Show it and say its name · vote, but not for your own · tie? a grown-up breaks it", secs:60},
        {q:"Build the silliest monster ever.", note:"Give it a name and a superpower · vote for the silliest", secs:60},
        {q:"Build a house 🏠", note:"It needs a door and a roof · vote for the best house", secs:60}]}
    ],
    twists: [
      "Speed round: 60-second timer, then everyone guesses what the others built.",
      "Hard mode: pick any build and set a brick limit (great for the oldest).",
      "Guess-it: one person builds in secret, everyone guesses what it is. LEGO Pictionary! The youngest usually loves this one.",
      "Copycat: look at someone's build for 10 seconds, then copy it from memory."]
  },

  mystery: {
    tip: "Read the mystery slowly. Players ask only yes/no questions. Answer \"Yes,\" \"No,\" or \"Doesn't matter.\" Stuck? Tap Hint. Whoever solves it picks the next one (or skips clearing plates).",
    decks: [
      {name:"Easy", level:"easy", items:[
        {q:"🥕 The Field: In the middle of a field there's a carrot, a scarf, and two little lumps of coal. Nobody put them there today. What happened?",
         hints:["It happened in winter.","Something else was there that's gone now.","Someone built something out of snow."],
         ask:[["Did someone leave these things on purpose?","Yes"],["Was it cold when they were put there?","Yes"],["Was something else there that's gone now?","Yes"]],
         a:"A snowman melted! The carrot was the nose, the coal was the eyes, and the scarf was around its neck."},
        {q:"☔ The Dry Hair: A man walked home in the pouring rain. No umbrella, no hat, no hood, but not one hair on his head got wet. How?",
         hints:["Did the man get wet? (Yes!)","Think about the man himself, not the rain.","Does he have hair?"],
         ask:[["Did the man get wet?","Yes"],["Was something covering his head?","No"],["Is there something different about the man himself?","Yes"]],
         a:"He's bald! There was no hair on his head to get wet. He got soaked."},
        {q:"👧👧 The Not-Twins: Two girls were born on the same day, in the same year, to the same mom. But they aren't twins. How?",
         hints:["The mom didn't have only two babies that day.","Count the babies. What if there were more than two?","What do you call it when three babies are born together?"],
         ask:[["Are there more kids in the family?","Yes"],["Were other babies born that same day?","Yes"],["Were there exactly three babies?","Yes"]],
         a:"They're two of a set of triplets! The third baby was born the same day too."}]},
      {name:"Medium", level:"medium", items:[
        {q:"🚗 The Bankrupt Driver: A man pushes his car up to a hotel and right away tells the owner, \"I'm bankrupt!\" Why?",
         hints:["Nobody was actually driving anywhere.","The car is very, very small.","It happened at a table, during a game."],
         ask:[["Is it a real car?","No"],["Is it part of a game?","Yes"],["Is the game played on a board?","Yes"]],
         a:"He's playing Monopoly! He landed on a hotel he couldn't pay for."},
        {q:"🏥 The Surgeon: A boy and his dad are in a car accident. The dad is fine, but the boy goes to the hospital. The surgeon says, \"I can't operate on this boy. He's my son!\" How?",
         hints:["The dad is not the surgeon.","Who else could be the boy's parent?","Don't assume what the surgeon looks like."],
         ask:[["Is the surgeon the dad?","No"],["Is the surgeon related to the boy?","Yes"],["Is the surgeon a woman?","Yes"]],
         a:"The surgeon is his mom!"},
        {q:"🐠 Romeo and Juliet: Romeo and Juliet are found lying still on the floor. There's broken glass and a puddle of water around them. What happened?",
         hints:["They aren't people.","They lived in the water.","Something got knocked off a table."],
         ask:[["Are Romeo and Juliet people?","No"],["Are they pets?","Yes"],["Did they live in water?","Yes"]],
         a:"They're goldfish! Their bowl got knocked off the table."}]},
      {name:"Hard", level:"hard", items:[
        {q:"🛗 The Elevator: A man lives on the 10th floor. Every morning he rides the elevator all the way down. Coming home, he rides only to the 7th floor and walks the last three, unless it's raining or someone else is in the elevator. Why?",
         hints:["Ask about the man himself.","It's about reaching something.","Why would an umbrella help him?"],
         ask:[["Does he like exercise?","Doesn't matter"],["Is there something different about the man?","Yes"],["Is it about his height?","Yes"]],
         a:"He's too short to reach the 10 button! On rainy days he presses it with his umbrella, and if someone else is there he asks them to push it."}]}
    ]
  },

  storychain: {
    tip: "Tap Next sentence after each person adds theirs. The app tells you whose turn it is and when a dinosaur is due 🦖",
    turns: {every:3, flag:"🦖 This sentence needs a DINOSAUR!"},
    decks: [
      {name:"Story starters", level:"easy", items:[
        "On Saturday morning, our family found a mysterious, glowing box on the porch with a note that said \"Do NOT open until lunch.\"",
        "When {kid} opened the fridge, a tiny voice said, \"Close the door, it's freezing in here!\"",
        "The soccer ball flew over the fence and never came down.",
        "{grown} woke up and every single sock in the house was gone.",
        "A map fell out of a library book with an X marked right on our backyard.",
        "The snow started falling purple, and nobody knew why."]}
    ],
    twists: ["Every third sentence needs a dinosaur (that's the rule!).", "Silly mode: every sentence has to start with the next letter of the alphabet.", "Grown-up writes it down. Read the whole story out loud at the end."]
  },

  telephone: {
    tip: "Whisper it once, no repeats! The last person says it out loud. The silly ones get garbled best.",
    decks: [
      {name:"Easy", level:"easy", items:["The purple cat ate a pickle.","My dog wears blue socks.","Grandma's goat likes pancakes.","The fish jumped over the moon.","{grown} sneezed on the banana."]},
      {name:"Medium", level:"medium", items:["Seven silly snakes slid down the slide.","The penguin brought a pizza to the beach party.","A giant meatball rolled into the library.","My teacher keeps a frog in her backpack.","The robot danced the chicken dance at midnight."]},
      {name:"Hard (tongue twisters)", level:"hard", items:["Fuzzy Freddy found forty fried french fries.","The tiny turtle told the tall tiger a terrible joke.","Bubbles the baby bear bought blueberry bagels on Tuesday.","Sheila sells sparkly seashells by the soccer field.","The grumpy giraffe got green gum stuck in his hair."]},
      {name:"Family specials", level:"medium", items:["{grown} scored a goal and the soccer ball turned into a taco.","{kid}'s hamster drove a Tesla to the grocery store.","{kid} built a LEGO snail that ate all the cookies.","{kid}'s shoe has a tiny dragon living inside it."]}
    ],
    twists: ["Reverse: send it around the other direction.","Draw it: the last person draws what they heard before saying it.","Add a word: each person adds one word before whispering it on."]
  }
};
