import Button from "@/components/buttons/Button";

export default function Home() {
  return (
    <>
      {" "}
      <Button
        text="Click me"
        icon="ArrowRight"
        styleType="primary"
        BtnStyle="simple"
        extraClasses="w-full"
      />
      <Button
        text="Click me1"
        styleType="primary"
        BtnStyle="inline"
        icon="ArrowLeft"
      />
    </>
  );
}
