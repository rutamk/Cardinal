import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import NoteCard from '../../components/NoteCard'
import { MdAdd, MdSunny } from 'react-icons/md'
import AddEditNote from './AddEditNote'
import Modal from 'react-modal'
import axiosInstance from "../../utils/axiosInstance";
import { useNavigate } from 'react-router-dom'
import Toast from '../../components/Toast'
import EmptyCard from '../../components/EmptyCard'
import EmptyNoteImg from "../../src/assets/notes.png";
import { FaMoon } from 'react-icons/fa6'

const Home = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [allNotes, setAllNotes] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navigate = useNavigate();
  const [showToastMsg, setShowToastMsg] = useState({
    isShown: false,
    message: "",
    type: "add"
  });

  const showToastMessage = (message, type) => {
    setShowToastMsg({
      isShown: true,
      message,
      type,
    });
  };

  const handleCloseToast = () => {
    setShowToastMsg({
      isShown: false,
      message: "",
    });
  };

  const handleEdit = (noteDetails) => {
    setOpenAddEditModal({ isShown: true, data: noteDetails, type: "edit" })
  }

  // Get User Info
  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/get-user", {});
      if (response.data && response.data.user) {
        setUserInfo(response.data.user);
      }
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.clear();
        navigate("/login");
      }
    }
  };

  // Delete Note
  const deleteNote = async (data) => {
    const noteId = data._id;
    try {
      const response = await axiosInstance.delete("/delete-note/" + noteId);
      if (response.data && !response.data.error) {
        showToastMessage("Note Deleted Successfully", "delete");
        getAllNotes(); // Refresh the notes after deletion
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error("An unexpected error occurred. Please try again");
      }
    }
  };

  //search for a note
  const onSearchQuery = async (query) => {
    try {
      const response = await axiosInstance.get("/search-notes",
        {
          params: { query },
        });
      if (response.data && response.data.notes) {
        setIsSearch(true);
        setAllNotes(response.data.notes);
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  const handleClearSearch = () => {
    setIsSearch(false);
    getAllNotes();
  };

  useEffect(() => {
    getUserInfo()
    getAllNotes();
    return () => { };
  }, []);

  // Get All Notes
  const getAllNotes = async () => {
    try {
      const response = await axiosInstance.get("/get-all-notes");
      if (response.data && response.data.notes) {
        setAllNotes(response.data.notes);
      }
    } catch (error) {
      console.log("An unexpected error occurred. Please try again");
    }
  };

  const updateIsPinned = async (noteData) => {
    const noteId = noteData._id;
    try {
      const response = await axiosInstance.put(
        "/update-note-pinned/" + noteId,
        {
          isPinned: !noteData.isPinned, // Toggle isPinned value
        }
      );
      if (response.data && response.data.note) {
        showToastMessage("Note Updated Successfully")
        getAllNotes();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  const handleCloseModal = () => {
    setOpenAddEditModal({
      isShown: false,
      type: "add",
      data: null
    });
  };

  return (
      <div className='h-[100vh] bg-slate-50 dark:bg-neutral-900 overflow-auto'>
        <Navbar userInfo={userInfo}
          onSearchQuery={onSearchQuery}
          handleClearSearch={handleClearSearch} />

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 pb-4'>
          {allNotes.length > 0 ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8  '>
              {allNotes.map((item) => (
                <NoteCard
                  key={item._id}
                  title={item.title}
                  date={item.createdOn}
                  content={item.content}
                  tags={item.tags}
                  isPinned={item.isPinned}
                  onEdit={() => handleEdit(item)}
                  onDelete={() => { deleteNote(item) }}
                  onPinNote={() => { updateIsPinned(item) }}
                />
              ))}
            </div>
          ) : (
            <EmptyCard
              imgSrc={EmptyNoteImg}
              message={isSearch ? "Oops! No Matching Notes Found" :
                "Start creating your first note! Click the 'Add' button to join down your thoughts, ideas, and reminders. Let's get Started!"
              }
            />
          )}
        </div>

        <button className='w-12 h-12 flex items-center justify-center rounded-2xl
       bg-blue-500 hover:bg-blue-600 fixed bottom-7 right-[45%] sm:bottom-6 sm:right-6 transition-all hover:scale-110 ease-in-out
       dark:bg-[#ffd84c] dark:text-neutral-950 dark:hover:bg-[#f7c71d]'
          onClick={() => {
            setOpenAddEditModal({
              isShown: true,
              type: "add",
              data: null
            });
          }}>
          <MdAdd className='text-[32px] text-white  dark:text-neutral-950' />
        </button>


        <Modal
          isOpen={openAddEditModal.isShown}
          onRequestClose={() => { }}
          ariaHideApp={false}
          style={{
            overlay: {
              backgroundColor: "rgba(0,0,0,0.3)",
              WebkitBackdropFilter: "blur(3px)",
            },
          }}
          contentLabel=""
          className={`w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] max-h-[3/4] border-none bg-white dark:bg-neutral-900 dark:border dark:border-neutral-800
               rounded-md mx-auto mt-20 p-5 `}
        >
          <AddEditNote
            type={openAddEditModal.type}
            noteData={openAddEditModal.data}
            onClose={handleCloseModal}
            getAllNotes={getAllNotes}
            showToastMessage={showToastMessage}
            darkMode={darkMode} />
        </Modal>
        <Toast
          isShown={showToastMsg.isShown}
          message={showToastMsg.message}
          type={showToastMsg.type}
          onClose={handleCloseToast}
        />

      </div>
  )
}

export default Home;
