import { createSlice } from "@reduxjs/toolkit";

interface NotesState {
    notes: String[],
    notification: String;
}
const initialState = { notes: [], notification: '' } as NotesState;

export const NotesSlice = createSlice({
    name: "notes",
    initialState,
    reducers:{
        addNote: (state, action) => {
            state.notes.push(action.payload);
        },
        removeNote: (state, action) => {
            state.notes = state.notes.filter((note) => note !== action.payload);
        },
        addNoteSuccess: (state) => {
            state = {...state, notification: 'Note added successfully'}
            console.log("Note added successfully");
        }
    }
});

export const { addNote, removeNote } = NotesSlice.actions;
export default NotesSlice.reducer;