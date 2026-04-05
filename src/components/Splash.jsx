export default function Splash({ onEnter }) {
  return (
    <div
      className="h-dvh flex flex-col items-center justify-center px-6 cursor-pointer overflow-hidden"
      style={{ background: '#0066CC' }}
      onClick={onEnter}
    >
      <div className="animate-fade-in flex flex-col items-center text-center">
        {/* Ingram Micro logo */}
        <img
          src="/ingram-ignites/ingram-logo.png"
          alt="Ingram Micro"
          className="mb-5"
          style={{ width: '220px', filter: 'brightness(0) invert(1)' }}
        />

        {/* Divider + sub-brand */}
        <div className="w-10 border-t border-white/40 mb-4" />
        <p className="text-white text-[28px] font-light mb-10" style={{ letterSpacing: '0.15em' }}>
          Ignites
        </p>

        {/* Tagline */}
        <p className="text-white/85 text-base font-light mb-12">
          Your Microsoft strategy, personalized.
        </p>

        {/* Entering as card */}
        <div className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 mb-8 w-full max-w-xs backdrop-blur-sm">
          <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Entering as</p>
          <p className="text-white font-semibold text-lg">Jordan Mercer</p>
          <p className="text-white/70 text-sm">Director of IT, Pacific Mutual</p>
        </div>

        {/* Tap to enter */}
        <p className="text-white/60 text-[13px] animate-pulse mb-12">Tap anywhere to enter</p>

        {/* Powered by */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 border-t border-white/30" />
          <p className="text-white/40 text-[11px] tracking-wide">Powered by Starch</p>
        </div>
      </div>
    </div>
  )
}
