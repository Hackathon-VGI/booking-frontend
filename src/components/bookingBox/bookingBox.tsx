import Image from "next/image";

type Props = {
  departure: string;
  destination: string;
  timeStart: string;
  timeEnd: string;
  date: string;
  disabled?: boolean;
  availableSeats: number;
  required_seats: number;
  status?: string;
  bus_number: string;
};

const BookingBox = ({
  departure,
  destination,
  timeStart,
  timeEnd,
  date,
  disabled,
  availableSeats,
  required_seats,
  status,
  bus_number,
}: Props) => {
  const STATUS = {
    pending: "Pending",
    cancelled: "Reject",
    completed: "Approve",
  };

  return (
    <div
      className={`${
        disabled ? "opacity-50 pointer-events-none" : ""
      } w-full mt-2 rounded-md relative bg-white shadow-searchBox pb-12 pt-10 px-5 flex justify-start items-center gap-5 flex-col`}
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
        <p className="font-medium text-base text-white">{bus_number}</p>
      </div>
      <p className="text-lg font-medium text-[#979797]">
        {timeStart} - {timeEnd} | {date}
      </p>
      <div className="flex justify-center items-center gap-2">
        <Image src={"/people.svg"} alt="user" width={25} height={25} />
        <p className="text-label text-base">{required_seats}</p>
      </div>
      <div
        className={`${
          status === STATUS.pending ? "bg-[#979797] text-white" : ""
        } ${status === STATUS.completed ? "bg-btnGreen text-white" : ""} ${
          status === STATUS.cancelled ? "bg-red text-white" : ""
        } rounded-[10px] px-2 h-[35px] grid place-content-center absolute right-3 bottom-3 pointer-events-none text-sm`}
      >
        {status}
      </div>
    </div>
  );
};

export default BookingBox;
