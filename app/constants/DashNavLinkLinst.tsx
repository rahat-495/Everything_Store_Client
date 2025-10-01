import { AiOutlineProduct, AiOutlineShoppingCart } from "react-icons/ai"
import { BiShoppingBag } from "react-icons/bi"
import { CgProfile } from "react-icons/cg"
import { FaHome, FaRegStar } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { LuLayoutDashboard } from "react-icons/lu"
import { MdOutlineManageHistory, MdOutlineWorkHistory } from "react-icons/md"
import { RiShoppingCart2Line } from "react-icons/ri"

export const userLinks = [
    {
        path : "/user/profile" ,
        label : "Profile" ,
        element : <CgProfile /> ,
    },
    {
        path : "/user/carts" ,
        label : "Carts" ,
        element : <RiShoppingCart2Line /> ,
    },
    {
        path : "/user/orders" ,
        label : "Orders" ,
        element : <BiShoppingBag /> ,
    },
    {
        path : "/user/history" ,
        label : "History" ,
        element : <MdOutlineWorkHistory /> ,
    },
    {
        path : "/user/reviews" ,
        label : "Reviews" ,
        element : <FaRegStar /> ,
    },
]

export const adminLinks = [
    {
        path : "/admin/profile" ,
        label : "Profile" ,
        element : <CgProfile /> ,
    },
    {
        path : "/admin/orders" ,
        label : "Orders" ,
        element : <BiShoppingBag /> ,
    },
    {
        path : "/admin/carts" ,
        label : "Carts" ,
        element : <AiOutlineShoppingCart /> ,
    },
    {
        path : "/admin/users" ,
        label : "Users" ,
        element : <FiUsers /> ,
    },
    {
        path : "/admin/dashboard" ,
        label : "Dashboard" ,
        element : <LuLayoutDashboard /> ,
    },
    {
        path : "/admin/reviews" ,
        label : "Reviews" ,
        element : <FaRegStar /> ,
    },
    {
        path : "/admin/addProduct" ,
        label : "Add Product" ,
        element : <AiOutlineProduct /> ,
    },
    {
        path : "/admin/manageProducts" ,
        label : "Manage Product" ,
        element : <MdOutlineManageHistory /> ,
    },
]

export const linkList2 = [
    {
        path : "/" ,
        label : "Home" ,
        element : <FaHome /> ,
    },
    {
        path : "/products" ,
        label : "Products" ,
        element : <AiOutlineProduct /> ,
    },
]
