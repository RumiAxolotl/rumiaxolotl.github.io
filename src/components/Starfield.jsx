import { useEffect, useRef } from 'react';

export default function Starfield() {
  const fieldRef = useRef(null);

  useEffect(() => {
    const field = fieldRef.current;
    const count = Math.min(90, Math.floor(window.innerWidth / 14));
    const frag = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
      const star = document.createElement('span');
      star.className = 'star';
      const size = 1 + Math.random() * 2.5;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDuration = `${2.5 + Math.random() * 3}s`;
      star.style.animationDelay = `${Math.random() * 4}s`;
      frag.appendChild(star);
    }
    field.appendChild(frag);
  }, []);

  return <div className="starfield" ref={fieldRef} aria-hidden="true" />;
}
