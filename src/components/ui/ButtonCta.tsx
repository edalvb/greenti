import { Link } from "@/i18n/navigation";
import { Button } from "./Button";
import { useTranslations } from "next-intl";

interface ButtonCtaProps {
  variant?: "primary" | "outline";
  className?: string;
}

export const ButtonCta: React.FC<ButtonCtaProps> = ({
  variant = "primary",
  className = "",
}) => {
  const tGlobal = useTranslations("Global");

  return (
    <Link href="/contacto" passHref>
      <Button 
        variant={variant} 
        size="md" 
        radius="cta" 
        className={className}
        iconPosition="right"
      >
        <span className="text-white">{tGlobal("contactUs")}</span>
      </Button>
    </Link>
  );
};