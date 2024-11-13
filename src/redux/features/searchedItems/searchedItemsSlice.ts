// slices/userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// api call
interface SearchTripParams {
  departure_stop: string;
  arrival_stop: string;
  departure_time: string;
}

export const fetchItems = createAsyncThunk(
  "api/search-trip",
  async (
    { departure_stop, arrival_stop, departure_time }: SearchTripParams,
    thunkApi
  ) => {
    const requestBody = {
      departure_stop,
      arrival_stop,
      departure_time,
    };

    const response = await fetch("http://127.0.0.1:5000/api/search-trip", {
      method: "POST", // We're still using GET method
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody), // Send the body as JSON (non-standard for GET)
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
}

interface State {
  searchedItems: TripDetails[];
  loading: boolean;
}

const initialState: State = {
  searchedItems: [],
  loading: false,
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
      state.searchedItems.push(...action.payload);
    });

    builder.addCase(fetchItems.pending, (state, action) => {
      state.loading = true;
    });
  },
});

export const { clear } = searchItem.actions;
export default searchItem.reducer;
