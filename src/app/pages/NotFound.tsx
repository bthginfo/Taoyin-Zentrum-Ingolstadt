import { Link } from "react-router";
import { useLangLink } from "../../hooks/useTranslation";
import { usePageContent } from "../../hooks/usePageContent";
import type { NotFoundContent } from "../../types/storyblok";

export default function NotFound() {
  const { text } = usePageContent<NotFoundContent>("not-found");
  const langLink = useLangLink();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <h1 className="text-[3rem] text-foreground mb-4">{text("title", "notFound.title")}</h1>
      <p className="text-foreground/60 text-[15px] mb-8">
        {text("text", "notFound.text")}
      </p>
      <Link
        to={langLink("/")}
        className="bg-primary text-white px-7 py-3 rounded-full text-[13px] tracking-wide hover:bg-primary/90 transition-colors"
      >
        {text("link_text", "notFound.link")}
      </Link>
    </div>
  );
}
