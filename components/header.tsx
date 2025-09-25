"use client";

import Image from "next/image";
import Link from "next/link";
import Dropdownlist from "./Dropdownlist";
import { useState } from "react";


const Header = ({subHeader,title,userImg}: SharedHeaderProps) => {
    const filterOptions = ["All", "Recent", "Popular"];
    const [selectedFilter, setSelectedFilter] = useState<string>(filterOptions[0]);
    return (
        <header className="header">
            <section className="header-container">
                <div className="details">
                    {userImg && (
                        <Image src = {userImg} alt = "user" width ={66} height ={66} className="rounded-full"/>

                    )}

                    <article>
                        <p>{subHeader}</p>
                        <h1>{title}</h1>
                    </article>
                </div>

                <aside>
                    <Link href ="/upload">
                    <Image src = "/assets/icons/upload.svg" alt = "upload" width={16} height={16}/>
                    <span>upload a video </span>
                        </Link>
                         <div className="record">
                        <button className="primary-btn">
                            <Image src="/assets/icons/record.svg" alt = "record" width={16} height={16} />
                           
                            <span>record a video</span>
                        </button>
                        </div>
                </aside>
            </section>

            <section className="search-filter">
                <div className="search">
                    <input 
                    type="text"
                    placeholder="Search for videos , tags , folders..."
                    />
                    <Image src="/assets/icons/search.svg" alt="search" height={16} width={16}/>         
                      </div>
                    
             <Dropdownlist
               options={filterOptions}
               selectedOption={selectedFilter}
               onOptionSelect={setSelectedFilter}
               triggerElement={
                 <button className="px-3 py-2.5 text-sm font-medium -tracking-[0.8px] rounded-md border border-gray-20">
                   {selectedFilter}
                 </button>
               }
             />

            </section>
            </header>
    )
}

export default Header;