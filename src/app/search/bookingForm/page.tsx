"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import request from "@/utils/api";

type formDetails = {
  name: string;
  email: string;
  phone: string;
  org: string;
};

const BookingForm = () => {
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
    const finalDetails = {
      user_name: formDetails.name,
      email: formDetails.email,
      phone: formDetails.phone,
      organization_name: formDetails.org,
      number_of_passengers: 25,
      trip_id: "123",
      departure_date: "10-nov-2021",
      departure_time: "10:00 AM",
      arrival_date: "10-nov-2022",
      arrival_time: "10:00 PM",
    };
    const res = await request.post("/api/book-trip", finalDetails);
    if (res.status === 201) {
      alert("Booking Confirmed");
      setFormDetails({
        name: "",
        email: "",
        phone: "",
        org: "",
      });
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
