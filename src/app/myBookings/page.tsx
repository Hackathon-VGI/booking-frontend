"use client";

import BookingBox from "@/components/bookingBox/bookingBox";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const MyBookings = () => {
  const [oldBookings, setOldBookings] = useState<any[]>([]);
  const [newBookings, setNewBookings] = useState<any[]>([]);
  const isFirstRender = useRef(true);

  const sortedBookings = (booking: any) => {
    return booking.sort((a: any, b: any) => {
      const dateTimeA = new Date(`${a.departure_date}T${a.departure_time}`);
      const dateTimeB = new Date(`${b.departure_date}T${b.departure_time}`);
      return dateTimeA.getTime() - dateTimeB.getTime(); // Ascending order
    });
  };

  useEffect(() => {
    if (isFirstRender.current) {
      fetchData();
      isFirstRender.current = false;
    }
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/get_all_booking/test3@gmail.com",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (data.trips !== undefined) {
        data.trips.forEach((trip: any) => {
          if (
            trip.departure_date === undefined ||
            trip.departure_date === null
          ) {
            setNewBookings((prev) => [
              ...prev,
              { ...trip, departure_date: "not-set" },
            ]);
          } else {
            const givenDate = new Date(trip.departure_date);
            const currentDate = new Date();
            if (givenDate < currentDate) {
              setOldBookings((prev) => [...prev, trip]);
            } else {
              setNewBookings((prev) => [...prev, trip]);
            }
          }
        });
      }
    } catch (error) {
      alert("Error fetching data");
    }
  };

  return (
    <div className="w-full flex py-10 justify-center items-start gap-5">
      <div className="w-full flex relative px-5 justify-start pt-4 items-start flex-col gap-6 max-w-[400px]">
        <Link href="/">
          <Image
            src={"/back.svg"}
            alt="back"
            width={13}
            height={23}
            className="cursor-pointer absolute -top-2 left-4"
          />
        </Link>
        <div className="flex justify-start items-start flex-col w-full">
          <h4 className="text-primary font-normal text-base">New Bookings</h4>
          {newBookings.length > 0 ? (
            sortedBookings(newBookings).map((booking: any) => (
              <BookingBox
                key={booking.bus_number + Math.random()}
                timeStart={booking.departure_time}
                departure={booking.departure_stop_name}
                destination={booking.arrival_stop_name}
                timeEnd={booking.arrival_time}
                date={booking.departure_date}
                availableSeats={booking.number_of_passengers}
                required_seats={booking.number_of_passengers}
                status={booking.booking_status}
                bus_number={booking.bus_number}
              />
            ))
          ) : (
            <h2 className="text-xl font-bold w-full text-center mt-2">
              No Bookings Found 🥲
            </h2>
          )}
        </div>
        <div className="flex justify-start items-start flex-col w-full">
          <h4 className="text-primary font-normal text-base">Old Bookings</h4>
          {oldBookings.length > 0 ? (
            sortedBookings(oldBookings).map((booking: any) => (
              <BookingBox
                key={booking.bus_number + Math.random()}
                timeStart={booking.departure_time}
                departure={booking.departure_stop_name}
                destination={booking.arrival_stop_name}
                timeEnd={booking.arrival_time}
                date={booking.departure_date}
                availableSeats={booking.number_of_passengers}
                required_seats={booking.number_of_passengers}
                disabled
                status={booking.booking_status}
                bus_number={booking.bus_number}
              />
            ))
          ) : (
            <h2 className="text-xl font-bold w-full text-center mt-2">
              No Bookings Found 🥲
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
