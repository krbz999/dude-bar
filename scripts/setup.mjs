class DudeBar {
  static async init(app, [html]) {
    const template = "modules/dude-bar/templates/dude-bar.hbs";
    const div = document.createElement("DIV");
    div.innerHTML = await renderTemplate(template, {});
    if (!app.popOut) html.firstChild.before(div.firstElementChild);
    else html.querySelector("HEADER").after(div.firstElementChild);
    app.setPosition();
  }
}

Hooks.on("renderSidebarTab", DudeBar.init);
