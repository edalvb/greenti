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
  className = "hover:text-primary/80",
}) => {
  const tGlobal = useTranslations("Global");

  return (
    <Link href="#contact">
      <Button variant={variant} size="md" radius="cta" className={className}>
        <span className="text-white">{tGlobal("contactUs")}</span>
        <Image
          src="/assets/icons/sms.svg"
          alt=""
          width={24}
          height={24}
          style={{ marginLeft: "10px" }}
        />
      </Button>
    </Link>
  );
};
