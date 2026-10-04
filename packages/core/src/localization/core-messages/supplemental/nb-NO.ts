import type { EnvironmentBadgeMessages } from "../../environment-badge-messages.js";
import type {
  McpConnectMessages,
  McpSettingsMessages,
} from "../../mcp-settings-messages.js";
import type { PrivacySettingsMessages } from "../../privacy-settings-messages.js";

export const environmentBadgeMessages: EnvironmentBadgeMessages = {
  betaLabel: "beta",
  betaTitle: "Du er på Agent-Native {{label}}",
  productionTitle: "Du er på Agent-Native Production",
  activeDevelopment: "Under aktiv utvikling",
  feedbackPrompt:
    "Denne malen er under aktiv utvikling. Vi vil gjerne ha tilbakemeldinger fra deg mens vi bygger den.",
  continuePrompt: "Velg hvor du vil fortsette.",
  switchToProduction: "Bytt til produksjon",
  goToBeta: "Gå til beta",
  hideBadge: "Skjul merket",
  openSwitcher: "Åpne velgeren for {{title}}",
  localDevelopment: "Lokalt utviklingsmiljø",
  development: "Utviklingsmiljø",
};

export const mcpConnectMessages: McpConnectMessages = {
  pageTitle: "Koble til {appName}",
  authorizeLabel: "Gi {appName} tilgang",
  terminalTitle: "Gi {appName} tilgang fra terminalen din?",
  assistantTitle: "Bruk {appName} fra KI-assistenten din",
  signedInAs: "Innlogget som",
  deviceCode: "Enhetskode",
  guidesLabel: "Veiledninger for MCP-URL",
  advancedOptions: "Avanserte valg",
  labelOptional: "Etikett (valgfritt)",
  labelPlaceholder: "f.eks. Claude Code på laptopen min",
  expiresInDays: "Utløper om (dager, 1–365)",
  terminalAlternative: "Alternativ for terminalen",
  existingConnections: "Eksisterende tilkoblinger",
  checkingConnections: "Sjekker tilkoblinger ...",
  unavailable: "Utilgjengelig",
  couldNotLoadConnections: "Kunne ikke laste tilkoblingene.",
  emptyConnections:
    "Tilkoblinger du oppretter vises her, slik at du kan trekke dem tilbake senere.",
  unlabeled: "(uten etikett)",
  lastUsed: "sist brukt",
  revoked: "Trukket tilbake",
  created: "Opprettet",
  revoke: "Trekk tilbake",
  couldNotRevoke: "Kunne ikke trekke tilbake tokenet.",
  authorizeDevice: "Gi enheten tilgang",
  organization: "Organisasjon",
  invalidOrganization: "Velg en organisasjon du tilhører.",
  fullCatalogRequested:
    "Denne enheten ber om tilgang til hele handlingskatalogen.",
  createToken: "Opprett tilkoblingstoken",
  authorizingDevice: "Gir enheten tilgang ...",
  creatingToken: "Oppretter token ...",
  couldNotAuthorize: "Kunne ikke gi denne enhetskoden tilgang.",
  unknownDeviceCode:
    "Denne enhetskoden gjenkjennes ikke. Start tilkoblingen på nytt fra terminalen din.",
  expiredDeviceCode:
    "Denne enhetskoden er utløpt. Start tilkoblingen på nytt fra terminalen din.",
  alreadyUsedDeviceCode:
    "Denne enhetskoden er allerede brukt. Start tilkoblingen på nytt fra terminalen din.",
  finishingConnection:
    "Fullfører tilkoblingen … du kan gå tilbake til terminalen din.",
  deviceAuthorized: "Enheten har fått tilgang",
  connected: "Tilkoblet",
  connectedDescription:
    "Denne enheten kan nå handle som deg – administrer eller trekk den tilbake nedenfor.",
  couldNotCreate: "Kunne ikke opprette tokenet.",
  networkError: "Nettverksfeil. Prøv igjen.",
  urlTitle: "Din MCP-URL",
};

export const mcpSettingsMessages: McpSettingsMessages = {
  mcpTitle: "MCP",
  mcpDescription:
    "Koble denne appen til Claude, ChatGPT, Cursor, Codex eller en annen MCP-vert.",
  mcpUrlLabel: "URL til MCP-serveren",
  mcpUrlHint:
    "Kopier denne URL-en inn i KI-verten du vil bruke. Den kanoniske stien er /mcp.",
  mcpOpenDocs: "Åpne dokumentasjonen for MCP-tilkobling",
  a2aAgentCard: "A2A-agentkort",
  a2aOpenDocs: "Åpne A2A-dokumentasjonen",
  mcpClientSetup: "Koble til en KI-vert",
  mcpClientSetupDescription:
    "Velg en vert for trinnvis oppsett, eller lim inn URL-en i en MCP-kompatibel klient.",
  mcpChooseAssistant: "Velg KI-assistenten din",
  mcpCommand: "Kommando",
  mcpConfig: "MCP-konfigurasjon",
  mcpCopy: "Kopier",
  mcpCopied: "Kopiert",
  mcpStaticTokenDescription:
    "Åpne den fullstendige tilkoblingssiden for å opprette et token for klienter som ikke kan fullføre OAuth.",
  mcpOpenConnectPage: "Åpne fullstendig tilkoblingsside",
  mcpConnect: mcpConnectMessages,
};

export const privacySettingsMessages: PrivacySettingsMessages = {
  privacyTitle: "Personvern og data",
  privacyDescription:
    "Be om en kopi av dataene dine, eller be om at personopplysningene dine slettes.",
  privacyManage: "Administrer",
  privacyRightsTitle: "Dine rettigheter til dataene",
  privacyRightsDescription:
    "Forespørsler registreres for gjennomgang av en administrator av arbeidsområdet, som bekrefter identiteten din og følger opp.",
  privacyRequestCopy: "Be om en kopi",
  privacyRequestDeletion: "Be om sletting",
  privacyRequesting: "Registrerer forespørselen ...",
  privacyRequestRecorded:
    "Forespørselen er registrert. En administrator følger opp.",
  privacyRequestRecordedShort: "Forespørselen er registrert",
  privacyRequestError: "Kunne ikke registrere forespørselen. Prøv igjen.",
  privacyDeletionTitle: "Be om sletting av dataene dine?",
  privacyDeletionDescription:
    "Dette registrerer en sletteforespørsel; det sletter ikke data umiddelbart. En administrator bekrefter identiteten din og fullfører forespørselen i tråd med utrullingens lagringsregler og juridiske forpliktelser.",
  privacyDocsLink: "Les om personvern og datarettigheter",
};
