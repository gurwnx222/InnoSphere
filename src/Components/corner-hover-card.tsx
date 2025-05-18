import type React from "react";
import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";

// Define the corner positions as a type
type CornerPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

// Define props with TypeScript
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverColor?: string;
  defaultColor?: string;
  transitionDuration?: number;
  fixedCorner?: CornerPosition | "random";
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const CornerHoverCard: React.FC<CardProps> = ({
  children,
  className = "",
  hoverColor = "#192F59", // Navy blue default
  defaultColor = "#ffffff", // White default
  transitionDuration = 700, // in ms
  fixedCorner = "random",
  onMouseEnter,
  onMouseLeave,
}) => {
  // State to track hover status and corner position
  const [isHovered, setIsHovered] = useState(false);
  const [cornerPosition, setCornerPosition] =
    useState<CornerPosition>("top-left");

  // Memoized function to determine corner position
  const getRandomCorner = useCallback((): CornerPosition => {
    const positions: CornerPosition[] = [
      "top-left",
      "top-right",
      "bottom-left",
      "bottom-right",
    ];
    return positions[Math.floor(Math.random() * positions.length)];
  }, []);

  // Handle mouse enter with corner selection
  const handleMouseEnter = useCallback(() => {
    if (fixedCorner === "random") {
      setCornerPosition(getRandomCorner());
    } else {
      setCornerPosition(fixedCorner as CornerPosition);
    }
    setIsHovered(true);
    if (onMouseEnter) onMouseEnter();
  }, [fixedCorner, getRandomCorner, onMouseEnter]);

  // Handle mouse leave
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (onMouseLeave) onMouseLeave();
  }, [onMouseLeave]);

  // Get animation classes based on corner position
  const getCornerClasses = useCallback((position: CornerPosition): string => {
    switch (position) {
      case "top-left":
        return "top-0 left-0";
      case "top-right":
        return "top-0 right-0";
      case "bottom-left":
        return "bottom-0 left-0";
      case "bottom-right":
        return "bottom-0 right-0";
      default:
        return "top-0 left-0";
    }
  }, []);

  return (
    <div
      className={cn("relative overflow-hidden rounded-xl shadow-md", className)}
      style={{ backgroundColor: defaultColor }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated overlay */}
      <div
        className={`absolute ${getCornerClasses(
          cornerPosition
        )} rounded-none pointer-events-none z-0 transition-all ease-in-out`}
        style={{
          backgroundColor: hoverColor,
          width: isHovered ? "100%" : "0%",
          height: isHovered ? "100%" : "0%",
          opacity: isHovered ? 1 : 0,
          transitionDuration: `${transitionDuration}ms`,
        }}
        aria-hidden="true"
      />

      {/* Content container */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default CornerHoverCard;
