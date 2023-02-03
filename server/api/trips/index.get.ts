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
  //Himachal Escapade
  {
    id: 0,
    name: "Himachal Escapade",
    days: 7,
    cost: 35000,
    themes: [
      "nature",
      "relaxation",
      "spritual",
      "culture",
      "adventure",
      "leisure",
    ],
    thumbnailUrl: "https://cdn.pixabay.com/photo/2020/02/22/05/04/snow-4869331_1280.jpg",
    gallery: [
      "https://images.pexels.com/photos/7846476/pexels-photo-7846476.jpeg",
    ],
    description:
      "Explore the best of Himachal Pradesh on our 7-day luxury tour. Visit scenic areas, temples, indoor park activities, hot springs, national parks, heritage centers and bird watching. Experience the culture and spiritual side of the region. Enjoy the peacefulness of Kasol, Jibhi and Tirthan and take a walk on the parvati river bank. Don't miss out on this unique opportunity to discover the beauty of Shimla, Tirthan and Manali.",

    places: [
      "Shimla",
      "Tirthan",
      "Manali",
      "Kasol",
      "Naldehra",
      "Mashobra",
      "Koti Chail",
      "Tattapani",
      "Great Himalayan National Park",
    ],
    punchline: "Escape to the mountains.",
    summary:
      "Embark on a journey to explore the stunning landscapes of Himachal Pradesh on our 7-day/6-night ultra luxury family tour. Take a break from the monotony of everyday life and immerse yourself in the natural beauty of the region as you visit places like Shimla, Tirthan, Manali, Kasol, Naldehra, Mashobra, Koti Chail, Tattapani, and the Great Himalayan National Park. Indulge in a mix of leisure and adventure activities such as visiting temples, horse riding, indoor park activities, hot springs, and bird watching. Experience the cultural heritage and spiritual side of the region at Advance Studies Old Heritage Study Center and Anadaile Army Museum. Welcome 2021 with the fresh mountain air and rustic village life of Kasol, Tosh, Kutla and Buddhaban.",
    schedule: [
      {
        label: "Day 1",
        items: [
          {
            theme: "Leisure",
            description:
              "Visit mall road to have sceneric beauty of old British infrastructure and church",
            imageUrl:
              "https://wp.scoopwhoop.com/wp-content/uploads/2021/05/efb2ec09-c270-4d8d-a526-5d3f5c60a9e4.jpg",
          },
          {
            theme: "Leisure",
            description: "Enjoy the sunset from the ridge",
            imageUrl:
              "https://www.sunsetridgecc.org/images/dynamic/getImage.gif?ID=100001383",
          },
          {
            theme: "Spiritual",
            description: "Visit the Kalibadi temple",
            imageUrl:
              "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/d1/00/fa/shimla-kali-bari.jpg?w=1200&h=-1&s=1",
          },
          {
            theme: "Spiritual",
            description: "Visit Jakhu temple",
            imageUrl:
              "https://s3.eu-west-2.amazonaws.com/tripspell/EXPERIENCE/jakhoo-temple-shimla/jakhoo-temple-shimla-0_high",
          },
          {
            theme: "Spiritual",
            description: "Visit the Taradevi temple",
            imageUrl: "https://pbs.twimg.com/media/EAcVllhXUAAiP-1.jpg",
          },
          {
            theme: "Spiritual",
            description: "Visit the Sankat mochan temple",
            imageUrl:
              "https://upload.wikimedia.org/wikipedia/commons/0/01/Sankat_Mochan_Shimla.jpg",
          },
          {
            theme: "heritage",
            description:
              "Visit advance  studies old heritage  study  center , anadaile  army museum",
            imageUrl:
              "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/indian-institute-of-advanced-study-nilu-mishra.jpg",
          },
        ],
      },
      {
        label: "Day 2",
        items: [
          {
            theme: "Adventure",
            description:
              "Visit Kuffri for horse riding and indoor park actiivites  ",
            imageUrl:
              "https://images.pexels.com/photos/1559388/pexels-photo-1559388.jpeg",
          },
          {
            theme: "Adventure",
            description: "Visit zoo to see snow leopard and black bear ",
            imageUrl:
              "https://t3.ftcdn.net/jpg/03/18/47/72/360_F_318477235_qtvHD7hAYa8V4Z7cIejqhqIhWlS9hQ6N.jpg",
          },
          {
            theme: "Addventure",
            description: "The Shimla's sports capital",
            imageUrl:
              "https://static.trip101.com/paragraph_media/pictures/002/611/947/large/cycling-in-the-greens-1651747391.jpg?1651747396",
          },
          {
            type: "OR",
          },
          {
            theme: "Nature",
            description: "Short drive to Nalhendra, Mashobra, Koti Chail",
            imageUrl:
              "data:image/jpeg;base64,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",
          },
          {
            theme: "Nature",
            description: "Visit the Sankat mochan temple",
            imageUrl:
              "https://upload.wikimedia.org/wikipedia/commons/0/01/Sankat_Mochan_Shimla.jpg",
          },
        ],
      },
      {
        label: "Day 3",
        items: [
          {
            theme: "Leisure",
            description: "Visit Sirolsar lake, Jibhi and Tirthan",
            imageUrl:
              "https://en-media.thebetterindia.com/uploads/2016/06/DSC00098.jpg?compress=true&quality=80&w=376&dpr=2.6",
          },
          {
            theme: "Leisure",
            description:
              "Evening at kasol and traditional homestay and Jibhi/Tirthan",
            imageUrl:
              "https://media-cdn.tripadvisor.com/media/photo-s/12/ee/f1/3b/huge-lawn.jpg",
          },
        ],
      },
      {
        label: "Day 4",
        items: [
          {
            theme: "Art and Culture",
            description:
              "Visit great himalayan national park which is under UNESCO world heritage site and do bird watching",
            imageUrl:
              "https://pickyourtrail.com/blog/wp-content/uploads/2020/05/hans-van-tol-P1syptb0tTw-unsplash-scaled.jpg",
          },
        ],
      },
      {
        label: "Day 5",
        items: [
          {
            theme: "Relaxation",
            description: "Relax at Tirthan valley",
            imageUrl:
              "https://en-media.thebetterindia.com/uploads/2016/06/DSC00098.jpg?compress=true&quality=80&w=376&dpr=2.6",
          },
        ],
      },
      {
        label: "Day 6",
        items: [
          {
            theme: "Homestay",
            description:
              "Sissu stay in cold weather with snow capped mountain view",
            imageUrl:
              "https://img.cdn.zostel.com/blog_photo/077_Sissu_12_copy_2.jpg",
          },
        ],
      },
      {
        label: "Day 7",
        items: [
          {
            theme: "Travel",
            description: "Leave back to Chandigarh",
            imageUrl:
              "https://www.fabhotels.com/blog/wp-content/uploads/2020/05/road-trip-hacks-tips-600.jpg",
          },
        ],
      },
    ],
    tripFor: [
      "Elders looking to escape their daily routines",
      "Those who seek the perfect balance of leisure and adventure",
      "Couples looking for a long-pending romantic trip",
    ],
    highlights: [
      "Take long walks along the parvati river bank and chill at cafes in kasol",
      "Enjoy a healing hot-water bath in manikaran and shop for souvenirs",
      "Explore tosh village and get a birds-eye view of parvati valley",
      "Trek your way in the snow to kutla amidst beautiful waterfalls",
      "Bask in the solitude and silence of the peaceful buddhaban",
    ],
    stay: [
      "Homestay in Kasol",
      "Guesthouse in Tosh",
      "Camps in Kutla and Buddhaban",
    ],
    travel: ["Force Traveller", "Toyota Etios", "Swift Dzire"],
    food: [
      "Traditional Veg. Village Cuisine",
      "Non-veg. Pahadi Cuisine",
      "Local delicacies native to Himachal Pradesh",
    ],
    features: [
      {
        title: "Bird Watching",
      },
    ],
    seasonalHighlights: [
      "This trip is specially made for experiencing Himachali winters starting from mid-December to late-February.You'll likely experience sub-zero temperatures with light to heavy snowfall, cloudy skies, and lots of wintry silence and quiet as locals are huddled up around the fireplace in the warmth and comfort of their homes.",
    ],
    faqs: [
      {
        question: "Will there be ATMs around?",
        answer:
          "There is an ATM in Kasol market but it rarely works so we wouldn't suggest you rely on it. Then there's one in Manikaran market and one in Jari. But we suggest you carry cash with you before entering Parvati Valley, ideally from Bhuntar (you'll avoid extra commision for cash transactions). The higher up you go in the snow, the lesser the chances of finding an ATM. Especially as it's the winter and roads tend to be blocked.",
      },
      {
        question: "Will I be able to communicate well with the locals?",
        answer:
          "Yes, the locals know basic English and are fluent in Hindi. So if you know any of these languages, communicating the basics won't be an issue.",
      },
      {
        question: "Do I need to carry any special equipment?",
        answer:
          "As you'll be travelling in the winter, thick woolen jackets and trekking gear will be a must. Also carry a rain-jacket or umbrella along as rains are expected this time around. Other than that, carry a flashlight, long socks for hiking and to stay warm, binoculars, a good camera for capturing the view, and most importantly — a power bank",
      },
      {
        question: "Who do you need to call in emergency",
        answer:
          "Related to your travel issues you can all anytime to DOP desk  9459668084. shantitrip holidays @ 8219235768 ,Police 100, fire brigade 102, Ambulance 102",
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
// {
//   question: "Who do you need to call in emergency",
//   answer:
//     "Related to your travel issues you can all anytime to DOP desk  9459668084. shantitrip holidays @ 8219235768 ,Police 100, fire brigade 102, Ambulance 102"
// },
// //   ],
//   tags: "",
// };
