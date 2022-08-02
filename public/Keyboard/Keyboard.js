
var memoriaAcento = '';

const Keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },

    eventHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",
        capsLock: false
    },

    init() {
        // Create main elements
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        // Setup main elements
        this.elements.main.classList.add("keyboard", "keyboard--hidden");
        this.elements.keysContainer.classList.add("keyboard__keys");
        this.elements.keysContainer.appendChild(this._createKeys());

        this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

        // Add to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);

        // Automatically use keyboard for elements with .use-keyboard-input
        document.querySelectorAll(".use-keyboard-input").forEach(element => {
            element.addEventListener("focus", () => {
                memoriaAcento = ''
                this.open(element.value, currentValue => {
                    element.value = currentValue;
                });
            });
        });

        document.querySelectorAll(".use-keyboard-input-null").forEach(element => {
            element.addEventListener("focus", () => {
                element.value = ''
                memoriaAcento = ''
                this.open(element.value, currentValue => {
                    element.value = currentValue;
                });
            });
        });

        const concernedElementA = document.querySelector(".keyboard")
        const concernedElementB = document.querySelector(".use-keyboard-input")

        document.addEventListener("mousedown", (event) => {
            if (concernedElementA.contains(event.target)==0 && concernedElementB.contains(event.target)==0){
                memoriaAcento = ''
                this.close();
            }
        })
    },

    _createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "'", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
            "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "´", "[", //"enter",
            "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ç", "~", "]",
            "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", ";", "/",
            "space"
        ];

        // Creates HTML for an icon
        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`;
        };

        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["backspace", "[", "]", "/"].indexOf(key) !== -1;

            // Add attributes/classes
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__key");

            switch (key) {
                case "backspace":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("backspace");

                    keyElement.addEventListener("click", () => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this._triggerEvent("oninput");
                    });

                    break;

                case "caps":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
                    keyElement.innerHTML = createIconHTML("keyboard_capslock");

                    keyElement.addEventListener("click", () => {
                        this._toggleCapsLock();
                        keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
                    });

                    break;

                case "enter":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("keyboard_return");

                    keyElement.addEventListener("click", () => {
                        this.properties.value += "\n";
                        this._triggerEvent("oninput");
                    });

                    break;

                case "space":
                    keyElement.classList.add("keyboard__key--extra-wide");
                    keyElement.innerHTML = createIconHTML("space_bar");

                    keyElement.addEventListener("click", () => {
                        this.properties.value += " ";
                        this._triggerEvent("oninput");
                    });

                    break;

                case "done":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
                    keyElement.innerHTML = "ˬ";

                    keyElement.addEventListener("click", () => {
                        this.close();
                        this._triggerEvent("onclose");
                    });

                    break;

                default:
                    keyElement.textContent = key.toLowerCase();

                    keyElement.addEventListener("click", () => {
                        if (memoriaAcento=="´"){
                            if (key.toLowerCase() == "a") this.properties.value += this.properties.capsLock ? "Á" : "á";
                            else if (key.toLowerCase() == "e") this.properties.value += this.properties.capsLock ? "É" : "é";
                            else if (key.toLowerCase() == "i") this.properties.value += this.properties.capsLock ? "Í" : "í";
                            else if (key.toLowerCase() == "o") this.properties.value += this.properties.capsLock ? "Ó" : "ó";
                            else if (key.toLowerCase() == "u") this.properties.value += this.properties.capsLock ? "Ú" : "ú";
                            else this.properties.value += this.properties.capsLock ? memoriaAcento+key.toUpperCase() : memoriaAcento+key.toLowerCase();
                            memoriaAcento=""
                        }
                        else if (memoriaAcento=="`"){
                            if (key.toLowerCase() == "a") this.properties.value += this.properties.capsLock ? "À" : "à";
                            else if (key.toLowerCase() == "e") this.properties.value += this.properties.capsLock ? "È" : "è";
                            else if (key.toLowerCase() == "i") this.properties.value += this.properties.capsLock ? "Ì" : "ì";
                            else if (key.toLowerCase() == "o") this.properties.value += this.properties.capsLock ? "Ò" : "ò";
                            else if (key.toLowerCase() == "u") this.properties.value += this.properties.capsLock ? "Ù" : "ù";
                            else this.properties.value += this.properties.capsLock ? memoriaAcento+key.toUpperCase() : memoriaAcento+key.toLowerCase();
                            memoriaAcento=""
                        }
                        else if (memoriaAcento=="~"){
                            if (key.toLowerCase() == "a") this.properties.value += this.properties.capsLock ? "Ã" : "ã";
                            else if (key.toLowerCase() == "e") this.properties.value += this.properties.capsLock ? "Ẽ" : "ẽ";
                            else if (key.toLowerCase() == "i") this.properties.value += this.properties.capsLock ? "Ĩ" : "ĩ";
                            else if (key.toLowerCase() == "o") this.properties.value += this.properties.capsLock ? "Õ" : "õ";
                            else if (key.toLowerCase() == "u") this.properties.value += this.properties.capsLock ? "Ũ" : "ũ";
                            else this.properties.value += this.properties.capsLock ? memoriaAcento+key.toUpperCase() : memoriaAcento+key.toLowerCase();
                            memoriaAcento=""
                        }
                        else if (memoriaAcento=="^"){
                            if (key.toLowerCase() == "a") this.properties.value += this.properties.capsLock ? "Â" : "â";
                            else if (key.toLowerCase() == "e") this.properties.value += this.properties.capsLock ? "Ê" : "ê";
                            else if (key.toLowerCase() == "i") this.properties.value += this.properties.capsLock ? "Î" : "î";
                            else if (key.toLowerCase() == "o") this.properties.value += this.properties.capsLock ? "Ô" : "ô";
                            else if (key.toLowerCase() == "u") this.properties.value += this.properties.capsLock ? "Û" : "û";
                            else this.properties.value += this.properties.capsLock ? memoriaAcento+key.toUpperCase() : memoriaAcento+key.toLowerCase();
                            memoriaAcento=""
                        }
                        else if (key.toLowerCase() == "'") this.properties.value += this.properties.capsLock ? '"' : "'";
                        else if (key.toLowerCase() == "1") this.properties.value += this.properties.capsLock ? "!" : "1";
                        else if (key.toLowerCase() == "2") this.properties.value += this.properties.capsLock ? "@" : "2";
                        else if (key.toLowerCase() == "3") this.properties.value += this.properties.capsLock ? "#" : "3";
                        else if (key.toLowerCase() == "4") this.properties.value += this.properties.capsLock ? "$" : "4";
                        else if (key.toLowerCase() == "5") this.properties.value += this.properties.capsLock ? "%" : "5";
                        else if (key.toLowerCase() == "6") this.properties.value += this.properties.capsLock ? "¨" : "6";
                        else if (key.toLowerCase() == "7") this.properties.value += this.properties.capsLock ? "&" : "7";
                        else if (key.toLowerCase() == "8") this.properties.value += this.properties.capsLock ? "*" : "8";
                        else if (key.toLowerCase() == "9") this.properties.value += this.properties.capsLock ? "(" : "9";
                        else if (key.toLowerCase() == "0") this.properties.value += this.properties.capsLock ? ")" : "0";
                        else if (key.toLowerCase() == "-") this.properties.value += this.properties.capsLock ? "_" : "-";
                        else if (key.toLowerCase() == "=") this.properties.value += this.properties.capsLock ? "+" : "=";
                        else if (key.toLowerCase() == "´") memoriaAcento = this.properties.capsLock ? "`" : "´";
                        else if (key.toLowerCase() == "[") this.properties.value += this.properties.capsLock ? "{" : "[";
                        else if (key.toLowerCase() == "~") memoriaAcento = this.properties.capsLock ? "^" : "~";
                        else if (key.toLowerCase() == "]") this.properties.value += this.properties.capsLock ? "}" : "]";
                        else if (key.toLowerCase() == ",") this.properties.value += this.properties.capsLock ? "<" : ",";
                        else if (key.toLowerCase() == ".") this.properties.value += this.properties.capsLock ? ">" : ".";
                        else if (key.toLowerCase() == ";") this.properties.value += this.properties.capsLock ? ":" : ";";
                        else if (key.toLowerCase() == "/") this.properties.value += this.properties.capsLock ? "?" : "/";
                        else this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                        
                        this._triggerEvent("oninput");
                    });

                    break;
            }

            fragment.appendChild(keyElement);

            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"));
            }
        });

        return fragment;
    },

    _triggerEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] == "function") {
            this.eventHandlers[handlerName](this.properties.value);
        }
    },

    _toggleCapsLock() {
        this.properties.capsLock = !this.properties.capsLock;
        for (const key of this.elements.keys) {
            if (key.childElementCount === 0) {
                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
                //key.textContent = "A"
                if (this.properties.capsLock){
                    if (key.textContent == "'") key.textContent = '"'
                    else if (key.textContent == "1") key.textContent = "!"
                    else if (key.textContent == "2") key.textContent = "@"
                    else if (key.textContent == "3") key.textContent = "#"
                    else if (key.textContent == "4") key.textContent = "$"
                    else if (key.textContent == "5") key.textContent = "%"
                    else if (key.textContent == "6") key.textContent = "¨"
                    else if (key.textContent == "7") key.textContent = "&"
                    else if (key.textContent == "8") key.textContent = "*"
                    else if (key.textContent == "9") key.textContent = "("
                    else if (key.textContent == "0") key.textContent = ")"
                    else if (key.textContent == "-") key.textContent = "_"
                    else if (key.textContent == "=") key.textContent = "+"
                    else if (key.textContent == "´") key.textContent = "`"
                    else if (key.textContent == "[") key.textContent = "{"
                    else if (key.textContent == "~") key.textContent = "^"
                    else if (key.textContent == "]") key.textContent = "}"
                    else if (key.textContent == ",") key.textContent = "<"
                    else if (key.textContent == ".") key.textContent = ">"
                    else if (key.textContent == ";") key.textContent = ":"
                    else if (key.textContent == "/") key.textContent = "?"
                }
                else {
                    if (key.textContent == '"') key.textContent = "'"
                    else if (key.textContent == "!") key.textContent = "1"
                    else if (key.textContent == "@") key.textContent = "2"
                    else if (key.textContent == "#") key.textContent = "3"
                    else if (key.textContent == "$") key.textContent = "4"
                    else if (key.textContent == "%") key.textContent = "5"
                    else if (key.textContent == "¨") key.textContent = "6"
                    else if (key.textContent == "&") key.textContent = "7"
                    else if (key.textContent == "*") key.textContent = "8"
                    else if (key.textContent == "(") key.textContent = "9"
                    else if (key.textContent == ")") key.textContent = "0"
                    else if (key.textContent == "_") key.textContent = "-"
                    else if (key.textContent == "+") key.textContent = "="
                    else if (key.textContent == "`") key.textContent = "´"
                    else if (key.textContent == "{") key.textContent = "["
                    else if (key.textContent == "^") key.textContent = "~"
                    else if (key.textContent == "}") key.textContent = "]"
                    else if (key.textContent == "<") key.textContent = ","
                    else if (key.textContent == ">") key.textContent = "."
                    else if (key.textContent == ":") key.textContent = ";"
                    else if (key.textContent == "?") key.textContent = "/"
                }
            }
        }
    },

    open(initialValue, oninput, onclose) {
        this.properties.value = initialValue || "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.remove("keyboard--hidden");
    },

    close() {
        this.properties.value = "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.add("keyboard--hidden");
    }
};

window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();
});
