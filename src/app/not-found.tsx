"use client";

import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="card">
        <h1>404</h1>
        <h2>Página no encontrada</h2>
        <p>Lo sentimos, la página que buscas no existe o ha sido movida.</p>
        <Link href="/">
          <button>Volver al inicio</button>
        </Link>
      </div>
      <style jsx>{`
        .not-found-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: var(--background-color);
          color: var(--text-color);
        }

        .card {
          text-align: center;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          background: var(--card-bg);
        }

        h1 {
          font-size: 6rem;
          margin: 0;
          color: var(--primary-color);
        }

        h2 {
          font-size: 2rem;
          margin: 0.5rem 0;
        }

        p {
          margin: 1rem 0 2rem;
          color: var(--secondary-color);
        }

        button {
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          border: none;
          border-radius: 0.5rem;
          background: var(--primary-color);
          color: #fff;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        button:hover {
          background: var(--primary-color-dark);
        }
      `}</style>
    </div>
  );
}
