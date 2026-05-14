import { GiWallet } from "react-icons/gi";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <div
          to="/"
          className="
            flex
            items-center
            gap-2
          "
        >
          <div
            className="
              h-8
              w-8

              rounded-full

              bg-emerald-600

              flex
              items-center
              justify-center
            "
          >
            <GiWallet size={24} color="#ffffff" />
          </div>

          <span
            className="
              text-xl
              font-bold
              text-gray-900
            "
          >
            SpendWise
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} SpendWise. Built with React, Vite &
          Tailwind.
        </p>
      </div>
    </footer>
  );
}
