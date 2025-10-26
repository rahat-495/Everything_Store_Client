
import NavbarMainComp from "../components/nav/NavbarMainComp";
import { getAccessToken, getCurrentUser } from "../utils/user/getCurrentUser";

const Navbar = async () => {
    const token = await getAccessToken() ;
    const user = await getCurrentUser() ;
    return (
        <div className="">
            <NavbarMainComp token={token} user={user?._doc}/>
        </div>
    )
};

export default Navbar;
