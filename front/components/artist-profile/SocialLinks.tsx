import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";
import { isValidLink } from "@/utils/utils";
import Link from "next/link";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { RxDiscordLogo } from "react-icons/rx";
import { MdCancel } from "react-icons/md";
import { updateSocialLinks } from "@/lib/features/user/userAPI";
import Spinner from "../Spinner";
import { toast } from "react-toastify";
type Props = {
  fetchUserData: () => void; // Add the fetchUserData function
  myProfile: boolean;
  Links: {
    platformName: string;
    link: string;
  }[];
};

export default function SocialLinks({
  Links,
  fetchUserData,
  myProfile,
}: Props) {
  const [editLinks, setEditLinks] = useState(false);
  const [links, setLinks] = useState(Links);
  const [notValidLink, setNotValidLink] = useState({});
  const [loading, setLoading] = useState(false);
  const onChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    //empty that item from the notValidLink object
    setNotValidLink((prev) => ({ ...prev, [name]: false }));

    // Check if the link is valid
    if (!isValidLink(value) && value !== "") {
      setNotValidLink((prev) => ({ ...prev, [name]: true }));
      return;
    }
    setLinks((prev) =>
      prev.map((link) =>
        link.platformName === name ? { ...link, link: value } : link
      )
    );
  };
  const saveLinks = async () => {
    try {
      setLoading(true);

      // Prepare data for the API request
      const socialLinks = links.map(({ platformName, link }) => ({
        platformName,
        link,
      }));

      console.log("socialLinks", socialLinks);

      // Call the API
      const response = await updateSocialLinks({ socialLinks });

      if (response.status === 200) {
        setEditLinks(false);
        setLoading(false);
        toast.success("Links updated successfully");
        fetchUserData(); // Refresh user data
      } else {
        throw new Error(response.data.message || "Failed to update links");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div>
      {" "}
      <div className="p-3">
        <div className="flex items-center gap-5 relative group">
          {
            //show links label if at least one link is present and is not empty
            Links?.filter((link) => link.link !== "").length > 0 && (
              <p className="text-captionLabel text-lg">Links</p>
            )
          }
          <div>
            <div className="hidden absolute left-15 top-0 transition-all duration-200 ease-in-out group-hover:block">
            {!editLinks && myProfile && (
              <button
                onClick={() => setEditLinks(true)}
                title="Edit socialLinks"
                className="bg-callAction p-2 rounded-full border-2 top-4 left-20 transition-all ease-in-out duration-200 hover:bg-purple-800"
              >
                <FaEdit />  
              </button>
            )}
            </div>
            {editLinks && (
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    saveLinks();
                  }}
                  title="Save"
                  className="bg-green-500 p-2 rounded-full border-2 top-4 left-20 transition-all ease-in-out duration-200 hover:bg-green-600"
                >
                  <MdDoneOutline />
                </button>
                <button
                  onClick={() => {
                    setEditLinks(false);
                    setLinks(Links);
                    //empty the notValidLink object
                    setNotValidLink({});
                  }}
                  title="Cancel"
                  className="bg-red-500 p-2 rounded-full border-2 top-4 left-20 transition-all ease-in-out duration-200 hover:bg-red-600"
                >
                  <MdCancel />
                </button>
              </div>
            )}
          </div>
        </div>
        {editLinks ? (
          loading ? (
            <div className="flex justify-center items-center h-32">
              <Spinner white={true} size="medium" /> update socials links
            </div>
          ) : (
            <div className="py-4">
              <div>
                <div className="flex items-center group py-2">
                  <span className="text-2xl border h-12 px-3 transition-all ease-in-out duration-200  rounded-l-sm border-captionLabel border-r-0 flex items-center group-hover:bg-blue-500">
                    <CiTwitter />
                  </span>
                  <input
                    defaultValue={links[0].link}
                    type="text"
                    onChange={onChanges}
                    name="twitter"
                    placeholder="Twitter Link"
                    className="w-1/2 p-3 bg-backgroundSecondary rounded-l-none rounded-lg"
                  />
                </div>
                {notValidLink["twitter"] && (
                  <p className="text-red-500 text-xs">** Invalid Link</p>
                )}
              </div>
              <div>
                <div className="flex items-center group py-2">
                  <span className="text-2xl border h-12 px-3 transition-all ease-in-out duration-200  rounded-l-sm border-captionLabel border-r-0 flex items-center group-hover:bg-blue-500">
                    <FaInstagram />
                  </span>
                  <input
                    defaultValue={links[1].link}
                    type="text"
                    name="instagram"
                    onChange={onChanges}
                    placeholder="instagram Link"
                    className="w-1/2 p-3 bg-backgroundSecondary rounded-l-none rounded-lg"
                  />
                </div>
                {notValidLink["instagram"] && (
                  <p className="text-red-500 text-xs">** Invalid Link</p>
                )}
              </div>
              <div>
                <div className="flex items-center group py-2">
                  <span className="text-2xl border h-12 px-3 transition-all ease-in-out duration-200  rounded-l-sm border-captionLabel border-r-0 flex items-center group-hover:bg-blue-700">
                    <RxDiscordLogo />
                  </span>
                  <input
                    defaultValue={links[2].link}
                    type="text"
                    name="discord"
                    onChange={onChanges}
                    placeholder="discord Link"
                    className="w-1/2 p-3 bg-backgroundSecondary rounded-l-none rounded-lg"
                  />
                </div>
                {notValidLink["discord"] && (
                  <p className="text-red-500 text-xs">** Invalid Link</p>
                )}
              </div>
              <div>
                <div className="flex items-center group py-2">
                  <span className="text-2xl border h-12 px-3 transition-all ease-in-out duration-200  rounded-l-sm border-captionLabel border-r-0 flex items-center group-hover:bg-yellow-500">
                    <TbWorld />
                  </span>
                  <input
                    name="website"
                    defaultValue={links[3].link}
                    type="text"
                    onChange={onChanges}
                    placeholder="Website Link"
                    className="w-1/2 p-3 bg-backgroundSecondary rounded-l-none rounded-lg"
                  />
                </div>
                {notValidLink["website"] && (
                  <p className="text-red-500 text-xs">** Invalid Link</p>
                )}
              </div>
            </div>
          )
        ) : (
          <div className="flex items-center gap-5 text-2xl py-4">
            {
              // Map over the Links array
              Links.filter(
                (link) => link.link !== "" // Filter out empty links
              ).map((link, index) => (
                <Link
                  key={index}
                  href={link.link}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-all duration-300 ease-in-out hover:text-callAction"
                >
                  {
                    // Check the platformName and render the appropriate icon
                    link.platformName === "twitter" ? (
                      <CiTwitter />
                    ) : link.platformName === "instagram" ? (
                      <FaInstagram />
                    ) : link.platformName === "website" ? (
                      <TbWorld />
                    ) : link.platformName === "discord" ? (
                      <RxDiscordLogo />
                    ) : null
                  }
                </Link>
              ))
            }
          </div>
        )}
      </div>
    </div>
  );
}
