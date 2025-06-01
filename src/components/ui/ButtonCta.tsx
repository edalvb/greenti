import Link from "next/link";
import { Button } from "./Button";
import { useTranslations } from "next-intl";
import Image from "next/image";

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
    <Link href="#contact" passHref>
      <Button 
        variant={variant} 
        size="md" 
        radius="cta" 
        className={className}
        iconPosition="right"
        icon={
          <Image
            src="/assets/icons/sms.svg"
            alt=""
            width={24}
            height={24}
          />
        }
      >
        <span className="text-white">{tGlobal("contactUs")}</span>
      </Button>
    </Link>
  );
};