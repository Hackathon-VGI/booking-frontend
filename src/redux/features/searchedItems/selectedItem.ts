// slices/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

// api call

export interface TripDetails {
  arrival_time: string; // HH:MM:SS in extended format
  departure_time: string; // HH:MM:SS in extended format
  seats: number; // Number of available seats in the trip
  trip_id: string; // Unique identifier for the trip
  departureDate: string;
  arrivalDate: string;
  bus_number: string; // Bus number
}

interface State {
  selectedItem: TripDetails;
  loading: boolean;
}

const initialState: State = {
  selectedItem: {
    arrival_time: "",
    departure_time: "",
    seats: 0,
    trip_id: "",
    departureDate: "",
    arrivalDate: "",
    bus_number: "",
  },
  loading: false,
};

const selectItemSlice = createSlice({
  name: "selected",
  initialState,
  reducers: {
    selectItem: (state, action: { payload: TripDetails }) => {
      state.selectedItem = action.payload;
      state.loading = false;
    },
  },
});

export const { selectItem } = selectItemSlice.actions;
export default selectItemSlice.reducer;
