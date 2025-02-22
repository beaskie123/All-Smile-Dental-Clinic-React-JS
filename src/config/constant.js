import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaBook } from "react-icons/fa"
import { FaRegMessage } from "react-icons/fa6"
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5"

const navbarContent = [
{
    title: "Home",
    path: "/home",
    icon: <IoHomeOutline  />
},
{
    title: "Booking",
    path: "/booking",
    icon: <FaBook   />
},
{
    title: "Appointments",
    path: "/appointments",
    icon: <BsFillPersonLinesFill   />
},
{
    title: "Messages",
    path: "/messages",
    icon: <FaRegMessage   />
},
{
    title: "Settings",
    path: "/settings",
    icon: <IoSettingsOutline    />
},
]

const data = {
    schedule : "Mon - Sat: 8am - 7pm",
    phoneNumber: "123-456-7890",
    address: "xxx building, xxx street, xxx city"
}


export default {
    data,
    navbarContent,
}