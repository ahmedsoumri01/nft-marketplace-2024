"use client";
import { BsFillSkipForwardFill } from "react-icons/bs";
import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import Icon from "@/components/Icons";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { RxDiscordLogo } from "react-icons/rx";
import { TbWorld } from "react-icons/tb";
import { LuUpload } from "react-icons/lu";
import Avatar from "../Avatar";
import Button from "@/components/buttons/Button";
import { firstTimeLogin } from "@/lib/features/user/authAPI";
import Spinner from "@/components/Spinner";
import { toast } from "react-toastify";
import { isValidLink } from "@/utils/utils";
import { completeUserProfile } from "@/lib/features/user/authAPI";
export default function CompleteProfileForm() {
  const [bio, setBio] = useState("");
  const { push } = useRouter();
  const [LinkInvalid, setLinkInvalid] = useState({
    twitter: false,
    instagram: false,
    discord: false,
    website: false,
  });
  const [loadSkipping, setLoadSkipping] = useState(false);
  const [loadCompleteProfile, setLoadCompleteProfile] = useState(false);
  const [twitter, setTwitter] = useState({
    platformName: "twitter",
    link: "",
  });
  const [instagram, setInstagram] = useState({
    platformName: "instagram",
    link: "",
  });
  const [discord, setDiscord] = useState({
    platformName: "discord",
    link: "",
  });
  const [website, setWebsite] = useState({
    platformName: "website",
    link: "",
  });

  const handlecompleteProfile = async () => {
    //reset link invalid
    setLinkInvalid({
      twitter: false,
      instagram: false,
      discord: false,
      website: false,
    });
    const profileData = {
      bio,
      socialLinks: [twitter, instagram, discord, website],
    };

    if (!isValidLink(twitter.link) && twitter.link !== "") {
      setLinkInvalid({ ...LinkInvalid, twitter: true });
    }
    if (!isValidLink(instagram.link) && instagram.link !== "") {
      setLinkInvalid({ ...LinkInvalid, instagram: true });
    }
    if (!isValidLink(discord.link) && discord.link !== "") {
      setLinkInvalid({ ...LinkInvalid, discord: true });
    }
    if (!isValidLink(website.link) && website.link !== "") {
      setLinkInvalid({ ...LinkInvalid, website: true });
    }
    if (
      (!isValidLink(website.link) && website.link !== "") ||
      (!isValidLink(discord.link) && discord.link !== "") ||
      (!isValidLink(instagram.link) && instagram.link !== "") ||
      (!isValidLink(twitter.link) && twitter.link !== "")
    ) {
      toast.error("Invalid link, please enter a valid link");
      return;
    }

    if (bio === "") {
      toast.error("Bio cannot be empty");
      return;
    }
    setLoadCompleteProfile(true);
    try {
      await completeUserProfile(profileData);
      setLoadCompleteProfile(false);
      push("/");
      toast.success("Profile setup completed successfully");
    } catch (error) {
      console.error(error);
      setLoadCompleteProfile(false);
      toast.error("An error occured, please try again");
    }
  };
  const handleSkip = async () => {
    try {
      setLoadSkipping(true);
      await firstTimeLogin();
      setLoadSkipping(false);
      push("/");
      toast.success("Profile setup skipped successfully");
    } catch (error) {
      setLoadSkipping(false);
      console.error(error);
      toast.error("An error occured, please try again");
    }
  };
  return (
    <div className="container mx-auto">
      <div className="text-center my-3">
        <button
          onClick={handleSkip}
          disabled={loadSkipping}
          className={`float-right flex items-center border p-2 gap-3 rounded-md border-captionLabel transition-all ease-in-out duration-300 
            ${loadSkipping ? "cursor-wait" : "cursor-pointer"}
            hover:bg-white hover:text-black`}
        >
          {loadSkipping ? (
            <Spinner size="medium" />
          ) : (
            <>
              <span>skip</span>
              <span>
                <BsFillSkipForwardFill />
              </span>
            </>
          )}
        </button>
        <h1 className="font-black text-3xl">Complete Your Artist Profile</h1>
        <p className="text-xl my-2">
          Complete your artist profile to get started with your account.
        </p>
      </div>
      <div>
        <div className="space-y-4  my-4 py-4 border px-4 rounded-md">
          <Label htmlFor="avatar">Upload Avatar</Label>
          <div className="flex items-center justify-around gap-12">
            <div>
              <div>
                <Avatar
                  src="/assets/images/Avatar1.png"
                  alt="avatars"
                  size="large"
                  className="w-24 h-24 rounded-full"
                />
              </div>
            </div>
            <div className="relative w-full">
              <Input
                id="avatar"
                name="avatar"
                type="file"
                className="sr-only"
                accept="image/*"
              />
              <label
                htmlFor="avatar"
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <LuUpload
                    className={`w-12 h-12 mb-4 
  text-gray-400
                  `}
                  />
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="space-y-4 my-4 py-4 border px-4 rounded-md">
          <Label htmlFor="bio" className="border-b-2">
            Artist Bio
          </Label>

          <Textarea
            id="bio"
            name="bio"
            placeholder="Tell us about yourself as an artist..."
            className="min-h-[100px]"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div className="space-y-4 my-4 py-4 border px-4 rounded-md">
          <Label htmlFor="social Links" className="border-b-2">
            social Links
          </Label>
          <div>
            <Label htmlFor="twitter">Twitter</Label>
            <div className="flex items-center">
              <Icon
                icon={<CiTwitter />}
                extraClasses="border-t border-b border-l rounded-md h-fit py-1.5"
              />
              <Input
                id="twitter"
                name="twitter"
                className="border-l-0"
                placeholder="Your Twitter handle"
                value={twitter.link}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setTwitter({ ...twitter, link: e.target.value });
                  setLinkInvalid({ ...LinkInvalid, twitter: false });
                }}
              />
            </div>
            {LinkInvalid.twitter && (
              <span className="text-red-600 text-xs">
                ** you can take the input value but didnt enter invalid link **
              </span>
            )}
          </div>
          <div>
            <Label htmlFor="instagram">Instagram</Label>
            <div className="flex items-center">
              <Icon
                icon={<FaInstagram />}
                extraClasses="border-t border-b border-l rounded-md h-fit py-1.5"
              />
              <Input
                id="instagram"
                name="instagram"
                className="border-l-0"
                placeholder="Your Instagram handle"
                value={instagram.link}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setInstagram({ ...instagram, link: e.target.value });
                  setLinkInvalid({ ...LinkInvalid, instagram: false });
                }}
              />
            </div>
            {LinkInvalid.instagram && (
              <span className="text-red-600 text-xs">
                ** you can take the input value but didnt enter invalid link **
              </span>
            )}
          </div>
          <div>
            <Label htmlFor="facebook">Discord</Label>
            <div className="flex items-center">
              <Icon
                icon={<RxDiscordLogo />}
                extraClasses="border-t border-b border-l rounded-md h-fit py-1.5"
              />
              <Input
                id="Discord"
                name="Discord"
                className="border-l-0"
                placeholder="Your Discord profile URL"
                value={discord.link}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setDiscord({ ...discord, link: e.target.value });
                  setLinkInvalid({ ...LinkInvalid, discord: false });
                }}
              />
            </div>
            {LinkInvalid.discord && (
              <span className="text-red-600 text-xs">
                ** you can take the input value but didnt enter invalid link **
              </span>
            )}
          </div>
          <div>
            <Label htmlFor="facebook">personal website</Label>
            <div className="flex items-center">
              <Icon
                icon={<TbWorld />}
                extraClasses="border-t border-b border-l rounded-md h-fit py-1.5"
              />
              <Input
                id="website"
                name="website"
                className="border-l-0"
                placeholder="Your website URL"
                value={website.link}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setWebsite({ ...website, link: e.target.value });
                  setLinkInvalid({ ...LinkInvalid, website: false });
                }}
              />
            </div>
            {LinkInvalid.website && (
              <span className="text-red-600 text-xs">
                ** you can take the input value but didnt enter invalid link **
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="text-center">
        <Button
          text="save profile"
          styleType="secondary"
          BtnStyle="simple"
          loading={loadCompleteProfile}
          extraClasses="w-full !rounded-full flex justify-center font-black"
          onClick={handlecompleteProfile}
        />
      </div>
    </div>
  );
}
