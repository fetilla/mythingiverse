interface Creator {
  first_name: string;
  last_name: string;
  thumbnail: string;
}

interface DefaultImage {
  url: string;
}

interface ThingId {
  id: number;
}

interface Thing {
  id: number;
  name: string;
  thumbnail: string;
  creator: Creator;
}

interface ThingDetails extends Thing {
  added: Date;
  modified: Date;
  license: string;
  like_count: number;
  default_image: DefaultImage;
  description_html: string;
  details: string;
  file_count: number;
  layout_count: number;
  download_count: number;
  view_count: number;
}

interface ThingDetailByIdResponse {
  thingDetailById: ThingDetails
}

interface Things {
  things: [Thing];
}

