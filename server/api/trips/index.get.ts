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
];

const template = {
  id: -1,
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
  tripFor: [""],
  highlights: [""],
  stay: [""],
  travel: [""],
  food: [""],
  features: [
    {
      title: "Rest and Relaxation",
      items: [""],
    },
    {
      title: "Shopping",
      items: [""],
    },
    {
      title: "Adventure",
      items: [""],
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
};
