"use client";

import Image from "next/image";
import { useState } from "react";
import { onChangeHandler } from "@/utils/inputOnChangeHandler";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [startDestination, setStartDestination] = useState("");
  const [endDestination, setEndDestination] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState(0);
  const [babies, setBabies] = useState(0);
  const [luggage, setLuggage] = useState(0);

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
              <div className="flex justify-start w-full items-start flex-col gap-1">
                <label htmlFor="from" className="text-secondary text-xs">
                  From
                </label>
                <input
                  id="from"
                  type="text"
                  value={startDestination}
                  placeholder="Starting Point..."
                  onChange={onChangeHandler(setStartDestination)}
                  className="border-none bg-transparent text-dark text-base placeholder:text-base outline-none focus:outline-none w-full"
                />
              </div>
              <button
                className="cursor-pointer"
                onClick={() => setStartDestination("")}
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
              <div className="flex justify-start w-full items-start flex-col gap-1">
                <label htmlFor="to" className="text-secondary text-xs">
                  To
                </label>
                <input
                  id="to"
                  type="text"
                  value={endDestination}
                  placeholder="End Destination"
                  onChange={onChangeHandler(setEndDestination)}
                  className="border-none bg-transparent text-dark text-base placeholder:text-base outline-none focus:outline-none w-full"
                />
              </div>
              <button
                className="cursor-pointer"
                onClick={() => {
                  let tempEnd = endDestination;
                  setEndDestination(startDestination);
                  setStartDestination(tempEnd);
                }}
              >
                <Image alt="switch" width={16} height={16} src="/switch.svg" />
              </button>
            </div>
          </div>
          <div className="w-[95%] bg-tertiary rounded-[10px] flex justify-around items-center h-10 px-3">
            <label className="text-[#3C3C43] text-base" htmlFor="date">
              {date === "" ? "Select Date" : date}
              <input
                onChange={onChangeHandler(setDate)}
                value={date}
                type="date"
                id="date"
                className="hidden"
              />
            </label>
            <p className="text-[#3C3C43]">-</p>
            <label className="text-[#3C3C43] text-base" htmlFor="time">
              {time === "" ? "Select Time" : time}
              <input
                onChange={onChangeHandler(setTime)}
                value={time}
                type="time"
                id="time"
                className="hidden"
              />
            </label>
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
                onChange={onChangeHandler(setPeople)}
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
          <Button variant="default">Search</Button>
          <Button variant={"secondary"} size={"default"}>
            My Bookings
          </Button>
        </div>
      </div>
    </div>
  );
}
