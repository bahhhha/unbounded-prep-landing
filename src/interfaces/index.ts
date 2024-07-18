interface Specialty {
  category: string;
  price: number;
  services: string[];
}

export interface Mentor {
  _id: string;
  name: string;
  profile_image_url: string;
  origin_country_name: string;
  origin_country_flag: string;
  university: string;
  university_country_name: string;
  university_country_flag: string;
  major: string;
  university_logo_url: string;
  bio: string;
  rating: number;
  specialties: Specialty[];
  calendly_url: string;
  social_links: {
    linkedin: string | null;
    instagram: string | null;
    borderless: string | null;
    telegram: string | null;
  };
}
