# Tessera Information Services — web

Statický web, žádný build. Nahraj obsah této složky kamkoli (Netlify, Vercel,
S3+CloudFront, nginx) a funguje.

```
index.html          CZ · úvodní stránka
kontakt.html        CZ · kontakt
en/index.html       EN · home
en/contact.html     EN · contact
assets/site.css     tokeny, layout, komponenty animací
assets/motion.js    všech pět sekvencí (GSAP + ScrollTrigger z CDN)
assets/*.svg        značka — základní, malý řez, negativ
```

Lokální náhled: `python3 -m http.server 8912` v této složce.

Repo: `git@github.com:breznada/tessera-web.git` (větev `main`).

## Barvy a písmo

Jedna barva, podle pravidla značky. Na celém webu není **žádná barevná hodnota** —
všechny odstíny jsou achromatické. Rozlišení stavu nese tvar, ne odstín:

| Stav | Jak se pozná |
|---|---|
| zabezpečeno, vyřešeno | plná výplň, plný rámeček |
| venku, nevyřešeno | obrys, čárkovaný rámeček |
| **nález** | **inverze** — jediný poplašný signál, který web má |
| spotřebováno, nahrazeno | světle šedá |

Písmo: **Archivo** (nadpisy, UI) a **JetBrains Mono** (data, popisky v animacích).
Slovní značka má prostrkání `0.22em` — každé písmeno jako samostatná dlaždice.

Tmavý režim se řídí `prefers-color-scheme`; tokeny se převrátí a značka s nimi,
protože bere barvu z `--mk-ink` / `--mk-paper`.

## Struktura úvodní stránky

`Hero` → `O společnosti` → `Čím se zabýváme` + přepínač oborů.

Tři disciplíny ze zadání (Secrets Management / PKI Automation / Data
Transformation) sedí pod nadpisem Čím se zabýváme jako **rychlá navigace**.
Odkazy jen posunou stránku na daný use case — **nic neschovávají**. Všechny
čtyři služby jsou vidět pod sebou, když se scrolluje:

| Přepínač | Služby |
|---|---|
| Secrets Management | 01 Nalezení údajů · 02 Bezpečné úložiště |
| PKI Automation | 03 Automatizace PKI |
| Data Transformation | 04 Datová transformace |

Aktivní odkaz se zvýrazní podle toho, kde jsi — scroll-spy nastavuje
`aria-current`. Skrolování je `scroll-behavior: smooth`, ale reduced-motion
ho vypíná. Bez JS funguje navigace dál, jsou to obyčejné kotvy.

## Animace

Pět sekvencí, navázaných na sekce podle obsahu:

| Sekce | Animace | Co jediného ukazuje |
|---|---|---|
| Hero | Under control | 24 hodnot v otevřené podobě se po jedné začerní a jejich rámečky zpevní z čárkovaného na plný — slogan, zanimovaný |
| 01 Nalezení údajů | Scan | průchod kódem, nález sekne do inverze za 80 ms |
| 02 Bezpečné úložiště | Deposit & Seal | linka se nakreslí dřív, než po ní něco jede; zdroj si nechá klíč a ztratí hodnotu |
| 03 Automatizace PKI | Rotation | překryv — náhrada je platná, **dokud starý certifikát ještě platí** |
| 04 Datová transformace | Mask / Encrypt / Pseudonymise | tři techniky, tři různé pohyby |

**Texty uvnitř animací jsou vždy anglicky**, na obou jazykových verzích.
`aria-label` u každého diagramu zůstává v jazyce stránky, aby odečítač
obrazovky popsal scénu česky na české stránce.

Hero se přehraje jednou a zůstane v klidovém, „pod kontrolou" stavu — nesmyčkuje,
protože opakované vracení do plaintextu by říkalo, že se kontrola pořád ztrácí.
Markup nese rovnou hotový stav, takže bez JS je hero správně; skript plaintext
vrátí a znovu ho odebere.

Sekvence **Sprawl** zůstala v `motion.js`, ale nikde není umístěná — čeká na
element `#field`. Až pro ni bude místo, stačí ho přidat do markupu.

Každá smyčka se zastaví mimo viewport i při skryté záložce.
`prefers-reduced-motion` vykreslí hotový snímek každé sekvence místo animace.

## Dvojjazyčnost

Oddělené URL (`/` a `/en/`), `lang` podle verze, vzájemné `hreflang` včetně
`x-default`. Přepínač CZ/EN je v hlavičce na všech stránkách a odkazuje na
odpovídající stránku, ne na homepage.

**Anglické texty jsou pracovní překlad** tvého českého zadání — až budeš mít
finální znění, přepiš je v `en/`. Struktura je hotová.

## Co čeká na doplnění

- IČO a sídlo na stránce Kontakt
- fotografie a popisy odbornosti u obou karet — zástupná karta drží poměr
  stran 4:3, takže doplnění fotek layout nerozhodí

