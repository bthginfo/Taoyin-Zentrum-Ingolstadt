import { useState, useEffect } from "react";
import { useTranslation } from "../../hooks/useTranslation";

const CONSENT_KEY = "taoyin_cookie_consent";

type ConsentState = "accepted" | "rejected" | null;

function getStoredConsent(): ConsentState {
  try {
    const val = localStorage.getItem(CONSENT_KEY);
    if (val === "accepted" || val === "rejected") return val;
  } catch {
    // localStorage not available
  }
  return null;
}

function storeConsent(value: "accepted" | "rejected") {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // localStorage not available
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    // Show banner only if user hasn't decided yet
    if (getStoredConsent() === null) {
      // Small delay so it doesn't flash on page load
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    storeConsent("accepted");
    setVisible(false);
  };

  const reject = () => {
    storeConsent("rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={t("cookie.title")}
      className="fixed bottom-0 left-0 right-0 z-[100] p-4 animate-in slide-in-from-bottom duration-500"
    >
      <div className="max-w-3xl mx-auto bg-[var(--background-secondary)] border border-[var(--border)] rounded-2xl shadow-2xl p-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="flex-1">
            <h3 className="font-semibold text-base mb-1">{t("cookie.title")}</h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              {t("cookie.text")}{" "}
              <a href="/impressum" className="underline hover:text-[var(--primary)]">
                {t("cookie.link")}
              </a>
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={reject}
              className="px-4 py-2 text-sm rounded-lg border border-[var(--border)] hover:bg-[var(--background)] transition-colors"
            >
              {t("cookie.reject")}
            </button>
            <button
              onClick={accept}
              className="px-4 py-2 text-sm rounded-lg bg-[var(--primary)] text-white hover:opacity-90 transition-opacity"
            >
              {t("cookie.accept")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
