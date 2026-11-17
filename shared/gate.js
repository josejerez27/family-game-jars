// Grown-up check for outside links (Google Play Families policy).
// Any link to another website opens this first: a math question a grown-up
// answers, then a short note for parents about that site, then "Open".
(function () {
  const NOTES = {
    "scratch.mit.edu": {name: "Scratch", note: "A free coding site from MIT. Kids can start right away, no account needed. To save projects online, sign up together for a free account (Scratch asks kids not to use their real name as the username). Without an account, use File → Save to your computer."},
    "arcade.makecode.com": {name: "MakeCode Arcade", note: "Free game-making site from Microsoft. No account needed: projects save in this browser. Start with \"New? Start here!\" or a Beginner Skillmap."},
    "code.org": {name: "Code.org", note: "Free coding courses (now also called CodeAI). Tutorials work without an account, but progress isn't saved. If you make an account for a child under 13, it may ask for a parent's OK by email."},
    "projects.raspberrypi.org": {name: "Raspberry Pi Projects", note: "Free step-by-step projects from the Raspberry Pi Foundation. No account needed to follow one. It may ask about cookies first; \"necessary cookies only\" is fine."},
    "www.w3schools.com": {name: "W3Schools", note: "Free HTML lessons, no account needed. The site shows ads and offers paid upgrades and certificates, which you don't need. Start with \"Learn HTML now\"."},
    "www.typing.com": {name: "Typing.com", note: "Free typing lessons. They work without an account, but progress isn't saved. The free version shows ads. Kids under 13 need a parent's OK to make an account."},
    "www.chesskid.com": {name: "ChessKid", note: "Kid-safe chess: no chat and auto-generated usernames. Kids can play the bots and try lessons right away. To play other kids, sign up together. A paid Gold membership is optional."},
    "www.foldnfly.com": {name: "Fold 'N Fly", note: "Free paper airplane designs, no account needed. It shows Amazon product links and offers a paid membership you don't need. Start with \"The Basic\" or \"Arrowhead\" (both easy)."},
    "stellarium-web.org": {name: "Stellarium", note: "A free live map of the night sky. It may ask for your location to show the sky above you. That's optional."},
    "www.youtube.com": {name: "YouTube", note: "This opens YouTube search results. We don't control what shows up, so pick a video together. For younger kids, YouTube Kids is a safer choice."},
  };
  const DEFAULT = {name: "another website", note: "This leaves the app. Take a look together first."};

  const css = `
  .gate-bg{position:fixed;inset:0;background:#0008;z-index:9999;display:flex;align-items:center;justify-content:center;padding:16px}
  .gate{background:#fff;color:#2b2340;border-radius:20px;padding:20px;max-width:380px;width:100%;box-shadow:0 10px 40px #0004;font-family:Nunito,system-ui,sans-serif}
  .gate h3{font:800 1.35rem/1.2 "Baloo 2",sans-serif;margin:0 0 6px}
  .gate p{margin:0 0 12px;line-height:1.45}
  .gate .q{font:800 1.6rem "Baloo 2",sans-serif;text-align:center;margin:6px 0 10px}
  .gate input{width:100%;box-sizing:border-box;border:2px solid #e6dccb;border-radius:12px;padding:12px;font:800 1.3rem Nunito,sans-serif;text-align:center}
  .gate .err{color:#c81e1e;font-weight:800;min-height:1.3em;text-align:center;margin:6px 0}
  .gate .note{background:#fff6e8;border-radius:12px;padding:10px 12px;font-size:.95rem}
  .gate .row{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px}
  .gate button{border:0;border-radius:14px;padding:12px;font:800 1rem Nunito,sans-serif;background:#efe9df;color:#2b2340}
  .gate button.go{background:#2b2340;color:#fff}
  @keyframes gshake{25%{transform:translateX(-6px)}75%{transform:translateX(6px)}}
  .gate.shake{animation:gshake .25s 2}`;
  const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  let bg = null;

  function close(){ if (bg){ bg.remove(); bg = null; } }

  function open(url){
    close();
    let host = ""; try { host = new URL(url).host; } catch (e) {}
    const site = NOTES[host] || DEFAULT;
    let x, y;
    bg = document.createElement("div"); bg.className = "gate-bg";
    bg.innerHTML = `<div class="gate" role="dialog" aria-modal="true" aria-labelledby="gateT"></div>`;
    const box = bg.firstElementChild;
    bg.addEventListener("click", e => { if (e.target === bg) close(); });
    document.body.appendChild(bg);

    function ask(){
      x = rnd(12, 49); y = rnd(12, 49);
      box.innerHTML = `<h3 id="gateT">👋 Grown-up check</h3>
        <p>This opens ${esc(site.name)}, outside the app. Grown-ups, please answer:</p>
        <div class="q">${x} + ${y} = ?</div>
        <input id="gateA" type="number" inputmode="numeric" autocomplete="off" aria-label="Answer">
        <div class="err" id="gateE"></div>
        <div class="row"><button id="gateC">Cancel</button><button class="go" id="gateOK">Continue</button></div>`;
      const inp = box.querySelector("#gateA");
      const check = () => {
        if (+inp.value === x + y && inp.value !== "") return info();
        box.classList.remove("shake"); void box.offsetWidth; box.classList.add("shake");
        const err = "Not quite. Try this one."; ask(); box.querySelector("#gateE").textContent = err;
      };
      box.querySelector("#gateOK").onclick = check;
      inp.addEventListener("keydown", e => { if (e.key === "Enter") check(); });
      box.querySelector("#gateC").onclick = close;
      setTimeout(() => inp.focus(), 50);
    }
    function info(){
      box.innerHTML = `<h3 id="gateT">👋 For parents: ${esc(site.name)}</h3>
        <div class="note">${esc(site.note)}</div>
        <div class="row"><button id="gateC">Cancel</button><button class="go" id="gateGo">Open ↗</button></div>`;
      box.querySelector("#gateC").onclick = close;
      box.querySelector("#gateGo").onclick = () => { window.open(url, "_blank", "noopener"); close(); };
    }
    ask();
  }

  // Catch every link that leaves this site, including ones added later.
  document.addEventListener("click", e => {
    const a = e.target.closest && e.target.closest("a[href]");
    if (!a) return;
    let u; try { u = new URL(a.href, location.href); } catch (err) { return; }
    if (!/^https?:$/.test(u.protocol) || u.host === location.host) return;
    e.preventDefault(); e.stopPropagation();
    open(u.href);
  }, true);
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
})();
