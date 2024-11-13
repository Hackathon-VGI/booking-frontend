import BookingBox from "@/components/bookingBox/bookingBox";

const MyBookings = () => {
  return (
    <div className="w-full flex py-10 justify-center items-start gap-5">
      <div className="w-full flex relative px-5 justify-start items-start flex-col gap-6 max-w-[400px]">
        <div className="flex justify-start items-start flex-col w-full">
          <h4 className="text-primary font-normal text-base">New Bookings</h4>
          <BookingBox
            seats={25}
            timeStart="14:00 PM"
            departure="Technische Hochschule"
            destination="Klinikum"
            timeEnd="14:45 PM"
            date="20 Nov, 2024"
          />
        </div>
        <div className="flex justify-start items-start flex-col w-full">
          <h4 className="text-primary font-normal text-base">Old Bookings</h4>
          <BookingBox
            seats={25}
            disabled
            timeStart="14:00 PM"
            departure="Technische Hochschule"
            destination="Klinikum"
            timeEnd="14:45 PM"
            date="20 Nov, 2024"
          />
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
