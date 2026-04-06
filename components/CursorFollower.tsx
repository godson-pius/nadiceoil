"use client";

import { useEffect, useState } from "react";
import {
    motion,
    useSpring,
    useMotionValue,
} from "motion/react";

type CursorVariant = "default" | "hover" | "text" | "brand";

export default function CursorFollower() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const [variant, setVariant] = useState<CursorVariant>("default");

    const spring = { damping: 20, stiffness: 180 };

    const smoothX = useSpring(mouseX, spring);
    const smoothY = useSpring(mouseY, spring);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            const brandEl = target.closest("[data-cursor='brand']");
            const hoverEl = target.closest("[data-cursor='hover']");
            const textEl = target.closest(
                "p, span, h1, h2, h3, h4, h5, h6, li, ul"
            );

            if (brandEl) {
                setVariant("brand");

                mouseX.set(e.clientX - 10);
                mouseY.set(e.clientY - 10);
            } else if (hoverEl) {
                setVariant("hover");

                // add Magnetic effect
                const rect = hoverEl.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const distX = (e.clientX - centerX) * 0.2;
                const distY = (e.clientY - centerY) * 0.2;

                mouseX.set(centerX + distX - 10);
                mouseY.set(centerY + distY - 10);
            } else if (textEl) {
                setVariant("text");

                mouseX.set(e.clientX - 10);
                mouseY.set(e.clientY - 10);
            } else {
                setVariant("default");

                mouseX.set(e.clientX - 10);
                mouseY.set(e.clientY - 10);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="pointer-events-none fixed left-0 top-0 z-50 rounded-full"
            style={{
                x: smoothX,
                y: smoothY,
            }}
            animate={
                variant === "hover"
                    ? { scale: 2.2, opacity: 0.9 }
                    : variant === "text"
                        ? { scale: 0.8, opacity: 0.3 }
                        : variant === "brand"
                            ? { scale: 1.5, opacity: 1 }
                            : { scale: 1, opacity: 1 }
            }
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
            {/* Core dot */}
            <div
                className={`h-5 w-5 rounded-full ${variant === "brand" ? "bg-blue-400" : "bg-orange-400"
                    }`}
            />

            {/* Glow */}
            <div
                className={`absolute inset-0 rounded-full blur-xl ${variant === "brand"
                    ? "bg-blue-500 opacity-80"
                    : "bg-orange-400 opacity-70"
                    }`}
            />

            {/* Ring */}
            <div
                className={`absolute -inset-3 rounded-full border opacity-30 ${variant === "brand"
                    ? "border-blue-400"
                    : "border-orange-300"
                    }`}
            />
        </motion.div>
    );
}