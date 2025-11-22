"use client"
import React, { useState, useMemo } from "react"
import Image from "next/image"
import menuData from "@/src/components/menu.json"

interface MainMenuProps {
  data?: any[]
  initialCategory?: string
}

const MainMenu: React.FC<MainMenuProps> = ({ data }) => {
  const items = data ?? menuData
  const [filter, setFilter] = useState<string | null>(null)

  // derive unique categories for a simple filter UI (optional)
  const categories = useMemo(() => {
    const s = new Set<string>()
    items.forEach((i: any) => {
      if (i && typeof i.category === "string" && i.category.trim().length > 0) {
        s.add(capitalize(i.category))
      }
    })
    return Array.from(s)
  }, [items])

  const displayed = useMemo(() => {
    if (!filter) return items
    return items.filter((i: any) => {
      if (!i || typeof i.category !== "string") return false
      return capitalize(i.category) === filter
    })
  }, [items, filter])

  return (
    <div className="main-menu-panel">
      {/* small inline filter toolbar (desktop) */}
      <div className="filter-bar mb-6 flex items-center gap-3">
        <div className="hidden md:flex gap-2">
          <button onClick={() => setFilter(null)} className="filter-chip">All</button>
          {categories.map((c) => (
            <button key={c} onClick={() => setFilter(c)} className="filter-chip">{c}</button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayed.map((p: any, idx: number) => (
          <article key={idx} className="coffee-card group">
            <div className="media relative h-44 w-full overflow-hidden rounded-md">
              {p?.image ? (
                <Image src={`/images/${p.image}`} alt={p.title ?? ""} fill style={{ objectFit: "cover" }} />
              ) : (
                <div style={{ width: "100%", height: "100%", background: "linear-gradient(90deg,#111,#1b1b1b)" }} />
              )}
              <div className="media-overlay" />
            </div>

            <div className="card-content p-4">
              <h4 className="text-base font-bold text-amber-50">{p.title ?? "Untitled"}</h4>
              <p className="text-xs mt-1 text-gray-300 line-clamp-3">{p.description ?? ""}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="price-pill">{p.price ?? ""}</span>
                <button className="btn-view">View</button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <style jsx>{`
        .main-menu-panel { color: #efe9e1; }
        .filter-chip{
          background: transparent;
          border: 1px solid rgba(202,167,123,0.12);
          color: #e6dfd6;
          padding: 6px 10px;
          border-radius: 8px;
          font-weight:600;
          transition: all .14s;
        }
        .filter-chip:hover{ transform: translateY(-2px); border-color: rgba(202,167,123,0.35); color: var(--color-coffee-medium); }

        .coffee-card{
          background: linear-gradient(180deg, rgba(18,16,15,0.55), rgba(12,12,12,0.6));
          border: 1px solid rgba(202,167,123,0.06);
          border-radius: 12px;
          overflow:hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.6);
          transition: transform .18s ease, box-shadow .18s ease;
        }
        .coffee-card:hover{ transform: translateY(-6px); box-shadow: 0 20px 50px rgba(0,0,0,0.7); }

        .media-overlay{
          position:absolute; inset:0;
          background: linear-gradient(180deg, rgba(0,0,0,0.0), rgba(0,0,0,0.45));
          transition: background .18s;
        }
        .group:hover .media-overlay{ background: linear-gradient(180deg, rgba(0,0,0,0.0), rgba(0,0,0,0.6)); }

        .card-content{ padding-bottom: 16px; }
        .price-pill{
          background: rgba(202,167,123,0.12);
          color: var(--color-coffee-medium);
          padding:6px 10px;
          border-radius:8px;
          font-weight:700;
          font-size:13px;
        }
        .btn-view{
          background: var(--color-coffee-medium);
          color: var(--color-text);
          padding:6px 10px;
          border-radius:8px;
          font-weight:600;
        }

        @media (max-width: 640px){
          .media{ height: 160px; }
        }
      `}</style>
    </div>
  )
}

function capitalize(s?: string) {
  if (!s || typeof s !== "string") return ""
  return s.replace(/\b\w/g, (l) => l.toUpperCase())
}

export default MainMenu