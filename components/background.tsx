export default function Background() {
  return (
    <>
      <div className="fixed inset-0 -z-10 bg-gradient-to-r from-sky-300 to-sky-500 opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-sky-600/30 dark:to-sky-700/30 dark:opacity-100">
        <svg
          aria-hidden="true"
          className="dark:fill-white/2.5 absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:stroke-white/5"
        >
          <defs>
            <pattern
              id=":R11d6:"
              width="72"
              height="56"
              patternUnits="userSpaceOnUse"
              x="-12"
              y="4"
            >
              <path d="M.5 56V.5H72" fill="none"></path>
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#:R11d6:)"
          ></rect>
          <svg x="-12" y="4" className="overflow-visible">
            <rect strokeWidth="0" width="73" height="57" x="288" y="168"></rect>
            <rect strokeWidth="0" width="73" height="57" x="144" y="56"></rect>
            <rect strokeWidth="0" width="73" height="57" x="504" y="168"></rect>
            <rect strokeWidth="0" width="73" height="57" x="720" y="336"></rect>
          </svg>
        </svg>
      </div>
    </>
  );
}
