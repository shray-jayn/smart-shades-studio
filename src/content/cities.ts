export interface Region {
  name: string;
  slug: string;
  cities: string[];
}

export const regions: Region[] = [
  {
    name: "Los Angeles County",
    slug: "los-angeles-county",
    cities: [
      "Los Angeles", "Santa Monica","Hollywood", "West Hollywood", "Pasadena", 
      "Burbank", "Glendale", "Sherman Oaks", "Studio City", 
      "Manhattan Beach", "Torrance"
    ]
  },
  {
    name: "Orange County",
    slug: "orange-county",
    cities: [
      "Irvine", "Anaheim", "Costa Mesa", "Newport Beach", 
      "Huntington Beach", "Laguna Beach", "Laguna Niguel", 
      "Mission Viejo", "Fullerton", "Yorba Linda"
    ]
  },
  {
    name: "San Diego County",
    slug: "san-diego-county",
    cities: [
      "San Diego", "La Jolla", "Del Mar", "Carlsbad", 
      "Encinitas", "Chula Vista", "Coronado", "Poway", 
      "Escondido", "Oceanside"
    ]
  },
  {
    name: "Las Vegas Area",
    slug: "las-vegas-area",
    cities: [
      "Las Vegas", "Henderson", "North Las Vegas", "Summerlin", 
      "Enterprise", "Spring Valley", "Paradise", "Sunrise Manor", 
      "Boulder City", "Pahrump"
    ]
  },
  {
    name: "Coachella Valley",
    slug: "coachella-valley",
    cities: [
      "Palm Springs", "Palm Desert", "Rancho Mirage", 
      "Cathedral City", "Indio", "La Quinta"
    ]
  }
];

export interface CityInfo {
  name: string;
  region: string;
  climate: string;
  phone: string;
  address: string;
}

export function getCityInfo(cityName: string): CityInfo | null {
  const region = regions.find(r => 
    r.cities.some(c => c.toLowerCase() === cityName.toLowerCase())
  );
  
  if (!region) return null;
  
  // Default info based on region
  const regionDefaults: Record<string, { phone: string; address: string; climate: string }> = {
    "los-angeles-county": {
      phone: "(310) 498-0110",
      address: "700 N San Vicente Blvd G460, West Hollywood, CA 90069",
      climate: "Mediterranean climate with intense UV exposure and mild winters"
    },
    "orange-county": {
      phone: "(657) 895-5989", 
      address: "Anaheim, CA",
      climate: "Coastal to inland warmth with high UV and occasional Santa Ana winds"
    },
    "san-diego-county": {
      phone: "(619) 555-0100",
      address: "San Diego, CA",
      climate: "Year-round sunshine with coastal fog and moderate temperatures"
    },
    "las-vegas-area": {
      phone: "(725) 316-7780",
      address: "8505 W Charleston Blvd #3, Las Vegas, NV 89117",
      climate: "Desert heat with extreme UV, low humidity, and strong winds"
    },
    "coachella-valley": {
      phone: "(760) 555-0100",
      address: "Palm Desert, CA",
      climate: "Hot desert summers with intense sun and dry conditions"
    }
  };
  
  const defaults = regionDefaults[region.slug];
  
  return {
    name: cityName,
    region: region.name,
    climate: defaults.climate,
    phone: defaults.phone,
    address: defaults.address
  };
}
