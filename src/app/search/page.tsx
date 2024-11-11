"use client";

import { onChangeHandler } from "@/utils/inputOnChangeHandler";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SearchItem from "@/components/searchItem/searchItem";

const Search = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  return (
    <div className="w-full flex justify-center items-start gap-5">
      <div className="w-full flex justify-start items-start flex-col gap-6 max-w-[400px]">
        <div className="w-full sticky top-0 bg-white shadow-searchBox py-10 px-5 flex justify-start items-center gap-10 flex-col">
          <div className="flex justify-between items-center gap-2 w-full">
            <Link href="/">
              <Image src={"/back.svg"} alt="back" width={13} height={23} />
            </Link>
            <div className="flex justify-center items-center gap-2">
              <Image src={"/people.svg"} alt="user" width={16} height={16} />
              <p className="text-label text-sm">25</p>
            </div>
          </div>
          <div className="flex justify-between w-full items-center gap-2">
            <p className="text-[#979797] leading-tight text-base font-normal text-left max-w-min">
              Technische Hochschule
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
            <p className="text-[#979797] leading-tight text-base font-normal text-left max-w-min">
              Klinikum
            </p>
          </div>
          <div className="w-[95%] bg-tertiary rounded-[10px] flex justify-around items-center h-10 px-3">
            <label className="text-label text-base" htmlFor="date">
              {date === "" ? "Select Date" : date}
              <input
                onChange={onChangeHandler(setDate)}
                value={date}
                type="date"
                id="date"
                className="hidden"
              />
            </label>
            <p className="text-label">-</p>
            <label className="text-label text-base" htmlFor="time">
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
        </div>
        <div className="p-5 w-full">
          <div className="bg-white rounded-[10px] pb-5  flex justify-start items-start flex-col w-full">
            <SearchItem
              seats={25}
              time="14:00 PM - 14:45 PM"
              duration="30m"
              disabled={false}
            />
            <SearchItem
              seats={25}
              time="14:00 PM - 14:45 PM"
              duration="30m"
              disabled={false}
            />
            <SearchItem
              seats={25}
              time="14:00 PM - 14:45 PM"
              duration="30m"
              disabled={false}
            />
            <SearchItem
              seats={25}
              time="14:00 PM - 14:45 PM"
              duration="30m"
              disabled={true}
            />
            <SearchItem
              seats={25}
              time="14:00 PM - 14:45 PM"
              duration="30m"
              disabled={false}
            />
            <SearchItem
              seats={25}
              time="14:00 PM - 14:45 PM"
              duration="30m"
              disabled={false}
            />
            <SearchItem
              seats={25}
              time="14:00 PM - 14:45 PM"
              duration="30m"
              disabled={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
