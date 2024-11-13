import BookingBox from "@/components/bookingBox/bookingBox";
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
        <BookingBox
          seats={25}
          timeStart="14:00 PM"
          departure="Technische Hochschule"
          destination="Klinikum"
          timeEnd="14:45 PM"
          date="20 Nov, 2024"
        />
        <Button className="mt-2" variant={"cancel"} size={"default"}>
          Cancel Booking
        </Button>
      </div>
    </div>
  );
};

export default Confirmation;
