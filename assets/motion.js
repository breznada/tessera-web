/* Tessera — site motion.
   Five sequences, one system. Because the brand is one colour, no beat encodes
   state with hue: secured is solid, exposed is outlined or dashed, a finding is
   inverted, and anything spent drops to light grey. Every timeline pauses
   offscreen, and `prefers-reduced-motion` renders the finished frame instead. */
(function(){
  if(!window.gsap) return;
  gsap.registerPlugin(ScrollTrigger);

  const ICONS = {"ansible":{"vb":"0 0 24 24","d":["M10.617 11.473l4.686 3.695-3.102-7.662zM12 0C5.371 0 0 5.371 0 12s5.371 12 12 12 12-5.371 12-12S18.629 0 12 0zm5.797 17.305c-.011.471-.403.842-.875.83-.236 0-.416-.09-.664-.293l-6.19-5-2.079 5.203H6.191L11.438 5.44c.124-.314.427-.52.764-.506.326-.014.63.189.742.506l4.774 11.494c.045.111.08.234.08.348-.001.009-.001.009-.001.023z"]},"docker":{"vb":"0 0 24 24","d":["M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"]},"dotenv":{"vb":"0 0 24 24","d":["M24 0v24H0V0h24ZM10.933 15.89H6.84v5.52h4.198v-.93H7.955v-1.503h2.77v-.93h-2.77v-1.224h2.978v-.934Zm2.146 0h-1.084v5.52h1.035v-3.6l2.226 3.6h1.118v-5.52h-1.036v3.686l-2.259-3.687Zm5.117 0h-1.208l1.973 5.52h1.19l1.976-5.52h-1.182l-1.352 4.085-1.397-4.086ZM5.4 19.68H3.72v1.68H5.4v-1.68Z"]},"github":{"vb":"0 0 24 24","d":["M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"]},"gitlab":{"vb":"0 0 24 24","d":["m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z"]},"jenkins":{"vb":"0 0 24 24","d":["M2.872 24h-.975a3.866 3.866 0 01-.07-.197c-.215-.666-.594-1.49-.692-2.154-.146-.984.78-1.039 1.374-1.465.915-.66 1.635-1.025 2.627-1.62.295-.179 1.182-.624 1.281-.829.201-.408-.345-.982-.49-1.3-.225-.507-.345-.937-.376-1.435-.824-.13-1.455-.627-1.844-1.185-.63-.925-1.066-2.635-.525-3.936.045-.103.254-.305.285-.463.06-.308-.105-.72-.12-1.048-.06-1.692.284-3.15 1.425-3.66.463-1.84 2.113-2.453 3.673-3.367.58-.342 1.224-.562 1.89-.807 2.372-.877 6.027-.712 7.994.783.836.633 2.176 1.97 2.656 2.939 1.262 2.555 1.17 6.825.287 9.934-.12.421-.29 1.032-.533 1.533-.168.35-.689 1.05-.625 1.36.064.314 1.19 1.17 1.432 1.395.434.422 1.26.975 1.324 1.5.07.557-.248 1.336-.41 1.875-.217.721-.436 1.441-.654 2.131H2.87zm11.104-3.54c-.545-.3-1.361-.622-2.065-.757-.87-.164-.78 1.188-.75 1.994.03.643.36 1.316.51 1.744.076.197.09.41.256.449.3.068 1.29-.326 1.575-.479.6-.328 1.064-.844 1.574-1.189.016-.17.016-.34.03-.508a2.648 2.648 0 00-1.095-.277c.314-.15.75-.15 1.035-.332l.016-.193c-.496-.03-.69-.254-1.021-.436zm7.454 2.935a17.78 17.78 0 00.465-1.752c.06-.287.215-.918.178-1.176-.059-.459-.684-.799-1.004-1.086-.584-.525-.95-.975-1.56-1.469-.249.375-.78.615-.983.914 1.447-.689 1.71 2.625 1.141 3.69.09.329.391.45.514.735l-.086.166h1.29c.013 0 .03 0 .044.014zm-6.634-.012c-.05-.074-.1-.135-.15-.209l-.301.195h.45zm2.77 0c.008-.209.018-.404.03-.598-.53.029-.825-.48-1.196-.527-.324-.045-.6.361-1.02.195-.095.105-.183.227-.284.316.154.18.295.375.424.584h.815c.014-.164.135-.285.3-.285.165 0 .284.121.284.27h.66zm2.116 0c-.314-.479-.947-.898-1.68-.555l-.03.541h1.71zm-8.51 0l-.104-.344c-.225-.72-.36-1.26-.405-1.68-.914-.436-1.875-.87-2.654-1.426-.15-.105-1.109-1.35-1.23-1.305-1.739.676-3.359 1.86-4.814 2.984.256.557.48 1.141.69 1.74h8.505zm8.265-2.113c-.029-.512-.164-1.56-.48-1.74-.66-.39-1.846.78-2.34.943.045.15.135.271.15.48.285-.074.645-.029.898.092-.299.03-.629.03-.824.164-.074.195.016.48-.029.764.69.197 1.5.303 2.385.332.164-.227.225-.645.211-1.082zm-4.08-.36c-.044.375.046.51.12.943 1.26.391 1.034-1.74-.135-.959zM8.76 19.5c-.45.457 1.27 1.082 1.814 1.115 0-.29.165-.564.135-.77-.65-.118-1.502-.042-1.945-.347zm5.565.215c0 .043-.061.03-.068.064.58.451 1.014.545 1.802.51.354-.262.67-.563 1.043-.807-.855.074-1.931.607-2.774.23zm3.42-17.726c-1.606-.906-4.35-1.591-6.076-.731-1.38.692-3.27 1.84-3.899 3.292.6 1.402-.166 2.686-.226 4.109-.018.757.36 1.42.391 2.242-.2.338-.825.38-1.26.356-.146-.729-.4-1.549-1.155-1.63-1.064-.116-1.845.764-1.89 1.683-.06 1.08.833 2.864 2.085 2.745.488-.046.608-.54 1.139-.54.285.57-.445.75-.523 1.154-.016.105.06.511.104.705.233.944.744 2.16 1.245 2.88.635.9 1.884 1.051 3.229 1.141.24-.525 1.125-.48 1.706-.346-.691-.27-1.336-.945-1.875-1.529-.615-.676-1.23-1.41-1.261-2.28 1.155 1.604 2.1 3 4.2 3.704 1.59.525 3.45-.254 4.664-1.109.51-.359.811-.93 1.17-1.439 1.35-1.936 1.98-4.71 1.846-7.394-.06-1.111-.06-2.221-.436-2.955-.389-.781-1.695-1.471-2.475-.781-.15-.764.63-1.23 1.545-.96-.66-.854-1.336-1.858-2.266-2.384zM13.58 14.896c.615 1.544 2.724 1.363 4.505 1.323-.084.194-.256.435-.465.515-.57.232-2.145.408-2.937-.012-.506-.27-.824-.873-1.102-1.227-.137-.172-.795-.608-.012-.609zm.164-.87c.893.464 2.52.517 3.731.48.066.267.066.593.068.913-1.55.08-3.386-.304-3.794-1.395h-.005zm6.675-.586c-.473.9-1.145 1.897-2.539 1.928-.023-.284-.045-.735 0-.904 1.064-.103 1.727-.646 2.543-1.017zm-.649-.667c-1.02.66-2.154 1.375-3.824 1.21-.351-.31-.485-1-.14-1.458.181.313.06.885.57.97.944.165 2.038-.579 2.73-.84.42-.713-.046-.976-.42-1.433-.782-.93-1.83-2.1-1.802-3.51.314-.224.346.346.391.45.404.96 1.424 2.175 2.174 3 .18.21.48.39.51.524.092.39-.254.854-.209 1.11zm-13.439-.675c-.314-.184-.393-.99-.768-1.01-.535-.03-.438 1.05-.436 1.68-.37-.33-.435-1.365-.164-1.89-.308-.15-.445.164-.618.284.22-1.59 2.34-.734 1.99.96zM4.713 5.995c-.685.756-.54 2.174-.459 3.188 1.244-.785 2.898.06 2.883 1.394.595-.016.223-.744.115-1.215-.353-1.528.592-3.187.041-4.59-1.064.084-1.939.52-2.578 1.215zm9.12 1.113c.307.562.404 1.148.84 1.57.195.19.574.424.387.95-.045.121-.365.391-.551.45-.674.195-2.254.03-1.721-.81.563.015 1.314.36 1.732-.045-.314-.524-.885-1.53-.674-2.13zm6.198-.013h.068c.33.668.6 1.375 1.004 1.965-.27.628-2.053 1.19-2.023.057.39-.17 1.05-.035 1.395-.25-.193-.556-.48-1.006-.434-1.771zm-6.927-1.617c-1.422-.33-2.131.592-2.56 1.553-.384-.094-.231-.615-.135-.883.255-.701 1.28-1.633 2.119-1.506.359.057.848.386.576.834zM9.642 1.593c-1.56.44-3.56 1.574-4.2 2.974.495-.07.84-.321 1.33-.351.186-.016.428.074.641.015.424-.104.78-1.065 1.102-1.41.31-.345.685-.496.94-.81.167-.09.409-.074.42-.33-.073-.075-.15-.135-.232-.105v.017z"]},"kubernetes":{"vb":"0 0 24 24","d":["M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 0 .173-.756l.002-.011L7.585 9.7a5.143 5.143 0 0 0-.73 3.255l2.514-.725.002-.009zm1.145-1.98a.44.44 0 0 0 .699-.337l.01-.005.15-2.62a5.144 5.144 0 0 0-3.01 1.442l2.147 1.523.004-.002zm.76 2.75l.723.349.722-.347.18-.78-.5-.623h-.804l-.5.623.179.779zm1.5-3.095a.44.44 0 0 0 .7.336l.008.003 2.134-1.513a5.188 5.188 0 0 0-2.992-1.442l.148 2.615.002.001zm10.876 5.97l-5.773 7.181a1.6 1.6 0 0 1-1.248.594l-9.261.003a1.6 1.6 0 0 1-1.247-.596l-5.776-7.18a1.583 1.583 0 0 1-.307-1.34L2.1 5.573c.108-.47.425-.864.863-1.073L11.305.513a1.606 1.606 0 0 1 1.385 0l8.345 3.985c.438.209.755.604.863 1.073l2.062 8.955c.108.47-.005.963-.308 1.34zm-3.289-2.057c-.042-.01-.103-.026-.145-.034-.174-.033-.315-.025-.479-.038-.35-.037-.638-.067-.895-.148-.105-.04-.18-.165-.216-.216l-.201-.059a6.45 6.45 0 0 0-.105-2.332 6.465 6.465 0 0 0-.936-2.163c.052-.047.15-.133.177-.159.008-.09.001-.183.094-.282.197-.185.444-.338.743-.522.142-.084.273-.137.415-.242.032-.024.076-.062.11-.089.24-.191.295-.52.123-.736-.172-.216-.506-.236-.745-.045-.034.027-.08.062-.111.088-.134.116-.217.23-.33.35-.246.25-.45.458-.673.609-.097.056-.239.037-.303.033l-.19.135a6.545 6.545 0 0 0-4.146-2.003l-.012-.223c-.065-.062-.143-.115-.163-.25-.022-.268.015-.557.057-.905.023-.163.061-.298.068-.475.001-.04-.001-.099-.001-.142 0-.306-.224-.555-.5-.555-.275 0-.499.249-.499.555l.001.014c0 .041-.002.092 0 .128.006.177.044.312.067.475.042.348.078.637.056.906a.545.545 0 0 1-.162.258l-.012.211a6.424 6.424 0 0 0-4.166 2.003 8.373 8.373 0 0 1-.18-.128c-.09.012-.18.04-.297-.029-.223-.15-.427-.358-.673-.608-.113-.12-.195-.234-.329-.349-.03-.026-.077-.062-.111-.088a.594.594 0 0 0-.348-.132.481.481 0 0 0-.398.176c-.172.216-.117.546.123.737l.007.005.104.083c.142.105.272.159.414.242.299.185.546.338.743.522.076.082.09.226.1.288l.16.143a6.462 6.462 0 0 0-1.02 4.506l-.208.06c-.055.072-.133.184-.215.217-.257.081-.546.11-.895.147-.164.014-.305.006-.48.039-.037.007-.09.02-.133.03l-.004.002-.007.002c-.295.071-.484.342-.423.608.061.267.349.429.645.365l.007-.001.01-.003.129-.029c.17-.046.294-.113.448-.172.33-.118.604-.217.87-.256.112-.009.23.069.288.101l.217-.037a6.5 6.5 0 0 0 2.88 3.596l-.09.218c.033.084.069.199.044.282-.097.252-.263.517-.452.813-.091.136-.185.242-.268.399-.02.037-.045.095-.064.134-.128.275-.034.591.213.71.248.12.556-.007.69-.282v-.002c.02-.039.046-.09.062-.127.07-.162.094-.301.144-.458.132-.332.205-.68.387-.897.05-.06.13-.082.215-.105l.113-.205a6.453 6.453 0 0 0 4.609.012l.106.192c.086.028.18.042.256.155.136.232.229.507.342.84.05.156.074.295.145.457.016.037.043.09.062.129.133.276.442.402.69.282.247-.118.341-.435.213-.71-.02-.039-.045-.096-.065-.134-.083-.156-.177-.261-.268-.398-.19-.296-.346-.541-.443-.793-.04-.13.007-.21.038-.294-.018-.022-.059-.144-.083-.202a6.499 6.499 0 0 0 2.88-3.622c.064.01.176.03.213.038.075-.05.144-.114.28-.104.266.039.54.138.87.256.154.06.277.128.448.173.036.01.088.019.13.028l.009.003.007.001c.297.064.584-.098.645-.365.06-.266-.128-.537-.423-.608zM16.4 9.701l-1.95 1.746v.005a.44.44 0 0 0 .173.757l.003.01 2.526.728a5.199 5.199 0 0 0-.108-1.674A5.208 5.208 0 0 0 16.4 9.7zm-4.013 5.325a.437.437 0 0 0-.404-.232.44.44 0 0 0-.372.233h-.002l-1.268 2.292a5.164 5.164 0 0 0 3.326.003l-1.27-2.296h-.01zm1.888-1.293a.44.44 0 0 0-.27.036.44.44 0 0 0-.214.572l-.003.004 1.01 2.438a5.15 5.15 0 0 0 2.081-2.615l-2.6-.44-.004.005z"]},"terraform":{"vb":"0 0 24 24","d":["M1.44 0v7.575l6.561 3.79V3.787zm21.12 4.227l-6.561 3.791v7.574l6.56-3.787zM8.72 4.23v7.575l6.561 3.787V8.018zm0 8.405v7.575L15.28 24v-7.578z"]}};
  const REDUCE = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $  = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));
  const NS = 'http://www.w3.org/2000/svg';
  const live = $('#a11y-live');
  let C = {}, PLAYERS = {}, ctx = null;

  function readTokens(){
    const cs = getComputedStyle(document.documentElement);
    const g = n => cs.getPropertyValue('--'+n).trim();
    C = {ink:g('ink'), paper:g('paper'), surf:g('surf'), dim:g('third'),
         exposed:g('a-70'), faint:g('a-45'), spent:g('a-25'), line:g('a-12')};
  }
  const mark = n => ICONS[n] ? '<svg viewBox="'+ICONS[n].vb+'" aria-hidden="true"><path d="'+ICONS[n].d[0]+'"/></svg>' : '';
  const say = t => { if(live) live.textContent = t };

  /* progressive redaction — one string rebuilt per frame, settling to a fixed
     length so the mask never leaks how long the real value was */
  const GLYPHS = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#$%&@!?*+=/<>';
  function redact(src, p, outLen){
    const target = outLen || src.length;
    const n = Math.max(1, Math.round(src.length + (target - src.length) * Math.max(0,(p-.55)/.45)));
    let out = '';
    for(let i=0;i<n;i++){
      const ph = (p - (i/src.length)*.6) / .4;
      out += ph <= 0 ? (src[i] || '•') : (ph < 1 ? GLYPHS[(Math.random()*GLYPHS.length)|0] : '•');
    }
    return out;
  }
  const redactTween = (node, src, dur, outLen) => {
    const o = {p:0};
    return gsap.to(o, {p:1, duration:dur, ease:'none',
      onUpdate(){ node.textContent = redact(src, o.p, outLen) },
      onComplete(){ node.textContent = '•'.repeat(outLen || src.length) }});
  };

  /* ════ A1 · sprawl ═══════════════════════════════════ */
  const SPRAWL = [
    ['github','ci.yml','ghp_R7kQ2m'],         ['docker','Dockerfile','npm_9f3cK2'],
    ['jenkins','Jenkinsfile','svc:Pa55w0rd'], ['dotenv','.env','AWS_SECRET'],
    ['kubernetes','secret.yaml','regcred'],   ['gitlab','.gitlab-ci.yml','GL_TOKEN'],
    ['terraform','main.tf','tf_api_9c4d'],    ['ansible','group_vars.yml','vault_pass']
  ];
  const CW = 150, CH = 40, GX = 16, GY = 14;
  const gcd = (a,b)=> b ? gcd(b, a%b) : a;

  function buildSprawl(){
    const field = $('#field'); if(!field) return;
    field.innerHTML = '';
    const W = field.clientWidth, H = field.clientHeight - 42;
    if(W < 40 || H < 40) return;

    const cols = Math.max(2, Math.min(6, Math.floor((W+GX)/(CW+GX))));
    const rows = Math.max(3, Math.min(5, Math.floor((H+GY)/(CH+GY))));
    const cells = cols*rows, total = Math.min(20, cells);
    const nOrg = Math.min(8, Math.max(2, Math.round(total*.4)));
    const nG1  = Math.ceil((total-nOrg)*.62);
    /* a coprime stride scatters the fixed slots and never repeats one */
    const step = [7,11,13,17,19,5,3,1].find(v=> v < cells && gcd(v,cells) === 1) || 1;
    const gridW = cols*CW+(cols-1)*GX, gridH = rows*CH+(rows-1)*GY;
    const offX = (W-gridW)/2 + CW/2, offY = (H-gridH)/2 + CH/2;

    const oEls = [], g1 = [], g2 = [];
    for(let i=0;i<total;i++){
      const row = SPRAWL[i % SPRAWL.length], slot = (i*step) % cells;
      const el = document.createElement('div');
      el.className = 'chip' + (i < nOrg ? '' : ' chip--copy');
      el.innerHTML = '<span class="mk">'+mark(row[0])+'</span><b>'+row[1]+'</b><span class="val">'+row[2]+'</span>';
      if(i >= nOrg) el.setAttribute('aria-hidden','true');
      el.style.left = (offX + (slot%cols)*(CW+GX) + ((i*37)%9-4)) + 'px';
      el.style.top  = (offY + ((slot/cols)|0)*(CH+GY) + ((i*53)%7-3)) + 'px';
      field.appendChild(el);
      (i < nOrg ? oEls : (i < nOrg+nG1 ? g1 : g2)).push(el);
    }
    const pulses = [[26,24],[66,48],[22,64]].map(p=>{
      const d = document.createElement('div'); d.className='pulse';
      d.style.left = p[0]+'%'; d.style.top = p[1]+'%'; field.appendChild(d); return d;
    });

    const count = $('#sprawl-count'), sys = $('#sprawl-sys'), num = {v:8};
    const tl = gsap.timeline({paused:true, repeat:REDUCE?0:-1, repeatDelay:1.8});
    tl.call(()=>{ count.textContent='8'; sys.textContent='across 4 systems' }, null, 0)
      .from(oEls, {opacity:0, y:8, duration:.34, stagger:.05, ease:'power1.out'}, 0)
      .fromTo(g1, {opacity:0, scale:.92}, {opacity:1, scale:1, duration:.5, stagger:.05,  ease:'power1.out'}, .6)
      .fromTo(g2, {opacity:0, scale:.9},  {opacity:.7, scale:1, duration:.5, stagger:.045, ease:'power1.out'}, 1.45)
      .to(num, {v:312, duration:2, ease:'none', snap:{v:1},
                onUpdate(){ count.textContent = Math.round(num.v) }}, .6)
      .call(()=>{ sys.textContent = 'across 9 systems' }, null, 2.2);
    pulses.forEach((d,i)=> tl.fromTo(d, {opacity:.9, scale:.4},
      {opacity:0, scale:5.5, duration:.9, ease:'power2.out'}, 1.1+i*.42));

    PLAYERS.sprawl = {tl, loop:true, el:field.closest('.stage'), still(){
      tl.progress(0); gsap.set(oEls,{opacity:1,y:0,scale:1});
      gsap.set(g1,{opacity:1,scale:1}); gsap.set(g2,{opacity:.7,scale:1});
      gsap.set(pulses,{opacity:0});
      count.textContent='312'; sys.textContent='across 9 systems';
    }};
  }

  /* ════ A2 · deposit and seal ═════════════════════════ */
  const SRC = [
    {x:66,  y:46,  ic:'github',  k:'github/ci.yml', v:'ghp_R7kQ2m4X'},
    {x:414, y:46,  ic:'docker',  k:'Dockerfile',    v:'npm_9f3cK2mQ'},
    {x:66,  y:268, ic:'jenkins', k:'Jenkinsfile',   v:'svc:Pa55w0rd'},
    {x:414, y:268, ic:'dotenv',  k:'.env',          v:'sk_live_4eC39'}
  ];
  function buildVault(){
    const svg = $('#vault-svg'); if(!svg) return;
    gsap.set('#wires path', {attr:{stroke:C.spent}});
    gsap.set('#vframe', {attr:{fill:C.paper, stroke:C.line}});
    gsap.set('#vdoor',  {attr:{fill:C.surf,  stroke:C.faint}});
    gsap.set('#bolts .bolt', {attr:{fill:C.ink}});
    gsap.set('#hub',    {attr:{fill:C.ink}});
    gsap.set('#hubcut line', {attr:{stroke:C.surf}});
    gsap.set('#spokes line', {attr:{stroke:C.ink}});
    gsap.set('#index',  {attr:{fill:C.ink}});
    gsap.set('#shock',  {attr:{stroke:C.ink}});

    const ticks = $('#ticks'); ticks.innerHTML = '';
    for(let i=0;i<36;i++){
      const a = i*10*Math.PI/180, q = i%9===0, r0 = q?33:36;
      const ln = document.createElementNS(NS,'line');
      ln.setAttribute('x1',(240+r0*Math.sin(a)).toFixed(2)); ln.setAttribute('y1',(158-r0*Math.cos(a)).toFixed(2));
      ln.setAttribute('x2',(240+42*Math.sin(a)).toFixed(2)); ln.setAttribute('y2',(158-42*Math.cos(a)).toFixed(2));
      ln.setAttribute('stroke', q ? C.ink : C.faint);
      ticks.appendChild(ln);
    }
    const cards = $('#sources'), caps = $('#capsules');
    cards.innerHTML = ''; caps.innerHTML = '';
    const vals = [], plates = [], checks = [], capsN = [], wires = [];
    const mono = "'JetBrains Mono',monospace";
    SRC.forEach((sc,i)=>{
      const g = document.createElementNS(NS,'g');
      g.innerHTML =
        '<rect x="'+(sc.x-52)+'" y="'+(sc.y-19)+'" width="104" height="38" rx="3" fill="'+C.paper+'" stroke="'+C.faint+'"/>' +
        '<svg viewBox="0 0 24 24" x="'+(sc.x-44)+'" y="'+(sc.y-13)+'" width="13" height="13" fill="'+C.ink+'" aria-hidden="true"><path d="'+ICONS[sc.ic].d[0]+'"/></svg>' +
        '<text x="'+(sc.x-26)+'" y="'+(sc.y-3)+'" font-family="'+mono+'" font-size="9" letter-spacing=".5" fill="'+C.dim+'">'+sc.k+'</text>' +
        '<text x="'+(sc.x-44)+'" y="'+(sc.y+13)+'" font-family="'+mono+'" font-size="10" fill="'+C.exposed+'">'+sc.v+'</text>' +
        '<path d="M'+(sc.x+32)+','+(sc.y+10)+' l3,3 l6.5,-7.5" fill="none" stroke="'+C.ink+'" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" opacity="0"/>';
      cards.appendChild(g);
      plates.push(g.children[0]); vals.push(g.children[3]); checks.push(g.children[4]);
      const cap = document.createElementNS(NS,'g');
      cap.innerHTML = '<rect x="-13" y="-4.5" width="26" height="9" rx="4.5" fill="'+C.ink+'"/>' +
                      '<rect x="-6.5" y="-1" width="13" height="2" rx="1" fill="'+C.paper+'"/>';
      cap.setAttribute('opacity','0'); caps.appendChild(cap); capsN.push(cap);
      wires.push($('#w'+i));
    });
    const status = $('#vault-status'), slot = $('#slot'), shock = $('#shock');
    gsap.set('#dial', {svgOrigin:'240 158'}); gsap.set(shock, {svgOrigin:'240 158'});
    const lens = wires.map(w => w.getTotalLength());

    function reset(){
      wires.forEach((w,i)=> gsap.set(w,{attr:{'stroke-dasharray':lens[i],'stroke-dashoffset':lens[i],stroke:C.spent}}));
      capsN.forEach(c => gsap.set(c,{opacity:0, scale:1}));
      vals.forEach((t,i)=>{ t.textContent = SRC[i].v; gsap.set(t,{attr:{fill:C.exposed}}) });
      plates.forEach(r => gsap.set(r,{attr:{'stroke-dasharray':'none', stroke:C.faint}}));
      gsap.set(checks,{opacity:0});
      gsap.set('#bolts .bolt',{attr:{x:274}});
      gsap.set('#dial',{rotation:0});
      gsap.set(slot,{attr:{fill:C.faint}});
      gsap.set(shock,{opacity:0, scale:1});
      gsap.set('#vdoor',{attr:{stroke:C.faint}});
      status.textContent = 'SAFE · OPEN';
      gsap.set(status,{attr:{fill:C.dim}});
    }
    function along(i, node, dur){
      const w = wires[i], len = lens[i], o = {p:0};
      return gsap.to(o,{p:1, duration:dur, ease:'power1.inOut', onUpdate(){
        const pt = w.getPointAtLength(o.p*len); gsap.set(node,{x:pt.x,y:pt.y});
      }});
    }
    const tl = gsap.timeline({paused:true});
    tl.call(reset, null, 0).to('#dial',{rotation:'+=24', duration:1.9, ease:'none'}, 0);
    SRC.forEach((sc,i)=>{
      const t = i*.22;
      /* the line draws itself before anything travels down it */
      tl.to(wires[i], {attr:{'stroke-dashoffset':0}, duration:.45, ease:'power2.inOut'}, t)
        .set(capsN[i], {opacity:1}, t+.45)
        .add(along(i, capsN[i], .62), t+.45)
        .to(capsN[i], {opacity:0, scale:.55, duration:.16, ease:'power2.in'}, t+1.05)
        .to(slot, {attr:{fill:C.ink}, duration:.1, ease:'none'}, t+1.02)
        .to(slot, {attr:{fill:C.faint}, duration:.28, ease:'power2.out'}, t+1.14)
        /* the source keeps its key and loses its value */
        .add(redactTween(vals[i], sc.v, .42, 10), t+1.06)
        .to(vals[i], {attr:{fill:C.dim}, duration:.42, ease:'none'}, t+1.06)
        .to(wires[i], {attr:{stroke:C.line}, duration:.4, ease:'none'}, t+1.1)
        .to(plates[i], {attr:{'stroke-dasharray':'3 3', stroke:C.line}, duration:.3}, t+1.2)
        .fromTo(checks[i], {opacity:0, scale:.6}, {opacity:1, scale:1, duration:.26, ease:'back.out(2)'}, t+1.22);
    });
    /* the seal — two long arcs joined at zero velocity, so it reverses smoothly */
    const S = 1.95;
    tl.to('#dial', {rotation:'+=720', duration:.95, ease:'power2.inOut'}, S)
      .to('#dial', {rotation:'-=430', duration:.85, ease:'power2.inOut'}, S+.95)
      .to('#bolts .bolt', {attr:{x:292}, duration:.18, stagger:.04, ease:'power4.in'}, S+1.78)
      .fromTo(shock, {opacity:.85, scale:1}, {opacity:0, scale:1.2, duration:.28, ease:'expo.out'}, S+1.94)
      .to('#vdoor', {attr:{stroke:C.ink}, duration:.2}, S+1.94)
      .call(()=>{ status.textContent='SAFE · SEALED';
                  say('Four credentials deposited. Safe sealed.') }, null, S+1.98)
      .to(status, {attr:{fill:C.ink}, duration:.3, ease:'none'}, S+1.98);

    PLAYERS.vault = {tl, loop:false, el:svg.closest('.stage'), still(){ tl.progress(1).pause() }};
  }

  /* ════ A3 · masking, encryption, pseudonymisation ════ */
  const PHONE='+420 771 226 918', HEAD=5, TAIL=3;
  const NAME='Jan Novak', CIPHER='9f3ac2e1b84d07f6a52c';
  const CARD='4539 8871 0025 1147', TOKEN='7412-9930-5586-2071';
  const HEX='0123456789abcdef';

  function buildProtect(){
    const vP = $('#v-phone'), vN = $('#v-name'), vC = $('#v-card');
    if(!vP) return;
    const range = PHONE.length - TAIL - HEAD;
    /* masking overwrites in place — the kept digits never move */
    const maskedAt = k => {
      let out='';
      for(let i=0;i<PHONE.length;i++){
        const inR = i >= HEAD && i < PHONE.length - TAIL;
        out += (inR && i-HEAD < k) ? (PHONE[i]===' ' ? ' ' : '<i class="ast">*</i>') : PHONE[i];
      }
      return out;
    };
    /* encryption churns and grows — output length hides the input length */
    const cipherAt = p => {
      const len = Math.round(NAME.length + (CIPHER.length-NAME.length)*Math.min(1,p*1.4));
      const settled = Math.floor(Math.max(0,(p-.6)/.4) * CIPHER.length);
      let out='';
      for(let i=0;i<len;i++) out += (i<settled && i<CIPHER.length) ? CIPHER[i] : HEX[(Math.random()*16)|0];
      return out;
    };
    vC.classList.add('pswap');
    vC.innerHTML = '<i class="old">'+CARD+'</i><i class="new">'+TOKEN+'</i>';
    const cOld = vC.querySelector('.old'), cNew = vC.querySelector('.new');
    const badges = ['#b-phone','#b-name','#b-card'], caps = ['#c-phone','#c-name','#c-card'];
    const mk = {k:0}, en = {p:0};

    const tl = gsap.timeline({paused:true});
    tl.call(()=>{
        vP.textContent = PHONE; vN.textContent = NAME;
        gsap.set([vP,vN], {color:C.exposed});
        gsap.set(cOld, {autoAlpha:1, x:0, color:C.exposed});
        gsap.set(cNew, {autoAlpha:0, x:26, color:C.ink});
        gsap.set(badges,{opacity:0, x:-4}); gsap.set(caps,{opacity:0});
      }, null, 0)
      .fromTo(mk, {k:0}, {k:range, duration:range*.06, ease:'none',
        onUpdate(){ vP.innerHTML = maskedAt(Math.floor(mk.k)) },
        onComplete(){ vP.innerHTML = maskedAt(range) }}, .3)
      .to(vP, {color:C.ink, duration:.3, ease:'none'}, .3+range*.06-.2)
      .to('#b-phone', {opacity:1, x:0, duration:.26, ease:'power2.out'}, .3+range*.06)
      .to('#c-phone', {opacity:1, duration:.3, ease:'power1.out'}, .3+range*.06+.1)
      .fromTo(en, {p:0}, {p:1, duration:.52, ease:'none',
        onUpdate(){ vN.textContent = cipherAt(en.p) },
        onComplete(){ vN.textContent = CIPHER }}, 1.25)
      .to(vN, {color:C.ink, duration:.4, ease:'none'}, 1.4)
      .to('#b-name', {opacity:1, x:0, duration:.26, ease:'power2.out'}, 1.8)
      .to('#c-name', {opacity:1, duration:.3, ease:'power1.out'}, 1.9)
      /* substitution: exit faster than entry */
      .to(cOld, {autoAlpha:0, x:-22, duration:.22, ease:'power2.in'}, 2.15)
      .to(cNew, {autoAlpha:1, x:0,  duration:.38, ease:'power3.out'}, 2.22)
      .to('#b-card', {opacity:1, x:0, duration:.26, ease:'power2.out'}, 2.6)
      .to('#c-card', {opacity:1, duration:.3, ease:'power1.out'}, 2.7)
      .call(()=> say('Phone masked, name encrypted, card replaced with a format-preserving token.'), null, 2.9);

    PLAYERS.protect = {tl, loop:false, el:vP.closest('.stage'), still(){ tl.progress(1).pause() }};
  }

  /* ════ A4 · scan ═════════════════════════════════════ */
  function buildScan(){
    const code = $('#code'); if(!code) return;
    const lines = Array.from(code.querySelectorAll('.ln'));
    const bar = $('#scanline'), out = $('#found');
    const tl = gsap.timeline({paused:true});
    tl.call(()=>{ lines.forEach(l=>l.classList.remove('hit')); out.textContent='0' }, null, 0)
      .set(bar, {opacity:1, y:0}, 0)
      .to(bar, {y:()=>code.clientHeight, duration:1.4, ease:'none', onUpdate(){
          const y = gsap.getProperty(bar,'y'); let n = 0;
          lines.forEach(l=>{
            if(y >= l.offsetTop + l.offsetHeight*.62 && l.hasAttribute('data-secret')) l.classList.add('hit');
            if(l.classList.contains('hit')) n++;
          });
          if(out.textContent !== String(n)) out.textContent = n;
        }}, 0)
      .to(bar, {opacity:0, duration:.22, ease:'power1.in'}, 1.4)
      .call(()=> say('2 hardcoded credentials found.'), null, 1.5);

    PLAYERS.scan = {tl, loop:false, el:code.closest('.stage'), still(){
      tl.progress(0);
      lines.forEach(l=>{ if(l.hasAttribute('data-secret')) l.classList.add('hit') });
      out.textContent='2'; gsap.set(bar,{opacity:0});
    }};
  }

  /* ════ A5 · certificate rotation ═════════════════════ */
  const SLOT={x:250,y:128}, CA={x:416,y:128}, OVER={x:282,y:104}, EXIT={x:250,y:214};
  function buildPki(){
    const svg = $('#pki-svg'); if(!svg) return;
    const scene = $('#pki-scene'); scene.innerHTML = '';
    const mono = "'JetBrains Mono',monospace";
    const el = (t,a)=>{ const n = document.createElementNS(NS,t); for(const k in a) n.setAttribute(k,a[k]); return n };

    /* drawn as a certificate — body, subject, seal, draining validity bar.
       A plain rectangle reads as a progress bar, not as a credential. */
    function card(){
      const g = document.createElementNS(NS,'g');
      g.innerHTML =
        '<rect class="cbody" x="-56" y="-43" width="112" height="86" rx="4" stroke-width="1.25"/>' +
        '<line class="crule" x1="-56" y1="-25" x2="56" y2="-25" stroke-width="1"/>' +
        '<text class="ct1" x="-48" y="-31" font-family='+JSON.stringify(mono)+' font-size="8" letter-spacing=".9">CERTIFICATE</text>' +
        '<text class="ct2" x="-48" y="-12" font-family='+JSON.stringify(mono)+' font-size="8.5">CN=api.internal</text>' +
        '<text class="ct3" x="-48" y="0"  font-family='+JSON.stringify(mono)+' font-size="7.5">RSA 2048 · SHA-256</text>' +
        '<path class="crib" d="M32,16 l-2,22 l6,-5 l6,5 l-2,-22 Z"/>' +
        '<circle class="cseal" cx="36" cy="14" r="9" stroke-width="1.25"/>' +
        '<path class="cmark" d="M31.6,14.3 l2.8,3 l6,-7.5" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<rect class="ctrack" x="-48" y="10" width="64" height="5" rx="2.5"/>' +
        '<rect class="cfill"  x="-48" y="10" width="64" height="5" rx="2.5"/>' +
        '<text class="clab" x="-48" y="31" font-family='+JSON.stringify(mono)+' font-size="7.5" letter-spacing=".5">VALID 90d</text>';
      scene.appendChild(g);
      const q = c => g.querySelector('.'+c);
      const o = {g, body:q('cbody'), rule:q('crule'), t1:q('ct1'), t2:q('ct2'), t3:q('ct3'),
                 rib:q('crib'), seal:q('cseal'), mark:q('cmark'), track:q('ctrack'),
                 fill:q('cfill'), lab:q('clab')};
      gsap.set(o.fill,{transformOrigin:'left center'});
      return o;
    }
    /* one colour, so state is carried by stroke weight and dash, never hue.
       Stroked parts take stroke and filled parts take fill — never both, or the
       seal ring fills in and the check becomes a wedge. */
    const tint = (c, col, dur, dash) => {
      const t = dur || 0;
      return [
        gsap.to([c.body, c.seal, c.mark], {attr:{stroke:col}, duration:t, ease:'none'}),
        gsap.to([c.t1, c.rib, c.fill],    {attr:{fill:col},   duration:t, ease:'none'}),
        gsap.to(c.body, {attr:{'stroke-dasharray': dash || 'none'}, duration:0})
      ];
    };
    function paint(c, col){
      gsap.set(c.body, {attr:{fill:C.paper, stroke:col, 'stroke-dasharray':'none'}});
      gsap.set(c.rule, {attr:{stroke:C.line}});
      gsap.set(c.t1,   {attr:{fill:col}});
      gsap.set(c.t2,   {attr:{fill:C.ink}});
      gsap.set(c.t3,   {attr:{fill:C.dim}});
      gsap.set(c.rib,  {attr:{fill:col}});
      gsap.set(c.seal, {attr:{stroke:col, fill:C.paper}});
      gsap.set(c.mark, {attr:{stroke:col, fill:'none'}});
      gsap.set(c.track,{attr:{fill:C.line}});
      gsap.set(c.fill, {attr:{fill:col}});
      gsap.set(c.lab,  {attr:{fill:C.dim}});
    }

    const frame = document.createElementNS(NS,'g');
    frame.innerHTML =
      '<line x1="148" y1="128" x2="192" y2="128" stroke="'+C.spent+'" stroke-width="1" stroke-dasharray="3 3"/>' +
      '<line x1="308" y1="128" x2="374" y2="128" stroke="'+C.spent+'" stroke-width="1" stroke-dasharray="3 3"/>' +
      '<rect x="28" y="104" width="120" height="48" rx="3" fill="'+C.paper+'" stroke="'+C.line+'"/>' +
      '<rect x="40" y="116" width="14" height="10" rx="1.5" fill="none" stroke="'+C.dim+'"/>' +
      '<rect x="40" y="130" width="14" height="10" rx="1.5" fill="none" stroke="'+C.dim+'"/>' +
      '<circle cx="50" cy="121" r="1.4" fill="'+C.ink+'"/><circle cx="50" cy="135" r="1.4" fill="'+C.ink+'"/>' +
      '<text x="62" y="124" font-family='+JSON.stringify(mono)+' font-size="8" fill="'+C.ink+'">api.internal</text>' +
      '<text x="62" y="138" font-family='+JSON.stringify(mono)+' font-size="7.5" fill="'+C.dim+'">in production</text>' +
      '<rect id="canode" x="376" y="104" width="80" height="48" rx="3" fill="'+C.paper+'" stroke="'+C.line+'"/>' +
      '<text x="416" y="122" text-anchor="middle" font-family='+JSON.stringify(mono)+' font-size="8" fill="'+C.ink+'">ISSUING</text>' +
      '<text x="416" y="134" text-anchor="middle" font-family='+JSON.stringify(mono)+' font-size="8" fill="'+C.ink+'">CA</text>';
    scene.appendChild(frame);
    const caNode = frame.querySelector('#canode');
    const older = card(), fresh = card();

    const csr = document.createElementNS(NS,'g');
    csr.innerHTML = '<rect x="-11" y="-4" width="22" height="8" rx="4" fill="'+C.ink+'"/>';
    scene.appendChild(csr);

    const phase = el('text',{x:240,y:28,'text-anchor':'middle','font-family':mono,'font-size':10,'letter-spacing':1.4,fill:C.dim});
    const read  = el('text',{x:240,y:262,'text-anchor':'middle','font-family':mono,'font-size':9,'letter-spacing':.9,fill:C.dim});
    scene.appendChild(phase); scene.appendChild(read);

    const days = {d:90}, stat = {rot:0};
    const setPhase = t => phase.textContent = t;
    const tally = ()=> read.textContent = 'ROTATIONS ' + stat.rot + ' · DOWNTIME 0s · MANUAL STEPS 0';
    /* the label lifts out and drops back in — an instant swap is missed */
    const phaseTo = (txt, col) => gsap.timeline()
      .to(phase, {opacity:0, y:-5, duration:.16, ease:'power2.in'})
      .call(()=>{ phase.textContent = txt; gsap.set(phase,{attr:{fill:col}}) })
      .fromTo(phase, {opacity:0, y:6}, {opacity:1, y:0, duration:.3, ease:'power2.out'});

    function reset(){
      paint(older, C.ink); paint(fresh, C.ink);
      gsap.set(older.g,{x:SLOT.x, y:SLOT.y, scale:1, opacity:1});
      gsap.set(fresh.g,{x:CA.x, y:CA.y, scale:.18, opacity:0});
      gsap.set(older.fill,{scaleX:1}); gsap.set(fresh.fill,{scaleX:1});
      older.lab.textContent='VALID 90d'; fresh.lab.textContent='VALID 90d';
      gsap.set(csr,{x:SLOT.x+58, y:128, opacity:0});
      gsap.set(caNode,{attr:{stroke:C.line}});
      days.d=90; stat.rot=0; tally(); setPhase('IN SERVICE');
      gsap.set(phase,{attr:{fill:C.ink}, opacity:1, y:0});
    }

    const tl = gsap.timeline({paused:true, repeat:REDUCE?0:-1, repeatDelay:1.2});
    tl.call(reset, null, 0)
      /* validity drains linearly — time does not accelerate */
      .to(older.fill,{scaleX:.22, duration:3, ease:'none'}, .3)
      .to(days,{d:20, duration:3, ease:'none',
                onUpdate(){ older.lab.textContent='VALID '+Math.round(days.d)+'d' }}, .3)
      .add(phaseTo('NEARING EXPIRY', C.ink), 3.6)
      .add(tint(older, C.exposed, .35, '4 3'), 3.9)
      .add(phaseTo('REQUESTING · AUTOMATIC', C.ink), 5.8)
      .set(csr,{opacity:1, x:SLOT.x+58}, 6.0)
      .to(csr,{x:CA.x-44, duration:.75, ease:'power1.inOut'}, 6.0)
      .to(csr,{opacity:0, duration:.16, ease:'none'}, 6.7)
      .to(caNode,{attr:{stroke:C.ink}, duration:.16}, 6.8)
      .to(caNode,{attr:{stroke:C.line}, duration:.55, ease:'power2.out'}, 7.0)
      .add(phaseTo('ISSUED', C.ink), 8.0)
      .set(fresh.g,{opacity:1}, 8.15)
      .fromTo(fresh.g,{scale:.18},{scale:1, duration:.55, ease:'back.out(1.5)'}, 8.15)
      .to(fresh.g,{x:OVER.x, y:OVER.y, duration:1, ease:'power2.out'}, 8.9)
      /* the handover: the new one is valid while the old one still is */
      .add(phaseTo('BOTH VALID · NO DOWNTIME', C.ink), 10.2)
      .add(phaseTo('REPLACED', C.dim), 12.6)
      .add(tint(older, C.spent, .3), 12.9)
      .to(older.g,{x:EXIT.x, y:EXIT.y, opacity:0, duration:.6, ease:'power2.in'}, 12.95)
      .to(fresh.g,{x:SLOT.x, y:SLOT.y, duration:.6, ease:'power2.out'}, 13.05)
      .call(()=>{ stat.rot++; tally() }, null, 13.65)
      .add(phaseTo('IN SERVICE', C.ink), 14.6)
      .call(()=> say('Certificate rotated automatically. No downtime, no manual steps.'), null, 15.0)
      .to({}, {duration:1.6}, 15.0);

    PLAYERS.pki = {tl, loop:true, el:svg.closest('.stage'), still(){
      tl.progress(0);
      paint(older, C.spent); paint(fresh, C.ink);
      gsap.set(older.g,{x:EXIT.x, y:EXIT.y, opacity:0});
      gsap.set(fresh.g,{x:SLOT.x, y:SLOT.y, scale:1, opacity:1});
      gsap.set(fresh.fill,{scaleX:1}); fresh.lab.textContent='VALID 90d';
      gsap.set(csr,{opacity:0});
      stat.rot=1; tally(); setPhase('IN SERVICE'); gsap.set(phase,{attr:{fill:C.ink}, opacity:1, y:0});
    }};
  }

  /* ════ hero · under control ══════════════════════════
     The slogan, animated. Plaintext values redact one by one and their cells
     go from dashed to solid — exposed to held. The markup already carries the
     finished state, so without JS the hero still reads correctly; the script
     puts the plaintext back and then takes it away again.                    */
  function buildControl(){
    const grid = $('#control'); if(!grid) return;
    /* the stylesheet hides the tail of the grid on narrow viewports, so take the
       count from what is laid out rather than from how many cells exist */
    const cells = Array.from(grid.querySelectorAll('.cell')).filter(c => c.getClientRects().length > 0);
    if(!cells.length) return;
    const done = $('#ctrl-done'), total = $('#ctrl-total'), n = {v:0};
    if(total) total.textContent = String(cells.length);

    const tl = gsap.timeline({paused:true});
    tl.call(()=>{
      n.v = 0; done.textContent = '0';
      cells.forEach(c=>{ c.classList.add('is-open'); c.querySelector('.v').textContent = c.dataset.v });
    }, null, 0);

    cells.forEach((c,i)=>{
      const t = .35 + i*.055;
      tl.add(redactTween(c.querySelector('.v'), c.dataset.v, .34, 10), t)
        .call(()=>{ c.classList.remove('is-open'); done.textContent = ++n.v }, null, t+.3);
    });
    tl.call(()=> say('All sensitive values redacted and under control.'), null, .35 + cells.length*.055 + .4);

    PLAYERS.control = {tl, loop:false, el:grid.closest('.stage'), still(){
      tl.progress(0);
      cells.forEach(c=>{ c.classList.remove('is-open');
        c.querySelector('.v').textContent = '\u2022'.repeat(10) });
      done.textContent = String(cells.length);
      if(total) total.textContent = String(cells.length);
    }};
  }

  /* ════ jump navigation ═══════════════════════════════
     It moves you to a discipline; it never hides the others. Everything stays
     in the page and in the document order a crawler and a scroller both get. */
  function initJump(){
    const nav = $('.jump'); if(!nav) return;
    const links = Array.from(nav.querySelectorAll('a'));
    const targets = links.map(a => document.querySelector(a.getAttribute('href')));
    if(targets.some(t => !t)) return;
    const section = $('#cim-se-zabyvame') || $('#services');

    function spy(){
      const probe = scrollY + innerHeight * .32;
      let idx = -1;
      targets.forEach((t,i)=>{ if(t.offsetTop <= probe) idx = i });
      let inView = true;
      if(section){
        const r = section.getBoundingClientRect();
        inView = r.top < innerHeight * .6 && r.bottom > 0;
      }
      links.forEach((a,i)=>{
        if(inView && i === idx) a.setAttribute('aria-current','true');
        else a.removeAttribute('aria-current');
      });
    }
    addEventListener('scroll', spy, {passive:true});
    spy();
  }

  /* ════ build ═════════════════════════════════════════ */
  function build(){
    if(ctx) ctx.revert();
    ScrollTrigger.getAll().forEach(t=>t.kill());
    PLAYERS = {};
    readTokens();
    ctx = gsap.context(()=>{
      buildControl(); buildSprawl(); buildScan(); buildVault(); buildProtect(); buildPki();
      initJump();
      const keys = Object.keys(PLAYERS);
      if(REDUCE){ keys.forEach(k=> PLAYERS[k].still()); return }
      keys.forEach(k=>{
        const p = PLAYERS[k]; if(!p.el) return;
        ScrollTrigger.create({trigger:p.el, start:'top 88%',
          onEnter:     ()=> p.tl.play(),
          onEnterBack: ()=> p.loop && p.tl.play(),
          onLeave:     ()=> p.loop && p.tl.pause(),
          onLeaveBack: ()=> p.loop && p.tl.pause()});
        if(p.el.getBoundingClientRect().top < innerHeight) p.tl.play();
      });
    });
    ScrollTrigger.refresh();
  }

  document.addEventListener('visibilitychange', ()=>{
    Object.keys(PLAYERS).forEach(k=>{ const p = PLAYERS[k]; if(!p.loop) return;
      document.hidden ? p.tl.pause() : p.tl.play(); });
  });
  let lastW = innerWidth, rz;
  addEventListener('resize', ()=>{ clearTimeout(rz);
    rz = setTimeout(()=>{ if(Math.abs(innerWidth-lastW) > 24){ lastW = innerWidth; build() } }, 220); });
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ()=>
    requestAnimationFrame(()=> requestAnimationFrame(build)));

  build();
  /* chip widths depend on the webfont, so pack again once it lands */
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(build);
})();
