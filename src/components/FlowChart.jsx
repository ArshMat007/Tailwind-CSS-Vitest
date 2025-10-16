import React from 'react';

export default function NoteFlowchart() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  px-4 py-10">
      <div className="flex flex-col items-center space-y-6 text-gray-800 font-sans w-56 ">

        {/* Step 1 */}
        <div className="bg-white shadow-md rounded-xl px-6 py-4 text-center text-gray-800 font-semibold border border-gray-200 w-56">
        User creates note
        </div>
        {/* Arrow */}
        <div className="text-2xl text-gray-50">↓</div>
        


        {/* Step 2 */}
        <div className="bg-white shadow-md rounded-xl px-6 py-4 text-center text-gray-800 font-semibold border border-gray-200 w-56">
          <p>addNote(note)</p>
        </div>

        <div className="text-2xl text-gray-50">↓</div>
        

        {/* Step 3 */}
        <div className="bg-white shadow-md rounded-xl px-6 py-4 text-center text-gray-800 font-semibold border border-gray-200 w-72">
          <p>getCollectionPath('notes') → users/&#123;uid&#125;/notes</p>
        </div>

       <div className="text-2xl text-gray-50">↓</div>
       

        {/* Step 4 */}
        <div className="bg-white shadow-md rounded-xl px-6 py-4 text-center text-gray-800 font-semibold border border-gray-200 w-60">
          <p>addDoc(..., note)</p>
        </div>

       <div className="text-2xl text-gray-50">↓</div>
       


        {/* Step 5 */}
        <div className="bg-white shadow-md rounded-xl px-6 py-4 text-center text-gray-800 font-semibold border border-gray-200 w-56">
          <p>onSnapshot listener detects new note</p>
        </div>

        <div className="text-2xl text-gray-50">↓</div>
        

        {/* Step 6 */}
        <div className="bg-white shadow-md rounded-xl px-6 py-4 text-center text-gray-800 font-semibold border border-gray-200 w-56">
          <p>setNotes(fetchedNotes)</p>
        </div>

        <div className="text-2xl text-gray-50">↓</div>
        

        {/* Step 7 */}
        <div className="bg-white shadow-md rounded-xl px-6 py-4 text-center text-gray-800 font-semibold border border-gray-200 w-56">
          <p>Notes.jsx re-renders<br />with updated list</p>
        </div>

      </div>
    </div>
  );
}
