import Image from "next/image";

type Props = {
  seats: number;
  time: string;
  duration: string;
  disabled: boolean;
};

const SearchItem = ({ seats, time, duration, disabled }: Props) => {
  return (
    <div
      className={`${disabled ? "bg-[#D9D9D9] bg-opacity-10" : ""} px-5 w-full`}
    >
      <div className="flex border-b border-solid gap-4 border-[#7B4EB4] justify-start items-start flex-col w-full py-5">
        <div className="flex justify-between w-full items-center gap-2">
          <div className="flex justify-center items-center gap-1 bg-btnBlue rounded-[10px] p-2">
            <Image src={"/booking-bus.svg"} alt="bus" width={20} height={20} />
            <p className="font-medium text-sm text-white">{seats}</p>
          </div>
          <p className="font-medium text-xs text-[#C1C1C1]">{duration}</p>
        </div>
        <p className="text-[#979797] font-medium text-base">{time}</p>
      </div>
    </div>
  );
};

export default SearchItem;
