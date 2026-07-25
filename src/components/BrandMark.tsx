import Image from "next/image";
export default function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <Image src="/logo.png" alt="Company Logo" width={56} height={56} />
    </span>
  );
}
