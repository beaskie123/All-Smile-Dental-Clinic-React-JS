import { BsFillPersonLinesFill } from "react-icons/bs"
import { CiCalendarDate, CiLock } from "react-icons/ci"
import { FaBook, FaMobileAlt } from "react-icons/fa"
import { FaRegMessage } from "react-icons/fa6"
import { HiOutlineMailOpen } from "react-icons/hi"
import { IoHomeOutline, IoPersonOutline, IoSettingsOutline } from "react-icons/io5"

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

const signupData = [
    {
        title:"First Name",
        type: "text",
        placeHolder: "Enter First Name",
        icon: <IoPersonOutline />,
    },
    {
        title:"Middle Name",
        type: "text",
        placeHolder: "Enter Middle Name",
        icon: <IoPersonOutline />,
    },
    {
        title:"Last Name",
        type: "text",
        placeHolder: "Enter Last Name",
        icon: <IoPersonOutline />,
    },
    {
        title:"Birthdate",
        type: "date",
        placeHolder: " ",
        icon: <CiCalendarDate />,
    },
    {
        title:"Mobile Number",
        type: "number",
        placeHolder: "Enter Number",
        icon: <FaMobileAlt />
    },
    {
        title:"Address",
        type: "text",
        placeHolder: "Enter Address",
        icon: <IoHomeOutline />
    },
    {
        title:"Email",
        type: "email",
        placeHolder: "Enter E-mail",
        icon: <HiOutlineMailOpen />
    },
    {
        title:"Password",
        type: "password",
        placeHolder: "Enter Password",
        icon: <CiLock />
    },
    {
        title:"Verify Password",
        type: "password",
        placeHolder: "Re-enter Password",
        icon: <CiLock />
    },
]

export default {
    signupData,
    data,
    navbarContent,
}
