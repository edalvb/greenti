//import Link from "next/link";
import { Button } from "./Button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

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
    <Link href="/contact" passHref>
      <Button
        variant={variant}
        size="md"
        radius="cta"
        style={{ borderRadius: 12 }}
        className={className}
        iconPosition="right"
      >
        <span className="text-white">{tGlobal("contactUs")}</span>
      </Button>
    </Link>
  );
};
