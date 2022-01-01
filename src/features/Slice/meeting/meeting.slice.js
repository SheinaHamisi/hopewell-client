import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  infoShow: true,
  video: true,
  audio: true,
  endCall: false,
  shareScreen: true,
  notesOpen: true,
  messages: [],
  online_members: [],
  latest: {},
};

const meeingSlice = createSlice({
  name: "meeting",
  initialState,
  reducers: {
    infoTogle(state, action) {
      state.infoShow = action.payload;
    },

    videoTogle(state, action) {
      state.video = action.payload;
    },
    audioTogle(state, action) {
      state.audio = action.payload;
    },
    endCallTogle(state, action) {
      state.endCall = action.payload;
    },
    shareToggle(state, action) {
      state.shareScreen = action.payload;
    },
    notesToggle(state, action) {
      state.notesOpen = action.payload;
    },
    addMessage(state, action) {
      let messages = state.messages ? state.messages : [];
      messages.push(action.payload);
      state.messages = messages;
      state.latest = action.payload;
    },
    setMessages(state, action) {
      state.messages = action.payload;
    },
    addMembers(state, action) {
      state.online_members = action.payload;
    },
  },
});

export default meeingSlice.reducer;
export const {
  notesToggle,
  shareToggle,
  endCallTogle,
  audioTogle,
  videoTogle,
  infoTogle,
  addMessage,
  setMessages,
  addMembers,
} = meeingSlice.actions;
