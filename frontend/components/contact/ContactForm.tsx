"use client";

import { useState } from "react";

type ContactFormProps = {
  selectedTrip?: string;
  isCustomizeRequest?: boolean;
};

type FormStatus = {
  type: "idle" | "success" | "error";
  message: string;
};

export default function ContactForm({
  selectedTrip = "",
  isCustomizeRequest = false,
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);

    setStatus({
      type: "idle",
      message: "",
    });

    const formData = new FormData(event.currentTarget);

    const payload = {
      requestType: String(formData.get("requestType") ?? ""),
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      country: String(formData.get("country") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      trip: String(formData.get("trip") ?? ""),
      travelDate: String(formData.get("travelDate") ?? ""),
      travelers: String(formData.get("travelers") ?? ""),
      style: String(formData.get("style") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus({
          type: "error",
          message: result.message ?? "Please check the form and try again.",
        });

        return;
      }

      setStatus({
        type: "success",
        message:
          result.message ??
          "Your inquiry has been received. Our team will respond soon.",
      });

      event.currentTarget.reset();
    } catch {
      setStatus({
        type: "error",
        message: "Unable to submit the form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Request type */}
      <div>
        <label
          htmlFor="requestType"
          className="mb-2 block text-sm font-bold"
        >
          Request Type
        </label>

        <select
          id="requestType"
          name="requestType"
          defaultValue={isCustomizeRequest ? "custom" : "inquiry"}
          className="w-full border border-[#081827]/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#C9A46A]"
        >
          <option value="inquiry">General Trip Inquiry</option>
          <option value="custom">Customize This Trip</option>
          <option value="private">Private Journey Request</option>
          <option value="group">Group Travel Request</option>
        </select>
      </div>

      {/* Name + email */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-bold">
            Full Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full border border-[#081827]/15 px-4 py-3 text-sm outline-none transition focus:border-[#C9A46A]"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-bold">
            Email Address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full border border-[#081827]/15 px-4 py-3 text-sm outline-none transition focus:border-[#C9A46A]"
          />
        </div>
      </div>

      {/* Country + phone */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="country" className="mb-2 block text-sm font-bold">
            Country
          </label>

          <input
            id="country"
            name="country"
            type="text"
            placeholder="Your country"
            className="w-full border border-[#081827]/15 px-4 py-3 text-sm outline-none transition focus:border-[#C9A46A]"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-bold">
            Phone / WhatsApp
          </label>

          <input
            id="phone"
            name="phone"
            type="text"
            placeholder="+977..."
            className="w-full border border-[#081827]/15 px-4 py-3 text-sm outline-none transition focus:border-[#C9A46A]"
          />
        </div>
      </div>

      {/* Trip + travel date */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="trip" className="mb-2 block text-sm font-bold">
            Interested Trip
          </label>

          <input
            id="trip"
            name="trip"
            type="text"
            defaultValue={selectedTrip}
            placeholder="Everest Base Camp Trek"
            className="w-full border border-[#081827]/15 px-4 py-3 text-sm outline-none transition focus:border-[#C9A46A]"
          />
        </div>

        <div>
          <label
            htmlFor="travelDate"
            className="mb-2 block text-sm font-bold"
          >
            Expected Travel Date
          </label>

          <input
            id="travelDate"
            name="travelDate"
            type="text"
            placeholder="Month / year or exact date"
            className="w-full border border-[#081827]/15 px-4 py-3 text-sm outline-none transition focus:border-[#C9A46A]"
          />
        </div>
      </div>

      {/* Travelers + style */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="travelers"
            className="mb-2 block text-sm font-bold"
          >
            Number of Travelers
          </label>

          <input
            id="travelers"
            name="travelers"
            type="number"
            min="1"
            placeholder="2"
            className="w-full border border-[#081827]/15 px-4 py-3 text-sm outline-none transition focus:border-[#C9A46A]"
          />
        </div>

        <div>
          <label htmlFor="style" className="mb-2 block text-sm font-bold">
            Preferred Travel Style
          </label>

          <select
            id="style"
            name="style"
            className="w-full border border-[#081827]/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#C9A46A]"
          >
            <option value="">Select one</option>
            <option value="private">Private Journey</option>
            <option value="group">Group Departure</option>
            <option value="family">Family Travel</option>
            <option value="luxury">Comfort / Premium Style</option>
            <option value="unsure">Not Sure Yet</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-bold">
          Message
        </label>

        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Tell us about your travel plans, questions, preferred route, budget range, or customization needs."
          className="w-full resize-none border border-[#081827]/15 px-4 py-3 text-sm leading-7 outline-none transition focus:border-[#C9A46A]"
        />
      </div>

      {/* Submit */}
      <div className="border-t border-[#081827]/10 pt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-full bg-[#081827] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#10243D] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </button>

        {status.message && (
          <p
            className={`mt-4 text-sm leading-7 ${
              status.type === "success"
                ? "text-green-700"
                : "text-red-700"
            }`}
          >
            {status.message}
          </p>
        )}

        <p className="mt-4 text-sm leading-7 text-[#081827]/55">
          Email delivery is not connected yet. This form currently submits to
          the project API route and can be connected to email or lead storage
          next.
        </p>
      </div>
    </form>
  );
}