import { Article, Header } from "@keybr/widget";
import { FormattedMessage } from "react-intl";
import { OAuthLoginForm } from "./OAuthLoginForm.tsx";

export function SignInSection() {
  return (
    <Article>
      <Header level={1}>
        <FormattedMessage id="t_Sing_In" defaultMessage="Sign-In" />
      </Header>

      <OAuthLoginForm />
    </Article>
  );
}
