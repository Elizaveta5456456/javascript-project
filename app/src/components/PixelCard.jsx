import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./PixelCard.css";

const GRID_SIZE = 8;
const DELAY_MULT = 0.02;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function PixelCard({ children, label }) {
  const [hovered, setHovered] = useState(false);

  const blocks = useMemo(
    () => shuffle([...Array(GRID_SIZE * GRID_SIZE)].map((_, i) => i)),
    []
  );

  const handleEnter = useCallback(() => setHovered(true), []);
  const handleLeave = useCallback(() => setHovered(false), []);

  const pct = 100 / GRID_SIZE;

  return (
    <div
      className="pixel-card"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {children}

      <AnimatePresence>
        {hovered && (
          <div className="pixel-card__overlay">
            <div className="pixel-card__grid">
              {blocks.map((order, i) => {
                const row = Math.floor(i / GRID_SIZE);
                const col = i % GRID_SIZE;
                return (
                  <motion.div
                    key={i}
                    className="pixel-card__block"
                    style={{
                      width: pct + "%",
                      height: pct + "%",
                      left: col * pct + "%",
                      top: row * pct + "%",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: order * DELAY_MULT, duration: 0 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { delay: order * DELAY_MULT, duration: 0 },
                    }}
                  />
                );
              })}
            </div>
            <motion.span
              className="pixel-card__label"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.35 } }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
            >
              {label}
            </motion.span>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
