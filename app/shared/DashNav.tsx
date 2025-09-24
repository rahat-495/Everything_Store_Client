
"use server";
import LinkList from "../components/dashNavbar/LinkList";
import ProfileInfo from "../components/dashNavbar/ProfileInfo";

const DashNav = () => {

    return (
        <div className="w-60 h-[80vh] bg-[#170F21] rounded flex flex-col px-3 py-3">
            
            <ProfileInfo />
            <LinkList />

        </div>
    );
};

export default DashNav;
