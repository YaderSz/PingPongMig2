import Image from "next/image";
import Slider from '@/components/slider/slider'
import MisionVision from '@/components/prin_page/MisionVision'
import PingPongList from "@/components/PingPongList";


export default function Home() {
  return (
    <main>
      <div className="flex w-full min-h-screen">
       <Slider></Slider>
       </div>
       <PingPongList></PingPongList>
       <MisionVision></MisionVision>
    </main>
  );
}
