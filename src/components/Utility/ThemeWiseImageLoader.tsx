"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
const ThemeWiseImageLoader = ({
  srcLight,
  srcDark,
  alt,
  width,
  height,
}: {
  srcLight: string;
  srcDark: string;
  alt: string;
  width: number;
  height: number;
}) => {
  const { resolvedTheme } = useTheme();
  return (
    <>
      {resolvedTheme === "light" ? (
        <Image src={srcLight} alt={alt} width={200} height={100} />
      ) : (
        <Image src={srcDark} alt={alt} width={200} height={100} />
      )}
    </>
  );
};

export default ThemeWiseImageLoader;
