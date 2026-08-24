import { companyInfo } from "@/data/company";

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#081827] px-6 text-white">
      <div className="text-center">
        <div className="mx-auto mb-6 h-12 w-12 animate-spin rounded-full border-2 border-white/20 border-t-[#C9A46A]" />

        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
          {companyInfo.name}
        </p>

        <h1 className="mt-4 text-2xl font-extrabold tracking-tight">
          Preparing your journey
        </h1>

        <p className="mt-3 text-sm leading-7 text-white/55">
          Loading travel details...
        </p>
      </div>
    </main>
  );
}