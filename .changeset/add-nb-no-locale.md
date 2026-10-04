---
"@agent-native/core": minor
"@agent-native/toolkit": minor
---

Add Norwegian Bokmål (`nb-NO`) as a built-in locale. `SUPPORTED_LOCALES` and `LOCALE_METADATA` gain `nb-NO` (`Norsk bokmål`, left-to-right), `LanguagePicker` lists it, and `set-localization-preference` accepts it. The framework UI is fully translated: the toolkit agent-chat and settings catalog (`catalogs/nb-NO.ts`, every key of the `en-US` source), the supplemental MCP, privacy and environment-badge messages, the icon picker, resource-pack and billing notices, the sign-in and onboarding surfaces, the built-in auth marketing taglines, the MCP connect guides, the Extensions sidebar, the error boundary, the feedback button and the docs block library.

First-party templates do not ship `nb-NO` catalogs in this change and fall back to English. The two templates that asserted their catalogs covered every built-in locale (`assets`, and `content`'s trash messages) now assert a partial map, so adding a built-in locale no longer requires translating every template in the same change.

`scripts/i18n-localized-doc-coverage-baseline.txt` gains the `nb-NO` rows recording that the localized documentation set has no Norwegian pages yet; no other locale's rows change.
