import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import Spinner from "../Spinner";
import { updateUserBio } from "@/lib/features/user/userAPI"; // Import the updateUserBio function
import { toast } from "react-toastify";
type Props = {
  artistBio: string;
  myProfile: boolean;
  fetchUserData: () => void;
};

export default function ArtistBio({ artistBio, myProfile,fetchUserData }: Props) {
  const [editBio, setEditBio] = useState(false);
  const [newBio, setNewBio] = useState(artistBio);
  const [loading, setLoading] = useState(false);
  const saveBio = async () => {
    setLoading(true);
    try {
      await updateUserBio(newBio);
      toast.success("Bio updated successfully");
      fetchUserData();
      setLoading(false);
      setEditBio(false);
    } catch (error) {
      console.log(error);
      toast.error("Failed to update bio");
      setLoading(false);
      setEditBio(false);
    }
  };
  return (
    <div>
      {" "}
      <div className="p-4 relative group">
        <p className="text-captionLabel text-lg">Bio</p>
        {editBio ? (
          loading ? (
            <div className="border-2 border-gray-300/50 rounded-md h-20 flex items-center justify-center">
              <Spinner size="medium" white={true} /> updating bio...
            </div>
          ) : (
            <textarea
              value={newBio}
              className="w-full p-3 mt-2 bg-backgroundSecondary rounded-lg min-h-40"
              placeholder="Edit Bio"
              onChange={(e) => setNewBio(e.target.value)}
            ></textarea>
          )
        ) : (
          <p className="text-lg">{artistBio}</p>
        )}
        {myProfile &&
          (editBio ? (
            <div
              className={`hidden absolute top-4 left-16  group-hover:block transition-all  ease-in-out duration-200 ${
                editBio ? "block" : "hidden"
              }`}
            >
              <button
                onClick={saveBio}
                className="mr-2  bg-callAction p-2 rounded-full border-2 transition-all bg-green-500 ease-in-out duration-200 hover:bg-green-600"
                title="Save Bio"
              >
                <MdDoneOutline />
              </button>
              <button
                className="mr-2  bg-callAction p-2 rounded-full border-2 transition-all bg-red-500 ease-in-out duration-200 hover:bg-red-600"
                onClick={() => setEditBio(false)}
                title="cancel"
              >
                <MdCancel />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setEditBio(true)}
              title="Edit Bio"
              className="hidden absolute bg-callAction p-2 rounded-full border-2 top-4 left-20 transition-all ease-in-out duration-200  group-hover:block"
            >
              <FaEdit />
            </button>
          ))}
      </div>
    </div>
  );
}
