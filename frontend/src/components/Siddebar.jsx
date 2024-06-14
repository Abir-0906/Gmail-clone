import { LuPencil } from "react-icons/lu";
import { FaInbox } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoPlayOutline } from "react-icons/io5";
import { RiDraftLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
const sidebarItems = [
  {
    icon: <FaInbox size={"20px"} />,
    text: "Inbox",
  },
  {
    icon: <FaRegStar size={"20px"} />,
    text: "Starred",
  },
  {
    icon: <MdOutlineWatchLater size={"20px"} />,
    text: "Snoozed",
  },
  {
    icon: <IoPlayOutline size={"20px"} />,
    text: "Sent",
  },
  {
    icon: <RiDraftLine size={"20px"} />,
    text: "Drafts",
  },
  {
    icon: <MdKeyboardArrowDown  size={"20px"} />,
    text: "More",
  },
];
const Sidebar = () => {
  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button className="flex items-center gap-2 bg-[#C2E7FF] p-4 rounded-2xl hover:shadow-md ">
          <LuPencil size="24px" />
          Compose
        </button>
      </div>
      <div className="text-gray-700">
        {sidebarItems.map((item,index) => {
          return (
            <div className="flex items-center pl-6 py-1 rounded-r-full gap-4 my-2 hover:cursor-pointer hover:bg-gray-200 ">
            
              {item.icon}
              <p>{item.text}</p>
            </div>
          );
        })
        }
      </div>
    </div>
  );
};

export default Sidebar;
