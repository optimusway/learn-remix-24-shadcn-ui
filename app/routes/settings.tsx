import { PageTitle } from "~/components/page-title";

export default function Settings() {
  return (
    <section className="flex flex-1 flex-col space-y-4 px-8 py-6">
      <header className="flex items-center justify-between">
        <div>
          <PageTitle>Settings</PageTitle>
        </div>
        <div className="flex gap-2"></div>
      </header>
      <main className="flex flex-1 flex-col space-y-4"></main>
    </section>
  );
}
