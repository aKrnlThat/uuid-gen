document.addEventListener("DOMContentLoaded", function () {
  const e = getCookie("displayMode");
  if (e) {
    document.body.classList.add(
      e === "dark" ? "text-bg-dark" : "text-bg-light"
    );
  } else {
    setCookie("displayMode", "dark", Number.MAX_SAFE_INTEGER);
    document.querySelector("#FyAy4c").style.display = "initial";
  }
  if (getCookie("automaticallyGenerateUUID") === "true") {
    generate();
    document.querySelector("#\\36tCJwn").checked = true;
  }
  if (getCookie("forceRandom") === "true") {
    document.querySelector("#Gn7TIy").checked = true;
  }
  const t = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  t.forEach((e) => new bootstrap.Tooltip(e));
});
function getCookie(e) {
  const t = e + "=";
  const o = document.cookie.split(";");
  for (let e = 0; e < o.length; e++) {
    let n = o[e];
    while (n.charAt(0) === " ") n = n.substring(1, n.length);
    if (n.indexOf(t) === 0) return n.substring(t.length, n.length);
  }
  return "";
}
function setCookie(e, t, o) {
  const n = new Date();
  n.setTime(n.getTime() + o * 24 * 60 * 60 * 1e3);
  const c = "expires=" + n.toUTCString();
  document.cookie = e + "=" + t + ";" + c + ";path=/";
}
function generate() {
  const e = document.querySelector("#CCBz1i");
  if (crypto.randomUUID) {
    e.textContent = crypto.randomUUID();
  } else if (getCookie("forceRandom") === "false") {
    e.textContent = "10000000-1000-4000-8000-100000000000".replace(
      /[018]/g,
      (e) =>
        (
          +e ^
          (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+e / 4)))
        ).toString(16)
    );
  }
  const t = document.querySelector("#ti2W8R");
  t.classList.add("visible");
  t.classList.remove("invisible");
}
function generateNoHyphens() {
  if (getCookie("forceRandom") === "false") {
    document.querySelector("#CCBz1i").textContent =
      "10000000100040008000100000000000".replace(/[018]/g, (e) =>
        (
          +e ^
          (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+e / 4)))
        ).toString(16)
      );
  } else {
    alert(
      "Cannot generate: You have Force full randomness enabled and cannot use the fallback due to disabling hyphens."
    );
  }
}
function toggleDisplayMode() {
  const e = document.body;
  const t = e.classList.contains("text-bg-light") ? "dark" : "light";
  e.classList.toggle("text-bg-dark", t === "dark");
  e.classList.toggle("text-bg-light", t === "light");
  setCookie("displayMode", t, Number.MAX_SAFE_INTEGER);
}
function toggleAutoGen() {
  const e =
    getCookie("automaticallyGenerateUUID") === "false" ? "true" : "false";
  setCookie("automaticallyGenerateUUID", e, Number.MAX_SAFE_INTEGER);
}
function toggleForceRandom() {
  const e = getCookie("forceRandom") === "false" ? "true" : "false";
  setCookie("forceRandom", e, Number.MAX_SAFE_INTEGER);
}
function toggleHyphens() {
  const e = document.querySelector("#Fv7mkq");
  if (document.querySelector("#YU5rX9").checked === false) {
    e.onclick = generateNoHyphens;
  } else {
    e.onclick = generate;
  }
}
function copy() {
  const e = document.querySelector("#CCBz1i").textContent;
  navigator.clipboard.writeText(e).then(() => {
    alert("Copied to clipboard");
  });
}
