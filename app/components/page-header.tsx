import { ReactNode } from "react";
import { PageTitle } from "./page-title";

export function PageHeader({
  title,
  desc,
  rightElement,
}: {
  title: string;
  desc: string;
  rightElement: ReactNode;
}) {
  return (
    <header className="flex items-center justify-between px-5 py-2 border-b">
      <div>
        <PageTitle>{title}</PageTitle>
        <p className="text-muted-foreground text-sm">{desc}</p>
      </div>
      <div>{rightElement}</div>
    </header>
  );
}
