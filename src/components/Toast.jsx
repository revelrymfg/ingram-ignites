export default function ToastContainer({ toasts }) {
  if (toasts.length === 0) return null

  return (
    <div className="fixed bottom-24 left-0 right-0 z-40 flex flex-col items-center gap-2 pointer-events-none px-4">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-accent text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-lg animate-toast"
        >
          {toast.message}
        </div>
      ))}
    </div>
  )
}
