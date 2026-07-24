type IconName =
  | "community"
  | "data"
  | "innovation"
  | "impact"
  | "coast"
  | "earth"
  | "water"
  | "people"
  | "calendar"
  | "pin"
  | "arrow";

export default function SectionIcon({
  name,
  size = 42,
}: {
  name: IconName;
  size?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  const paths: Record<IconName, React.ReactNode> = {
    community: (
      <>
        <circle cx="18" cy="15" r="6" />
        <circle cx="32" cy="17" r="5" />
        <path d="M7 38c0-8 5-13 11-13s11 5 11 13" />
        <path d="M28 27c7 0 12 4 12 11" />
      </>
    ),
    data: (
      <>
        <path d="M8 34c7-2 11-8 14-17 4 6 9 9 18 10" />
        <path d="M9 38c9 0 16-3 23-11" />
        <circle cx="11" cy="34" r="2" />
        <circle cx="22" cy="17" r="2" />
        <circle cx="40" cy="27" r="2" />
      </>
    ),
    innovation: (
      <>
        <path d="M16 28c-3-3-5-7-5-11 0-8 6-14 14-14s14 6 14 14c0 5-2 9-6 12-2 2-3 4-3 7H20c0-3-1-6-4-8Z" />
        <path d="M20 40h10M22 44h6M25 8v5M9 17H4M46 17h-5M12 6l4 4M38 6l-4 4" />
      </>
    ),
    impact: (
      <>
        <path d="M24 41S7 31 7 18c0-7 5-11 11-11 4 0 7 2 9 5 2-3 5-5 9-5 6 0 10 4 10 11 0 13-22 23-22 23Z" />
      </>
    ),
    coast: (
      <>
        <path d="M4 31c8-5 13 5 21 0s13 5 19 0" />
        <path d="M4 38c8-5 13 5 21 0s13 5 19 0" />
        <path d="M8 25 19 12l9 9 5-6 9 10" />
      </>
    ),
    earth: (
      <>
        <path d="M24 43V17" />
        <path d="M24 29C12 28 8 21 8 9c12 0 19 5 16 20Z" />
        <path d="M25 23c4-10 10-13 18-12 0 10-5 16-18 17" />
      </>
    ),
    water: (
      <>
        <path d="M24 4S10 21 10 31a14 14 0 0 0 28 0C38 21 24 4 24 4Z" />
        <path d="M18 33c2 4 5 6 9 6" />
      </>
    ),
    people: (
      <>
        <circle cx="24" cy="14" r="6" />
        <circle cx="10" cy="18" r="4" />
        <circle cx="38" cy="18" r="4" />
        <path d="M13 40c0-9 4-15 11-15s11 6 11 15" />
        <path d="M2 38c0-7 3-12 8-12 3 0 5 1 7 4M46 38c0-7-3-12-8-12-3 0-5 1-7 4" />
      </>
    ),
    calendar: (
      <>
        <rect x="6" y="10" width="36" height="31" rx="3" />
        <path d="M6 20h36M15 5v10M33 5v10M14 27h4M23 27h4M32 27h4M14 34h4M23 34h4" />
      </>
    ),
    pin: (
      <>
        <path d="M24 44S10 32 10 19a14 14 0 1 1 28 0c0 13-14 25-14 25Z" />
        <circle cx="24" cy="19" r="5" />
      </>
    ),
    arrow: (
      <>
        <path d="M8 24h31M29 14l10 10-10 10" />
      </>
    ),
  };

  return <svg {...common}>{paths[name]}</svg>;
}
