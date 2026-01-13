export const samplePrompts = [
  // Light & Fun (1-3)
  {
    text: "What's your most embarrassing cooking fail?",
    example: "I once forgot to add sugar to a cake and it was basically bread...",
    depthLevel: 2,
    category: "funny"
  },
  {
    text: "If you could only eat one cuisine forever, what would it be?",
    example: "I'd choose Italian - pasta forever!",
    depthLevel: 1,
    category: "fun"
  },
  {
    text: "What's a weird talent you have that surprises people?",
    example: "I can whistle through my fingers really loudly",
    depthLevel: 2,
    category: "fun"
  },
  {
    text: "What's the worst fashion trend you participated in?",
    example: "Oh man, I had a phase with hammer pants in the 90s",
    depthLevel: 2,
    category: "funny"
  },
  {
    text: "If you could have dinner with any fictional character, who would it be?",
    example: "Definitely Hermione Granger - we'd have so much to talk about",
    depthLevel: 1,
    category: "fun"
  },
  {
    text: "What's your go-to karaoke song?",
    example: "Livin' on a Prayer - everyone joins in!",
    depthLevel: 1,
    category: "fun"
  },
  {
    text: "What's something you're weirdly competitive about?",
    example: "Board games. I take Monopoly way too seriously.",
    depthLevel: 2,
    category: "funny"
  },
  {
    text: "If you could instantly master any skill, what would it be?",
    example: "Playing the piano - it's so peaceful and impressive",
    depthLevel: 2,
    category: "fun"
  },

  // Meaningful (4-7)
  {
    text: "What's a childhood tradition you'd love to recreate?",
    example: "My family used to have pancake Sundays and I want to bring that back",
    depthLevel: 4,
    category: "memory"
  },
  {
    text: "What would you attempt if you knew you couldn't fail?",
    example: "I'd open a community art studio for kids",
    depthLevel: 5,
    category: "dreams"
  },
  {
    text: "Who in your life has influenced you the most and why?",
    example: "My grandmother taught me resilience through her stories",
    depthLevel: 5,
    category: "relationships"
  },
  {
    text: "What's something you believed as a child that shaped who you are?",
    example: "I believed kindness could change the world - still do",
    depthLevel: 4,
    category: "memory"
  },
  {
    text: "What's a fear you've overcome and how did you do it?",
    example: "I used to be terrified of public speaking, but joined Toastmasters",
    depthLevel: 6,
    category: "growth"
  },
  {
    text: "What does 'home' mean to you?",
    example: "Home is wherever I feel completely myself",
    depthLevel: 5,
    category: "relationships"
  },
  {
    text: "What's a piece of advice you'd give your younger self?",
    example: "Stop trying to please everyone - you can't, and that's okay",
    depthLevel: 6,
    category: "growth"
  },
  {
    text: "What's a moment that changed your perspective on life?",
    example: "When my friend faced a serious illness, I realized how precious time is",
    depthLevel: 6,
    category: "growth"
  },
  {
    text: "What are you most grateful for right now?",
    example: "My health and the people who love me unconditionally",
    depthLevel: 4,
    category: "relationships"
  },
  {
    text: "What's something you're working on improving about yourself?",
    example: "I'm learning to set better boundaries without feeling guilty",
    depthLevel: 5,
    category: "growth"
  },

  // Deep (7-10)
  {
    text: "What part of yourself do you hide from most people?",
    example: "I hide how deeply I feel things - I'm afraid of being too much",
    depthLevel: 8,
    category: "psychology"
  },
  {
    text: "When you feel anxious, where do you notice it in your body first?",
    example: "It starts in my chest as a tightness, then moves to my throat",
    depthLevel: 7,
    category: "somatic"
  },
  {
    text: "What gives your life meaning when everything else falls away?",
    example: "Connection with people I love and creating things that matter",
    depthLevel: 9,
    category: "spiritual"
  },
  {
    text: "What's a dream you had as a younger person that hasn't been realized yet?",
    example: "I always wanted to write a book that helps people feel less alone",
    depthLevel: 7,
    category: "dreams"
  },
  {
    text: "What do you need to forgive yourself for?",
    example: "Not being there for my best friend when they really needed me",
    depthLevel: 9,
    category: "psychology"
  },
  {
    text: "What are you afraid people will think if they really knew you?",
    example: "That I'm not as confident as I appear - that I struggle too",
    depthLevel: 8,
    category: "psychology"
  },
  {
    text: "When do you feel most alive?",
    example: "When I'm creating something or having a deep conversation with someone I trust",
    depthLevel: 7,
    category: "spiritual"
  },
  {
    text: "What wound from your past are you still healing from?",
    example: "Growing up feeling like I had to earn love instead of just receiving it",
    depthLevel: 9,
    category: "psychology"
  },
  {
    text: "How do you want to be remembered?",
    example: "As someone who made people feel seen and valued",
    depthLevel: 8,
    category: "spiritual"
  },
  {
    text: "What truth about yourself have you been avoiding?",
    example: "That I use busyness to avoid dealing with my emotions",
    depthLevel: 10,
    category: "psychology"
  }
];

export function getPromptsByDepth(targetDepth: number, count: number = 5) {
  return samplePrompts
    .filter(p => Math.abs(p.depthLevel - targetDepth) <= 1)
    .slice(0, count);
}

export function getRandomPrompt(depthLevel: number) {
  const prompts = getPromptsByDepth(depthLevel);
  return prompts[Math.floor(Math.random() * prompts.length)];
}
