import { ComponentPropsWithoutRef } from "react";

export function PageTitle({
  children,
  ...props
}: ComponentPropsWithoutRef<"h1">) {
  return (
    <h1 className="scroll-m-20 text-xl font-semibold" {...props}>
      {children}
    </h1>
  );
}
