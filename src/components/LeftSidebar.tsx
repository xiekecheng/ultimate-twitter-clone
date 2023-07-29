import {BsBell, BsBookmark, BsEnvelope, BsThreeDots, BsTwitter} from "react-icons/bs";
import {BiHomeCircle, BiUser} from "react-icons/bi";
import {HiOutlineHashtag} from "react-icons/hi";
import Link from "next/link";

const NAVIGATION_ITEMS = [
  {
    title: "Twitter",
    icon: <BsTwitter/>,
  },
  {
    title: "Home",
    icon: <BiHomeCircle/>,
  },
  {
    title: "Explore",
    icon: <HiOutlineHashtag/>,
  },
  {
    title: "Notifications",
    icon: <BsBell/>,
  },
  {
    title: "Messages",
    icon: <BsEnvelope/>,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark/>,
  },
  {
    title: "Profile",
    icon: <BiUser/>,
  },
];

export function LeftSidebar() {
  return (
    <section className='fixed w-[275px] flex flex-col items-stretch h-screen'>
      <div className='flex flex-col h-full space-y-4'>
        {
          NAVIGATION_ITEMS.map((item) => {
            return (
              <Link
                className='text-2xl flex items-center justify-start w-fit space-x-2 rounded-3xl py-2 px-6 transition duration-200 hover:bg-white/10'
                href={item.title.toLowerCase()}
                key={item.title}>
                <div>{item.icon}</div>
                {item.title !== 'Twitter' && <div>{item.title}</div>}
              </Link>
            )
          })
        }
        <button className='bg-primary rounded-full m-4 p-4 hover:bg-opacity-70 transition duration-200'>Tweet

        </button>
      </div>
      <button className='flex rounded-full items-center justify-between m-2 px-4 py-2 hover:bg-white/10'>
        <div className='flex space-x-2 items-center'>
          <div className='rounded-full w-12 h-12 bg-slate-400'>img</div>
          <div>
            <div className='font-semibold text-sm'>club of coder</div>
            <div className='font-semibold text-sm'>@clubofcoder</div>
          </div>
        </div>
        <div>
          <BsThreeDots/>
        </div>
      </button>
    </section>
  )
}