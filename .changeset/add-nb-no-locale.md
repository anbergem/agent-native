---
"@agent-native/core": minor
---

Add Norwegian Bokmål (`nb-NO`) to `SUPPORTED_LOCALES` with a full framework UI catalog. `LOCALE_METADATA` gains `{ code: "nb-NO", englishName: "Norwegian Bokmål", nativeName: "Norsk bokmål", dir: "ltr" }`, `LanguagePicker` lists it, `set-localization-preference` accepts it, and `core-messages/nb-NO.ts` translates all 578 keys of the `en-US` source catalog. Norwegian copy is also added for the sign-in surfaces (`NATIVE_AUTH_COPY`, the onboarding auth page, the built-in auth marketing taglines), the MCP connect guides and static-token panel, the Extensions sidebar, the error boundary, the feedback button, the language picker, and the docs block library.

Adding a locale to the union used to require every first-party template to be translated in the same change, because their catalog maps asserted `Record<LocaleCode, Messages>` exhaustively. Those maps are now `Partial`, and the locale-keyed override loops read through a `Partial` view, so a supported locale a template has no catalog for resolves through the existing source-locale fallback instead of blocking the framework's locale list. Template catalogs for `nb-NO` are intentionally not part of this change; the framework UI is translated and templates fall back to English until they are.

`scripts/i18n-localized-doc-coverage-baseline.txt` gains 201 `nb-NO` rows recording that the localized documentation set under `packages/core/docs/content/locales/` has no Norwegian translations yet. That is the same debt every other locale carries partially (65-66 rows each); no other locale's rows change.
