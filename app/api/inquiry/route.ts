import { NextResponse } from "next/server";

type InquiryPayload = {
  requestType?: string;
  name?: string;
  email?: string;
  country?: string;
  phone?: string;
  trip?: string;
  travelDate?: string;
  travelers?: string;
  style?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as InquiryPayload;

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name) {
      return NextResponse.json(
        {
          success: false,
          message: "Full name is required.",
        },
        { status: 400 }
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "A valid email address is required.",
        },
        { status: 400 }
      );
    }

    if (!message) {
      return NextResponse.json(
        {
          success: false,
          message: "Message is required.",
        },
        { status: 400 }
      );
    }

    const inquiry = {
      requestType: body.requestType ?? "inquiry",
      name,
      email,
      country: body.country?.trim() ?? "",
      phone: body.phone?.trim() ?? "",
      trip: body.trip?.trim() ?? "",
      travelDate: body.travelDate?.trim() ?? "",
      travelers: body.travelers?.trim() ?? "",
      style: body.style ?? "",
      message,
      submittedAt: new Date().toISOString(),
    };

    console.log("New Pleasant Holiday inquiry:", inquiry);

    return NextResponse.json({
      success: true,
      message:
        "Your inquiry has been received. Our team will review your request and respond soon.",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}