class Terminal {
  constructor(element, text, speed = 50) {
    this.ele = element;
    this.text = text;
    this.speed = speed;
    this.index = 0;
    this.create_header();
    this.create_body();
    this.type();
  }

  create_header() {
    const header = document.createElement("div");
    header.className = "terminal-header";

    const buttons = document.createElement("div");
    buttons.className = "buttons";

    ["close", "minimize", "maximize"].forEach((cls) => {
      const btn = document.createElement("div");
      btn.className = "button " + cls;
      buttons.appendChild(btn);
    });

    header.appendChild(buttons);
    this.ele.appendChild(header);
  }

  create_body() {
    const body = document.createElement("div");
    body.className = "terminal-body";
    this.body = body;
    this.ele.appendChild(body);
  }

  type() {
    this.body.innerHTML =
      this.text.slice(0, this.index) + '<span class="cursor"></span>';
    this.index++;

    if (this.index <= this.text.length) {
      setTimeout(() => this.type(), this.speed);
    }
  }

  reset() {
    this.index = 0;
    this.body.innerHTML = "";
  }
}

const terminalElement = document.getElementById("terminal");

const myTerminal = new Terminal(
    terminalElement,
    `$ git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
$ _`, 
);

terminalElement.addEventListener('mouseenter', () => {
  myTerminal.reset();
  myTerminal.type();
});
