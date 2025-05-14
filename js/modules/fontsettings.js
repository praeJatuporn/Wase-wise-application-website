export function initFontSizeSelector() {
  console.log("Font selector loaded ✅");

  const selector = document.getElementById("font-size-select");
  if (!selector) {
    console.warn("Selector not found");
    return;
  }

  selector.addEventListener("change", (e) => {
    const fontSize = e.target.value;
    console.log("Changed font size to:", fontSize); // ✅ 觀察是否成功
    document.documentElement.style.fontSize = fontSize;
    localStorage.setItem("preferredFontSize", fontSize);
  });

  const saved = localStorage.getItem("preferredFontSize");
  if (saved) {
    document.documentElement.style.fontSize = saved;
    selector.value = saved;
  }
}