"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { onChangeHandler } from "@/utils/inputOnChangeHandler";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import useDebounce from "@/hooks/debounce";
import { fetchItems } from "@/redux/features/searchedItems/searchedItemsSlice";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [startDestination, setStartDestination] = useState("");
  const [endDestination, setEndDestination] = useState("");
  const [hours, setHours] = useState("");
  const [mins, setMins] = useState("");
  const [secs, setSecs] = useState("");
  const [date, setDate] = useState<Date | string>("");
  const [people, setPeople] = useState(0);
  const [babies, setBabies] = useState(0);
  const [luggage, setLuggage] = useState(0);
  const [showCalendar, setShowCalendar] = useState(false);
  const [dropDownItemsStart, setDropDownItemsStart] = useState([]);
  const [dropDownItemsEnd, setDropDownItemsEnd] = useState([]);
  const { searchedItems, loading } = useSelector(
    (state: any) => state.searchResults
  );

  const [debounceValStart, setDebounceValStart] = useState("");
  const [debounceValEnd, setDebounceValEnd] = useState("");
  const [startFlag, setStartFlag] = useState(false);
  const [endFlag, setEndFlag] = useState(false);

  const debounceValueStart = useDebounce(startDestination, 1000);
  const debounceValueEnd = useDebounce(endDestination, 1000);

  useEffect(() => {
    setDebounceValStart(startDestination);
  }, [debounceValueStart]);
  useEffect(() => {
    setDebounceValEnd(endDestination);
  }, [debounceValueEnd]);

  const handleFetchItems = () => {
    // Dispatch the fetchItems action with the input data
    dispatch(
      fetchItems({
        departure_stop: startDestination,
        arrival_stop: endDestination,
        departure_time: `${hours}:${mins}:${secs}`,
        required_seats: people,
        departure_date: date.toLocaleString().split(",")[0],
      })
    );
  };

  useEffect(() => {
    if (!loading && searchedItems.length > 0) {
      router.push("/search");
    }
  }, [loading, searchedItems]);

  useEffect(() => {
    if (startFlag && debounceValStart !== "") {
      fetchDropItem(debounceValStart, false);
    }
  }, [debounceValStart]);
  useEffect(() => {
    if (endFlag && debounceValEnd !== "") {
      fetchDropItem(debounceValEnd, true);
    }
  }, [debounceValEnd]);

  const fetchDropItem = async (searchVal: string, toFlag: boolean) => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/debounce_search",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            partial_stop: searchVal,
          }),
        }
      );

      const data = await response.json();
      if (toFlag) {
        setDropDownItemsEnd(data);
      } else {
        setDropDownItemsStart(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full flex justify-center items-start p-5 gap-5">
      <div className="w-full flex justify-start items-start mt-5 flex-col gap-10 max-w-[400px]">
        <div className="flex justify-start items-start flex-col gap-3">
          <h3 className="text-primary font-bold text-[22px]">Travel with</h3>
          <Image alt="logo" src="/logo.png" width={95} height={56} />
        </div>
        <div className="bg-white shadow-searchBox rounded-[10px] flex justify-start items-center flex-col w-full py-5 pl-4 pr-6 gap-4">
          <div className="flex justify-start items-center pb-4 gap-4 w-full">
            <div className="bg-[#FFF1EF] rounded-full w-4 h-4 relative">
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-full bg-[#FE657D] w-[10px] h-[10px]"></span>
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 rounded-full bg-white w-1 h-1"></span>
            </div>
            <div className="w-full justify-center flex items-center gap-3 relative">
              <span className="absolute h-[1px] pointer-events-none w-full bg-[#E6EAED] right-0 -bottom-4"></span>
              <div className="flex relative justify-start w-full items-start flex-col gap-1">
                <label htmlFor="from" className="text-secondary text-xs">
                  From
                </label>
                <input
                  id="from"
                  type="text"
                  value={startDestination}
                  placeholder="Starting Point..."
                  onChange={(e) => {
                    if (e.target.value === "") {
                      setDropDownItemsStart([]);
                    }
                    setStartFlag(true);
                    setStartDestination(e.target.value);
                  }}
                  className="border-none bg-transparent text-dark text-base placeholder:text-base outline-none focus:outline-none w-full"
                />
                <div className="absolute w-full max-h-[300px] shadow overflow-auto left-0 top-full bg-white z-[200]">
                  {dropDownItemsStart.map((elem) => {
                    return (
                      <div
                        key={elem}
                        onClick={() => {
                          setStartDestination(elem);
                          setDropDownItemsStart([]);
                          setStartFlag(false);
                        }}
                        className="py-2 w-full px-4 hover:bg-gray-200 cursor-pointer"
                      >
                        {elem}
                      </div>
                    );
                  })}
                </div>
              </div>
              <button
                className="cursor-pointer"
                onClick={() => {
                  setStartDestination("");
                  setDropDownItemsStart([]);
                }}
              >
                <Image alt="remove" width={12} height={12} src="/cross.svg" />
              </button>
            </div>
          </div>
          <div className="flex justify-start items-center pb-4 gap-4 w-full">
            <div className="bg-[#79B834] rounded-sm w-4 h-4 relative">
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 rounded-full bg-white w-1 h-1"></span>
            </div>
            <div className="w-full justify-center flex items-center gap-3 relative">
              <div className="flex relative justify-start w-full items-start flex-col gap-1">
                <label htmlFor="to" className="text-secondary text-xs">
                  To
                </label>
                <input
                  id="to"
                  type="text"
                  value={endDestination}
                  placeholder="End Destination"
                  onChange={(e) => {
                    if (e.target.value === "") {
                      setDropDownItemsEnd([]);
                    }
                    setEndFlag(true);
                    setEndDestination(e.target.value);
                  }}
                  className="border-none bg-transparent text-dark text-base placeholder:text-base outline-none focus:outline-none w-full"
                />
                <div className="absolute w-full max-h-[300px] shadow overflow-auto left-0 top-full bg-white z-[200]">
                  {dropDownItemsEnd.map((elem) => {
                    return (
                      <div
                        key={elem}
                        onClick={() => {
                          setEndDestination(elem);
                          setDropDownItemsEnd([]);
                          setEndFlag(false);
                        }}
                        className="py-2 w-full px-4 hover:bg-gray-200 cursor-pointer"
                      >
                        {elem}
                      </div>
                    );
                  })}
                </div>
              </div>
              <button
                className="cursor-pointer"
                onClick={() => {
                  let tempEnd = endDestination;
                  setEndDestination(startDestination);
                  setStartDestination(tempEnd);
                  setDropDownItemsEnd([]);
                  setDropDownItemsStart([]);
                }}
              >
                <Image alt="switch" width={16} height={16} src="/switch.svg" />
              </button>
            </div>
          </div>
          <div className="w-[95%] bg-tertiary rounded-[10px] flex justify-around items-center h-10 px-3">
            <div className="relative">
              <label
                onClick={() => setShowCalendar((prev) => !prev)}
                className="text-label cursor-pointer text-base"
                htmlFor="date"
              >
                {date === ""
                  ? "Select Date"
                  : date instanceof Date
                  ? date.toLocaleDateString()
                  : date}
              </label>
              {showCalendar && (
                <Calendar
                  className={
                    "absolute top-10 -translate-x-[10%] left-0 z-50 min-w-[300px]"
                  }
                  onChange={(date) => {
                    setDate(date as Date);
                    setShowCalendar(false);
                  }}
                  value={date as Date}
                />
              )}
            </div>
            <p className="text-label">-</p>
            <div className="flex justify-center items-center gap-1">
              <input
                type="text"
                value={hours}
                placeholder="00"
                onChange={(e) => setHours(e.target.value)}
                className="border-b border-solid bg-transparent focus:outline-none border-b-label text-base text-label w-5"
              />
              :
              <input
                type="text"
                placeholder="00"
                value={mins}
                onChange={(e) => setMins(e.target.value)}
                className="border-b border-solid bg-transparent focus:outline-none border-b-label text-base text-label w-5"
              />
              :
              <input
                type="text"
                placeholder="00"
                value={secs}
                onChange={(e) => setSecs(e.target.value)}
                className="border-b border-solid bg-transparent focus:outline-none border-b-label text-base text-label w-5"
              />
            </div>
          </div>
          <div className="w-[95%] gap-4 flex justify-between items-center">
            <div className="bg-[#F0F2F5] w-[75px] flex justify-center items-center gap-2 h-10 rounded-lg">
              <label htmlFor="people">
                <Image alt="search" width={17} height={17} src="/people.svg" />
              </label>
              <input
                id="people"
                type="number"
                value={people}
                placeholder="0"
                onChange={(e) => setPeople(parseInt(e.target.value))}
                className="border-none bg-transparent text-[#3c3c3c] text-base placeholder:text-base outline-none focus:outline-none w-6 text-center"
              />
            </div>
            <div className="bg-[#F0F2F5] w-[75px] flex justify-center items-center gap-2 h-10 rounded-lg">
              <label htmlFor="babies">
                <Image alt="search" width={17} height={17} src="/child.svg" />
              </label>
              <input
                id="babies"
                type="number"
                value={babies}
                placeholder="0"
                onChange={onChangeHandler(setBabies)}
                className="border-none bg-transparent text-[#3c3c3c] text-base placeholder:text-base outline-none focus:outline-none w-6 text-center"
              />
            </div>
            <div className="bg-[#F0F2F5] w-[75px] flex justify-center items-center gap-2 h-10 rounded-lg">
              <label htmlFor="luggage">
                <Image alt="search" width={17} height={17} src="/luggage.svg" />
              </label>
              <input
                id="luggage"
                type="number"
                value={luggage}
                placeholder="0"
                onChange={onChangeHandler(setLuggage)}
                className="border-none bg-transparent text-[#3c3c3c] text-base placeholder:text-base outline-none focus:outline-none w-6 text-center"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full gap-5">
          <Button
            onClick={handleFetchItems}
            disabled={
              date === "" ||
              mins === "" ||
              hours === "" ||
              secs === "" ||
              people === 0 ||
              startDestination === "" ||
              endDestination === ""
            }
            variant="default"
          >
            {loading ? "Loading" : "Search"}
          </Button>
          <Link href="/myBookings" className="w-full">
            <Button variant={"secondary"} size={"default"}>
              My Bookings
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
