import React, { useState } from "react";
import Button from "../buttons/Button";
import { FaRegCopy } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { FaEdit } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { updateUsername } from "@/lib/features/user/userAPI";
import { toast } from "react-toastify";
import Spinner from "../Spinner";

type Props = {
  artistName: string;
  walletLinked: boolean;
  myProfile: boolean;
  fetchUserData: () => void;
};

export default function ArtistnameAndWalet({
  artistName,
  walletLinked,
  myProfile = false,
  fetchUserData,
}: Readonly<Props>) {
  const [EditUserName, setEditUserName] = useState(false);
  const [newUserName, setNewUserName] = useState(artistName);
  const [loading, setLoading] = useState(false);
  const saveUserName = async () => {
    setLoading(true);
    try {
      await updateUsername(newUserName);
      toast.success("Username updated successfully");
      fetchUserData();
      setLoading(false);
      setEditUserName(false);
    } catch (error) {
      console.log(error);
      toast.error("Failed to update username");
      setLoading(false);
      setEditUserName(false);
    }
  };
  return (
    <div>
      {" "}
      <div className="items-center justify-between p-2 md:flex">
        <div className="relative group">
          {EditUserName ? (
            loading ? (
              <div className="border-2 border-gray-300/50 rounded-md h-20 flex items-center justify-center">
                <Spinner size="medium" white={true} /> updating username...
              </div>
            ) : (
              <input
                value={newUserName}
                className="w-full p-3 mt-2 bg-backgroundSecondary rounded-lg min-h-10 text-3xl"
                placeholder="Edit Username"
                onChange={(e) => setNewUserName(e.target.value)}
              ></input>
            )
          ) : (
            <h1 className="text-6xl font-bold">{artistName}</h1>
          )}

          {myProfile &&
            (EditUserName ? (
              <div
                className={`absolute top-0 right-0  group-hover:block transition-all  ease-in-out duration-200`}
              >
                <button
                  onClick={saveUserName}
                  className="mr-2  p-2 rounded-full border-2 transition-all bg-green-500 ease-in-out duration-200 hover:bg-green-600"
                  title="Save Bio"
                >
                  <MdDoneOutline />
                </button>
                <button
                  className="mr-2 p-2 rounded-full border-2 transition-all bg-red-500 ease-in-out duration-200 hover:bg-red-600"
                  onClick={() => setEditUserName(false)}
                  title="cancel"
                >
                  <MdCancel />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setEditUserName(true)}
                title="Edit Bio"
                className="hidden absolute bg-callAction p-2 rounded-full border-2 top-0 right-0 transition-all ease-in-out duration-200  group-hover:block hover:bg-purple-800"
              >
                <FaEdit />
              </button>
            ))}
        </div>
        <div className="flex items-center gap-4">
          {walletLinked ? (
            <Button
              text="0xc0E3...B79C"
              isLink={false}
              styleType="secondary"
              BtnStyle="simple"
              extraClasses="font-bold"
              icon={<FaRegCopy />}
            />
          ) : (
            <Button
              text="Link Wallet"
              isLink={false}
              styleType="secondary"
              BtnStyle="simple"
              extraClasses="font-bold"
              icon={<FaWallet />}
            />
          )}

          {!myProfile && (
            <Button
              text="Follow"
              isLink={false}
              styleType="secondary"
              BtnStyle="inline"
              extraClasses="font-bold"
              icon={<FiPlus />}
            />
          )}
        </div>
      </div>
    </div>
  );
}
