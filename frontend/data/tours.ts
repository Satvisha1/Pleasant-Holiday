import type { Tour } from "@/types/tour";

export const tours: Tour[] = [
  {
    id: 1,
    name: "Kathmandu Heritage Tour",
    slug: "kathmandu-heritage-tour",
    country: "Nepal",
    category: "Culture & Heritage",
    type: "Tour",

    duration: 6,
    durationLabel: "6 Days",

    shortDescription:
      "Explore Kathmandu's historic landmarks, traditional architecture, and cultural heritage.",

    image: "/images/tours/kathmandu-heritage.jpg",
    featured: true,

    overview: "",
    highlights: [],

    bestSeason: [],
    groupSize: "",
    startLocation: "",
    endLocation: "",

    itinerary: [],

    includes: [],
    excludes: [],
  },

  {
    id: 2,
    name: "4 Days Bhutan: Thimphu & Paro",
    slug: "bhutan-highlights-tour",
    country: "Bhutan",
    category: "Cultural Journey",
    type: "Tour",

    duration: 4,
    durationLabel: "4 Days",

    shortDescription:
      "Experience Bhutan through the cultural landmarks, mountain landscapes, traditional markets, and spiritual heritage of Thimphu and Paro.",

    image: "/images/tours/bhutan-tour.jpg",
    featured: true,

    overview:
      "A 4-day cultural journey through Thimphu and Paro, combining Bhutanese heritage, Buddhist landmarks, scenic mountain landscapes, local markets, and the iconic Taktshang Monastery, also known as Tiger's Nest.",

    highlights: [
      "Scenic flight into Paro",
      "Chuzom river confluence",
      "King's Memorial Chorten",
      "Trashichhoedzong",
      "Ka Ja Throm",
      "Buddha Dordenma",
      "Scenic Paro Valley",
      "Ta Dzong and National Museum",
      "Rinpung Dzong",
      "Paro main street and local market",
      "Taktshang Monastery (Tiger's Nest)",
      "Traditional hot stone bath",
    ],

    bestSeason: [],

    groupSize: "2 Pax",
    startLocation: "Paro, Bhutan",
    endLocation: "Paro, Bhutan",

    activities: [
      "Cultural sightseeing",
      "Monastery visits",
      "Heritage exploration",
      "Local market visits",
      "Hiking",
      "Hot stone bath",
    ],

    accommodationTypes: [
      "3-star hotels",
      "4-star hotels",
    ],

    mealPlan: [
      "Breakfast",
      "Lunch",
      "Dinner",
    ],

    transportationTypes: [
      "Private vehicle",
      "SUV",
      "Domestic/international flight",
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrive Paro & Transfer to Thimphu",
        description:
          "Arrive at Paro Airport and complete immigration and baggage formalities. Meet our representative and drive to Thimphu, the capital of Bhutan. En route, stop at Chuzom, the confluence of the Thimphu and Paro rivers, where Tibetan, Nepalese, and Bhutanese-style stupas can be seen. On arrival in Thimphu, check into the hotel. After lunch, visit King's Memorial Chorten, a landmark dedicated to peace and prosperity. Continue to Trashichhoedzong, the fortress of the glorious religion and an important centre of Bhutan's government and religion. In the evening, explore Ka Ja Throm, the vibrant market quarter where traditional and modern elements of Bhutanese life meet. Dinner and overnight at the hotel in Thimphu.",
        distance: "55 km",
        duration: "Approximately 1.5-hour drive",
        startLocation: "Paro",
        endLocation: "Thimphu",
        accommodation: "Hotel in Thimphu",
        meals: ["Lunch", "Dinner"],
        activities: [
          "Scenic drive",
          "Chuzom visit",
          "King's Memorial Chorten",
          "Trashichhoedzong",
          "Ka Ja Throm",
        ],
      },

      {
        day: 2,
        title: "Thimphu to Paro",
        description:
          "After breakfast, take a short drive to Buddha Dordenma, located atop a hill in Kuenselphodrang Nature Park. The massive gilded bronze statue offers panoramic views of the Thimphu Valley. After the visit, drive to Paro. The beautiful Paro Valley is known for its scenic landscapes, rich culture, ancient temples, monasteries, and terraced fields. After lunch, visit Ta Dzong, originally built as a watchtower and now home to the National Museum. Continue with a short walk to Rinpung Dzong, meaning the Fortress of the Heap of Jewels, known for its historic architecture and Buddhist wall paintings. In the evening, stroll around Paro's main street and local market. Dinner and overnight at the hotel in Paro.",
        distance: "55 km",
        duration: "Approximately 1.5-hour drive",
        startLocation: "Thimphu",
        endLocation: "Paro",
        accommodation: "Hotel in Paro",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          "Buddha Dordenma",
          "Scenic drive",
          "Paro Valley sightseeing",
          "Ta Dzong",
          "National Museum",
          "Rinpung Dzong",
          "Paro market",
        ],
      },

      {
        day: 3,
        title: "Paro & Tiger's Nest",
        description:
          "After breakfast, take an excursion to Taktshang Monastery, commonly known as Tiger's Nest. The monastery is perched on the side of a cliff approximately 900 metres above the Paro Valley floor. The round-trip walk takes approximately five hours. Taktshang is one of Bhutan's most famous and sacred monasteries and is traditionally associated with Guru Rinpoche. In the afternoon, enjoy a traditional hot stone bath. The remainder of the day is free for personal activities. Dinner and overnight at the hotel in Paro.",
        duration: "Approximately 5 hours round trip",
        startLocation: "Paro",
        endLocation: "Paro",
        accommodation: "Hotel in Paro",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          "Taktshang Monastery",
          "Tiger's Nest hike",
          "Hot stone bath",
          "Free time",
        ],
      },

      {
        day: 4,
        title: "Depart Paro",
        description:
          "After an early breakfast at the hotel, drive to Paro Airport for the onward flight. Our representative will assist with airport and exit formalities before departure.",
        startLocation: "Paro",
        endLocation: "Paro Airport",
        meals: ["Breakfast"],
        activities: [
          "Airport transfer",
          "Departure formalities",
        ],
      },
    ],

    includes: [
      "Accommodation as per selected hotel category",
      "Breakfast and dinner at the hotel",
      "Lunch at local tourist restaurants",
      "All transfers and sightseeing as per itinerary",
      "English-speaking accompanying guide",
      "Daily government royalties and taxes",
      "Bhutan visa fee",
      "Entrance fees",
    ],

    excludes: [
      "KTM-PBH-KTM airfare",
      "Airport taxes related to airfare",
      "Travel insurance",
      "Medical expenses",
      "Alcoholic and non-alcoholic beverages",
      "Personal expenses",
      "Tipping",
      "Laundry",
      "Telephone and fax charges",
      "Camera and video fees",
    ],

    generalInfo: {
      accommodation:
        "3-star or 4-star accommodation. 3-star option includes Thimphu Central or similar and Mandala Resort / Metta Resort or similar in Paro. 4-star option includes The Capital or similar in Thimphu and Kaachi Grand or similar in Paro.",
      meals:
        "Breakfast and dinner at the hotel and lunch at local tourist restaurants.",
      transportation:
        "Private SUV for a group of 2, such as Creta, Brezza, or Kia Seltos.",
      guideAndStaff:
        "English-speaking accompanying guide.",
      visa: "Bhutan visa fee included.",
      insurance:
        "Travel insurance is not included.",
      activityLevel:
        "Moderate, with approximately 5 hours of walking required for the Tiger's Nest excursion.",
    },

    faqs: [
      {
        question: "How long is the Bhutan tour?",
        answer:
          "The itinerary is a 4-day, 3-night journey covering Thimphu and Paro.",
      },
      {
        question: "Is airfare included in the tour?",
        answer:
          "No. Kathmandu-Paro-Kathmandu airfare is not included and is arranged separately.",
      },
      {
        question: "Does the itinerary include Tiger's Nest?",
        answer:
          "Yes. Day 3 includes an excursion to Taktshang Monastery, commonly known as Tiger's Nest, with approximately five hours of round-trip walking.",
      },
      {
        question: "What hotel categories are available?",
        answer:
          "The package offers 3-star and 4-star accommodation options.",
      },
    ],
  },

  {
    id: 3,
    name: "Tibet Overland Tour",
    slug: "tibet-overland-tour",
    country: "Tibet",
    category: "Scenic & Spiritual",
    type: "Tour",

    duration: 8,
    durationLabel: "8 Days",

    shortDescription:
      "Journey across dramatic high-altitude landscapes and experience Tibet's spiritual heritage.",

    image: "/images/tours/tibet-overland.jpg",
    featured: true,

    overview: "",
    highlights: [],

    bestSeason: [],
    groupSize: "",
    startLocation: "",
    endLocation: "",

    itinerary: [],

    includes: [],
    excludes: [],
  },

  {
    id: 4,
    name: "7 Days Bhutan: Thimphu, Punakha & Paro with Local Homestay",
    slug: "bhutan-thimphu-punakha-paro-homestay",
    country: "Bhutan",
    category: "Cultural & Homestay Journey",
    type: "Tour",

    duration: 7,
    durationLabel: "7 Days / 6 Nights",

    shortDescription:
      "Experience Bhutan through Thimphu, Punakha and Paro, with traditional cultural sites, Himalayan landscapes and an authentic local village homestay experience.",

    image: "/images/tours/bhutan-tour.jpg",
    featured: false,

    overview:
      "This 7-day Bhutan journey combines the cultural highlights of Thimphu, the historic valley of Punakha and the scenic Paro Valley with an authentic local homestay experience. The journey includes visits to Dochula Pass, Punakha Dzong, traditional villages, Tiger's Nest and important cultural sites while allowing time to experience local Bhutanese hospitality.",

    highlights: [
      "Scenic arrival through Paro International Airport",
      "Drive from Paro to Thimphu",
      "Confluence of the Paro and Thimphu rivers",
      "Dochula Pass at approximately 3,100 metres",
      "Punakha Dzong",
      "Traditional villages and cultural sites in Punakha Valley",
      "Local village homestay experience",
      "Traditional Bhutanese hospitality and meal",
      "Scenic drive from Punakha to Paro",
      "Tiger's Nest Monastery (Taktsang)",
      "Kyichu Lhakhang",
      "Paro Valley sightseeing",
      "Leisure and cultural interaction in Paro",
    ],

    bestSeason: [],

    groupSize: "2 Pax",
    startLocation: "Paro, Bhutan",
    endLocation: "Paro, Bhutan",

    activities: [
      "Cultural sightseeing",
      "Village exploration",
      "Homestay experience",
      "Scenic drives",
      "Monastery visits",
      "Mountain sightseeing",
      "Hiking",
      "Local cultural interaction",
    ],

    accommodationTypes: [
      "3-star hotels",
      "4-star hotels",
      "Local village homestay",
    ],

    mealPlan: [
      "Breakfast",
      "Lunch",
      "Dinner",
    ],

    transportationTypes: [
      "Private vehicle",
      "SUV",
      "International flight",
    ],

    itinerary: [
      {
        day: 1,
        title: "Paro Airport – Thimphu",
        description:
          "Upon arrival at Paro International Airport, meet your local guide and driver and drive to Thimphu, the capital city of Bhutan. The journey takes approximately 1.5 hours, covering around 50 km. En route, enjoy scenic views of the Bhutanese countryside and the confluence of the Paro and Thimphu rivers. Upon arrival in Thimphu, check into your hotel and spend the rest of the day at leisure or explore the town.",
        distance: "Approximately 50 km",
        duration: "Approximately 1.5 hours drive",
        startLocation: "Paro International Airport",
        endLocation: "Thimphu",
        accommodation: "Thimphu Central or similar, Thimphu",
        meals: ["Dinner"],
        activities: [
          "Airport arrival and transfer",
          "Scenic countryside drive",
          "Confluence of the Paro and Thimphu rivers",
          "Thimphu town exploration",
          "Leisure time",
        ],
      },

      {
        day: 2,
        title: "Thimphu – Punakha",
        description:
          "After breakfast, drive from Thimphu to Punakha, approximately 75 km away. The journey takes around 3 hours, including a stop at the beautiful Dochula Pass, located at an altitude of 3,100 metres. On a clear day, enjoy panoramic views of the Himalayan mountain ranges. Continue downhill through forests and traditional villages to Punakha. In the afternoon, visit Punakha Dzong, beautifully situated at the confluence of the Pho Chhu and Mo Chhu rivers.",
        distance: "Approximately 75 km",
        duration: "Approximately 3 hours drive",
        startLocation: "Thimphu",
        endLocation: "Punakha",
        accommodation: "River Valley or similar, Punakha",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          "Scenic drive to Punakha",
          "Dochula Pass",
          "Himalayan mountain views",
          "Forest and traditional village scenery",
          "Punakha Dzong",
        ],
      },

      {
        day: 3,
        title: "Punakha – Homestay Experience",
        description:
          "Today, explore the beautiful Punakha Valley and experience the local way of life. Visit traditional villages and nearby cultural sites, with opportunities to interact with local families and learn about Bhutanese traditions. Later, drive to the selected village homestay, approximately 20–30 km depending on the location. Enjoy a warm traditional Bhutanese meal and experience genuine Bhutanese hospitality.",
        distance: "Approximately 20–30 km",
        duration: "Approximately 1–1.5 hours drive",
        startLocation: "Punakha",
        endLocation: "Chimi Wangmo Village Homestay",
        accommodation: "Chimi Wangmo Village Homestay, Punakha",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          "Punakha Valley exploration",
          "Traditional village visits",
          "Cultural sightseeing",
          "Interaction with local families",
          "Learning about Bhutanese traditions",
          "Local village homestay",
          "Traditional Bhutanese meal",
        ],
      },

      {
        day: 4,
        title: "Punakha – Paro",
        description:
          "After breakfast, bid farewell to your host family and drive towards Paro. The journey is approximately 145 km and takes around 4.5–5 hours, depending on road conditions and sightseeing stops. The route takes you back through Dochula Pass before descending towards Thimphu and continuing to Paro. Upon arrival, check into your hotel and enjoy the remainder of the day at leisure.",
        distance: "Approximately 145 km",
        duration: "Approximately 4.5–5 hours drive",
        startLocation: "Punakha",
        endLocation: "Paro",
        accommodation: "Mandala Resort / Metta Resort or similar, Paro",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          "Farewell to host family",
          "Scenic mountain drive",
          "Dochula Pass",
          "Drive through Thimphu",
          "Arrival in Paro",
          "Leisure time",
        ],
      },

      {
        day: 5,
        title: "Paro – Tiger's Nest",
        description:
          "After breakfast, drive to the trailhead of the famous Tiger's Nest Monastery (Taktsang). The drive takes approximately 30 minutes each way. Spend the day hiking to this iconic monastery, dramatically perched on a cliffside approximately 900 metres above the Paro Valley. After the hike, return to Paro and relax at the hotel.",
        duration: "Approximately 30 minutes drive each way",
        startLocation: "Paro",
        endLocation: "Paro",
        accommodation: "Mandala Resort / Metta Resort or similar, Paro",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          "Drive to Tiger's Nest trailhead",
          "Tiger's Nest Monastery (Taktsang)",
          "Mountain hiking",
          "Paro Valley views",
          "Return to Paro",
          "Leisure time",
        ],
      },

      {
        day: 6,
        title: "Paro Valley Sightseeing",
        description:
          "Today, explore the cultural and historical highlights of the Paro Valley. Visit Kyichu Lhakhang, one of Bhutan's oldest temples, and explore the traditional town of Paro. Depending on your interests and available time, you may also visit Drukgyel Dzong and enjoy views of Mount Jomolhari from the surrounding area. The rest of the day can be kept relaxed for shopping, cultural interaction or leisure.",
        distance: "Approximately 30–50 km",
        duration: "Approximately 1–2 hours",
        startLocation: "Paro",
        endLocation: "Paro",
        accommodation: "Mandala Resort / Metta Resort or similar, Paro",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          "Kyichu Lhakhang",
          "Paro town",
          "Drukgyel Dzong",
          "Mount Jomolhari views",
          "Shopping",
          "Cultural interaction",
          "Leisure time",
        ],
      },

      {
        day: 7,
        title: "Paro – Paro International Airport",
        description:
          "After breakfast, check out from the hotel and transfer to Paro International Airport. Your guide and driver will assist you with the airport transfer for your onward journey.",
        distance: "Approximately 6 km",
        duration: "Approximately 15–20 minutes drive",
        startLocation: "Paro",
        endLocation: "Paro International Airport",
        meals: ["Breakfast"],
        activities: [
          "Breakfast",
          "Hotel check-out",
          "Airport transfer",
          "Departure from Bhutan",
        ],
      },
    ],

    includes: [
      "Accommodation as per the selected hotel option",
      "One night local village homestay experience",
      "Breakfast and dinner at hotels",
      "Lunch at local tourist restaurants",
      "Traditional Bhutanese meal during the homestay experience",
      "All transfers and sightseeing as per the itinerary",
      "English-speaking accompanying guide",
      "Daily Government Royalties and Taxes ($100 per person per night)",
      "Bhutan visa fee ($40 for one time)",
      "Entrance fees",
    ],

    excludes: [
      "Airfare and airport taxes",
      "Insurance of any kind",
      "Medical expenses",
      "Alcoholic and non-alcoholic beverages",
      "Expenses of a personal nature",
      "Tipping",
      "Laundry",
      "Telephone and fax calls",
      "Camera and video fees",
    ],

    generalInfo: {
      accommodation:
        "3-star or 4-star hotels according to the selected option, with one night at Chimi Wangmo Village Homestay in Punakha.",
      meals:
        "Breakfast and dinner at hotels and lunch at local tourist restaurants. Traditional Bhutanese meal included during the homestay experience.",
      transportation:
        "Private SUV for 2 Pax. Suggested vehicles include Creta, Breeza or Kia Seltos, with seating capacity for 5 including the driver.",
      guideAndStaff:
        "English-speaking accompanying guide and local driver.",
      permits:
        "Bhutan visa fee and entrance fees are included.",
      visa:
        "Bhutan visa fee of USD 40 for one time is included.",
      insurance:
        "Travel insurance and medical expenses are not included.",
      activityLevel:
        "Moderate, including hiking to Tiger's Nest.",
      clothing:
        "Comfortable clothing and suitable footwear are recommended for sightseeing and hiking activities.",
      culturalEtiquette:
        "Respect local customs, traditions, religious sites and community practices when visiting villages, monasteries and homestays.",
      responsibleTravel:
        "Respect local communities and traditions during the village homestay and cultural interactions.",
    },

    faqs: [
      {
        question: "What is the group size for this Bhutan tour?",
        answer:
          "The itinerary is designed for 2 passengers travelling on a double or twin occupancy basis.",
      },
      {
        question: "Does this tour include a local homestay?",
        answer:
          "Yes. The itinerary includes one night at Chimi Wangmo Village Homestay in Punakha.",
      },
      {
        question: "What are the accommodation options?",
        answer:
          "The tour offers 3-star and 4-star hotel options, with one night at Chimi Wangmo Village Homestay in Punakha.",
      },
      {
        question: "Is airfare included?",
        answer:
          "No. Airfare and airport taxes are not included and are arranged separately.",
      },
      {
        question: "Is Tiger's Nest included?",
        answer:
          "Yes. Day 5 includes a hike to Tiger's Nest Monastery, also known as Taktsang.",
      },
      {
        question: "Are meals included?",
        answer:
          "Yes. Breakfast and dinner are provided at the hotels, lunch is provided at local tourist restaurants and a traditional Bhutanese meal is included during the homestay experience.",
      },
    ],
  },

  {
    id: 5,
    name: "8 Days Bhutan: Thimphu, Punakha & Paro",
    slug: "bhutan-thimphu-punakha-paro-8-days",
    country: "Bhutan",
    category: "Cultural & Himalayan Journey",
    type: "Tour",

    duration: 8,
    durationLabel: "8 Days / 7 Nights",

    shortDescription:
      "Explore Bhutan's cultural heartland through Thimphu, Punakha and Paro, with historic monasteries, Himalayan viewpoints, village walks, Tiger's Nest and a scenic Chelela Pass excursion.",

    image: "/images/tours/bhutan-tour.jpg",
    featured: false,

    overview:
      "This 8-day Bhutan tour combines the cultural and historical highlights of Thimphu, Punakha and Paro. The journey includes Dochula Pass, Punakha Dzong, Kham Sum Yuelley Namgyal Chorten, Sangchhen Dorji Lhuendrup Lhakhang Nunnery, Chimi Lhakhang, Simtokha Dzong, Ta Dzong, Rinpung Dzong, Tiger's Nest, Kyichu Lhakhang and a scenic excursion to Chelela Pass.",

    highlights: [
      "Spectacular arrival flight into Paro",
      "Chuzom river confluence",
      "Thimphu Main Street and local market",
      "Local Crafts Bazaar",
      "National Library",
      "Institute for Zorig Chusum",
      "Textile Museum",
      "Simply Bhutan",
      "Pangri Zampa",
      "Buddha Point (Kuensel Phodrang)",
      "King's Memorial Chorten",
      "Trashichhoedzong",
      "Dochula Pass",
      "Punakha Dzong",
      "Kham Sum Yuelley Namgyal Chorten",
      "Sangchhen Dorji Lhuendrup Lhakhang Nunnery",
      "Chimi Lhakhang",
      "Simtokha Dzong",
      "Ta Dzong and National Museum",
      "Rinpung Dzong",
      "Tiger's Nest Monastery (Taktsang)",
      "Kyichu Lhakhang",
      "Chelela Pass",
      "Himalayan mountain views",
    ],

    bestSeason: [],

    groupSize: "2 Pax",
    startLocation: "Paro, Bhutan",
    endLocation: "Paro, Bhutan",

    activities: [
      "Cultural sightseeing",
      "Monastery visits",
      "Historical sightseeing",
      "Scenic drives",
      "Village walks",
      "Nature walks",
      "Hiking",
      "Mountain sightseeing",
      "Local market exploration",
    ],

    accommodationTypes: [
      "3-star hotels",
      "4-star hotels",
    ],

    mealPlan: [
      "Breakfast",
      "Lunch",
      "Dinner",
    ],

    transportationTypes: [
      "Private vehicle",
      "SUV",
      "International flight",
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrive Paro by Air & Transfer to Thimphu",
        description:
          "The flight to Paro is one of the most spectacular in the Himalayas. After immigration formalities and baggage collection, meet the representative and drive to Thimphu, the capital town of Bhutan. En route, stop at Chuzom, the confluence of the Thimphu and Paro rivers. Shortly before reaching Chuzom, see Tschogang Lhakhang, the temple of the excellent horse. On arrival in Thimphu, check into the hotel. In the evening, explore Thimphu Main Street and the market area and visit the Local Crafts Bazaar.",
        distance: "55 km",
        duration: "Approximately 1.5-hour drive",
        startLocation: "Paro International Airport",
        endLocation: "Thimphu",
        accommodation: "Thimphu Central or similar, Thimphu",
        meals: ["Dinner"],
        activities: [
          "Scenic flight arrival",
          "Airport arrival formalities",
          "Chuzom river confluence",
          "Tschogang Lhakhang",
          "Thimphu Main Street",
          "Thimphu market area",
          "Local Crafts Bazaar",
        ],
      },

      {
        day: 2,
        title: "Thimphu Sightseeing",
        description:
          "After breakfast, explore the Thimphu Valley. Visit the National Library, the Institute for Zorig Chusum, commonly known as the Painting School, the Textile Museum and Simply Bhutan. After lunch, take a short drive to Pangri Zampa, one of the oldest monasteries in Bhutan. Continue to Buddha Point (Kuensel Phodrang), offering views over the Thimphu Valley, followed by King's Memorial Chorten and Trashichhoedzong.",
        distance: "Approximately 15 km to Pangri Zampa",
        duration: "Full-day sightseeing",
        startLocation: "Thimphu",
        endLocation: "Thimphu",
        accommodation: "Thimphu Central or similar, Thimphu",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          "National Library",
          "Institute for Zorig Chusum",
          "Textile Museum",
          "Simply Bhutan",
          "Pangri Zampa",
          "Buddha Point (Kuensel Phodrang)",
          "King's Memorial Chorten",
          "Trashichhoedzong",
        ],
      },

      {
        day: 3,
        title: "Thimphu – Punakha",
        description:
          "After early breakfast, drive towards Punakha with a stop at Dochula Pass to enjoy the mountain scenery. Continue to Punakha and check into the hotel. Later, visit Punakha Dzong, a massive structure built at the junction of two rivers and the former capital of Bhutan.",
        distance: "75 km",
        duration: "Approximately 2.5-hour drive",
        startLocation: "Thimphu",
        endLocation: "Punakha",
        accommodation: "River Valley or similar, Punakha",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          "Scenic drive",
          "Dochula Pass",
          "Himalayan mountain views",
          "Punakha Valley",
          "Punakha Dzong",
        ],
      },

      {
        day: 4,
        title: "Punakha",
        description:
          "After breakfast, hike up through fields of chilies, cabbages and rice along the banks of the Mo Chhu to Kham Sum Yuelley Namgyal Chorten. Later, visit Sangchhen Dorji Lhuendrup Lhakhang Nunnery, perched on a ridge among pine trees and overlooking the valleys of Punakha and Wangdue Phodrang.",
        duration: "Full-day sightseeing and walking",
        startLocation: "Punakha",
        endLocation: "Punakha",
        accommodation: "River Valley or similar, Punakha",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          "Hike through agricultural fields",
          "Kham Sum Yuelley Namgyal Chorten",
          "Punakha Valley scenery",
          "Sangchhen Dorji Lhuendrup Lhakhang Nunnery",
          "Nature and cultural sightseeing",
        ],
      },

      {
        day: 5,
        title: "Punakha – Paro",
        description:
          "After breakfast, proceed for a short walking excursion to Chimi Lhakhang. From the hotel, it is about a 15-minute drive to the motorable road, after which the walk begins through paddy fields and villages. The total walk is approximately 1.5 hours including both ways. Continue driving to Paro along the scenic highway. En route, visit Simtokha Dzong, the oldest fortress of the country. On arrival in Paro, check into the hotel. After lunch, visit Ta Dzong, originally built as a watchtower and now home to the National Museum. Continue with a short walk to Rinpung Dzong.",
        distance: "120 km",
        duration: "Approximately 4.5-hour drive",
        startLocation: "Punakha",
        endLocation: "Paro",
        accommodation: "Mandala Resort / Metta Resort or similar, Paro",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          "Chimi Lhakhang",
          "Walk through paddy fields",
          "Traditional village walk",
          "Simtokha Dzong",
          "Ta Dzong",
          "National Museum",
          "Rinpung Dzong",
        ],
      },

      {
        day: 6,
        title: "Paro – Tiger's Nest",
        description:
          "After breakfast, take an excursion to Taktsang Monastery, also known as Tiger's Nest. The monastery is perched on the side of a cliff approximately 900 metres above the Paro Valley floor. Spend approximately five hours walking to and exploring the monastery before returning to Paro. In the evening, visit the 7th-century Kyichu Lhakhang, one of the 108 temples built in the Himalayas by the Tibetan King Songtsen Gampo.",
        duration: "Approximately 5 hours walking",
        startLocation: "Paro",
        endLocation: "Paro",
        accommodation: "Mandala Resort / Metta Resort or similar, Paro",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          "Tiger's Nest trail",
          "Taktsang Monastery",
          "Mountain hiking",
          "Paro Valley views",
          "Kyichu Lhakhang",
        ],
      },

      {
        day: 7,
        title: "Paro – Chelela Excursion",
        description:
          "The Chelela Pass excursion from Paro is a picturesque journey to one of Bhutan's highest motorable passes, located at an altitude of approximately 3,988 metres. The drive takes about an hour and offers stunning views of the Himalayan ranges, including Mount Jomolhari on clear days. Chelela is known for its vibrant prayer flags, serene atmosphere and surrounding natural environment. Visitors can enjoy short nature walks, spot rare flora and fauna or simply enjoy the mountain vistas. The pass is also a gateway to Haa Valley.",
        duration: "Approximately 1 hour drive",
        startLocation: "Paro",
        endLocation: "Paro",
        accommodation: "Mandala Resort / Metta Resort or similar, Paro",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          "Chelela Pass",
          "Himalayan mountain views",
          "Mount Jomolhari views on clear days",
          "Prayer flags",
          "Nature walks",
          "Flora and fauna observation",
          "Haa Valley",
        ],
      },

      {
        day: 8,
        title: "Depart Paro by Air",
        description:
          "After an early breakfast at the hotel, drive to Paro International Airport for the onward flight. The representative will assist with exit formalities before departure.",
        startLocation: "Paro",
        endLocation: "Paro International Airport",
        meals: ["Breakfast"],
        activities: [
          "Early breakfast",
          "Hotel check-out",
          "Airport transfer",
          "Departure formalities",
        ],
      },
    ],

    includes: [
      "Accommodation as per the selected hotel option",
      "Breakfast and dinner at hotels",
      "Lunch at local tourist restaurants",
      "All transfers and sightseeing as per the itinerary",
      "English-speaking accompanying guide",
      "Daily Government Royalties and Taxes ($100 per person per night)",
      "Bhutan visa fee ($40 for one time)",
      "Entrance fees",
    ],

    excludes: [
      "Airfare and airport taxes",
      "Insurance of any kind",
      "Medical expenses",
      "Alcoholic and non-alcoholic beverages",
      "Expenses of a personal nature",
      "Tipping",
      "Laundry",
      "Telephone and fax calls",
      "Camera and video fees",
    ],

    generalInfo: {
      accommodation:
        "3-star or 4-star hotels according to the selected option. Option A includes Thimphu Central or similar for 1 night, River Valley or similar in Punakha for 1 night and Mandala Resort / Metta Resort or similar in Paro for 3 nights. Option B includes The Capital or similar in Thimphu for 2 nights, Lobesa Boutique or similar in Punakha for 2 nights and Kaachi Grand or similar in Paro for 3 nights.",
      meals:
        "Breakfast and dinner at hotels and lunch at local tourist restaurants.",
      transportation:
        "Private SUV for 2 Pax. Suggested vehicles include Creta, Breeza or Kia Seltos, with seating capacity for 5 including the driver.",
      guideAndStaff:
        "English-speaking accompanying guide and local driver.",
      permits:
        "Bhutan visa fee and entrance fees are included.",
      visa:
        "Bhutan visa fee of USD 40 for one time is included.",
      insurance:
        "Travel insurance and medical expenses are not included.",
      activityLevel:
        "Moderate-Challenging, including the Tiger's Nest hike and walking excursions.",
      clothing:
        "Comfortable clothing and suitable footwear are recommended for sightseeing, walking and hiking activities.",
      culturalEtiquette:
        "Respect local customs, traditions and religious practices when visiting monasteries, temples and cultural sites.",
      responsibleTravel:
        "Respect local communities, religious sites and the natural environment throughout the journey.",
    },

    faqs: [
      {
        question: "What is the group size for this Bhutan tour?",
        answer:
          "The itinerary is designed for 2 passengers travelling on a double or twin occupancy basis.",
      },
      {
        question: "Is airfare included?",
        answer:
          "No. Airfare and airport taxes are not included and are arranged separately.",
      },
      {
        question: "Does the tour include Tiger's Nest?",
        answer:
          "Yes. The itinerary includes an excursion to Taktsang Monastery, also known as Tiger's Nest, on Day 6.",
      },
      {
        question: "Does the tour include Chelela Pass?",
        answer:
          "Yes. Day 7 includes a scenic excursion from Paro to Chelela Pass.",
      },
      {
        question: "What are the accommodation options?",
        answer:
          "The tour offers 3-star and 4-star accommodation options in Thimphu, Punakha and Paro.",
      },
      {
        question: "Are meals included?",
        answer:
          "Yes. Breakfast and dinner are provided at the hotels and lunch is provided at local tourist restaurants.",
      },
    ],
  },
];