import allReviews from "./reviews";

export default [
  {
    photos: [
      `https://picsum.photos/260/200?grayscale`,
      `https://picsum.photos/260/200?grayscale`,
      `https://picsum.photos/260/200?grayscale`,
      `https://picsum.photos/260/200?grayscale`,
      `https://picsum.photos/260/200?grayscale`,
      `https://picsum.photos/260/200?grayscale`,
    ],
    header: `Few words about apartments...`,
    description: `Aliquam ultrices sagittis orci a scelerisque purus
      semper eget duis. Duis ut diam quam nulla. Quam elementum pulvinar
      etiam non quam. Dignissim suspendisse in est ante in nibh.
      Congue nisi vitae suscipit tellus mauris a diam maecenas sed.
      Donec enim diam vulputate ut pharetra sit.`,
    isPremium: false,
    type: `apartament`,
    rating: 4.4,
    bedroomCount: 2,
    guestCount: 3,
    rentPerNight: 80,
    amenities: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    host: {
      avatar: `http://placebeard.it/g/74/74`,
      name: `Tom`,
      isSuper: true
    },
    reviews: [
      allReviews[0],
    ]
  },
  {
    photos: [
      `https://picsum.photos/260/200?grayscale`,
      `https://picsum.photos/260/200?grayscale`,
      `https://picsum.photos/260/200?grayscale`,
      `https://picsum.photos/260/200?grayscale`,
      `https://picsum.photos/260/200?grayscale`,
      `https://picsum.photos/260/200?grayscale`,
    ],
    header: `Short place description.`,
    description: `Lectus arcu bibendum at varius vel pharetra vel turpis.
      Dictum at tempor commodo ullamcorper. Consectetur adipiscing elit duis
      tristique sollicitudin nibh sit amet. Turpis in eu mi bibendum neque.
      Scelerisque in dictum non consectetur a erat nam at. Adipiscing enim eu
      turpis egestas pretium aenean pharetra. Vel facilisis volutpat
      est velit egestas dui. Porttitor leo a diam sollicitudin tempor id eu.
      Ac placerat vestibulum lectus mauris ultrices eros.
      Viverra aliquet eget sit amet tellus cras adipiscing enim eu.`,
    isPremium: true,
    type: `room`,
    rating: 4.8,
    bedroomCount: 1,
    guestCount: 2,
    rentPerNight: 150,
    amenities: [
      `Wi-Fi`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Kitchen`,
      `Cabel TV`,
    ],
    host: {
      avatar: `http://placebeard.it/g/74/74`,
      name: `Kane`,
      isSuper: false
    },
    reviews: [
      allReviews[1],
      allReviews[2],
      allReviews[3],
    ]
  },
  {
    photos: [
      `https://picsum.photos/260/200?grayscale`,
      `https://picsum.photos/260/200?grayscale`,
      `https://picsum.photos/260/200?grayscale`,
      `https://picsum.photos/260/200?grayscale`,
      `https://picsum.photos/260/200?grayscale`,
      `https://picsum.photos/260/200?grayscale`,
    ],
    header: `Not long headline.`,
    description: `Sodales ut eu sem integer vitae justo eget magna.
      Ut eu sem integer vitae justo eget magna fermentum iaculis.
      Venenatis tellus in metus vulputate eu scelerisque. Leo vel orci porta non.
      Magna sit amet purus gravida. Ut faucibus pulvinar elementum integer.
      In fermentum et sollicitudin ac orci phasellus. Duis convallis convallis
      tellus id interdum. Quisque id diam vel quam elementum pulvinar.
      Euismod lacinia at quis risus. Amet venenatis urna cursus eget.
      Ultricies mi quis hendrerit dolor magna eget est. At augue eget arcu
      dictum varius duis at consectetur lorem. In hac habitasse platea dictumst
      vestibulum rhoncus. Scelerisque purus semper eget duis at.
      Consequat ac felis donec et odio pellentesque diam volutpat.
      Et netus et malesuada fames ac turpis egestas.`,
    isPremium: false,
    type: `house`,
    rating: 4.7,
    bedroomCount: 4,
    guestCount: 7,
    rentPerNight: 250,
    amenities: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    host: {
      avatar: `http://placebeard.it/g/74/74`,
      name: `Frederik`,
      isSuper: true
    },
    reviews: [
      allReviews[4],
      allReviews[5],
    ]
  },
  {
    photos: [
      `https://picsum.photos/260/200?grayscale`,
      `https://picsum.photos/260/200?grayscale`,
      `https://picsum.photos/260/200?grayscale`,
      `https://picsum.photos/260/200?grayscale`,
      `https://picsum.photos/260/200?grayscale`,
      `https://picsum.photos/260/200?grayscale`,
    ],
    header: `Few words about that place.`,
    description: `Cum sociis natoque penatibus et magnis. Enim diam vulputate
      ut pharetra sit amet aliquam. Sit amet nisl suscipit adipiscing bibendum est.
      Ante in nibh mauris cursus mattis molestie. Viverra justo nec ultrices dui.
      Placerat vestibulum lectus mauris ultrices eros in cursus turpis massa.
      Amet porttitor eget dolor morbi.`,
    isPremium: true,
    type: `hotel`,
    rating: 4.9,
    bedroomCount: 1,
    guestCount: 2,
    rentPerNight: 120,
    amenities: [
      `Wi-Fi`,
      `Towels`,
      `Heating`,
      `Cabel TV`,
      `Fridge`
    ],
    host: {
      avatar: `http://placebeard.it/g/74/74`,
      name: `Sebastian`,
      isSuper: true
    },
    reviews: [
      allReviews[6],
      allReviews[7],
      allReviews[8],
      allReviews[9],
    ]
  },
];
