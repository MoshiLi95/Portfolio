import { NextResponse } from "next/server";
import Axois from "axios";

export async function POST(request: Request) {
  const { token } = await request.json();

  if (token) {
    const { data } = await Axois.post<{
      success: boolean;
      score: number;
      action: string;
    }>(
      "https://www.google.com/recaptcha/api/siteverify",
      { secret: process.env.RECAPTCHA_SECRET_KEY, response: token },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        },
      },
    );

    if (data.success && data.score > 0.6) {
      switch (data.action) {
        case "validate_contact":
          return NextResponse.json({
            success: true,
            phone: "(437) - 684 - 9196",
            address: "Yonge St & King St E",
          });
        default:
          return NextResponse.json({ success: true });
      }
    }
  }

  return NextResponse.json({ success: false });
}
