import {BsChat, BsDot, BsThreeDots} from "react-icons/bs";
import {BiRepost} from "react-icons/bi";
import {AiTwotoneHeart} from "react-icons/ai";
import {GoGraph} from "react-icons/go";
import {LuShare} from "react-icons/lu";

export const MainComponent = () => {
  return (
    <main
      className='ml-[275px] flex flex-col w-full max-w-2xl h-full min-h-screen border-x-[0.5px] border-gray-600'>
      <h1 className='text-xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0'>Home</h1>

      <div className='border-y-[0.5px] border-gray-600 flex px-4 py-2 space-x-4'>
        <div className='w-10 h-10 rounded-full bg-gray-600'></div>
        <div className='flex flex-col w-full'>
          <input className='outline-none bg-black placeholder:text-2xl placeholder:text-gray-600 p-2 text-2xl'
                 type="text" placeholder="What's happening"/>
          <button
            className='self-end bg-primary w-fit rounded-full m-2 p-2 hover:bg-opacity-70 transition duration-200 text-right '>Tweet
          </button>

        </div>

      </div>

      {/*  timeline*/}
      <div>
        {
          Array.from({length: 5}).map((_, i) => {
            return (
              <div key={i} className='flex w-full space-x-4 p-4 border-b-[0.5px] border-gray-600 '>
                <div>
                  <div className='rounded-full w-8 h-8 bg-slate-600'></div>
                </div>
                <div className='flex flex-col flex-1 space-y-4'>
                  <div className='flex justify-between'>
                    <div className='flex space-x-2 items-center'>
                      <div className='font-bold'>username</div>
                      <div className='text-gray-500'>@username</div>
                      <div className='text-gray-500'><BsDot/></div>
                      <div className='text-gray-500'>1 hour ago</div>
                    </div>
                    <div className='hover:cursor-pointer'><BsThreeDots/></div>
                  </div>
                  <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid asperiores eius
                    eum hic illo iure modi nam nesciunt pariatur tempora totam, veniam voluptate! Exercitationem
                    laudantium nulla qui ratione repudiandae?
                  </div>
                  <div className='bg-slate-600 p-4 rounded-xl h-96'>Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit.
                    Deserunt eaque ipsum minima nemo nihil placeat qui ut vel? Alias dicta doloribus error esse et
                    illum ipsam maxime sit voluptas voluptates?
                  </div>
                  <div className='flex space-x-4 justify-around'>
                    <div className='cursor-pointer hover:bg-white/20 rounded-full p-2 transition duration-200'>
                      <BsChat/></div>
                    <div className='cursor-pointer hover:bg-white/20 rounded-full p-2 transition duration-200'>
                      <BiRepost/></div>
                    <div className='cursor-pointer hover:bg-white/20 rounded-full p-2 transition duration-200'>
                      <AiTwotoneHeart/></div>
                    <div className='cursor-pointer hover:bg-white/20 rounded-full p-2 transition duration-200'>
                      <GoGraph/></div>
                    <div className='cursor-pointer hover:bg-white/20 rounded-full p-2 transition duration-200'>
                      <LuShare/></div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </main>
  )
}