import { useState } from "react";
import { LocaleLanguageIcon } from "@fluentui/react-icons-mdl2";
import { Dialog, DialogType, DialogFooter } from "@fluentui/react/lib/Dialog";
import { PrimaryButton, DefaultButton } from "@fluentui/react/lib/Button";
import { ChoiceGroup } from "@fluentui/react/lib/ChoiceGroup";
import { useBoolean } from "@fluentui/react-hooks";
import { useIntl } from "react-intl";

import { set as setLocale, get as getLocale } from "../locales";
import { selectSiteInfo } from "../reducers/site-info";
import { useAppSelector } from "../hooks";

const Widget = () => {
  const site = useAppSelector(selectSiteInfo);
  const intl = useIntl();
  const [lang, setLang] = useState(getLocale());

  const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
  return (
    <>
      <LocaleLanguageIcon onClick={toggleHideDialog} />
      <Dialog
        hidden={hideDialog}
        onDismiss={toggleHideDialog}
        dialogContentProps={{
          type: DialogType.largeHeader,
          title: intl.formatMessage({ id: "switch-language.title" }),
        }}
        modalProps={{
          isBlocking: true,
        }}
      >
        <ChoiceGroup
          defaultSelectedKey={getLocale()}
          required
          onChange={(ev, op) => {
            if (op) {
              setLang(op?.key);
            }
          }}
          options={site.languages.map((it) => {
            return {
              key: it,
              text: intl.formatMessage({ id: `languages.${it}` }),
            };
          })}
        />
        <DialogFooter>
          <PrimaryButton
            onClick={() => {
              toggleHideDialog();
              setLocale(lang);
              window.location.reload();
            }}
            text={intl.formatMessage({ id: "buttons.save" })}
          />
          <DefaultButton
            onClick={toggleHideDialog}
            text={intl.formatMessage({ id: "buttons.cancel" })}
          />
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default Widget;
