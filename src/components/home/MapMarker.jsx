import Image from "next/image";

export default function MapMarker({ top, left, flag, name }) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{
        top,
        left,
      }}
    >
      <div className="relative h-10 w-10 rounded-full bg-white p-1 shadow-lg">
        <Image
          src={flag}
          alt={name}
          fill
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
}
