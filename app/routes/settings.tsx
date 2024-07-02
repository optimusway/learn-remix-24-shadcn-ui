import { Page } from "~/components/page";
import { PageContent } from "~/components/page-content";
import { PageHeader } from "~/components/page-header";

export default function Settings() {
  return (
    <Page>
      <PageHeader
        title="Settings"
        desc="Tune-in templates, business hours and other preferences"
        rightElement={null}
      />
      <PageContent></PageContent>
    </Page>
  );
}
