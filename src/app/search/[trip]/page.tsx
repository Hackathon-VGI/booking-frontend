"use client";

import SearchItem from "@/components/searchItem/searchItem";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Route = () => {
  const { selectedItem } = useSelector((state: any) => state.selectItem);
  useEffect(() => {
    console.log(selectedItem);
  }, [selectedItem]);

  return (
    <>
      <div className="p-5 w-full">
        <div className="bg-white rounded-[10px] pb-5  flex justify-start items-start flex-col w-full">
          <SearchItem
            seats={selectedItem.seats}
            departureTime={selectedItem.departure_time}
            arrivalTime={selectedItem.arrival_time}
            duration="30m"
            disabled={true}
            link="/search/"
            hover={false}
            tripId={selectedItem.trip_id}
          />
        </div>
      </div>
      <div className="w-full relative aspect-square">
        <Image src={"/map.png"} alt="user" layout="fill" objectFit="cover" />
      </div>
      <Link href="/search/bookingForm" className="w-full">
        <Button variant={"default"} size={"default"}>
          Next
        </Button>
      </Link>
    </>
  );
};

export default Route;
