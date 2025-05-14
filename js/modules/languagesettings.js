export function initLanguageSelector() {
  const selector = document.getElementById("language-select");
  if (!selector) return;

  selector.addEventListener("change", (e) => {
    const lang = e.target.value;
    document.documentElement.lang = lang;
    localStorage.setItem("preferredLanguage", lang);
    // 這裡可以加上多語言切換邏輯，例如切換文字內容
  });

  const saved = localStorage.getItem("preferredLanguage");
  if (saved) {
    document.documentElement.lang = saved;
    selector.value = saved;
  }
}
