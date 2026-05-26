export const allContentQuery = `{
  "regions": *[_type == "region"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    country,
    heroImage,
    overview,
    bestKnownFor,
    strongestWineStyles,
    bestFor,
    idealTripLength,
    bestSeason,
    travelDifficulty,
    priceLevel,
    aboutRegion,
    geographyClimate,
    wineStyle,
    producerLandscape,
    travelExperience,
    northboundPerspective,
    styleSummary,
    travelContext,
    "producers": *[_type == "producer" && references(^._id)] | order(title asc) {
      title,
      "slug": slug.current
    },
    "grapes": *[_type == "grape" && references(^._id)] | order(title asc) {
      title,
      "slug": slug.current
    },
    "wines": *[_type == "wine" && references(^._id)] | order(title asc) {
      title,
      "slug": slug.current
    }
  },
  "producers": *[_type == "producer"] | order(title asc) {
    _id,
    title,
    displayName,
    "slug": slug.current,
    country,
    heroImage,
    overview,
    whyVisit,
    aboutProducer,
    placeAndVineyards,
    winemakingPhilosophy,
    wineStyle,
    keyWinesOverview,
    bestValue,
    whatWeWouldBuy,
    travelExperience,
    lessIdealFor,
    northboundPerspective,
    subregionOrArea,
    villageOrTown,
    producerType,
    northboundRelationship,
    bestKnownFor,
    strongestWineStyles,
    bestFor,
    priceLevel,
    visitDifficulty,
    tastingExperienceTypes,
    familyFriendly,
    languages,
    appointmentRequired,
    styleAndPhilosophy,
    atmosphere,
    knownFor,
    "region": region->{title, "slug": slug.current},
    "grapes": grapes[]->{title, "slug": slug.current},
    "nearbyProducers": nearbyProducers[]->{title, "slug": slug.current},
    "wines": *[_type == "wine" && references(^._id)] | order(title asc) {
      title,
      "slug": slug.current
    }
  },
  "grapes": *[_type == "grape"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    overview,
    regionalExpression,
    drinkingContext,
    "regions": regions[]->{title, "slug": slug.current},
    "wines": *[_type == "wine" && references(^._id)] | order(title asc) {
      title,
      "slug": slug.current
    }
  },
  "wines": *[_type == "wine"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    vintage,
    overview,
    tastingContext,
    foodPairing,
    positioning,
    "producer": producer->{title, "slug": slug.current},
    "region": region->{title, "slug": slug.current},
    "grapes": grapes[]->{title, "slug": slug.current}
  }
}`;
