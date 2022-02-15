export interface Amigo {
  id: string;
  name: string;
  middle_name: string | null;
  last_name: string;
  nick_name: string | null;
  dob: string;
  has_tattoo_of_house: boolean;
  hobbies: string[];
  thumbnail: string;
  photos?: { dir: string; images: string[] };
}
