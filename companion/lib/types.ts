export type SlugRef = {
  title: string;
  slug: string;
};

export type SanityImage = {
  alt?: string;
  asset?: {
    _ref?: string;
  };
};

export type Region = {
  _id: string;
  title: string;
  slug: string;
  country?: string;
  heroImage?: SanityImage;
  overview?: string;
  bestKnownFor?: string[];
  strongestWineStyles?: string[];
  bestFor?: string[];
  idealTripLength?: string;
  bestSeason?: string;
  travelDifficulty?: string;
  priceLevel?: string;
  aboutRegion?: string;
  geographyClimate?: string;
  wineStyle?: string;
  producerLandscape?: string;
  travelExperience?: string;
  northboundPerspective?: string;
  styleSummary?: string;
  travelContext?: string;
  producers?: SlugRef[];
  grapes?: SlugRef[];
  wines?: SlugRef[];
};

export type Producer = {
  _id: string;
  title: string;
  displayName?: string;
  slug: string;
  country?: string;
  heroImage?: SanityImage;
  region?: SlugRef;
  subregionOrArea?: string;
  villageOrTown?: string;
  producerType?: string;
  northboundRelationship?: string;
  bestKnownFor?: string[];
  strongestWineStyles?: string[];
  bestFor?: string[];
  priceLevel?: string;
  visitDifficulty?: string;
  tastingExperienceTypes?: string[];
  familyFriendly?: string;
  languages?: string[];
  appointmentRequired?: string;
  overview?: string;
  whyVisit?: string;
  aboutProducer?: string;
  placeAndVineyards?: string;
  winemakingPhilosophy?: string;
  wineStyle?: string;
  keyWinesOverview?: string;
  bestValue?: string;
  whatWeWouldBuy?: string;
  travelExperience?: string;
  lessIdealFor?: string;
  northboundPerspective?: string;
  styleAndPhilosophy?: string;
  atmosphere?: string;
  knownFor?: string;
  grapes?: SlugRef[];
  nearbyProducers?: SlugRef[];
  wines?: SlugRef[];
};

export type Grape = {
  _id: string;
  title: string;
  slug: string;
  overview?: string;
  regionalExpression?: string;
  drinkingContext?: string;
  regions?: SlugRef[];
  wines?: SlugRef[];
};

export type Wine = {
  _id: string;
  title: string;
  slug: string;
  producer?: SlugRef;
  region?: SlugRef;
  grapes?: SlugRef[];
  vintage?: string;
  overview?: string;
  tastingContext?: string;
  foodPairing?: string;
  positioning?: string;
};

export type CompanionData = {
  regions: Region[];
  producers: Producer[];
  grapes: Grape[];
  wines: Wine[];
};
