export * from './state';

export interface Person {
  id: number;
  first_name: string;
  last_name: string;
  contact: Contact;
  gender: string;
  ip_address: string;
  avatar: string;
  address: Address;
}

export interface Contact {
  email: string;
  phone: string;
}

export interface Address {
  city: string;
  country: string;
  postalCode: string;
  state: string;
  street: string;
}

export interface Contents {
  name: string
  contents_type: string
  started_day: string
  end_day: string
}

export interface Status {
  is_favorit: boolean
  code: string
}

export interface Stock {
  stock: string
  id: number
}

