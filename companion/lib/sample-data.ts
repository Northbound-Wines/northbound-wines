import type { CompanionData } from "./types";

export const sampleData: CompanionData = {
  regions: [
    {
      _id: "region-alto-adige",
      title: "Alto Adige",
      slug: "alto-adige",
      country: "Italy",
      overview:
        "A mountain region where precision, freshness, and place tend to matter more than weight. Alto Adige is one of the most useful starting points for understanding the Northbound palate.",
      bestKnownFor: ["Alpine whites", "Pinot Noir", "Polished cooperatives"],
      strongestWineStyles: ["Sauvignon Blanc", "Pinot Bianco", "Pinot Noir"],
      bestFor: ["White wine lovers", "Scenic travel", "First-time Northern Italy trips"],
      idealTripLength: "2-4 days",
      bestSeason: "Late spring through early autumn",
      travelDifficulty: "Easy to moderate",
      priceLevel: "Moderate, with strong value at the mid-tier",
      aboutRegion:
        "Alto Adige sits at a cultural crossing point between Italy and the German-speaking alpine world, which helps explain why it feels so distinct from many other Italian wine regions.",
      geographyClimate:
        "Altitude, valley exposure, and sharp day-night temperature shifts create wines with ripe fruit but persistent freshness.",
      wineStyle:
        "Expect lift, clean structure, alpine aromatics, and a quietly serious relationship between grape variety and slope.",
      producerLandscape:
        "Cooperatives are unusually important here and should be taken seriously; several operate at a level that would surprise people used to dismissing the category.",
      travelExperience:
        "Best approached through subregions and valleys rather than as a single uniform wine destination. Distances can look short on a map but feel slower on mountain roads.",
      northboundPerspective:
        "Alto Adige overdelivers because the region combines reliability, freshness, and a quality baseline that is hard to find at comparable prices elsewhere.",
      producers: [{ title: "Hofstatter", slug: "hofstatter" }],
      grapes: [{ title: "Pinot Noir", slug: "pinot-noir" }],
      wines: [{ title: "Hofstatter Pinot Nero", slug: "hofstatter-pinot-nero" }],
    },
  ],
  producers: [
    {
      _id: "producer-hofstatter",
      title: "Hofstatter",
      slug: "hofstatter",
      displayName: "J. Hofstatter",
      country: "Italy",
      region: { title: "Alto Adige", slug: "alto-adige" },
      subregionOrArea: "Termeno / Tramin",
      villageOrTown: "Tramin",
      producerType: "Historic estate",
      northboundRelationship: "Reference producer",
      bestKnownFor: ["Pinot Nero", "Gewurztraminer", "Alpine whites"],
      strongestWineStyles: ["Cool-climate reds", "Aromatic whites", "Polished alpine wines"],
      bestFor: ["Pinot Noir drinkers", "First-time Alto Adige visitors", "Polished tasting experience"],
      priceLevel: "Medium-high",
      visitDifficulty: "Easy",
      tastingExperienceTypes: ["Professional tasting room", "Historic estate"],
      familyFriendly: "Maybe",
      languages: ["Italian", "German", "English"],
      appointmentRequired: "Recommended",
      overview:
        "A useful benchmark for Alto Adige: serious, precise, and rooted in the conversation between grape variety, altitude, and site.",
      whyVisit:
        "Visit for a clear sense of how polished Alto Adige can be without losing regional identity.",
      aboutProducer:
        "A historic estate that helps explain why Alto Adige can feel both deeply regional and unusually polished.",
      placeAndVineyards:
        "The producer works in one of the region's most important wine villages, where altitude, exposure, and variety choice matter intensely.",
      winemakingPhilosophy:
        "The wines tend toward clarity and structure, with enough restraint to keep the region in focus.",
      wineStyle:
        "Precise, clean, and varietally clear, with a style that favors shape and definition over rusticity.",
      keyWinesOverview:
        "Pinot Nero and Gewurztraminer are natural reference points, supported by a broader range of polished alpine wines.",
      bestValue:
        "The smarter buying usually sits in bottles that show regional clarity without chasing prestige cuvees.",
      whatWeWouldBuy:
        "Pinot Nero for the regional argument; aromatic whites when the meal calls for lift and definition.",
      travelExperience:
        "Organized and professional rather than rustic, better suited to travelers who want context and confidence.",
      lessIdealFor:
        "Not the obvious choice if you are looking for a tiny, improvised cellar visit.",
      northboundPerspective:
        "Useful as a benchmark because it shows how polished Alto Adige can be while still keeping place in the conversation.",
      grapes: [{ title: "Pinot Noir", slug: "pinot-noir" }],
      wines: [{ title: "Hofstatter Pinot Nero", slug: "hofstatter-pinot-nero" }],
    },
  ],
  grapes: [
    {
      _id: "grape-pinot-noir",
      title: "Pinot Noir",
      slug: "pinot-noir",
      overview:
        "Pinot Noir is one of the most revealing grapes in the Northbound universe because it shows whether a producer values perfume, balance, and texture over force.",
      regionalExpression:
        "In Alto Adige, Pinot Noir often gains mountain freshness and clean lines, with fruit that feels lifted rather than lush.",
      drinkingContext:
        "A natural bridge for Burgundy drinkers, but also a useful bottle for food because the best examples stay agile at the table.",
      regions: [{ title: "Alto Adige", slug: "alto-adige" }],
      wines: [{ title: "Hofstatter Pinot Nero", slug: "hofstatter-pinot-nero" }],
    },
  ],
  wines: [
    {
      _id: "wine-hofstatter-pinot-nero",
      title: "Hofstatter Pinot Nero",
      slug: "hofstatter-pinot-nero",
      producer: { title: "Hofstatter", slug: "hofstatter" },
      region: { title: "Alto Adige", slug: "alto-adige" },
      grapes: [{ title: "Pinot Noir", slug: "pinot-noir" }],
      vintage: "Current release",
      overview:
        "A clean entry point into Alto Adige Pinot Noir, useful for showing the region's lifted structure and restrained fruit.",
      tastingContext:
        "Think red fruit, mountain freshness, and enough shape to make the wine feel precise without becoming severe.",
      foodPairing:
        "Roast chicken, mushroom dishes, speck, lighter game, and alpine cheeses.",
      positioning:
        "A confidence-building bottle for people who want Pinot Noir with freshness and regional identity.",
    },
  ],
};
