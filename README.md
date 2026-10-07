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

Vychází z logo konceptu. Barvy jsou odečtené z pixelů originálu, ne odhadnuté.

| Token | Hodnota | Role |
|---|---|---|
| `--gold` | `#EFD750` | citrínová — **výplň**. Vždy s `--on-gold` textem na sobě |
| `--accent` | `#EFD750` | linka a text akcentu (na tmavé je totožná se zlatou) |
| `--paper` | `#0E1730` | navy podklad |
| `--surf` | `#16213F` | plochy a diagramy |
| `--ink` | `#F4F6FB` | text |

**Zlatá má dvě role a nejsou zaměnitelné.** Jako výplň nese navy text (11,5:1).
Jako linka funguje jen na tmavém podkladu — na bílé má `#EFD750` kontrast
**1,45:1**, takže ve světlé variantě by akcent musel být navy a zlatá by zbyla
jen na výplně. Proto je web tmavý: je to register, ve kterém má značka plnou sílu.

Kontrast: zlatá na navy 12,3:1, text 16,4:1, tlumený text 5,3:1.

Písmo: **Outfit** (nadpisy, UI) a **JetBrains Mono** (data, popisky v animacích).
Slovní značka v logu **není sázená** — je to originální artwork. Outfit je k ní
nejbližší volná shoda, ale běží znatelně užší, takže se pro samotné logo nepoužívá.

## Značka

V `assets/` je **originální artwork**, ne překreslení. Průhlednost je dopočítaná
ze dvou dodaných verzí lockupu (na bílé a na navy): pro každý pixel platí
`P = α·C + (1−α)·pozadí`, a dvě různá pozadí tu soustavu jednoznačně řeší.

Dvě věci, na které ten dopočet sám nestačí a řeší se zvlášť:

- **Prostřední kosočtverec je díra.** Na světlé verzi jím prosvítá bílá, na tmavé
  navy — není to bílý tvar. Klíčování bílé by ho buď vykouslo, nebo zalepilo.
- **Slovní značka a středový bod se invertují** (černé na světlé, bílé na tmavé),
  takže je z těch dvou verzí dopočítat nejde. Vybarvují se popředím.

Navíc nejsou oba soubory zarovnané stejně: mark je posunutý o (−5, +4), text má
posun jiný, takže se vytahuje po částech — mark soustavou, text přímo z jasu
světlé verze, kde je černý na bílé.

| Soubor | Použití |
|---|---|
| `tessera-lockup.png` | hlavička a patička, bílý text — pro tmavý podklad |
| `tessera-lockup-on-light.png` | tentýž lockup s černým textem, pro světlý podklad |
| `tessera-mark.png` | samotná značka, favicon |

Rastr v 1156×308 se v hlavičce vykresluje na 143×38, takže je ostrý i na retině.
**Pro tisk a velké formáty si vyžádej vektor** — tohle je stále bitmapa.

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

