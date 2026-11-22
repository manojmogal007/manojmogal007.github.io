import React, { useCallback } from "react";
import { RiCloseLine } from "react-icons/ri";
import useAppState from "../../hooks/useAppState";
import TerminalSection from "./TerminalSection";

const MIN_WIDTH = 340;

function Terminal() {
  const {
    terminalOpen,
    terminalWidth,
    setTerminalWidth,
    isResizing,
    setIsResizing,
    toggelTerminal,
  } = useAppState();

  // Drag the left-edge divider to resize the terminal column.
  const startResize = useCallback(
    (e) => {
      e.preventDefault();
      setIsResizing(true);
      document.body.style.userSelect = "none";
      document.body.style.cursor = "col-resize";

      const onMove = (ev) => {
        const clientX = ev.touches ? ev.touches[0].clientX : ev.clientX;
        const max = Math.min(window.innerWidth - MIN_WIDTH, window.innerWidth * 0.85);
        const next = Math.max(MIN_WIDTH, Math.min(max, window.innerWidth - clientX));
        setTerminalWidth(next);
      };

      const onUp = () => {
        setIsResizing(false);
        document.body.style.userSelect = "";
        document.body.style.cursor = "";
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseup", onUp);
        window.removeEventListener("touchmove", onMove);
        window.removeEventListener("touchend", onUp);
      };

      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseup", onUp);
      window.addEventListener("touchmove", onMove, { passive: false });
      window.addEventListener("touchend", onUp);
    },
    [setTerminalWidth, setIsResizing]
  );

  return (
    <div
      className="fixed top-0 right-0 h-full z-40 bg-slate-950/95 backdrop-blur-xl border-l border-white/10 overflow-hidden shadow-2xl shadow-black/50"
      style={{
        width: terminalOpen ? terminalWidth : 0,
        transition: isResizing ? "none" : "width 300ms ease",
      }}
    >
      {/* Draggable divider on the left edge */}
      {terminalOpen && (
        <div
          onMouseDown={startResize}
          onTouchStart={startResize}
          className="group absolute left-0 top-0 h-full w-2 -ml-1 cursor-col-resize z-50"
          role="separator"
          aria-orientation="vertical"
          aria-label="Resize terminal"
        >
          <div
            className={`mx-auto h-full w-[2px] transition-colors ${
              isResizing ? "bg-violet-500" : "bg-white/10 group-hover:bg-violet-500/60"
            }`}
          />
        </div>
      )}

      {/* Inner content keeps a fixed width so text doesn't reflow during the
          open/close width animation. */}
      <div
        className="h-full flex flex-col"
        style={{ width: terminalWidth, minWidth: MIN_WIDTH }}
      >
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-slate-900/60">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-3 text-xs font-mono text-slate-400">
              manoj@portfolio: ~
            </span>
          </div>
          <button
            onClick={toggelTerminal}
            aria-label="Close terminal"
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <RiCloseLine size={18} />
          </button>
        </div>

        <div className="flex-1 min-h-0">
          <TerminalSection />
        </div>
      </div>
    </div>
  );
}

export default Terminal;
