import SearchItem from "@/components/searchItem/searchItem";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Route = () => {
  return (
    <>
      <div className="p-5 w-full">
        <div className="bg-white rounded-[10px] pb-5  flex justify-start items-start flex-col w-full">
          <SearchItem
            seats={25}
            time="14:00 PM - 14:45 PM"
            duration="30m"
            link="/search/route"
            disabled={false}
            hover={false}
          />
        </div>
      </div>
      <div className="w-full relative aspect-square">
        <Image src={"/map.png"} alt="user" layout="fill" objectFit="cover" />
      </div>
      <Link href="/search" className="w-full">
        <Button variant={"default"} size={"default"}>
          Next
        </Button>
      </Link>
    </>
  );
};

export default Route;
