import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <h1 className="text-[3rem] text-foreground mb-4">404</h1>
      <p className="text-foreground/60 text-[15px] mb-8">
        Diese Seite wurde leider nicht gefunden.
      </p>
      <Link
        to="/"
        className="bg-primary text-white px-7 py-3 rounded-full text-[13px] tracking-wide hover:bg-primary/90 transition-colors"
      >
        Zur Startseite
      </Link>
    </div>
  );
}
