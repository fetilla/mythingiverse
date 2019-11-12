interface Creator {
  id: number;
  name: string;
  first_name: string;
  last_name: string;
  url: string;
  public_url: string;
  thumbnail: string;
}

interface DefaultImage {
  id: number;
  url: string;
  name: string;
  added: Date;
}

export interface ThingId {
  id: number;
}

export interface Thing extends ThingId {
  name: string;
  url: string;
  public_url: string;
  thumbnail: string;
  creator: Creator;
  is_private: boolean;
  is_purchased: boolean;
  is_published: boolean;
}

export interface ThingDetails extends Thing {
  added: Date;
  modified: Date;
  is_wip: boolean;
  is_featured: boolean;
  like_count: number;
  is_liked: boolean;
  collect_count: number;
  is_collected: boolean;
  default_image: DefaultImage;
  description_html: string;
  details: string;
  license: string;
  file_count: number;
  layout_count: number;
  is_private: boolean;
  is_purchased: boolean;
  in_library: boolean;
  print_history_count: number;
  download_count: number;
  view_count: number;
}
