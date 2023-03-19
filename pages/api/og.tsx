import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

// Make sure the font exists in the specified path:
const merriweather = fetch(
  new URL("../../public/fonts/Merriweather-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const fontData = await merriweather;
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title");

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundImage: "url(https://conroy.codes/og-bg.png)",
          fontFamily: "Merriweather",
        }}
      >
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            display: "flex",
            fontSize: 130,
            letterSpacing: "-0.05em",
            fontStyle: "normal",
            color: "white",
            lineHeight: "120px",
            whiteSpace: "pre-wrap",
            fontFamily: "Merriweather",
          }}
        >
          {postTitle}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: "Merriweather",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
