import { test } from "node:test";
import { FakeIntlProvider } from "@keybr/intl";
import { render } from "@testing-library/react";
import { isNotNull } from "rich-assert";
import { SignInSection } from "./SignInSection.tsx";

test("render", () => {
  const r = render(
    <FakeIntlProvider>
      <SignInSection />
    </FakeIntlProvider>,
  );

  isNotNull(r.queryByText("Google", { exact: false }));

  r.unmount();
});
