"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import request from "@/utils/api";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { toast } from "sonner";

type formDetails = {
  name: string;
  email: string;
  phone: string;
  org: string;
};

const BookingForm = () => {
  const { selectedItem } = useSelector((state: any) => state.selectItem);
  const { tripDetails } = useSelector((state: any) => state.searchResults);
  const router = useRouter();
  const [formDetails, setFormDetails] = useState<formDetails>({
    name: "",
    email: "",
    phone: "",
    org: "",
  });

  const formChangeHandler = (e: any) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  const submitFormHandler = async (e: any) => {
    e.preventDefault();
    if (
      formDetails.email === undefined ||
      formDetails.email === "" ||
      formDetails.name === undefined ||
      formDetails.name === "" ||
      formDetails.phone === undefined ||
      formDetails.phone === "" ||
      formDetails.org === undefined ||
      formDetails.org === ""
    ) {
      alert("Please enter valid details");
      return;
    }
    const finalDetails = {
      user_name: formDetails.name,
      email: formDetails.email,
      phone: formDetails.phone,
      organization_name: formDetails.org,
      number_of_passengers: tripDetails.requiredSeats,
      trip_id: selectedItem.trip_id,
      departure_date: selectedItem.departureDate,
      departure_time: selectedItem.departure_time,
      arrival_date: selectedItem.arrivalDate,
      arrival_time: selectedItem.arrival_time,
      departure_stop_name: tripDetails.departureStop,
      arrival_stop_name: tripDetails.arrivalStop,
      bus_number: selectedItem.bus_number,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/book_trip", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalDetails),
      });
      if (response) {
        setFormDetails({
          name: "",
          email: "",
          phone: "",
          org: "",
        });
        toast.message("Booking Created", {
          description: `${tripDetails.departureStop} - ${tripDetails.arrivalStop}`,
        });
        setTimeout(() => {
          router.push("/confirmation");
        }, 1000);
      }
    } catch (error) {
      toast.error("Error Creating Booking");
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={submitFormHandler}
        className="bg-white p-5 rounded-[10px]  flex justify-start gap-4 items-start flex-col w-full"
      >
        <h3 className="text-[#717171] w-full text-lg font-medium pb-2 border-b border-solid border-[#EBEEF5]">
          Booking Request
        </h3>
        <div className="flex justify-start items-start pb-2 w-full border-solid border-[#DCDFE6] flex-col gap-2">
          <label htmlFor="name" className="text-label text-opacity-30 text-sm">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formDetails.name}
            className="border-b text-label text-opacity-60 w-full text-sm focus:outline-none pb-2"
            onChange={formChangeHandler}
          />
        </div>
        <div className="flex justify-start items-start pb-2 w-full border-solid border-[#DCDFE6] flex-col gap-2">
          <label
            htmlFor="contact"
            className="text-label text-opacity-30 text-sm"
          >
            Contact
          </label>
          <input
            type="text"
            id="contact"
            placeholder="Phone Number"
            name="phone"
            value={formDetails.phone}
            className="border-b text-label text-opacity-60 w-full text-sm focus:outline-none pb-2"
            onChange={formChangeHandler}
          />
        </div>
        <div className="flex justify-start items-start pb-2 w-full border-solid border-[#DCDFE6] flex-col gap-2">
          <label htmlFor="org" className="text-label text-opacity-30 text-sm">
            Name of Organization
          </label>
          <input
            type="text"
            id="org"
            placeholder="Organization"
            name="org"
            value={formDetails.org}
            className="border-b text-label text-opacity-60 w-full text-sm focus:outline-none pb-2"
            onChange={formChangeHandler}
          />
        </div>
        <div className="flex justify-start items-start pb-2 w-full border-solid border-[#DCDFE6] flex-col gap-2">
          <label htmlFor="email" className="text-label text-opacity-30 text-sm">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            value={formDetails.email}
            className="border-b text-label text-opacity-60 w-full text-sm focus:outline-none pb-2"
            onChange={formChangeHandler}
          />
        </div>
        <Button
          type={"submit"}
          variant={"default"}
          size={"default"}
          className="w-full"
        >
          Confirm Booking
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
