export interface Image {
  href: string;
  attribution?: string;
}

export interface City {
  matching_full_name: string;
  _embedded: {
    'city:item': {
      full_name: string,
      name: string,
      _links: {
        'city:timezone': {
          href: string;
        }
      }
    }
  }
  _links: {
    'city:item': {
      href: string;
    };
  };
}

export interface ForecastItemData {
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  dt: number;
  dt_txt: string;
  weather: [{
    icon: string;
    description: string
  }]
}

export interface ForecastCity {
  id: number,
  name: string,
  coord: {
      lat: number,
      lon: number
  },
  country: string,
  population: number,
  timezone: number,
  sunrise: number,
  sunset: number
}

export interface ForecastResponse {
  city: ForecastCity;
  list: ForecastItemData[];
};

export interface UrbanArea {
  name: string;
  images: Image[];
}
