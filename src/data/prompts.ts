export interface Prompt {
  text: string;
  example: string;
  depthLevel: number;
  category: 'funny' | 'memory' | 'dreams' | 'psychology' | 'somatic' | 'group' | 'spiritual';
}

export const allPrompts: Prompt[] = [
  // ============= FUNNY STORIES (50 Prompts) =============
  
  // Light (Depth 1-3)
  {
    text: "What's your most embarrassing autocorrect fail?",
    example: "I once texted my boss 'I'll be there in 10 minutes' but it autocorrected to 'I'll be naked in 10 minutes' 😅",
    depthLevel: 2,
    category: 'funny'
  },
  {
    text: "What's the weirdest thing you believed as a kid?",
    example: "I thought ATMs just gave out free money to adults whenever they wanted it",
    depthLevel: 2,
    category: 'funny'
  },
  {
    text: "What's your most irrational fear that you'll admit to?",
    example: "Butterflies. They're just too fluttery and unpredictable!",
    depthLevel: 2,
    category: 'funny'
  },
  {
    text: "What's the strangest thing you've ever eaten?",
    example: "Chocolate-covered crickets at a food festival. Actually weren't bad!",
    depthLevel: 1,
    category: 'funny'
  },
  {
    text: "What's your most embarrassing cooking fail?",
    example: "I once forgot to add water to mac and cheese and made orange cement",
    depthLevel: 2,
    category: 'funny'
  },
  {
    text: "What's the silliest thing that made you cry recently?",
    example: "A commercial about a dog learning to share his toys",
    depthLevel: 2,
    category: 'funny'
  },
  {
    text: "What's your weirdest sleep habit?",
    example: "I have to have one foot outside the blanket or I can't fall asleep",
    depthLevel: 1,
    category: 'funny'
  },
  {
    text: "What's the most random thing in your purse/wallet right now?",
    example: "A lucky penny from 1982 and a fortune cookie fortune from 3 years ago",
    depthLevel: 1,
    category: 'funny'
  },
  {
    text: "What's your most embarrassing fashion phase?",
    example: "Popped collars. Multiple popped collars. At the same time.",
    depthLevel: 2,
    category: 'funny'
  },
  {
    text: "What's the dumbest way you've injured yourself?",
    example: "I pulled a muscle in my neck trying to see how far I could stick out my tongue",
    depthLevel: 2,
    category: 'funny'
  },

  // Medium (Depth 4-6)
  {
    text: "What's a time you completely misread a situation?",
    example: "I congratulated someone on their pregnancy. She wasn't pregnant.",
    depthLevel: 4,
    category: 'funny'
  },
  {
    text: "What's your most memorable 'I can't believe I said that' moment?",
    example: "Told my hairdresser 'love you too' when she said 'see you next time'",
    depthLevel: 4,
    category: 'funny'
  },
  {
    text: "When did you last laugh so hard you cried?",
    example: "Watching my kid try to explain YouTube to my mom",
    depthLevel: 4,
    category: 'funny'
  },
  {
    text: "What's a time you tried to be smooth but failed spectacularly?",
    example: "Waved back at someone who wasn't waving at me, then pretended to fix my hair",
    depthLevel: 4,
    category: 'funny'
  },
  {
    text: "What's your most embarrassing parent moment?",
    example: "My kid announced to the grocery store that I had 'tooted'",
    depthLevel: 5,
    category: 'funny'
  },
  {
    text: "What's the worst advice you've ever followed?",
    example: "Just be yourself' on a first date. Turns out myself needed some editing!",
    depthLevel: 4,
    category: 'funny'
  },
  {
    text: "What's a time you were hilariously wrong about something?",
    example: "I thought LinkedIn was a dating app for professionals for an embarrassingly long time",
    depthLevel: 4,
    category: 'funny'
  },
  {
    text: "What's your funniest 'I'm getting old' realization?",
    example: "I got excited about a new vacuum cleaner. Like, really excited.",
    depthLevel: 5,
    category: 'funny'
  },
  {
    text: "What's the most awkward text you've sent to the wrong person?",
    example: "Sent my boss a text meant for my husband about how annoying my boss was being",
    depthLevel: 5,
    category: 'funny'
  },
  {
    text: "What's a ridiculous thing you and your partner/family argue about?",
    example: "The correct way to load the dishwasher. It's a weekly debate.",
    depthLevel: 5,
    category: 'funny'
  },

  // Deeper (Depth 7-10)
  {
    text: "What's a funny story that actually taught you something important?",
    example: "My epic fail at a work presentation taught me that people remember how you recover, not how you fall",
    depthLevel: 7,
    category: 'funny'
  },
  {
    text: "What mistake do you keep making that you can laugh about now?",
    example: "I trust my memory instead of writing things down. My memory is terrible.",
    depthLevel: 7,
    category: 'funny'
  },
  {
    text: "What's something embarrassing about yourself you've learned to embrace?",
    example: "I'm a terrible singer but I belt it out anyway. Life's too short for perfect pitch.",
    depthLevel: 7,
    category: 'funny'
  },
  {
    text: "What's a time humor helped you through something difficult?",
    example: "Making cancer jokes during chemo. My nurses thought I was crazy but it kept me sane.",
    depthLevel: 8,
    category: 'funny'
  },
  {
    text: "What's the funniest way you've ever been humbled?",
    example: "My 4-year-old explained to me why my outfit didn't match. She was right.",
    depthLevel: 7,
    category: 'funny'
  },
  {
    text: "What's your go-to story when you need to make people laugh?",
    example: "The time I accidentally went to the wrong wedding reception and didn't realize for an hour",
    depthLevel: 6,
    category: 'funny'
  },
  {
    text: "What's the most ridiculous thing you've done for love?",
    example: "Learned to play the ukulele to serenade someone. I have no musical talent.",
    depthLevel: 7,
    category: 'funny'
  },
  {
    text: "What's your most embarrassing technology fail?",
    example: "I was on mute for an entire Zoom presentation. Talked for 20 minutes to no one.",
    depthLevel: 6,
    category: 'funny'
  },
  {
    text: "What's the weirdest compliment you've ever received?",
    example: "You have very symmetrical nostrils. Thanks... I think?",
    depthLevel: 6,
    category: 'funny'
  },
  {
    text: "What's something you were unnecessarily dramatic about as a teen?",
    example: "I wrote poetry about a boy who didn't know I existed. So much poetry.",
    depthLevel: 7,
    category: 'funny'
  },

  // ============= PAST MEMORIES (50 Prompts) =============
  
  // Light (Depth 1-3)
  {
    text: "What's your favorite childhood breakfast memory?",
    example: "Saturday morning pancakes shaped like Mickey Mouse with my dad",
    depthLevel: 2,
    category: 'memory'
  },
  {
    text: "What song instantly takes you back to high school?",
    example: "Mr. Brightside - I can still see that gymnasium dance floor",
    depthLevel: 2,
    category: 'memory'
  },
  {
    text: "What's a toy you wish you still had?",
    example: "My original Tamagotchi. I was so dedicated to that digital pet!",
    depthLevel: 1,
    category: 'memory'
  },
  {
    text: "What's your favorite memory of a snow day?",
    example: "Building an igloo with my siblings and eating lunch inside it",
    depthLevel: 2,
    category: 'memory'
  },
  {
    text: "What's a commercial jingle from childhood you still remember?",
    example: "The Kit Kat song. Give me a break!",
    depthLevel: 1,
    category: 'memory'
  },
  {
    text: "What was your favorite hiding spot as a kid?",
    example: "Behind the living room couch. I thought I was invisible there",
    depthLevel: 2,
    category: 'memory'
  },
  {
    text: "What's a childhood food you loved that seems weird now?",
    example: "Ketchup sandwiches. Just ketchup and bread. I ate them all the time",
    depthLevel: 2,
    category: 'memory'
  },
  {
    text: "What's the first concert or show you remember attending?",
    example: "The Wiggles when I was 5. I thought they were the biggest stars in the world",
    depthLevel: 2,
    category: 'memory'
  },
  {
    text: "What's a birthday party you'll never forget?",
    example: "My 8th birthday at a skating rink. I felt so cool",
    depthLevel: 2,
    category: 'memory'
  },
  {
    text: "What's your earliest memory?",
    example: "Chasing fireflies in my grandparents' backyard at dusk",
    depthLevel: 3,
    category: 'memory'
  },

  // Medium (Depth 4-6)
  {
    text: "What's a childhood tradition you'd love to recreate?",
    example: "Sunday drives to nowhere special, just to explore and talk",
    depthLevel: 4,
    category: 'memory'
  },
  {
    text: "What's a moment when an adult made you feel truly seen as a kid?",
    example: "My teacher kept my story to show future classes. I felt like a real writer.",
    depthLevel: 5,
    category: 'memory'
  },
  {
    text: "What's a friendship from your past you still think about?",
    example: "My summer camp best friend. We wrote letters for years then lost touch.",
    depthLevel: 5,
    category: 'memory'
  },
  {
    text: "What's a small moment with a grandparent you treasure?",
    example: "Learning to snap green beans on the porch, just talking about nothing",
    depthLevel: 5,
    category: 'memory'
  },
  {
    text: "What's a memory that shaped how you parent/want to parent?",
    example: "My mom always stopped what she was doing when I said 'want to see something?'",
    depthLevel: 6,
    category: 'memory'
  },
  {
    text: "What's a place from your childhood you wish you could visit again?",
    example: "My grandma's kitchen. The smell of her baking made everything feel safe",
    depthLevel: 5,
    category: 'memory'
  },
  {
    text: "What's a lesson you learned the hard way as a kid?",
    example: "That lying always catches up with you. I got caught in a web of lies at 10",
    depthLevel: 5,
    category: 'memory'
  },
  {
    text: "What's a teacher who changed your life?",
    example: "Mrs. Rodriguez saw something in me I didn't see in myself",
    depthLevel: 6,
    category: 'memory'
  },
  {
    text: "What's a childhood fear you eventually overcame?",
    example: "I was terrified of the dark. Took years to sleep without a nightlight",
    depthLevel: 5,
    category: 'memory'
  },
  {
    text: "What's a moment of childhood magic you still hold onto?",
    example: "Finding out my dad was Santa. Devastating but also knowing he loved me that much",
    depthLevel: 6,
    category: 'memory'
  },

  // Deeper (Depth 7-10)
  {
    text: "What's a memory that changed how you see one of your parents?",
    example: "Finding my dad crying at his father's grave. He became human to me that day.",
    depthLevel: 8,
    category: 'memory'
  },
  {
    text: "What's a childhood moment when you first felt truly afraid?",
    example: "Getting lost at the fair. That panic still visits me in crowds sometimes.",
    depthLevel: 7,
    category: 'memory'
  },
  {
    text: "What memory do you return to when you need comfort?",
    example: "My grandmother braiding my hair and humming. I can still feel her hands.",
    depthLevel: 8,
    category: 'memory'
  },
  {
    text: "What's a time you disappointed someone and it still bothers you?",
    example: "Missing my sister's play for a party. Her face when she didn't see me in the audience.",
    depthLevel: 8,
    category: 'memory'
  },
  {
    text: "What's a memory that revealed your parents were just figuring it out too?",
    example: "Overhearing them worry about money. Realizing they were scared sometimes too.",
    depthLevel: 8,
    category: 'memory'
  },
  {
    text: "What childhood experience do you now understand differently as an adult?",
    example: "My parents' divorce. As a kid I thought it was my fault. Now I see they were both hurting",
    depthLevel: 9,
    category: 'memory'
  },
  {
    text: "What's a childhood wound you're still healing from?",
    example: "Being bullied for being different. I still catch myself trying to fit in",
    depthLevel: 9,
    category: 'memory'
  },
  {
    text: "What did you lose in childhood that you're still grieving?",
    example: "My sense of safety after a break-in. I learned the world wasn't always safe",
    depthLevel: 9,
    category: 'memory'
  },
  {
    text: "What's a memory you've tried to forget but can't?",
    example: "The moment I realized my parents didn't love each other anymore",
    depthLevel: 10,
    category: 'memory'
  },
  {
    text: "What part of your childhood self do you miss the most?",
    example: "The belief that I could be anything. Before the world taught me limits",
    depthLevel: 8,
    category: 'memory'
  },

  // ============= FUTURE DREAMS (50 Prompts) =============
  
  // Light (Depth 1-3)
  {
    text: "If you could master any skill instantly, what would it be?",
    example: "Speaking every language. Imagine the conversations and connections!",
    depthLevel: 2,
    category: 'dreams'
  },
  {
    text: "What's on your bucket list for this year?",
    example: "Take a pottery class and make something that actually holds water",
    depthLevel: 2,
    category: 'dreams'
  },
  {
    text: "Where do you want to travel next?",
    example: "Iceland to see the Northern Lights and soak in hot springs",
    depthLevel: 1,
    category: 'dreams'
  },
  {
    text: "What hobby do you want to start 'someday'?",
    example: "Beekeeping. I want to be that neighbor with fresh honey",
    depthLevel: 2,
    category: 'dreams'
  },
  {
    text: "What's a small change you want to make this month?",
    example: "Actually use the yoga mat that's been rolled up in my closet for 2 years",
    depthLevel: 2,
    category: 'dreams'
  },
  {
    text: "If money wasn't an issue, what would you do tomorrow?",
    example: "Book a trip to Italy and eat my way through every region",
    depthLevel: 2,
    category: 'dreams'
  },
  {
    text: "What's something you want to learn just for fun?",
    example: "How to juggle. No reason, just seems fun",
    depthLevel: 1,
    category: 'dreams'
  },
  {
    text: "What's your ideal way to spend a Saturday?",
    example: "Farmers market in the morning, reading in a hammock in the afternoon",
    depthLevel: 2,
    category: 'dreams'
  },
  {
    text: "What would your dream home look like?",
    example: "Cozy cabin with huge windows, surrounded by trees and near water",
    depthLevel: 2,
    category: 'dreams'
  },
  {
    text: "What's a simple pleasure you want more of in your life?",
    example: "Morning coffee on the porch without rushing anywhere",
    depthLevel: 2,
    category: 'dreams'
  },

  // Medium (Depth 4-6)
  {
    text: "What would you attempt if you knew you couldn't fail?",
    example: "Write and publish a novel. The story's been in my head for years.",
    depthLevel: 5,
    category: 'dreams'
  },
  {
    text: "How do you hope your kids remember you?",
    example: "As someone who was always ready for an adventure, even small ones",
    depthLevel: 6,
    category: 'dreams'
  },
  {
    text: "What legacy do you want to leave?",
    example: "That I made people feel seen and loved, especially on their hard days",
    depthLevel: 6,
    category: 'dreams'
  },
  {
    text: "What relationship do you want to repair or deepen?",
    example: "My sister. We've drifted and I miss what we had.",
    depthLevel: 6,
    category: 'dreams'
  },
  {
    text: "What are you waiting to do until 'the right time'?",
    example: "Starting my own business. But maybe there's no perfect time.",
    depthLevel: 5,
    category: 'dreams'
  },
  {
    text: "What version of yourself are you working towards?",
    example: "Someone who speaks up instead of staying quiet to keep the peace",
    depthLevel: 6,
    category: 'dreams'
  },
  {
    text: "What dream feels too big to say out loud?",
    example: "Opening a nonprofit for at-risk youth. It feels impossible",
    depthLevel: 6,
    category: 'dreams'
  },
  {
    text: "What does 'success' actually mean to you?",
    example: "Feeling peace at the end of the day. Not achievement, just peace",
    depthLevel: 5,
    category: 'dreams'
  },
  {
    text: "What's something you want to be brave enough to try?",
    example: "Sharing my art publicly. Right now it stays hidden in my studio",
    depthLevel: 5,
    category: 'dreams'
  },
  {
    text: "How do you want to grow in the next year?",
    example: "I want to stop people-pleasing and start honoring my own needs",
    depthLevel: 6,
    category: 'dreams'
  },

  // Deeper (Depth 7-10)
  {
    text: "What dream have you given up on that still whispers to you?",
    example: "Medical school. Sometimes I wonder who I would have become.",
    depthLevel: 8,
    category: 'dreams'
  },
  {
    text: "What do you hope to forgive yourself for?",
    example: "Not being the daughter my mom needed me to be before she passed",
    depthLevel: 9,
    category: 'dreams'
  },
  {
    text: "What transformation do you hope for in the next five years?",
    example: "To stop apologizing for taking up space in the world",
    depthLevel: 8,
    category: 'dreams'
  },
  {
    text: "What truth do you hope to accept about yourself?",
    example: "That I'm enough, even when I'm not producing or achieving",
    depthLevel: 9,
    category: 'dreams'
  },
  {
    text: "What do you hope your pain teaches you?",
    example: "That breaking doesn't mean broken. That cracks let light in.",
    depthLevel: 9,
    category: 'dreams'
  },
  {
    text: "What part of yourself are you trying to reclaim?",
    example: "My voice. I've been quiet for too long to keep others comfortable",
    depthLevel: 8,
    category: 'dreams'
  },
  {
    text: "What would healing look like for you?",
    example: "Not flinching when people get close. Trusting that I won't be abandoned",
    depthLevel: 9,
    category: 'dreams'
  },
  {
    text: "What permission do you need to give yourself?",
    example: "To rest without guilt. To exist without justifying it",
    depthLevel: 8,
    category: 'dreams'
  },
  {
    text: "What are you becoming that scares you?",
    example: "Someone who demands to be treated well. It feels selfish but I know it's not",
    depthLevel: 8,
    category: 'dreams'
  },
  {
    text: "What would you do if you truly believed you were worthy?",
    example: "I'd stop settling. In relationships, work, everything.",
    depthLevel: 10,
    category: 'dreams'
  },

  // ============= PSYCHOLOGY (50 Prompts) =============
  
  // Light (Depth 1-3)
  {
    text: "What's your love language and how did you discover it?",
    example: "Acts of service. Realized when my friend fixed my bike without being asked.",
    depthLevel: 2,
    category: 'psychology'
  },
  {
    text: "Are you an overthinker or an underthinker?",
    example: "Overthinker. I have anxiety about my anxiety.",
    depthLevel: 2,
    category: 'psychology'
  },
  {
    text: "What's your most used emotional coping mechanism?",
    example: "Humor. If I can laugh about it, I can handle it.",
    depthLevel: 3,
    category: 'psychology'
  },
  {
    text: "What personality trait do you wish you had more of?",
    example: "Spontaneity. I plan my spontaneous moments.",
    depthLevel: 2,
    category: 'psychology'
  },
  {
    text: "How do you recharge: alone or with people?",
    example: "Alone with a book, but knowing people are nearby",
    depthLevel: 2,
    category: 'psychology'
  },
  {
    text: "What's your biggest pet peeve?",
    example: "People chewing loudly. It makes my brain itch",
    depthLevel: 2,
    category: 'psychology'
  },
  {
    text: "Are you a morning person or night owl?",
    example: "Night owl who has to live in a morning person's world",
    depthLevel: 1,
    category: 'psychology'
  },
  {
    text: "How do you handle stress?",
    example: "Clean everything. My house is spotless when I'm anxious",
    depthLevel: 3,
    category: 'psychology'
  },
  {
    text: "What's your go-to comfort activity?",
    example: "Rewatching The Office for the hundredth time",
    depthLevel: 2,
    category: 'psychology'
  },
  {
    text: "How do you make big decisions?",
    example: "Pro/con lists and then ignoring them to follow my gut",
    depthLevel: 3,
    category: 'psychology'
  },

  // Medium (Depth 4-6)
  {
    text: "What pattern do you keep repeating in relationships?",
    example: "I give until I'm empty, then resent the person for taking",
    depthLevel: 6,
    category: 'psychology'
  },
  {
    text: "What childhood role do you still play in your family?",
    example: "The peacemaker. Still smoothing tensions I didn't create.",
    depthLevel: 5,
    category: 'psychology'
  },
  {
    text: "What emotion do you have the hardest time expressing?",
    example: "Anger. It feels too dangerous, too big.",
    depthLevel: 5,
    category: 'psychology'
  },
  {
    text: "What story do you tell yourself that might not be true?",
    example: "That I have to earn love by being useful",
    depthLevel: 6,
    category: 'psychology'
  },
  {
    text: "How has your relationship with yourself changed over time?",
    example: "I'm learning to be a friend to myself instead of a critic",
    depthLevel: 5,
    category: 'psychology'
  },
  {
    text: "What triggers you and why do you think that is?",
    example: "Being ignored. Takes me right back to feeling invisible as a kid",
    depthLevel: 6,
    category: 'psychology'
  },
  {
    text: "What part of your personality do you hide in professional settings?",
    example: "My weirdness. I'm much stranger than my work persona suggests",
    depthLevel: 5,
    category: 'psychology'
  },
  {
    text: "What belief about yourself are you trying to unlearn?",
    example: "That my value is tied to my productivity",
    depthLevel: 6,
    category: 'psychology'
  },
  {
    text: "How do you self-sabotage?",
    example: "I create chaos right when things start going well",
    depthLevel: 6,
    category: 'psychology'
  },
  {
    text: "What do you do when you feel overwhelmed?",
    example: "Shut down completely. Just freeze and dissociate",
    depthLevel: 5,
    category: 'psychology'
  },

  // Deeper (Depth 7-10)
  {
    text: "What part of yourself do you hide from most people?",
    example: "The depth of my anxiety. How hard simple things can be.",
    depthLevel: 8,
    category: 'psychology'
  },
  {
    text: "What wound are you still healing from?",
    example: "Being told I was 'too much' as a child. I still make myself smaller.",
    depthLevel: 9,
    category: 'psychology'
  },
  {
    text: "What truth about yourself are you afraid to admit?",
    example: "That I might be depressed, not just tired",
    depthLevel: 9,
    category: 'psychology'
  },
  {
    text: "What would change if you truly believed you were worthy?",
    example: "I'd stop apologizing for my needs",
    depthLevel: 9,
    category: 'psychology'
  },
  {
    text: "What are you grieving that no one knows about?",
    example: "The version of me I was before trauma. I miss her innocence.",
    depthLevel: 10,
    category: 'psychology'
  },
  {
    text: "What defense mechanism do you rely on most?",
    example: "Intellectualizing everything. If I can explain it, I don't have to feel it",
    depthLevel: 8,
    category: 'psychology'
  },
  {
    text: "What core belief about yourself is being challenged right now?",
    example: "That I'm not lovable unless I'm perfect. It's exhausting.",
    depthLevel: 9,
    category: 'psychology'
  },
  {
    text: "What part of your shadow self are you learning to integrate?",
    example: "My anger. I was taught nice girls don't get angry",
    depthLevel: 9,
    category: 'psychology'
  },
  {
    text: "What would your younger self think of who you've become?",
    example: "She'd be sad I learned to play it safe. She was so brave.",
    depthLevel: 8,
    category: 'psychology'
  },
  {
    text: "What do you need to forgive yourself for?",
    example: "All the years I spent hating my body",
    depthLevel: 10,
    category: 'psychology'
  },

  // ============= SOMATIC EXPERIENCES (50 Prompts) =============
  
  // Light (Depth 1-3)
  {
    text: "Where do you hold tension in your body?",
    example: "My shoulders are basically earrings at this point",
    depthLevel: 2,
    category: 'somatic'
  },
  {
    text: "What physical sensation brings you instant calm?",
    example: "Warm sun on my face. Instant peace.",
    depthLevel: 2,
    category: 'somatic'
  },
  {
    text: "How does your body tell you it needs rest?",
    example: "My eye starts twitching. It's like a check engine light.",
    depthLevel: 3,
    category: 'somatic'
  },
  {
    text: "What texture brings you comfort?",
    example: "Soft blankets. I'm basically a human burrito most evenings.",
    depthLevel: 1,
    category: 'somatic'
  },
  {
    text: "What movement makes you feel most alive?",
    example: "Dancing badly in my kitchen. Full body joy.",
    depthLevel: 2,
    category: 'somatic'
  },
  {
    text: "What smell instantly relaxes you?",
    example: "Lavender and vanilla. Takes me to my happy place",
    depthLevel: 2,
    category: 'somatic'
  },
  {
    text: "What physical sensation do you find most satisfying?",
    example: "That first sip of coffee in the morning. Pure bliss",
    depthLevel: 1,
    category: 'somatic'
  },
  {
    text: "How does your body respond to good news?",
    example: "Warmth in my chest and this bouncy energy in my legs",
    depthLevel: 2,
    category: 'somatic'
  },
  {
    text: "What sound is most soothing to you?",
    example: "Rain on the roof. Instant calm",
    depthLevel: 2,
    category: 'somatic'
  },
  {
    text: "What physical activity helps you think clearly?",
    example: "Walking. My brain works better when my body moves",
    depthLevel: 2,
    category: 'somatic'
  },

  // Medium (Depth 4-6)
  {
    text: "When you feel anxious, where do you notice it in your body first?",
    example: "Tight chest, like someone's sitting on it",
    depthLevel: 5,
    category: 'somatic'
  },
  {
    text: "How does your body respond to feeling safe?",
    example: "My breathing deepens and my shoulders actually drop",
    depthLevel: 5,
    category: 'somatic'
  },
  {
    text: "What physical sensation accompanies your intuition?",
    example: "A knowing in my gut, like a gentle pull",
    depthLevel: 5,
    category: 'somatic'
  },
  {
    text: "How has your relationship with your body changed?",
    example: "Learning to listen to it instead of just criticizing it",
    depthLevel: 6,
    category: 'somatic'
  },
  {
    text: "What does exhaustion feel like in your body?",
    example: "Heavy limbs and a fog in my head, like moving through honey",
    depthLevel: 5,
    category: 'somatic'
  },
  {
    text: "When do you feel most connected to your body?",
    example: "During yoga. It's the only time I'm fully present",
    depthLevel: 5,
    category: 'somatic'
  },
  {
    text: "How does stress manifest physically for you?",
    example: "Tension headaches and jaw clenching, especially at night",
    depthLevel: 5,
    category: 'somatic'
  },
  {
    text: "What does joy feel like in your body?",
    example: "Lightness in my chest and this expansive feeling",
    depthLevel: 5,
    category: 'somatic'
  },
  {
    text: "How does your body tell you when something is wrong?",
    example: "My stomach gets queasy and I lose my appetite",
    depthLevel: 6,
    category: 'somatic'
  },
  {
    text: "What physical practice has changed your life?",
    example: "Breathwork. I didn't know I was barely breathing",
    depthLevel: 6,
    category: 'somatic'
  },

  // Deeper (Depth 7-10)
  {
    text: "Where in your body do you store sadness?",
    example: "Behind my eyes and in my throat. Tears that won't come.",
    depthLevel: 8,
    category: 'somatic'
  },
  {
    text: "How does trauma show up in your body?",
    example: "Hypervigilance. My body is always ready to run.",
    depthLevel: 9,
    category: 'somatic'
  },
  {
    text: "What physical sensation accompanies shame for you?",
    example: "Heat in my face and a shrinking feeling, like I want to disappear",
    depthLevel: 8,
    category: 'somatic'
  },
  {
    text: "How does your body express what your words cannot?",
    example: "Migraines when I'm not speaking my truth",
    depthLevel: 8,
    category: 'somatic'
  },
  {
    text: "What is your body trying to tell you that you're not hearing?",
    example: "That rest is not earned. It's required.",
    depthLevel: 9,
    category: 'somatic'
  },
  {
    text: "Where do you feel grief in your body?",
    example: "As a physical ache in my chest, like something is pressing down",
    depthLevel: 9,
    category: 'somatic'
  },
  {
    text: "How has your body kept score of your experiences?",
    example: "Chronic pain in places where I've held trauma for years",
    depthLevel: 9,
    category: 'somatic'
  },
  {
    text: "What sensation do you try to numb or avoid?",
    example: "The tightness in my throat when I want to cry but can't",
    depthLevel: 8,
    category: 'somatic'
  },
  {
    text: "How does your body react to emotional intimacy?",
    example: "I physically pull back. My body remembers betrayal even when my mind wants to trust",
    depthLevel: 9,
    category: 'somatic'
  },
  {
    text: "What would it feel like to fully inhabit your body?",
    example: "I don't know. I've been dissociated for so long",
    depthLevel: 10,
    category: 'somatic'
  },

  // ============= GROUP DYNAMICS (50 Prompts) =============
  
  // Light (Depth 1-3)
  {
    text: "What role do you usually play in friend groups?",
    example: "The planner. Someone has to pick the restaurant!",
    depthLevel: 2,
    category: 'group'
  },
  {
    text: "What's your friendship superpower?",
    example: "Remembering random details about people's lives",
    depthLevel: 2,
    category: 'group'
  },
  {
    text: "How do you show love to friends?",
    example: "Sending memes at 2 AM that made me think of them",
    depthLevel: 2,
    category: 'group'
  },
  {
    text: "What makes you feel most connected to this group?",
    example: "When we can sit in comfortable silence together",
    depthLevel: 3,
    category: 'group'
  },
  {
    text: "What's your favorite group tradition we should start?",
    example: "Monthly dinner where phones go in a basket",
    depthLevel: 2,
    category: 'group'
  },
  {
    text: "What's your favorite thing about each person in this group?",
    example: "Everyone brings something unique - humor, wisdom, realness",
    depthLevel: 2,
    category: 'group'
  },
  {
    text: "What's the best group trip you've ever been on?",
    example: "Beach weekend with no plans. We just existed together",
    depthLevel: 2,
    category: 'group'
  },
  {
    text: "How do you prefer to celebrate with friends?",
    example: "Good food, good conversation, nothing too elaborate",
    depthLevel: 2,
    category: 'group'
  },
  {
    text: "What makes you laugh hardest with friends?",
    example: "Inside jokes that make no sense to anyone else",
    depthLevel: 2,
    category: 'group'
  },
  {
    text: "What's something this group does that you've never done with other friends?",
    example: "Actually talk about real stuff instead of just surface chat",
    depthLevel: 3,
    category: 'group'
  },

  // Medium (Depth 4-6)
  {
    text: "When do you feel most yourself with friends?",
    example: "When I can share a half-formed thought without judgment",
    depthLevel: 5,
    category: 'group'
  },
  {
    text: "What do you need from friendships that you're not always good at asking for?",
    example: "To be checked on, even when I say I'm fine",
    depthLevel: 6,
    category: 'group'
  },
  {
    text: "How do you handle conflict with friends?",
    example: "I avoid it until I can't, then word-vomit everything",
    depthLevel: 5,
    category: 'group'
  },
  {
    text: "What friendship wound are you still carrying?",
    example: "Being left out in middle school. I still assume I won't be invited.",
    depthLevel: 6,
    category: 'group'
  },
  {
    text: "What kind of friend do you want to become?",
    example: "The one who shows up, even when it's inconvenient",
    depthLevel: 5,
    category: 'group'
  },
  {
    text: "What's hard for you in group settings?",
    example: "I go quiet when there are too many voices. I disappear",
    depthLevel: 5,
    category: 'group'
  },
  {
    text: "How have your friendships changed as you've gotten older?",
    example: "Fewer friends but deeper connections. Quality over quantity",
    depthLevel: 5,
    category: 'group'
  },
  {
    text: "What do you appreciate most about this group?",
    example: "That I can be messy here. I don't have to have it all together",
    depthLevel: 6,
    category: 'group'
  },
  {
    text: "What's something you're afraid to share with friends?",
    example: "When I'm struggling. I don't want to be a burden",
    depthLevel: 6,
    category: 'group'
  },
  {
    text: "How do you know when a friendship is real?",
    example: "When you can pick up right where you left off, no matter the gap",
    depthLevel: 5,
    category: 'group'
  },

  // Deeper (Depth 7-10)
  {
    text: "What are you afraid your friends would think if they really knew you?",
    example: "That I'm not as strong as I pretend to be",
    depthLevel: 8,
    category: 'group'
  },
  {
    text: "When have you felt most let down by a friend?",
    example: "When she disappeared during my divorce. I needed her.",
    depthLevel: 8,
    category: 'group'
  },
  {
    text: "What boundary do you need to set but haven't?",
    example: "That I can't be everyone's therapist anymore",
    depthLevel: 8,
    category: 'group'
  },
  {
    text: "How has friendship disappointment changed you?",
    example: "I hold pieces of myself back now. Trust feels dangerous.",
    depthLevel: 9,
    category: 'group'
  },
  {
    text: "What do you need to forgive in your friendships?",
    example: "That we're all doing our best with our own pain",
    depthLevel: 8,
    category: 'group'
  },
  {
    text: "What makes you pull away from friends?",
    example: "Fear they'll leave if they see my darkness",
    depthLevel: 9,
    category: 'group'
  },
  {
    text: "What do you wish you could say to this group?",
    example: "That I need you more than I let on",
    depthLevel: 8,
    category: 'group'
  },
  {
    text: "What pattern do you repeat in friendships that hurts you?",
    example: "I give more than I have, then resent when it's not reciprocated",
    depthLevel: 8,
    category: 'group'
  },
  {
    text: "What does belonging feel like to you?",
    example: "I don't know if I've ever fully felt it",
    depthLevel: 9,
    category: 'group'
  },
  {
    text: "What would change if you let yourself be fully seen here?",
    example: "Everything. I might finally feel like I belong somewhere",
    depthLevel: 10,
    category: 'group'
  },

  // ============= SPIRITUAL (50 Prompts) =============
  
  // Light (Depth 1-3)
  {
    text: "What brings you a sense of awe?",
    example: "Stars on a clear night. Instant perspective shift.",
    depthLevel: 2,
    category: 'spiritual'
  },
  {
    text: "When do you feel most grateful?",
    example: "Sunday morning coffee before anyone else wakes up",
    depthLevel: 2,
    category: 'spiritual'
  },
  {
    text: "What ritual brings you peace?",
    example: "Lighting a candle and taking three deep breaths",
    depthLevel: 2,
    category: 'spiritual'
  },
  {
    text: "Where do you feel most connected to something bigger?",
    example: "By the ocean. The waves remind me I'm small in the best way.",
    depthLevel: 3,
    category: 'spiritual'
  },
  {
    text: "What practice grounds you?",
    example: "Walking barefoot in grass. Instant calm.",
    depthLevel: 2,
    category: 'spiritual'
  },
  {
    text: "What are you thankful for today?",
    example: "My health, my people, and coffee. Always coffee",
    depthLevel: 2,
    category: 'spiritual'
  },
  {
    text: "What reminds you that life is good?",
    example: "My kid's laughter. Pure, unfiltered joy",
    depthLevel: 2,
    category: 'spiritual'
  },
  {
    text: "What simple pleasure brings you joy?",
    example: "Fresh flowers on my kitchen table",
    depthLevel: 1,
    category: 'spiritual'
  },
  {
    text: "When do you feel most at peace?",
    example: "Early morning, before the world wakes up",
    depthLevel: 2,
    category: 'spiritual'
  },
  {
    text: "What natural setting speaks to your soul?",
    example: "Mountains. They make me feel small and held at the same time",
    depthLevel: 3,
    category: 'spiritual'
  },

  // Medium (Depth 4-6)
  {
    text: "How has your faith or spirituality evolved?",
    example: "From rules to relationship. From fear to love.",
    depthLevel: 5,
    category: 'spiritual'
  },
  {
    text: "What question would you ask the universe?",
    example: "Am I on the right path, or just a path?",
    depthLevel: 5,
    category: 'spiritual'
  },
  {
    text: "When have you felt divinely held?",
    example: "In my deepest grief, feeling surrounded by unexplainable peace",
    depthLevel: 6,
    category: 'spiritual'
  },
  {
    text: "What spiritual practice do you want to explore?",
    example: "Meditation without feeling like I'm doing it wrong",
    depthLevel: 5,
    category: 'spiritual'
  },
  {
    text: "How do you experience the sacred in ordinary life?",
    example: "In my children's laughter. It feels like prayer.",
    depthLevel: 6,
    category: 'spiritual'
  },
  {
    text: "What gives you hope when things feel dark?",
    example: "The sun rising every morning. Nature's promise to keep going",
    depthLevel: 5,
    category: 'spiritual'
  },
  {
    text: "What does surrender mean to you?",
    example: "Letting go of control. Trusting the process even when I can't see the path",
    depthLevel: 6,
    category: 'spiritual'
  },
  {
    text: "What spiritual belief has changed for you?",
    example: "I used to think suffering made you stronger. Now I think it just makes you softer",
    depthLevel: 6,
    category: 'spiritual'
  },
  {
    text: "Where do you find divinity?",
    example: "In acts of kindness between strangers",
    depthLevel: 5,
    category: 'spiritual'
  },
  {
    text: "What does grace mean to you?",
    example: "Getting what you don't deserve. Being held when you feel unlovable",
    depthLevel: 6,
    category: 'spiritual'
  },

  // Deeper (Depth 7-10)
  {
    text: "What gives your life meaning when everything else falls away?",
    example: "Love. The love I've given and received. That's all that remains.",
    depthLevel: 9,
    category: 'spiritual'
  },
  {
    text: "What spiritual wound are you carrying?",
    example: "Being told God was disappointed in me. Still untangling that lie.",
    depthLevel: 9,
    category: 'spiritual'
  },
  {
    text: "Where do you find God/Divine/Universe when traditional spaces fail you?",
    example: "In the broken people who still choose kindness",
    depthLevel: 8,
    category: 'spiritual'
  },
  {
    text: "What would change if you truly believed you were beloved?",
    example: "I'd stop trying to earn what was already mine",
    depthLevel: 9,
    category: 'spiritual'
  },
  {
    text: "What mystery are you learning to live with?",
    example: "That suffering and beauty can exist in the same moment",
    depthLevel: 8,
    category: 'spiritual'
  },
  {
    text: "What does God/Universe feel like to you?",
    example: "Like coming home after being lost for a long time",
    depthLevel: 8,
    category: 'spiritual'
  },
  {
    text: "What spiritual truth are you resisting?",
    example: "That I can't control everything. That surrender isn't giving up",
    depthLevel: 8,
    category: 'spiritual'
  },
  {
    text: "How has suffering shaped your faith?",
    example: "It destroyed what I thought I believed and rebuilt something more honest",
    depthLevel: 9,
    category: 'spiritual'
  },
  {
    text: "What are you being asked to release?",
    example: "The idea that I have to understand everything to trust it",
    depthLevel: 9,
    category: 'spiritual'
  },
  {
    text: "What would you say to the divine right now?",
    example: "I'm tired of being strong. Hold me.",
    depthLevel: 10,
    category: 'spiritual'
  },
];

export function getPromptsByCategory(category: Prompt['category']): Prompt[] {
  return allPrompts.filter(p => p.category === category);
}

export function getPromptsByDepthRange(minDepth: number, maxDepth: number): Prompt[] {
  return allPrompts.filter(p => p.depthLevel >= minDepth && p.depthLevel <= maxDepth);
}

export function getRandomPrompt(depthLevel: number, category?: Prompt['category']): Prompt {
  const targetDepth = depthLevel;
  const range = 1;
  
  let filtered = allPrompts.filter(p => 
    Math.abs(p.depthLevel - targetDepth) <= range
  );
  
  if (category) {
    filtered = filtered.filter(p => p.category === category);
  }
  
  if (filtered.length === 0) {
    filtered = allPrompts;
  }
  
  return filtered[Math.floor(Math.random() * filtered.length)];
}
