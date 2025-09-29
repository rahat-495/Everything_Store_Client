
interface TUpdateProfile {
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  address: string;
  image: string;
}

const updateProfileInfo = async (payload : TUpdateProfile) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/users/updateProfile` , {method : "POST" , credentials : "include" , headers : {"Content-Type" : "application/json"} , body : JSON.stringify(payload)}) ;
    const data = await res.json() ;
    return data ;
};

export default updateProfileInfo;
