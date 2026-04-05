export default function Splash({ onEnter }) {
  return (
    <div
      className="h-dvh flex flex-col items-center justify-center px-6 cursor-pointer overflow-hidden relative"
      style={{ background: 'radial-gradient(ellipse at center, #1a7fd4 0%, #0052a3 100%)' }}
      onClick={onEnter}
    >
      <div className="animate-fade-in flex flex-col items-center text-center">
        {/* Logo glow */}
        <div
          className="absolute"
          style={{
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.08)',
            filter: 'blur(60px)',
            top: '15%',
            left: '50%',
            transform: 'translateX(-50%)',
            pointerEvents: 'none',
          }}
        />

        {/* Ingram Micro logo */}
        <img
          src="/ingram-ignites/ingram-logo.png"
          alt="Ingram Micro"
          className="mb-8 relative z-10"
          style={{ width: '240px', filter: 'brightness(0) invert(1)' }}
        />

        {/* Gradient divider */}
        <div
          className="mb-5"
          style={{
            width: '120px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
          }}
        />

        {/* Sub-brand */}
        <p
          className="text-white text-[28px] font-light mb-10 animate-shimmer"
          style={{ letterSpacing: '0.25em' }}
        >
          Ignites
        </p>

        {/* Tagline */}
        <p className="text-white/85 text-base font-light mb-12">
          Your Microsoft strategy, personalized.
        </p>

        {/* Entering as card — frosted glass */}
        <div
          className="rounded-xl px-6 py-4 mb-8 w-full max-w-xs"
          style={{
            background: 'rgba(255,255,255,0.12)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.25)',
          }}
        >
          <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Entering as</p>
          <p className="text-white font-semibold text-lg">Jordan Mercer</p>
          <p className="text-white/70 text-sm">Director of IT, Pacific Mutual</p>
        </div>

        {/* Tap to enter */}
        <p className="text-[13px] animate-soft-pulse" style={{ color: 'rgba(255,255,255,0.65)' }}>
          Tap anywhere to enter
        </p>
      </div>

      {/* Powered by — anchored to bottom */}
      <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2">
        <div
          style={{
            width: '40px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
          }}
        />
        <div className="flex items-center justify-center gap-2">
          <span className="text-white/40 text-[11px]">Powered by</span>
          <img
            src="/ingram-ignites/starch-logo.png"
            alt="Starch"
            style={{ height: '14px', filter: 'brightness(0) invert(1)', opacity: 0.5 }}
          />
        </div>
      </div>
    </div>
  )
}
