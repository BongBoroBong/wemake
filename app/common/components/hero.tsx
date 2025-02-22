import { cn } from "~/lib/utils";

interface HeroProps {
  title: string;
  subTitle?: string;
  className?: string;
}

export function Hero({ title, subTitle, className }: HeroProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center rounded-md bg-gradient-to-t",
        className,
      )}
    >
      <h1 className="text-5xl font-bold">{title}</h1>
      {subTitle && (
        <p className="text-2xl font-light text-foreground">{subTitle}</p>
      )}
    </div>
  );
}
