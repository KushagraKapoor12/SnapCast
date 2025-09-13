import Header from "@/components/header";
import { dummyCards } from "@/constants";
import Image from "next/image";
import VideoCard from "@/components/VideoCard";

const Page = async ({params}:ParamsWithSearch) => {
    const {id} = await params;
        return (
        <div className="wrapper page">
       <Header subHeader="Patelshivam9691@gmail.com" title="Shivam Patel" 
       userImg="/assets/images/dummy.jpg"/>
<section className="video-grid">
{dummyCards.map((card) => (
        <VideoCard key={card.id}{...card } />
      )) }
         </section>
 
            </div>
    )
}
export default Page