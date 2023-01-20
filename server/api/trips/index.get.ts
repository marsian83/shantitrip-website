export default defineEventHandler(async () => {
  for (let trip of trips) {
    const index = trips.indexOf(trip);
    for (let place of trip.places) {
      let placeGallery = await $fetch(`/api/gallery/search?query=${place}`);
      for (let { images } of placeGallery) {
        let newGallery = trips[index].gallery.concat(images);
        trips[index].gallery = newGallery;
      }
    }
  }

  return trips;
});

let trips = [
  {
    id: 0,
    name: "Splendid Spiti",
    days: 9,
    cost: 19800,
    themes: ["nature", "art", "culture", "spirituality"],
    thumbnailUrl: "/images/trips/0.webp",
    gallery: ["/images/trips/0.webp"],
    description:
      "Spiti is one of the most bizarre and gorgeous places to see. At an altitude of 4,000+ meters, the Spitian landscape is so distinct from other valleys in Himachal, you'll think you're in some another country and another time.",
    places: ["Shimla", "Sarahan", "Nako", "Sangla", "Kaza"],
    punchline: "Prepare for a jaw-dropping experience.",
    summary:
      "Spiti's gorgeous vistas will leave you spellbound and stunned. With clear blue skies, snow-capped mountains, and stark barren landscapes with not a person insight, you will stand there in awe as you watch the magic of nature unfold in this isolated place, away from the noise of civilization.",
    schedule: [],
    tripFor: [
      "Nature and trek-lovers",
      "Those interested in spirituality, buddhism, and Tibetan art and culture",
      "Groups of upto 6 friends",
    ],
    highlights: [
      "Explore Shimla — it's markets, people, and food",
      "Behold the snow-capped Himalayan peaks in Sarahan, flanked on the banks of the meandering Sutlej River",
      "Visit the Goddess Bhima Kaali temple, the architecture of which is very akin to a monastery",
      "Enjoy some soothing music around the bonfire in Sangla Village",
      "Visit the famous lake of nako village",
      "Visit the ancient and revered Narayan Nagini Temple in Kalpa.",
      "Visit Kibber, the highest motorable village in the world",
      "Visit Key Monastery along with some adventure activity in Pin Valley",
    ],
    stay: ["Homestays", "Cottages", "Guesthouses", "Camps"],
    travel: ["Swift Dzire", "Innova Crysta"],
    food: [
      "Traditional Veg. Himachali and Tibetan Cuisine",
      "Non-veg. Pahadi Cuisine",
      "Local delicacies native to Himachal Pradesh and Spiti",
    ],
    features: [
      {
        title: "Rest and Relaxation",
        icon: "ea78",
        items: [
          "Spend a lazy afternoon sitting by the Parvati River bank in Kasol",
          "Chill in cafes in Kasol. Enjoy Israeli and Tibetan cuisine or local Himachali delicacies like Siddu, Rajma Chawal, and Makke Di Roti and Sarso Da Saag",
          "Enjoy a hot water bath at Manikaran — along with some leisurely shopping for handicrafts, paintings, and other artwork",
          "Unwind in Jibhi, surrounded by thick pine and deodar forest",
          "Soak in the panoramic views of the Dhauladhar and Pir Panjal ranges from Jalori Pass",
        ],
      },
      {
        title: "Shopping",
        icon: "e54c",
        items: [
          "Buy handicrafts and souvenirs like Kullvi Shawls, caps, and home decor items in Kasol and Manikaran",
          "Shop for woollen clothes in Manali",
        ],
      },
    ],
    seasonalHighlights: [
      "This trip is specially made for experiencing Himachali spring starting from late March to early June.",
      "You will see beautiful greenery, flowers blooming, and fruit blossoms all around.",
      "Help yourself to delicious Himachali apples, cherries, and local apple and plum cider if you visit any time between May and September.",
    ],
    faqs: [
      {
        question: "Will there be ATMs around?",
        answer:
          "There is an ATM in Kasol market but it rarely works so we wouldn't suggest you rely on it. Then there's one in Manikaran market and one in Jari. But we suggest you carry cash with you before entering Parvati Valley, ideally from Bhuntar (you'll avoid extra commision for cash transactions). You will also find ATMs in Manali.",
      },
      {
        question: "Will I be able to communicate well with the locals?",
        answer:
          "Yes, the locals know basic English and are fluent in Hindi. So if you know any of these languages, communicating the basics won't be an issue.",
      },
      {
        question: "Will I get good network connectivity?",
        answer:
          "You'll get good network connectivity in Kasol, Manali, and Jibhi. Getting good network signal in the more isolated, high-altitude regions, however, might be an issue.",
      },
      {
        question: "Do I need to carry any special equipment?",
        answer:
          "As you'll be travelling in the spring, just a hoodie or some warm clothes will suffice. Also carry a rain-jacket or umbrella along as intermittent rain is a common phenomenon in Himachal. Other than that, carry a flashlight, long socks for hiking and to stay warm, binoculars, a good camera for capturing the view, and most importantly — a power bank.",
      },
      {
        question: "Who do I call in an emergency?",
        answer:
          "Our travel buddies will always be a call away in case you need any help or guidance. For in-person support, here’s a list of locals who’ll be at your service in case of emergencies: Pankaj Sharma: 9459668084 Shantitrip Holidays Help Desk: 8219235768 Himachal Police : 01902265412 or 100",
      },
    ],
    tags: "",
  },

  {
    id: 1,
    name: "Essence of Himachal",
    days: 6,
    cost: 13200,
    themes: ["nature", "trekking", "culture", "leisure"],
    thumbnailUrl: "/images/trips/1.webp",
    gallery: ["/images/trips/1.webp"],
    description:
      "Astonishing, beautiful, colorful, delightful, energizing\u2026 we can find words starting with all letters of the alphabet and still fail to put the essence of Himachal in words. With this curated itinerary, along with the sights, the experiences, and the food, we hope to give you a taste of all that Himachal has to offer.",
    places: ["Kasol ", "Malana ", "Kutla ", "Tosh ", "Jibhi"],
    punchline: "An unforgettable trip awaits.",
    summary:
      "6 days and 5 nights of experiencing the inner peace and joy that nature offers (along with a few edibles, of course!). Get acquainted with Parvati Valley in Kasol, trek to Kutla for a starry night around the bonfire, wind down in Tosh while enjoying a panoramic view of the mountains, and finish your trip on a beautiful note with Jibhi.",
    schedule: [],
    tripFor: [
      "Nature and trek-lovers",
      "Foodies",
      "Those who want to tune off rest and recharge",
      "Groups of upto 6 friends",
    ],
    highlights: [
      "Party in kasol with a healthy dose of malana magic",
      "Enjoy a healing hot-water bath in manikaran and shop for handicrafts and souvenirs",
      "Trek to kutla\u2019s snowclad landscapes and stay overnight in a cozy wooden cottage",
      "Rest and relax in tosh and help yourself to some fresh and delicious home-cooked food",
      "Fish for trout in jibhi and experience total peace and solitude in tirthan valley",
    ],
    stay: ["Homestays", "Guesthouses", "Camps", "Cottages"],
    travel: ["Swift dzire", "Innova crysta"],
    food: [
      "Traditional veg. village cuisine",
      "Non-veg. pahadi cuisine",
      "Local delicacies native to himachal pradesh",
    ],
    features: [
      {
        title: "Rest and Relaxation",
        items: [
          "Explore underrated dhabas and food places in Himachal that only locals know about",
          "Rest relax and enjoy a panoramic view of the Himalayan range from Tosh",
          "Unwind in Jibhi surrounded by thick pine and deodar forest",
          "Soak in the panoramic views of the Dhauladhar and Pir Panjal ranges from Jalori Pass",
        ],
      },
      {
        title: "Shopping",
        items: [
          "Buy handicrafts and souvenirs like Kullvi Shawls caps and home decor items in Kasol and Manikaran",
        ],
      },
      {
        title: "Food ",
        items: [
          "Chill in cafes in Kasol. Enjoy Israeli and Tibetan cuisine or local Himachali delicacies like Siddu Rajma Chawal and Makke Di Roti and Sarso Da Saag",
          "Enjoy delicious parathas lassi roti sabzi chicken rice and dal with other tasty snacks in Tosh",
          "Explore underrated dhabas and food places in Himachal that only locals know about",
        ],
      },
    ],
    seasonalHighlights: [
      "This trip is specially made for experiencing Himachali spring starting from late March to early June.",
      "You will see beautiful greenery, flowers blooming, and fruit blossoms all around.",
      "Help yourself to delicious Himachali apples, cherries, and local apple and plum cider if you visit any time between May and September.",
    ],
    faqs: [
      {
        question: "Will there be ATMs around?",
        answer:
          "There is an ATM in the Kasol market but it rarely works so we wouldn\u2019t suggest you rely on it. Then there\u2019s one in Manikaran market and one in Jari. But we suggest you carry cash with you before entering Parvati Valley, ideally from Bhuntar (you\u2019ll avoid extra commission for cash transactions).",
      },
      {
        question: "Will I be able to communicate well with the locals?",
        answer:
          "Yes, the locals know basic English and are fluent in Hindi. So if you know any of these languages, communicating the basics won\u2019t be an issue.",
      },
      {
        question: "Will I get good network connectivity?",
        answer:
          "You\u2019ll get good network connectivity in Kasol, Tosh, and Jibhi. Getting good network signal in the more isolated, high-altitude regions like Kutla, however, might be an issue.",
      },
      {
        question: "Do I need to carry any special equipment?",
        answer:
          "As you\u2019ll be traveling in the spring, just a hoodie or some warm clothes will suffice. Also, carry a rain jacket or umbrella along with intermittent rain is a common phenomenon in Himachal. Other than that, carry a flashlight, long socks for hiking and to stay warm, binoculars, a good camera for capturing the view, and most importantly \u2014 a power bank.",
      },
      {
        question: "Who do I call in an emergency?",
        answer:
          "Our travel buddies will always be a call away in case you need any help or guidance. For in-person support, here\u2019s a list of locals who\u2019ll be at your service in case of emergencies:Pankaj Sharma: 9459668084Shantitrip Holidays Help Desk: 8219235768Himachal Police : 01902265412 or 100",
      },
    ],
    tags: "",
  },

  {
    id: 2,
    name: "Magical Himachal",
    days: 7,
    cost: 15400,
    themes: ["culture", "adventure", "sightseeing"],
    thumbnailUrl: "/images/trips/2.webp",
    gallery: ["/images/trips/2.webp"],
    description:
      "A trip for those who want a perfect mix of cultural sightseeing and adventure in Himachal Pradesh, with a little spice and a whole lot of magic!",
    places: ["Kasol ", "Malana ", "Solang valley ", "Kullu"],
    punchline: "Get charged up",
    summary:
      "These 7 days are going to be one hell of a ride. You\u2019ll start with Kasol and explore all that it\u2019s famous for (wink wink!) You\u2019ll follow it up with your trek to Magic Valley, paragliding or river-rafting in Kullu, exploring Solang Valley aka the mini-Switzerland of India, and finally, touring Manali \u2014 a paradise for romantics.",
    schedule: [],
    tripFor: [
      "A group of 4+ people",
      "Those who want a perfect balance of nature culture and adventure",
      "#420gang",
    ],
    highlights: [
      "Take long walks along the parvati river bank and trek to chalal village",
      "Bathe in the healing hot-water springs at manikaran and shop for souvenirs",
      "Trek to malana and breathe in some of its magic",
      "Try river-rafting or paragliding in kullu",
      "Explore solang valley the mini-switzerland of india",
      "Get photographed with yaks at hadimba temple in manali",
    ],
    stay: ["Homestay in kasol", "Guesthouse or hotel in manali"],
    travel: ["Toyota innova", "Force traveller"],
    food: [
      "Traditional veg. village cuisine",
      "Non-veg. pahadi cuisine",
      "Local delicacies native to himachal pradesh",
    ],
    features: [
      {
        title: "Rest and Relaxation",
        items: [
          "Spend lazy afternoons sitting by the Parvati River bank in Kasol",
          "Chill in cafes in Kasol. Enjoy Israeli and Tibetan cuisine or local Himachali delicacies like Siddu and Makke Di Roti and Sarso Da Saag",
          "Enjoy a healing hot water bath at Manikaran in the natural springs",
        ],
      },
      {
        title: "Shopping",
        items: [
          "Buy handicrafts and woollen clothing like Kullvi Shawls caps and home decor items in Kasol and Manikaran",
          "Shop for souvenirs in Manali",
        ],
      },
      {
        title: "Food ",
        items: [
          "Help yourself to some Siddu Momos and other delicious Himachali cuisine in Kasol and Manali",
          "Chill in cafes in Kasol. Enjoy Israeli and Tibetan cuisine or local Himachali delicacies like Siddu and Makke Di Roti and Sarso Da Saag",
        ],
      },
    ],
    seasonalHighlights: [
      "This trip is ideal for all seasons. Obviously, the experience changes with changing seasons. From December to mid-March, you can expect seeing a lot of snowclad landscapes.",
      "You\u2019ll also experience sub-zero temperatures with light to heavy snowfall, cloudy skies, and lots of wintry silence and quiet as locals are huddled up around the fireplace in the warmth and comfort of their homes.",
      "The vibe changes starting May as Himachal witnesses spring and you can see beautiful greenery, flowers blooming, and fruit blossoms all around.",
      "Help yourself to delicious Himachali apples, cherries, and local apple and plum cider if you visit between May and September.",
    ],
    faqs: [
      {
        question: "Will there be ATMs around? ",
        answer:
          "There is an ATM in Kasol market but it rarely works so we wouldn\u2019t suggest you rely on it. Then there\u2019s one in Manikaran market and one in Jari. But we suggest you carry cash with you before entering Parvati Valley, ideally from Bhuntar (you\u2019ll avoid extra commision for cash transactions). You will also find ATMs in Manali.",
      },
      {
        question: "Will I be able to communicate well with the locals?",
        answer:
          "Yes, the locals know basic English and are fluent in Hindi. So if you know any of these languages, communicating the basics won\u2019t be an issue.",
      },
      {
        question: "Will I get good network connectivity?",
        answer:
          "You\u2019ll get good network connectivity in Kasol, Tosh, and Kutla. Getting good network signal in the more isolated, high-altitude regions like Solang Valley, however, might be an issue.",
      },
      {
        question: "Do I need to carry any special equipment?",
        answer:
          "If you are travelling in the winter, thick woolen jackets and trekking gear will be a must. Also carry a rain-jacket or umbrella along as rains are expected this time around. Other than that, carry a flashlight, long socks for hiking and to stay warm, binoculars, a good camera for capturing the view, and most importantly \u2014 a power bank.",
      },
      {
        question: "Who do I call in an emergency?",
        answer:
          "Our travel buddies will always be a call away in case you need any help or guidance. For in-person support, here\u2019s a list of locals who\u2019ll be at your service in case of emergencies:Pankaj Sharma: 9459668084Shantitrip Holidays Help Desk: 8219235768Himachal Police : 01902265412 or 100",
      },
    ],
    tags: "",
  },

  {
    id: 3,
    name: "Shangri La",
    days: 8,
    cost: 17600,
    themes: ["adventure", "sightseeing", "culture"],
    thumbnailUrl: "/images/trips/3.webp",
    gallery: ["/images/trips/3.webp"],
    description:
      "A trip that offers you your very own tour of the paradise that is Himachal Pradesh. Explore all the places Himachal has earned its fame for \u2014 Shimla, Kullu, and Manali.",
    places: ["Shimla ", "Kasol ", "Old manali ", "Solang valley ", "Tosh"],
    punchline: "Prepare to be delighted.",
    summary:
      "These 8 days will see you embark on a special journey across Himachal. Starting off with the rich cultural heritage of Shimla, you will experience the freedom and relaxation of Kasol, the serenity of Tosh, and the beautiful vistas of Manali, all within an action-packed 8 days of adventure and fun. ",
    schedule: [],
    tripFor: [
      "A group of 6 people",
      "Those who want a perfect balance of nature culture and adventure",
      "Those who love shopping and sightseeing",
    ],
    highlights: [
      "Shop for woollens and handicrafts at mall road and lakkar bazaar in shimla",
      "Indulge in adventure activities in kufri",
      "Bathe in the healing hot-water springs at manikaran and shop for souvenirs",
      "Get a birds-eye view of parvati valley in tosh",
      "Rest and relax in the gorgeous apple orchards of old manali",
    ],
    stay: [
      "Homestay or guesthouse in shimla",
      "Homestay in kasol",
      "Guesthouse or cottage in old manali",
    ],
    travel: ["Toyota innova", "Force traveller "],
    food: [
      "Traditional veg. village cuisine",
      "Non-veg. pahadi cuisine",
      "Local delicacies native to himachal pradesh",
    ],
    features: [
      {
        title: "Rest and Relaxation",
        items: [
          "Spend lazy afternoons sitting by the Parvati River bank in Kasol",
          "Chill in cafes in Kasol. Enjoy Israeli and Tibetan cuisine or local Himachali delicacies like Siddu and Makke Di Roti and Sarso Da Saag",
          "Enjoy a healing hot water bath at Manikaran in the natural springs",
        ],
      },
      {
        title: "Shopping",
        items: [
          "Shop at Mall Road in Shimla",
          "Buy handicrafts and woollen clothing like Kullvi Shawls caps and home decor items in Kasol and Manikaran",
          "Shop for souvenirs in Manali",
        ],
      },
    ],
    seasonalHighlights: [
      "This trip is ideal for all seasons. Obviously, the experience changes with changing seasons.",
      "From December to mid-March, you can expect seeing a lot of snowclad landscapes.",
      "You\u2019ll also experience sub-zero temperatures with light to heavy snowfall, cloudy skies",
      "The vibe changes starting May as Himachal witnesses spring and you can see beautiful greenery & flowers blooming all around.",
    ],
    faqs: [
      {
        question: "Will there be ATMs around?",
        answer:
          "There is an ATM in Kasol market but it rarely works so we wouldn\u2019t suggest you rely on it. Then there\u2019s one in Manikaran market and one in Jari. But we suggest you carry cash with you before entering Parvati Valley, ideally from Bhuntar (you\u2019ll avoid extra commission for cash transactions). You will also find ATMs in Shimla and Manali.",
      },
      {
        question: "Will I be able to communicate well with the locals?",
        answer:
          "Yes, the locals know basic English and are fluent in Hindi. So if you know any of these languages, communicating the basics won\u2019t be an issue.",
      },
      {
        question: "Will I get good network connectivity?",
        answer:
          "You\u2019ll get good network connectivity in Kasol, Tosh, and Kutla. Getting good network signal in the more isolated, high-altitude regions like Solang Valley, however, might be an issue.",
      },
      {
        question: "Do I need to carry any special equipment?",
        answer:
          "If you are travelling in the winter, thick woolen jackets and trekking gear will be a must. Also carry a rain-jacket or umbrella along as rains are expected this time around. Other than that, carry a flashlight, long socks for hiking and to stay warm, binoculars, a good camera for capturing the view, and most importantly \u2014 a power bank.",
      },
      {
        question: "Who do I call in an emergency?",
        answer:
          "Our travel buddies will always be a call away in case you need any help or guidance. For in-person support, here\u2019s a list of locals who\u2019ll be at your service in case of emergencies:Pankaj Sharma: 9459668084Shantitrip Holidays Help Desk: 8219235768Himachal Police: 01902265412 or 100",
      },
    ],
    tags: "",
  },

  {
    id: 4,
    name: "Himachal Bloom",
    days: 7,
    cost: 15400,
    themes: ["adventure", "hippie", "culture", "nature"],
    thumbnailUrl: "/images/trips/4.webp",
    gallery: ["/images/trips/4.webp"],

    description:
      "Witness Himachal in all its springtime glory. Traverse the green, blooming landscapes of Kasol, Malana, Manali, and Jibhi. Explore previously uncharted places, food, and cultural experiences that this season of abundance has to offer.",
    places: [
      "Kasol ",
      "Malana ",
      "Manali ",
      "Solang valley ",
      "Rohtang tunnel ",
      "Jibhi ",
      "Tirthan valley ",
      "Serolsar lake",
    ],
    punchline: "The grass is greener on this side. Literally!",
    summary:
      "Spend 7 days and 6 nights exploring the vibrant and colorful spring landscapes of Himachal Pradesh. Take a breather from the claustrophobia and home-boundedness of 2020 and welcome 2021 with the fresh mountain air of Kasol, the magical air of Malana, the gorgeous mountain views of Manali, and the solitude of Jibhi.",
    schedule: [],
    tripFor: [
      "Youngsters hippies and nature lovers",
      "Those who like mediterranean weather",
      "Those who seek the perfect balance of nature and adventure",
      "Groups of upto 6 friends",
    ],
    highlights: [
      "Take long walks along the parvati river bank and chill at cafes in kasol",
      "Enjoy a healing hot-water bath in manikaran and shop for handicrafts and souvenirs",
      "Trek to malana to get a glimpse of local village life and experience the high of magic valley",
      "Help yourself to some delicious local street food in manali",
      "Get your adventure gear on in solang valley and visit atal tunnel the world\u2019s longest tunnel above 10000 ft.",
      "Fish for trout in jibhi",
    ],
    stay: ["Homestays", "Camps", "Cottages", "Gueshouses"],
    travel: ["Swift dzire", "Innova crysta"],
    food: [
      "Traditional veg. village cuisine",
      "Non-veg. pahadi cuisine",
      "Local delicacies native to himachal pradesh",
    ],
    features: [
      {
        title: "Rest and Relaxation",
        items: [
          "Spend a lazy afternoon sitting by the Parvati River bank in Kasol",
          "Chill in cafes in Kasol. Enjoy Israeli and Tibetan cuisine or local Himachali delicacies like Siddu Rajma Chawal and Makke Di Roti and Sarso Da Saag",
          "Enjoy a hot water bath at Manikaran \u2014 along with some leisurely shopping for handicrafts paintings and other artwork",
          "Unwind in Jibhi surrounded by thick pine and deodar forest",
          "Soak in the panoramic views of the Dhauladhar and Pir Panjal ranges from Jalori Pass",
        ],
      },
      {
        title: "Shopping",
        items: [
          "Buy handicrafts and souvenirs like Kullvi Shawls caps and home decor items in Kasol and Manikaran",
          "Shop for woollen clothes in Manali",
        ],
      },
    ],
    seasonalHighlights: [
      "This trip is specially made for experiencing Himachali spring starting from late March to early June.",
      "You will see beautiful greenery, flowers blooming, and fruit blossoms all around.",
      "Help yourself to delicious Himachali apples, cherries, and local apple and plum cider if you visit any time between May and September.",
    ],
    faqs: [
      {
        question: "Will there be ATMs around?",
        answer:
          "There is an ATM in Kasol market but it rarely works so we wouldn\u2019t suggest you rely on it. Then there\u2019s one in Manikaran market and one in Jari. But we suggest you carry cash with you before entering Parvati Valley, ideally from Bhuntar (you\u2019ll avoid extra commision for cash transactions). You will also find ATMs in Manali.",
      },
      {
        question: "Will I be able to communicate well with the locals?",
        answer:
          "Yes, the locals know basic English and are fluent in Hindi. So if you know any of these languages, communicating the basics won\u2019t be an issue.",
      },
      {
        question: "Will I get good network connectivity?",
        answer:
          "You\u2019ll get good network connectivity in Kasol, Manali, and Jibhi. Getting good network signal in the more isolated, high-altitude regions, however, might be an issue.",
      },
      {
        question: "Do I need to carry any special equipment?",
        answer:
          "As you\u2019ll be travelling in the spring, just a hoodie or some warm clothes will suffice. Also carry a rain-jacket or umbrella along as intermittent rain is a common phenomenon in Himachal. Other than that, carry a flashlight, long socks for hiking and to stay warm, binoculars, a good camera for capturing the view, and most importantly \u2014 a power bank.",
      },
      {
        question: "Who do I call in an emergency?",
        answer:
          "Our travel buddies will always be a call away in case you need any help or guidance. For in-person support, here\u2019s a list of locals who\u2019ll be at your service in case of emergencies:Pankaj Sharma: 9459668084Shantitrip Holidays Help Desk: 8219235768Himachal Police : 01902265412 or 100",
      },
    ],
    tags: "",
  },

  {
    id: 5,
    name: "Hippie in HP",
    days: 6,
    cost: 13200,
    themes: ["hippie", "adventure", "culture", "nature"],
    thumbnailUrl: "/images/trips/5.webp",
    gallery: ["/images/trips/5.webp"],
    description:
      "Calling all stoners! If getting high and partying is what\u2019s on your mind, this is the perfect trip for you. Spend 6 glorious days vibing in Himachal \u2014 surrounded by the natural beauty and serenity of the mountains, its valleys, its springs, and its waterfalls.",
    places: [
      "Kasol ",
      "Serolsar lake ",
      "Malana  ",
      "Tirthan valley ",
      "Tosh ",
      "Jibhi ",
      "Kheer ganga",
    ],
    punchline: "Let\u2019s get this party started, shall we?",
    summary:
      "Spend 6 days and 5 nights exploring the higher realms of consciousness as you tour the vibrant and colorful spring landscapes of Himachal Pradesh. Vibe in the fresh mountain air of Kasol, the magical air of Malana, the mountains and waterfalls of Tosh, and the solitude of Jibhi.",
    schedule: [],
    tripFor: [
      "Hippies and stoners",
      "Nature lovers",
      "Those who want to tune off rest and recharge",
      "Groups of upto 6 friends",
    ],
    highlights: [
      "Party in kasol with a healthy dose of malana magic",
      "Enjoy a healing hot-water bath in manikaran and shop for handicrafts and souvenirs",
      "Trek to kheerganga's open skies and vast greenery and enjoy a rejuvenating bath in the hot spring water",
      "Trek to malana to get a glimpse of local village life and experience the high of magic valley",
      "Visit tosh waterfall and enjoy the panoramic mountain view",
      "Fish for trout in jibhi and experience total peace and solitude in tirthan valley",
    ],
    stay: ["Homestays ", "Guesthouses ", "Camps", " cottages"],
    travel: ["Swift dzire", "Innova crysta"],
    food: [
      "Traditional veg. village cuisine",
      "Non-veg. pahadi cuisine",
      "Local delicacies native to himachal pradesh",
    ],
    features: [
      {
        title: "Rest and Relaxation",
        items: [
          "Spend a lazy afternoon sitting by the Parvati River bank in Kasol",
          "Heal your body mind and soul in the hot springs after a long and hard trek to Kheerganga",
          "Rest relax and enjoy the 360\u00b0 view of the Himalayan range from Tosh",
          "Unwind in Jibhi surrounded by thick pine and deodar forest",
          "Soak in the panoramic views of the Dhauladhar and Pir Panjal ranges from Jalori Pass",
        ],
      },
      {
        title: "Shopping",
        items: [
          "Buy handicrafts and souvenirs like Kullvi Shawls caps and home decor items in Kasol and Manikaran",
        ],
      },
      {
        title: "Adventure",
        items: [
          "Party with music drinks and delicious homecooked food in Kasol and Tosh",
          "Relish a snow and music-filled gypsy ride from Kasol to Tosh with plenty of photoshoot opportunities along the way",
          "Get high in Magic Valley and bring some of it back to your room ;)",
        ],
      },
    ],
    seasonalHighlights: [
      "This trip is specially made for experiencing Himachali spring starting from late March to early June.",
      "You will see beautiful greenery, flowers blooming, and fruit blossoms all around.\u00a0",
      "Help yourself to delicious Himachali apples, cherries, and local apple and plum cider if you visit any time between May and September.",
    ],
    faqs: [
      {
        question: "Will there be ATMs around?",
        answer:
          "There is an ATM in Kasol market but it rarely works so we wouldn\u2019t suggest you rely on it. Then there\u2019s one in Manikaran market and one in Jari. But we suggest you carry cash with you before entering Parvati Valley, ideally from Bhuntar (you\u2019ll avoid extra commission for cash transactions).",
      },
      {
        question: "Will I be able to communicate well with the locals?",
        answer:
          "Yes, the locals know basic English and are fluent in Hindi. So if you know any of these languages, communicating the basics won\u2019t be an issue.",
      },
      {
        question: "Will I get good network connectivity?",
        answer:
          "You\u2019ll get good network connectivity in Kasol, Tosh, and Jibhi. Getting good network signal in the more isolated, high-altitude regions, however, might be an issue.",
      },
      {
        question: "Do I need to carry any special equipment?",
        answer:
          "As you\u2019ll be traveling in the spring, just a hoodie or some warm clothes will suffice. Also carry a rain jacket or umbrella along as intermittent rain is a common phenomenon in Himachal. Other than that, carry a flashlight, long socks for hiking and to stay warm, binoculars, a good camera for capturing the view, and most importantly \u2014 a power bank.",
      },
      {
        question: "Who do I call in an emergency?",
        answer:
          "Our travel buddies will always be a call away in case you need any help or guidance. For in-person support, here\u2019s a list of locals who\u2019ll be at your service in case of emergencies:Pankaj Sharma: 9459668084Shantitrip Holidays Help Desk: 8219235768Himachal Police : 01902265412 or 100",
      },
    ],
    tags: "",
  },

  {
    id: 6,
    name: "High in Himalayas",
    days: 7,
    cost: 15400,
    themes: ["offseason", "relaxation", "snow"],
    thumbnailUrl: "/images/trips/6.webp",
    gallery: ["/images/trips/6.webp"],
    description:
      "Start 2021 on a chill note with a visit to the snowclad landscapes of Kasol, Tosh, and Kutla. Witness the majesty of the magnificent Himalayas as you go on snow-treks amidst gushing waterfalls, pine trees, and a serene and relatively tourist-free landscape.",
    places: ["Kasol ", "Tosh ", "Kutla ", "Budhaban"],
    punchline: "Snow Treks and Solitude.",
    summary:
      "Spend 6 nights and 7 days exploring the pristine white, snowclad landscapes of Himachal Pradesh. Take a breather from the claustrophobia and home-boundedness of 2020 and welcome 2021 with the fresh mountain air of Kasol, the gorgeous views of Tosh and the rustic village life of Kutla and Buddhaban.",
    schedule: [],
    tripFor: [
      "Youngsters and snow-trek lovers",
      "Those who like fewer tourists",
      "Those who seek the perfect balance of leisure and adventure",
      "Groups of 8-9 friends on a long-pending trip",
    ],
    highlights: [
      "Take long walks along the parvati river bank and chill at cafes in kasol",
      "Enjoy a healing hot-water bath in manikaran and shop for souvenirs",
      "Explore tosh village and get a birds-eye view of parvati valley",
      "Trek your way in the snow to kutla amidst beautiful waterfalls",
      "Bask in the solitude and silence of the peaceful buddhaban",
    ],
    stay: [
      "Homestay in kasol",
      "Guesthouse in tosh",
      "Camps in kutla and buddhaban",
    ],
    travel: ["Force traveller", "Toyota etios", "Swift dzire"],
    food: [
      "Traditional veg. village cuisine",
      "Non-veg. pahadi cuisine",
      "Local delicacies native to himachal pradesh",
    ],
    features: [
      {
        title: "Rest and Relaxation",
        items: [
          "Spend lazy afternoons sitting by the Parvati River bank in Kasol",
          "Chill in cafes in Kasol and Bir. Enjoy Israeli and Tibetan cuisine or local Himachali delicacies like Siddu and Makke Di Roti and Sarso Da Saag",
          "Enjoy a hot water bath at Manikaran \u2014 along with some leisurely shopping for handicrafts paintings and other artwork",
          "Spend a quiet winter night around the bonfire in Kutla",
        ],
      },
      {
        title: "Shopping",
        items: [
          "Buy handicrafts and souvenirs like Kullvi Shawls caps and home decor items in Kasol and Manikaran",
          "Buy trekking equipment in Tosh",
        ],
      },
      {
        title: "Adventure",
        items: [
          "Relish a snow and music-filled gypsy ride from Kasol to Tosh with plenty of photoshoot opportunities along the way",
          "Trek 3 km to Kutla from Tosh amidst spectacular views of the Himalayan mountain ranges and gushing waterfalls",
          "Test your ice-skating skills in Buddhaban",
        ],
      },
    ],
    seasonalHighlights: [
      "This trip is specially made for experiencing Himachali winters starting from mid-December to late-February.",
      "You\u2019ll likely experience sub-zero temperatures with light to heavy snowfall, cloudy skies,",
      "and lots of wintry silence and quiet as locals are huddled up around the fireplace in the warmth and comfort of their homes.",
    ],
    faqs: [
      {
        question: "Will there be ATMs around?",
        answer:
          "There is an ATM in Kasol market but it rarely works so we wouldn\u2019t suggest you rely on it. Then there\u2019s one in Manikaran market and one in Jari. But we suggest you carry cash with you before entering Parvati Valley, ideally from Bhuntar (you\u2019ll avoid extra commision for cash transactions). The higher up you go in the snow, the lesser the chances of finding an ATM. Especially as it\u2019s the winter and roads tend to be blocked.",
      },
      {
        question: "Will I be able to communicate well with the locals?",
        answer:
          "Yes, the locals know basic English and are fluent in Hindi. So if you know any of these languages, communicating the basics won\u2019t be an issue.",
      },
      {
        question: "Will I get good network connectivity?",
        answer:
          "You\u2019ll get good network connectivity in Kasol, Tosh, and Kutla. Getting good network signal in the more isolated, high-altitude regions, however, might be an issue.",
      },
      {
        question: "Do I need to carry any special equipment?",
        answer:
          "As you\u2019ll be travelling in the winter, thick woolen jackets and trekking gear will be a must. Also carry a rain-jacket or umbrella along as rains are expected this time around. Other than that, carry a flashlight, long socks for hiking and to stay warm, binoculars, a good camera for capturing the view, and most importantly \u2014 a power bank.",
      },
      {
        question: "Who do I call in an emergency?",
        answer:
          "Our travel buddies will always be a call away in case you need any help or guidance. For in-person support, here\u2019s a list of locals who\u2019ll be at your service in case of emergencies:Pankaj Sharma: 9459668084Shantitrip Holidays Help Desk: 8219235768Himachal Police : 01902265412 or 100",
      },
    ],
    tags: "",
  },

  {
    id: 7,
    name: "ShantiTrip Special",
    days: 6,
    cost: 13200,
    themes: ["offseason", "adventure", "relaxation", "snow"],
    thumbnailUrl: "/images/trips/7.webp",
    gallery: ["/images/trips/7.webp"],
    description:
      "A trip for those who want to enjoy complete leisure and relaxation with little activity, while enjoying all the beauty and serenity Himachal has to offer.",
    places: ["Parashar lake ", "Tosh ", "Kasol"],
    punchline: "Rest and reboot.",
    summary:
      "Spend 5 nights and 6 days in utter peace and quiet. Relax and laze around in Kasol, get a birds-eye view of Parvati Valley in Tosh, and experience a meditative stillness and silence along with a 360\u00b0 view of the Himalayan mountain range at Parashar Lake.",
    schedule: [],
    tripFor: [
      "#420gang",
      "Those who want to chill and relax with friends more than sightseeing",
      "Those who prefer sitting by the river over shopping",
      "Those who enjoy natural peace and quiet over loud parties",
    ],
    highlights: [
      "Take long walks along the parvati river bank and chill at cafes in kasol",
      "Enjoy a healing hot-water bath in manikaran and shop for souvenirs",
      "Explore tosh village and get a birds-eye view of parvati valley",
      "Breathe in the silence and serenity of prashar",
    ],
    stay: ["Homestay in kasol", "Guesthouse in tosh", "Snow camps in prashar"],
    travel: ["Toyota innova", "Force traveller"],
    food: [
      "Traditional veg. village cuisine",
      "Non-veg. pahadi cuisine",
      "Local delicacies native to himachal pradesh",
    ],
    features: [
      {
        title: "Rest and Relaxation",
        items: [
          "Spend lazy afternoons sitting by the Parvati River bank in Kasol",
          "Chill in cafes in Kasol. Enjoy Israeli and Tibetan cuisine or local Himachali delicacies like Siddu and Makke Di Roti and Sarso Da Saag",
          "Enjoy a hot water bath at Manikaran \u2014 along with some leisurely shopping for handicrafts paintings and other artwork",
          "Spend a quiet winter night around the bonfire in Prashar",
        ],
      },
      {
        title: "Shopping",
        items: [
          "Buy handicrafts and souvenirs like Kullvi Shawls caps and home decor items in Kasol and Manikaran",
          "Buy trekking equipment in Tosh",
        ],
      },
      {
        title: "Adventure",
        items: [
          "Enjoy an easy 3 km snow-trek to Kutla from Tosh amidst spectacular views of the Himalayan mountain ranges and gushing waterfalls",
        ],
      },
    ],
    seasonalHighlights: [
      "This trip is specially made for experiencing Himachali winters starting from mid-December to late February.",
      "You\u2019ll likely experience sub-zero temperatures with light to heavy snowfall, cloudy skies",
      ", and lots of wintry silence and quiet as locals are huddled up around the fireplace in the warmth and comfort of their homes",
    ],
    faqs: [
      {
        question: "Will there be ATMs around?",
        answer:
          "There is an ATM in Kasol market but it rarely works so we wouldn\u2019t suggest you rely on it. Then there\u2019s one in Manikaran market and one in Jari. But we suggest you carry cash with you before entering Parvati Valley, ideally from Bhuntar (you\u2019ll avoid extra commision for cash transactions). The higher up you go in the snow, the lesser the chances of finding an ATM. Especially as it\u2019s the winter and roads tend to be blocked.",
      },
      {
        question: "Will I be able to communicate well with the locals?",
        answer:
          "Yes, the locals know basic English and are fluent in Hindi. So if you know any of these languages, communicating the basics won\u2019t be an issue.",
      },
      {
        question: "Will I get good network connectivity?",
        answer:
          "You\u2019ll get good network connectivity in Kasol, Tosh, and Kutla. Getting good network signal in the more isolated, high-altitude regions like Prashar, however, might be an issue.",
      },
      {
        question: "Do I need to carry any special equipment?",
        answer:
          "As you\u2019ll be travelling in the winter, thick woolen jackets and trekking gear will be a must. Also carry a rain-jacket or umbrella along as rains are expected this time around. Other than that, carry a flashlight, long socks for hiking and to stay warm, binoculars, a good camera for capturing the view, and most importantly \u2014 a power bank.",
      },
      {
        question: "Who do I call in an emergency?",
        answer:
          "Our travel buddies will always be a call away in case you need any help or guidance. For in-person support, here\u2019s a list of locals who\u2019ll be at your service in case of emergencies:Pankaj Sharma: 9459668084Shantitrip Holidays Help Desk: 8219235768Himachal Police : 01902265412 or 100",
      },
    ],
    tags: "",
  },

  {
    id: 8,
    name: "Manali Weekender",
    days: 5,
    cost: 11000,
    themes: ["backpackers", "solo", "trekking", "adventure"],
    thumbnailUrl: "/images/trips/8.webp",
    gallery: ["/images/trips/8.webp"],
    description:
      "A perfect escape for those long, extended weekends where you just want to get together with your friends, spouse or family along with a change of air and scenery.",
    places: ["Manali ", "Solang valley ", "Rohtang pass"],
    punchline: "Rest and reboot.",
    summary:
      "Spend 3 nights and 4 days exploring Manali \u2014 one of India\u2019s favorite travel destinations. Take a breather from your hectic work life to revel in the fresh mountain air of Old Manali, gorgeous landscapes of Solang, and the chilly weather and snows of Rohtang.",
    schedule: [],
    tripFor: [
      "Long weekends",
      "Group size of 2-6 people",
      "Vacation outings with friends or family",
    ],
    highlights: [
      "Get your photos clicked with furry yaks outside the hadimba temple",
      "Bathe in the hot water springs of vashisht",
      "Explore the gorgeous solang valley with its scenic backdrops great spot for photography/photoshoots and adventure activities",
      "Play in the snow at rohtang pass",
    ],
    stay: [
      "3- to 5-star hotels",
      "Camp stays",
      "Home stays (stay with locals)",
    ],
    travel: ["Cars (recommended)", "Tempo travellers", "Ac volvo buses"],
    food: ["Vegetarian/non-vegetarian", "Total 8 meals (customizable)"],
    features: [
      {
        title: "Rest and Relaxation",
        items: ["", ""],
      },
      {
        title: "Shopping",
        items: [
          "Buy handicrafts and souvenirs woven and sold at the Gadhan Thekchoking Gompa monastery near the Mall which is the main shopping hub in Manali. Make sure you have someone with you who\u2019s good at bargaining!",
          "Gorge on fresh fruits while buying jams and pickles for home. All produced locally from Manali\u2019s lovely fruit orchards.",
          "Try the local apple cider and fruit wines which are known not to have any hangover effects!",
        ],
      },
      {
        title: "Adventure",
        items: ["", ""],
      },
    ],
    seasonalHighlights: [
      "December to February is the best time to visit if you wish to experience the snow and snowfall.",
      "However, if you\u2019re planning to travel between March to June, you\u2019ll see Manali in its full blooming glory, with beautiful flowers, lots of greenery, and milder weather between 10\u00b0C-25\u00b0C.",
      "December to February is the best time to visit if you wish to experience the snow and snowfall.",
      "However, if you\u2019re planning to travel between March to June, you\u2019ll see Manali in its full blooming glory, with beautiful flowers, lots of greenery, and milder weather between 10\u00b0C-25\u00b0C.",
      "December to February is the best time to visit if you wish to experience the snow and snowfall.",
      "However, if you\u2019re planning to travel between March to June, you\u2019ll see Manali in its full blooming glory, with beautiful flowers, lots of greenery, and milder weather between 10\u00b0C-25\u00b0C.",
    ],
    faqs: [
      {
        question: "Will there be ATMs around?",
        answer:
          "Yes, Manali has plenty of ATMs so you can collect and keep cash on you while in Manali and use it for when you visit Solang and Rohtang.",
      },
      {
        question: "Will I be able to communicate well with the locals?",
        answer:
          "Yes, the locals know basic English and are fluent in Hindi. So if you know any of these languages, communicating the basics won\u2019t be an issue.",
      },
      {
        question: "Will I get good network connectivity?",
        answer:
          "You\u2019ll get good network connectivity in Manali. Getting good network signal in the more isolated, hilly areas however, might be an issue.",
      },
      {
        question: "Who do I call in an emergency?",
        answer:
          "Our travel buddies will always be a call away in case you need any help or guidance. For in-person support, here\u2019s a list of locals who\u2019ll be at your service in case of emergencies:Pankaj Udhaas: +91 9459668084Giglu Sharma: +91 86543774961Local Police: 100",
      },
    ],
    tags: "",
  },

  //Magic Manali
  {
    id: 9,
    name: "Magic Manali",
    days: 7,
    cost: 7999,
    themes: ["religious", "hippie", "heritage", "group"],
    thumbnailUrl: "/images/trips/2.webp",
    gallery: [""],
    description:
      "You will move on to Manali, doing activities such as rafting and paragliding in Kullu, and relaxing at your stay. You will also get to visit Solang Valley, Rohtang Tunnel, Sissu, Hadimba Temple, Vashisht hot spring, Manu temple, Mall road, Old manali streets and Club house.",
    schedule: [
      "Start from chd/delhi overnight journey to kasol.",
      "Local kasol market, chalal,manikaran and cafes in kasol",
      "Trek to malana and then come back by evening to homestay .bonfire and smoke up hours",
      "Move to manali  doing rafting and paragliding at kullu ,rest and relax at staying place",
      "Visit solang valley ,rohtang tunnel,siisu and thencome back by evening to manali and visit localmarket for its famouscafes and night parties.",
      "Visit naggar castlelocal manali market ,pizzas at italian pizzeria in nagger and then in evening start overnight journey toyourplaces",
      "At your starting point",
    ],
    places: [
      "Kasol Chalal",
      "Manikaran",
      "Tosh",
      "Malana",
      "kullu",
      "Naggar",
      "Manali",
      "Solang valley",
      "Rohtang tunnel",
      "Sissu",
      "Hadimba Temple",
      "Vashisht hot spring",
      "Manu temple",
      "Mall road",
      "Old manali streets",
      "Club house",
    ],
    punchline: "Experience the magic of the mountains in Manali",
    summary:
      "The Magic Manali trip is a 7-day adventure filled with rest and relaxation, shopping, and adventure. The trip starts with an overnight journey from Delhi/Chandigarh to Kasol where you will be able to visit the local market, Chalal, Manikaran and enjoy the cafes. The next day you will trek to Malana and come back by evening to your homestay for a bonfire and smoke up session",
    tripFor: ["4 Group Members", "6 Group Members", "8 Group Members"],
    highlights: [
      "Visit hippie market of kasol",
      "To have relaxing hours by sitting along the bank of parvati river ",
      "Bonfire and musical nights with smoke up sessions",
      "Hot spring bath at manikaran or vashisht temple in manali",
      "Snow activities in solang valley",
      "Heritage visit to castle",
      "Evening walk at manali mall road",
      "Visit to rohtang tunnel,Paragliding or rafting at kullu",
    ],
    stay: [
      "Homestay in Kasol(DOP) - 2Nights",
      "Guest house or hotel in manali (DOP) - 2Nights",
    ],
    travel: ["Innova", "Traveller"],
    food: [
      "Siddu the most famous local food is available at differentplaces around the valley",
      "Non veg momosin kasol and kullu market",
      "Thupka at jari and kullu and manali",
      "Trout fish in kasol and manali",
      "Rest all of food is available at respected places where stay is provided",
    ],
    features: [
      {
        title: "Rest and Relaxation",
        items: [
          "Parvati river bank with its magical sound is best place to relax",
          "Rooftop cafes of your staying places",
          "Cafes in old manali hippie market",
          "Kasol nature park",
        ],
      },
      {
        title: "Shopping",
        items: [
          "Kasol market for hippie stuff",
          "Bhuntar for shopping complex which is having general stores of all daily needs",
          "Manikaran market",
          "kullu market kullvi shawls and caps and handmade wooden material for decor and kitchen",
        ],
      },
      {
        title: "Adventure",
        items: [
          "Snowtrek to malana",
          "Zypsy ride from kasol to nirang",
          "Paragliding at kullu",
          "River rafting at kullu",
          "Zypsy safari to solang valley",
        ],
      },
      {
        title: "Art and Culture",
        items: [
          "heritage jamdagni rishi ji temple in malan and old traditional houses and living styleof peoples who presumes that they belongs to a different territory or country",
          "Kasol nature park representing the cultural view of mountains and their life style",
          "Manikaran gurudwara saheb and view of its historical facts",
          "To buy traditional stuff for decor and also woolens from the manikaran market",
          "Van bihar in manali,manali mall road for its different cultural outlooks",
          "Naggar castle for its historical beauty",
          "Raurik museum",
          "Monestry in manali",
          "Woolen shawls showrrom in kullu and manali",
        ],
      },
    ],
    seasonalHighlights: [""],
    faqs: [
      {
        question: "",
        answer: "",
      },
    ],
    tags: "",
  },

  
  {
    id: 10,
    name: "Paradise in the Hills",
    days: 6,
    cost: 6999,
    themes: ["nature", "relaxation", "hippie", "religious"],
    thumbnailUrl: "/images/trips/2.webp",
    gallery: [""],
    description:
      "This 6 day trip takes you to the picturesque valleys of Kasol and Manali, where you can experience the beauty of nature and culture. The journey begins with an overnight trip from Delhi/Chandigarh to Kasol, where you can explore the local market, visit the charming village of Chalal, and enjoy the relaxing atmosphere of cafes along the banks of the Parvati River",
    places: [
      "Kasol",
      "Chalal",
      "Manikaran",
      "Tosh",
      "Kullu",
      "Electric mahadev temple",
      "Manali",
      "Solangvalley",
      "Rohtang tunnel",
      "Naggar castle",
    ],
    punchline:
      "Discover the hidden gems of the Himalayas with our Kasol-Manali adventure tour, where you'll experience the best of nature, culture, and relaxation!",
    summary:
      "As you move on to Manali, you will get to experience a small trek to the powerful Electric Mahadev Temple and take a stroll through the lush Vanbihar forest, perfect for photography. In Manali, you can indulge in adventure activities like snow trekking and paragliding, visit popular places like Solang Valley, Rohtang Tunnel, and Naggar Castle. Additionally, you can explore the local market, try traditional foods and even enjoy the night parties and bonfire at the old Manali cafes.",
    schedule: [
      "Start from chd/delhi overnight journey to kasol.",
      "Local kasol market, chalal, and cafes in kasol",
      "Visit manikaran and then   tosh for a day trip ,come back by evening to homestay .bonfire and smoke up hours",
      "Move to manali by doing a small trek to most spritual and powerfull shiva temple that is electric mahadev temple on the way to manali ,evening walk to mall road through vanbihar which is covered with thick forest and best place for photography, and then thencome back by evening to manali and visit localmarket for its famouscafes and night parties.",
      "Visit solang valley ,rohtang tunnel,siisu and visit naggar castlelocal manali market ,pizzas at italian pizzeria in nagger and then in evening start overnight journey toyourplaces.",
      "In the morning at your starting point.",
    ],
    tripFor: ["Group of 5", "Group of 6"],
    highlights: [
      "Visit hippie market of kasol",
      "To have relaxing hours by sitting along the bank of parvati river ",
      "bonfire and musical nights with smoke up sessions ",
      "hot spring bath at manikaran or vashisht temple inmanali",
      "snow activities in solang valley",
      "heritage visit to castle",
      "evening walk at manalimall road",
      "visit to rohtang tunnel",
      "trek toelectric mahadev temple",
    ],
    stay: [
      "Homestay in kasol (DOP) -2Nights",
      "Guest house in old manali (DOP)-1Night",
    ],
    travel: ["Innova", "Marazzo"],
    food: [
      "Siddu the most famous local food is available at differentplaces around the valley",
      "Non veg momosin kasol and kullu market",
      "Thupka at jari and kullu and manali",
      "Trout fish in kasol and manali",
      "Rest all of food is available at respected places where stay is provided",
    ],
    features: [
      {
        title: "Rest and Relaxation",
        items: [
          "Parvati river bank with its magical sound is best place to relax",
          "Rooftop cafes of your staying places",
          "Cafes in old manali hippie markt",
        ],
      },
      {
        title: "Shopping",
        items: [
          "Kasol market for hippie stuff",
          "Bhuntar for shopping complex which is having general stores of all daily needs ",
          "Manikaran market",
          "Kullu market  kullvi shawls and caps and handmade wooden material for decor and kitchen",
        ],
      },
      {
        title: "Adventure",
        items: [
          "Snowtrek to malana",
          "Zypsy ride from kasol to nirang",
          "Paragliding at kullu",
          "River rafting at kullu",
          "Zypsy safari to solang valley",
        ],
      },
      {
        title: "Art and Culture",
        items: [
          "Kasol nature park representing the cultural view of mountains and their life style.",
          "Manikaran gurudwara saheb and view of its historical facts",
          "To buy traditional stuff for decor and also woolens from the manikaran market,Van bihar in manali,manali mall road for its different cultural outlooks,naggar castle for its historical beauty,raurik museum,monestry in manali.",
          "Woolen shawls showrrom in kullu and manali",
        ],
      },
    ],
    seasonalHighlights: [""],
    faqs: [
      {
        question: "",
        answer: "",
      },
    ],
    tags: "",
  },

  {
    id: 11,
    name: "Parvati Paradise",
    days: 6,
    cost: 7999,
    themes: ["culture", "hippie", "trekking", "adventure"],
    thumbnailUrl: "/images/trips/2.webp",
    gallery: [""],
    description:
      "This trip takes you on an adventure through the beautiful landscapes of Himachal Pradesh, starting with an overnight journey from Delhi or Chandigarh to Kasol. You will have the opportunity to relax and explore the hippie market of Kasol, take a hot spring bath at Manikaran or Kheerganga, go on a snow trek to Kheerganga, and enjoy a 360 view of the Sar Pass mountains from Tosh",
    places: [
      "Kasol",
      "Chalal",
      "Manikaran",
      "Barshaini",
      "Kalga",
      "Rudranag",
      "Nakthan",
      "Kheerganga",
      "Tosh",
    ],
    punchline:
      "Experience the beauty of the Himalayas and the thrill of adventure",
    summary:
      "You will also have the opportunity to visit the cultural market of Manikaran and do some shopping for traditional Himachali products. The trip includes stays at a homestay, guest house, and camps, and you will have the chance to enjoy music and bonfire nights, as well as smoke up sessions.",
    schedule: [
      "Starting overnight  journey from delhi /chandigarh to kasol",
      "Arrival at kasol rest and relax on parvati river side garden. Visit ktagla ,chalalandkasol market in the evening, bonfire and msucialparty in the night with smoke up hours in the night.",
      "Start towards barshaini from where trek to kheerganga starts,by evening arriving in the camps at kheerganga,hot spring shower at kheergnga(either evening or morning),bonfire and star gazing nights at kheerganga.",
      "Trek down back to barshaini covering rudranag and nakthan village or covering kalga pulga.and then go to tosh by evening to havve sun set viewfrom the guest house and rest with 360 mountain view and have inhouse nusical party with indoor heating system followed by smoke up hours.",
      "Come back to kasol by covering manikaran and do shopping in the cultural market of manikaran and hippie market of kasol. Leave to delhi/chandiagrh by evening followed by overnight journey",
      "Back to yourplaces,safe and sound.",
    ],
    tripFor: ["Atleast 6 members"],
    highlights: [
      "Visit hippie market of kasol",
      "To have relaxing hours by sitting along the bank of parvati river",
      "Bonfire and musical nights with smoke up sessions ",
      "Hot spring bath at manikaran or kheerganga",
      "Snow trek to kheeerganga",
      "360* view of sar pass mountains from tosh",
      "Freezed tosh water fall",
      "Zypsy snow ride from barshaini to tosh",
    ],
    stay: [
      "Homestay in kasol(DOP) -1Night",
      "Camps in kheerganga (freedom camps)-1Night",
      "Guest house in tosh (DOP)-1Night",
    ],
    travel: ["Force traveller", "Innova"],
    food: [
      "Street food in kasol market or cafes",
      "Local dishes in manikaran and barshaini",
      "Veg/non veg food at your stays will be available",
      "Though while trekking you can carry energy bars and other necessary things",
    ],
    features: [
      {
        title: "Rest and Relaxation",
        items: [
          "Rest at homestay, and then enjoy the scenic view of parvati river",
          "Having smokeup hours in the jungle along river side",
          "Relax in thick pine forests of kutla and having sunbath  all the day",
          "Relax at the top of tosh mountains with a 360 view and to do star gazing in the night",
        ],
      },
      {
        title: "Shopping",
        items: [
          "Kasol market for hippie stuff",
          "Bhuntar for shopping complex which is having general stores of all daily needs",
          "Manikaran market for  kullvi shawls and caps and handmade wooden material for decor and kitchen",
          "Also you can rent shoes for treks at kasol and manikaran or also at barshaini ",
          "Also you can get wooden sticks for trek at barshaini",
        ],
      },
      {
        title: "Adventure",
        items: [
          "11km snow trek to kheerganga ",
          "Zypsy snow ride from kasol to barshaini",
        ],
      },
      {
        title: "Art and Culture",
        items: [
          "Kasol nature park representing the cultural view of mountains and their life style",
          "Manikaran gurudwara saheb and view of its historical facts",
          "To buy traditional stuff for decor and also woolens from the manikaran market",
          "To visit kutla  village for its old traditional houses and to know about the cultural aspects of the historical village and their daily life",
        ],
      },
    ],
    seasonalHighlights: [""],
    faqs: [
      {
        question: "",
        answer: "",
      },
    ],
    tags: "",
  },

  
  {
    id: 12,
    name: "Kasol Prashar Trip",
    days: 8,
    cost: 13200,
    themes: ["backpackers", "trekking", "adventure", "culture"],
    thumbnailUrl: "/images/trips/2.webp",
    gallery: [""],
    description:
      "You will also get a chance to explore the local culture and traditional food in places like Mandi, Palampur, Dharamshala, McLeod Ganj and more. The trip also includes overnight stays in a homestay, camps, guest houses, and hotels, giving you a chance to experience a variety of accommodation options. The trip ends with an overnight journey back to your starting destination",
    places: [
      "Kasol",
      "Tosh",
      "Manikaran",
      "Kalga",
      "Pulga",
      "Prashar rishi temple",
      "Mandi gandhi market",
      "Jogindar nagar",
      "Baijnath",
      "Palampur",
      "Bir billing",
      "Dharamshala",
      "Mecleodgunj",
      "Dharamkot",
      "Bhagsu",
      "Naddi",
      "Dalai lama temple",
    ],
    punchline:
      "Experience the best of Himachal Pradesh: from trekking in the mountains to paragliding and exploring local markets, on this 8-day adventure",
    summary:
      "This is an 8-day trip to Himachal Pradesh, India, visiting places such as Kasol, Prashar, Tosh, Manikaran, and other places. The trip includes activities such as local market visits, trekking, paragliding, and experiencing local culture and food. Suitable for a group of 6 people, the trip includes overnight stays in a homestay, camps, guest houses, and hotels, and transportation by Innova and Force Traveller vehicles. Trip highlights include the hippie market of Kasol, trekking to Prashar Lake, paragliding at Bir Billing and Tibetan culture in Dharamshala and McLeod Ganj.",
    schedule: [
      "Overnight journey from Delhi/Chandigarh",
      "Arrival at kasol, roam around local market,and cafes",
      "Visit manikaran and tosh village and also kalga pulga,tulga ,come back to homestay by evening.",
      "Early morning start to prashar lake from kasol and then trek to prashar for 6 hours ,stay in camps and bonfire.",
      "Leave for bir billing,to do paragliding ,stay in guest house.",
      "Leave for mecleodgunj and roam around stay in hotel",
      "Visit dharamkot and tibtean food market and also tibtean clothing market. Leave for your places by overnight journey",
      "Arrival at your starting destination.",
    ],
    tripFor: ["Group of 6"],
    highlights: [
      "Hippie market of kasol and trippy cafes",
      "Hotsprings in manikaran",
      "Snow capped mountains with 360 view in tosh",
      "Local life style in pulga",
      "Trek to prashar lake and star gazing in the night",
      "Ghandi bazzar mandi",
      "Oldest shiva temple at baijnath",
      "Tea estates in palampur",
      "Pragliding take off and landing site at billing",
      "Hpca cricket stadium dharamshala",
      "Tibtean market in meclo",
      "Bhagsu water fall .",
    ],

    stay: [
      "Homestay in kasol 2Nights",
      "Camps in prashar 1Night",
      "Mudhouse cottage/camps in bir 1Night",
      "Guest house/hotel in dharamshala/mecleodgunj 1Night",
    ],
    travel: ["Innova ", "Force traveller"],
    food: [
      "Israeli cafes in kasol",
      "Local food makret at mandi",
      "Himachali traditional food at dhabas in palampur",
      "Tibtean food at dharmshala and mecleodgunj",
    ],
    features: [
      {
        title: "Rest and Relaxation",
        items: [
          "Parvati river side around kasol",
          "Mountain view and experience sound of silence at prashar",
          "Tea garden walk in palampur",
          "Chir pineforest at dharamkot.",
        ],
      },
      {
        title: "Shopping",
        items: [
          "Hippie market in kasol for crazy woolen stuff and crazy smoking items",
          "Gandhi market for traditional stuff of himachal",
          "Manikran street market for wooden house hold items and decor stuff",
          "Herbal fresh tea at palampur",
          "Tibtean dresses and ornaments at mecleodgunj market",
        ],
      },
      {
        title: "Adventure",
        items: [
          "Snow trek to prashar lake",
          "Paragliding at worlds best paragliding site in bir billing.",
        ],
      },
      {
        title: "Art and Culture",
        items: [
          "Kasol nature park in kasol",
          "Gurudwara manikaran shaheb",
          "Creative art work in prashar rishi temple",
          "Tea gardens in palampur",
          "Monestery in bir billing",
          "Tibtean cultural stuff in dharamshalaamd mecleodgunj",
          "Heritage railway line at jogindarnagar",
          "Kangra fort",
          "Dlai lama temple in mecleodgunj .",
        ],
      },
    ],
    seasonalHighlights: [""],
    faqs: [
      {
        question: "",
        answer: "",
      },
    ],
    tags: "",
  },

  {
    id: 13,
    name: "Himalayan Adventure",
    days: 6,
    cost: 6999,
    themes: ["adventure", "nature", "culture", "history"],
    thumbnailUrl: "/images/trips/2.webp",
    gallery: [""],
    description:
      "The trip includes visits to Kasol, known for its hippie market, Manikaran, famous for its hot springs, and the picturesque Tosh valley. The trip also includes a 7.5km snow trek to Prashar lake, where you can enjoy the breathtaking views of the surrounding mountains and the tranquility of the lake.",
    places: ["Kasol", "Manikaran", "Barsheni", "Tosh", "Kutla", "Prashar lake"],
    punchline:
      "Explore the snow-capped mountains and scenic beauty of Kasol, Tosh, and Prashar Lake.",
    summary:
      "Along the way, you can also indulge in traditional Himachali food, shopping for woolen stuff and local handicrafts, and participate in activities such as river-side sunbathing, smokeup hours and party in the indoor psy café.",
    schedule: [],
    tripFor: [""],
    highlights: [
      [
        "Snow trek to prashar lake (7.5km)hippie market of kasol for woolen stuff and for   hangouts in cafe",
        "Smokeup hours",
        "Hot bath at manikaran",
        "Scenic view of snow caped mountains from tosh. to visit manikaran saheb gurudwara for worship",
        "For lunger(free food)",
        "And also manikaran  market which is famous for its wooden products like wooden grocery gifts and paintings. to visit prashar rishi temple to feel sound of silence",
      ],
    ],
    stay: [
      "Homestay in kasol (DOP) -1night",
      "Guest house in tosh (DOP)- 1Night",
      "Snow camps in prashar - 1Night",
    ],
    travel: ["Innova ", "Force traveller"],
    food: [
      "Food will be available at all places which will be booked for you guys",
      "Rest if you want to taste traditional food of himachal at different locations then  you will have maki ki roti and sarsoon ka saag in bilaspur while coming from chandigarh to kasol",
      "Mandyali dham(local food of mandi distt.with 7 dishes served in traditional functions)at mandi bus stand and at sundarnagar and then in kullu at different place you can have siddu which is local dish of kullu served with ghee or chutney .or we can plan a visit to local house of my friends around and then have food in local style with traditional taste and in traditional wooden houses",
    ],
    features: [
      {
        title: "Rest and Relaxation",
        items: [
          "River side sun bath in backyard of dop kasol and smokeup hours of relaxing",
          "Open air cafe of dop and indoor psy cafe for night party",
          "Sunset in prashar lake .",
        ],
      },
      {
        title: "Shopping",
        items: [
          "Kasol market for hippie stuff",
          "Bhuntar for shopping complex which is having general stores of all daily needs .manikaran market for  traditional kullvi shawls and caps",
          "Hand made woodenframes",
          "Structure and all wooden kitchen accessories",
        ],
      },
      {
        title: "Adventure",
        items: [
          "Snow ride to tosh",
          "And then snow trek to prashar lake (7.5km).",
        ],
      },
      {
        title: "Art and Culture",
        items: [
          "Kasol nature park .manikaran hot springs and cooking process of food in natural hot water",
          "Creative art work on prashar rishi temple",
          "The mistry lake in prashar",
          "Oldest shiva temple near gurudwara manikaran saheb",
        ],
      },
    ],
    seasonalHighlights: [""],
    faqs: [
      {
        question: "Will there be atms ",
        answer:
          "In kasol market(rarely works ) manikaran market(works well)  jari market(half of chances of  working)  (Suggesion is to carry cash before entering to parvati valley,so to have cash before bhuntar is great option to avoid extra commision for cash transactions )  around parvati valley has atms ,rest all others are connected cities so have atm facilties around so not gonna be an issue regarding atm at other visiting places",
      },
      {
        question: "Will I get good network connectivity",
        answer:
          "After varshaini till tosh there is network issue for all network users , and there is poor networks for vodafone and idea in kasol and tosh ,also in prashar there will be networkat few places only. rest at all places which we will cover have good networks.",
      },
      {
        question: "Who do you need to call in emergency",
        answer:
          "Related to your travel issues you can all  anytime to DOP desk  9459668084.shantitrip holidays @ 8219235768 ,local authorties like police 01902 265412 /s 100,fire brigade 102, hospital  jari  1902-276257, local taxi stand 9816727619",
      },
    ],
    tags: "",
  },

  {
    id: 14,
    name: "Parvati Valley Bliss",
    days: 6,
    cost: 6500,
    themes: ["adventure", "trekking", "party", "sightseeing"],
    thumbnailUrl: "/images/trips/2.webp",
    gallery: [],
    description:
      "This trip is a 6-day adventure to the beautiful towns of Kasol, Rasol, and Tosh in Himachal Pradesh. The tour starts with an overnight journey from Delhi or Chandigarh to Kasol where you will stay in a homestay and have the opportunity to relax, party and enjoy a bonfire. On the second day, you will go on a trek to Rasol and have the chance to enjoy the scenic views of the Parvati Valley and the sunrise. ",
    places: [
      "Kasol",
      "Rasol",
      "Manikaran",
      "Barsheni",
      "Tosh",
      "Kutla",
      "Pulga",
      "Kalga",
      "Tulga",
    ],
    punchline:
      "Experience the beauty of the Himalayas in Kasol, Rasol, and Tosh, with breathtaking views, hot springs, and cultural immersion.",
    summary:
      "After trekking back to Kasol, you will take a ride to Tosh to enjoy the sunset and star-gazing at night. On the last day, you will visit Manikaran, the local market of Kasol and then head back to your starting point. You will also have the opportunity to enjoy hot baths at Manikaran, explore the hippie market of Kasol, and taste traditional food.",
    schedule: [
      "Overnight journey from delhi/chandigarh to kasol",
      "Arrival at your homestay in kasol, rest and relax, party in the night and bonfire on our rooftop place.",
      "Start your trek to rasol early morning by covering katagla and chalal and then hike towards rasol",
      "Have morning view of parvati valley from rasol and enjoy your breakfast with mystic view of sunrise and then start your trek down to kasol,take a ride till tosh ,arrival in tosh for sunset and star gazing in the night,",
      "Enjoy the morning view of snow capped mountains from your balcony and then start your journey from tosh to kasol via manikaran and local market of kasol and then leave for your places in the evening.",
      "Arrival at your starting point",
    ],
    tripFor: ["4 Group Members", "6 Group Members", "8 Group Members"],
    highlights: [
      "Hippie market of kasol for woolen stuff and for   hangouts in cafe",
      "Smokeup hours",
      "Hot bath at manikaran",
      "Scenic view of snow caped mountains from tosh. to visit manikaran saheb gurudwara for worship",
      "For lunger(free food)",
      "And also manikaran  market which is famous for its wooden products like wooden grocery gifts and paintings",
    ],
    stay: [
      "Homestay in kasol (DOP) -1Night",
      "Gomestay in rasol -1Night",
      "Guest house in tosh -1Night",
    ],
    travel: ["Innova", "Traveller"],
    food: [
      "Food will be available at all places which will be booked for you guys",
      "Rest if you want to taste traditional food of himachal at different locations then you will have maki ki roti and sarsoon ka saag in bilaspur while coming from chandigarh to kasol and then in kullu at different place you can have siddu which is local dish of kullu served with ghee or chutney",
      "We can plan a visit to local house of my friends around and then have food in local style with traditional taste and in traditional wooden houses",
    ],
    features: [
      {
        title: "Rest and Relaxation",
        items: [
          "River side sun bath in backyard of dop and smokeup hours of relaxing",
          "Open air cafe of tosh dop and indoor psy cafe for night party.star gazing nigt at rasol heights",
        ],
      },
      {
        title: "Shopping",
        items: [
          "Kasol market for hippie stuff",
          "Bhuntar for shopping complex which is having general stores of all daily needs",
          "Manali market for  traditional kullvi shawls and caps.",
        ],
      },
      {
        title: "Adventure",
        items: [
          "Trek to rasol (5km) from dop",
          "Sumaropa by ktagla and chalal",
        ],
      },
      {
        title: "Art and Culture",
        items: [
          "Kasol nature park",
          "Manikaran hot springs and cooking process of food in natural hot water",
          "Old style wooden houses in rasol",
        ],
      },
    ],
    seasonalHighlights: [""],
    faqs: [
      {
        question: "",
        answer: "",
      },
    ],
    tags: "",
  },
  
  //Himalayan Escape

  {
    id: 15,
    name: "Himalayan Escape",
    days: 7,
    cost: 7999,
    themes: ["backpacking", "trekking", "adventure", "culture"],
    thumbnailUrl: "/images/trips/2.webp",
    gallery: [""],
    description:
      "The trip is suitable for a group of 8 or 9 people and includes overnight stays in a homestay, guest house, and camps. The trip includes transportation by tempo traveller. The trip highlights include the hippie market of Kasol, trekking to Kutla, star-gazing nights, and experiencing local culture and food.",
    places: [
      "Kasol",
      "Chalal",
      "Manikaran",
      "Tosh",
      "Kalga",
      "Pulga",
      "Kutla",
      "Budhaban",
      "Tosh waterfall",
    ],
    punchline:
      "Get away from the city and immerse yourself in the beauty of the Himalayas on this 7-day trip from Delhi to Kasol, Tosh, Kutla and other places in Himachal Pradesh",
    summary:
      "This is a 7-day trip from Delhi to Kasol, Tosh, Kutla, and other places in Himachal Pradesh, India. The trip includes visits to various places such as local markets, cafes, villages, and trekking to Kutla. The trip also includes activities such as river-side walk, shopping at local markets, and experiencing local culture and food",
    schedule: [
      "Departure from Delhi by tempo traveler",
      "Check-in at hotel in Kasol. Fun day - relax in the trippy house and then in the evening river-side walk and then photo shoots along with river and forest area in the backyard of the house, osy music party till late night without an interruption",
      "After move to other destination via covering Kasol market and then Manikaran and then Barshaini till Tosh, check-in to the guest house and relax with 360* view of white-capped mountains in open-air cafe of the house, in the evening enjoy the indoor heating arrangements in the indoor cafe and so as music party. (destination of peace Tosh)",
      "Trek to Kutla for Christmas party in the snow, full-night party with music and bonfire and few Christmas gifts to get high deep into the sky with stars(singing woods)",
      "Come back to Tosh in the evening and rest in the house. (DOP Tosh)",
      "Check-out in the afternoon and then take a halt in Kasol market and then in the evening leave for Delhi",
      "Arrival at Delhi.",
    ],
    tripFor: ["Group of 8", "Group of 9"],
    highlights: [
      "Hippie market of kasol and trippy cafes",
      "Hotsprings in manikaran",
      "360 view of snow capped mountains in tosh",
      "Local life style in pulga",
      "Snow trek to kutla and skating point in budhaban",
      "Star gazing nights at all places and best photography mode to capture the shooting stars at budhaban or kutla",
    ],
    stay: [
      "Homestay in Kasol - 1Night",
      "Guest house in tosh -2Night",
      "Camps in kutla or budhanban",
    ],
    travel: ["Traveller"],
    food: [
      "Food will be available at all places which will be booked for you guys",
      "Rest if you want to taste traditional food of himachal at different locations then  you will have maki ki roti and sarsoon ka saag in bilaspur while coming from chandigarh to kasol",
      "Mandiyali dham(traditional food of mandi disttrict served as 7 different dishes with rice and chappati and sweets also made in special brass metal utensiles",
      "Dry fruits and best snacks near aut tunnel30km bwfore bhuntar and also same things at pandoh near pandoh dam 70km before kasol",
      "And then in kullu at different place you can have siddu which is local dish of kullu served with ghee or chutney .or we can plan a visit to local house of my friends around and then have food in local style with traditional taste and in traditional wooden houses",
    ],
    features: [
      {
        title: "Rest and Relaxation",
        items: [
          "River side sun bath in backyard of dop and smokeup hours of relaxing",
          "Open air cafe of tosh dop and indoor psy cafe for night party.sar pass view from kutla top and then relax under a nigt fullog wishing stars",
        ],
      },
      {
        title: "Shopping",
        items: [
          "Liquor can be buy from either kasol or barshaini or manikaran bus stand",
          "There is no oher option as only 3 store saround. kasol market for hippie stuff and daily need corners",
          "Bhuntar for shopping complex which is having general stores of all daily needs",
          "Manikaran market for  traditional kullvi shawls and caps and also its famous for home decor products mostly made of wooden and so as wooden utensils for kitchen and also frames for interior decor .also you can buy trekking stuff either from kasol",
          "Orfrom manikaran or barshaini",
          "And there is one shop in tosh as well for trekking equipments",
        ],
      },
      {
        title: "Adventure",
        items: [
          "Zypsy ride to tosh",
          "Snow trek to kutla(4km)",
          "Ice skating at budhaban.",
        ],
      },
      {
        title: "Art and Culture",
        items: [
          "Kasol nature park .manikaran hot springs and cooking process of food in natural hot water of hot springs",
          "Oldest shiva temple near the gurudwara saheb",
          "Old style houses in kutla",
        ],
      },
    ],
    seasonalHighlights: [""],
    faqs: [
      {
        question: "",
        answer: "",
      },
    ],
    tags: "",
  },

  {
    id: 16,
    name: "Work from the Mountains",
    days: 7,
    cost: 13200,
    themes: ["culture", "trekking", "relaxation"],
    thumbnailUrl: "/images/trips/2.webp",
    gallery: [""],
    description:
      "This 7-day trip takes you to the beautiful mountain towns of Kasol, Manikaran, Tosh, Kutla, and Manali. You'll have the opportunity to relax and unwind in the mountains, while also getting to experience the unique culture and lifestyle of these towns. The trip includes visits to local markets, treks to scenic destinations, and staying in homestays, guest houses, and camps.",
    places: [
      "Kasol",
      "Manikaran",
      "Tosh",
      "Kutla",
      "Manali",
      "Solang valley",
      "Rohtang tunnel",
    ],
    punchline:
      "Escape the city and work from the mountains in the serene beauty of Kasol, Tosh, and Manali.",
    summary:
      "Some of the highlights include relaxing by the river in Kasol, trekking to Kutla for a night of star-gazing, and exploring the traditional wooden houses in Kutla. Food will be provided at all locations and activities include trekking and smoking up.",
    schedule: [],
    tripFor: ["Atleast Group of 5"],
    highlights: [
      "Relaxing trip for work from mountains",
      "Working from peerpanjal range of manali and the adding more adventure by visting kasol for more peace and hippie life",
      "Trek to kutla  for night galaxy view and snow camp stay",
      "Relax in tosh village while working and scenic view of snow caped  mountains.",
    ],
    stay: [
      "Home stay  in kasol",
      "Guest house  in  tosh",
      "Camps  in kutla",
      "Guest house in tosh",
      "Guest  house in  manal",
    ],
    travel: ["Innova", "Ertiga", "Marrazo"],
    food: [
      "Food will be available at all places which will be booked for you guys",
      "In kullu at different place you can have siddu which is local dish of kullu served with ghee or chutney .can also visit jana water fall for herbal food of mountain and makki ki roti and saag as well",
      "Can have special dessert like flying brownies",
    ],
    features: [
      {
        title: "Rest and Relaxation",
        items: [
          "Rest at homestay",
          "And then enjoy the scenic view of parvati river",
          "Having smokeup hours in the jungle along river side.relax in thick pine forests of kutla and having sunbath  all the day.relax at the top of tosh mountains with a 360 view and to do star gazing in the night",
        ],
      },
      {
        title: "Shopping",
        items: [
          "Kasol market for hippie stuff",
          "Bhuntar for shopping complex which is having general stores of all daily needs",
          "Manikaran market for  kullvi shawls and caps and handmade wooden material for decor and kitchen.",
        ],
      },
      {
        title: "Adventure",
        items: [
          "Snow trek to kutla (4km). All the way we will be having snow and we will have stay in snow camps as well.",
        ],
      },
      {
        title: "Art and Culture",
        items: [
          "Kasol nature park representing the cultural view of mountains and their life style",
          "Manikaran gurudwara saheb and view of its historical facts",
          "To buy traditional stuff for decor and also woolens from the manikaran market",
          "To visit kutla  village for its old traditional houses and to know about the cultural aspects of the historical village and their daily life",
        ],
      },
    ],
    seasonalHighlights: [""],
    faqs: [
      {
        question: "Will there be atms ",
        answer:
          "In kasol market(rarely works ) manikaran market(works well)  jari market(half of chances of  working)  (Suggesion is to carry cash before entering to parvati valley,so to have cash before bhuntar is great option to avoid extra commision for cash transactions )  around parvati valley has atms ,rest all others are connected cities so have atm facilties around so not gonna be an issue regarding atm at other visiting places",
      },
      {
        question: "Will I get good network connectivity",
        answer:
          "After varshaini till tosh there is network issue for all network users , and there is poor networks for vodafone and idea in kasol and tosh ,also in prashar there will be networkat few places only. rest at all places which we will cover have good networks.",
      },
      {
        question: "Who do you need to call in emergency",
        answer:
          "Related to your travel issues you can all  anytime to DOP desk  9459668084.shantitrip holidays @ 8219235768 ,local authorties like police 01902 265412 /s 100,fire brigade 102, hospital  jari  1902-276257, local taxi stand 9816727619",
      },
    ],
    tags: "",
  },

  
  {
    id: 17,
    name: "The Snowy Cultural Escape",
    days: 6,
    cost: 6999,
    themes: ["nature", "sightseeing", "Shopping", "snow"],
    thumbnailUrl: "/images/trips/2.webp",
    gallery: [""],
    description:
      "This is a six-day tour package that takes you to two of the most popular destinations in India - Manali and Kasol. The tour itinerary includes visits to a variety of places such as Manali, Solang Valley, Sissu, Naggar Castle, Kullu, and Kasol. The trip is designed to provide a mix of activities such as visiting temples, shopping at local markets, and experiencing snow activities.",
    places: [
      "Manali",
      "Old manali market",
      "Solang valley for snow activities",
      "Rohtang tunnel",
      "Sissu frozen lake",
      "Naggar castle",
      "Kullu akhada bazzar",
      "Electric mahadev temple",
      "Kasol",
      "Manikaran gurudwara saheb",
      "Chalal",
      "Manikaran traditional market",
    ],
    punchline: "Experience the Thrill of Snow and Culture in Manali and Kaso",
    summary:
      " The tour is ideal for groups of 9 or 10 people and includes accommodation in guest houses and homestays. Food is also included in the tour package, with an emphasis on traditional dishes from the local area. The tour also includes activities such as river-side sunbathing, visiting open-air cafes, and shopping for local products.",
    schedule: [
      "Over night journey from delhi/chandigarh  till manali",
      "Arrival in manali,rest and relax at your stay ,in evening visit hadimba temple ,mall road ,and old manali hippie market.",
      "Visit manu temple ,solang valley for snow activities,rohtang tunnel,sissu,old manali cafes in the evening aftercoming back from solang.",
      "Visit kasol by naggar ,raurik mueseum and kullu main bazaar,in the afternoon arrivat at kasol,  visit local market in the evening and cafes around,night party and bonfire at staying place.",
      "Visit manikaran shaheb gurudwara and manikaran hot springs or may be tosh valley just for a day trip and then in the evening leave back to yourstarting places by overnight journey",
      "Arrival at your starting points.",
    ],
    tripFor: ["Group of 9", "Group of 10"],
    highlights: [
      "Manali mall road",
      "Old manali hippie market",
      "Manu temple visit",
      "Hadimba temple visit",
      "Rishi vashisht temple and hot springs",
      "Jogni  frozen water fall",
      "Solang adventure points",
      "Night parties in old manali cafes and kasol.bonfire and msucial nights",
    ],
    stay: [
      "guest house/wooden cottage in oldmanali -2night",
      "Homestay/camps in kasol -1Night",
    ],
    travel: ["Traveller"],
    food: [
      "Food will be available at all places which will be booked for you guys",
      "Rest if you want to taste traditional food of himachal at different locations then  you will have maki ki roti and sarsoon ka saag in bilaspur while coming from chandigarh to manali",
      "Mandiyali dham(traditional food of mandi disttrict served as 7 different dishes with rice and chappati and sweets also made in special brass metal utensiles",
      "Dry fruits and best snacks near aut tunnel 65km before manali and also same things at pandoh near pandoh dam 90km before manali",
      "And then in kullu at different place you can have siddu which is local dish of kullu served with ghee or chutney .or we can plan a visit to local house of my friends around and then have food in local style with traditional taste and in traditional wooden houses",
    ],
    features: [
      {
        title: "Rest and Relaxation",
        items: [
          "River side sun bath at banvihar  near old manali bridege",
          "Open air cafe of old manali and indoor psy cafe for night party.parvati river side walk with meditative sound of flowing water",
          "To heal yourself and feel the vibes around",
        ],
      },
      {
        title: "Shopping",
        items: [
          "Liquor can be buy from either mall road manali",
          "Old manali bridge store or from solangvalley from naggar and kullu and main market of kasol near  bus stand",
          "Kasol  and old manali market for hippie stuff and daily need corners",
          "Kullu  for shopping complex which is having general stores of all daily needs and local wood  furniture manufacturing  stores",
          "Manikaran  and akhada bazaar market in kullu for  traditional kullvi shawls and caps and also its famous for home decor products mostly made of wooden and so as wooden utensils for kitchen and also frames for interior decor .also you can buy trekking stuff either from mall road manali",
          "Street market of old manali",
          "Kasol",
          "Or from kullu  main bazaar",
        ],
      },
      {
        title: "Adventure",
        items: [
          "Snow scooter ride in solang valley",
          "Ice skating in solang",
          "Paragliding at dobhi kullu",
          "River crossing at od manali",
          "Yak ride at hadimba temple",
        ],
      },
      {
        title: "Art and Culture",
        items: [
          "Naggar castle in manali",
          "Manali mall road",
          "Raurik mueseum",
          "Himalayan nyinmapa tibetan buddhist monastery",
          "Kasol nature park",
          "Manikaran traditional market",
          "Dhalpur maidan kullu forcultural appearance",
        ],
      },
    ],
    seasonalHighlights: [""],
    faqs: [
      {
        question: "",
        answer: "",
      },
    ],
    tags: "",
  },
  
  
  {
    id: 18,
    name: "Himalayan Retreat",
    days: 8,
    cost: 10000,
    themes: ["adventure", "relaxation", "hippie"],
    thumbnailUrl: "/images/trips/2.webp",
    gallery: [""],
    description:
      "This is an 8-day tour package named Shimla Kasol Manali that takes you to various destinations in the Himachal Pradesh region. The itinerary includes visits to places such as Chandigarh, Solan, Shimla, Kufri, Mashobra, Naldehra, Kasol, Manikaran, Tosh, Kullu, Manali, Solang Valley, Sissu, and Old Manali.",
    places: [
      "Chandigarh",
      "Solan",
      "Shimla",
      "Kufri",
      "Mashobra",
      "Naldehra",
      "Mall road",
      "Kasol",
      "Manikaran",
      "Tosh",
      "Kullu",
      "Manali",
      "Solang valley",
      "Sissu",
      "Old manali",
    ],
    punchline: "Discover the beauty of Himachal Pradesh",
    summary:
      "The trip includes a mix of activities such as visiting temples, shopping at local markets, and experiencing snow activities. The tour includes accommodation in homestays, guest houses, and cottages. Food is also included in the tour package, with an emphasis on traditional dishes from the local area.",
    schedule: [
      "Departure from Delhi/Chandigarh",
      "Arrival at Shimla,rest and relax ,evening walk at mall road and street food in the lower bazaar market near mall road, sunset view from Ridge.",
      "Visit kufri for adventure activities ,naldehra for himalyan range view ,mashobra for thick forest and photography,zoo in kufri, sanjauli market in evening to hangout around",
      "Departure for kasol  ,arrival in the evening and relax",
      "Visit manikaran sheheb gurudwara and manikaran hot springs,tosh valley for views,kasol hippie market and cafes for musical nights,bonfire and smoke up hours in the night.",
      "Departure to Manali by covering kullu market and paragliding site at dobhi,visit mall road of manali in evening and cafes in night for psy  parties.",
      "Visit solang valley for ice skating and snow scooter riding,rohtang tunnel and sissu ,departure to starting place by an overnight journey",
      "Arrival at initial point",
    ],
    tripFor: [""],
    highlights: [
      "Bonfire and msucial nigts with smokeup hours in kasol",
      "Visit maal road shimla",
      "Scandle point at the ridge shimla",
      "Church at mallroad",
      "Kufri snow adventure point",
      "Sankatmochan temple",
      "Sanjaulli market for its charmingevening for youngsters to eat and to walk around",
      "Kasol",
      "Manikaran hot  springs",
      "Tosh valley for its mesmerising views of sar pass top",
      "Snow activities in solang valley",
      "Rohtang tunnel",
    ],
    stay: [
      "Homestay in shimla /guest house -2Night",
      "homestay/guest house in kasol -2Night",
      "guest house or cottages in old manali -1Night",
    ],
    travel: ["Force Traveller"],
    food: [
      "Food will be available at all places which will be booked for you guys",
      "Rest if you want to taste traditional food of himachal at different locations then  you will havemecdonald at sanwara 30km before solan",
      "Dominoz at solan 50km before shimla",
      "Traditional pahadi food at roadside small dhabas in shimla",
      "Sanjauli",
      "Famous desi ghee ki jalebi and milk at lower bazaar market of shimla (shops are from britishtime)",
      "Maki ki roti and sarsoon ka saag in bilaspur while coming from shimla to manali",
      "Best cholle bhature at ghagas mid point of shimla and manali",
      "Mandiyali dham(traditional food of mandi disttrict served as 7 different dishes with rice and chappati and sweets also made in special brass metal utensiles",
      "Dry fruits and best snacks near aut tunnel 65km before manali and also same things at pandoh near pandoh dam 90km before manali",
      "And then in kullu at different place you can have siddu which is local dish of kullu served with ghee or chutney",
    ],
    features: [
      {
        title: "Rest and Relaxation",
        items: [
          "Mall road shimla with 360 degree view of chil and pine forests around",
          "Riverside walk along parvati river in kasol",
          "Old manali cafes for night parties.",
        ],
      },
      {
        title: "Shopping",
        items: [
          "Shimla mall road for pahadi woolen items",
          "Lower bazaar shimla for food items",
          "The ridge shimla for unique items form mountains",
          "Kasol market for hippie culture stuff",
          "Old manali market for meditative and msucial items",
        ],
      },
      {
        title: "Adventure",
        items: [
          "Horse riding at mall road shimla",
          "Yak riding at manali",
          "Snow riding to solang valley",
          "Snow scooter personalride",
          "Ice skating in solang",
          "Paragliding at kullu",
          "River rafting at dobhi",
        ],
      },
      {
        title: "Art and Culture",
        items: [
          "Oldest church at shimla mall road",
          "Famous historical jakhu hanuman temple",
          "Advance study (british age building and infrastructure ) golf course at naldehra",
          "Statute of gandhi ji at mall road",
          "Wild life zoo at kufri",
          "Sunset point mall road",
          "Kasol nature park",
          "Manali monestery",
          "Hadimba and manu temple(the name from which manali word came into existance).worlds highest tunnelabove 10000ft rogtang tunnel.raurik mueseum",
          "Naggar castle",
        ],
      },
    ],
    seasonalHighlights: [""],
    faqs: [
      {
        question: "",
        answer: "",
      },
    ],
    tags: "",
  },

  {
    id: 19,
    name: "Merry Christmas",
    days: 6,
    cost: 16500,
    themes: ["seasonal", "festive", "party", "relaxation"],
    thumbnailUrl: "/images/trips/2.webp",
    gallery: [""],
    description:
      "This is a six-day Christmas-themed trip package that takes you to various destinations in the Parvati Valley, such as Kasol, Manikaran, Tosh, Kutla, and Budhaban. The trip includes a Christmas party in Tosh, trekking to Kutla for night galaxy viewing and a snow camp stay, as well as relaxation in the scenic village of Tosh.",
    places: ["Kasol", "Manikaran", "Tosh", "Kutla", "Budhaban"],
    punchline: "Celebrate Christmas in the lap of nature",
    summary:
      "The trip is designed for a group of 8 adults, and includes accommodation in guest houses, camps, and homestays. Food is included in the package, and transportation is provided in a 10-seater tempo traveller.",
    schedule: [],
    tripFor: ["Group of 8 Adults"],
    highlights: [
      "Merry christmas party in tosh in snow  and adding more adventure by visting kasol for more peace and hippie life",
      "Trek to kutla  for night galaxy view and snow camp stay",
      "Relax in tosh village and scenic view of snow caped  mountains",
    ],
    stay: [
      "Guest house  in  tosh (Destination Of Peace)",
      "Camps  in kutla (singing woods)",
      "Guest house in tosh (Destination Of Peace)",
    ],
    travel: ["By tempo traveller 10 seater"],
    food: [
      "Food will be available at all places which will be booked for you guys and its included in your tour package",
      "In kullu at different place you can have siddu which is local dish of kullu served with ghee or chutney .can also visit jana water fall for herbal food of mountain and makki ki roti and saag as well",
      "Can have special dessert like flying brownies",
    ],
    features: [
      {
        title: "Rest and Relaxation",
        items: [
          "Rest at homestay",
          "And then enjoy the scenic view of parvati river",
          "Having smokeup hours in the jungle along river side.relax in thick pine forests of kutla and having sunbath  all the day.relax at the top of tosh mountains with a 360 view and to do star gazing in the night.",
        ],
      },
      {
        title: "Shopping",
        items: [
          "Kasol market for hippie stuff",
          "Bhuntar for shopping complex which is having general stores of all daily needs",
          "Manikaran market for  kullvi shawls and caps and handmade wooden material for decor and kitchen",
        ],
      },
      {
        title: "Adventure",
        items: [
          "Snow trek to kutla (4km).all the way we will be having snow  and we will have stay in snow camps as well",
        ],
      },
      {
        title: "Art and Culture",
        items: [
          "Kasol nature park representing the cultural view of mountains and their life style",
          "Manikaran gurudwara saheb and view of its historical facts",
          "To buy traditional stuff for decor and also woolens from the manikaran market",
          "To visit kutla village for its old traditional houses and to know about the cultural aspects of the historical village and their daily life",
        ],
      },
    ],
    seasonalHighlights: [""],
    faqs: [
      {
        question: "Will there be atms ",
        answer:
          "In kasol market(rarely works ) manikaran market(works well)  jari market(half of chances of  working)  (Suggesion is to carry cash before entering to parvati valley,so to have cash before bhuntar is great option to avoid extra commision for cash transactions )  around parvati valley has atms ,rest all others are connected cities so have atm facilties around so not gonna be an issue regarding atm at other visiting places.",
      },
      {
        question: "Will I get good network connectivity",
        answer:
          "After varshaini till tosh there is network issue for all network users , and there is poor networks for vodafone and idea in kasol and tosh , in kutla  there will be  no network at all. rest at all places which we will cover have good networks",
      },
      {
        question: "Who do you need to call in emergency",
        answer:
          "Related to your travel issues you can all  anytime to DOP desk  9459668084. shantitrip holidays @ 8219235768 ,local authorties like police 01902 265412 /s 100,fire brigade 102, hospital  jari  1902-276257, local taxi stand 9816727619",
      },
    ],
    tags: "",
  },


  {
    id: 20,
    name: "Himalayan Odyssey",
    days: 7,
    cost: 8500,
    themes: ["culture", "group", "trekking", "sightseeing"],
    thumbnailUrl: "/images/trips/2.webp",
    gallery: [],
    description:
      "This is a 7-day trip to the Himachal Pradesh, India that takes you to various places such as Manali, Solang Valley, Sissu, Kasol, Tirthan, Jibhi, and other places. The trip includes a variety of activities such as trekking, sightseeing, snow activities, visiting temples and local markets, bird-watching and more. ",
    places: [
      "Manali",
      "Old manali market",
      "Solang valley for snow activities",
      "Rohtang tunnel",
      "Sissu frozen lake",
      "Naggar castle",
      "Kullu akhada bazzar",
      "Electric mahadev temple",
      "Kasol",
      "Manikaran gurudwara saheb",
      "Chalal",
      "Manikaran traditional market",
      "Jibhi warefalls",
      "Tirthan ghnpnatural park",
      "Jalodi pass.",
    ],
    punchline:
      "Experience the best of Himachal Pradesh's culture, adventure and beauty on this 7-day trip to Manali, Solang Valley, Sissu, Kasol, Tirthan, Jibhi and beyond",
    summary:
      "The trip is suitable for groups of 100 members and includes overnight stays in camps and hotels. The trip includes transportation by Tempo Traveller. The trip highlights include visiting the old Manali market, Solang Valley, Tirthan River, and Kasol, experiencing local culture and food, and night parties",
    schedule: [
      "Over night journey from delhi/chandigarh  till Tirthan/Jibhi, arrival at camps and then relax and freshen up and then move for Sojha and Jalodi pass for sightseeing and mountain top view, can go for a small trek to Sirloaskar lake, a mystic place through jungles.",
      "Move to Tirthan valley from GHNP and see trout fish farms and do birdwatching in Tirthan river, best for photography and making reels.",
      "Visit kasol by Sainj valley and Shangarh village for a lush green ground to walk and view the mountains capped with snow under the green pine forests, in the afternoon arrival at kasol, visit local market in the evening and cafes around, night party and bonfire at staying place.",
      "Visit manikaran shaheb gurudwara and manikaran hot springs or may be tosh valley just for a day trip and have riverside evening snack time with music and some relaxing hours.",
      "Arrival in Manali,rest and relax at your stay, in evening visit Hadimba temple, mall road and old Manali hippie market.",
      "Visit manu temple, solang valley for snow activities, rohtang tunnel, sissu, old manali cafes in the evening after coming back from solang.",
      "Start our journey back to departure places.",
    ],
    tripFor: ["100 Members"],
    highlights: [
      "Manali mall road",
      "Old manali hippie market",
      "Manu temple visit",
      "Hadimba temple visit",
      "Rishi vashisht temple and hot springs",
      "Jogni  frozen water fall",
      "Solang adventure points",
      "Night parties in old manali cafes and kasol.bonfire and msucial nights.river rafting in kullu",
      "Photoshoot at ghnp park and birdwatching along side tirthan river",
    ],
    stay: [
      "Tirthan valley -camp stay in tirthan & jibhi valley (river side stay)on quard sharing",
      "kasol:- hotel or camp stay quard sharing",
      "manali :-hotel stay(clif or mountain top ) quard sharing",
    ],
    travel: ["By Traveller"],
    food: [
      "Food will be available at all places which will be booked for you guys",
      "Rest if you want to taste traditional food of himachal at different locations then  you will have maki ki roti and sarsoon ka saag in bilaspur while coming from chandigarh to manali",
      "Mandiyali dham(traditional food of mandi disttrict served as 7 different dishes with rice and chappati and sweets also made in special brass metal utensiles",
      "Dry fruits and best snacks near aut tunnel 65km before manali and also same things at pandoh near pandoh dam 90km before manali",
      "Meat rice on the way to jibhi at larjijunction bridge point",
      "And then in kullu at different place you can have siddu which is local dish of kullu served with ghee or chutney",
    ],
    features: [
      {
        title: "Rest and Relaxation",
        items: [
          "River side sun bath at banvihar  near old manali bridge  and also at tirthan vallry river and also birdwatching and trout fishing in tirthan valley",
          "Open air cafe of old manali and indoor psy cafe for night party.parvati river side walk with meditative sound of flowing water",
          "To heal yourself and feel the vibes around",
        ],
      },
      {
        title: "Shopping",
        items: [
          "Liquor can be buy from either mall road manali",
          "Old manali bridge store or from solangvalley from naggar and kullu and main market of kasol near  bus stand",
          "Kasol  and old manali market for hippie stuff and daily need corners",
          "Kullu  for shopping complex which is having general stores of all daily needs and local wood  furniture manufacturing  stores",
          "Manikaran  and akhada bazaar market in kullu for  traditional kullvi shawls and caps and also its famous for home decor products mostly made of wooden and so as wooden utensils for kitchen and also frames for interior decor .also you can buy trekking stuff either from mall road manali",
          "Street market of old manali",
          "Kasol",
          "Or from kullu  main bazaar",
        ],
      },
      {
        title: "Adventure",
        items: [
          "Snow scooter ride in solang valley",
          "Ice skating in solang",
          "Paragliding at dobhi kullu",
          "River crossing at old manali",
          "Yak ride at hadimba temple.river rafting and paragliding at dobhi in kullu.",
        ],
      },
      {
        title: "Art and Culture",
        items: [
          "Shangarh ground",
          "Sirloskar lake",
          "Naggar castle in manali",
          "Manali mall road",
          "Raurik mueseum",
          "Himalayan nyinmapa tibetan buddhist monasterytuesday market at patlikul for warm cloth shopping at cheatest prices",
          "Kasol nature park",
          "Manikaran traditional market",
          "Dhalpur maidan kullu forcultural appearance",
        ],
      },
    ],
    seasonalHighlights: [""],
    faqs: [
      {
        question: "",
        answer: "",
      },
    ],
    tags: "",
  },

  
  

  

  

];

// const template = {
//   id: -1,
//   name: "ShantiTrip Special",
//   days: 6,
//   cost: 13200,
//   themes: ["offseason", "adventure", "relaxation", "snow"],
//   thumbnailUrl: "/images/trips/7.webp",
//   gallery: ["/images/trips/7.webp"],
//   description:
//     "A trip for those who want to enjoy complete leisure and relaxation with little activity, while enjoying all the beauty and serenity Himachal has to offer.",
//   places: ["Parashar lake ", "Tosh ", "Kasol"],
//   punchline: "Rest and reboot.",
//   summary:
//     "Spend 5 nights and 6 days in utter peace and quiet. Relax and laze around in Kasol, get a birds-eye view of Parvati Valley in Tosh, and experience a meditative stillness and silence along with a 360\u00b0 view of the Himalayan mountain range at Parashar Lake.",
//   schedule: [],
//   tripFor: [""],
//   highlights: [""],
//   stay: [""],
//   travel: [""],
//   food: [""],
//   features: [
//     {
//       title: "Rest and Relaxation",
//       items: [""],
//     },
//     {
//       title: "Shopping",
//       items: [""],
//     },
//     {
//       title: "Adventure",
//       items: [""],
//     },
//   ],
//   seasonalHighlights: [""],
//   faqs: [
//     {
//       question: "",
//       answer: "",
//     },
//   ],
//   tags: "",
// };
