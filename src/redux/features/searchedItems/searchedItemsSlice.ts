// slices/userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../../utils/api";

// api call
interface SearchTripParams {
  departure_stop: string;
  arrival_stop: string;
  departure_time: string;
  required_seats: number;
  departure_date: string;
}

export const fetchItems = createAsyncThunk(
  "api/search-trip",
  async (
    {
      departure_stop,
      arrival_stop,
      departure_time,
      required_seats,
      departure_date,
    }: SearchTripParams,
    thunkApi
  ) => {
    const requestBody = {
      departure_stop,
      arrival_stop,
      departure_time,
      required_seats,
      departure_date,
    };
    const response = await fetch("http://127.0.0.1:8000/api/search_trips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();
    return data;
  }
);

export interface TripDetails {
  arrival_time: string; // HH:MM:SS in extended format
  departure_time: string; // HH:MM:SS in extended format
  from_stop_id: number; // ID of the starting stop
  to_stop_id: number; // ID of the destination stop
  trip_id: string; // Unique identifier for the trip
  available_seats: string; // Number of available
}

interface State {
  searchedItems: TripDetails[];
  loading: boolean;
  tripDetails: {
    arrivalStop: string;
    departureStop: string;
    departureTime: string;
    requiredSeats: number;
    departureDate: string;
  };
}

const initialState: State = {
  searchedItems: [],
  loading: false,
  tripDetails: {
    arrivalStop: "",
    departureStop: "",
    departureTime: "",
    requiredSeats: 0,
    departureDate: "",
  },
};

const searchItem = createSlice({
  name: "items",
  initialState,
  reducers: {
    clear: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.loading = false;
      state.searchedItems.push(...action.payload.valid_routes);
      state.tripDetails = {
        arrivalStop: action.payload.arrival_stop,
        departureStop: action.payload.departure_stop,
        departureTime: action.payload.departure_time,
        requiredSeats: action.payload.required_seats,
        departureDate: action.payload.departure_date,
      };
    });

    builder.addCase(fetchItems.pending, (state, action) => {
      state.loading = true;
    });
  },
});

export const { clear } = searchItem.actions;
export default searchItem.reducer;
