"use client";

import { clear } from "@/redux/features/searchedItems/searchedItemsSlice";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const SearchLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const { tripDetails, searchedItems } = useSelector(
    (state: any) => state.searchResults
  );

  function formatDate(dateString: string): string {
    // Parse the date string into a Date object
    const date = new Date(dateString);

    // Extract the day, month, and year
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // Months are zero-based, so we add 1
    const year = date.getUTCFullYear();

    // Format the date in a readable way, e.g., "October 5, 2024"
    // Alternatively, you could use toLocaleDateString or construct a custom format
    return `${month}/${day}/${year}`; // Format as MM/DD/YYYY
  }

  return (
    <div className="w-full flex justify-center items-start gap-5">
      <div className="w-full flex relative justify-start items-start flex-col gap-6 max-w-[400px]">
        <div className="w-full sticky top-0 bg-white shadow-searchBox py-10 px-5 flex justify-start items-center gap-10 flex-col">
          <div className="flex justify-between items-center gap-2 w-full">
            <Image
              onClick={() => {
                if (pathname === "/search") {
                  dispatch(clear());
                }
                router.back();
              }}
              src={"/back.svg"}
              alt="back"
              width={13}
              height={23}
              className="cursor-pointer"
            />
            <div className="flex justify-center items-center gap-2">
              <Image src={"/people.svg"} alt="user" width={16} height={16} />
              <p className="text-label text-sm">{tripDetails.requiredSeats}</p>
            </div>
          </div>
          <div className="flex justify-between w-full items-center gap-2">
            <p className="text-[#979797] leading-tight text-sm font-normal text-left max-w-[75px] w-full">
              {tripDetails.departureStop}
            </p>
            <div className="w-full flex justify-center items-center gap-2">
              <div className="flex w-full justify-center items-center">
                <span className="inline-block bg-[#979797] rounded-full w-1 h-1"></span>
                <span className="inline-block w-full bg-[#979797] h-[1px]"></span>
              </div>
              <Image src={"/bus.svg"} alt="bus" width={20} height={14} />
              <div className="flex w-full justify-center items-center">
                <span className="inline-block w-full bg-[#979797] h-[1px]"></span>
                <span className="inline-block bg-[#979797] rounded-full w-1 h-1"></span>
              </div>
            </div>
            <p className="text-[#979797] leading-tight text-sm font-normal text-left max-w-[75px] w-full">
              {tripDetails.arrivalStop}
            </p>
          </div>
          <div className="w-[95%] bg-tertiary rounded-[10px] flex justify-around items-center h-10 px-3">
            <label className="text-label text-base" htmlFor="date">
              {formatDate(tripDetails.departureDate)}
            </label>
            <p className="text-label">-</p>
            <label className="text-label text-base" htmlFor="time">
              {tripDetails.departureTime}
            </label>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default SearchLayout;
