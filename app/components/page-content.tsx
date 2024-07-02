import { ComponentPropsWithoutRef } from "react";
import { cn } from "~/lib/utils";

export function PageContent({
  className,
  ...props
}: ComponentPropsWithoutRef<"article">) {
  return <article className={cn("px-5 py-4", className)} {...props} />;
}
