import Image from "next/image";

type Props = {
  departure: string;
  destination: string;
  timeStart: string;
  timeEnd: string;
  date: string;
  seats: number;
  disabled?: boolean;
};

const BookingBox = ({
  departure,
  destination,
  timeStart,
  timeEnd,
  date,
  seats,
  disabled,
}: Props) => {
  return (
    <div
      className={`${
        disabled ? "opacity-50 pointer-events-none" : ""
      } w-full mt-2 rounded-md bg-white shadow-searchBox py-10 px-5 flex justify-start items-center gap-5 flex-col`}
    >
      <div className="flex justify-between w-full items-center gap-2">
        <p className="text-[#979797] leading-tight text-base font-normal text-left max-w-min">
          {departure}
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
          {destination}
        </p>
      </div>
      <div className="flex justify-center items-center gap-2 bg-btnBlue rounded-[10px] p-3">
        <Image src={"/booking-bus.svg"} alt="bus" width={30} height={30} />
        <p className="font-medium text-base text-white">30</p>
      </div>
      <p className="text-lg font-medium text-[#979797]">
        {timeStart} - {timeEnd} | {date}
      </p>
      <div className="flex justify-center items-center gap-2">
        <Image src={"/people.svg"} alt="user" width={25} height={25} />
        <p className="text-label text-base">{seats}</p>
      </div>
    </div>
  );
};

export default BookingBox;
