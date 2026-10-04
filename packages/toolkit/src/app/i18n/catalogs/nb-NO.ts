import type { ToolkitAgentChatTranslation } from "../types.js";

const messages: ToolkitAgentChatTranslation = {
  "composer.contextUrlLabel": "URL",
  "composer.contextInvalidUrl": "Skriv inn en gyldig HTTP- eller HTTPS-URL.",
  "composer.contextAttach": "Legg ved",
  "composer.menu.search": "Søk…",
  "composer.contextPrevious": "Forrige",
  "composer.contextNext": "Neste",
  "composer.contextLoadFailed": "Kunne ikke laste inn kontekst.",
  "composer.contextLinkRequired": "Skriv inn en lenke.",
  "composer.submitFailed": "Kunne ikke sende. Prøv igjen.",
  "composer.attachmentsRemainAfterSubmit":
    "Meldingen ble sendt, men noen vedlegg står igjen. Fjern dem før du sender på nytt.",
  "composer.addContext": "Legg til kontekst",
  "composer.contextActionFailed": "Kunne ikke legge til kontekst.",
  "composer.contextBack": "Tilbake",
  "composer.searchContext": "Søk i kontekst…",
  "composer.noContextResults": "Ingen kontekst som samsvarer.",
  "composer.contextPending": "Kontekst venter",
  "composer.contextError": "Kontekst mislyktes",
  "composer.retryContext": "Prøv konteksten {{name}} på nytt",
  "composer.contextLimitExceeded":
    "Konteksten er for stor. Fjern et element eller legg ved et mindre utvalg.",
  "activity.reasoning": "Resonnering",
  "activity.bucketThinking": "Tenker",
  "activity.bucketResearch": "Undersøkelser",
  "activity.bucketActions": "Handlinger",
  "activity.bucketOther": "Annet",
  "activity.groupLabel": "Agentaktivitet",
  "activity.agents": "Agentsamarbeid",
  "activity.tasks": "Agentoppgaver",
  "agent.started": "begynte å jobbe",
  "agent.resumed": "gjenopptok arbeidet",
  "agent.messaged": "sendte en melding",
  "agent.delegated": "delegerte arbeid",
  "agent.paused": "satt på pause",
  "agent.queued": "i kø",
  "agent.completed": "ferdig",
  "agent.failed": "trenger oppmerksomhet",
  "agent.closed": "lukket",
  "approval.alwaysAllow": "Tillat alltid",
  "approval.alwaysAllowHint":
    "Godkjenn og tillat alltid denne eksakte kommandoen",
  "approval.alwaysAllowAction": "Tillat alltid denne handlingen",
  "approval.alwaysAllowActionHint":
    "Godkjenn og tillat alltid denne handlingen",
  "approval.approve": "Godkjenn",
  "approval.approved": "Godkjent. Kjører {{tool}} på nytt ...",
  "approval.denied": "Avslått. {{tool}} ble ikke kjørt.",
  "approval.deny": "Avslå",
  "approval.action": "den forespurte handlingen",
  "approval.moreOptions": "Flere godkjenningsvalg",
  "approval.question": "Godkjenne kjøring av {{tool}}?",
  "approval.releaseSummary": "Lanser {{release}} til {{environment}}",
  "approval.releaseSummaryWithoutEnvironment": "Lanser {{release}}",
  "approval.edit": "Rediger",
  "approval.editPrompt":
    "Spør meg hvordan jeg vil endre denne handlingen før du prøver igjen.",
  "approval.pending": "Godkjenning kreves",
  "approval.submit": "Send inn",
  "approval.other": "Annet",
  "approval.otherPlaceholder": "Skriv inn svaret ditt",
  "auth.expiredDescription":
    "Økten din kan ha utløpt. Logg ut og logg inn igjen for å koble til på nytt.",
  "auth.expiredTitle": "Økten er utløpt",
  "auth.logIn": "Logg inn",
  "auth.logOut": "Logg ut",
  "auth.refreshChat": "Oppdater samtalen",
  "auth.refreshDescription":
    "Du er innlogget, men denne samtaleforbindelsen må kobles til på nytt.",
  "auth.refreshTitle": "Samtaleøkten må oppdateres",
  "auth.requiredDescription": "Du må logge inn for å bruke agenten.",
  "auth.requiredTitle": "Autentisering kreves",
  "commands.act": "Bytt tilbake til handling",
  "commands.available": "Tilgjengelige kommandoer",
  "commands.clear":
    "Start en ny samtale (beholder gjeldende samtale i historikken)",
  "commands.closeHelp": "Lukk hjelpen",
  "commands.help": "Vis denne listen over kommandoer",
  "commands.history": "Se gjennom alle samtaler",
  "commands.mention": "Nevn filer, agenter eller ressurser",
  "commands.new": "Samme som /clear",
  "commands.plan": "Bytt til skrivebeskyttet planlegging",
  "observability.promoteMustContain": "Svaret må inneholde…",
  "observability.promoteMustContainOptional":
    "Valgfri tekst som svaret skal sjekkes for…",
  "observability.promoteMustContainLabel":
    "Tekst som det forfremmede eval-svaret skal sjekkes for",
  "observability.promoteNeedsContains":
    "Denne kjøringen har ingen vellykkede verktøykall. Skriv inn tekst svaret må inneholde, før du forfremmer.",
  "observability.viewDetails": "Vis detaljer",
  "observability.hideDetails": "Skjul detaljer",
  "observability.input": "Inndata",
  "observability.output": "Utdata",
  "observability.error": "Feil",
  "observability.metadata": "Metadata",
  "observability.notCaptured": "Ikke registrert",
  "observability.openFullConversation": "Åpne hele samtalen",
  "observability.learnAboutTab": "Les mer om denne fanen",
  "observability.summarizeWithAgent": "Oppsummer med agenten",
  "observability.regenerateSummary": "Lag sammendraget på nytt",
  "observability.summarizeWithAgentHelp":
    "Be agenten lese denne tråden, oppsummere forespørselen og resultatet, og bare lenke til bekreftede artefakter.",
  "observability.regenerateSummaryHelp":
    "Be agenten oppdatere dette sammendraget ut fra den nyeste tråden og bekreftede artefakter.",
  "observability.summarySending": "Sender forespørsel til agenten…",
  "observability.summaryQueued":
    "Forespørselen er satt i kø. Sammendraget vises her når agenten har lagret det.",
  "observability.summaryFailed": "Kunne ikke sende forespørselen. Prøv igjen.",
  "observability.summaryExpired":
    "Det har ikke kommet noe sammendrag ennå. Du kan prøve igjen, men agenten jobber kanskje fortsatt.",
  "onboarding.back": "Tilbake",
  "onboarding.chooseRole": "Velg rollen din",
  "onboarding.customizeRole": "La oss tilpasse dette for deg.",
  "onboarding.roleQuestion": "Hva beskriver rollen din best?",
  "onboarding.roleHelperText":
    "Dette hjelper oss med å tilpasse opplevelsen din",
  "onboarding.roleProduct": "Produktleder",
  "onboarding.roleDesign": "Designer",
  "onboarding.roleDeveloper": "Utvikler",
  "onboarding.roleMarketing": "Markedsføring",
  "onboarding.roleSales": "Salg",
  "onboarding.roleOps": "Drift",
  "onboarding.roleIndividual": "Privatperson",
  "onboarding.roleOther": "Annet",
  "onboarding.roleOtherInputLabel": "Beskriv rollen din",
  "onboarding.skipForNow": "Hopp over for nå",
  "onboarding.saveRoleError": "Kunne ikke lagre rollen din.",
  "onboarding.builderCreateAccount": "Opprett Builder.io-konto",
  "onboarding.builderSignInWithAccount": "Logg inn med Builder.io-konto",
  "onboarding.builderActivateDescription":
    "Opprett eller gjenbruk Builder.io-kontoen din og aktiver gratiskreditten med ett klikk.",
  "onboarding.builderActiveCredits":
    "Inkludert med aktiv gratiskreditt fra Builder.io",
  "onboarding.builderCredits": "Inkludert med gratiskreditt fra Builder.io",
  "onboarding.builderIncludedFreeWithAccount":
    "Inkludert gratis med en Builder.io-konto",
  "onboarding.builderMonthlyCredits": "60 Agent Credits per måned",
  "onboarding.builderActivateTitle": "Aktiver gratiskreditt",
  "onboarding.builderAccountExistsTitle": "Du har allerede en Builder.io-konto",
  "onboarding.builderAccountExistsDescription":
    "Logg inn for å bruke kontoen din.",
  "onboarding.builderActivationDescription":
    "Vi oppretter Builder.io-kontoen din automatisk med ett klikk.",
  "onboarding.builderOrgActivationDescription":
    "Vi oppretter Builder.io-kontoen din med ett klikk, slik at organisasjonen din kan bruke den.",
  "onboarding.builderCreateAndActivate": "Opprett og aktiver",
  "onboarding.builderConsentPrefix":
    "Ved å opprette en Builder.io-konto godtar du våre",
  "onboarding.builderTerms": "Tjenestevilkår",
  "onboarding.builderPrivacy": "Personvernerklæring",
  "onboarding.builderConsentAnd": "og",
  "onboarding.builderExistingAccount": "Jeg har en Builder.io-konto",
  "onboarding.builderActivating": "Aktiverer gratiskreditt fra Builder.io",
  "onboarding.builderConnecting": "Setter opp Builder.io-kreditter",
  "onboarding.builderProvisioningDescription":
    "Oppretter eller gjenbruker Builder.io-kontoen din. Dette tar vanligvis noen sekunder.",
  "onboarding.builderConnectionDescription":
    "Fullfør ettklikkstilkoblingen i det nye vinduet.",
  "onboarding.builderReadyWithCodeChanges":
    "KI-kreditter og kodeendringer i skyen er klare til bruk.",
  "onboarding.builderReadyCreditsOnly":
    "KI-kreditter er klare til bruk. Kodeendringer i skyen krever et Builder-prosjekt i innstillingene for bakgrunnsagenten.",
  "onboarding.openBackgroundAgentSettings":
    "Åpne innstillingene for bakgrunnsagenten",
  "onboarding.capability.llm.keySummary": "Koble til din egen KI-modell",
  "onboarding.capability.fileStorage.keySummary": "Filopplasting og lagring",
  "onboarding.fileStorage.title": "Koble til lagring for å laste opp filer",
  "onboarding.fileStorage.statusUnavailable": "Kunne ikke sjekke lagring",
  "onboarding.fileStorage.description":
    "Bruk Builder.io (gratis) eller konfigurer din egen S3-kompatible objektlagring.",
  "onboarding.fileStorage.reconnectBuilder": "Bruk Builder.io",
  "onboarding.fileStorage.custom": "Bruk egne nøkler",
  "onboarding.fileStorage.customDescription":
    "Konfigurer en S3-kompatibel bøtte med en stabil offentlig URL.",
  "onboarding.capability.voiceInput.label": "Taleinndata",
  "onboarding.capability.voiceInput.keySummary": "Taleinndata",
  "onboarding.capability.voiceInput.why":
    "Taleinndata gjør talte forespørsler om til tekst; du kan alltid skrive uten det.",
  "onboarding.capability.embeddings.label": "Embeddinger",
  "onboarding.capability.embeddings.keySummary": "Embeddinger",
  "onboarding.capability.embeddings.why":
    "Embeddinger forbedrer semantisk søk. Nøkkelordsøk fungerer fortsatt uten dem.",
  "onboarding.capability.assetsImageGeneration.label": "Bildegenerering",
  "onboarding.capability.assetsImageGeneration.keySummary":
    "Builder-kreditter eller en nøkkel til en bildeleverandør",
  "onboarding.capability.assetsImageGeneration.why":
    "Bildegenerering er kjernearbeidsflyten for å lage ressurser i tråd med merkevaren.",
  "onboarding.capability.assetsVideoGeneration.label": "Videogenerering",
  "onboarding.capability.assetsVideoGeneration.keySummary": "Gemini API-nøkkel",
  "onboarding.capability.assetsVideoGeneration.why":
    "Videogenerering er valgfritt; kjernearbeidsflyten i Assets er bildegenerering.",
  "onboarding.capability.clipsObjectStorage.label": "Objektlagring",
  "onboarding.capability.clipsObjectStorage.keySummary":
    "Builder-lagring eller en S3-kompatibel bøtte",
  "onboarding.capability.clipsObjectStorage.why":
    "Innspilte videoer trenger varig objektlagring før de kan spilles av eller deles.",
  "onboarding.capability.clipsTranscription.keySummary":
    "Nøkkel til en tale-til-tekst-leverandør",
  "onboarding.capability.about": "Om {{label}}",
  "onboarding.capability.why": "Hvorfor {{label}} trengs",
  "onboarding.openAiKeySettings": "Åpne innstillingene for KI-nøkler",
  "aboutAgentNative.title": "Om Agent-Native",
  "aboutAgentNative.version": "Versjon",
  "aboutAgentNative.environment": "Miljø",
  "aboutAgentNative.build": "Bygg",
  "aboutAgentNative.copyDiagnostics": "Kopier diagnostikk",
  "aboutAgentNative.unknown": "Ukjent",
  "common.agent": "Agent",
  "common.you": "Du",
  "agentPanel.mode": "Modus",
  "agentPanel.uiMode": "UI",
  "agentPanel.keyScope": "Nøkkelomfang",
  "agentPanel.personalKeyScope": "Personlig",
  "agentPanel.organizationKeyScope": "Organisasjon",
  "agentPanel.personalKeyInEffect": "Den personlige nøkkelen din er i bruk.",
  "agentPanel.organizationKeyInEffect": "Organisasjonsnøkkelen er i bruk.",
  "agentPanel.sharedKeyInEffect": "En delt nøkkel er i bruk.",
  "agentPanel.useOrganizationKey": "Bruk organisasjonsnøkkelen",
  "agentPanel.keyStatusUnavailable": "Nøkkelstatus er ikke tilgjengelig.",
  "agentPanel.saveScopeRoleUnavailable":
    "Kunne ikke laste inn organisasjonsrollen din, så nøkler kan ikke lagres ennå.",
  "agentPanel.chatgptSubscriptionPopupBlocked":
    "Tillat popup-vinduer for dette nettstedet, og prøv igjen.",
  "agentPanel.chatgptSubscriptionTitle": "ChatGPT-abonnement",
  "agentPanel.chatgptSubscriptionDescription":
    "Eksperimentell Codex-tilgang gjennom ChatGPT-abonnementet ditt.",
  "agentPanel.chatgptSubscriptionInUse": "I bruk",
  "agentPanel.chatgptSubscriptionConnected": "Tilkoblet",
  "agentPanel.chatgptSubscriptionConnecting": "Kobler til…",
  "agentPanel.chatgptSubscriptionReconnect": "Koble til på nytt",
  "agentPanel.chatgptSubscriptionConnect": "Koble til ChatGPT",
  "agentPanel.chatgptSubscriptionUse": "Bruk i samtalen",
  "agentPanel.chatgptSubscriptionDisconnect": "Koble fra",
  "agentHostNudge.sidebarTitle": "Bruk samtalen i {{agent}}",
  "agentHostNudge.sidebarDescription":
    "Du snakker allerede med {{agent}}. Be den om å jobbe direkte med denne appen.",
  "agentHostNudge.promptTitle": "Spør {{agent}} i stedet",
  "agentHostNudge.promptDescription":
    "Du kan be {{agent}} om å opprette eller endre dette her.",
  "agentHostNudge.useThisChat": "Bruk denne samtalen",
  "agentHostNudge.useThisPrompt": "Bruk denne ledeteksten",
  "common.cancel": "Avbryt",
  "common.collapse": "Skjul",
  "common.connect": "Koble til",
  "common.continue": "Fortsett",
  "common.copied": "Kopiert",
  "common.copy": "Kopier",
  "common.details": "Detaljer",
  "common.dismiss": "Lukk",
  "common.dismissError": "Lukk feilmeldingen",
  "common.expand": "Vis",
  "common.loading": "Laster ...",
  "common.no": "Nei",
  "common.retry": "Prøv igjen",
  "common.chunkLoadFailed": "Kunne ikke laste inn dette. Prøv igjen.",
  "personalization.tab": "Personlig tilpasning",
  "personalization.customInstructions": "Egne instruksjoner",
  "personalization.customInstructionsHelp":
    "Lagres i din personlige AGENTS.md og brukes i alle samtaler.",
  "personalization.customInstructionsPlaceholder":
    "Beskriv hvordan du vil at agenten skal jobbe med deg.",
  "personalization.memoryInstructions": "Minnepreferanser",
  "personalization.memoryInstructionsHelp":
    "Fortell agenten hva den skal huske, og hva den skal utelate.",
  "personalization.memoryInstructionsPlaceholder":
    "For eksempel: husk viktige kontakter; hopp over engangsærender.",
  "personalization.saved": "Lagret",
  "common.save": "Lagre",
  "agents.hostedAgent": "Vertsbasert agent",
  "agents.provider": "Leverandør",
  "agents.providerA2A": "A2A (Foundry, Gemini eller egendefinert)",
  "agents.providerAnthropic": "Administrerte agenter fra Anthropic",
  "agents.agentId": "Agent-ID",
  "agents.agentIdPlaceholder": "agent_...",
  "agents.environmentId": "Miljø-ID",
  "agents.environmentIdPlaceholder": "env_...",
  "agents.apiBaseUrl": "API-basis-URL (valgfritt)",
  "agents.apiBaseUrlPlaceholder": "https://api.anthropic.com",
  "agents.managedAgentIncomplete":
    "Fyll ut feltene for Anthropic Managed Agents.",
  "agents.managedAgentCheck":
    "Tilkoblingen sjekkes når du delegerer fra samtalen.",
  "agents.managedAgentSaved":
    "Anthropic Managed Agent er lagret. Deleger til den fra samtalen.",
  "agents.cardUrl": "URL til agentkort",
  "agents.cardUrlPlaceholder": "https://host.example/agent-card.json",
  "agents.authType": "Autentisering",
  "agents.authNone": "Ingen autentisering",
  "agents.authBearer": "Bearer-token",
  "agents.authClientCredentials": "OAuth-klientlegitimasjon",
  "agents.chooseCredential": "Velg legitimasjon",
  "agents.vault": "Hvelv",
  "agents.tokenUrl": "Token-URL",
  "agents.clientId": "Klient-ID",
  "agents.scope": "Omfang",
  "agents.authIncomplete":
    "Fyll ut autentiseringsfeltene for den vertsbaserte agenten.",
  "agents.invalidUrl":
    "Bruk HTTPS for agent-URL-er, bortsett fra localhost- eller loopback-URL-er til utvikling.",
  "agents.statusReachable": "Kan nås",
  "agents.statusAuthRejected": "Autentisering avvist",
  "agents.statusNoJsonRpc": "Ingen JSON-RPC",
  "agents.directoryTab": "Agentkatalog",
  "agents.directoryPageHint":
    "Finn en agent-backend og koble den til arbeidsområdet ditt.",
  "agents.directorySearch": "Søk etter leverandører",
  "agents.directoryProviders": "Leverandører",
  "agents.directoryManual": "Legg til med URL",
  "agents.directoryA2A": "A2A",
  "agents.directoryManaged": "Administrert API",
  "agents.directoryFoundry": "Microsoft Foundry",
  "agents.directoryFoundryHint": "Koble til en Foundry-agent over A2A.",
  "agents.directoryGemini": "Gemini Enterprise",
  "agents.directoryGeminiHint":
    "Koble til en Gemini Enterprise-agent over A2A.",
  "agents.directoryAnthropic": "Administrerte agenter fra Anthropic",
  "agents.directoryAnthropicHint":
    "Koble til økter og godkjenninger fra Anthropic.",
  "agents.directoryNoMatches": "Ingen leverandører samsvarer med søket ditt.",
  "agents.directoryRegistry": "Globalt A2A-register",
  "agents.directoryRegistryHint":
    "Bla gjennom offentlige agentkort, og verifiser før du kobler til.",
  "agents.directoryBrowse": "Bla i registeret",
  "agents.formName": "Navn",
  "agents.formUrl": "URL",
  "agents.formUrlPlaceholder": "URL (f.eks. http://localhost:8085)",
  "agents.formDescription": "Beskrivelse",
  "agents.formDescriptionPlaceholder": "Beskrivelse (valgfritt)",
  "agents.formCheck": "Sjekk",
  "agents.formAdd": "Legg til",
  "agents.formAdding": "Legger til",
  "agents.formAddAnyway": "Legg til likevel",
  "agents.formRemove": "Fjern",
  "agents.formSaveFailed": "Kunne ikke lagre agenten.",
  "agents.formAddFailed": "Kunne ikke legge til agenten.",
  "agents.checkFailed": "Sjekken mislyktes",
  "agents.checkFailedStatus": "Sjekken mislyktes ({{status}})",
  "agents.checkNotReachable": "Kan ikke nås",
  "agents.checkLive": "Aktiv · {{scheme}}",
  "agents.checkNoAuthScheme": "ingen autentiseringsmetode annonsert",
  "agents.checkTokenRejected":
    "motparten avviste tokenet vårt, så kall vil returnere 401 i produksjon",
  "agents.checkTokenUnverified": "kunne ikke verifisere tokenet vårt",
  "agents.checkTokenUnverifiedReason":
    "kunne ikke verifisere tokenet vårt ({{reason}})",
  "agents.checkTokenWorks": "tokenet vårt fungerer",
  "agents.checkReadsRequireAuth": "lesing krever autentisering",
  "agents.checkPublicSkills": "offentlige ferdigheter: {{count}}",
  "agents.unreachableHint":
    "Appen kjører kanskje ikke ennå. Du kan legge den til likevel.",
  "agents.addedOneWay":
    "La til {{name}} bare på din side. Registrering er enveis, så {{name}} kjenner ikke til denne appen før du legger den til der også.",
  "agents.openPeerSettings": "Åpne innstillingene for {{name}}",
  "agents.syncSecret": "Synkroniser hemmelighet til apper",
  "agents.noSharedSecret": "Ingen delt hemmelighet er angitt ennå.",
  "agents.noSharedSecretLink": "Angi en på Team-siden først.",
  "agents.askOwnerSyncSecret":
    "Be eieren av arbeidsområdet om å synkronisere den delte hemmeligheten.",
  "common.saveFailed": "Lagringen mislyktes",
  "common.saveFailedStatus": "Lagringen mislyktes ({{status}})",
  "common.saving": "Lagrer ...",
  "common.settings": "Innstillinger",
  "common.waiting": "Venter ...",
  "common.yes": "Ja",
  "composer.attachmentError": "Vedlegget kunne ikke behandles.",
  "composer.dropToAttach": "Slipp for å legge ved",
  "composer.droppedFileError":
    "Kunne ikke legge til filen du slapp. Prøv et annet format.",
  "composer.openDesktop": "Åpne Desktop for å bruke denne samtalen.",
  "composer.removeAttachment": "Fjern {{name}}",
  "composer.scrollToBottom": "Rull til nederst",
  "composer.suggestedPrompts": "Foreslåtte forespørsler",
  "composer.stopResponse": "Stopp svaret",
  "composer.subAgentReadOnly":
    "Send meldinger til orkestrator-samtalen – denne underagenten kjører automatisk",
  "commands.clearShort": "Start en ny samtale",
  "commands.newShort": "Start en ny samtale",
  "composer.actDescription": "Bruk verktøy og gjør godkjente endringer",
  "composer.activeAppContext": "Aktiv appkontekst",
  "composer.actMode": "Handlingsmodus",
  "composer.add": "Legg til ...",
  "composer.addOwnKeys": "Egne nøkler",
  "composer.assets.closePicker": "Lukk bildevelgeren",
  "composer.assets.contextTitle": "Bilde: {{title}}",
  "composer.assets.generatedImage": "Generert bilde",
  "composer.assets.generateImage": "Generer bilde",
  "composer.assets.invalidUrl":
    "Den konfigurerte nettadressen til bildevelgeren er ikke gyldig.",
  "composer.assets.loadingPicker": "Laster Assets-velgeren",
  "composer.assets.openPicker": "Åpne bildevelgeren i Assets",
  "composer.assets.openSecurely":
    "Åpne Assets i en ny fane for å logge inn og velge et bilde på en trygg måte.",
  "composer.assets.pickerTitle": "Bildevelger i Assets",
  "composer.auto": "Automatisk",
  "composer.builderModelCredits": "Gratis kreditt for Claude, OpenAI og Gemini",
  "composer.chatGptSubscription": "ChatGPT-abonnement",
  "composer.chatgptManageUsage": "Administrer bruk",
  "composer.chatgptPlanUsing": "Bruker ChatGPT-abonnementet",
  "composer.closePreview": "Lukk forhåndsvisningen",
  "composer.configureProviderKeys":
    "Konfigurer Anthropic, OpenAI eller en annen leverandør",
  "composer.connectAbove": "Koble til KI ovenfor for å fortsette ...",
  "composer.connectBuilder": "Bruk Builder.io",
  "composer.connectKeys": "Koble til nøkler",
  "composer.connectingBuilder": "Setter opp Builder.io…",
  "composer.costHigher": "Høyere kostnad",
  "composer.costLower": "Lavere kostnad",
  "composer.costMedium": "Middels kostnad",
  "composer.createAutomation": "Opprett automasjon",
  "composer.createAutomationPrefix": "Opprett en automasjon: ",
  "composer.createExtension": "Opprett utvidelse",
  "composer.createExtensionPrefix": "Opprett en utvidelse: ",
  "composer.createSkill": "Opprett ferdighet",
  "composer.createSkillPrefix": "Opprett en ferdighet: ",
  "composer.currentDraft": "Gjeldende utkast",
  "composer.defaultModel": "Standardmodell",
  "composer.describeAutomation": "Beskriv hva du vil automatisere ...",
  "composer.describeExtension":
    "Beskriv den interaktive utvidelsen du vil bygge ...",
  "composer.describeSchedule": "Beskriv hva som skal skje og når ...",
  "composer.describeSkill": "Beskriv ferdigheten du vil opprette ...",
  "composer.documentTooLarge":
    "«{{name}}» er {{size}} MB. {{label}} har en grense på {{maxSize}} MB for å holde seg innenfor meldingsgrensene. Reduser filstørrelsen eller del filen i mindre deler.",
  "composer.requestTooLarge":
    "Denne meldingen og vedleggene er for store til å sendes. Fjern et vedlegg eller forkort meldingen.",
  "composer.file": "fil",
  "composer.imageModel": "Bildemodell",
  "composer.imagePreview": "Forhåndsvisning av bilde",
  "composer.loadingModels": "Laster modeller",
  "composer.loadingModelsProgress": "Laster modeller …",
  "composer.menu.createAutomation": "Opprett automasjon",
  "composer.menu.createAutomationDescription":
    "Sett opp en regel av typen når-X-gjør-Y",
  "composer.menu.createExtension": "Opprett utvidelse",
  "composer.menu.createExtensionDescription": "Bygg en miniapp-utvidelse",
  "composer.menu.createSkill": "Opprett ferdighet",
  "composer.menu.createSkillDescription": "Lær agenten en ny ferdighet",
  "composer.menu.generateImage": "Generer bilde",
  "composer.menu.generateImageDescription": "Åpne bildevelgeren i Assets",
  "composer.integrations.connect": "Koble til en integrasjon…",
  "composer.integrations.empty":
    "Ingen integrasjoner er tilgjengelige for denne appen.",
  "composer.integrations.loadFailed": "Kunne ikke laste inn integrasjoner.",
  "composer.integrations.manage": "Administrer integrasjoner…",
  "composer.menu.integrations": "Integrasjoner",
  "composer.menu.integrationsDescription":
    "Koble verktøy og tjenester til agenten",
  "composer.useIntegration": "Bruk {{integration}}",
  "composer.useIntegrationTools": "Bruk verktøy fra {{integration}}",
  "composer.menu.scheduleTask": "Planlegg oppgave",
  "composer.menu.scheduleTaskDescription": "Kjør noe etter en tidsplan",
  "composer.menu.uploadFile": "Last opp fil",
  "composer.menu.uploadFileDescription":
    "Bilder, PDF-er, tekst/kode, JSON, CSV",
  "composer.messageAgent": "Send melding til agenten ...",
  "composer.model": "Modell",
  "composer.needsApiKey": "trenger API-nøkkel",
  "composer.pageTitle": "Sidetittel",
  "composer.pastedImageError":
    "Kunne ikke legge ved det innlimte bildet. Prøv et annet format.",
  "composer.pastedTextError": "Kunne ikke legge ved den innlimte teksten.",
  "composer.plan": "Plan",
  "composer.planDescription":
    "Skrivebeskyttet undersøkelse og godkjenning først",
  "composer.planDesktopRequired":
    "Åpne Agent-Native Desktop for å bruke planmodus.",
  "composer.previewAttachment": "Forhåndsvis {{name}}",
  "composer.reasoning": "Resonnering",
  "composer.reasoningEffort.auto": "Automatisk",
  "composer.reasoningEffort.high": "Høy",
  "composer.reasoningEffort.low": "Lav",
  "composer.reasoningEffort.max": "Maks",
  "composer.reasoningEffort.medium": "Middels",
  "composer.reasoningEffort.minimal": "Minimal",
  "composer.reasoningEffort.none": "Ingen",
  "composer.reasoningEffort.xhigh": "Ekstra høy",
  "composer.reasoningExtraHighShort": "XHøy",
  "composer.reasoningMediumShort": "Mid",
  "composer.reasoningMinimalShort": "Min",
  "composer.removeContext": "Fjern konteksten {{name}}",
  "composer.removeReference": "Fjern referansen {{name}}",
  "composer.route": "Rute",
  "composer.scheduleTask": "Planlegg oppgave",
  "composer.scheduleTaskPrefix": "Opprett en gjentakende jobb: ",
  "composer.selectedReferences": "Valgte referanser",
  "composer.sendMessage": "Send melding",
  "composer.skill.added": "Ferdigheten «{{name}}» er lagt til",
  "composer.skill.back": "Tilbake",
  "composer.skill.content": "Innhold",
  "composer.skill.createDescription":
    "Beskriv en ferdighet og la agenten skrive utkastet",
  "composer.skill.createNew": "Opprett ny ferdighet",
  "composer.skill.name": "Navn på ferdighet",
  "composer.skill.review": "Se gjennom innholdet fra {{name}} før du lagrer.",
  "composer.skill.savedAt": "Lagret",
  "composer.skill.saveFailed": "Kunne ikke lagre ferdighetsfilen",
  "composer.skill.selectedFile": "den valgte filen",
  "composer.skill.uploadDescription": "Importer en eksisterende SKILL.md-fil",
  "composer.skill.uploadFailedStatus": "Opplastingen mislyktes ({{status}})",
  "composer.skill.uploadFile": "Last opp ferdighetsfil",
  "composer.upload": "Last opp",
  "composer.uploadFailed": "Kunne ikke laste opp den valgte filen.",
  "composer.useAttachedContext": "Bruk den vedlagte konteksten.",
  "mentions.commands": "Kommandoer",
  "mentions.learnMore": "Les mer",
  "mentions.noResults": "Fant ingen treff",
  "mentions.noSkills": "Ingen ferdigheter tilgjengelig",
  "mentions.skillsLoadFailed":
    "Kunne ikke laste inn ferdigheter. Lukk menyen og åpne den igjen for å prøve på nytt.",
  "mentions.sections.agents": "Agenter",
  "mentions.sections.connectedAgents": "Tilkoblede agenter",
  "mentions.sections.files": "Filer",
  "mentions.sections.other": "Annet",
  "mentions.skills": "Ferdigheter",
  "mentions.typeToSearch": "Skriv for å søke ...",
  "pastedText.characters": "{{formattedCount}} tegn",
  "pastedText.characters_one": "{{formattedCount}} tegn",
  "pastedText.characters_other": "{{formattedCount}} tegn",
  "pastedText.lines": "{{formattedCount}} linjer",
  "pastedText.lines_one": "{{formattedCount}} linje",
  "pastedText.lines_other": "{{formattedCount}} linjer",
  "pastedText.preview": "Forhåndsvis innlimt tekst",
  "pastedText.remove": "Fjern innlimt tekst",
  "pastedText.title": "Innlimt tekst",
  "voice.dictation.cancel": "Avbryt (Esc)",
  "voice.dictation.cancelRecording": "Avbryt opptaket",
  "voice.dictation.start": "Dikter ({{shortcut}})",
  "voice.dictation.stopRecording": "Stopp opptaket",
  "voice.dictation.transcribing": "Transkriberer …",
  "voiceMode.connectBuilder": "Bruk Builder.io",
  "voiceMode.end": "Avslutt talemodus",
  "voiceMode.entryButtonLabel": "Bruk mikrofon",
  "voiceMode.errors.channelDisconnected":
    "Sanntidskanalen for talestyring ble koblet fra.",
  "voiceMode.errors.connectionFailed": "Sanntidstaleforbindelsen mislyktes.",
  "voiceMode.errors.connectionTimedOut":
    "Sanntidstaleforbindelsen ble tidsavbrutt.",
  "voiceMode.errors.offerFailed": "Nettleseren opprettet ikke et lydtilbud.",
  "voiceMode.errors.responseFailed": "OpenAI kunne ikke fullføre talesvaret.",
  "voiceMode.errors.sessionFailed": "Det oppsto en feil i sanntidstaleøkten.",
  "voiceMode.errors.unsupported":
    "Denne nettleseren støtter ikke talesamtaler i sanntid.",
  "voiceMode.hideChat": "Skjul samtalen",
  "voiceMode.keepDictating": "Dikter en melding",
  "voiceMode.promptDescription":
    "Talemodus fortsetter å lytte mens agenten navigerer og utfører handlinger.",
  "voiceMode.promptTitle": "Bruk stemmen din",
  "voiceMode.rememberPreference": "Husk valget mitt",
  "voiceMode.settings.autoLanguage": "Automatisk",
  "voiceMode.settings.defaultMicrophone": "Systemstandard",
  "voiceMode.settings.intelligence": "Intelligens",
  "voiceMode.settings.intelligenceLevels.balanced": "Balansert",
  "voiceMode.settings.intelligenceLevels.deep": "Dyp",
  "voiceMode.settings.intelligenceLevels.instant": "Umiddelbar",
  "voiceMode.settings.language": "Språk",
  "voiceMode.settings.languages.de": "Tysk",
  "voiceMode.settings.languages.en": "Engelsk",
  "voiceMode.settings.languages.es": "Spansk",
  "voiceMode.settings.languages.fr": "Fransk",
  "voiceMode.settings.languages.it": "Italiensk",
  "voiceMode.settings.languages.ja": "Japansk",
  "voiceMode.settings.languages.ko": "Koreansk",
  "voiceMode.settings.languages.pt": "Portugisisk",
  "voiceMode.settings.languages.zh": "Kinesisk",
  "voiceMode.settings.microphone": "Mikrofon",
  "voiceMode.settings.microphoneNumber": "Mikrofon {{number}}",
  "voiceMode.settings.microphoneSwitchFailed":
    "Kunne ikke bytte mikrofon. Den nåværende mikrofonen er fortsatt aktiv.",
  "voiceMode.settings.voiceChangePending":
    "Den nye stemmen tas i bruk neste gang du starter talemodus.",
  "voiceMode.settings.voiceDescriptions.alloy": "Balansert og nøytral",
  "voiceMode.settings.voiceDescriptions.ash": "Jevn og selvsikker",
  "voiceMode.settings.voiceDescriptions.ballad": "Varm og uttrykksfull",
  "voiceMode.settings.voiceDescriptions.cedar": "Klar og jordnær",
  "voiceMode.settings.voiceDescriptions.coral": "Vennlig og lys",
  "voiceMode.settings.voiceDescriptions.echo": "Klar og direkte",
  "voiceMode.settings.voiceDescriptions.marin": "Varm og naturlig",
  "voiceMode.settings.voiceDescriptions.sage": "Rolig og reflektert",
  "voiceMode.settings.voiceDescriptions.shimmer": "Lett og oppløftende",
  "voiceMode.settings.voiceDescriptions.verse": "Uttrykksfull og allsidig",
  "voiceMode.settings.voiceStyle": "Stemmestil",
  "voiceMode.setupDescription":
    "Bruk Builder.io for administrert tale med gratis kreditter, eller legg til dine egne nøkler.",
  "transcription.builderCtaDescription":
    "Bruk Builder.io for transkripsjon av høyere kvalitet med gratis kreditter og uten API-nøkkel.",
  "voiceMode.googleRealtimeDescription":
    "Google-legitimasjon er angitt. Bruk Builder.io (gratisnivå tilgjengelig) for å opprette den administrerte sanntidsøkten.",
  "voiceMode.serviceAccountRealtimeDescription":
    "JSON for tjenestekonto er angitt. Bruk Builder.io (gratisnivå tilgjengelig) for å opprette den administrerte WebSocket-økten i sanntid.",
  "voiceMode.builderGeminiDescription":
    "Bruk Builder.io for transkripsjon med Gemini Flash-Lite og tekstopprydding med Luna. Ingen Google-nøkkel trengs.",
  "voiceMode.setupTitle": "Sett opp talemodus",
  "voiceMode.showChat": "Vis samtalen",
  "voiceMode.start": "Start talesamtale",
  "voiceMode.startWithOpenAiKey": "Start med OpenAI-nøkkel",
  "voiceMode.status.connecting": "Kobler til",
  "voiceMode.status.ending": "Avslutter talemodus",
  "voiceMode.status.error": "Talemodus krever oppmerksomhet",
  "voiceMode.status.listening": "Lytter",
  "voiceMode.status.speaking": "Snakker",
  "voiceMode.status.working": "Jobber",
  "voiceMode.useOpenAiKey": "Legg til egne nøkler",
  "voiceMode.voiceSettings": "Taleinnstillinger",
  "duration.hourShort": "t",
  "duration.minuteShort": "m",
  "duration.secondShort": "s",
  "empty.loadingChat": "Laster samtalen ...",
  "empty.prompt": "Hva kan jeg hjelpe deg med?",
  "error.afterDuration": "{{headline}} etter {{duration}}",
  "error.chatgptPlanUsageLimit":
    "Bruksgrensen for ChatGPT-abonnementet ditt er nådd.",
  "error.chatgptPlanUsageUnavailable":
    "OpenAI kunne ikke sjekke bruksgrensen for dette ChatGPT-abonnementet. Sjekk bruken i ChatGPT eller prøv en annen modell.",
  "error.failed": "Agentkjøringen mislyktes før den ble ferdig.",
  "error.render": "Dette innholdet kunne ikke vises.",
  "error.stopped": "Agenten stoppet før den ble ferdig",
  "errorMessages.agentConnection":
    "Agentforbindelsen ble avbrutt. Sjekk tilkoblingen og prøv igjen.",
  "errorMessages.attachmentPasswordProtected":
    "Denne PDF-en er passordbeskyttet og kan derfor ikke leses. Fjern passordbeskyttelsen eller lim inn den relevante teksten, og prøv igjen.",
  "errorMessages.builderAuthentication":
    "Builder avviste den tilkoblede legitimasjonen. Bruk Builder.io i Innstillinger på nytt, og prøv igjen.",
  "errorMessages.builderModelUnauthorized":
    "Leverandøren bak denne modellen avviste forespørselen. Velg en annen modell, og prøv igjen.",
  "errorMessages.errorPrefix": "Feil: {{message}}",
  "errorMessages.gatewayInternalError":
    "Modell-gatewayen støtte på en intern feil før agenten kunne svare. Prøv igjen om litt, og oppgi feil-ID-en nedenfor hvis det fortsetter.",
  "errorMessages.gatewayNoDetails":
    "Modell-gatewayen returnerte ingen feildetaljer, og samtalen klarte ikke å hente seg inn. Vent litt og prøv igjen, eller start en ny samtale hvis det fortsetter.",
  "errorMessages.creditsLimitReached": "Du har nådd grensen for KI-kreditter.",
  "errorMessages.inactivityTimeout":
    "Agentforbindelsen ble tidsavbrutt før den ble ferdig. Du kan fortsette fra det delvise arbeidet eller prøve igjen.",
  "errorMessages.invalidToolSchema":
    "Et verktøyskjema var ugyldig, så modellen avviste forespørselen før den startet. Det ugyldige verktøyet kan hoppes over og forespørselen forsøkes på nytt.",
  "errorMessages.malformedRequest":
    "Modelleverandøren avviste denne forespørselen som feilformatert, så den ble ikke forsøkt på nytt. Prøv igjen, eller start en ny samtale hvis det fortsetter.",
  "errorMessages.requestTooLarge":
    "Denne forespørselen overskred serverens størrelsesgrense (HTTP 413). Start en ny samtale eller fjern store vedlegg eller referanser, og prøv igjen.",
  "errorMessages.runInterrupted": "Agenten stoppet før den ble ferdig.",
  "errorMessages.runFailed": "Agentkjøringen mislyktes.",
  "errorMessages.runUnverified":
    "Denne samtalen mistet oversikten over agenten, som kanskje fortsatt kjører. Last inn på nytt for å se fremdriften.",
  "errorMessages.runSignedOut":
    "Du er logget ut, så denne samtalen kan ikke følge agenten. Logg inn igjen, og last inn på nytt.",
  "errorMessages.malformedRequestAttachment":
    "Modellen avviste en vedlagt fil, så denne meldingen ble aldri sendt. Fjern vedlegget og prøv igjen – en PDF, en ren tekstfil eller et JPEG-, PNG-, GIF- eller WebP-bilde leses direkte; andre formater må lastes opp og lenkes til i stedet.",
  "errorMessages.noProviderConnected":
    "Ingen LLM-leverandør er tilkoblet. Åpne Innstillinger > Agent > KI-leverandører, og bruk Builder.io (gratisnivå tilgjengelig) eller legg til en leverandørnøkkel.",
  "errorMessages.openBuilderSpaceSettings":
    "Åpne innstillinger for Builder-området",
  "errorMessages.providerAuthentication":
    "Modell-leverandøren avviste den lagrede API-nøkkelen. Oppdater nøkkelen i Innstillinger → Integrasjoner → API-nøkler, og prøv igjen.",
  "errorMessages.providerConfiguration":
    "Denne modellen kan ikke bruke verktøy med gjeldende innstillinger. Bytt modell i Innstillinger, og prøv igjen.",
  "errorMessages.providerHtml": "Leverandøren returnerte en HTML-feilside.",
  "errorMessages.providerNetwork":
    "Modell-leverandøren kunne ikke nås. Sjekk tilkoblingen og prøv igjen.",
  "errorMessages.providerRateLimit":
    "Modell-leverandøren begrenser hastigheten for denne samtalen nå. Vent litt, og prøv igjen.",
  "errorMessages.providerTransientRejection":
    "KI-leverandøren avviste denne forespørselen midlertidig. Dette går vanligvis over innen et minutt – prøv igjen.",
  "errorMessages.startNewChat": "Start ny samtale",
  "errorMessages.addCreditsInBuilder": "Legg til kreditter i Builder",
  "feedback.inaccurate": "Unøyaktig",
  "feedback.keyboardHint": "{{shortcut}} Enter for å sende",
  "feedback.notHelpful": "Ikke nyttig",
  "feedback.placeholder": "Fortell oss hva som gikk galt ...",
  "feedback.submit": "Send inn",
  "feedback.submitted": "Tilbakemelding sendt",
  "feedback.thumbsDown": "Tommel ned",
  "feedback.thumbsUp": "Tommel opp",
  "feedback.tooSlow": "For sakte",
  "feedback.whatWentWrong": "Hva gikk galt?",
  "feedback.wrongTool": "Feil verktøy",
  "header.switchToCli": "Bytt til CLI",
  "history.active": "Aktiv",
  "history.empty": "Ingen samtaler ennå",
  "history.loadOlder": "Last inn eldre samtaler",
  "history.noMatches": "Ingen samtaler samsvarer",
  "history.open": "Åpne",
  "history.pinned": "Festet",
  "history.search": "Søk i samtaler ...",
  "history.searching": "Søker ...",
  "history.untitledChat": "Samtale",
  "history.yesterday": "I går",
  "integrations.availableSection": "Tilgjengelige integrasjoner",
  "integrations.connectedSection": "Tilkoblet",
  "integrations.goToApiKeys": "Gå til API-nøkler",
  "integrations.goToIntegrations": "Gå til Integrasjoner",
  "integrations.lookingForApiKeys": "Ser du etter en API-nøkkel i stedet?",
  "integrations.lookingForProviders":
    "Ser du etter OAuth- eller MCP-leverandører?",
  "integrations.manage": "Administrer",
  "integrations.recommended": "Anbefalt",
  "integrations.subtitle": "Koble til verktøyene agenten din kan bruke.",
  "mcpIntegrations.menuLabel": "Integrasjoner",
  "mcpApps.optionalPeerRequired":
    "Denne MCP-appen krever {{packageName}}. Installer den med {{installCommand}}.",
  "mcpIntegrations.menuDescription": "Koble verktøy og tjenester til agenten",
  "mcpIntegrations.title": "Koble til integrasjoner",
  "mcpIntegrations.description":
    "Bla gjennom {{count}} agentintegrasjoner eller legg til en egendefinert.",
  "mcpIntegrations.searchPlaceholder": "Søk i integrasjoner",
  "mcpIntegrations.addYourOwn": "Legg til din egen",
  "mcpIntegrations.noMatches": "Ingen integrasjoner samsvarer med søket.",
  "mcpIntegrations.connected": "Tilkoblet",
  "mcpIntegrations.connectionError": "Tilkoblingsfeil",
  "mcpIntegrations.connectionErrorReason": "Årsak: {{reason}}",
  "mcpIntegrations.reconnect": "Koble til på nytt",
  "mcpIntegrations.reconnecting": "Kobler til på nytt…",
  "mcpIntegrations.reconnectFailed": "Ny tilkobling mislyktes: {{error}}",
  "mcpIntegrations.configure": "Konfigurer",
  "mcpIntegrations.connect": "Koble til",
  "mcpIntegrations.connectWithOAuth": "Koble til",
  "mcpIntegrations.connecting": "Kobler til…",
  "mcpIntegrations.useApiToken": "Bruk API-token",
  "mcpIntegrations.customOAuthDefault": "Logg inn med OAuth",
  "mcpIntegrations.customHeadersMode": "Bruk en API-nøkkel",
  "mcpIntegrations.useApiKeyInstead": "Bruk en API-nøkkel i stedet",
  "mcpIntegrations.useOAuthInstead": "Bruk OAuth i stedet",
  "mcpIntegrations.connectSuggestion":
    "Koble til {{name}} for å bruke det i samtalen",
  "mcpIntegrations.connectSuggestionWithApiToken":
    "Koble til {{name}} med et API-token for å bruke det i samtalen",
  "mcpIntegrations.dismissSuggestion": "Avvis integrasjonsforslaget",
  "mcpIntegrations.backToIntegrations": "Tilbake til integrasjoner",
  "mcpIntegrations.customTitle": "Legg til egendefinert agentintegrasjon",
  "mcpIntegrations.configureTitle": "Konfigurer {{name}}",
  "mcpIntegrations.presetNoAuthDescription":
    "Forhåndsinnstilte verdier er fylt inn. Test endepunktet eller koble til nå.",
  "mcpIntegrations.presetAuthDescription":
    "Forhåndsinnstilte verdier er fylt inn. Legg til nødvendige autorisasjonsdetaljer før du kobler til.",
  "mcpIntegrations.customDescription":
    "Lim inn et Streamable HTTP- eller SSE-endepunkt og valgfrie headere.",
  "mcpIntegrations.oauthNotice":
    "Denne leverandøren krever vanligvis et OAuth-oppsett. Følg leverandørens dokumentasjon, eller legg til en Authorization-header hvis endepunktet ditt støtter tokenbasert tilgang.",
  "mcpIntegrations.providerSetupRequired": "Leverandøroppsett kreves",
  "mcpIntegrations.providerSetupDescription":
    "Fullfør det nødvendige oppsettet i {{name}} først. Kom deretter tilbake hit for å koble til kontoen din.",
  "mcpIntegrations.providerSetupFormDescription":
    "Fullfør leverandøroppsettet før du kobler til kontoen din.",
  "mcpIntegrations.continueToConnect": "Koble til kontoen min",
  "mcpIntegrations.setupTitle": "Koble til {{name}}",
  "mcpIntegrations.personal": "Personlig",
  "mcpIntegrations.personalConnection": "Personlig tilkobling",
  "mcpIntegrations.organization": "Organisasjon",
  "mcpIntegrations.scopeQuestion": "Hvem skal kunne bruke denne tilkoblingen?",
  "mcpIntegrations.scopeChoiceTitle": "Hvem skal bruke dette?",
  "mcpIntegrations.scopeChoiceDescription":
    "Velg hvor denne tilkoblingen skal være tilgjengelig.",
  "mcpIntegrations.connectForMe": "Koble til for meg",
  "mcpIntegrations.setUpForWorkspace": "Sett opp for arbeidsområdet",
  "mcpIntegrations.workspaceAdminRequired":
    "Krever eier eller administrator av arbeidsområdet.",
  "mcpIntegrations.workspaceJoinRequired": "Bli med i et arbeidsområde først.",
  "mcpIntegrations.personalOnlyDescription":
    "Bare personlige tilkoblinger støttes for denne integrasjonen.",
  "mcpIntegrations.workspaceOnlyDescription":
    "Denne integrasjonen kobles til én gang for hele arbeidsområdet, så den kan ikke kobles til bare din konto. En eier eller administrator av arbeidsområdet kan sette den opp.",
  "mcpIntegrations.loadingScopeMetadata": "Laster inn tilkoblingsomfang…",
  "mcpIntegrations.retry": "Prøv igjen",
  "mcpIntegrations.retrying": "Prøver igjen…",
  "mcpIntegrations.personalDescription":
    "Bare du kan bruke denne tilkoblingen.",
  "mcpIntegrations.sharedWithWorkspace": "Delt med arbeidsområdet",
  "mcpIntegrations.organizationDescription":
    "Medlemmer av arbeidsområdet med tillatelse kan bruke denne tilkoblingen. Leverandørens tillatelser gjelder fortsatt.",
  "mcpIntegrations.serverNameRequired":
    "Skriv inn et integrasjonsnavn før du kobler til med OAuth.",
  "mcpIntegrations.serverName": "Integrasjonsnavn",
  "mcpIntegrations.url": "URL",
  "mcpIntegrations.fieldDescription": "Beskrivelse",
  "mcpIntegrations.headers": "Headere",
  "mcpIntegrations.serverNamePlaceholder": "Integrasjonsnavn",
  "mcpIntegrations.urlPlaceholder": "https://example.com/agent-integration",
  "mcpIntegrations.descriptionPlaceholder": "Beskrivelse (valgfritt)",
  "mcpIntegrations.headersPlaceholder": "Authorization: Bearer <token>",
  "mcpIntegrations.openSetupDocs": "Åpne oppsettsdokumentasjonen",
  "mcpIntegrations.viewSetup": "Åpne oppsettsveiledningen",
  "mcpIntegrations.test": "Test",
  "mcpIntegrations.testing": "Tester…",
  "mcpIntegrations.toolsAvailable_one": "{{count}} verktøy tilgjengelig",
  "mcpIntegrations.toolsAvailable_other": "{{count}} verktøy tilgjengelig",
  "mcpIntegrations.failed": "Mislyktes",
  "mcpIntegrations.docsLabel": "Vis dokumentasjonen for {{name}}",
  "mcpIntegrations.catalog.context7.description":
    "Hent oppdatert bibliotekdokumentasjon i agentsamtaler.",
  "mcpIntegrations.catalog.context7.useCase":
    "Dokumentasjon, teknisk referanse, API-dokumentasjon, rammeverksveiledninger",
  "mcpIntegrations.catalog.sentry.description":
    "Undersøk saker, hendelser og feilsøkingsdata.",
  "mcpIntegrations.catalog.sentry.useCase":
    "Feilovervåking, feilsøking, ytelse, krasjrapporter",
  "mcpIntegrations.catalog.fullstory.description":
    "Les atferdsanalyse og undersøk øktopptak.",
  "mcpIntegrations.catalog.fullstory.useCase":
    "Produktanalyse, øktopptak, kvalitativ atferd, brukerundersøkelser",
  "mcpIntegrations.catalog.fullstory.setupNote":
    "FullStory MCP er for øyeblikket i beta og krever at StoryAI-funksjoner og bryteren for Model Context Protocol er aktivert av en organisasjonsadministrator i FullStory.",
  "mcpIntegrations.catalog.amplitude.description":
    "Les og jobb med produktanalyse fra Amplitude.",
  "mcpIntegrations.catalog.amplitude.useCase":
    "Produktanalyse, diagrammer, dashbord, kohorter, eksperimenter",
  "mcpIntegrations.catalog.amplitude.setupNote":
    "Amplitude MCP bruker OAuth over strømmende HTTP. Standardendepunktet gjelder datalagring i USA; bruk Amplitudes EU-endepunkt når kontoen krever lagring i EU.",
  "mcpIntegrations.catalog.sigma.description":
    "Søk i, utforsk og analyser arbeidsbøker og dashbord i Sigma.",
  "mcpIntegrations.catalog.sigma.useCase":
    "Analyse, dashbord, arbeidsbøker, datautforsking, forretningsinnsikt",
  "mcpIntegrations.catalog.sigma.setupNote":
    "MCP-URL-en til Sigma er organisasjonsspesifikk. Åpne Profile > Integrations > Connect Sigma to AI tools i Sigma, kopier URL-en og lim den inn her. Sigma MCP støtter for øyeblikket søk, utforsking av metadata og analyse; oppretting og import av dashbord eller arbeidsbøker er ikke tilgjengelig gjennom denne tilkoblingen.",
  "mcpIntegrations.catalog.notion.description":
    "Søk i sider og teamets kunnskap.",
  "mcpIntegrations.catalog.notion.useCase":
    "Dokumentasjon, kunnskapsforvaltning, notater, innholdsproduksjon",
  "mcpIntegrations.catalog.notion.setupNote":
    "Notion-integrasjonen bruker bruker-OAuth. Enterprise-arbeidsområder kan revidere integrasjonsbruk og tillate eller blokkere klienter; koble til på nytt etter endringer i administratorens retningslinjer.",
  "mcpIntegrations.catalog.granola.description":
    "Søk i møtenotater, transkripsjoner og oppgaver.",
  "mcpIntegrations.catalog.granola.useCase":
    "Møtenotater, opptak, transkripsjoner, oppgaver, oppfølginger",
  "mcpIntegrations.catalog.granola.setupNote":
    "Granola-integrasjonen bruker OAuth i nettleseren. Autoriser den innloggede Granola-kontoen, og gå gjennom hvilke møtenotater og transkripsjoner agenten får tilgang til.",
  "mcpIntegrations.catalog.gong.description":
    "Søk i Gong-samtaler og lag innsikt om kontoer og avtaler.",
  "mcpIntegrations.catalog.gong.useCase":
    "Salgssamtaler, transkripsjoner, avtaleinnsikt, kontosammendrag",
  "mcpIntegrations.catalog.gong.setupNote":
    "En teknisk administrator i Gong må opprette en MCP-integrasjon med personlig eller delt autorisasjon. For manuell registrering lagrer du den genererte klient-ID-en og hemmeligheten som arbeidsområdehemmelighetene `GONG_MCP_CLIENT_ID` og `GONG_MCP_CLIENT_SECRET`; automatisk registrering trenger ingen klientlegitimasjon.",
  "mcpIntegrations.catalog.semgrep.description":
    "Skann kode for sikkerhetsfunn.",
  "mcpIntegrations.catalog.semgrep.useCase":
    "Sikkerhetsskanning, sårbarhetsdeteksjon, kodeanalyse",
  "mcpIntegrations.catalog.linear.description": "Les og skriv Linear-saker.",
  "mcpIntegrations.catalog.linear.useCase":
    "Prosjektstyring, saksoppfølging, planlegging, feilrapporter",
  "mcpIntegrations.catalog.apollo.description":
    "Søk i, berik og administrer GTM-data fra Apollo.",
  "mcpIntegrations.catalog.apollo.useCase":
    "Prospektering, berikelse, kontakter, sekvenser, kontoundersøkelser",
  "mcpIntegrations.catalog.apollo.setupNote":
    "Apollo MCP bruker bruker-OAuth og krever ingen Apollo API-nøkkel. Tillatelser i Apollo-abonnementet, kreditter og leverandørens begrensninger for modelltrening gjelder fortsatt.",
  "mcpIntegrations.catalog.commonRoom.description":
    "Undersøk kjøpssignaler, kontakter og organisasjoner.",
  "mcpIntegrations.catalog.commonRoom.useCase":
    "Kjøperinnsikt, produktsignaler, intensjon, kontaktberikelse",
  "mcpIntegrations.catalog.commonRoom.setupNote":
    "Common Room MCP bruker OAuth per bruker og respekterer den autoriserte brukerens rolle i arbeidsområdet. En administrator må kanskje aktivere MCP-tilkoblingen for instansen.",
  "mcpIntegrations.catalog.exa.description":
    "Søk på nettet og hent sider med Exa.",
  "mcpIntegrations.catalog.exa.useCase":
    "Nettsøk, undersøkelser, kodesøk, sidehenting",
  "mcpIntegrations.catalog.exa.setupNote":
    "Exas eksterne MCP-endepunkt støtter grunnleggende gratis bruk uten nøkkel. Legg til en Exa API-nøkkel gjennom leverandørens header-konfigurasjon når du trenger høyere grenser eller flere verktøy.",
  "mcpIntegrations.catalog.supabase.description":
    "Administrer data, autentisering og backend-tjenester.",
  "mcpIntegrations.catalog.supabase.useCase":
    "Database, autentisering, lagring, edge-funksjoner",
  "mcpIntegrations.catalog.neon.description":
    "Jobb med serverløse Postgres-prosjekter.",
  "mcpIntegrations.catalog.neon.useCase":
    "Databaseadministrasjon, serverløs Postgres, datalagring",
  "mcpIntegrations.catalog.stripe.description":
    "Administrer betalinger, abonnementer og kunder.",
  "mcpIntegrations.catalog.stripe.useCase":
    "Betalinger, abonnementer, fakturering, kundeadministrasjon",
  "mcpIntegrations.catalog.atlassian.description":
    "Les og skriv Jira-saker og Confluence-innhold.",
  "mcpIntegrations.catalog.atlassian.useCase":
    "Prosjektstyring, saksoppfølging, dokumentasjon, teamsamarbeid",
  "mcpIntegrations.catalog.atlassian.setupNote":
    "Be Atlassian-administratoren din om å tillate Clips-appens domene og aktivere Rovo/MCP med tillatelsene Read, Write og Search for Jira-nettstedet ditt.",
  "mcpIntegrations.catalog.cloudflare.description":
    "Søk i og betjen Cloudflare-tjenester gjennom integrasjonen.",
  "mcpIntegrations.catalog.cloudflare.useCase":
    "DNS, Workers, domener, sikkerhet, observerbarhet, plattform-API-er",
  "mcpIntegrations.catalog.cloudflare.setupNote":
    "Cloudflares administrerte integrasjonskatalog inneholder produktspesifikke integrasjoner i tillegg til den brede API-integrasjonen. Gå gjennom omfangene og velg det smaleste endepunktet som passer arbeidsflyten din.",
  "mcpIntegrations.catalog.grafana.description":
    "Spør etter måledata, logger og observerbarhetsdata i Grafana Cloud.",
  "mcpIntegrations.catalog.grafana.useCase":
    "Observerbarhet, måledata, logger, sporinger, dashbord",
  "mcpIntegrations.catalog.grafana.setupNote":
    "Grafana Cloud MCP er i offentlig forhåndsvisning og krever MCP-tilgang til Grafana Cloud Assistant. Det gjelder bare vertsbasert Grafana Cloud; selvdriftet Grafana trenger den lokale MCP-serveren.",
  "mcpIntegrations.catalog.gitlab.description":
    "Les og administrer GitLab-prosjekter, saker og merge requests.",
  "mcpIntegrations.catalog.gitlab.useCase":
    "Repositorier, saker, merge requests, CI/CD, kodeanalyse",
  "mcpIntegrations.catalog.gitlab.setupNote":
    "GitLab-integrasjonen er for øyeblikket i beta. På GitLab.com må en administrator for toppnivågruppen tillate integrasjonstilgang før OAuth kan fullføres; selvadministrerte instanser har en tilsvarende instansinnstilling.",
  "mcpIntegrations.catalog.figma.description":
    "Ta med designkontekst og lerretshandlinger fra Figma inn i en agent.",
  "mcpIntegrations.catalog.figma.useCase":
    "Designfiler, komponenter, variabler, designsystemer, lerret",
  "mcpIntegrations.catalog.figma.setupNote":
    "Figma-integrasjonen tillater bare klienter som står oppført i Figmas integrasjonskatalog, så dette eksterne endepunktet kan ikke kobles til fra Agent-Native ennå. Bruk Figma REST API som reserveløsning med et personlig tilgangstoken for å lese fil- og nodekontekst; lerretshandlinger er utilgjengelige til Figma godkjenner Agent-Native.",
  "mcpIntegrations.catalog.canva.description":
    "Søk i, opprett og oppdater design og ressurser i Canva.",
  "mcpIntegrations.catalog.canva.useCase":
    "Design, maler, ressurser, merkevaresett, eksporter, samarbeid",
  "mcpIntegrations.catalog.canva.setupNote":
    "Canva-integrasjonen bruker OAuth per bruker og krever at klienter tillater Canvas domener canva.com og canva.ai. Bekreft gjeldende omdirigering og klientoppsett i Canvas integrasjonsdokumentasjon før du kobler til.",
  "mcpIntegrations.catalog.vercel.description":
    "Søk i Vercel-dokumentasjonen og undersøk prosjekter, utrullinger og logger.",
  "mcpIntegrations.catalog.vercel.useCase":
    "Utrullinger, prosjekter, logger, domener, hosting, dokumentasjon",
  "mcpIntegrations.catalog.vercel.setupNote":
    "Vercel-integrasjonen godtar bare gjennomgåtte og godkjente KI-klienter. Agent-Native må legges til i Vercels liste over støttede klienter før en generell rammeverkstilkobling fungerer.",
  "mcpIntegrations.catalog.github.description":
    "Les repositorier, saker, pull requests og kodekontekst.",
  "mcpIntegrations.catalog.github.useCase":
    "Repositorier, saker, pull requests, kode, utviklingsanalyse",
  "mcpIntegrations.catalog.github.setupNote":
    "GitHubs innloggingsleverandør lar ikke apper registrere seg selv, så Koble til-knappen kan ikke fullføre OAuth. Koble til med et personlig tilgangstoken fra GitHub i stedet, og merk at organisasjoner kan håndheve OAuth App Access Policies.",
  "mcpIntegrations.catalog.slack.description":
    "Søk i Slack-samtaler og utfør handlinger i arbeidsområdet gjennom integrasjonen.",
  "mcpIntegrations.catalog.slack.useCase":
    "Meldinger, kanaler, personer, bedriftens hukommelse, arbeidsflyter",
  "mcpIntegrations.catalog.slack.setupNote":
    "Slack-integrasjonen krever en registrert Slack-app med fast app-ID. Dynamisk klientregistrering støttes ikke, og bare apper fra Slack Marketplace eller interne apper kan koble til. Bruk Slacks administrerte OAuth-flyt for meldinger i Agent-Native-arbeidsflyter.",
  "mcpIntegrations.catalog.asana.description":
    "Søk i og administrer oppgaver, prosjekter og arbeidsgrafdata i Asana.",
  "mcpIntegrations.catalog.asana.useCase":
    "Oppgaver, prosjekter, porteføljer, planlegging, arbeidsbelastning",
  "mcpIntegrations.catalog.asana.setupNote":
    "Asanas agentintegrasjon krever en forhåndsregistrert OAuth-app og støtter ikke dynamisk klientregistrering. Konfigurer en klient for en Asana-app før du kobler til.",
  "mcpIntegrations.catalog.hubspot.description":
    "Søk i og oppdater CRM-oppføringer i HubSpot gjennom integrasjonen.",
  "mcpIntegrations.catalog.hubspot.useCase":
    "CRM, kontakter, selskaper, avtaler, saker, kundeanalyse",
  "mcpIntegrations.catalog.hubspot.setupNote":
    "Når en HubSpot MCP Auth App administrert av arbeidsområdet er konfigurert, kan alle medlemmer koble til en personlig HubSpot-konto med OAuth og PKCE. Ellers oppretter du appen i HubSpot Developer Platform før du kobler til; den eksisterende OAuth-koblingen for HubSpot er fortsatt tilgjengelig for apphandlinger.",
  "mcpIntegrations.catalog.pylon.description":
    "Søk i og oppdater supportdata i Pylon.",
  "mcpIntegrations.catalog.pylon.useCase":
    "Kundestøtte, saker, kontoer, kontakter, samtaler",
  "mcpIntegrations.catalog.pylon.setupNote":
    "Aktiver MCP-tilgang i Pylon for de aktuelle brukerne, og slå på MCP-serveren i Pylon før du kobler til. Pylon krever en Member- eller Admin-lisens og bruker bare bruker-OAuth.",
  "mcpIntegrations.catalog.intercom.description":
    "Søk i samtaler og kunnskap fra kundestøtte.",
  "mcpIntegrations.catalog.intercom.useCase":
    "Kundestøtte, samtaler, kontakter, innhold i hjelpesenteret",
  "mcpIntegrations.catalog.intercom.setupNote":
    "Intercom-integrasjonen bruker OAuth og er tilgjengelig for arbeidsområder som driftes i USA. Bekreft arbeidsområdets region og de forespurte omfangene under autoriseringen.",
  "mcpIntegrations.catalog.monday.description":
    "Jobb med tavler, elementer og teamets arbeidsflyter.",
  "mcpIntegrations.catalog.monday.useCase":
    "Arbeidsstyring, tavler, prosjekter, oppgaver, teamdrift",
  "mcpIntegrations.catalog.monday.setupNote":
    "monday.com-integrasjonen bruker OAuth over Streamable HTTP. Velg arbeidsområdet og tillatelsene som skal deles under autoriseringen.",
  "mcpIntegrations.catalog.webflow.description":
    "Les og oppdater nettsteder og innhold i Webflow.",
  "mcpIntegrations.catalog.webflow.useCase":
    "Nettsteder, CMS, nettstedsinnhold, publisering, designarbeidsflyter",
  "mcpIntegrations.catalog.webflow.setupNote":
    "Webflow-integrasjonen bruker OAuth. Designer-funksjoner kan installere Webflows Bridge App under autoriseringen; tilgang til Data API er tilgjengelig separat.",
  "mcpIntegrations.catalog.paypal.description":
    "Jobb med betalinger, fakturaer og handelsdata fra PayPal.",
  "mcpIntegrations.catalog.paypal.useCase":
    "Betalinger, fakturaer, transaksjoner, forhandlerdrift",
  "mcpIntegrations.catalog.paypal.setupNote":
    "PayPal tilbyr OAuth-oppdagelse og innlogging for den eksterne agentintegrasjonen sin. Agent-Native bruker /sse-endepunktet som er aktivt nå; gå gjennom forhandlertillatelsene før du autoriserer.",
  "mcpIntegrations.catalog.box.description":
    "Søk i og administrer filer og mapper i Box.",
  "mcpIntegrations.catalog.box.useCase":
    "Filer, mapper, bedriftsinnhold, søk, samarbeid",
  "mcpIntegrations.catalog.box.setupNote":
    "Box-integrasjonen er i beta og krever at en administrator aktiverer den. Egendefinerte klienter trenger også Box Integration Credentials, en omdirigerings-URI og godkjente omfang.",
  "mcpIntegrations.catalog.builder.description":
    "Søk i innhold i Builder Publish og Hybrid Space.",
  "mcpIntegrations.catalog.builder.useCase":
    "Innholdsmodeller, sider, oppføringer, Publish og Hybrid Spaces",
  "mcpIntegrations.catalog.builder.setupNote":
    "Builder CMS MCP bruker OAuth med dynamisk klientregistrering. Det kobles bare til Publish eller Hybrid Spaces, og autoriseringsflyten ber deg velge Space.",
  "mcpIntegrations.catalog.netlify.description":
    "Undersøk og betjen nettsteder og utrullinger i Netlify.",
  "mcpIntegrations.catalog.netlify.useCase":
    "Nettsteder, utrullinger, bygg, domener, hostingdrift",
  "mcpIntegrations.catalog.netlify.setupNote":
    "Netlify dokumenterer et oppsett for ekstern integrasjon for støttede klienter. Gå gjennom tillatelsene for nettsted og team før du fullfører OAuth.",
  "mcpIntegrations.catalog.zapier.description":
    "Koble verktøy til tusenvis av apphandlinger.",
  "mcpIntegrations.catalog.zapier.useCase":
    "Automatisering, arbeidsflyter, apphandlinger, operasjoner på tvers av tjenester",
  "mcpIntegrations.catalog.zapier.setupNote":
    "Zapiers agentintegrasjon bruker en brukeropprettet tilkobling og et token for klienter som ikke er oppført. Opprett tilkoblingen i Zapier, og lim deretter inn det genererte bearer-tokenet i header-feltet.",
  "mcpIntegrations.auth.none": "Ingen autentisering",
  "mcpIntegrations.auth.headers": "Header",
  "mcpIntegrations.auth.oauth": "OAuth",
  "mcpIntegrations.status.beta": "Beta",
  "mcpIntegrations.status.setupRequired": "Leverandøroppsett",
  "mcpIntegrations.status.clientRestricted": "Bare godkjente klienter",
  "mcpIntegrations.status.verified": "Verifisert",
  "mcpIntegrations.status.preflightOnly": "Bare forhåndssjekk",
  "mcpIntegrations.status.restricted": "Begrenset",
  "connection.connecting": "Kobler til…",
  "connection.notNow": "Ikke nå",
  "connection.failed": "Tilkoblingen mislyktes",
  "connection.adminRequired":
    "Be en administrator av arbeidsområdet om å koble til denne tjenesten.",
  "limit.account": "kontoen din",
  "limit.descriptionAll":
    "Agenten brukte alle tilgjengelige steg. Fortsett i en ny tur, eller hev grensen for {{scope}} først.",
  "limit.descriptionWithCount":
    "Agenten brukte {{formattedCount}} steg. Fortsett i en ny tur, eller hev grensen for {{scope}} først.",
  "limit.descriptionWithCount_one":
    "Agenten brukte {{formattedCount}} steg. Fortsett i en ny tur, eller hev grensen for {{scope}} først.",
  "limit.descriptionWithCount_other":
    "Agenten brukte {{formattedCount}} steg. Fortsett i en ny tur, eller hev grensen for {{scope}} først.",
  "limit.keepGoing": "Fortsett",
  "limit.maxSteps": "Maks antall steg",
  "limit.namedOrganization": "organisasjonen {{organization}}",
  "limit.organization": "organisasjon",
  "limit.ownerOnly":
    "Bare eiere og administratorer i organisasjonen kan endre denne grensen.",
  "limit.reached": "Steggrensen er nådd",
  "limit.saveAndContinue": "Lagre og fortsett",
  "message.actions": "Meldingshandlinger",
  "message.copyMessage": "Kopier meldingen",
  "message.copyRequestId": "Kopier forespørsels-ID",
  "message.requestIdUnavailable": "Forespørsels-ID er utilgjengelig",
  "message.unavailable":
    "Meldingen er ikke lenger tilgjengelig i denne samtalen.",
  "message.navigationUnavailable":
    "Navigering i samtalen er ikke tilgjengelig.",
  "message.edit": "Rediger meldingen",
  "message.forkChat": "Forgren samtalen",
  "message.mobileInteractiveTitle": "Interaktivt innhold",
  "message.mobileInteractiveDescription":
    "Denne interaktive visningen er tilgjengelig i nettsamtalen, men ikke i den innebygde appen ennå.",
  "message.missingFinal":
    "Agenten stoppet uten å sende en avsluttende melding. Be den fortsette eller prøv igjen.",
  "message.messages": "Meldinger",
  "message.nextBranch": "Neste gren",
  "message.noRestoreRun":
    "Denne meldingen har ingen kjøring å gjenopprette til.",
  "message.previousBranch": "Forrige gren",
  "message.regenerate": "Generer svaret på nytt",
  "message.restoreFailed": "Gjenopprettingen mislyktes ({{status}}).",
  "message.restoreQuestion": "Gjenopprette til her?",
  "message.revertQuestion":
    "Vil du tilbakestille til dette punktet? Endringer gjort etter dette punktet går tapt.",
  "message.restoreRequestFailed": "Forespørselen om gjenoppretting mislyktes.",
  "message.historyUnavailable": "Kunne ikke laste inn endringshistorikken.",
  "message.threadNotFound":
    "Denne samtaletråden er ikke lenger tilgjengelig. Start en ny samtale, eller prøv igjen hvis dette var uventet.",
  "message.restoring": "Gjenoppretter ...",
  "message.revertHere": "Tilbakestill til her",
  "message.revertToBeginning": "Tilbakestill til begynnelsen",
  "message.sentAt": "Sendt {{time}}",
  "contextMeter.ariaLabel":
    "Kontekst {{percent}} %, {{totalTokens}}{{breakdown}}. Åpne kontekstrøntgen.",
  "contextMeter.breakdown":
    " totalt: {{systemTokens}} system + {{conversationTokens}} samtale",
  "contextMeter.summary": "Kontekst {{percent}} % · {{totalTokens}}",
  "contextMeter.summaryBreakdown":
    " ({{systemTokens}} system + {{conversationTokens}} samtale)",
  "contextXray.advisory": "veiledende",
  "contextXray.conversation": "{{count}} samtale",
  "contextXray.currentStatus": "gjeldende status",
  "contextXray.estimated": "anslått",
  "contextXray.estimatedPrefix": " anslått",
  "contextXray.estimatedSuffix": " · anslått",
  "contextXray.evict": "Kast ut",
  "contextXray.evicted": "{{count}} utkastet",
  "contextXray.evictSegment": "Kast ut segmentet",
  "contextXray.framework": "rammeverk",
  "contextXray.free": "{{count}} ledig",
  "contextXray.governance.inherited": "Arvet",
  "contextXray.governance.required": "Påkrevd",
  "contextXray.governance.user": "Konteksten din",
  "contextXray.groups.conversation": "Samtale",
  "contextXray.groups.evicted": "Utkastet",
  "contextXray.groups.filesRead": "Leste filer",
  "contextXray.groups.pinned": "Festet",
  "contextXray.groups.taskInstructions": "Oppgave og instruksjoner",
  "contextXray.groups.thinking": "Tenking",
  "contextXray.groups.toolResults": "Verktøyresultater",
  "contextXray.inspect": "Inspiser {{name}}",
  "contextXray.list": "Liste",
  "contextXray.loading": "Laster kontekst ...",
  "contextXray.map": "Kart",
  "contextXray.messageIndex": "meldingsindeks",
  "contextXray.noActiveSegments": "Ingen aktive segmenter",
  "contextXray.panelTitle": "Kontekstrøntgen",
  "contextXray.partIndex": "delindeks",
  "contextXray.pin": "Fest",
  "contextXray.pinned": "{{count}} festet",
  "contextXray.pinSegment": "Fest segmentet",
  "contextXray.protectedDescription":
    "Dette segmentet er en del av den aktive turen og kan ikke kastes ut ennå.",
  "contextXray.protectedDuringTurn": "Beskyttet under aktiv tur",
  "contextXray.recordEvictionIntent": "Registrer utkastingshensikt",
  "contextXray.restore": "Gjenopprett",
  "contextXray.restoreSegment": "Gjenopprett segmentet",
  "contextXray.segment": "Segment",
  "contextXray.showList": "Vis kontekstlisten",
  "contextXray.showMap": "Vis kontekstkartet",
  "contextXray.status.active": "Aktiv",
  "contextXray.status.evicted": "Utkastet",
  "contextXray.status.pinned": "Festet",
  "contextXray.status.protected": "Beskyttet",
  "contextXray.status.summarized": "Oppsummert",
  "contextXray.system": "{{count}} system",
  "contextXray.systemOrdered": "System · sortert, kan ikke kastes ut",
  "contextXray.tokens": "tokener",
  "contextXray.tokensShare": "tokener · {{share}} %",
  "contextXray.unpin": "Løsne",
  "contextXray.unpinSegment": "Løsne segmentet",
  "plan.act": "Handle",
  "plan.implement": "Gjennomfør",
  "plan.mode": "Planmodus",
  "plan.ready": "Planen er klar",
  "plan.switchToAct": "Bytt til handlingsmodus",
  "queue.count": "{{count}} i kø",
  "queue.label": "Meldinger i kø",
  "queue.followUp": "Send en oppfølging ...",
  "queue.followUpWithCount": "{{count}} i kø – send en oppfølging ...",
  "queue.remove": "Fjern fra køen",
  "queue.sendNow": "Send nå",
  "queue.sendNowHint": "Send nå (stopper det gjeldende svaret)",
  "queue.steer": "Styr",
  "queue.steerHint": "Send denne meldingen som neste",
  "queue.moreActions": "Flere handlinger",
  "queue.moveToTop": "Flytt øverst",
  "recovery.connectingBuilder": "Setter opp Builder.io",
  "recovery.copyDebug": "Kopier feilsøkingsdata",
  "recovery.copyFailed": "Kopieringen mislyktes",
  "recovery.retryAttachmentUnavailable":
    "Denne forespørselen inneholdt en fil som ikke kan sendes på nytt. Legg den ved igjen i meldingsfeltet, og prøv på nytt.",
  "recovery.deferredSubmissionFailed":
    "Denne meldingen kunne ikke sendes. Sjekk tilkoblingen eller samtaleoppsettet, og prøv igjen.",
  "recovery.credentialRejected":
    "Modelleverandøren avviste den lagrede legitimasjonen. Oppdater Builder.io-tilkoblingen eller leverandørnøkkelen, og prøv denne meldingen på nytt.",
  "codeRequired.builderAgentNotConnected":
    "Builder Cloud Agents er ikke tilkoblet. Bruk Builder.io i Oppsett for å kjøre denne vertsbaserte kodeendringen. Nøkler til modelleverandører fungerer fortsatt for samtaler og andre KI-funksjoner, men de autoriserer ikke Builder Cloud Agent.",
  "recovery.diagnoseRetry": "Diagnostiser og prøv igjen",
  "recovery.forkDescription": "Forgren denne samtalen til en egen samtaletråd.",
  "recovery.forkFailed":
    "Kunne ikke forgrene denne samtalen. Prøv å starte en ny samtale.",
  "recovery.forking": "Forgrener ...",
  "recovery.newChatHint":
    "Hvis nytt forsøk gir samme feil, start en ny samtaleøkt og fortsett fra det som allerede er endret.",
  "recovery.backgroundTimeout":
    "Den forrige bakgrunnskjøringen av agenten nådde tidsgrensen før den ble ferdig. Det delvise arbeidet ble bevart; fortsett eller prøv igjen for å ta opp tråden herfra.",
  "recovery.noProgress":
    "Den forrige agentkjøringen sluttet å vise synlig framdrift under gjenoppretting, så den ble stoppet før den kunne fortsette å gå i løkke.",
  "recovery.stuckTitle": "Denne samtalen ser ut til å ha stoppet opp.",
  "recovery.stuckNoProgress":
    "Ingen fremdrift. Agenten kan ha truffet et tidsavbrudd på serveren eller mistet tilkoblingen.",
  "recovery.stuckWithDuration":
    "Ingen fremdrift på {{seconds}} s. Agenten kan ha truffet et tidsavbrudd på serveren eller mistet tilkoblingen.",
  "recovery.stuckRetrying": "Prøver automatisk på nytt nå.",
  "recovery.statusCheckFailed":
    "Kunne ikke nå serveren for å sjekke om agenten fortsatt jobber. Send meldingen din på nytt for å prøve igjen.",
  "recovery.streamEnded":
    "Den forrige agentstrømmen ble avsluttet mens kjøringen var i gjenoppretting. Fortsett eller prøv igjen for å koble til kjøringen på nytt.",
  "recovery.reconnectBuilder": "Bruk Builder.io",
  "secrets.addCustomKeyNamed": "Legg til «{{name}}» som egendefinert nøkkel",
  "secrets.chooseKey": "Velg en nøkkel",
  "secrets.customKey": "Egendefinert nøkkel",
  "secrets.customKeyHint": "Legg til en hvilken som helst nøkkel etter navn",
  "secrets.emptyHint": "Legg til en nøkkel for å bruke dine egne kontoer.",
  "secrets.emptyMore":
    "og {{count}} til under Ny, eller legg til en egendefinert nøkkel",
  "secrets.emptyTitle": "Ingen nøkler ennå.",
  "secrets.fromEnvironment": "Levert av utrullingsmiljøet.",
  "secrets.managedInVault":
    "Administreres i arbeidsområdets Vault. Alle apper i dette arbeidsområdet bruker denne verdien.",
  "secrets.openVault": "Åpne Vault",
  "secrets.managedByOwner": "Administreres i {{owner}}",
  "secrets.removeCredentials": "Fjern legitimasjon",
  "secrets.confirmRemove": "Fjern",
  "secrets.sharedKeysKept":
    "Noen delte nøkler ble ikke fjernet. Bare administratorer av arbeidsområdet kan fjerne dem.",
  "secrets.newKey": "Ny",
  "secrets.noKeysFound": "Fant ingen nøkler.",
  "secrets.overridesVault":
    "Denne personlige nøkkelen overstyrer verdien i arbeidsområdets Vault. Fjern den for å bruke Vault-nøkkelen.",
  "secrets.overridesWorkspace":
    "Denne personlige nøkkelen overstyrer arbeidsområdets verdi. Fjern den for å bruke den delte nøkkelen.",
  "secrets.setForWorkspace": "Angitt for alle i dette arbeidsområdet.",
  "secrets.sourceEnvironment": "Miljø",
  "secrets.sourceVault": "Vault",
  "secrets.sourceWorkspace": "Arbeidsområde",
  "secrets.statusUnavailable": "Ikke tilgjengelig",
  "secrets.required": "Påkrevd",
  "secrets.searchKeys": "Søk i nøkler ...",
  "secrets.usePersonalKey": "Bruk en personlig nøkkel i stedet",
  "selection.attached": "{{formattedCount}} tegn av utvalget er lagt ved",
  "selection.attached_one": "{{formattedCount}} tegn av utvalget er lagt ved",
  "selection.attached_other": "{{formattedCount}} tegn av utvalget er lagt ved",
  "selection.clear": "Tøm utvalgskonteksten",
  "setup.addOwnKeys": "Legg til egne nøkler",
  "setup.builderCredits":
    "Builder.io inkluderer gratiskreditt, eller du kan bruke din egen API-nøkkel.",
  "setup.builderOrOwnKeys":
    "Bruk Builder.io (gratiskreditt), eller legg til egne leverandørnøkler.",
  "setup.connectAi": "Koble til KI",
  "setup.connectBuilder": "Bruk Builder.io",
  "setup.connectionsDescription":
    "Administrer oppsettsstatus, Builder.io-tilgang, apphemmeligheter og arbeidsområdetilkoblinger fra ett felles sted.",
  "setup.connectPlaceholder": "Koble til KI for å begynne å chatte ...",
  "setup.connectToChat": "Koble til KI for å chatte",
  "setup.connectToStart": "Koble til KI for å begynne å chatte",
  "setup.modelListUnavailable": "Kunne ikke laste inn modeller.",
  "setup.providerStatusUnavailable": "Kunne ikke bekrefte at KI er klar.",
  "agentNativeClips.meetingAsk.placeholder": "Spør om hva som helst",
  "agentNativeClips.meetingAsk.ariaLabel":
    "Spør om hva som helst om dette møtet",
  "setup.connected": "Tilkoblet",
  "setup.connectedOrganization": "Tilkoblet – {{organization}}",
  "setup.connectedTo": "Tilkoblet {{organization}}",
  "setup.freeCredits":
    "Gratis kreditt for LLM, hosting og mer – ingen API-nøkkel nødvendig",
  "setup.keyProvider": "Leverandør av API-nøkkel",
  "setup.keySaveFailed": "Kunne ikke lagre nøkkelen.",
  "setup.storedSecurely": "Lagret trygt for bare denne appen.",
  "share.add": "Legg til",
  "share.addPeopleEmail": "Legg til personer med e-post",
  "share.addPeopleOrganization": "Legg til personer fra organisasjonen din",
  "share.admin": "Administrator",
  "share.adminDescription": "Kan redigere og administrere tilgang",
  "share.commenter": "Kommentator",
  "share.commenterDescription": "Kan se og legge til kommentarer",
  "share.advanced": "Avansert",
  "share.advancedAccess": "Avansert tilgang",
  "share.advancedDescription": "Styr hvordan organisasjonstilgang vises i søk.",
  "share.copied": "Kopiert",
  "share.copy": "Kopier",
  "share.shareWithAgents": "Del med agenter",
  "share.agentContext": "Kontekstlenke for agent",
  "share.agentContextDescription":
    "Skrivebeskyttet kontekst for en ekstern agent.",
  "share.preparingAgentLink": "Forbereder agentlenke ...",
  "share.agentLinkUnavailable": "Kunne ikke opprette agentlenken.",
  "share.retryAgentLink": "Prøv igjen",
  "share.editor": "Redaktør",
  "share.editorDescription": "Kan redigere",
  "share.generalAccess": "Generell tilgang",
  "share.hideInSearch": "Skjul i søk",
  "share.linkCanStillOpen": "Personer med lenken kan fortsatt åpne dette.",
  "share.loading": "Laster ...",
  "share.loadMore": "Last inn mer",
  "share.loadFailed": "Kunne ikke laste delingsinnstillingene.",
  "share.loadPeopleFailed": "Kunne ikke laste personer.",
  "share.noAccess": "Ingen har tilgang ennå.",
  "share.noMatches": "Ingen treff.",
  "share.noPeopleFound": "Fant ingen personer.",
  "share.notifyPeople": "Varsle personer",
  "share.message": "Melding",
  "share.addMessage": "Legg til en melding",
  "share.hideMessage": "Skjul meldingen",
  "share.messagePlaceholder": "Legg til en kort merknad (valgfritt)",
  "share.organization": "Organisasjon",
  "share.organizationDescription": "Alle i organisasjonen din kan se",
  "share.owner": "Eier",
  "share.peopleWithAccess": "Personer med tilgang",
  "share.people": "Personer",
  "share.agents": "Agenter",
  "share.private": "Privat",
  "share.privateDescription": "Bare personer med tilgang kan se",
  "share.public": "Offentlig",
  "share.publicDescription": "Alle med lenken kan se",
  "share.remove": "Fjern",
  "share.role": "Rolle",
  "share.searching": "Søker ...",
  "share.share": "Del",
  "share.shareLink": "Delingslenke",
  "share.shareOptions": "Delingsvalg",
  "share.titleWithResource": "Del «{{title}}»",
  "share.titleWithType": "Del {{type}}",
  "share.triggerWithVisibility": "Del ({{visibility}})",
  "share.unknownPerson": "Ukjent person",
  "share.viewer": "Leser",
  "share.viewerDescription": "Kan se",
  "share.userGroup": "Brukergruppe",
  "status.resuming": "Gjenopptar",
  "status.stillWorking": "Jobber fortsatt",
  "status.thinking": "Tenker",
  "status.working": "Jobber",
  "status.workingFor": "Jobber i {{duration}}",
  "shell.chat": "Samtale",
  "shell.loadingTerminal": "Laster terminalen ...",
  "shell.toggleAgent": "Slå agenten av eller på",
  "status.contactingModel": "Kontakter modellen",
  "status.starting": "Starter {{activity}} ...",
  "status.preparing": "Forbereder {{activity}} ...",
  "status.writing": "Skriver {{activity}} ...",
  "status.stillGenerating": "Genererer fortsatt {{activity}}",
  "status.runningTool": "Kjører {{activity}}",
  "tabs.allChats": "Alle samtaler",
  "tabs.closeTab": "Lukk fanen",
  "tabs.main": "Hoved",
  "tabs.newChat": "Ny samtale",
  "tabs.subAgent": "Underagent ...",
  "tool.askedAgent": "Spurte {{agent}}",
  "tool.askingAgent": "Spør {{agent}} ...",
  "tool.elapsed": "{{duration}} er gått",
  "tool.askingAgentFailed": "Feil ved spørring til {{agent}}",
  "tool.failedWithoutDetails": "Ingen feildetaljer er tilgjengelige.",
  "tool.input": "Inndata",
  "tool.inputWithLabel": "Inndata – {{label}}",
  "tool.interrupted":
    "Avbrutt før dette rapporterte ferdig – det kan ha blitt fullført eller ikke. Sjekk før du prøver igjen.",
  "tool.longRunning":
    "Jobber fortsatt. Store oppdateringer kan ta ett par minutter.",
  "tool.ranTools": "Kjørte {{count}} verktøy",
  "tool.ranTools_one": "Kjørte {{count}} verktøy",
  "tool.ranTools_other": "Kjørte {{count}} verktøy",
  "tool.rawOutput": "Rå utdata fra verktøykallet {{tool}}",
  "tool.repeated": "Gjentatt {{count}} ganger",
  "tool.result": "Resultat",
  "tool.subAgentTask": "Underagentoppgave",
  "thinking.collapsed": "Skjult",
  "thinking.display": "Tenking",
  "thinking.expanded": "Utvidet",
  "thinking.hidden": "Ikke vist",
  "tool.thought": "Tenkte",
  "tool.thoughtFor": "Tenkte i {{duration}}",
  "tool.viewOutput": "Vis utdata fra {{tool}}",
  "tool.worked": "Jobbet",
  "tool.workedFor": "Jobbet i {{duration}}",
  "widget.chart": "Diagram",
  "widget.dataChart": "Datadiagram",
  "widget.dataInsights": "Datainnsikt",
  "widget.dataTable": "Datatabell",
  "widget.downloadCsv": "Last ned CSV",
  "widget.connectProvider": "Koble til {{provider}}",
  "widget.loadingToolResult": "Laster verktøyresultatet",
  "widget.actionOpen": "Åpne",
  "widget.actionBestSharedTime": "Beste felles tidspunkt",
  "widget.actionUseThisTime": "Bruk dette tidspunktet",
  "widget.actionReview": "Gå gjennom / rediger",
  "widget.actionDraftSaved": "Lagret i utkast",
  "widget.actionScheduledEmail": "Planlagt e-post",
  "widget.actionBookingLink": "Bookinglenke",
  "widget.actionDurationMinutes": "{{count}} min",
  "widget.actionDraftSavedDetail": "Lagret i utkast · {{recipient}}",
  "widget.actionUndo": "Angre",
  "widget.actionUndoing": "Angrer…",
  "widget.actionUndoFailed": "Kunne ikke angre",
  "widget.actionUndoUnknown": "Angrestatus ukjent",
  "widget.actionChanges": "{{count}} endringer",
  "widget.actionChanges_one": "{{count}} endring",
  "widget.actionChanges_other": "{{count}} endringer",
  "widget.actionStatus.suggested": "Foreslått",
  "widget.actionStatus.created": "Opprettet",
  "widget.actionStatus.draft": "Utkast",
  "widget.actionStatus.draftReview": "Venter på gjennomgang",
  "widget.actionStatus.updated": "Oppdatert",
  "widget.actionStatus.deleted": "Slettet",
  "widget.actionStatus.sent": "Sendt",
  "widget.actionStatus.scheduled": "Planlagt",
  "widget.actionStatus.enabled": "Aktivert",
  "widget.actionStatus.disabled": "Deaktivert",
  "widget.actionStatus.undone": "Angret",
  "widget.preferenceAutomatic": "Automatisk",
  "widget.appearancePreset.default": "Standard",
  "widget.appearancePreset.warm": "Varm",
  "widget.appearancePreset.ocean": "Hav",
  "widget.appearancePreset.forest": "Skog",
  "widget.appearancePreset.rose": "Rosa",
  "widget.appearancePreset.slate": "Skifer",
  "widget.noRows": "Ingen rader",
  "widget.points": "{{formattedCount}} punkter",
  "widget.points_one": "{{formattedCount}} punkt",
  "widget.points_other": "{{formattedCount}} punkter",
  "widget.rows": "{{formattedCount}} rader",
  "widget.rows_one": "{{formattedCount}} rad",
  "widget.rows_other": "{{formattedCount}} rader",
  "widget.sampled": "utvalg",
  "settings.emailTitle": "E-post",
  "settings.emailChange": "Endre e-postadresse",
  "settings.emailChanging": "Sender ...",
  "settings.emailChangeSent":
    "Sjekk e-posten din for instruksjoner om hvordan du bekrefter endringen.",
  "settings.emailChangeError": "Kunne ikke sende bekreftelse.",
  "settings.emailNewLabel": "Ny e-postadresse",
  "settings.emailNewPlaceholder": "Skriv inn ny e-postadresse",
  "usage.builderCredits": "Builder-kreditter",
  "featureFlags.builderCreditReferrals.name": "Verving med Builder-kreditter",
  "featureFlags.builderCreditReferrals.description":
    "Vis vervingsdetaljer for det tilkoblede Builder-arbeidsområdet under Bruk.",
  "usage.inviteFriends": "Inviter venner",
  "usage.inviteCredits":
    "Tjen {{amount}} Builder-kreditter når en venn tegner abonnement.",
  "usage.copyInviteLink": "Kopier invitasjonslenke",
  "usage.inviteLinkCopied": "Invitasjonslenken er kopiert",
  "usage.creditBalance": "Arbeidsområdets saldo",
  "usage.monthlyLimit": "Månedlig grense",
  "usage.dailyDefaultLimit": "Standard daglig grense",
  "usage.creditUsedOfLimit": "{{used}} av {{limit}} brukt",
  "usage.creditRemaining": "{{amount}} gjenstår",
  "usage.creditUsageUnavailable":
    "Kunne ikke laste inn bruken av Builder-kreditter.",
  "usage.estimatedBuilderCredits": "~{{amount}} estimerte kreditter",
  "usage.otherUsdSpend": "{{amount}} annet i USD",
  "usage.noBuilderCredits": "0 Builder-kreditter",
  "usage.otherUnclassifiedSpend": "Annet eller uklassifisert forbruk i USD",
  "usage.providerSpendDetail":
    "Leverandørkall eller eldre kall utenfor Builder-fakturering",
  "usage.providerSpendToday":
    "Annen eller uklassifisert bruk: {{amount}} i dag",
  "observability.insights.verdictSmooth": "Går knirkefritt",
  "observability.insights.verdictLook_one":
    "{{count}} ting det er verdt å se på",
  "observability.insights.verdictLook_other":
    "{{count}} ting det er verdt å se på",
  "observability.insights.verdictProblems_one": "{{count}} problem",
  "observability.insights.verdictProblems_other": "{{count}} problemer",
  "observability.insights.spentSummary_one":
    "{{amount}} brukt på {{count}} forespørsel de siste {{days}} dagene.",
  "observability.insights.spentSummary_other":
    "{{amount}} brukt på {{count}} forespørsler de siste {{days}} dagene.",
  "observability.insights.handledLabel": "Håndtert av Agent-Native:",
  "observability.insights.handledHeading": "Håndtert av Agent-Native",
  "observability.insights.handledParallel":
    "Kjørte {{count}} verktøykall samtidig, omtrent {{duration}} raskere enn ett om gangen.",
  "observability.insights.handledRecovered_one":
    "Hentet seg inn etter {{count}} verktøyfeil uten å stoppe.",
  "observability.insights.handledRecovered_other":
    "Hentet seg inn etter {{count}} verktøyfeil uten å stoppe.",
  "observability.insights.avgPerPrompt": "Gjennomsnitt per forespørsel",
  "observability.insights.completed": "Fullført",
  "observability.insights.completedDetail": "{{done}} av de siste {{total}}",
  "observability.insights.completedRecovered_one":
    "{{done}} av de siste {{total}}, etter å ha hentet seg inn etter {{count}} verktøyfeil",
  "observability.insights.completedRecovered_other":
    "{{done}} av de siste {{total}}, etter å ha hentet seg inn etter {{count}} verktøyfeil",
  "observability.insights.typicalTime": "Typisk tid",
  "observability.insights.median": "median",
  "observability.insights.sampleNote":
    "Fullføring, typisk tid, hva Agent-Native håndterte, og funnene bruker de siste {{shown}} av {{total}} forespørsler.",
  "observability.insights.changeSame": "samme som perioden før",
  "observability.insights.changeUp": "↑ {{percent}} % mot perioden før",
  "observability.insights.changeDown": "↓ {{percent}} % mot perioden før",
  "observability.insights.kindProblem": "Problem",
  "observability.insights.kindSaving": "Kan spare",
  "observability.insights.kindInfo": "Greit å vite",
  "observability.insights.fixLabel": "Løsning:",
  "observability.insights.openPrompt": "Åpne forespørselen",
  "observability.insights.seePrompts_one": "Se {{count}} forespørsel",
  "observability.insights.seePrompts_other": "Se de {{count}} forespørslene",
  "observability.insights.erroredTitle_one":
    "{{count}} forespørsel endte med en feil",
  "observability.insights.erroredTitle_other":
    "{{count}} forespørsler endte med en feil",
  "observability.insights.erroredBody": "Agenten stoppet før den ble ferdig.",
  "observability.insights.erroredFix":
    "Åpne en forespørsel for å se det siste den gjorde før den stoppet.",
  "observability.insights.toolFailedTitle_one":
    "Verktøyet {{tool}} feilet i {{count}} forespørsel",
  "observability.insights.toolFailedTitle_other":
    "Verktøyet {{tool}} feilet i {{count}} forespørsler",
  "observability.insights.toolFailedSaid": "Det sa: «{{error}}»",
  "observability.insights.toolFailedGeneric": "Verktøyet rapporterte en feil.",
  "observability.insights.toolRecoveredAll":
    "Agenten hentet seg inn og ble ferdig hver gang.",
  "observability.insights.toolRecoveredSome":
    "Agenten hentet seg inn og ble ferdig i {{count}} av dem.",
  "observability.insights.restartTitle":
    "Å starte på nytt kostet omtrent {{amount}} ({{percent}} % av forbruket)",
  "observability.insights.restartBody":
    "I {{count}} av {{total}} nylige forespørsler sendte agenten hele samtalen på nytt etter {{reason}}, i stedet for å gjenbruke det den allerede hadde sendt.",
  "observability.insights.reasonToolLookup": "at den plukket opp nye verktøy",
  "observability.insights.reasonPrefixChanged":
    "at noe i starten av instruksjonene ble endret",
  "observability.insights.fixToolLookup":
    "Forhåndslast verktøyene denne appen bruker med initialToolNames, slik at verktøylisten er den samme gjennom hele forespørselen.",
  "observability.insights.fixPrefixChanged":
    "Hold innhold som endrer seg, som tidsstempler eller tilstand per steg, utenfor systemprompten.",
  "observability.insights.priciestTitle":
    "Én forespørsel sto for {{percent}} % av det nylige forbruket",
  "observability.insights.priciestBody_one":
    "«{{prompt}}» kostet {{amount}} over {{count}} steg.",
  "observability.insights.priciestBody_other":
    "«{{prompt}}» kostet {{amount}} over {{count}} steg.",
  "observability.insights.untitledPrompt": "Forespørsel uten tittel",
  "observability.insights.promptsHeading": "Forespørsler",
  "observability.insights.showing": "Viser {{count}}",
  "observability.insights.sortNewest": "Nyeste",
  "observability.insights.sortCost": "Dyreste",
  "observability.insights.emptyPrompts":
    "Ingen forespørsler i denne perioden ennå. De dukker opp her noen sekunder etter at de er ferdige.",
  "observability.insights.promptNotSaved":
    "Forespørselsteksten ble ikke lagret",
  "observability.insights.ratedHelpful": "Vurdert som nyttig",
  "observability.insights.ratedUnhelpful": "Vurdert som lite nyttig",
  "observability.insights.notRated": "Ikke vurdert",
  "observability.insights.stoppedWithError": "Stoppet med en feil",
  "observability.insights.detailsUnavailable":
    "Stegdetaljer er ikke lenger tilgjengelige",
  "observability.insights.answered": "Besvart",
  "observability.insights.finished": "Ferdig",
  "observability.insights.startedOverShort": "startet på nytt {{count}}×",
  "observability.insights.recoveredShort_one":
    "hentet seg inn etter {{count}} verktøyfeil",
  "observability.insights.recoveredShort_other":
    "hentet seg inn etter {{count}} verktøyfeil",
  "observability.insights.toolsFailedShort_one": "{{count}} verktøy feilet",
  "observability.insights.toolsFailedShort_other": "{{count}} verktøy feilet",
  "observability.insights.headerDuration": "på {{duration}}",
  "observability.insights.stepsCount_one": "{{count}} steg",
  "observability.insights.stepsCount_other": "{{count}} steg",
  "observability.insights.whatItDid": "Hva den gjorde:",
  "observability.insights.replyNotSaved":
    "Svarteksten ble ikke lagret for denne forespørselen.",
  "observability.insights.showAll": "Vis alle",
  "observability.insights.showLess": "Vis færre",
  "observability.insights.moreTools": "+{{count}} til",
  "observability.insights.failedSuffix": "feilet",
  "observability.insights.timesCount": "{{label}} ×{{count}}",
  "observability.insights.startedOverNote_one":
    "Startet på nytt {{count}} gang etter {{reason}}. Det kostet omtrent {{amount}} av {{total}}.",
  "observability.insights.startedOverNote_other":
    "Startet på nytt {{count}} ganger etter {{reason}}. Det kostet omtrent {{amount}} av {{total}}.",
  "observability.insights.toolFailedNote_one":
    "Verktøyet {{tool}} feilet {{count}} gang.",
  "observability.insights.toolFailedNote_other":
    "Verktøyet {{tool}} feilet {{count}} ganger.",
  "observability.insights.toolFailedRecoveredNote_one":
    "Verktøyet {{tool}} feilet {{count}} gang, men agenten fortsatte og ble ferdig.",
  "observability.insights.toolFailedRecoveredNote_other":
    "Verktøyet {{tool}} feilet {{count}} ganger, men agenten fortsatte og ble ferdig.",
  "observability.insights.showSteps_one": "Vis {{count}} steg",
  "observability.insights.showSteps_other": "Vis de {{count}} stegene",
  "observability.insights.hideSteps": "Skjul steg",
  "observability.insights.costDetails": "Kostnadsdetaljer og sjekker",
  "observability.insights.turnReply": "Skrev svaret",
  "observability.insights.turnThought": "Tenkte gjennom det",
  "observability.insights.startedOverTag": "startet på nytt",
  "observability.insights.toolFailedTag": "verktøy feilet",
  "observability.insights.turnContext":
    "Sendte {{tokens}} tokener med kontekst, {{percent}} % gjenbrukt fra tidligere.",
  "observability.insights.turnExpired":
    "Den lagrede konteksten hadde utløpt etter en pause, noe som er forventet.",
  "observability.insights.turnOutput": "Skrev {{tokens}} tokener.",
  "observability.insights.turnRestart":
    "Startet på nytt etter {{reason}}, omtrent {{amount}} mer enn å gjenbruke den.",
  "observability.insights.noCacheCompare":
    "Til listepris tok gjenbruk av tidligere kontekst denne forespørselen fra {{noCache}} ned til {{estimated}}.",
  "observability.insights.partReused": "Gjenbrukt kontekst",
  "observability.insights.partSaved": "Lagret i hurtigbuffer",
  "observability.insights.partNew": "Ny kontekst",
  "observability.insights.partOutput": "Skrevet av modellen",
  "observability.insights.checksHeading": "Automatiske sjekker",
  "observability.insights.checksNone": "Ingen ble registrert.",
  "observability.insights.checksGraded": "(vurdert av en modell)",
  "observability.insights.checksNote":
    "Rammeverkets sjekker ser på hvordan kjøringen gikk (feil, steg, hastighet), ikke på om resultatet var bra.",
  "observability.insights.lookedForTools": "Lette etter flere verktøy",
  "observability.insights.prevPrompt": "Forrige forespørsel (K)",
  "observability.insights.nextPrompt": "Neste forespørsel (J)",
  "observability.insights.toolVerb.add": "La til {{object}}",
  "observability.insights.toolVerb.analyze": "Analyserte {{object}}",
  "observability.insights.toolVerb.apply": "Brukte {{object}}",
  "observability.insights.toolVerb.capture": "Fanget {{object}}",
  "observability.insights.toolVerb.check": "Sjekket {{object}}",
  "observability.insights.toolVerb.connect": "Koblet til {{object}}",
  "observability.insights.toolVerb.create": "Opprettet {{object}}",
  "observability.insights.toolVerb.delete": "Slettet {{object}}",
  "observability.insights.toolVerb.duplicate": "Dupliserte {{object}}",
  "observability.insights.toolVerb.edit": "Redigerte {{object}}",
  "observability.insights.toolVerb.export": "Eksporterte {{object}}",
  "observability.insights.toolVerb.fetch": "Hentet {{object}}",
  "observability.insights.toolVerb.find": "Fant {{object}}",
  "observability.insights.toolVerb.generate": "Genererte {{object}}",
  "observability.insights.toolVerb.index": "Indekserte {{object}}",
  "observability.insights.toolVerb.insert": "Satte inn {{object}}",
  "observability.insights.toolVerb.list": "Listet opp {{object}}",
  "observability.insights.toolVerb.move": "Flyttet {{object}}",
  "observability.insights.toolVerb.navigate": "Navigerte {{object}}",
  "observability.insights.toolVerb.open": "Åpnet {{object}}",
  "observability.insights.toolVerb.present": "Presenterte {{object}}",
  "observability.insights.toolVerb.propose": "Foreslo {{object}}",
  "observability.insights.toolVerb.query": "Spurte {{object}}",
  "observability.insights.toolVerb.read": "Leste {{object}}",
  "observability.insights.toolVerb.remove": "Fjernet {{object}}",
  "observability.insights.toolVerb.rename": "Ga nytt navn til {{object}}",
  "observability.insights.toolVerb.reply": "Svarte på {{object}}",
  "observability.insights.toolVerb.resolve": "Løste {{object}}",
  "observability.insights.toolVerb.run": "Kjørte {{object}}",
  "observability.insights.toolVerb.save": "Lagret {{object}}",
  "observability.insights.toolVerb.search": "Søkte i {{object}}",
  "observability.insights.toolVerb.send": "Sendte {{object}}",
  "observability.insights.toolVerb.set": "Angav {{object}}",
  "observability.insights.toolVerb.take": "Tok {{object}}",
  "observability.insights.toolVerb.update": "Oppdaterte {{object}}",
  "observability.insights.toolVerb.upload": "Lastet opp {{object}}",
  "observability.insights.toolVerb.view": "Viste {{object}}",
  "observability.insights.toolVerb.write": "Skrev {{object}}",
  "usage.driverCreditsAndUsd": "Builder-kreditter / USD",
  "billing.builderCreditLimitTitle": "Builder-kredittene dine er brukt opp",
  "billing.builderCreditLimitEmailBody":
    "En KI-forespørsel stoppet fordi den tilkoblede Builder-kontoen din er tom for kreditter. Oppgrader Builder-abonnementet ditt for å fortsette.",
  "billing.builderCreditUpgrade": "Oppgrader abonnement",
  "settings.usage.tabsLabel": "Bruksvisninger",
  "settings.usage.tabOverview": "Oversikt",
  "settings.usage.tabActivity": "Aktivitet",
  "settings.usage.rangeLabel": "Datoperiode",
  "settings.usage.range7": "Siste 7 dager",
  "settings.usage.range30": "Siste 30 dager",
  "settings.usage.range90": "Siste 90 dager",
  "settings.usage.appFilterLabel": "App",
  "settings.usage.allApps": "Alle apper",
  "settings.usage.unattributedApp": "Ikke tilordnet",
  "settings.usage.peopleFilterLabel": "Personer",
  "settings.usage.everyone": "Alle",
  "settings.usage.justYou": "Bare deg",
  "settings.usage.estimatedSpend": "Estimert forbruk",
  "settings.usage.creditSpend": "Forbruk av Builder.io-kreditter",
  "settings.usage.yourEstimatedSpend": "Ditt estimerte forbruk",
  "settings.usage.yourCreditSpend": "Ditt forbruk av Builder.io-kreditter",
  "settings.usage.calls": "Kall",
  "settings.usage.chatgptPlanUsage": "Bruk av ChatGPT-abonnement",
  "settings.usage.tokens": "Tokener",
  "settings.usage.activePeople": "Aktive personer",
  "settings.usage.history": "Brukshistorikk",
  "settings.usage.historyDimensionLabel": "Grupper brukshistorikk",
  "settings.usage.byFeature": "Etter funksjon",
  "settings.usage.byApp": "Etter app",
  "settings.usage.byModel": "Etter modell",
  "settings.usage.bySurface": "Etter flate",
  "settings.usage.historyChartLabel": "Daglig bruk",
  "settings.usage.noUsage": "Ingen bruk i denne perioden.",
  "settings.usage.total": "Totalt",
  "settings.usage.featureChat": "Samtale",
  "settings.usage.featureSubAgents": "Underagenter",
  "settings.usage.featureAutomations": "Automatiseringer",
  "settings.usage.other": "Annet",
  "settings.usage.unknownModel": "Ukjent modell",
  "settings.usage.surfaceApp": "I appen",
  "settings.usage.topChats": "Toppsamtaler",
  "settings.usage.untitledChat": "Samtale uten tittel",
  "settings.usage.titleUnavailable": "Tittelen kunne ikke lastes inn",
  "settings.usage.showAll": "Vis alle",
  "settings.usage.showLess": "Vis færre",
  "settings.usage.topPeople": "Topp-personer",
  "settings.usage.you": "Du",
  "settings.usage.toolCalls": "Verktøykall",
  "settings.usage.toolCallsChartLabel": "Verktøykall per dag",
  "settings.usage.noToolCalls": "Ingen verktøykall i denne perioden.",
  "settings.usage.toolCallsUnavailable": "Verktøykall kunne ikke lastes inn.",
  "settings.usage.modelCalls": "Modellkall",
  "settings.usage.modelCallsDimensionLabel": "Grupper modellkall",
  "settings.usage.modelCallsChartLabel": "Modellkall per dag",
  "settings.usage.noModelCalls": "Ingen modellkall i denne perioden.",
  "settings.usage.recentPrompts": "Nylige forespørsler",
  "settings.usage.promptNotCaptured": "Forespørselen ble ikke registrert",
  "settings.usage.promptUnavailable": "Forespørselen kunne ikke lastes inn",
  "settings.usage.loadError": "Bruken kunne ikke lastes inn.",
  "settings.usage.yourAlerts": "Dine varsler",
  "settings.usage.alertsLoadError": "Varslene kunne ikke lastes inn.",
  "settings.usage.alertDailySpend": "Daglig forbruk",
  "settings.usage.alertMonthlySpend": "Månedlig forbruk",
  "settings.usage.alertDailyTokens": "Daglige tokener",
  "settings.usage.alertMonthlyTokens": "Månedlige tokener",
  "settings.usage.alertOnTrack": "I rute",
  "settings.usage.alertOverLimit": "Over grensen",
  "settings.usage.alertDismissed": "Avvist",
  "settings.usage.alertOff": "Av",
  "settings.usage.alertProgressDay": "{{current}} av {{limit}} i dag",
  "settings.usage.alertProgressMonth": "{{current}} av {{limit}} denne måneden",
  "settings.usage.alertChannelsBoth": "I appen og på e-post",
  "settings.usage.alertChannelInApp": "I appen",
  "settings.usage.alertChannelEmail": "E-post",
  "settings.usage.alertDefault": "Standard",
  "settings.usage.alertEdit": "Rediger",
  "settings.usage.alertDialogTitle": "Varsel for {{name}}",
  "settings.usage.alertThreshold": "Varsle meg ved",
  "settings.usage.alertHintDayAll": "Per dag, på tvers av alle apper.",
  "settings.usage.alertHintMonthAll": "Per måned, på tvers av alle apper.",
  "settings.usage.alertHintDayApp": "Per dag, i {{app}}.",
  "settings.usage.alertHintMonthApp": "Per måned, i {{app}}.",
  "settings.usage.alertNotify": "Varsle",
  "settings.usage.alertEnabled": "Varsel på",
  "settings.usage.alertReset": "Tilbakestill til standard",
  "settings.usage.alertInvalidLimit": "Skriv inn et beløp større enn null.",
  "settings.usage.alertNoChannel": "Velg minst én måte å bli varslet på.",
  "settings.usage.alertSaveError": "Varselet kunne ikke lagres.",
  "settings.usage.unitUsd": "USD",
  "settings.usage.unitCredits": "kreditter",
  "settings.usage.unitTokens": "tokener",
  "settings.usage.creditAmount_one": "{{amount}} kreditt",
  "settings.usage.creditAmount_other": "{{amount}} kreditter",
  "settings.usage.tokenAmount_one": "{{amount}} token",
  "settings.usage.tokenAmount_other": "{{amount}} tokener",
  "settings.storage.provider": "Leverandør",
  "settings.storage.providerOther": "Annen S3-kompatibel",
  "settings.storage.endpoint": "Endepunkt-URL",
  "settings.storage.bucket": "Bøtte",
  "settings.storage.accessKeyId": "Tilgangsnøkkel-ID",
  "settings.storage.secretAccessKey": "Hemmelig tilgangsnøkkel",
  "settings.storage.region": "Region",
  "settings.storage.publicUrl": "Offentlig URL",
  "settings.storage.optional": "Valgfritt",
  "settings.storage.saved": "Lagret",
  "settings.storage.hintAws": "Bruk endepunktet for bøttens region.",
  "settings.storage.hintR2":
    "Du finner det i innstillingene for R2-bøtten din.",
  "settings.storage.hintSupabase":
    "Du finner det i Storage-innstillingene for prosjektet ditt.",
  "settings.storage.hintOther":
    "MinIO, Backblaze B2, Wasabi og DigitalOcean Spaces fungerer også.",
  "settings.storage.save": "Lagre",
  "settings.storage.saving": "Lagrer…",
  "settings.storage.cancel": "Avbryt",
  "settings.storage.clear": "Fjern legitimasjon",
  "settings.storage.clearing": "Fjerner…",
  "settings.storage.clearTitle": "Fjerne lagringslegitimasjonen?",
  "settings.storage.clearBuilder":
    "Nye opplastinger går til Builder.io-lagring.",
  "settings.storage.clearNoFallback":
    "Opplastinger mislykkes til du setter opp lagring igjen.",
  "settings.storage.clearExisting":
    "Eksisterende filer blir liggende i {{bucket}}.",
  "settings.storage.clearExistingGeneric":
    "Eksisterende filer blir liggende i bøtten din.",
  "settings.storage.invalidUrl":
    "Bruk en URL som starter med https:// eller http://.",
  "settings.storage.invalidBucket":
    "Bøttenavn bruker bokstaver, tall, punktum, bindestreker og understreker.",
  "settings.storage.savedNotice":
    "Fillagring lagret. Nye opplastinger går til {{bucket}}.",
  "settings.storage.cleared": "Lagringslegitimasjonen er fjernet.",
  "settings.storage.clearedBuilder":
    "Lagringslegitimasjonen er fjernet. Nye opplastinger går til Builder.io.",
  "settings.storage.saveFailed": "Kunne ikke lagre fillagring.",
  "settings.storage.clearFailed": "Kunne ikke fjerne lagringslegitimasjonen.",
  "settings.storage.loadFailed":
    "Kunne ikke laste inn innstillingene for fillagring.",
  "settings.storage.retry": "Prøv igjen",
  "settings.storage.adminOnly":
    "Bare eiere og administratorer av organisasjonen kan endre fillagring.",
  "settings.audit.action": "Handling",
  "settings.audit.allApps": "Alle apper",
  "settings.audit.app": "App",
  "settings.audit.changedBy": "Endret av",
  "settings.audit.close": "Lukk",
  "settings.audit.empty": "Ingen endringer i denne perioden.",
  "settings.audit.emptyDescription":
    "Endringer som personer og agenten gjør, vises her.",
  "settings.audit.failed": "Mislyktes",
  "settings.audit.input": "Inndata",
  "settings.audit.inputLoadFailed": "Kunne ikke laste inn inndataene.",
  "settings.audit.last30Days": "Siste 30 dager",
  "settings.audit.last7Days": "Siste 7 dager",
  "settings.audit.last90Days": "Siste 90 dager",
  "settings.audit.loadFailed": "Kunne ikke laste inn revisjonsloggen.",
  "settings.audit.loading": "Laster inn revisjonsloggen",
  "settings.audit.onBehalfOf": "På vegne av",
  "settings.audit.range": "Tidsrom",
  "settings.audit.refused": "Avslått",
  "settings.audit.result": "Resultat",
  "settings.audit.showMore": "Vis {{count}} til",
  "settings.audit.succeeded": "Vellykket",
  "settings.audit.system": "System",
  "settings.audit.target": "Mål",
  "settings.audit.when": "Når",
  "accountMenu.label": "Konto",
  "accountMenu.loading": "Laster inn konto",
  "accountMenu.triggerLabel": "{{name}}, {{organization}}",
  "accountMenu.triggerLabelDemo": "{{name}}, {{organization}}, demomodus",
  "accountMenu.personal": "Personlig",
  "accountMenu.demoMode": "Demomodus",
  "accountMenu.demoModeOn": "Demomodus er på",
  "accountMenu.demoModeDescription":
    "Viste e-postadresser og støttede diagrammer er tilpasset presentasjoner. Kontoen og tillatelsene dine er uendret.",
  "accountMenu.turnOffDemoMode": "Slå av demomodus",
  "accountMenu.invitations": "Invitasjoner",
  "accountMenu.joinYourTeam": "Bli med i teamet ditt",
  "accountMenu.join": "Bli med",
  "accountMenu.yourWorkspace": "Ditt arbeidsområde",
  "accountMenu.createOrganization": "Opprett organisasjon",
  "accountMenu.organizationName": "Organisasjonsnavn",
  "accountMenu.create": "Opprett",
  "accountMenu.usage": "Bruk",
  "accountMenu.getApps": "Hent apper og utvidelser",
  "accountMenu.back": "Tilbake",
  "settingsOrg.general.organization": "Organisasjon",
  "settingsOrg.general.name": "Navn",
  "settingsOrg.general.nameLocked":
    "Eiere og administratorer kan endre navnet.",
  "settingsOrg.general.membership": "Medlemskap",
  "settingsOrg.general.yourRole": "Din rolle",
  "settingsOrg.general.deleteDescription":
    "Sletter {{name}}, medlemmene og dataene permanent.",
  "settingsOrg.members.removeTitle": "Fjerne {{name}}?",
  "settingsOrg.members.removeDescription":
    "Vedkommende mister tilgangen til {{org}}. Det vedkommende eier, flyttes til personen du velger.",
  "settingsOrg.members.roleFor": "Rolle for {{name}}",
  "settingsOrg.members.moreActions": "Flere handlinger for {{name}}",
  "settingsOrg.members.removing": "Fjerner…",
  "settingsOrg.members.groupsEmpty":
    "Grupper medlemmer for å administrere apptilgang samlet.",
  "settingsOrg.auth.signIn": "Innlogging",
  "settingsOrg.auth.joining": "Innmelding",
  "settingsOrg.auth.betweenApps": "Mellom apper",
  "settingsOrg.auth.methodsEmailOnly": "E-post og passord.",
  "settingsOrg.auth.methodsEmailAndOne": "E-post og passord, og {{method}}.",
  "settingsOrg.auth.methodsEmailAndTwo":
    "E-post og passord, {{first}} og {{second}}.",
  "settingsOrg.auth.emailPassword": "E-post og passord",
  "settingsOrg.auth.emailPasswordNote": "På for alle utrullinger.",
  "settingsOrg.auth.methodConfigured":
    "Angitt hos verten din med disse variablene.",
  "settingsOrg.auth.methodNotConfigured":
    "Ikke satt opp. Legg til disse variablene hos verten din, og rull ut på nytt.",
  "settingsOrg.auth.methodOn": "På",
  "settingsOrg.auth.methodOff": "Av",
  "settingsOrg.auth.requireHint":
    "Bruk Organisasjonsinnlogging for å kreve én av disse for alle i {{org}}.",
  "settingsOrg.auth.view": "Vis",
  "settingsOrg.auth.close": "Lukk",
  "settingsOrg.apps.access": "Tilgang",
  "settingsOrg.apps.browse": "Bla gjennom apper",
  "settingsOrg.apps.defaults": "Standarder",
  "settingsOrg.search.domainAutoJoin": "Automatisk innmelding via e-postdomene",
  "settingsOrg.search.roles": "Medlemsroller",
  "settingsOrg.learnMore": "Les mer",
  "settingsOrg.moreInformation": "Mer informasjon",
  "settingsOrg.general.workspaceUrl": "Arbeidsområdets URL",
  "settingsOrg.general.workspaceUrlDescription":
    "Send medlemmer til dette arbeidsområdet fra en annen utrulling.",
  "settingsOrg.general.workspaceUrlHelp":
    "Medlemmer som havner på en annen utrulling, sendes til dette arbeidsområdet i stedet for en tom app.",
  "settingsOrg.general.editWorkspaceUrl": "Rediger arbeidsområdets URL",
  "settingsOrg.general.removeWorkspaceUrl": "Fjern arbeidsområdets URL",
  "settingsOrg.general.setWorkspaceUrl": "Angi URL",
  "settingsOrg.auth.domainDescription":
    "Legg automatisk til personer med en @{{domain}}-adresse.",
  "settingsOrg.auth.domainDescriptionNoDomain":
    "Legg automatisk til personer med jobbens e-postdomene.",
  "settingsOrg.auth.domainHelp":
    "Alle som registrerer seg med en e-postadresse på dette domenet, blir med i organisasjonen. Bare ditt eget e-postdomene kan brukes, og gratis e-postleverandører er ikke tillatt.",
  "settingsOrg.auth.editDomain": "Rediger domene",
  "settingsOrg.auth.removeDomain": "Fjern domene",
  "settingsOrg.auth.sharedSecret": "Delt hemmelighet",
  "settingsOrg.auth.sharedSecretSet":
    "Angitt. Lar appene i dette arbeidsområdet verifisere hverandre.",
  "settingsOrg.auth.sharedSecretNotSet":
    "Ikke angitt. Lar appene i dette arbeidsområdet verifisere hverandre.",
  "settingsOrg.auth.secretNotSetValue": "Ikke angitt",
  "settingsOrg.auth.manage": "Administrer",
  "settingsOrg.auth.reveal": "Vis",
  "settingsOrg.auth.hide": "Skjul",
  "settingsOrg.auth.regenerate": "Generer på nytt",
  "settingsOrg.auth.syncToApps": "Synkroniser til apper",
  "settingsOrg.auth.pasteSecret": "Lim inn hemmelighet",
  "settingsOrg.auth.pasteSecretLabel": "Lim inn en delt hemmelighet",
  "settingsOrg.auth.syncing": "Synkroniserer til apper…",
  "settingsOrg.auth.syncErrorStatus": "HTTP {{status}}",
  "settingsOrg.invite.emails": "E-postadresser",
  "settingsOrg.invite.emailPlaceholder": "navn@firma.no",
  "settingsOrg.invite.note":
    "Hver person logger inn med nøyaktig denne e-postadressen for å godta.",
  "settingsOrg.invite.noteNoEmail":
    "Invitasjoner sendes ikke på e-post, så be hver person om å logge inn med nøyaktig denne e-postadressen.",
  "settingsOrg.invite.role": "Rolle",
  "settingsOrg.invite.member": "Medlem",
  "settingsOrg.invite.admin": "Administrator",
  "settingsOrg.invite.ownerOnlyAdmin":
    "Bare eieren av organisasjonen kan invitere administratorer.",
  "settingsOrg.invite.removeRow": "Fjern",
  "settingsOrg.invite.addAnother": "Legg til en til",
  "settingsOrg.invite.pasteMany": "Lim inn mange",
  "settingsOrg.invite.importCsv": "Importer CSV",
  "settingsOrg.invite.pasteLabel":
    "Lim inn e-postadresser atskilt med komma, mellomrom eller linjeskift.",
  "settingsOrg.invite.addAsMembers": "Legg til som medlemmer",
  "settingsOrg.invite.addAsAdmins": "Legg til som administratorer",
  "settingsOrg.invite.add": "Legg til",
  "settingsOrg.invite.send": "Send invitasjoner",
  "settingsOrg.invite.sending": "Sender…",
  "settingsOrg.invite.invalidEmail": "Skriv inn en fullstendig e-postadresse.",
  "settingsOrg.invite.csvNoEmails":
    "Fant ingen gyldige e-postadresser i denne CSV-filen.",
  "settingsOrg.auth.synced_one": "Synkronisert til {{count}} app.",
  "settingsOrg.auth.synced_other": "Synkronisert til {{count}} apper.",
  "settingsOrg.auth.syncedPartial_one":
    "Synkronisert til {{succeeded}} av {{count}} app. {{failed}} mislyktes.",
  "settingsOrg.auth.syncedPartial_other":
    "Synkronisert til {{succeeded}} av {{count}} apper. {{failed}} mislyktes.",
  "settingsOrg.invite.sent_one": "Sendte {{count}} invitasjon.",
  "settingsOrg.invite.sent_other": "Sendte {{count}} invitasjoner.",
  "settingsOrg.invite.saved_one":
    "Lagret {{count}} invitasjon. Vedkommende ser den ved innlogging.",
  "settingsOrg.invite.saved_other":
    "Lagret {{count}} invitasjoner. De ser dem ved innlogging.",
  "settingsShell.account.addPassword": "Legg til passord",
  "settingsShell.account.authenticatorCode": "Kode fra autentiseringsapp",
  "settingsShell.account.change": "Endre",
  "settingsShell.account.changeEmail": "Endre e-postadresse",
  "settingsShell.account.changePassword": "Endre passord",
  "settingsShell.account.confirmPassword": "Bekreft nytt passord",
  "settingsShell.account.currentPassword": "Nåværende passord",
  "settingsShell.account.deletionDialogDescription":
    "Dette sender en sletteforespørsel til en administrator. Dataene dine blir værende til forespørselen er behandlet.",
  "settingsShell.account.done": "Ferdig",
  "settingsShell.account.email": "E-post",
  "settingsShell.account.emailChangeError": "Kunne ikke sende bekreftelse.",
  "settingsShell.account.emailChangeSent":
    "Sjekk e-posten din for instruksjoner om hvordan du bekrefter endringen.",
  "settingsShell.account.languageAndRegion": "Språk og region",
  "settingsShell.account.languageDescription": "Gjelder på alle enhetene dine.",
  "settingsShell.account.manage": "Administrer",
  "settingsShell.account.name": "Navn",
  "settingsShell.account.nameDescription":
    "Brukes når du omtales på tvers av Agent-Native-apper.",
  "settingsShell.account.namePlaceholder": "Navnet ditt",
  "settingsShell.account.nameSaveError": "Kunne ikke oppdatere navnet ditt.",
  "settingsShell.account.nameSaved": "Navnet er oppdatert",
  "settingsShell.account.newEmail": "Ny e-postadresse",
  "settingsShell.account.newPassword": "Nytt passord",
  "settingsShell.account.password": "Passord",
  "settingsShell.account.passwordDescription":
    "Legg til et passord for å ha en alternativ måte å logge inn på kontoen din på.",
  "settingsShell.account.passwordLoadError":
    "Kunne ikke laste inn innloggingsmetodene dine.",
  "settingsShell.account.passwordMinLength":
    "Velg et passord med minst {{count}} tegn.",
  "settingsShell.account.passwordMismatch": "Passordene er ikke like.",
  "settingsShell.account.passwordSaveError": "Kunne ikke oppdatere passordet.",
  "settingsShell.account.passwordSaved": "Passordet er oppdatert",
  "settingsShell.account.photoError": "Kunne ikke oppdatere bildet.",
  "settingsShell.account.photoUpdated": "Bildet er oppdatert",
  "settingsShell.account.profilePhoto": "Profilbilde",
  "settingsShell.account.requestCopyDescription":
    "En administrator bekrefter identiteten din og følger opp.",
  "settingsShell.account.requestCopyLabel": "Be om en kopi av dataene dine",
  "settingsShell.account.requestDeletionDescription":
    "Dataene dine blir værende til en administrator har fullført forespørselen.",
  "settingsShell.account.requestDeletionLabel": "Be om sletting av data",
  "settingsShell.account.savePassword": "Lagre passord",
  "settingsShell.account.sendConfirmation": "Send bekreftelse",
  "settingsShell.account.sending": "Sender ...",
  "settingsShell.account.setUpTwoFactor": "Sett opp tofaktor",
  "settingsShell.account.settingUp": "Setter opp ...",
  "settingsShell.account.signIn": "Innlogging",
  "settingsShell.account.timezone": "Tidssone",
  "settingsShell.account.timezoneDescription":
    "Brukes til tidsstempler og planlagte automatiseringer.",
  "settingsShell.account.turnOffTwoFactor": "Slå av tofaktor",
  "settingsShell.account.turningOff": "Slår av ...",
  "settingsShell.account.twoFactor": "Tofaktorautentisering",
  "settingsShell.account.twoFactorBackupCodes":
    "Lagre disse reservekodene på et trygt sted. Hver kode kan brukes én gang hvis du mister tilgangen til autentiseringsappen.",
  "settingsShell.account.twoFactorCodeError":
    "Skriv inn den sekssifrede koden fra autentiseringsappen din.",
  "settingsShell.account.twoFactorDescription":
    "Bruk en autentiseringsapp for å legge til et ekstra innloggingstrinn på kontoen din.",
  "settingsShell.account.twoFactorDisableError":
    "Kunne ikke slå av tofaktorautentisering.",
  "settingsShell.account.twoFactorEnabled": "Tofaktorautentisering er på.",
  "settingsShell.account.twoFactorLoadError":
    "Kunne ikke laste inn tofaktorinnstillingene.",
  "settingsShell.account.twoFactorQrLabel": "QR-kode for oppsett av tofaktor",
  "settingsShell.account.twoFactorSaved": "Tofaktorautentisering er aktivert",
  "settingsShell.account.twoFactorScan":
    "Skann denne QR-koden med autentiseringsappen din, og skriv deretter inn koden du får.",
  "settingsShell.account.twoFactorSetupError":
    "Kunne ikke oppdatere tofaktorinnstillingene.",
  "settingsShell.account.twoFactorSetupTitle": "Sett opp tofaktorautentisering",
  "settingsShell.account.uploading": "Laster opp ...",
  "settingsShell.account.verifyAndEnable": "Bekreft og aktiver",
  "settingsShell.account.verifying": "Bekrefter ...",
  "settingsShell.account.voiceBatch": "Batch",
  "settingsShell.account.voiceDescription":
    "Velg hvordan taleinndata transkriberes.",
  "settingsShell.account.voiceGoogleRealtime": "Google sanntid",
  "settingsShell.account.voiceInput": "Taleinndata",
  "settingsShell.account.voiceLoadError":
    "Kunne ikke laste inn innstillingen for taletranskripsjon.",
  "settingsShell.account.voiceMacNative": "Innebygd i Mac",
  "settingsShell.account.voiceSaveError":
    "Kunne ikke lagre innstillingen for taletranskripsjon.",
  "settingsShell.account.yourData": "Dine data",
  "settingsShell.appFallbackName": "App",
  "settingsShell.appGroup.adminOnly":
    "Bare eiere og administratorer kan endre dette",
  "settingsShell.appGroup.automationsCreateTitle": "Hva skal skje, og når?",
  "settingsShell.appGroup.defaultModel": "Standardmodell",
  "settingsShell.appGroup.defaultModelDescription":
    "Brukes til nye agentsamtaler i {{app}}. Standarden er {{model}}.",
  "settingsShell.appGroup.defaultModelDescriptionUnset":
    "Brukes til nye agentsamtaler i {{app}}.",
  "settingsShell.appGroup.defaultModelLoadError":
    "Kunne ikke laste inn standardmodellen.",
  "settingsShell.appGroup.defaultModelSaveError":
    "Kunne ikke lagre standardmodellen. Prøv igjen.",
  "settingsShell.appGroup.demoMode": "Demomodus",
  "settingsShell.appGroup.demoModeDescription":
    "Bruk eksempeldata i denne nettleseren til presentasjoner.",
  "settingsShell.appGroup.labsFootnote":
    "Disse nye, ustabile funksjonene kan ha feil.",
  "settingsShell.appGroup.labsLoadError":
    "Kunne ikke laste inn eksperimentene dine.",
  "settingsShell.appGroup.labsReadError":
    "Kunne ikke lese dette lagrede valget. Velg På eller Av for å angi det på nytt.",
  "settingsShell.appGroup.labsSaveError":
    "Kunne ikke endre {{lab}}. Prøv igjen.",
  "settingsShell.appGroup.mcpAbout":
    "Koble {{app}} til Claude, ChatGPT, Cursor eller en annen KI-app som støtter MCP. Den appen kan da jobbe i {{app}} for deg. Den ser bare det du kan se.",
  "settingsShell.appGroup.mcpFootnote":
    "For verktøy agenten selv bruker, se {{integrations}}.",
  "settingsShell.appGroup.newAutomation": "Ny automatisering",
  "settingsShell.appGroup.retry": "Prøv igjen",
  "settingsShell.appGroup.thisBrowser": "Denne nettleseren",
  "settingsShell.appGroup.useDefault": "Bruk standarden",
  "settingsShell.appGroup.whatsNewChip":
    "Oppdateringer i {{app}}. Hver app har sin egen endringslogg.",
  "settingsShell.appGroup.whatsNewEmpty": "Ingen oppdateringer ennå.",
  "settingsShell.appGroup.whatsNewShowFewer": "Vis færre oppdateringer",
  "settingsShell.appGroup.whatsNewViewAll": "Vis alle oppdateringer",
  "settingsShell.backToApp": "Tilbake til {{app}}",
  "settingsShell.breadcrumbLabel": "Brødsmulesti",
  "settingsShell.builder.connect": "Bruk Builder.io",
  "settingsShell.builder.connected": "Tilkoblet",
  "settingsShell.builder.connectedTo": "Tilkoblet · {{space}}",
  "settingsShell.builder.connection": "Tilkobling",
  "settingsShell.builder.disconnect": "Koble fra",
  "settingsShell.builder.disconnecting": "Kobler fra…",
  "settingsShell.builder.disconnectBody":
    "Dette påvirker alle i {{org}} som ikke har koblet til sin egen konto.",
  "settingsShell.builder.disconnectFailed": "Kunne ikke koble fra Builder.io.",
  "settingsShell.builder.disconnectTitle": "Koble fra Builder.io?",
  "settingsShell.builder.grantsFailed":
    "Kunne ikke lese Builder.io-tilkoblingene.",
  "settingsShell.builder.setupStartFailed":
    "Kunne ikke starte Builder.io-oppsettet. Oppdater siden og prøv igjen.",
  "settingsShell.builder.setupHostFailed":
    "Kunne ikke åpne Builder fra denne samtaleverten. Åpne appen i en nettleserfane og prøv Builder.io-oppsettet på nytt (gratisnivå tilgjengelig).",
  "settingsShell.builder.setupFailed":
    "Builder.io-oppsettet ble ikke fullført. Prøv igjen, eller bruk dine egne nøkler.",
  "settingsShell.builder.loss.defaultStops":
    "Samtaler stopper til du legger til en leverandør for organisasjonen.",
  "settingsShell.builder.loss.defaultSwitches":
    "Standardmodellen byttes til {{next}}.",
  "settingsShell.builder.loss.modelPicker":
    "Builder.io-modeller forsvinner fra modellvelgeren.",
  "settingsShell.builder.loss.serviceStops":
    "Stopper til en annen leverandør er satt opp.",
  "settingsShell.builder.loss.stops": "Slutter å fungere.",
  "settingsShell.builder.loss.uploadsFail":
    "Opplastinger mislykkes til du setter opp lagring.",
  "settingsShell.builder.manage": "Administrer",
  "settingsShell.builder.needsReconnect": "Må kobles til på nytt.",
  "settingsShell.builder.orgFallback": "organisasjonen din",
  "settingsShell.builder.orgNotConnectedAdmin":
    "Ikke tilkoblet. Bruk Builder.io for å gi tilgang til alle i {{org}}.",
  "settingsShell.builder.orgNotConnectedMember":
    "Ikke tilkoblet. En eier eller administrator kan aktivere Builder.io for alle.",
  "settingsShell.builder.organization": "Organisasjon",
  "settingsShell.builder.personal": "Personlig",
  "settingsShell.builder.personalConnected": "Tilkoblet. Bare du bruker den.",
  "settingsShell.builder.personalConnectedOverOrg":
    "Tilkoblet. Bare du bruker den, i stedet for organisasjonens tilkobling.",
  "settingsShell.builder.personalConnectedTo":
    "Tilkoblet · {{space}}. Bare du bruker den.",
  "settingsShell.builder.personalConnectedToOverOrg":
    "Tilkoblet · {{space}}. Bare du bruker den, i stedet for organisasjonens tilkobling.",
  "settingsShell.builder.personalNotConnected":
    "Bruk din egen Builder.io-konto. Bare du bruker den.",
  "settingsShell.builder.personalRestricted":
    "Eiere og administratorer har begrenset personlige API-nøkler.",
  "settingsShell.builder.personalRestrictedUnused":
    "Brukes ikke så lenge personlige API-nøkler er begrenset.",
  "settingsShell.builder.reconnect": "Koble til på nytt",
  "settingsShell.builder.retry": "Prøv igjen",
  "settingsShell.builder.use.aiModel": "KI-modell",
  "settingsShell.builder.use.aiModelDefaultNote":
    "Standardmodellen, {{model}}.",
  "settingsShell.builder.use.aiModelNote":
    "Builder.io-modeller finnes i modellvelgeren.",
  "settingsShell.builder.use.backgroundAgentsNote":
    "Gjør kodeendringer fra produksjon.",
  "settingsShell.builder.use.browserAutomationNote":
    "Lar agenten bruke en nettleser i produksjon.",
  "settingsShell.builder.use.designSystem": "Designsysteminnsikt",
  "settingsShell.builder.use.designSystemNote":
    "Holder genererte lysbilder og design i tråd med merkevaren.",
  "settingsShell.builder.use.embeddings": "Embeddinger",
  "settingsShell.builder.use.embeddingsNote": "Søk i Brain.",
  "settingsShell.builder.use.fileStorageNote":
    "Nye opplastinger lagres hos Builder.io.",
  "settingsShell.builder.use.images": "Bildegenerering",
  "settingsShell.builder.use.imagesNote": "Slides og Design.",
  "settingsShell.builder.use.voice": "Taleinndata",
  "settingsShell.builder.use.voiceNote": "Diktering i alle apper.",
  "settingsShell.builder.usedFor": "Brukes til",
  "settingsShell.builder.usedForFootnote":
    "Velg hva som kjører på Builder.io, i {{link}}.",
  "settingsShell.builder.usedForLoadFailed":
    "Kunne ikke sjekke hvilke tjenester som kjører på Builder.io.",
  "settingsShell.builder.whatHappens": "Hva som skjer",
  "settingsShell.channels.about.discord":
    "Kjør agenten fra skråstrekkommandoer i Discord.",
  "settingsShell.channels.about.email":
    "Send e-post til agenten, så svarer den i samme tråd.",
  "settingsShell.channels.about.googleDocs":
    "Tagg agenten i kommentarer i Google Docs for å få svar.",
  "settingsShell.channels.about.microsoftTeams":
    "Nevn agenten i Microsoft Teams, så svarer den i den samtalen.",
  "settingsShell.channels.about.page":
    "Hvor folk kan sende meldinger til {{app}}-agenten. Agenten i hver app settes opp for seg.",
  "settingsShell.channels.about.slack":
    "@nevn agenten i en tråd eller send den en direktemelding, så svarer den i den tråden.",
  "settingsShell.channels.about.telegram":
    "Chat med agenten din via en Telegram-bot.",
  "settingsShell.channels.about.whatsapp":
    "Koble agenten din til WhatsApp Business.",
  "settingsShell.channels.action.manage": "Administrer",
  "settingsShell.channels.action.manageAria": "Administrer {{platform}}",
  "settingsShell.channels.action.setUp": "Sett opp",
  "settingsShell.channels.action.setUpAria": "Sett opp {{platform}}",
  "settingsShell.channels.action.view": "Vis",
  "settingsShell.channels.action.viewAria": "Vis {{platform}}",
  "settingsShell.channels.agentIn": "Agent i {{platform}}",
  "settingsShell.channels.connection": "Tilkobling",
  "settingsShell.channels.copyServiceAccountEmail":
    "Kopier e-postadressen til tjenestekontoen",
  "settingsShell.channels.copyWebhookUrl": "Kopier webhook-URL",
  "settingsShell.channels.credentials": "Legitimasjon",
  "settingsShell.channels.developerSite": "Utviklernettsted",
  "settingsShell.channels.documentation": "Dokumentasjon",
  "settingsShell.channels.empty": "Ingen kanaler er tilgjengelige i {{app}}.",
  "settingsShell.channels.information": "Informasjon",
  "settingsShell.channels.loadFailed": "Kunne ikke laste inn kanaler.",
  "settingsShell.channels.membersFootnote":
    "Bare eiere og administratorer kan sette opp kanaler.",
  "settingsShell.channels.notFound":
    "Denne kanalen er ikke tilgjengelig i {{app}}.",
  "settingsShell.channels.open": "Åpne",
  "settingsShell.channels.openDocs": "Åpne dokumentasjonen",
  "settingsShell.channels.registerWebhook": "Registrer",
  "settingsShell.channels.removeCredentials.action": "Fjern",
  "settingsShell.channels.removeCredentials.aria":
    "Fjern legitimasjonen for {{platform}}",
  "settingsShell.channels.removeCredentials.body":
    "Agenten slutter å svare i {{platform}} for alle, med mindre utrullingsmiljøet også angir disse nøklene.",
  "settingsShell.channels.removeCredentials.confirm": "Fjern",
  "settingsShell.channels.removeCredentials.failed":
    "Kunne ikke fjerne legitimasjonen.",
  "settingsShell.channels.removeCredentials.removing": "Fjerner…",
  "settingsShell.channels.removeCredentials.title":
    "Fjerne legitimasjonen for {{platform}}?",
  "settingsShell.channels.retry": "Prøv igjen",
  "settingsShell.channels.setup.addToEnvironment":
    "Legg dette til i utrullingsmiljøet",
  "settingsShell.channels.setup.body":
    "Legg disse til i denne utrullingen, og slå den deretter på.",
  "settingsShell.channels.setup.close": "Lukk",
  "settingsShell.channels.setup.failed": "Kunne ikke lagre variablene.",
  "settingsShell.channels.setup.optional": "Valgfritt",
  "settingsShell.channels.setup.replace": "Erstatt",
  "settingsShell.channels.setup.replaceAria": "Erstatt {{key}}",
  "settingsShell.channels.setup.save": "Lagre",
  "settingsShell.channels.setup.saveAndTurnOn": "Lagre og slå på",
  "settingsShell.channels.setup.saving": "Lagrer…",
  "settingsShell.channels.setup.saved": "Lagret",
  "settingsShell.channels.setup.savedElsewhere": "Lagret utenfor Kanaler",
  "settingsShell.channels.setup.setInEnvironment": "Angitt i utrullingsmiljøet",
  "settingsShell.channels.setup.stillMissing":
    "Noen påkrevde variabler mangler fortsatt.",
  "settingsShell.channels.setup.title": "Sett opp {{platform}}",
  "settingsShell.channels.shareDocumentsWith": "Del dokumenter med",
  "settingsShell.channels.state.notSetUp": "Ikke satt opp",
  "settingsShell.channels.state.off": "Av",
  "settingsShell.channels.state.on": "På",
  "settingsShell.channels.status": "Status",
  "settingsShell.channels.toggleFailed": "Kunne ikke oppdatere {{platform}}.",
  "settingsShell.channels.turnOnAria": "Slå på {{platform}}",
  "settingsShell.channels.unavailable":
    "{{platform}} er ikke tilgjengelig i {{app}}.",
  "settingsShell.channels.webhookLocalOnly":
    "{{platform}} kan ikke nå denne adressen. Åpne denne siden fra appens offentlige HTTPS-adresse for å få en webhook-URL.",
  "settingsShell.channels.webhookRegistered": "Registrert",
  "settingsShell.channels.webhookRegistration": "Webhook",
  "settingsShell.channels.webhookUrl": "Webhook-URL",
  "settingsShell.channels.category": "Kategori",
  "settingsShell.channels.developer": "Utvikler",
  "settingsShell.channels.mentionAgent": "Nevn agenten",
  "settingsShell.channels.rowDescription": "{{about}} {{state}}.",
  "settingsShell.channels.separately": "Agenten i hver app settes opp for seg.",
  "settingsShell.channels.setUpLocked":
    "Bare eiere og administratorer kan sette opp dette",
  "settingsShell.integrationDetail.access.none":
    "Det er en offentlig server, så det er ingenting å logge inn på.",
  "settingsShell.integrationDetail.access.oauth":
    "Agenten handler med dine tillatelser i {{name}}, så den ser bare det du kan se.",
  "settingsShell.integrationDetail.access.token":
    "Agenten bruker tilgangstokenet du legger til, så den ser det tokenet kan se.",
  "settingsShell.integrationDetail.accessToken": "Tilgangstoken",
  "settingsShell.integrationDetail.addAccessToken": "Legg til tilgangstoken",
  "settingsShell.integrationDetail.callout.adminNeeded":
    "En administrator må sette opp dette",
  "settingsShell.integrationDetail.callout.adminNeededBody":
    "Be en eier eller administrator i {{org}} om å legge til klient-ID og hemmelighet for {{name}}. Deretter kan du koble til din egen konto.",
  "settingsShell.integrationDetail.callout.beforeAnyone":
    "Før noen kan koble til",
  "settingsShell.integrationDetail.callout.beforeYouConnect":
    "Før du kobler til",
  "settingsShell.integrationDetail.callout.token":
    "Kobles til med et tilgangstoken",
  "settingsShell.integrationDetail.callout.unavailable":
    "Ikke tilgjengelig ennå",
  "settingsShell.integrationDetail.category": "Kategori",
  "settingsShell.integrationDetail.connected": "{{name}} er tilkoblet",
  "settingsShell.integrationDetail.copyServerUrl": "Kopier server-URL",
  "settingsShell.integrationDetail.developer": "Utvikler",
  "settingsShell.integrationDetail.howToCreateToken":
    "Slik oppretter du et token",
  "settingsShell.integrationDetail.justMe": "Bare meg",
  "settingsShell.integrationDetail.notFound":
    "Denne integrasjonen finnes ikke i katalogen.",
  "settingsShell.integrationDetail.notFoundTitle": "Ikke funnet",
  "settingsShell.integrationDetail.prompt.amplitude.1":
    "Hvordan utviklet ukentlige aktive brukere seg denne måneden?",
  "settingsShell.integrationDetail.prompt.amplitude.2":
    "Bygg en trakt fra registrering til første opptak",
  "settingsShell.integrationDetail.prompt.amplitude.3":
    "Hvilke kohorter holder best på brukerne?",
  "settingsShell.integrationDetail.prompt.apollo.1":
    "Finn designsjefer i oppstartsbedrifter i serie B",
  "settingsShell.integrationDetail.prompt.apollo.2":
    "Berik denne listen med e-postadresser",
  "settingsShell.integrationDetail.prompt.apollo.3":
    "Legg til disse kontaktene i Q4-sekvensen",
  "settingsShell.integrationDetail.prompt.asana.1":
    "Hva har jeg frist på denne uken?",
  "settingsShell.integrationDetail.prompt.asana.2":
    "Opprett oppgaver fra oppgavene i dette opptaket",
  "settingsShell.integrationDetail.prompt.asana.3":
    "Hvilke prosjekter ligger etter planen?",
  "settingsShell.integrationDetail.prompt.atlassian.1":
    "Opprett en Jira-sak fra oppgavene i dette opptaket",
  "settingsShell.integrationDetail.prompt.atlassian.2":
    "Hva blokkerer Q4-lanseringen?",
  "settingsShell.integrationDetail.prompt.atlassian.3":
    "Finn Confluence-siden om onboarding",
  "settingsShell.integrationDetail.prompt.box.1":
    "Finn den signerte kontrakten for Acme",
  "settingsShell.integrationDetail.prompt.box.2":
    "Del mappen med Q3-rapporten med økonomiavdelingen",
  "settingsShell.integrationDetail.prompt.box.3":
    "Hva ble endret i den juridiske mappen denne uken?",
  "settingsShell.integrationDetail.prompt.canva.1":
    "Lag et innlegg til sosiale medier fra høydepunktene i dette opptaket",
  "settingsShell.integrationDetail.prompt.canva.2":
    "Finn fargene i merkevaresettet vårt",
  "settingsShell.integrationDetail.prompt.canva.3":
    "Eksporter den nyeste presentasjonen som PDF",
  "settingsShell.integrationDetail.prompt.cloudflare.1":
    "Hvilke DNS-oppføringer peker til {{host}}?",
  "settingsShell.integrationDetail.prompt.cloudflare.2":
    "Vis Worker-feil fra den siste timen",
  "settingsShell.integrationDetail.prompt.cloudflare.3":
    "Tøm hurtigbufferen for denne URL-en",
  "settingsShell.integrationDetail.prompt.commonRoom.1":
    "Hvilke selskaper viser kjøpssignaler?",
  "settingsShell.integrationDetail.prompt.commonRoom.2":
    "Hvem hos Acme er aktive i fellesskapet vårt?",
  "settingsShell.integrationDetail.prompt.commonRoom.3":
    "Oppsummer aktiviteten fra de viktigste kontoene våre",
  "settingsShell.integrationDetail.prompt.context7.1":
    "Vis den gjeldende React Router-dokumentasjonen for loadere",
  "settingsShell.integrationDetail.prompt.context7.2":
    "Hvordan konfigurerer jeg Drizzle-migreringer?",
  "settingsShell.integrationDetail.prompt.context7.3":
    "Hva er nytt i den nyeste Tailwind-utgivelsen?",
  "settingsShell.integrationDetail.prompt.exa.1":
    "Finn nylige artikler om agent-native apper",
  "settingsShell.integrationDetail.prompt.exa.2":
    "Undersøk konkurrenter til {{app}}",
  "settingsShell.integrationDetail.prompt.exa.3":
    "Hent og oppsummer denne siden",
  "settingsShell.integrationDetail.prompt.figma.1":
    "Oppsummer komponentene i denne Figma-filen",
  "settingsShell.integrationDetail.prompt.figma.2":
    "List opp fargevariablene i designsystemet vårt",
  "settingsShell.integrationDetail.prompt.figma.3":
    "Beskriv oppsettet i denne rammen",
  "settingsShell.integrationDetail.prompt.fullstory.1":
    "Vis økter der folk raseriklikket på Del",
  "settingsShell.integrationDetail.prompt.fullstory.2":
    "Oppsummer friksjonen på prissiden",
  "settingsShell.integrationDetail.prompt.fullstory.3":
    "Hvor faller folk fra i onboardingen?",
  "settingsShell.integrationDetail.prompt.github.1":
    "Oppsummer pull requestene som venter på min gjennomgang",
  "settingsShell.integrationDetail.prompt.github.2":
    "Finn saker om lenkeforhåndsvisninger i Slack i agent-native",
  "settingsShell.integrationDetail.prompt.github.3":
    "Hva ble endret i packages/core denne uken?",
  "settingsShell.integrationDetail.prompt.gitlab.1":
    "Hvilke merge requests feilet i CI i dag?",
  "settingsShell.integrationDetail.prompt.gitlab.2":
    "Oppsummer åpne saker merket bug",
  "settingsShell.integrationDetail.prompt.gitlab.3":
    "Hvilke pipelines var tregest denne uken?",
  "settingsShell.integrationDetail.prompt.gong.1":
    "Oppsummer den siste samtalen min med Acme",
  "settingsShell.integrationDetail.prompt.gong.2":
    "Hvilke innvendinger kom opp denne måneden?",
  "settingsShell.integrationDetail.prompt.gong.3":
    "Hvilke avtaler nevner bekymringer om pris?",
  "settingsShell.integrationDetail.prompt.googleDocs.1":
    "@agent oppsummer kommentarene i dette dokumentet",
  "settingsShell.integrationDetail.prompt.googleDocs.2":
    "@agent skriv et utkast til svar på denne kommentaren",
  "settingsShell.integrationDetail.prompt.googleDocs.3":
    "@agent gjør disse notatene om til en sjekkliste",
  "settingsShell.integrationDetail.prompt.grafana.1":
    "Lag et diagram over p95-forsinkelsen i API-et det siste døgnet",
  "settingsShell.integrationDetail.prompt.grafana.2":
    "Finn feillogger fra rundt kl. 14",
  "settingsShell.integrationDetail.prompt.grafana.3":
    "Hvilke varsler ble utløst denne uken?",
  "settingsShell.integrationDetail.prompt.granola.1":
    "Hva bestemte vi i gårsdagens designgjennomgang?",
  "settingsShell.integrationDetail.prompt.granola.2":
    "List opp de åpne oppgavene mine fra møter",
  "settingsShell.integrationDetail.prompt.granola.3":
    "Oppsummer samtalene mine med Acme",
  "settingsShell.integrationDetail.prompt.hubspot.1":
    "Flytt Acme-avtalen til Lukket vunnet",
  "settingsShell.integrationDetail.prompt.hubspot.2":
    "Hvilke avtaler står fast i forhandling?",
  "settingsShell.integrationDetail.prompt.hubspot.3":
    "Logg denne samtalen som et notat på kontakten",
  "settingsShell.integrationDetail.prompt.intercom.1":
    "Oppsummer dagens åpne samtaler",
  "settingsShell.integrationDetail.prompt.intercom.2":
    "Finn hjelpeartikler om SSO",
  "settingsShell.integrationDetail.prompt.intercom.3":
    "Hva spør kundene mest om denne uken?",
  "settingsShell.integrationDetail.prompt.linear.1":
    "Opprett en sak for den ødelagte Slack-forhåndsvisningen og tildel den til meg",
  "settingsShell.integrationDetail.prompt.linear.2":
    "Hva gjenstår i den gjeldende syklusen?",
  "settingsShell.integrationDetail.prompt.linear.3":
    "Oppsummer feilene som ble rapportert denne uken",
  "settingsShell.integrationDetail.prompt.monday.1":
    "Hva står på designtavlen denne sprinten?",
  "settingsShell.integrationDetail.prompt.monday.2":
    "Flytt dette elementet til Ferdig",
  "settingsShell.integrationDetail.prompt.monday.3":
    "Hvilke elementer er forsinket?",
  "settingsShell.integrationDetail.prompt.neon.1":
    "Opprett en gren av produksjon for testing",
  "settingsShell.integrationDetail.prompt.neon.2":
    "Vis de tregeste spørringene denne uken",
  "settingsShell.integrationDetail.prompt.neon.3":
    "Hvor stor er hoveddatabasen?",
  "settingsShell.integrationDetail.prompt.netlify.1":
    "Hvorfor feilet den siste utrullingen?",
  "settingsShell.integrationDetail.prompt.netlify.2":
    "Hvilke nettsteder hadde mislykkede bygg denne uken?",
  "settingsShell.integrationDetail.prompt.netlify.3":
    "Rull tilbake til forrige produksjonsutrulling",
  "settingsShell.integrationDetail.prompt.notion.1":
    "Finn onboarding-sjekklisten vår",
  "settingsShell.integrationDetail.prompt.notion.2":
    "Oppsummer denne ukens møtenotater",
  "settingsShell.integrationDetail.prompt.notion.3":
    "Legg til disse oppgavene i teamets wiki",
  "settingsShell.integrationDetail.prompt.paypal.1":
    "List opp fakturaer som har forfalt",
  "settingsShell.integrationDetail.prompt.paypal.2":
    "Oppsummer denne månedens transaksjoner",
  "settingsShell.integrationDetail.prompt.paypal.3":
    "Opprett en faktura til Acme",
  "settingsShell.integrationDetail.prompt.pylon.1":
    "Hvilke kontoer har åpne hastesaker?",
  "settingsShell.integrationDetail.prompt.pylon.2":
    "Oppsummer den nyeste Acme-saken",
  "settingsShell.integrationDetail.prompt.pylon.3":
    "Skriv et utkast til svar på denne saken",
  "settingsShell.integrationDetail.prompt.semgrep.1":
    "Skann packages/core for sikkerhetsfunn",
  "settingsShell.integrationDetail.prompt.semgrep.2":
    "Forklar dette funnet og hvordan det kan rettes",
  "settingsShell.integrationDetail.prompt.semgrep.3":
    "Finnes det hardkodede hemmeligheter i dette repositoriet?",
  "settingsShell.integrationDetail.prompt.sentry.1":
    "Hva er de vanligste nye feilene siden gårsdagens utrulling?",
  "settingsShell.integrationDetail.prompt.sentry.2":
    "Vis stakksporingen for det hyppigste krasjet",
  "settingsShell.integrationDetail.prompt.sentry.3":
    "Hvilken utgivelse introduserte denne feilen?",
  "settingsShell.integrationDetail.prompt.sigma.1": "Finn inntektsdashbordet",
  "settingsShell.integrationDetail.prompt.sigma.2":
    "Hva drev endringen i MRR forrige måned?",
  "settingsShell.integrationDetail.prompt.sigma.3":
    "Forklar de viktigste måltallene i denne arbeidsboken",
  "settingsShell.integrationDetail.prompt.slack.1":
    "Oppsummer #design fra denne uken",
  "settingsShell.integrationDetail.prompt.slack.2":
    "Finn tråden om prisendringen",
  "settingsShell.integrationDetail.prompt.slack.3":
    "Hva sa Camila om lanseringen?",
  "settingsShell.integrationDetail.prompt.stripe.1":
    "Hvor stor inntekt hadde vi forrige måned?",
  "settingsShell.integrationDetail.prompt.stripe.2":
    "Finn kunden på denne fakturaen",
  "settingsShell.integrationDetail.prompt.stripe.3":
    "Hvilke abonnementer ble ikke fornyet?",
  "settingsShell.integrationDetail.prompt.supabase.1":
    "Hvor mange registrerte seg denne uken?",
  "settingsShell.integrationDetail.prompt.supabase.2":
    "Vis skjemaet for tabellen recordings",
  "settingsShell.integrationDetail.prompt.supabase.3":
    "Hvilke edge-funksjoner feilet i dag?",
  "settingsShell.integrationDetail.prompt.telegram.1":
    "Oppsummer dagens opptak",
  "settingsShell.integrationDetail.prompt.telegram.2":
    "Minn meg på gjennomgangen kl. 15",
  "settingsShell.integrationDetail.prompt.telegram.3":
    "Del lenken til gårsdagens demo",
  "settingsShell.integrationDetail.prompt.vercel.1":
    "Hvorfor feilet den siste forhåndsvisningsutrullingen?",
  "settingsShell.integrationDetail.prompt.vercel.2":
    "Vis logger for produksjonsutrullingen",
  "settingsShell.integrationDetail.prompt.vercel.3":
    "Hvilke domener peker til dette prosjektet?",
  "settingsShell.integrationDetail.prompt.webflow.1":
    "Oppdater overskriften på prissiden",
  "settingsShell.integrationDetail.prompt.webflow.2":
    "List opp CMS-elementer publisert denne uken",
  "settingsShell.integrationDetail.prompt.webflow.3":
    "Hvilke sider mangler metabeskrivelser?",
  "settingsShell.integrationDetail.prompt.whatsapp.1":
    "Hva står i kalenderen min i dag?",
  "settingsShell.integrationDetail.prompt.whatsapp.2":
    "Oppsummer det nyeste opptaket",
  "settingsShell.integrationDetail.prompt.whatsapp.3":
    "Send meg notatene fra designgjennomgangen",
  "settingsShell.integrationDetail.prompt.zapier.1":
    "Publiser nye opptak i #design i Slack",
  "settingsShell.integrationDetail.prompt.zapier.2":
    "Legg til nye registreringer i CRM-et vårt",
  "settingsShell.integrationDetail.prompt.zapier.3":
    "Hvilke Zaps kan du kjøre?",
  "settingsShell.integrationDetail.serverUrl": "Server-URL",
  "settingsShell.integrationDetail.setUp": "Sett opp",
  "settingsShell.integrationDetail.signIn": "Innlogging",
  "settingsShell.integrationDetail.signInNone": "Ingen",
  "settingsShell.integrationDetail.tokenHint.figma":
    "Opprett et personlig tilgangstoken i Figma, og lim det inn her.",
  "settingsShell.integrationDetail.tokenHint.github":
    "Opprett et personlig tilgangstoken i GitHub, og lim det inn her.",
  "settingsShell.integrationDetail.tokenHint.sentry":
    "Opprett et brukerautentiseringstoken i Sentry, og lim det inn her.",
  "settingsShell.integrationDetail.tokenHint.zapier":
    "Opprett en tilkobling i Zapier, og lim inn bearer-tokenet her.",
  "settingsShell.integrationDetail.tokenPlaceholder":
    "Lim inn {{name}}-tokenet ditt",
  "settingsShell.integrationDetail.who": "Hvem kan bruke den",
  "settingsShell.integrationDetail.whoMember":
    "Bare eiere og administratorer kan dele den med {{org}}.",
  "settingsShell.integrationDetail.whoOrgOnly":
    "Kobles til én gang for alle i {{org}}.",
  "settingsShell.integrationDetail.whoPersonal":
    "Hver person kobler til sin egen konto.",
  "settingsShell.integrationDetail.whoShared":
    "En delt tilkobling lar alle i {{org}} bruke din tilgang.",
  "settingsShell.clearSearch": "Tøm søk",
  "settingsShell.group.account": "Konto",
  "settingsShell.group.agent": "Agent",
  "settingsShell.group.connections": "Tilkoblinger",
  "settingsShell.group.organization": "Organisasjon",
  "settingsShell.interfaceLanguage": "Grensesnittspråk",
  "settingsShell.integrations.addCustom": "Legg til egendefinert integrasjon",
  "settingsShell.integrations.builderDescription":
    "Modelltilgang, nettleserautomatisering, fillagring og arbeidsområdeidentitet. Gratisnivå tilgjengelig.",
  "settingsShell.integrations.builderStatusFailed":
    "Kunne ikke sjekke Builder.io-tilkoblingen.",
  "settingsShell.integrations.category.analytics": "Analyse",
  "settingsShell.integrations.category.design": "Design",
  "settingsShell.integrations.category.engineering": "Utvikling",
  "settingsShell.integrations.category.finance": "Økonomi",
  "settingsShell.integrations.category.other": "Annet",
  "settingsShell.integrations.category.productivity": "Produktivitet",
  "settingsShell.integrations.category.sales": "Salg",
  "settingsShell.integrations.category.support": "Kundestøtte",
  "settingsShell.integrations.connectName": "Koble til {{name}}",
  "settingsShell.integrations.connectedEmptyDescription":
    "Koble til et verktøy nedenfor, så kan agenten bruke det i samtalen.",
  "settingsShell.integrations.connectedEmptyTitle":
    "Ingenting er tilkoblet ennå",
  "settingsShell.integrations.footnote":
    "Dette er verktøy agenten bruker. For å bruke {{app}} fra Claude, ChatGPT eller Cursor, se {{link}}.",
  "settingsShell.integrations.moreActions": "Flere handlinger for {{name}}",
  "settingsShell.integrations.noResults":
    "Ingen integrasjoner samsvarer. Prøv et annet navn.",
  "settingsShell.integrations.remove": "Fjern",
  "settingsShell.integrations.removeFailed": "Kunne ikke fjerne {{name}}.",
  "settingsShell.integrations.removePersonal":
    "Agenten slutter å bruke {{name}} for deg.",
  "settingsShell.integrations.removeTitle": "Fjerne {{name}}?",
  "settingsShell.integrations.removeWorkspace":
    "Agenten slutter å bruke {{name}} for alle i arbeidsområdet.",
  "settingsShell.integrations.removing": "Fjerner…",
  "settingsShell.integrations.retry": "Prøv igjen",
  "settingsShell.integrations.seeMoreMany": "Se {{first}}, {{second}} og flere",
  "settingsShell.integrations.seeMoreOne": "Se {{first}}",
  "settingsShell.integrations.seeMoreTwo": "Se {{first}} og {{second}}",
  "settingsShell.integrations.serversLoadFailed":
    "Kunne ikke laste inn de tilkoblede integrasjonene dine.",
  "settingsShell.learnings": "Lærdommer",
  "settingsShell.loading": "Laster inn innstillinger",
  "settingsShell.navLabel": "Innstillinger",
  "settingsShell.noResults": "Ingen innstillinger samsvarer",
  "settingsShell.openNav": "Åpne innstillingsmenyen",
  "settingsShell.page.apiKeys": "API-nøkler",
  "settingsShell.page.appGeneral": "Generelt",
  "settingsShell.page.apps": "Apper",
  "settingsShell.page.audit": "Revisjonslogg",
  "settingsShell.page.auth": "Autentisering",
  "settingsShell.page.automations": "Automatiseringer",
  "settingsShell.page.channels": "Kanaler",
  "settingsShell.page.creativeContext": "Kreativ kontekst",
  "settingsShell.page.files": "Filer",
  "settingsShell.page.infra": "Infrastruktur",
  "settingsShell.page.instructions": "Instruksjoner",
  "settingsShell.page.integrations": "Integrasjoner",
  "settingsShell.page.labs": "Eksperimenter",
  "settingsShell.page.mcp": "MCP-server",
  "settingsShell.page.members": "Medlemmer",
  "settingsShell.page.memory": "Minne",
  "settingsShell.page.model": "Modell",
  "settingsShell.page.notifications": "Varsler",
  "settingsShell.page.orgGeneral": "Generelt",
  "settingsShell.page.preferences": "Preferanser",
  "settingsShell.page.profile": "Profil",
  "settingsShell.page.security": "Sikkerhet",
  "settingsShell.page.skills": "Ferdigheter",
  "settingsShell.page.subAgents": "Underagenter",
  "settingsShell.page.usage": "Bruk",
  "settingsShell.page.whatsNew": "Nyheter",
  "settingsShell.pagePending": "Ikke tilgjengelig ennå",
  "settingsShell.resultsLabel": "Søkeresultater for innstillinger",
  "settingsShell.search.appDefaultModel": "Standardmodell for appen",
  "settingsShell.search.backgroundAgents": "Bakgrunnsagenter",
  "settingsShell.search.browserAutomation": "Nettleserautomatisering",
  "settingsShell.search.connectedAgents": "Tilkoblede agenter",
  "settingsShell.search.database": "Database",
  "settingsShell.search.defaultModel": "Standardmodell",
  "settingsShell.search.demoMode": "Demomodus",
  "settingsShell.search.email": "E-post",
  "settingsShell.search.fileUploads": "Filopplasting og lagring",
  "settingsShell.search.hosting": "Hosting",
  "settingsShell.search.maxIterations": "Maks antall iterasjoner",
  "settingsShell.search.signInMethods": "Innloggingsmetoder",
  "settingsShell.search.voiceTranscription": "Taletranskripsjon",
  "settingsShell.searchPlaceholder": "Søk i innstillinger",
  "settingsShell.unread": "Ny",
  "settingsResources.personal": "Personlig",
  "settingsResources.organization": "Organisasjon",
  "settingsResources.fromDispatch": "Fra Dispatch",
  "settingsResources.readOnly": "Skrivebeskyttet",
  "settingsResources.readOnlyHint":
    "Bare eiere og administratorer kan endre dette",
  "settingsResources.editInDispatch": "Rediger det i Dispatch",
  "settingsResources.openDispatch": "Åpne Dispatch",
  "settingsResources.allApps": "Alle apper",
  "settingsResources.allAppsHint": "Dispatch deler dette med alle apper",
  "settingsResources.dispatchEmpty": "Ingenting er delt fra Dispatch",
  "settingsResources.loadFailed": "Kunne ikke laste inn disse ressursene.",
  "settingsResources.moreActions": "Flere handlinger",
  "settingsResources.open": "Åpne",
  "settingsResources.download": "Last ned",
  "settingsResources.remove": "Fjern",
  "settingsResources.removeTitle": "Fjerne {{name}}?",
  "settingsResources.removeFailed": "Kunne ikke fjerne {{name}}.",
  "settingsResources.saveFailed": "Kunne ikke lagre {{name}}.",
  "settingsResources.uploadFailed": "Kunne ikke laste opp {{name}}.",
  "settingsResources.cancel": "Avbryt",
  "settingsResources.save": "Lagre",
  "settingsResources.create": "Opprett",
  "settingsResources.saving": "Lagrer",
  "settingsResources.creating": "Oppretter",
  "settingsResources.removing": "Fjerner",
  "settingsResources.instructions.empty":
    "Fortell agenten hvordan den skal jobbe med deg.",
  "settingsResources.instructions.emptyTitle": "Ingen instruksjoner ennå",
  "settingsResources.instructions.orgEmpty":
    "Ingen instruksjoner for {{org}} ennå",
  "settingsResources.instructions.add": "Legg til instruksjoner",
  "settingsResources.instructions.fieldLabel":
    "Hvordan skal agenten jobbe med deg?",
  "settingsResources.instructions.placeholder":
    "Hold svarene korte. Bruk metriske enheter.",
  "settingsResources.instructions.savedAs":
    "Lagret som AGENTS.md i de personlige ressursene dine.",
  "settingsResources.memory.empty": "Agenten lagrer det den lærer om deg, her.",
  "settingsResources.memory.emptyTitle": "Ingen minner ennå",
  "settingsResources.memory.orgEmpty": "Ingen delte minner ennå",
  "settingsResources.memory.add": "Legg til minne",
  "settingsResources.learnings.empty":
    "Rettelser du gir agenten, lagres som lærdommer.",
  "settingsResources.learnings.emptyTitle": "Ingen lærdommer ennå",
  "settingsResources.learnings.add": "Legg til lærdom",
  "settingsResources.skills.empty":
    "Lagre en arbeidsflyt én gang, så kan agenten gjenbruke den.",
  "settingsResources.skills.emptyTitle": "Ingen ferdigheter ennå",
  "settingsResources.skills.orgEmpty": "Ingen delte ferdigheter ennå",
  "settingsResources.skills.add": "Legg til ferdighet",
  "settingsResources.skills.describe": "Beskriv den for agenten",
  "settingsResources.skills.upload": "Last opp en ferdighetsfil",
  "settingsResources.skills.describePlaceholder":
    "En ferdighet som gjennomgår pull requests for sikkerhetsproblemer",
  "settingsResources.files.empty":
    "Legg til en fil for å gi agenten din mer kontekst.",
  "settingsResources.files.emptyTitle": "Ingen filer ennå",
  "settingsResources.files.orgEmpty": "Ingen delte filer ennå",
  "settingsResources.files.add": "Legg til fil",
  "settingsResources.files.upload": "Last opp fil",
  "settingsResources.files.create": "Opprett fil",
  "settingsInfra.setup": "Oppsett",
  "settingsInfra.services": "Tjenester",
  "settingsInfra.environment": "Miljø",
  "settingsInfra.builderConnected":
    "Tilkoblet. Kontokredittene dine driver alle tjenester merket Builder.io.",
  "settingsInfra.builderNotConnected":
    "Ikke tilkoblet. Sett opp hver tjeneste selv, eller bruk Builder.io for å bruke kontokredittene dine.",
  "settingsInfra.builderOverrideDescription":
    "Reserveløsning fra utrullingen er tilgjengelig. Bruk din egen Builder.io-konto for å overstyre den.",
  "settingsInfra.builderStorageHint":
    "Objektlagring holder opplastede filer varige og URL-ene deres gjenbrukbare gjennom hele tråden. Bruk Builder.io eller en S3-kompatibel bøtte nedenfor.",
  "settingsInfra.builderUnknown": "Kunne ikke sjekke Builder.io-tilkoblingen.",
  "settingsInfra.manage": "Administrer",
  "settingsInfra.connect": "Koble til",
  "settingsInfra.connecting": "Kobler til…",
  "settingsInfra.setUp": "Sett opp",
  "settingsInfra.view": "Vis",
  "settingsInfra.retry": "Prøv igjen",
  "settingsInfra.close": "Lukk",
  "settingsInfra.cancel": "Avbryt",
  "settingsInfra.save": "Lagre",
  "settingsInfra.saving": "Lagrer…",
  "settingsInfra.required": "Påkrevd",
  "settingsInfra.recommended": "Anbefalt",
  "settingsInfra.optional": "Valgfritt",
  "settingsInfra.builderRecommended":
    "Driv alle tjenestene nedenfor med kontokredittene dine fra Builder.io. Gratisnivå tilgjengelig.",
  "settingsInfra.builderOnly": "Bare Builder.io",
  "settingsInfra.rowDescription": "{{source}} · {{use}}",
  "settingsInfra.notSetUp": "Ikke satt opp",
  "settingsInfra.availableWithBuilder": "Tilgjengelig med Builder.io",
  "settingsInfra.loadFailed": "Kunne ikke laste inn dette.",
  "settingsInfra.aiModel": "KI-modell",
  "settingsInfra.useEveryApp": "Alle apper",
  "settingsInfra.storageBucket": "{{provider}}, bøtte {{bucket}}",
  "settingsInfra.useUploads": "Opplastinger i alle apper",
  "settingsInfra.storageTitle": "Fillagring",
  "settingsInfra.storageIntro":
    "Nye opplastinger går til bøtten din. Eksisterende filer blir liggende der de er.",
  "settingsInfra.voice": "Taleinndata",
  "settingsInfra.images": "Bildegenerering",
  "settingsInfra.embeddings": "Embeddinger",
  "settingsInfra.useVoice": "Diktering i alle apper",
  "settingsInfra.useImages": "Slides og Design",
  "settingsInfra.useEmbeddings": "Søk i Brain",
  "settingsInfra.whyVoice":
    "Gjør tale om til tekst. Du kan alltid skrive uten det.",
  "settingsInfra.whyImages": "Genererer bilder til lysbilder og design.",
  "settingsInfra.whyEmbeddings":
    "Forbedrer semantisk søk. Nøkkelordsøk fungerer fortsatt uten det.",
  "settingsInfra.designSystem": "Designsysteminnsikt",
  "settingsInfra.whyDesignSystem":
    "Holder genererte lysbilder og design i tråd med merkevaren.",
  "settingsInfra.whyBackground": "Gjør kodeendringer fra produksjon.",
  "settingsInfra.whyBrowser": "Lar agenten bruke en nettleser i produksjon.",
  "settingsInfra.provider": "Leverandør",
  "settingsInfra.keyOrg": "Bruker organisasjonens {{provider}}-nøkkel.",
  "settingsInfra.manageKey": "Administrer nøkkel",
  "settingsInfra.keyPersonal":
    "{{provider}}-nøkkelen din er personlig. Tjenester trenger en organisasjonsnøkkel.",
  "settingsInfra.keyNone":
    "Tjenester bruker organisasjonsnøkler, og det finnes ingen {{provider}}-nøkkel ennå.",
  "settingsInfra.keyUnavailable":
    "Kunne ikke sjekke organisasjonens {{provider}}-nøkkel.",
  "settingsInfra.useBuilder": "Bruk Builder.io",
  "settingsInfra.addNamed": "Legg til {{provider}}",
  "settingsInfra.serviceSaved": "{{service}} bruker nå {{provider}}.",
  "settingsInfra.serviceSaveFailed": "Kunne ikke endre {{service}}.",
  "settingsInfra.reindex":
    "Indekser Brain på nytt, slik at semantisk søk dekker eksisterende elementer.",
  "settingsInfra.variables": "Påkrevde variabler",
  "settingsInfra.databaseHosted":
    "{{name}}, angitt hos verten din. Alle apper deler den.",
  "settingsInfra.databaseHostedSingle": "{{name}}, angitt hos verten din.",
  "settingsInfra.databaseLocal":
    "{{name}} på denne datamaskinen. Angi DATABASE_URL hos verten din før du ruller ut.",
  "settingsInfra.databaseMissing":
    "Ikke angitt. Angi DATABASE_URL hos verten din.",
  "settingsInfra.hostingWorkspace":
    "{{host}}. Arbeidsområdet ruller ut hver app til sin egen adresse.",
  "settingsInfra.hostingSingle": "{{host}}, på {{address}}.",
  "settingsInfra.hostingPlain": "{{host}}.",
  "settingsInfra.hostOwnServer": "Din egen server",
  "settingsInfra.hostThisComputer": "Denne datamaskinen",
  "settingsInfra.variablesSet": "{{keys}} er angitt hos verten din.",
  "settingsInfra.variablesMissing": "Angi {{keys}} hos verten din.",
  "settingsInfra.dbConnected": "Tilkoblet",
  "settingsInfra.dbLocal": "På denne datamaskinen",
  "settingsInfra.notSet": "Ikke angitt",
  "settingsInfra.set": "Angitt",
  "settingsInfra.dbIntro":
    "Alle apper leser databasen før de starter, så den angis én gang hos verten din. Slik flytter du til en annen database:",
  "settingsInfra.dbStep1":
    "Opprett en Postgres-database i Neon, Supabase eller hos en annen Postgres-vert.",
  "settingsInfra.dbStep2":
    "Sett {{key}} til tilkoblingsstrengen i vertens miljø.",
  "settingsInfra.dbStep3":
    "Rull ut på nytt. Migreringer kjøres under utrullingen.",
  "settingsInfra.dbOwn":
    "For å gi én app sin egen database angir du appens egen variabel, for eksempel {{key}}.",
  "settingsInfra.hostIntroWorkspace":
    "Arbeidsområdet ruller ut alle apper, hver på sin egen adresse. Slik hoster du på Vercel, Cloudflare eller din egen server:",
  "settingsInfra.hostIntro":
    "Slik hoster du på Vercel, Cloudflare eller din egen server:",
  "settingsInfra.hostStep1":
    "Velg målet med {{key}}, for eksempel vercel, cloudflare_module eller node.",
  "settingsInfra.hostStep2":
    "Gi den nye verten det samme miljøet, inkludert {{keys}}.",
  "settingsInfra.hostStep3":
    "Rull ut. For et arbeidsområde bygger dette alle apper og skriver ut publiseringskommandoen:",
  "settingsInfra.envIntro":
    "Alle apper leser disse før de starter. Angi dem én gang hos verten din, og rull ut på nytt.",
  "settingsInfra.varDatabaseUrl": "Postgres-tilkoblingsstrengen din.",
  "settingsInfra.varA2a":
    "Lar appene i dette arbeidsområdet kalle hverandre. I et arbeidsområde signerer den også innloggingsøkter når BETTER_AUTH_SECRET ikke er angitt.",
  "settingsInfra.varBetterAuth":
    "Signerer innloggingsøkter. Bruk minst 32 tilfeldige tegn.",
  "settingsInfra.varAppUrl":
    "Trengs bare når verten ikke kan fortelle appen hva den offentlige URL-en er.",
  "settingsInfra.varEncryption":
    "Krypterer nøklene som er lagret i Innstillinger. Uten den utleder arbeidsområdet en fra A2A_SECRET.",
  "settingsInfra.varEncryptionSingle":
    "Krypterer nøklene som er lagret i Innstillinger. Uten den utleder appen en fra BETTER_AUTH_SECRET.",
  "settingsInfra.varWeak": "For kort. Bruk minst 32 tilfeldige tegn.",
  "settingsInfra.varWeakLabel": "For kort",
  "settingsInfra.generateSecret": "Slik genererer du en hemmelighet:",
  "settingsInfra.copy": "Kopier",
  "settingsInfra.copied": "Kopiert",
  "settingsInfra.copyFailed": "Kunne ikke kopiere.",
  "settingsApiKeys.addKey": "Legg til nøkkel",
  "settingsApiKeys.adding": "Legger til…",
  "settingsApiKeys.availableTo": "Tilgjengelig for",
  "settingsApiKeys.deleteKey": "Slett nøkkel",
  "settingsApiKeys.deleting": "Sletter…",
  "settingsApiKeys.deleteTitle": "Slette {{name}}?",
  "settingsApiKeys.everyoneIn": "Alle i {{org}}",
  "settingsApiKeys.getKey": "Hent nøkkel",
  "settingsApiKeys.hideKeys": "Skjul nøkler",
  "settingsApiKeys.justMe": "Bare meg",
  "settingsApiKeys.keyAdded": "Nøkkel lagt til",
  "settingsApiKeys.keyDeleted": "Nøkkel slettet",
  "settingsApiKeys.loadFailed": "Kunne ikke laste inn nøklene dine.",
  "settingsApiKeys.manageKey": "Administrer {{name}}",
  "settingsApiKeys.managedKeys": "Administrert av integrasjoner",
  "settingsApiKeys.managedName": "{{owner}} administrerer denne nøkkelen.",
  "settingsApiKeys.managedTooltip":
    "Opprettet og rotert av {{owner}}. Koble den fra der.",
  "settingsApiKeys.membersLocked":
    "Bare eiere og administratorer kan dele nøkler med {{org}}.",
  "settingsApiKeys.modelFootnote":
    "For å bruke din egen modelleverandør, {{link}}.",
  "settingsApiKeys.modelFootnoteLink": "legg den til i Modell",
  "settingsApiKeys.name": "Navn",
  "settingsApiKeys.noKeys": "Ingen nøkler ennå",
  "settingsApiKeys.noKeysDescription":
    "Legg til en nøkkel slik at appene dine og agenten kan nå en tjeneste.",
  "settingsApiKeys.orgKeys": "Organisasjonsnøkler",
  "settingsApiKeys.providerInModel": "Legg til {{provider}} i {{link}}.",
  "settingsApiKeys.replaceTitle": "Erstatt {{name}}",
  "settingsApiKeys.replaceValue": "Erstatt verdi",
  "settingsApiKeys.saving": "Lagrer…",
  "settingsApiKeys.showKeys_one": "Vis {{count}} nøkkel",
  "settingsApiKeys.showKeys_other": "Vis {{count}} nøkler",
  "settingsApiKeys.test": "Test",
  "settingsApiKeys.testPassed": "Den lagrede verdien fungerer.",
  "settingsApiKeys.usedBy": "Brukes av {{link}}",
  "settingsApiKeys.value": "Verdi",
  "settingsApiKeys.valueReplaced": "Verdien er erstattet",
  "settingsApiKeys.yourKeys": "Dine nøkler",
  "settingsModel.addEndpoint": "Legg til en endepunkt-URL",
  "settingsModel.addNamed": "Legg til {{provider}}",
  "settingsModel.addProvider": "Legg til leverandør",
  "settingsModel.adding": "Legger til",
  "settingsModel.affectsOrg": "Dette påvirker alle i {{org}}.",
  "settingsModel.affectsYou": "Dette påvirker bare deg.",
  "settingsModel.allApps": "Alle apper",
  "settingsModel.apiKey": "API-nøkkel",
  "settingsModel.builderConnected": "Tilkoblet · {{space}}",
  "settingsModel.builderConnectedPlain": "Tilkoblet",
  "settingsModel.builderOrgNotConnectedAdmin":
    "Ikke tilkoblet. Bruk Builder.io for å gi tilgang til alle i {{org}}.",
  "settingsModel.builderOrgNotConnectedMember":
    "Ikke tilkoblet. En eier eller administrator kan aktivere Builder.io for alle.",
  "settingsModel.builderPersonalConnect":
    "Bruk din egen Builder.io-konto for å få tilgang til kredittene.",
  "settingsModel.builderPersonalInsteadOfOrg":
    "Bruk din egen Builder.io-konto i stedet for organisasjonens tilkobling.",
  "settingsModel.builderPersonalOverOrg":
    "Tilkoblet · {{space}}. Brukes i stedet for organisasjonens tilkobling.",
  "settingsModel.builderPersonalOverOrgPlain":
    "Tilkoblet. Brukes i stedet for organisasjonens tilkobling.",
  "settingsModel.builderUnknown": "Kunne ikke sjekke Builder.io-tilkoblingen.",
  "settingsModel.cancel": "Avbryt",
  "settingsModel.change": "Endre",
  "settingsModel.chatgptConnected": "Tilkoblet",
  "settingsModel.chatgptDescription":
    "Bruk kvalifiserte OpenAI-modeller gjennom ChatGPT-abonnementet ditt.",
  "settingsModel.chatgptPopupBlocked":
    "Tillat popup-vinduer for dette nettstedet, og prøv igjen.",
  "settingsModel.chatgptTitle": "Tilgang via ChatGPT-abonnement",
  "settingsModel.chatgptAddAccount": "Legg til en annen konto",
  "settingsModel.chatgptConnecting": "Kobler til…",
  "settingsModel.chatgptContinue": "Fortsett med ChatGPT",
  "settingsModel.chatgptDisconnect": "Koble fra",
  "settingsModel.chatgptDisconnectTitle": "Koble fra ChatGPT?",
  "settingsModel.chatgptDisconnectDescription":
    "{{account}} logges ut av denne appen, og agenten slutter å bruke ChatGPT-abonnementet ditt. Du kan logge inn igjen når som helst.",
  "settingsModel.chatgptDisconnecting": "Kobler fra…",
  "settingsModel.chatgptRemoveLegacySignIn": "Fjern gammel innlogging",
  "settingsModel.chatgptLegacySignInDetails":
    "En eldre ChatGPT-innlogging er lagret her. Den offisielle flyten kan ikke bruke den.",
  "settingsModel.chatgptManageAccess": "Administrer i ChatGPT",
  "settingsModel.chatgptRemoteRevocationUnconfirmed":
    "Koblet fra her. Tilgangen kan fortsatt være aktiv i ChatGPT.",
  "settingsModel.chatgptLocalOnly":
    "Åpen kildekode-apper er selvbetjente når de kjøres lokalt med en loopback-callback; ingen partnersøknad trengs. Vertsbaserte apper på *.agent-native.com trenger godkjenning fra operatøren og en vertsbasert callback.",
  "settingsModel.chatgptNoDirectUse":
    "Koble til på nytt og tillat direkte modelltilgang for å bruke denne ChatGPT-kontoen.",
  "settingsModel.chatgptReconnect": "Koble til på nytt",
  "settingsModel.chatgptSelectAccount": "ChatGPT-konto",
  "settingsModel.chatgptUsageLimit":
    "Bruksgrensen for ChatGPT-abonnementet ditt er nådd.",
  "settingsModel.checkAgain": "Sjekk på nytt",
  "settingsModel.checkedJustNow": "Sjekket akkurat nå.",
  "settingsModel.checkedOn": "Sjekket {{date}}.",
  "settingsModel.checking": "Sjekker nøkkelen din hos {{provider}}",
  "settingsModel.checkingEndpoint": "Sjekker endepunktet",
  "settingsModel.checkingOllama": "Sjekker installerte modeller…",
  "settingsModel.checkingSaved": "Sjekker den lagrede nøkkelen",
  "settingsModel.chooseModel": "Velg en modell",
  "settingsModel.clear": "Tøm",
  "settingsModel.defaultModelDescription":
    "Brukes i alle apper med mindre appen angir sin egen.",
  "settingsModel.defaultModelNeedsProvider":
    "Legg til en leverandør for å velge standardmodell.",
  "settingsModel.disconnect": "Koble fra",
  "settingsModel.effectDefaultStops":
    "Samtaler stopper til en annen leverandør er satt opp.",
  "settingsModel.effectDefaultSwitches":
    "Standardmodellen byttes til {{next}}.",
  "settingsModel.effectKeepsOrg":
    "Fortsetter å fungere med organisasjonsnøkkelen.",
  "settingsModel.effectKeepsVault": "Fortsetter å fungere med Vault-nøkkelen.",
  "settingsModel.effectKeepsWorkspace":
    "Fortsetter å fungere med arbeidsområdenøkkelen.",
  "settingsModel.effectModelsLeave":
    "{{provider}}-modeller forsvinner fra modellvelgeren.",
  "settingsModel.emptyAskAdmin":
    "Be en eier eller administrator om å legge til en.",
  "settingsModel.emptyDescription":
    "Agenten trenger en leverandør for å kunne svare.",
  "settingsModel.emptyDescriptionBuilder":
    "Agenten trenger en leverandør for å kunne svare. Vi anbefaler Builder.io for modelltilgang, nettleserautomatisering, fillagring og arbeidsområdeidentitet. Gratisnivå tilgjengelig.",
  "settingsModel.emptyTitle": "Legg til en modelleverandør",
  "settingsModel.endpointFirst": "Skriv inn endepunkt-URL-en først.",
  "settingsModel.endpointHint":
    "Valgfritt. Bruk dette for LiteLLM eller en annen OpenAI-kompatibel gateway.",
  "settingsModel.endpointUrl": "Endepunkt-URL",
  "settingsModel.keyHint":
    "Opprett en på {{host}}. {{provider}} fakturerer den direkte.",
  "settingsModel.keyPlaceholder": "Lim inn {{provider}}-nøkkelen din",
  "settingsModel.labs": "Eksperimenter",
  "settingsModel.loadFailed": "Kunne ikke laste inn leverandører.",
  "settingsModel.lockedTip": "Bare eiere og administratorer kan endre dette.",
  "settingsModel.manage": "Administrer",
  "settingsModel.maxIterationsDescription":
    "Hvor lenge et svar kan jobbe før det settes på pause.",
  "settingsModel.maxIterationsInvalid":
    "Skriv inn et heltall fra {{min}} til {{max}}.",
  "settingsModel.modelCount_one": "{{count}} modell",
  "settingsModel.modelCount_other": "{{count}} modeller",
  "settingsModel.modelOption": "{{model}} · {{provider}}",
  "settingsModel.models": "Modeller",
  "settingsModel.modelsHint": "Valgte modeller vises i modellvelgeren.",
  "settingsModel.modelsHintService":
    "Samtalemodeller er valgfrie. La dem stå umerket for å bruke denne nøkkelen bare til {{service}}.",
  "settingsModel.modelsIdle":
    "Lim inn en nøkkel for å se modellene den kan bruke.",
  "settingsModel.modelsIdleOllama":
    "Skriv inn endepunkt-URL-en for å se de installerte modellene.",
  "settingsModel.modelsSaveFailed":
    "Nøkkelen ble lagret, men modellisten ble ikke det. {{message}}",
  "settingsModel.noChatModels": "Ingen samtalemodeller",
  "settingsModel.noModelsFound": "Fant ingen modeller.",
  "settingsModel.notSet": "Ikke angitt",
  "settingsModel.nothingElse": "Ingenting annet bruker denne nøkkelen.",
  "settingsModel.ollamaHint": "Ingen API-nøkkel kreves.",
  "settingsModel.orgProviders": "Organisasjonens leverandører",
  "settingsModel.orgSettings": "Organisasjonsinnstillinger",
  "settingsModel.organization": "Organisasjon",
  "settingsModel.pasteFirst": "Lim inn en nøkkel først.",
  "settingsModel.personal": "Personlig",
  "settingsModel.personalProviders": "Personlige leverandører",
  "settingsModel.previewFailed": "Kunne ikke sjekke hva dette påvirker.",
  "settingsModel.provider": "Leverandør",
  "settingsModel.providerErrorHeadline":
    "{{provider}} kunne ikke sjekke denne nøkkelen",
  "settingsModel.reasonEndpoint": "Sjekk endepunkt-URL-en.",
  "settingsModel.reasonOllamaUnreachable": "Sjekk URL-en og at Ollama kjører.",
  "settingsModel.reasonPrefix": "{{provider}}-nøkler starter med {{prefix}}.",
  "settingsModel.reasonRejected":
    "Sjekk at du kopierte hele nøkkelen, eller opprett en ny.",
  "settingsModel.reasonTryAgain": "Prøv igjen om et øyeblikk.",
  "settingsModel.reasonWrongProvider":
    "Dette ser ut som en {{provider}}-nøkkel.",
  "settingsModel.reasonWrongProviderVowel":
    "Dette ser ut som en {{provider}}-nøkkel.",
  "settingsModel.reconnect": "Koble til på nytt",
  "settingsModel.rejected":
    "{{provider}} avviste denne nøkkelen {{date}}. Samtaler som bruker den, stopper til du erstatter den.",
  "settingsModel.rejectedAskAdmin":
    "{{provider}} avviste denne nøkkelen {{date}}. Be en eier eller administrator om å erstatte den.",
  "settingsModel.rejectedHeadline": "{{provider}} avviste denne nøkkelen",
  "settingsModel.remove": "Fjern",
  "settingsModel.removeProvider": "Fjern leverandør",
  "settingsModel.removeTitle": "Fjerne {{provider}}?",
  "settingsModel.removing": "Fjerner",
  "settingsModel.replace": "Erstatt",
  "settingsModel.replaceKey": "Erstatt nøkkel",
  "settingsModel.restrictBody":
    "Medlemmer kan bare bruke organisasjonens leverandører.",
  "settingsModel.restrictConfirm": "Begrens nøkler",
  "settingsModel.restrictDescription":
    "Medlemmer kan bare bruke organisasjonens leverandører, og nøkler de har lagt til, slutter å fungere.",
  "settingsModel.restrictLabel": "Begrens personlige API-nøkler",
  "settingsModel.restrictMemberBuilder":
    "Den personlige Builder.io-tilkoblingen deres slutter å fungere.",
  "settingsModel.restrictMemberChats":
    "Samtalene deres bytter til organisasjonens leverandører.",
  "settingsModel.restrictMemberKeys_one":
    "{{providers}}-nøkkelen deres slutter å fungere.",
  "settingsModel.restrictMemberKeys_other":
    "{{providers}}-nøklene deres slutter å fungere.",
  "settingsModel.restrictNewKeysBody":
    "Medlemmer kan ikke legge dem til. Eiere og administratorer kan fortsatt gjøre det.",
  "settingsModel.restrictNewKeysTitle": "Nye personlige nøkler",
  "settingsModel.restrictTitle": "Begrense personlige API-nøkler?",
  "settingsModel.restricted":
    "Eiere og administratorer har begrenset personlige API-nøkler.",
  "settingsModel.restrictedRow":
    "Brukes ikke så lenge personlige API-nøkler er begrenset.",
  "settingsModel.restricting": "Begrenser",
  "settingsModel.retry": "Prøv igjen",
  "settingsModel.save": "Lagre",
  "settingsModel.savedRejected":
    "{{provider}} avviste den lagrede nøkkelen. Lim inn en ny.",
  "settingsModel.saving": "Lagrer",
  "settingsModel.selectAll": "Velg alle",
  "settingsModel.settingLoadFailed":
    "Kunne ikke laste inn denne innstillingen.",
  "settingsModel.unreachableHeadline": "Kunne ikke nå {{provider}}",
  "settingsModel.view": "Vis",
  "settingsModel.whatHappens": "Hva som skjer",
  "settingsModel.who": "Hvem kan bruke den",
  "settingsModel.whoHintAdmin":
    "Personlige leverandører er bare dine. Organisasjonens leverandører fungerer for alle i {{org}}.",
  "settingsModel.whoHintMember":
    "Bare eiere og administratorer kan legge til leverandører for organisasjonen.",
  "settingsModel.whoHintService": "Tjenester bruker organisasjonsnøkler.",
  "settingsSubAgents.connect": "Koble til agent",
  "settingsSubAgents.orgApps": "Apper i {{org}}",
  "settingsSubAgents.workspaceApps": "Apper i arbeidsområdet",
  "settingsSubAgents.external": "Eksterne agenter",
  "settingsSubAgents.custom": "Egendefinerte agenter",
  "settingsSubAgents.managedByAdmins": "Administrert av administratorer",
  "settingsSubAgents.appsEmpty": "Ingen apper er tilkoblet ennå",
  "settingsSubAgents.externalEmpty":
    "Koble til Foundry, Gemini Enterprise, Anthropic eller en hvilken som helst A2A-agent.",
  "settingsSubAgents.externalEmptyTitle": "Ingen eksterne agenter ennå",
  "settingsSubAgents.customEmpty":
    "Definer en fokusert agent som hovedagenten kan delegere til.",
  "settingsSubAgents.customEmptyTitle": "Ingen egendefinerte agenter ennå",
  "settingsSubAgents.addAgent": "Legg til agent",
  "settingsSubAgents.describe": "Beskriv den for agenten",
  "settingsSubAgents.describePlaceholder":
    "En designagent som vurderer oppsett og foreslår retning for brukergrensesnittet",
  "settingsSubAgents.write": "Skriv den selv",
  "settingsSubAgents.name": "Navn",
  "settingsSubAgents.description": "Beskrivelse",
  "settingsSubAgents.instructions": "Instruksjoner",
  "settingsSubAgents.loadFailed": "Kunne ikke laste inn tilkoblede agenter.",
  "settingsSubAgents.statusUnreachable": "Kan ikke nås",
  "settingsSubAgents.edit": "Rediger",
  "settingsSubAgents.editTitle": "Rediger {{name}}",
  "settingsSubAgents.removeDescription":
    "Agenten slutter å delegere til {{name}} for alle i {{org}}.",
  "settingsSubAgents.removeDescriptionSolo":
    "Agenten slutter å delegere til {{name}}.",
  "settingsSubAgents.directoryTitle": "Koble til en agent",
  "settingsSubAgents.anyAgent": "En hvilken som helst A2A-agent",
  "settingsSubAgents.anyAgentHint": "Lim inn en URL til et agentkort.",
  "settingsSubAgents.registryLink": "Bla i Global A2A Registry",
  "settingsSubAgents.connectTitle": "Koble til {{name}}",
  "settingsSubAgents.close": "Lukk",
  "observability.insights.rawTrace":
    "Rå sporing (hvert spenn, med inndata og utdata)",
};

export default messages;
