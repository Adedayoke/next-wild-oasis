import React from "react";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";

export default async function Reservation({ cabin }) {
  //     const settings = await getSettings();
  //   const bookedDates = await getBookedDatesByCabinId(params?.cabinId)

  const [bookedDates, settings] = await Promise.all([
    getBookedDatesByCabinId(cabin?.id),
    getSettings(),
  ]);
  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
      <DateSelector settings={settings} bookedDates={bookedDates} cabin={cabin} />
      <ReservationForm cabin={cabin} />
    </div>
  );
}
