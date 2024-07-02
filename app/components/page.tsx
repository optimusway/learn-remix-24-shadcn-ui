import { ComponentPropsWithoutRef } from "react";
import { cn } from "~/lib/utils";

export function Page({
  className,
  ...props
}: ComponentPropsWithoutRef<"main">) {
  return <main className={cn("flex flex-1 flex-col", className)} {...props} />;
}
