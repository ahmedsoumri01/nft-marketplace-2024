import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Icon from "@/components/Icons";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { RxDiscordLogo } from "react-icons/rx";
import { TbWorld } from "react-icons/tb";
import { LuUpload } from "react-icons/lu";
import Avatar from "../Avatar";
import Button from "@/components/buttons/Button";

export default function CompleteProfileForm() {
  return (
    <div className="container mx-auto">
      <div className="text-center my-3">
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
              />
            </div>
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
              />
            </div>
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
                placeholder="Your Facebook profile URL"
              />
            </div>
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
                placeholder="Your Facebook profile URL"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Button
          text="save profile"
          styleType="secondary"
          BtnStyle="simple"
          extraClasses="w-full !rounded-full flex justify-center font-black"
        />
      </div>
    </div>
  );
}
