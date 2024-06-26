import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  stepCount: 0,
  distance: 0,
  tasks: [],
  galleryImages: [],
};

const pedometerSlice = createSlice({
  name: 'pedometer',
  initialState,
  reducers: {
    setStepCount: (state, action) => {
      state.stepCount = action.payload;
    },
    setDistance: (state, action) => {
      state.distance = action.payload;
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    addGalleryImage: (state, action) => {
      state.galleryImages.push(action.payload);
    },
    removeGalleryImage: (state, action) => {
      state.galleryImages = state.galleryImages.filter(image => image.id !== action.payload);
    },
  },
});

export const { setStepCount, setDistance, addTask, removeTask, addGalleryImage, removeGalleryImage } = pedometerSlice.actions;

const store = configureStore({
  reducer: {
    pedometer: pedometerSlice.reducer,
  },
});

export default store;
