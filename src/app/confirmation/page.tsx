"use client";

import BookingBox from "@/components/bookingBox/bookingBox";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSelector } from "react-redux";

const Confirmation = () => {
  const { selectedItem } = useSelector((state: any) => state.selectItem);
  const { tripDetails } = useSelector((state: any) => state.searchResults);
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
          required_seats={tripDetails.requiredSeats}
          availableSeats={selectedItem.seats}
          timeStart={selectedItem.departure_time}
          departure={tripDetails.departureStop}
          destination={tripDetails.arrivalStop}
          timeEnd={selectedItem.arrival_time}
          date={selectedItem.departureDate}
        />
        <Link href={"/myBookings"} className="w-full">
          <Button className="mt-2" variant={"default"} size={"default"}>
            Manage Bookings
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Confirmation;
