import { Outlet } from "react-router";

const UsersLayout = () => {
  return (
    <div className="flex min-h-screen bg-zinc-50">
      <aside className="sticky top-0 z-20 hidden h-screen w-24 shrink-0 overflow-hidden md:flex lg:w-28">
        <div className="relative flex h-full w-full flex-col items-center justify-between bg-gradient-to-b from-[#1a3f6b] via-[#3b6dae] to-[#152d4d] px-3 py-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.18),transparent_50%)]" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#ef4444]/20 blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 -left-6 h-28 w-28 rounded-full bg-white/10 blur-2xl" />

          <div className="relative h-16 w-px bg-gradient-to-b from-transparent via-white/60 to-transparent" />

          <div
            className="relative flex items-center gap-4 text-white"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            <h1 className="text-3xl font-bold tracking-[0.4em] uppercase">
              Centrica
            </h1>
            <span className="h-8 w-px bg-white/40" aria-hidden />
            <p className="text-[11px] font-medium tracking-[0.35em] text-white/70 uppercase">
              Users directory
            </p>
          </div>

          <div className="relative flex flex-col items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.8)]" />
            <div className="h-16 w-px bg-gradient-to-b from-transparent via-white/60 to-transparent" />
          </div>
        </div>
      </aside>

      <main className="min-h-screen min-w-0 flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default UsersLayout;
