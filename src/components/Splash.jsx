export default function Splash({ onEnter }) {
  return (
    <div
      className="h-dvh flex flex-col items-center justify-center px-6 cursor-pointer overflow-hidden relative"
      style={{ background: 'linear-gradient(180deg, #003380 0%, #0052CC 45%, #003380 100%)' }}
      onClick={onEnter}
    >
      {/* Geometric ring */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.06)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -60%)',
        }}
      />

      <div className="animate-fade-in flex flex-col items-center text-center relative z-10">
        {/* Ingram Micro logo */}
        <img
          src="/ingram-ignites/ingram-logo.png"
          alt="Ingram Micro"
          className="mb-8"
          style={{
            width: '200px',
            filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.15)) brightness(0) invert(1)',
          }}
        />

        {/* Gradient divider */}
        <div
          className="mb-5"
          style={{
            width: '120px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
          }}
        />

        {/* Sub-brand */}
        <p
          className="text-white text-[36px] mb-12 animate-shimmer"
          style={{ fontWeight: 200, letterSpacing: '0.3em' }}
        >
          Ignites
        </p>

        {/* Tagline */}
        <p className="text-[14px] mb-14" style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 300 }}>
          Your Microsoft strategy, personalized.
        </p>

        {/* Entering as card — dark frosted glass */}
        <div
          className="rounded-xl px-6 py-4 mb-10 w-full max-w-xs"
          style={{
            background: 'rgba(0,0,0,0.25)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.15)',
          }}
        >
          <p style={{ color: 'rgba(255,255,255,0.4)' }} className="text-xs uppercase tracking-widest mb-1">Entering as</p>
          <p className="text-white font-bold text-lg">Jordan Mercer</p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="text-sm">Director of IT, Pacific Mutual</p>
        </div>

        {/* Tap to enter */}
        <p className="text-[12px] animate-soft-pulse" style={{ color: 'rgba(255,255,255,0.45)' }}>
          Tap anywhere to enter
        </p>
      </div>

      {/* Powered by — anchored to bottom */}
      <div
        className="absolute left-0 right-0 flex flex-col items-center gap-2"
        style={{ bottom: 'max(env(safe-area-inset-bottom, 24px), 24px)' }}
      >
        <div
          style={{
            width: '40px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
          }}
        />
        <div className="flex items-center justify-center gap-2">
          <span style={{ color: 'rgba(255,255,255,0.35)' }} className="text-[11px]">Powered by</span>
          <img
            src="/ingram-ignites/starch-logo.png"
            alt="Starch"
            style={{ height: '14px', filter: 'brightness(0) invert(1)', opacity: 0.4 }}
          />
        </div>
      </div>
    </div>
  )
}
