import {LeftSidebar} from "@/components/LeftSidebar";
import {MainComponent} from "@/components/MainComponent";


export default function Home() {
  return (
    <div className='w-full h-full flex justify-center items-center relative bg-black text-white'>
      <div className='max-w-screen-lg w-full h-full flex relative'>
        {/* left sidebar */}
        <LeftSidebar/>
        <MainComponent />
        <section className='flex flex-col fixed'>
          {/* search */}
          <div>
            <div className='w-12 h-12 rounded-full'></div>
            <input type="text" placeholder='Search Twitter'/>
          </div>

        </section>
      </div>
    </div>
  )
}
