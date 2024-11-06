import React from "react";
import Button from "@/components/buttons/Button";
type Props = {
  title: string;
  description: string;
  sectionStyle: "withBtn" | "withoutBtn";
  buttonProps?: {
    text: string;
    styleType: "primary" | "secondary";

    icon: "RocketLaunch" | "ArrowRight" | "Eye";
    extraClasses: string;
  };
};

const SectionTitle = ({
  title,
  description,
  sectionStyle,
  buttonProps,
}: Props) => {
  return (
    <div>
      {sectionStyle === "withBtn" ? (
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-black text-3xl md:text-4xl lg:text-5xl">{title}</h2>
            <p className="text-lg">{description}</p>
          </div>
          <div>
            {buttonProps && (
              <Button
                text={buttonProps.text}
                styleType="secondary"
                BtnStyle="inline"
                icon={buttonProps.icon}
                extraClasses="w-full justify-center md:w-auto"
              />
            )}
          </div>
        </div>
      ) : (
        <div>
          <h2 className="font-black text-4xl">{title}</h2>
          <p className="text-lg">{description}</p>
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
