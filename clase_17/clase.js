function construir() {
    let elemento = prompt("Agrega un elemento"):

    switch (elemento) {
        case "input":
            let input = document.createElement("input");
            document.body.append(input);
            break;
        case "button":
        let button = document.createElement("button");
        let textButton = prompt("Que texto quieres agregar?");
        button.innerText = textButton;  
        document.body.append(button);
            break;
        case "textarea":
            let textarea = document.createElement("textarea");
            let textarea = prompt("Que texto quieres agregar?");
            textarea.innerText = textarea;
            document.body.append(textarea);
            break;
        case "h1":
            let h1 = document.createElement("h1");
            let textH1 = prompt("Que texto quieres agregar?");
            h1.innerText = textH1;
            document.body.append(h1);
            break;
        case "p":
            let p = document.createElement("p");
            let textP = prompt("Que texto quieres agregar?");
            p.innerText = textP;
            document.body.append(p);
            break;
            default:
            alert("QUE HACES GUEY");
    }
}
construir();