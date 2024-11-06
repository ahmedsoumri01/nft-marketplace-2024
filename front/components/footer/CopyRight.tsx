import React from "react";

type Props = {
  websiteName: string;
  year: number;
  owner: string;
};

export default function CopyRight({ websiteName, year, owner }: Props) {
  return (
    <div className="text-captionLabel border-t-2 pt-3 border-captionLabel">
      Ⓒ {year} {websiteName}. All rights reserved. Developed by {owner}
    </div>
  );
}
