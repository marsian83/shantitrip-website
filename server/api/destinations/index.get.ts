export default defineEventHandler(() => {
  return destinations;
});

const destinations = [
  {
    id: 0,
    name: "Himachal Pradesh",
    description:
      "Welcome to Himachal Pradesh, the “land of the gods,” where you can experience true paradise. From its breathtaking snow-capped mountains and lush green valleys to its pristine rivers and vibrant culture, Himachal Pradesh will take your breath away. Here, you can explore its stunning landscapes, enjoy delicious cuisine, and discover a truly unique culture. Come experience the beauty of Himachal Pradesh for yourself.",
    thumbnailUrl:
      "https://images.pexels.com/photos/9605458/pexels-photo-9605458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    locations: [
      {
        name: "Shimla",
        imageUrl: "https://cdn.pixabay.com/photo/2013/05/15/03/27/shimla-111303_960_720.jpg",
        description:
          "A popular hill station known for its colonial architecture and scenic views.",
      },
      {
        name: "Manali",
        imageUrl: "https://cdn.pixabay.com/photo/2019/12/10/13/17/drone-view-4685852_960_720.jpg",
        description:
          "A popular tourist destination known for adventure sports and scenic views.",
      },
      {
        name: "Dharamshala",
        imageUrl: "https://cdn.pixabay.com/photo/2018/07/15/11/56/triund-3539491_960_720.jpg",
        description:
          "A hill station known for its Buddhist monasteries and the residence of the Dalai Lama.",
      },
      {
        name: "Kullu",
        imageUrl: "https://cdn.pixabay.com/photo/2016/10/15/16/26/trekking-1742821_960_720.jpg",
        description:
          "A popular valley known for its temples and adventure sports.",
      },
      {
        name: "McLeod Ganj",
        imageUrl: "https://cdn.pixabay.com/photo/2022/12/16/08/42/dharamshala-7659164_960_720.jpg",
        description:
          "A small town known for its Tibetan culture and the residence of the Dalai Lama.",
      },
      {
        name: "Palampur",
        imageUrl: "https://cdn.pixabay.com/photo/2017/07/04/05/50/mountains-2470053_960_720.jpg",
        description:
          "A hill station known for its tea gardens and scenic views.",
      },
      {
        name: "Kasauli",
        imageUrl: "https://cdn.pixabay.com/photo/2017/10/02/08/12/himalayas-2808131_960_720.jpg",
        description:
          "A small hill station known for its colonial architecture and scenic views.",
      },
      {
        name: "Chail",
        imageUrl: "https://cdn.pixabay.com/photo/2014/04/06/00/52/tibet-317455_960_720.jpg",
        description:
          "A small hill station known for its palace and scenic views.",
      },
      {
        name: "Khajjiar",
        imageUrl: "https://cdn.pixabay.com/photo/2017/10/02/08/12/himalayas-2808132_960_720.jpg",
        description:
          "A small hill station known for its meadows and scenic views.",
      },
      {
        name: "Mandi",
        imageUrl: "https://cdn.pixabay.com/photo/2019/03/14/10/01/trek-4054510_960_720.jpg",
        description: "A historic town known for its temples and scenic views.",
      },
    ],
  },
  {
    id: 1,
    name: "Uttarakhand",
    description:
      "Discover the beauty of Uttarakhand, where majestic mountains, crystal clear rivers, and lush green forests create a paradise on earth. Here, you can explore its vibrant culture, enjoy delicious cuisine, and marvel at its breathtaking landscapes. From the ancient temples to the snow-capped peaks, Uttarakhand is the perfect place for an unforgettable adventure.",
    thumbnailUrl:
      "https://images.pexels.com/photos/7846558/pexels-photo-7846558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2s",
    locations: [
      {
      name: "Nainital",
      imageUrl: "https://cdn.pixabay.com/photo/2019/08/13/14/35/nature-4403568_960_720.jpg",
      description: "A popular hill station known for its picturesque Naini Lake and scenic views."
      },
      {
      name: "Mussoorie",
      imageUrl: "https://cdn.pixabay.com/photo/2022/06/05/05/59/mussoorie-7243347_960_720.jpg",
      description: "A popular hill station known for its scenic views and colonial architecture."
      },
      {
      name: "Rishikesh",
      imageUrl: "https://cdn.pixabay.com/photo/2020/08/16/07/55/temple-5492096_960_720.jpg",
      description: "A city known for its spiritual and adventure activities, such as yoga and river rafting."
      },
      {
      name: "Haridwar",
      imageUrl: "https://cdn.pixabay.com/photo/2022/07/13/15/27/ganga-aarti-7319485_960_720.jpg",
      description: "An ancient city known for its spiritual significance and Ganges river ghats."
      },
      {
      name: "Valley of Flowers",
      imageUrl: "https://cdn.pixabay.com/photo/2016/07/14/13/35/mountains-1516733__340.jpg",
      description: "A national park known for its alpine flowers and scenic views."
      },
      {
      name: "Jim Corbett National Park",
      imageUrl: "https://cdn.pixabay.com/photo/2017/09/01/19/34/nature-2705271__340.jpg",
      description: "A national park known for its wildlife and scenic views."
      },
      {
      name: "Kedarnath Temple",
      imageUrl: "https://cdn.pixabay.com/photo/2023/01/07/11/30/alpine-7703065__340.jpg",
      description: "A Hindu temple dedicated to Lord Shiva and a popular pilgrimage site."
      },
      {
      name: "Badrinath Temple",
      imageUrl: "https://cdn.pixabay.com/photo/2017/09/23/19/07/vishnu-temple-2779856__340.jpg",
      description: "A Hindu temple dedicated to Lord Vishnu and a popular pilgrimage site."
      },
      {
      name: "Dehradun",
      imageUrl: "https://cdn.pixabay.com/photo/2021/04/20/21/02/cave-6194902__340.jpg",
      description: "A city known for its colonial architecture and scenic views."
      }
      ]
  },
  {
    id: 2,
    name: "Leh Ladakh",
    description:
      "Escape to Leh Ladakh, the land of breathtaking beauty and stunning vistas. Here, you can explore its rugged mountains, trek across its snow-covered passes, and marvel at its colorful monasteries. With its vibrant culture, delicious cuisine, and breathtaking landscapes, Leh Ladakh is the perfect destination for an unforgettable adventure. Come and see why it's one of the most beautiful places in India!",
    thumbnailUrl:
      "https://images.pexels.com/photos/13979460/pexels-photo-13979460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    locations: [
      {
      name: "Pangong Tso Lake",
      imageUrl: "https://cdn.pixabay.com/photo/2016/09/07/07/11/pangong-tso-1650946__340.jpg",
      description: "A high altitude saltwater lake known for its scenic beauty and changing colors."
      },
      {
      name: "Khardung La Pass",
      imageUrl: "https://cdn.pixabay.com/photo/2013/12/22/22/11/leh-232730__340.jpg",
      description: "A high mountain pass known for its stunning views and as the highest motorable road in the world."
      },
      {
      name: "Nubra Valley",
      imageUrl: "https://cdn.pixabay.com/photo/2018/06/07/10/24/hunder-3459837__340.jpg",
      description: "A desert valley known for its sand dunes and Bactrian camels."
      },
      {
      name: "Shanti Stupa",
      imageUrl: "https://cdn.pixabay.com/photo/2020/07/06/07/26/shanti-stupa-5375848__340.jpg",
      description: "A Buddhist stupa known for its panoramic views and peace pagoda."
      },
      {
      name: "Leh Palace",
      imageUrl: "https://cdn.pixabay.com/photo/2018/12/06/06/23/leh-palace-3859217__340.jpg",
      description: "A 17th century palace known for its architectural beauty and stunning views."
      },
      {
      name: "Zanskar Valley",
      imageUrl: "https://cdn.pixabay.com/photo/2017/05/10/13/39/ladakh-2300904__340.jpg",
      description: "A remote valley known for its unique culture and beautiful landscapes."
      },
      {
      name: "Tso Moriri Lake",
      imageUrl: "https://cdn.pixabay.com/photo/2017/08/06/17/27/lake-2594425__340.jpg",
      description: "A high altitude lake known for its serene beauty and remote location."
      },
      {
      name: "Magnetic Hill",
      imageUrl: "https://cdn.pixabay.com/photo/2018/12/06/06/08/leh-3859196__340.jpg",
      description: "A hill known for its optical illusion that makes vehicles appear to roll uphill."
      },
      {
      name: "Lamayuru Monastery",
      imageUrl: "https://cdn.pixabay.com/photo/2020/02/19/06/47/ladakh-4861481__340.jpg",
      description: "An ancient Buddhist monastery known for its striking architecture and serene setting."
      },
      {
      name: "Turtuk",
      imageUrl: "https://cdn.pixabay.com/photo/2023/01/17/08/17/ladakh-7724047__340.jpg",
      description: "A small village known for its historical significance and beautiful landscapes."
      }
      ]
  },
];


