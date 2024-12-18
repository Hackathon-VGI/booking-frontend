"use client";

import SearchItem from "@/components/searchItem/searchItem";
import { useSelector } from "react-redux";
import { TripDetails } from "../../redux/features/searchedItems/searchedItemsSlice";

const Search = () => {
  const { searchedItems } = useSelector((state: any) => state.searchResults);
  return (
    <div className="p-5 w-full">
      <div className="bg-white rounded-[10px] pb-5  flex justify-start items-start flex-col w-full">
        {searchedItems.map((item: TripDetails, idx: number) => {
          return (
            <SearchItem
              key={item.departure_time + Math.random() * 100}
              seats={item.available_seats ? item.available_seats : "35"}
              departureTime={item.departure_time}
              arrivalTime={item.arrival_time}
              duration={"30m"}
              link={"/search/" + item.to_stop_id}
              disabled={idx === 2 ? true : false}
              tripId={item.trip_id}
              booked={idx === 2 ? true : false}
              busNumber={item.bus_number}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Search;
