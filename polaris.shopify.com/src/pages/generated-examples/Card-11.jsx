import { AppProvider, Card } from "@shopify/polaris";

import translations from '@shopify/polaris/locales/en.json';

function Example() {
  return (
    <AppProvider i18n={translations}>
      <div
        style={{
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 50px",
  }}
      >
        <Card title="Customer">
  <Card.Section>
    <p>John Smith</p>
  </Card.Section>
  <Card.Section
    title="Contact Information"
    actions={[{content: 'Delete', destructive: true}, {content: 'Edit'}]}
  >
    <p>john.smith@example.com</p>
  </Card.Section>
</Card>
      </div>
    </AppProvider>
  );
}

export default Example;