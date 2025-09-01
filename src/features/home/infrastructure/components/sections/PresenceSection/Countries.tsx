import Image from "next/image";
import React from "react";

const DEFAULT_ITEMS = [
  { name: "USA", flag: "usa" },
  { name: "México", flag: "mexico" },
  { name: "Ecuador", flag: "ecuador" },
  { name: "Perú", flag: "peru" },
  { name: "Paraguay", flag: "paraguay" },
];

/** Espaciado vertical por fila (coincide con tu layout original) */
const ROW_HEIGHT = 52;

const COLORS = {
  blueBar: "#2B3990",
  peruRed: "#EC1C24",
  peruWhite: "#E6E7E8",
  usaRed: "#B22334",
  usaWhite: "#EEEEEE",
  usaBlue: "#3C3B6E",
  label: "#FFFFFF",
  dotBorder: "#E7F0EF",
  dashed: "rgba(255, 255, 255, 0.40)",
};

/** --------- Banderas (24x24) ---------- */
const baseFlagBox: React.CSSProperties = {
  width: 24,
  height: 24,
  position: "absolute",
  overflow: "hidden",
  left: 35,
};

const Flag = ({ flagSlug = "peru", alt = "Perú" }) => (
  <Image
    src={`/assets/icons/${flagSlug}.svg`}
    alt={`Bandera de ${alt}`}
    width={24}
    height={16}
    className="object-cover rounded-[3px] mr-3"
    unoptimized
  />
);

/** Punto circular de la línea temporal */
const Dot = ({ top }: { top: number }) => (
  <div
    style={{
      width: 16,
      height: 16,
      left: 0,
      top,
      position: "absolute",
      background: "white",
      borderRadius: 9999,
      border: `1px ${COLORS.dotBorder} solid`,
    }}
  />
);

/** Texto etiqueta */
const Label = ({
  top,
  children,
}: {
  top: number;
  children: React.ReactNode;
}) => (
  <div
    style={{
      left: 74,
      top,
      position: "absolute",
      color: COLORS.label,
      fontSize: 16,
      fontFamily: "Poppins",
      fontWeight: "500",
      wordWrap: "break-word",
    }}
  >
    {children}
  </div>
);

/** Línea vertical discontinua (sin rotaciones) */
const Timeline = ({ itemCount }: { itemCount: number }) => {
  const height = (itemCount - 1) * ROW_HEIGHT + 12; // ligeramente extendida
  return (
    <div
      style={{
        position: "absolute",
        left: 8,
        top: 4,
        height,
        borderLeft: `1px dashed ${COLORS.dashed}`,
      }}
    />
  );
};

export default function Countries({ items = DEFAULT_ITEMS }) {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Timeline itemCount={items.length} />

      {items.map((item, i) => {
        const rowTop = i * ROW_HEIGHT;
        return (
          <React.Fragment key={item.name}>
            {/* Flag box */}
            <div style={{ ...baseFlagBox, top: rowTop }}>
              <Flag flagSlug={item.flag} alt={item.name} />
            </div>

            {/* Label */}
            <Label top={rowTop}>{item.name}</Label>

            {/* Dot (ligeramente más abajo que la parte superior de fila) */}
            <Dot top={rowTop + 4} />
          </React.Fragment>
        );
      })}
    </div>
  );
}
