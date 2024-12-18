"use client";

import { selectItem } from "@/redux/features/searchedItems/selectedItem";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  seats: string;
  departureTime: string;
  arrivalTime: string;
  disabled: boolean;
  link: string;
  hover?: boolean;
  duration: string;
  tripId: string;
  busNumber: string;
  booked?: boolean;
};

const SearchItem = ({
  seats,
  busNumber,
  departureTime,
  arrivalTime,
  disabled,
  duration,
  link = "/search/route",
  hover = true,
  tripId,
  booked = false,
}: Props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { tripDetails } = useSelector((state: any) => state.searchResults);
  return (
    <div
      onClick={() => {
        if (!disabled) {
          dispatch(
            selectItem({
              departure_time: departureTime,
              arrival_time: arrivalTime,
              trip_id: tripId,
              seats: parseInt(seats),
              departureDate: tripDetails.departureDate,
              arrivalDate: tripDetails.departureDate,
              bus_number: busNumber,
            })
          );
          router.push(link);
        }
      }}
      className="w-full"
    >
      <div
        className={`${disabled ? "bg-black bg-opacity-10" : ""} px-5 ${
          hover
            ? "hover:bg-[#D9D9D9] hover:bg-opacity-30 transition-all cursor-pointer"
            : ""
        } w-full`}
      >
        <div className="flex border-b border-solid gap-4 border-[#7B4EB4] justify-start items-start flex-col w-full py-5">
          <div className="flex justify-between w-full items-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <div className="flex justify-center items-center gap-1 bg-btnBlue rounded-[10px] p-2">
                <Image
                  src={"/booking-bus.svg"}
                  alt="bus"
                  width={20}
                  height={20}
                />
                <p className="font-medium text-sm text-white">{busNumber}</p>
              </div>
            </div>
            <p className="font-medium text-xs text-[#C1C1C1]">{duration}</p>
          </div>
          <p className="text-[#979797] font-medium text-base">
            Available Seats: {seats}
          </p>
          <div className="flex justify-between items-center gap-2 w-full">
            <p className="text-[#979797] font-medium text-base">
              {departureTime} - {arrivalTime}
            </p>
            {booked && (
              <p className="bg-[#979797] text-white rounded py-1 px-2 text-sm font-medium">
                Booked
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
