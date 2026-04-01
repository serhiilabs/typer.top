import { Button, Field, FieldList, Icon } from "@keybr/widget";
import { mdiGoogle } from "@mdi/js";
import { useIntl } from "react-intl";

const providers: readonly {
  readonly id: string;
  readonly name: string;
  readonly icon: string;
}[] = [
  {
    id: "google",
    name: "Google",
    icon: mdiGoogle,
  },
];

export function OAuthLoginForm() {
  const { formatMessage } = useIntl();

  return (
    <>
      <FieldList>
        {providers.map(({ id, name, icon }) => (
          <Field key={id}>
            <Button
              size={16}
              icon={<Icon shape={icon} />}
              label={formatMessage(
                {
                  id: "t_Signin_with_name",
                  defaultMessage: "Sign-in with {name}",
                },
                { name },
              )}
              onClick={() => {
                document.location = `/auth/oauth-init/${id}`;
              }}
            />
          </Field>
        ))}
      </FieldList>
    </>
  );
}
