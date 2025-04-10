export function header() {
  if (location.hostname !== "localhost") {
    document.head.insertAdjacentHTML("");
  }

  const menu = [
    { text: "Home", href: "/54-grupe-dom/" },
    { text: "Text", href: "/54-grupe-dom/text" },
    { text: "Food", href: "/54-grupe-dom/food" },
    { text: "Darzas", href: "/54-grupe-dom/darzas" },
    { text: "Header", href: "/54-grupe-dom/header" },
    { text: "Click", href: "/54-grupe-dom/click" },
  ];

  const lp = location.pathname;
  const currentPage = lp.length > 1 && lp.at(-1) === "/" ? lp.slice(0, -1) : lp;
  let linksHTML = "";

  for (const link of menu) {
    let activePage = "";
    if (link.href === currentPage) {
      activePage = "active";
    }

    linksHTML += `<a class="link ${activePage}" href="${link.href}">${link.text}</a>`;
  }

  const HTML = `
        <header class="main-header">
            <img class="logo" src="/54-grupe-dom/food/pizza.png" alt="Logo">
            <nav class="main-nav">${linksHTML}</nav>
        </header>`;

  document.body.insertAdjacentHTML("afterbegin", HTML);
}
