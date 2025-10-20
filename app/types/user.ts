
export interface TName {
    firstName: string;
    lastName: string;
}

export interface TUser {
    name : TName;
    email : string;
    image : string ;
    phone : number ;
    address : string ;
    role : "user" | "admin" ;
}

export interface TFullUser {
  _id: string;
  name: {
    firstName: string;
    lastName: string;
    _id: string;
  };
  image: string;
  email: string;
  phone: string;
  address: string;
  isActive: boolean;
  password: string;
  role: "user" | "admin"; 
  createdAt: string; 
  updatedAt: string;
  __v: number;
}
