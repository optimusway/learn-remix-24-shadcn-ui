import { z } from "zod";

const messageSchema = z.object({
  from: z.union([z.literal("human"), z.literal("bot")]),
  message: z.string(),
  ts: z.number(),
});

const conversationSchema = z.array(messageSchema);

export const conversation = conversationSchema.parse([
  {
    from: "human",
    message:
      "Hi there! I'm planning a trip to Europe this summer and could use some advice.",
    ts: 1710454297,
  },
  {
    from: "bot",
    message:
      "Hello! I'd be happy to help you plan your European adventure. Where would you like to visit, and do you have any specific interests or preferences?",
    ts: 1710454300,
  },
  {
    from: "human",
    message:
      "I'm thinking of visiting Italy and Greece. I love history, architecture, and trying local cuisines.",
    ts: 1710454310,
  },
  {
    from: "bot",
    message:
      "Excellent choices! Italy and Greece are renowned for their rich histories, stunning architecture, and delectable cuisines. In Italy, you must visit Rome to explore the Colosseum, the Vatican, and the Trevi Fountain. Florence is a treasure trove of Renaissance art and architecture, while Venice offers its iconic canals and gondola rides. As for Greece, Athens is a must-see for its ancient ruins like the Acropolis and the Parthenon. The Greek islands, such as Santorini and Mykonos, are famous for their whitewashed villages, beautiful beaches, and incredible sunsets.",
    ts: 1710454320,
  },
  {
    from: "human",
    message:
      "That sounds amazing! Any tips on getting around and finding good accommodations?",
    ts: 1710454330,
  },
  {
    from: "bot",
    message:
      "Absolutely! In Italy, trains are an excellent way to travel between major cities like Rome, Florence, and Venice. Within cities, walking and using public transportation like buses and the metro is convenient. For accommodations, consider staying in centrally located apartments or boutique hotels for an authentic experience. In Greece, ferries are the best way to island-hop, and renting a car or taking taxis can be helpful for exploring islands. Look for family-run hotels, villas, or Airbnbs for a more local Greek experience.",
    ts: 1710454340,
  },
  {
    from: "human",
    message: "Great tips! Any recommendations for must-try local dishes?",
    ts: 1710454350,
  },
  {
    from: "bot",
    message:
      "Of course! In Italy, you simply cannot miss trying authentic pizza in Naples, where it originated. Other iconic Italian dishes include pasta dishes like carbonara and cacio e pepe in Rome, gelato (Italian ice cream) everywhere, and risotto in northern Italy. In Greece, be sure to sample souvlaki (grilled meat skewers), moussaka (eggplant and meat casserole), spanakopita (spinach and feta phyllo pastry), and of course, Greek salads with fresh feta cheese, olives, and locally grown vegetables.",
    ts: 1710454360,
  },
  {
    from: "human",
    message:
      "Those all sound delicious! I'll definitely be trying as many local specialties as possible.",
    ts: 1710454370,
  },
  {
    from: "bot",
    message:
      "Excellent! Immersing yourself in the local cuisine is such an important part of experiencing a new culture. Don't forget to also try the local wines and spirits, like Italian wines from regions like Tuscany and Piedmont, and ouzo, the signature Greek anise-flavored aperitif.",
    ts: 1710454380,
  },
  {
    from: "human",
    message: "Good call! I love trying new wines and liquors when I travel.",
    ts: 1710454390,
  },
  {
    from: "bot",
    message:
      "That's wonderful! Another tip for your trip: consider taking cooking classes or food tours to truly immerse yourself in the culinary traditions of Italy and Greece. Learning from local chefs and guides can provide invaluable insights and make your culinary experiences even more memorable.",
    ts: 1710454400,
  },
  {
    from: "human",
    message:
      "Ooh, that's a great idea! I'll definitely look into cooking classes and food tours.",
    ts: 1710454410,
  },
  {
    from: "bot",
    message:
      "Fantastic! Feel free to let me know if you have any other questions as you continue planning your trip. I'm happy to provide additional recommendations for activities, hidden gems, or anything else to ensure you have an unforgettable time in Italy and Greece.",
    ts: 1710454420,
  },
  {
    from: "human",
    message:
      "Thank you so much for all the helpful advice! I'm really looking forward to this trip now.",
    ts: 1710454430,
  },
  {
    from: "bot",
    message:
      "You're very welcome! I'm thrilled to have helped you plan this exciting European adventure. Enjoy every moment, savor the incredible food and wine, and soak in the rich history and culture. Wishing you a safe and memorable journey!",
    ts: 1710454440,
  },
  {
    from: "human",
    message:
      "That's great, thanks again! One more question - what are some tips for staying safe and avoiding tourist traps?",
    ts: 1710454450,
  },
  {
    from: "bot",
    message: `Excellent question! Here are some tips for staying safe and avoiding tourist traps during your trip:

1. Be aware of your surroundings and keep an eye on your belongings, especially in crowded areas or on public transportation.
2. Avoid carrying large amounts of cash or displaying expensive items like jewelry or electronics.
3. Research common scams and tourist traps in the areas you'll be visiting, such as overpriced taxis or fake ticket sellers.
4. Stick to well- lit, populated areas when walking at night.
5. Learn a few basic phrases in Italian and Greek to help you communicate and blend in more easily.
6. Book accommodation and tours through reputable sources, and be wary of unsolicited offers or deals that seem too good to be true.
7. When dining out, avoid restaurants with aggressive touts or that seem overly touristy.Look for local favorites or ask your hotel for recommendations.
8. Keep copies of your important documents and emergency contacts separate from the originals.`,
    ts: 1710454460,
  },
  {
    from: "human",
    message:
      "Those are all really practical and helpful tips. Safety is definitely a priority when traveling abroad.",
    ts: 1710454470,
  },
  {
    from: "bot",
    message:
      "Absolutely, safety should always be a top priority when traveling, especially in unfamiliar destinations. By taking some simple precautions and being aware of your surroundings, you can greatly minimize potential risks and focus on fully enjoying your Italian and Greek adventures. Don't hesitate to reach out if you have any other questions or concerns as you finalize your plans.",
    ts: 1710454480,
  },
  {
    from: "human",
    message: "Will do, thanks again for all the great advice!",
    ts: 1710454490,
  },
  {
    from: "bot",
    message:
      "You're very welcome! I'm glad I could provide helpful information and tips to make your European trip truly memorable and stress-free. Safe travels, and have an incredible time exploring the rich history, culture, and cuisine of Italy and Greece!",
    ts: 1710454500,
  },
  {
    from: "human",
    message:
      "I'm really excited for this trip now! I'll be sure to take lots of pictures and share my experiences when I get back.",
    ts: 1710454510,
  },
  {
    from: "bot",
    message:
      "That's wonderful! I'm excited for you as well. Traveling to new places and immersing yourself in different cultures is such an enriching experience. I can't wait to hear all about your adventures in Italy and Greece when you return. Don't forget to savor every moment, try new things, and make lasting memories. Enjoy your trip to the fullest!",
    ts: 1710454520,
  },
  {
    from: "human",
    message: "Thanks, I will! Talk to you soon!",
    ts: 1710454530,
  },
  {
    from: "bot",
    message:
      "Sounds great! Safe travels, and I look forward to hearing all about your European adventure when you return. Arrivederci and καλό ταξίδι (bon voyage in Italian and Greek)!",
    ts: 1710454540,
  },
  {
    from: "human",
    message:
      "I'm back from my trip to Italy and Greece! It was absolutely amazing, and your advice was so helpful.",
    ts: 1710454550,
  },
  {
    from: "bot",
    message:
      "Welcome back! I'm so glad to hear that your trip to Italy and Greece was amazing. It brings me joy to know that my advice was helpful in ensuring you had a wonderful and memorable experience. I'd love to hear all about your adventures and highlights from the trip!",
    ts: 1710454560,
  },
  {
    from: "human",
    message:
      "Where do I even begin? The history, architecture, and food were all incredible. In Rome, the Colosseum and Vatican City were breathtaking. And the pizza in Naples was out of this world!",
    ts: 1710454570,
  },
  {
    from: "bot",
    message:
      "It sounds like you had an incredible time in Italy! Rome and Naples are truly iconic destinations, and I'm thrilled you got to experience their historical marvels and culinary delights firsthand. The Colosseum and Vatican City are awe-inspiring, and I can only imagine how amazing it must have been to witness their grandeur in person. And of course, trying authentic Neapolitan pizza is a must – I'm glad you indulged in that delicious tradition!",
    ts: 1710454580,
  },
  {
    from: "human",
    message:
      "Yes, it was all so amazing! And in Greece, the Acropolis in Athens was stunning, and I loved exploring the whitewashed villages and beaches in Santorini and Mykonos.",
    ts: 1710454590,
  },
  {
    from: "bot",
    message:
      "Greece sounds like it was an absolute dream! The ancient Acropolis in Athens is truly a marvel, and I can only imagine how breathtaking it was to stand amidst such an iconic piece of history. And the Greek islands are renowned for their stunning beauty – the whitewashed villages and pristine beaches of Santorini and Mykonos must have been picture-perfect. I'm so glad you got to experience the best of both worlds – the rich history and culture, as well as the natural beauty and relaxation that Greece has to offer.",
    ts: 1710454600,
  },
  {
    from: "human",
    message:
      "Absolutely! And the food and wine were incredible everywhere we went. I took a cooking class in Tuscany and a food tour in Athens, which you recommended, and they were highlights of the trip.",
    ts: 1710454610,
  },
  {
    from: "bot",
    message:
      "I'm delighted to hear that the cooking class in Tuscany and the food tour in Athens were such highlights! Immersing yourself in the local culinary traditions is truly the best way to experience a destination's culture and history. I'm sure those hands-on experiences not only provided you with incredible memories but also gave you a deeper appreciation for the flavors and techniques behind Italian and Greek cuisine. Those are the kinds of authentic, immersive experiences that make travel so enriching and unforgettable.",
    ts: 1710454620,
  },
  {
    from: "human",
    message:
      "You're so right. Those experiences really made the trip extra special. I'm already dreaming of going back someday!",
    ts: 1710454630,
  },
  {
    from: "bot",
    message:
      "I'm thrilled to hear that your trip to Italy and Greece was such a resounding success, and that the experiences and recommendations I provided helped make it truly unforgettable. The fact that you're already dreaming of returning is a testament to how much you loved exploring those incredible destinations. Travel has a way of captivating our hearts and leaving us longing for more adventures. Whenever you're ready to plan your next European journey, or any other trip, I'll be here to provide guidance and insights to help you create more cherished memories. For now, savor the wonderful experiences and flavors you've brought back, and know that you've opened a door to a lifetime of enriching travel experiences.",
    ts: 1710454640,
  },
  {
    from: "human",
    message:
      "Thank you so much for all your help! I'll definitely be reaching out again for my next adventure.",
    ts: 1710454650,
  },
  {
    from: "bot",
    message:
      "You're very welcome! I'm always happy to assist in planning unforgettable travel experiences. I look forward to our next conversation and helping you craft another amazing adventure. Safe travels, and may your wanderlust continue to inspire you to explore the world's wonders!",
    ts: 1710454660,
  },
]);
