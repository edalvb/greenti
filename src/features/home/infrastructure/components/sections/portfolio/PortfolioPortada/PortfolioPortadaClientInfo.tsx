interface PortfolioPortadaClientInfoProps {
  sector: string;
  pais: string;
  plataforma: string[];
  className?: string;
}

export const PortfolioPortadaClientInfo: React.FC<PortfolioPortadaClientInfoProps> = ({
  sector,
  pais,
  plataforma,
  className = "",
}) => {
  return (
    <div className={`w-full max-w-xs mt-6 ${className}`}>
      <div
        className="relative rounded-[30px] p-[22px]"
        style={{
          background: "rgba(0,33,64,0.05)",
          fontFamily: "Poppins, Inter, system-ui, -apple-system",
        }}
        aria-label="Información del cliente"
      >
        {/* Mantengo la estructura vertical (labels encima de valores) para asemejar al widget Figma */}
        <div className="flex flex-col gap-6">
          <div>
            <div className="text-[#002140] text-[16px] font-medium">Sector</div>
            <div className="text-[#002140] text-[16px] font-bold mt-1 break-words">
              {sector || "-"}
            </div>
          </div>

          <div>
            <div className="text-[#002140] text-[16px] font-medium">País</div>
            <div className="text-[#002140] text-[16px] font-bold mt-1 break-words">
              {pais || "-"}
            </div>
          </div>

          <div>
            <div className="text-[#002140] text-[16px] font-medium">
              Plataforma
            </div>
            <div className="text-[#002140] text-[16px] font-bold mt-1 break-words">
              {plataforma && plataforma.length ? plataforma.join(" / ") : "-"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
