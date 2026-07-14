/** Ambient background: faint grid + soft gradient orbs. Purely decorative. */
export function BackgroundFX() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* faint grid */}
      <div className="absolute inset-0 bg-grid-faint [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      {/* gradient orbs */}
      <div className="absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      <div className="absolute right-[-10rem] top-1/3 h-[30rem] w-[30rem] rounded-full bg-accent-cyan/10 blur-[120px]" />
      <div className="absolute bottom-[-12rem] left-[-8rem] h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-[120px]" />
    </div>
  );
}
