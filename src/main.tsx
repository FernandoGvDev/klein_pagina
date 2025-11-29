import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

// --- Rastreamento Meta Pixel ---
document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement | null;
  if (!target) return;

  const clickable = target.closest("a, button") as
    | HTMLAnchorElement
    | HTMLButtonElement
    | null;

  if (!clickable) return;

  const fbq = (window as any).fbq;
  if (!fbq) return;

  const eventType = clickable.getAttribute("data-event");

  if (eventType === "Lead") {
    fbq("trackCustom", "Lead");
  }
});
// --- Fim rastreamento Meta Pixel ---

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
