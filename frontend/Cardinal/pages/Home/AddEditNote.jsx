import React, { useState } from 'react';
import TagInput from '../../components/TagInput';
import { MdClose } from 'react-icons/md';
import axiosInstance from '../../utils/axiosInstance';

const AddEditNote = ({ noteData, type, onClose, getAllNotes, showToastMessage, darkMode}) => {

  const [title, setTitle] = useState(noteData?.title || "");
  const [content, setContent] = useState(noteData?.content || "");
  const [tags, setTags] = useState(noteData?.tags || []);
  const [error, setError] = useState(null);

  // Add Note
  const addNewNote = async () => {
    try {
      const response = await axiosInstance.post("/add-note", {
        title,
        content,
        tags,
      });
      if (response.data && response.data.note) {
        showToastMessage("Note Added Successfully");
        await getAllNotes(); // Ensure this completes before closing the modal
        onClose();
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      }
    }
  };
  //edit note
  const editNote = async () => {
    const noteId = noteData._id
    try {
      const response = await axiosInstance.put("/edit-note/" + noteId, {
        title,
        content,
        tags,
      });
      if (response.data && response.data.note) {
        showToastMessage("Note Updated Successfully");
        await getAllNotes(); // Ensure this completes before closing the modal
        onClose();
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        showToastMessage(error.response.data.message);
        setError(error.response.data.message);
      }
    }
  };


  const handleAddNote = () => {
    if (!title) {
      setError("Please enter the title");
      return;
    }
    if (!content) {
      setError("Please enter the content");
      return;
    }
    setError("");

    if (type === "edit") {
      editNote()
    }
    else {
      addNewNote()
    }
  };

  return (
    <div className="relative">
      <button className='w-10 h-10 rounded-full flex items-center justify-center absolute -top-4 -right-4 overflow-hidden hover:bg-slate-100
       dark:hover:bg-neutral-600'
        onClick={onClose}>
        <MdClose className='text-2xl text-slate-400
         dark:text-neutral-200 ' />
      </button>
      <div className='flex flex-col gap-2 '>
        <label className='text-xs text-slate-400
         dark:text-[#ffd84c]'>
          Title
        </label>
        <input
          type='text'
          placeholder='Go to the gym'
          className='text-2xl text-slate-950 outline-none p-2 rounded placeholder:text-slate-400 bg-slate-100 border-none
          dark:border dark:border-neutral-600 dark:bg-neutral-800 dark:placeholder-neutral-400 dark:text-neutral-200'
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      <div className='flex flex-col gap-2 mt-4'>
        <label className='text-xs text-slate-400
         dark:text-[#ffd84c]'>
          Content
        </label>
        <textarea
          type='text'
          placeholder='Content'
          className='text-sm text-slate-950 outline-none p-2 bg-slate-100 rounded  placeholder:text-slate-400 border-none
           dark:border dark:border-neutral-600 dark:bg-neutral-800 dark:placeholder-neutral-400 dark:text-neutral-200'
          rows={10}
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
      </div>

      <div className='mt-3'>
        <label className='text-xs text-slate-400
         dark:dark:text-[#ffd84c]'>
          Tags
        </label>
        <TagInput
          tags={tags}
          setTags={setTags}
        />
      </div>

      {error && <p className='text-red-500 text-xs pt-4'>{error}</p>}

      <button className='w-full text-sm bg-blue-500 text-white rounded my-1 hover:bg-blue-600 font-medium mt-7 p-3
      dark:bg-[#ffd84c] dark:text-neutral-950 dark:hover:bg-[#f7c71d]'
        onClick={handleAddNote}>
        {type === "edit" ? "Update" : "Add"}
      </button>
    </div>
  )
}

export default AddEditNote
