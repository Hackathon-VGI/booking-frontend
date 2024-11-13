import { Button } from "@/components/ui/button";
import Image from "next/image";

const Confirmation = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex justify-start max-w-[400px] p-5 items-start flex-col gap-5 w-full">
        <h2 className="text-primary font-bold text-2xl w-full text-center">
          Your Booking request has been sent
        </h2>
        <h4 className="text-btnGreen text-3xl font-bold w-full text-center">
          Waiting for Approval
        </h4>
        <div className="w-full mt-2 rounded-md bg-white shadow-searchBox py-10 px-5 flex justify-start items-center gap-5 flex-col">
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
          <div className="flex justify-center items-center gap-2 bg-btnBlue rounded-[10px] p-3">
            <Image src={"/booking-bus.svg"} alt="bus" width={30} height={30} />
            <p className="font-medium text-base text-white">30</p>
          </div>
          <p className="text-lg font-medium text-[#979797]">
            2:00 PM - 2:45 PM | 20 Nov, 2024
          </p>
          <div className="flex justify-center items-center gap-2">
            <Image src={"/people.svg"} alt="user" width={25} height={25} />
            <p className="text-label text-base">25</p>
          </div>
        </div>
        <Button className="mt-2" variant={"cancel"} size={"default"}>
          Cancel Booking
        </Button>
      </div>
    </div>
  );
};

export default Confirmation;
