"use client"
import React, { forwardRef, useRef, useImperativeHandle } from "react"

export interface ActionButtonRef {
  container: HTMLDivElement | null,
  circle : HTMLDivElement | null
}

export interface ActionButtonProps {
  className?: string
  fill?: string
  Ypos?: number
}

const ActionButton = forwardRef<ActionButtonRef, ActionButtonProps>(
  ({ className, fill, Ypos }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const circleDiv = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => ({
      container: containerRef.current,
      circle: circleDiv.current
    }))

    return (
      <div style={{ position: "relative", top: Ypos ?? 0 }} ref={containerRef}>
        {/* Hidden SVG defining the goo filter */}
        <svg style={{ position: "absolute", width: 0, height: 0 }}>
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="
                  1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 20 -10
                "
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        {/* Gooey divs */}
        <div className="group-div-goo" style={{
          filter : "url(#goo)"
        }}>
          <div
            ref={circleDiv}
            className={`action-button ${className}`}
            style={{
              filter: "url(#goo)",
              width: 100,
              height: 100,
              borderRadius: "50%",
              background: fill ?? "#444",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              position: "relative"
            }}
          >
            Store
          </div>
          
        </div>
      </div>
    )
  }
)

ActionButton.displayName = "ActionButton"

export default ActionButton
