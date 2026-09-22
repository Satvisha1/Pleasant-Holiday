import type { Trek } from "@/types/trek";

export const treks: Trek[] = [
  {
    id: 1,
    name: "Everest Base Camp Trek",
    slug: "everest-base-camp-trek",
    country: "Nepal",
    region: "Everest",
    type: "Trekking",

    duration: 16,
    durationLabel: "16 Days",
    difficulty: "Moderate",

    maxAltitude: "5,550m",

    altitudeDetails: {
      meters: 5550,
      feet: 18209,
      location: "Kala Patthar",
    },

    shortDescription:
      "A high-altitude journey through the Khumbu, combining Sherpa settlements, Himalayan viewpoints, Everest Base Camp, and Kala Patthar.",

    image: "/images/trekking/everest-base-camp.jpg",

    gallery: [
      {
        src: "/images/trekking/everest-base-camp.jpg",
        alt: "Everest Base Camp Trek mountain landscape",
        caption: "High Himalayan scenery along the Everest Base Camp journey.",
      },

      {
        src: "/images/trekking/everest-base-camp-1.jpg",
        alt: "Trekkers on the Everest Base Camp route",
        caption: "The Khumbu Glacier and surrounding peaks at Everest Base Camp.",
      },

      {
        src: "/images/trekking/everest-base-camp-2.jpg",
        alt: "Everest Base Camp trekking route",
        caption: "The high-altitude viewpoint of Kala Patthar at 5,550 metres.",
      },

      {
        src: "/images/trekking/namche-bazaar.jpg",
        alt: "Namche Bazaar in the Everest region",
        caption: "The vibrant town of Namche Bazaar in the Everest region.",
      },

      {
        src: "/images/trekking/tengboche-monastery-gate.jpg",
        alt: "Tengboche Monastery gate on the Everest route",
        caption: "Tengboche, known for its monastery and Himalayan setting.",
      },

      {
        src: "/images/trekking/kalapatthar-everest.jpg",
        alt: "Kala Patthar viewpoint in the Everest region",
        caption: "Kala Patthar, the highest point of this itinerary.",
      },
      
      {
        src: "/images/trekking/everest-region.jpg",
        alt: "Everest region mountain landscape",
        caption: "The dramatic high mountain landscape of the Everest region.",
      },
    ],

    routeSummary:
      "The journey begins in Kathmandu, travels by road to Ramechhap and by mountain flight to Lukla, then follows the Khumbu trail through Phakding, Namche Bazaar, Tengboche, Dingboche, Lobuche, Gorak Shep, Everest Base Camp and Kala Patthar before descending through Pheriche and returning to Kathmandu.",

    featured: true,

    overview:
      "The Everest Base Camp Trek is a 16-day Himalayan journey into Nepal's Khumbu region, following a progressive route from Kathmandu to the mountain settlements and high-altitude landscapes below Mount Everest. After a cultural introduction in Kathmandu, the journey continues via Ramechhap and Lukla before following the Dudh Koshi corridor towards Namche Bazaar. Dedicated acclimatisation days in Namche and Dingboche provide time to adapt as the route climbs through Tengboche, Lobuche and Gorak Shep. The journey reaches Everest Base Camp at 5,364 metres beside the Khumbu Glacier before continuing to Kala Patthar, the highest point of this itinerary at 5,550 metres and one of the route's major mountain viewpoints. Beyond the physical challenge, the trek is shaped by Sherpa communities, Buddhist monasteries, prayer walls, suspension bridges and the dramatic protected landscape of Sagarmatha National Park.",

    highlights: [
      "Reach Everest Base Camp at 5,364 metres beside the Khumbu Glacier",
      "Climb to Kala Patthar at 5,550 metres for a major Everest-region viewpoint",
      "Experience the mountain town of Namche Bazaar and highland Sherpa settlements",
      "Visit Tengboche and travel through a landscape shaped by Buddhist culture",
      "Follow a 16-day route with acclimatisation days in Namche and Dingboche",
      "Walk through the protected mountain environment of Sagarmatha National Park",
    ],

    bestSeason: [
      "March-May",
      "September-November",
    ],

    groupSize: "2-16 people",

    startLocation: "Kathmandu",
    endLocation: "Kathmandu",

    activities: [
      "Trekking",
      "Sightseeing",
      "Cultural exploration",
    ],

    accommodationTypes: [
      "Hotel",
      "Teahouse / Lodge",
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Kathmandu",
        description:
          "Arrive in Kathmandu and transfer to your hotel. The first day is kept comfortable, allowing time to settle in, recover from the journey and receive an initial introduction to the trek ahead.",
        altitude: "1,340m",
        accommodation: "Hotel",
        startLocation: "Kathmandu Airport",
        endLocation: "Kathmandu",
      },

      {
        day: 2,
        title: "Kathmandu Cultural Sightseeing",
        description:
          "Spend the day exploring significant cultural and religious sites in the Kathmandu Valley. The programme introduces Nepal's Hindu and Buddhist heritage before the journey moves towards the Everest region.",
        accommodation: "Hotel",
        startLocation: "Kathmandu",
        endLocation: "Kathmandu",
        activities: [
          "Sightseeing",
          "Cultural exploration",
        ],
      },

      {
        day: 3,
        title: "Drive to Ramechhap, Fly to Lukla and Trek to Phakding",
        description:
          "Travel by road towards Ramechhap and continue by mountain flight to Lukla. After meeting the trekking team, begin walking through the lower Khumbu landscape towards Phakding, following the valley and settlements beside the Dudh Koshi corridor.",
        altitude: "2,610m",
        duration: "Approx. 3 hours trekking",
        accommodation: "Teahouse / Lodge",
        startLocation: "Kathmandu",
        endLocation: "Phakding",
      },

      {
        day: 4,
        title: "Trek from Phakding to Namche Bazaar",
        description:
          "Continue through river valleys, villages and suspension bridges before entering the higher Khumbu. The route gradually becomes more demanding as it climbs towards Namche Bazaar, the principal mountain town of the Everest region.",
        altitude: "3,440m",
        duration: "6-7 hours",
        accommodation: "Teahouse / Lodge",
        startLocation: "Phakding",
        endLocation: "Namche Bazaar",
      },

      {
        day: 5,
        title: "Acclimatisation Day in Namche Bazaar",
        description:
          "Remain in Namche for a planned acclimatisation day. A gradual exploratory walk may be used to gain elevation before returning to sleep lower, while the remaining time allows further exploration of the town and surrounding Khumbu landscape.",
        altitude: "3,440m",
        accommodation: "Teahouse / Lodge",
        startLocation: "Namche Bazaar",
        endLocation: "Namche Bazaar",
        activities: [
          "Acclimatisation",
          "Exploration",
        ],
      },

      {
        day: 6,
        title: "Trek from Namche Bazaar to Tengboche",
        description:
          "Leave Namche and continue along mountain trails with changing views across the Khumbu. After descending towards the river, climb again to Tengboche, a settlement closely associated with one of the region's best-known Buddhist monasteries.",
        altitude: "3,860m",
        duration: "5-6 hours",
        accommodation: "Teahouse / Lodge",
        startLocation: "Namche Bazaar",
        endLocation: "Tengboche",
      },

      {
        day: 7,
        title: "Trek from Tengboche to Dingboche",
        description:
          "Continue deeper into the upper Khumbu as the vegetation gradually thins and the high-altitude character of the landscape becomes more pronounced. The trail passes mountain settlements before reaching Dingboche.",
        altitude: "4,410m",
        duration: "5-6 hours",
        accommodation: "Teahouse / Lodge",
        startLocation: "Tengboche",
        endLocation: "Dingboche",
      },

      {
        day: 8,
        title: "Acclimatisation Day in Dingboche",
        description:
          "Spend a second dedicated acclimatisation day at Dingboche. Depending on conditions and the group's progress, a controlled hike to higher ground may be used to support adaptation before returning to Dingboche for the night.",
        altitude: "4,410m",
        accommodation: "Teahouse / Lodge",
        startLocation: "Dingboche",
        endLocation: "Dingboche",
        activities: [
          "Acclimatisation",
          "Optional local hike",
        ],
      },

      {
        day: 9,
        title: "Trek from Dingboche to Lobuche",
        description:
          "The route continues into a more austere high-mountain environment, crossing open terrain and gradually gaining altitude towards Lobuche. The reduced oxygen and rocky trail make a measured pace increasingly important.",
        altitude: "4,910m",
        duration: "5-6 hours",
        accommodation: "Teahouse / Lodge",
        startLocation: "Dingboche",
        endLocation: "Lobuche",
      },

      {
        day: 10,
        title: "Trek to Gorak Shep and Visit Everest Base Camp",
        description:
          "Trek from Lobuche towards Gorak Shep, the final settlement used on the approach to Base Camp. Continue across demanding glacial terrain to Everest Base Camp at 5,364 metres, experience the Khumbu Glacier environment, and return to Gorak Shep for the night.",
        altitude: "5,364m at Everest Base Camp",
        duration: "7-8 hours",
        accommodation: "Teahouse / Lodge",
        startLocation: "Lobuche",
        endLocation: "Gorak Shep",
        activities: [
          "Trekking",
          "Everest Base Camp visit",
        ],
      },

      {
        day: 11,
        title: "Climb Kala Patthar and Trek to Pheriche",
        description:
          "Make an early ascent towards Kala Patthar, the highest point of the itinerary at approximately 5,550 metres. After taking in the high Himalayan panorama, descend through Gorak Shep and continue to the lower settlement of Pheriche.",
        altitude: "5,550m at Kala Patthar",
        duration: "7-8 hours",
        accommodation: "Teahouse / Lodge",
        startLocation: "Gorak Shep",
        endLocation: "Pheriche",
        activities: [
          "Kala Patthar ascent",
          "Trekking",
        ],
      },

      {
        day: 12,
        title: "Trek from Pheriche to Namche Bazaar",
        description:
          "Retrace the route through the Khumbu, losing significant altitude as the journey returns towards Namche Bazaar. Familiar mountain scenery is experienced from a different perspective during the long descent.",
        altitude: "3,440m",
        duration: "7-8 hours",
        accommodation: "Teahouse / Lodge",
        startLocation: "Pheriche",
        endLocation: "Namche Bazaar",
      },

      {
        day: 13,
        title: "Trek from Namche Bazaar to Lukla",
        description:
          "Continue down through the lower Khumbu, crossing river sections and settlements encountered earlier in the journey. The final trekking day concludes in Lukla.",
        altitude: "2,840m",
        duration: "6-7 hours",
        accommodation: "Teahouse / Lodge",
        startLocation: "Namche Bazaar",
        endLocation: "Lukla",
      },

      {
        day: 14,
        title: "Fly to Ramechhap and Drive to Kathmandu",
        description:
          "Take the return mountain flight from Lukla to Ramechhap and continue overland to Kathmandu. After the high-altitude journey, the remainder of the day is available for rest.",
        duration: "Approx. 15-minute flight plus road transfer",
        accommodation: "Hotel",
        startLocation: "Lukla",
        endLocation: "Kathmandu",
      },

      {
        day: 15,
        title: "Free Day and Contingency Day in Kathmandu",
        description:
          "Keep a flexible day in Kathmandu. This provides useful contingency within an itinerary that depends on mountain weather and domestic flight operations, while also allowing time for independent exploration or rest when the schedule runs normally.",
        accommodation: "Hotel",
        startLocation: "Kathmandu",
        endLocation: "Kathmandu",
        activities: [
          "Free time",
          "Contingency",
        ],
      },

      {
        day: 16,
        title: "International Departure",
        description:
          "Transfer to the airport according to your international flight schedule, bringing the 16-day Everest Base Camp journey to a close.",
        startLocation: "Kathmandu",
        endLocation: "Kathmandu Airport",
      },
    ],

    includes: [
      "Accommodation in Kathmandu",
      "04 Nights accommodation at Respective hotel in Kathmandu.",
      "11 Nights accommodation at Respective hotel / local Lodge / Guest house during the trekking.",
      "15 Breakfasts, 11 Lunches and 12 dinners as per the itinerary.",
      "Air-Conditioned Vehicle for transfers in Kathmandu airport and sightseeing tour.",
      "An English Speaking Local trekking Guide during the trekking.",
      "01 Porter every 02 pax during the trekking for carry Baggage.",
      "An English Speaking Local Guide during the sightseeing tour in Kathmandu.",
      "Monument entrance fees as per the itinerary [01 time visit]",
      "Air fare Kathmandu– Lukla – Kathmandu sector.",
      "Everest National Park fee [ENP]",
      "Trekking Information Management System fee [TIMS]",
      "All applicable Govt. taxes."
    ],

    excludes: [
      "Personal expenses and tips",
      "Travel insurance",
      "Visa fees",
      "Any additional activities or upgrades not mentioned in the itinerary"
    ],

    generalInfo: {
      accommodation:
        "The journey combines hotel accommodation in Kathmandu with locally operated teahouses or mountain lodges along the trekking route. Facilities generally become simpler as altitude increases.",

      meals:
        "Teahouses along the established Everest route typically provide a range of Nepali and international-style meals. Dal bhat is widely available, while menu choice may become more limited at higher elevations.",

      drinkingWater:
        "Safe hydration is particularly important at altitude. Travelers should follow the trip team's current water-treatment guidance and avoid drinking untreated water from uncertain sources.",

      difficulty:
        "The trek is graded Moderate, but the classification should not be mistaken for an easy walk. Long trekking days, uneven terrain, cold conditions and elevations above 5,000 metres create a substantial physical challenge.",

      fitness:
        "Regular cardiovascular exercise, hill walking and progressively longer hikes are recommended before departure. Previous technical mountaineering experience is not normally required for the standard trekking route, but good endurance and consistent preparation are important.",

      altitude:
        "Everest Base Camp is reached at approximately 5,364 metres, while this itinerary's highest point is Kala Patthar at approximately 5,550 metres. High altitude is therefore one of the defining challenges of the journey.",

      acclimatisation:
        "The 16-day programme includes dedicated acclimatisation days in Namche Bazaar and Dingboche. A gradual pace, adequate hydration and honest communication about symptoms remain essential throughout the ascent.",

      permits:
        "The route enters protected and locally administered areas of the Khumbu. Applicable national park entry requirements, local trekking or Trek-Card requirements, and any other current formalities should be reconfirmed and arranged according to the regulations in force at the time of travel.",

      transportation:
        "The planned journey combines road transport between Kathmandu and Ramechhap, mountain flights between Ramechhap and Lukla, and trekking on foot through the Khumbu. Flight arrangements may vary with season, operational conditions and weather.",

      luggage:
        "Travelers should keep trekking luggage practical and lightweight. Final baggage limits and porter arrangements must follow the confirmed package, airline restrictions and responsible porter-welfare practices.",

      electricity:
        "Charging facilities may be available at many settlements, often for an additional fee. Reliability and availability generally become less predictable higher on the route.",

      internet:
        "Mobile or Wi-Fi connectivity may be available in parts of the Everest region, but speed, coverage and reliability should not be assumed, particularly at higher elevations.",

      communication:
        "Communication options vary by settlement and network conditions. Travelers should expect intermittent connectivity rather than continuous access throughout the trek.",

      insurance:
        "Comprehensive travel insurance suitable for high-altitude trekking is strongly recommended. The policy should be checked carefully for altitude limits, medical treatment, trip disruption and emergency evacuation provisions.",

      equipment:
        "A layered clothing system, appropriate trekking footwear, cold-weather protection, sun protection, a suitable daypack and other high-altitude trekking essentials are required. The final packing list should reflect season and current route conditions.",

      weather:
        "Conditions can change rapidly in the Himalayas. Even during popular trekking seasons, travelers should be prepared for cold mornings and nights, strong sun, wind, cloud and possible disruption to mountain flights.",

      guideAndStaff:
        "The exact guide, porter and support arrangement should follow the confirmed Pleasant Holiday package. Staffing ratios, porter loads, insurance and welfare standards should be clearly defined before publication and booking.",
    },

    faqs: [
      {
        question: "How long is this Everest Base Camp Trek?",
        answer:
          "This itinerary is designed as a 16-day journey from arrival in Kathmandu to international departure. It includes trekking days, two planned acclimatisation days and a contingency day in Kathmandu.",
      },
      {
        question: "What is the highest point of the journey?",
        answer:
          "The itinerary reaches Everest Base Camp at approximately 5,364 metres and continues to Kala Patthar, listed for this programme at approximately 5,550 metres. Kala Patthar is the highest point of the itinerary.",
      },
      {
        question: "How difficult is the trek?",
        answer:
          "The trek is graded Moderate, but it remains a serious high-altitude journey. Travelers should expect long walking days, uneven trails, cold conditions and reduced oxygen as the route climbs above 5,000 metres.",
      },
      {
        question: "Do I need previous mountaineering experience?",
        answer:
          "The standard Everest Base Camp trekking route does not normally require technical mountaineering skills. However, good physical preparation, endurance and the ability to walk for several hours on consecutive days are important.",
      },
      {
        question: "Why are there acclimatisation days?",
        answer:
          "The itinerary includes dedicated days in Namche Bazaar and Dingboche to support gradual adaptation before moving to higher sleeping elevations. Acclimatisation reduces risk but does not eliminate the possibility of altitude illness.",
      },
      {
        question: "What are the preferred trekking seasons?",
        answer:
          "Spring from March to May and autumn from September to November are widely used trekking periods for this route. Conditions still vary from year to year, so travelers should prepare for changing mountain weather.",
      },
      {
        question: "What accommodation should I expect?",
        answer:
          "The journey combines hotel accommodation in Kathmandu with teahouses or mountain lodges during the trek. Higher-altitude accommodation is generally simpler than accommodation in Kathmandu.",
      },
      {
        question: "Can flights to Lukla be delayed?",
        answer:
          "Yes. Mountain flights are sensitive to weather and operating conditions. The itinerary therefore includes contingency planning, but travelers should still allow flexibility around international connections and onward plans.",
      },
      {
        question: "Is travel insurance important for this trek?",
        answer:
          "Yes. Travelers should check that their insurance is appropriate for high-altitude trekking and review the policy's altitude limits, medical coverage, cancellation provisions and emergency evacuation terms.",
      },
    ],

    relatedTrekSlugs: [
      "annapurna-base-camp-trek",
      "manaslu-trek",
      "annapurna-circuit-trek",
    ],

    seo: {
      title:
        "Everest Base Camp Trek - 16 Day EBC Journey | Pleasant Holiday",

      description:
        "Explore a 16-day Everest Base Camp Trek through Nepal's Khumbu region, with Namche Bazaar, Tengboche, acclimatisation days, EBC and Kala Patthar.",

      keywords: [
        "Everest Base Camp Trek",
        "EBC Trek",
        "Everest Trek Nepal",
        "Kala Patthar Trek",
        "Khumbu Trek",
        "16 Day Everest Base Camp Trek",
      ],
    },
  },

  {
    id: 2,
    name: "Annapurna Base Camp Trek",
    slug: "annapurna-base-camp-trek",
    country: "Nepal",
    region: "Annapurna",
    type: "Trekking",

    duration: 16,
    durationLabel: "16 Days",
    difficulty: "Moderate",
    maxAltitude: "4,100m",

    shortDescription:
      "Journey deep into the Annapurna Sanctuary beneath some of Nepal's most dramatic peaks.",

    image: "/images/trekking/annapurna-base-camp.jpg",
    featured: true,

    overview:
      "The Annapurna Base Camp Trek combines mountain scenery, traditional villages, forests, and a spectacular journey into the Annapurna Sanctuary.",

    highlights: [
      "Reach Annapurna Base Camp",
      "Explore the Annapurna Sanctuary",
      "Walk through traditional mountain villages",
      "Experience diverse landscapes",
      "Enjoy close Himalayan views",
    ],

    bestSeason: ["March-May", "September-November"],
    groupSize: "2-16 people",
    startLocation: "Kathmandu",
    endLocation: "Kathmandu",

    itinerary: [],

    includes: [],
    excludes: [],
  },

  {
    id: 3,
    name: "Ghorepani Poon Hill Trek",
    slug: "ghorepani-poon-hill-trek",
    country: "Nepal",
    region: "Annapurna",
    type: "Trekking",

    duration: 11,
    durationLabel: "11 Days",
    difficulty: "Easy-Moderate",
    maxAltitude: "3,210m",

    shortDescription:
      "A scenic trek through traditional villages to one of Nepal's finest Himalayan viewpoints.",

    image: "/images/trekking/poon-hill.jpg",
    featured: true,

    overview:
      "The Ghorepani Poon Hill Trek is a rewarding Himalayan journey known for village experiences, rhododendron forests, and panoramic sunrise views.",

    highlights: [
      "Watch sunrise from Poon Hill",
      "Walk through rhododendron forests",
      "Visit traditional villages",
      "See the Annapurna and Dhaulagiri ranges",
      "Experience a shorter Himalayan trek",
    ],

    bestSeason: ["March-May", "September-November"],
    groupSize: "2-16 people",
    startLocation: "Kathmandu",
    endLocation: "Kathmandu",

    itinerary: [
      {
        day: 1,
        title: "Arrival in Kathmandu",
        description:
          "Arrive in Kathmandu and transfer to your hotel. The day is kept free to rest and settle in before the trekking programme begins.",
        altitude: "1,350m",
        accommodation: "Hotel",
        startLocation: "Kathmandu Airport",
        endLocation: "Kathmandu",
      },

      {
        day: 2,
        title: "Kathmandu Cultural Sightseeing",
        description:
          "After breakfast, receive a short briefing about the Poon Hill trek before exploring Kathmandu City, Swayambhunath and Patan Durbar Square. The day introduces the cultural and historical heritage of the Kathmandu Valley, with free time in Thamel for trekking equipment if required.",
        altitude: "1,350m",
        accommodation: "Hotel",
        startLocation: "Kathmandu",
        endLocation: "Kathmandu",
        activities: [
          "Sightseeing",
          "Cultural exploration",
        ],
      },

      {
        day: 3,
        title: "Drive from Kathmandu to Pokhara",
        description:
          "After breakfast, drive approximately 210 kilometres from Kathmandu to Pokhara via the Prithivi Highway. Enjoy views of the changing landscapes and reach Pokhara, a city known for its lakes and Himalayan scenery. The remainder of the day is at leisure.",
        altitude: "Approx. 900m",
        duration: "6-7 hours drive",
        accommodation: "Hotel",
        startLocation: "Kathmandu",
        endLocation: "Pokhara",
      },

      {
        day: 4,
        title: "Drive to Nayapul and Trek to Tikhedhunga",
        description:
          "Drive from Pokhara to Nayapul, the starting point of the trek. Continue on foot through Birethanti and along the Broomdi Khola, passing Sudame and Hile before reaching Tikhedhunga.",
        altitude: "1,495m",
        duration: "Approx. 1.5 hours drive and 3-4 hours trekking",
        accommodation: "Local Lodge",
        startLocation: "Pokhara",
        endLocation: "Tikhedhunga",
        activities: [
          "Trekking",
        ],
      },

      {
        day: 5,
        title: "Trek from Tikhedhunga to Ghorepani",
        description:
          "Begin the day's climb through the long stone staircases towards Ulleri, with views of Annapurna South and Hiunchuli. Continue through rhododendron and oak forests before reaching Ghorepani, where views of the Dhaulagiri and Annapurna ranges can be enjoyed.",
        altitude: "2,850m",
        duration: "5-6 hours",
        accommodation: "Local Lodge",
        startLocation: "Tikhedhunga",
        endLocation: "Ghorepani",
        activities: [
          "Trekking",
          "Mountain sightseeing",
        ],
      },

      {
        day: 6,
        title: "Ghorepani to Poon Hill and Trek to Tadapani",
        description:
          "Start early with a hike to Poon Hill for sunrise and panoramic Himalayan views including Dhaulagiri, Annapurna South and Fishtail. Return to Ghorepani for breakfast before continuing the trek towards Tadapani.",
        altitude: "3,210m at Poon Hill",
        duration: "Approx. 1 hour to Poon Hill and 4-5 hours to Tadapani",
        accommodation: "Local Lodge",
        startLocation: "Ghorepani",
        endLocation: "Tadapani",
        activities: [
          "Poon Hill sunrise",
          "Trekking",
          "Mountain sightseeing",
        ],
      },

      {
        day: 7,
        title: "Trek from Tadapani to Ghandruk",
        description:
          "Descend through forested trails from Tadapani before reaching Ghandruk, a traditional Gurung village known for its local culture, lifestyle and mountain views.",
        altitude: "1,940m",
        duration: "5-6 hours",
        accommodation: "Local Lodge",
        startLocation: "Tadapani",
        endLocation: "Ghandruk",
        activities: [
          "Trekking",
          "Cultural exploration",
        ],
      },

      {
        day: 8,
        title: "Trek from Ghandruk to Nayapul and Drive to Pokhara",
        description:
          "Trek downhill from Ghandruk through Birethanti to Nayapul, where the trekking section ends. Continue by road to Pokhara and check in at the hotel. The remainder of the day is at leisure.",
        altitude: "1,100m",
        duration: "3-4 hours trekking and approx. 1.5 hours drive",
        accommodation: "Hotel",
        startLocation: "Ghandruk",
        endLocation: "Pokhara",
        activities: [
          "Trekking",
          "Drive",
        ],
      },

      {
        day: 9,
        title: "Pokhara Sightseeing",
        description:
          "After breakfast, enjoy a half-day sightseeing tour of Pokhara including Davis Fall, the Tibetan Camp and Lakeside. The afternoon is free to explore and relax around Lakeside.",
        altitude: "Approx. 900m",
        accommodation: "Hotel",
        startLocation: "Pokhara",
        endLocation: "Pokhara",
        activities: [
          "Sightseeing",
          "Cultural exploration",
        ],
      },

      {
        day: 10,
        title: "Drive from Pokhara to Kathmandu",
        description:
          "After breakfast, drive back to Kathmandu. Upon arrival, check in at the hotel and enjoy free time in the afternoon. In the evening, attend a farewell dinner at a local restaurant.",
        altitude: "1,350m",
        duration: "6-7 hours drive",
        accommodation: "Hotel",
        startLocation: "Pokhara",
        endLocation: "Kathmandu",
      },

      {
        day: 11,
        title: "International Departure",
        description:
          "After breakfast, transfer to the international airport for your onward flight, bringing the Ghorepani Poon Hill journey to an end.",
        startLocation: "Kathmandu",
        endLocation: "Kathmandu Airport",
      },
    ],

    includes: [
      "03 Nights accommodation at Respective hotel in Kathmandu.",
      "03 Nights accommodation at Respective hotel in Pokhara.",
      "04 Nights accommodation at Respective hotel / local Lodge / Guest house during the trekking.",
      "10 Breakfasts, 5 Lunches and 5 dinners as per the itinerary.",
      "Air-Conditioned Vehicle for transfers from Kathmandu – Pokhara – Kathmandu & Pokhara trek start point drop & pick-up to trek end point and sightseeing tours in Kathmandu & Pokhara.",
      "An English Speaking Local trekking Guide during the trekking.",
      "01 Porter every 02 pax during the trekking for carry Baggage.",
      "An English Speaking Local Guide during the sightseeing tour in Kathmandu & Pokhara.",
      "Monument entrance fees as per the itinerary [01 time visit]",
      "Annapurna Conservation Area Project fee [ACAP]",
      "Trekking Information Management System fee [TIMS]",
      "All applicable Govt. taxes.",
    ],

    excludes: [
      "Nepal Visa Fee USD 30.00 per person for 15 days",
      "International / domestic sectors airfare.",
      "Airport tax.",
      "Tips for Guide, Driver, Porter and other supporting staff.",
      "Lunch & dinner in Kathmandu & Pokhara.",
      "Drinks, laundry, telephone calls bills, Internet bill",
      "Sleeping bag during the trekking",
      "Other expenses not specified above.",
      "Personal insurance.",
    ],
  },

  {
    id: 4,
    name: "Langtang Village Trek",
    slug: "langtang-village-trek",
    country: "Nepal",
    region: "Langtang",
    type: "Trekking",

    duration: 11,
    durationLabel: "11 Days",
    difficulty: "Moderate",
    maxAltitude: "3,800m",

    shortDescription:
      "Discover mountain villages, forests, and Himalayan landscapes close to Kathmandu.",

    image: "/images/trekking/langtang.jpg",
    featured: false,

    overview:
      "The Langtang Village Trek explores one of Nepal's most accessible Himalayan regions, combining mountain scenery with local culture and traditional settlements.",

    highlights: [
      "Explore the Langtang Valley",
      "Visit traditional mountain settlements",
      "Experience Tamang culture",
      "Walk through alpine landscapes",
      "Enjoy Himalayan scenery near Kathmandu",
    ],

    bestSeason: ["March-May", "September-November"],
    groupSize: "2-16 people",
    startLocation: "Kathmandu",
    endLocation: "Kathmandu",

    itinerary: [
      {
        day: 1,
        title: "Arrival in Kathmandu",
        description:
          "Arrive in Kathmandu and transfer to your hotel. The day is kept free to rest and settle in before the trekking programme begins.",
        altitude: "1,350m",
        accommodation: "Hotel",
        startLocation: "Kathmandu Airport",
        endLocation: "Kathmandu",
      },

      {
        day: 2,
        title: "Kathmandu Cultural Sightseeing",
        description:
          "After breakfast, receive a short briefing about the Langtang trek before exploring Kathmandu City, Swayambhunath and Patan Durbar Square. The day introduces the cultural and historical heritage of the Kathmandu Valley, with time in Thamel for trekking equipment if required.",
        altitude: "1,350m",
        accommodation: "Hotel",
        startLocation: "Kathmandu",
        endLocation: "Kathmandu",
        activities: [
          "Sightseeing",
          "Cultural exploration",
        ],
      },

      {
        day: 3,
        title: "Drive from Kathmandu to Syabrubesi",
        description:
          "After breakfast, drive from Kathmandu to Syabrubesi, following the road towards the Langtang region. The journey covers approximately 175 kilometres and takes around 7-8 hours.",
        altitude: "1,492m",
        duration: "7-8 hours drive",
        accommodation: "Local Lodge",
        startLocation: "Kathmandu",
        endLocation: "Syabrubesi",
      },

      {
        day: 4,
        title: "Trek from Syabrubesi to Lama Hotel",
        description:
          "Begin the Langtang trek from Syabrubesi and follow the mountain trail towards Lama Hotel. The day involves approximately 6-7 hours of walking through the Langtang landscape.",
        altitude: "2,748m",
        duration: "6-7 hours",
        accommodation: "Local Lodge",
        startLocation: "Syabrubesi",
        endLocation: "Lama Hotel",
        activities: [
          "Trekking",
        ],
      },

      {
        day: 5,
        title: "Trek from Lama Hotel to Langtang Village",
        description:
          "Continue the trek from Lama Hotel towards Langtang Village. The route gradually climbs through the Langtang landscape before reaching the village at approximately 3,500 metres.",
        altitude: "3,500m",
        duration: "6-7 hours",
        accommodation: "Local Lodge",
        startLocation: "Lama Hotel",
        endLocation: "Langtang Village",
        activities: [
          "Trekking",
          "Mountain sightseeing",
        ],
      },

      {
        day: 6,
        title: "Trek from Langtang Village to Kyanjin",
        description:
          "Continue deeper into the Langtang Valley with a trek from Langtang Village to Kyanjin. The route climbs to approximately 3,800 metres and provides an increasingly high-mountain environment.",
        altitude: "3,800m",
        duration: "6-7 hours",
        accommodation: "Local Lodge",
        startLocation: "Langtang Village",
        endLocation: "Kyanjin",
        activities: [
          "Trekking",
          "Mountain sightseeing",
        ],
      },

      {
        day: 7,
        title: "Explore Kyanjin",
        description:
          "Spend the day in Kyanjin exploring the surrounding area, including the monastery and local village. The day provides time to experience the local Himalayan environment before beginning the return journey.",
        altitude: "3,800m",
        accommodation: "Local Lodge",
        startLocation: "Kyanjin",
        endLocation: "Kyanjin",
        activities: [
          "Exploration",
          "Cultural exploration",
        ],
      },

      {
        day: 8,
        title: "Trek from Kyanjin to Lama Hotel",
        description:
          "After breakfast, begin the descent from Kyanjin and retrace the trail towards Lama Hotel. The return trek takes approximately 7-8 hours.",
        altitude: "2,848m",
        duration: "7-8 hours",
        accommodation: "Local Lodge",
        startLocation: "Kyanjin",
        endLocation: "Lama Hotel",
        activities: [
          "Trekking",
        ],
      },

      {
        day: 9,
        title: "Trek from Lama Hotel to Syabrubesi",
        description:
          "Continue descending from Lama Hotel to Syabrubesi. The trekking day takes approximately 6-7 hours before reaching the road-accessible settlement.",
        altitude: "1,492m",
        duration: "6-7 hours",
        accommodation: "Local Lodge",
        startLocation: "Lama Hotel",
        endLocation: "Syabrubesi",
        activities: [
          "Trekking",
        ],
      },

      {
        day: 10,
        title: "Drive from Syabrubesi to Kathmandu",
        description:
          "After breakfast, drive from Syabrubesi back to Kathmandu. Upon arrival, check in at the hotel and enjoy free time in the afternoon. In the evening, attend a farewell dinner at a local restaurant.",
        altitude: "1,350m",
        duration: "7-8 hours drive",
        accommodation: "Hotel",
        startLocation: "Syabrubesi",
        endLocation: "Kathmandu",
      },

      {
        day: 11,
        title: "International Departure",
        description:
          "After breakfast, transfer to the international airport for your onward flight, bringing the Langtang Village Trek journey to an end.",
        startLocation: "Kathmandu",
        endLocation: "Kathmandu Airport",
      },
    ],

    includes: [
      "03 Nights accommodation at Respective hotel in Kathmandu.",
      "07 Nights accommodation at Respective hotel / local Lodge / Guest house during the trekking.",
      "10 Breakfasts, 8 Lunches and 8 dinners as per the itinerary.",
      "Air-Conditioned Vehicle for transfers in Kathmandu and sightseeing tours in Kathmandu.",
      "Air-Conditioned Jeep for transfers from Kathmandu – Syabrubesi – Kathmandu.",
      "An English Speaking Local Guide during the sightseeing tour in Kathmandu.",
      "An English Speaking Local trekking Guide during the trekking.",
      "01 Porter every 02 pax during the trekking for carry Baggage.",
      "Monument entrance fees as per the itinerary [01 time visit]",
      "Langtang National Park fee.",
      "Trekking Information Management System fee [TIMS]",
      "All applicable Govt. taxes.",
    ],

    excludes: [
      "Nepal Visa Fee USD 30.00 per person for 15 days",
      "International/ domestic sector airfare.",
      "Airport tax.",
      "Tips for Guide, Driver, Porter and other supporting staff.",
      "Lunch & dinner in Kathmandu",
      "Drinks, laundry, telephone calls bills, Internet bill",
      "Sleeping bag during the trekking",
      "Other expenses not specified above.",
      "Personal insurance.",
    ],
  },

  {
    id: 5,
    name: "Manaslu Trek",
    slug: "manaslu-trek",
    country: "Nepal",
    region: "Manaslu",
    type: "Trekking",

    duration: 18,
    durationLabel: "18 Days",
    difficulty: "Challenging",
    maxAltitude: "5,460m",

    shortDescription:
      "A remote high-altitude circuit through dramatic valleys and traditional Himalayan settlements.",

    image: "/images/trekking/manaslu.jpg",
    featured: true,

    overview:
      "The Manaslu Trek is a challenging Himalayan journey through remote landscapes, culturally rich villages, and high mountain terrain surrounding Mount Manaslu.",

    highlights: [
      "Explore the remote Manaslu region",
      "Cross dramatic high-altitude terrain",
      "Experience traditional Himalayan culture",
      "Walk through changing landscapes",
      "Enjoy views of Mount Manaslu",
    ],

    bestSeason: ["March-May", "September-November"],
    groupSize: "2-16 people",
    startLocation: "Kathmandu",
    endLocation: "Kathmandu",

    itinerary: [],

    includes: [],
    excludes: [],
  },

  {
    id: 6,
    name: "Annapurna Circuit Trek",
    slug: "annapurna-circuit-trek",
    country: "Nepal",
    region: "Annapurna",
    type: "Trekking",

    duration: 17,
    durationLabel: "17 Days",
    difficulty: "Challenging",
    maxAltitude: "5,416m",

    shortDescription:
      "A classic Himalayan circuit crossing diverse landscapes and the high Thorong La Pass.",

    image: "/images/trekking/annapurna-circuit.jpg",
    featured: false,

    overview:
      "The Annapurna Circuit Trek is one of Nepal's classic long-distance journeys, crossing varied landscapes and high mountain terrain around the Annapurna massif.",

    highlights: [
      "Cross Thorong La Pass",
      "Explore diverse Himalayan landscapes",
      "Visit traditional mountain villages",
      "Experience major ecological changes",
      "See the Annapurna mountain range",
    ],

    bestSeason: ["March-May", "September-November"],
    groupSize: "2-16 people",
    startLocation: "Kathmandu",
    endLocation: "Kathmandu",

    itinerary: [
      {
        day: 1,
        title: "Arrival in Kathmandu",
        description:
          "Arrive in Kathmandu and transfer to your hotel. The day is kept free to rest and settle in before the Annapurna Circuit programme begins.",
        altitude: "1,350m",
        accommodation: "Hotel",
        startLocation: "Kathmandu Airport",
        endLocation: "Kathmandu",
      },

      {
        day: 2,
        title: "Kathmandu Cultural Sightseeing",
        description:
          "After breakfast, receive a short briefing about the Annapurna Circuit trek before exploring Kathmandu City, Swayambhunath and Patan Durbar Square. The day introduces the cultural and historical heritage of the Kathmandu Valley, with time in Thamel for trekking equipment if required.",
        altitude: "1,350m",
        accommodation: "Hotel",
        startLocation: "Kathmandu",
        endLocation: "Kathmandu",
        activities: [
          "Sightseeing",
          "Cultural exploration",
        ],
      },

      {
        day: 3,
        title: "Drive to Besisahar and Trek to Bahundanda",
        description:
          "After breakfast, drive from Kathmandu to Besisahar. From Besisahar, begin trekking towards Bahundanda, following the Marsyangdi River upstream and crossing suspension bridges before reaching the hillside settlement.",
        altitude: "1,311m",
        duration: "5-6 hours drive and approx. 3 hours trekking",
        accommodation: "Lodge",
        startLocation: "Kathmandu",
        endLocation: "Bahundanda",
        activities: [
          "Drive",
          "Trekking",
        ],
      },

      {
        day: 4,
        title: "Trek from Bahundanda to Chamje",
        description:
          "Continue upstream through a narrowing gorge, crossing bridges and passing small settlements before reaching Chamje. The changing architecture, vegetation and local culture become increasingly noticeable along the route.",
        altitude: "1,390m",
        duration: "5-6 hours",
        accommodation: "Local Lodge",
        startLocation: "Bahundanda",
        endLocation: "Chamje",
        activities: [
          "Trekking",
        ],
      },

      {
        day: 5,
        title: "Trek from Chamje to Bagarchap",
        description:
          "Leave Chamje and continue through the increasingly impressive gorge into the district of Manang. The trail gradually climbs towards Bagarchap, where traditional houses, a local temple and views of the Annapurna and Lamjung Himal can be experienced.",
        altitude: "2,103m",
        duration: "5-6 hours",
        accommodation: "Local Lodge",
        startLocation: "Chamje",
        endLocation: "Bagarchap",
        activities: [
          "Trekking",
          "Cultural exploration",
        ],
      },

      {
        day: 6,
        title: "Trek from Bagarchap to Chame",
        description:
          "Continue from Bagarchap through a narrow and picturesque valley surrounded by temperate broad-leaved forest. Reach Chame, the administrative centre of Manang, with its religious buildings and hot springs.",
        altitude: "2,615m",
        duration: "5-6 hours",
        accommodation: "Local Lodge",
        startLocation: "Bagarchap",
        endLocation: "Chame",
        activities: [
          "Trekking",
          "Mountain sightseeing",
        ],
      },

      {
        day: 7,
        title: "Trek from Chame to Pisang",
        description:
          "Continue through forests of pine, hemlock and cypress towards Pisang. The route reaches lower Pisang, with a side trip to higher Pisang offering views of Annapurna II.",
        altitude: "3,133m",
        duration: "5-6 hours",
        accommodation: "Local Lodge",
        startLocation: "Chame",
        endLocation: "Pisang",
        activities: [
          "Trekking",
          "Mountain sightseeing",
        ],
      },

      {
        day: 8,
        title: "Trek from Pisang to Manang",
        description:
          "Continue towards Manang using either the lower or higher route. The higher route provides outstanding views of the Annapurna Himal before the trails converge at Braga, home to an old monastery, before reaching Manang.",
        altitude: "3,500m",
        duration: "5-6 hours",
        accommodation: "Local Lodge",
        startLocation: "Pisang",
        endLocation: "Manang",
        activities: [
          "Trekking",
          "Cultural exploration",
        ],
      },

      {
        day: 9,
        title: "Rest Day in Manang",
        description:
          "Spend a full day in Manang for rest and exploration. Visit nearby local houses and experience the surrounding settlement before continuing towards higher elevations.",
        altitude: "3,500m",
        accommodation: "Local Lodge",
        startLocation: "Manang",
        endLocation: "Manang",
        activities: [
          "Rest",
          "Local exploration",
        ],
      },

      {
        day: 10,
        title: "Trek from Manang to Latdar",
        description:
          "Leave Manang and continue into higher terrain where facilities become increasingly limited. Cross small tributaries and follow pleasant meadows with occasional birch groves towards Latdar.",
        altitude: "4,176m",
        duration: "6-7 hours",
        accommodation: "Local Lodge",
        startLocation: "Manang",
        endLocation: "Latdar",
        activities: [
          "Trekking",
        ],
      },

      {
        day: 11,
        title: "Trek from Latdar to Thorong Phedi",
        description:
          "Continue gaining altitude gradually towards Thorong Phedi, the settlement at the foot of the high mountain pass. The day prepares the route for the following day's crossing of Thorong-La Pass.",
        altitude: "4,404m",
        duration: "6-7 hours",
        accommodation: "Local Lodge",
        startLocation: "Latdar",
        endLocation: "Thorong Phedi",
        activities: [
          "Trekking",
        ],
      },

      {
        day: 12,
        title: "Cross Thorong-La Pass and Trek to Muktinath",
        description:
          "Leave Thorong Phedi and climb steadily towards Thorong-La Pass, the highest point of the trek at approximately 5,416 metres. Cross the pass before descending towards Muktinath, an important pilgrimage site for both Hindus and Buddhists.",
        altitude: "5,416m at Thorong-La Pass",
        duration: "9-10 hours",
        accommodation: "Local Lodge",
        startLocation: "Thorong Phedi",
        endLocation: "Muktinath",
        activities: [
          "Trekking",
          "High mountain pass crossing",
          "Cultural exploration",
        ],
      },

      {
        day: 13,
        title: "Trek from Muktinath to Jomsom",
        description:
          "Trek from Muktinath towards Jomsom, passing through the Mustang region and the significant trading settlement of Kagbeni. Continue through the changing landscape with views towards Dhaulagiri before reaching Jomsom.",
        altitude: "2,700m",
        duration: "6-7 hours",
        accommodation: "Local Lodge",
        startLocation: "Muktinath",
        endLocation: "Jomsom",
        activities: [
          "Trekking",
          "Cultural exploration",
        ],
      },

      {
        day: 14,
        title: "Fly or Drive from Jomsom to Pokhara",
        description:
          "After breakfast, travel from Jomsom to Pokhara either by a short flight or by road. On arrival in Pokhara, check in at the hotel and enjoy the remainder of the day at leisure.",
        altitude: "Approx. 900m",
        duration: "Approx. 20-minute flight or 8-9 hours drive",
        accommodation: "Hotel",
        startLocation: "Jomsom",
        endLocation: "Pokhara",
      },

      {
        day: 15,
        title: "Pokhara Sightseeing",
        description:
          "After breakfast, enjoy a half-day sightseeing tour of Pokhara. The afternoon is free to explore and relax around Lakeside.",
        altitude: "Approx. 900m",
        accommodation: "Hotel",
        startLocation: "Pokhara",
        endLocation: "Pokhara",
        activities: [
          "Sightseeing",
          "Leisure",
        ],
      },

      {
        day: 16,
        title: "Drive from Pokhara to Kathmandu",
        description:
          "After breakfast, drive from Pokhara back to Kathmandu. Upon arrival, check in at the hotel and enjoy free time in the afternoon before a farewell dinner at a local restaurant.",
        altitude: "1,350m",
        duration: "6-7 hours drive",
        accommodation: "Hotel",
        startLocation: "Pokhara",
        endLocation: "Kathmandu",
      },

      {
        day: 17,
        title: "International Departure",
        description:
          "After breakfast, transfer to the international airport for your onward flight, bringing the Annapurna Circuit Trek journey to an end.",
        startLocation: "Kathmandu",
        endLocation: "Kathmandu Airport",
      },
    ],

    includes: [
      "03 Nights accommodation at Respective hotel in Kathmandu.",
      "02 Nights accommodation at Respective hotel in Pokhara.",
      "11 Nights accommodation at Respective hotel / local Lodge / Guest house during the trekking.",
      "16 Breakfasts, 11 Lunches and 11 dinners as per the itinerary.",
      "Air-Conditioned Vehicle for transfers from Kathmandu – Besisahar & Pokhara – Kathmandu and sightseeing tours in Kathmandu & Pokhara.",
      "An English Speaking Local trekking Guide during the trekking.",
      "An English Speaking Local Guide during the sightseeing.",
      "01 Porter every 02 pax during the trekking for carry Baggage.",
      "Monument entrance fees as per the itinerary [01 time visit]",
      "Annapurna Conservation Area Project fee [ACAP]",
      "Trekking Information Management System fee [TIMS]",
      "All applicable Govt. taxes.",
    ],

    excludes: [
      "Nepal Visa Fee USD 50.00 per person for 30 days",
      "International / domestic sector airfare.",
      "Airport tax.",
      "Tips for Guide, Driver, Porter and other supporting staff.",
      "Lunch & dinner in Kathmandu & Pokhara.",
      "Drinks, laundry, telephone calls bills, Internet bill",
      "Sleeping bag during the trekking",
      "Other expenses not specified above.",
      "Personal insurance.",
    ],
  },
];