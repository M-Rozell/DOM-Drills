


document.addEventListener('DOMContentLoaded', function () {

    let colors = [
        'red',
        'green',
        'blue',
        'cyan',
        'magenta',
        'yellow',
        'black',
        'purple'
    ];

    let div = document.createElement("div");
    div.className = "header-container";
    document.body.appendChild(div);

    let h1 = document.createElement("h1");
    h1.innerText = "This is an h1!";
    h1.className = "h1";
    div.appendChild(h1);
    document.body.appendChild(div);
    h1.addEventListener("dblclick", function () {
        h1.style.color = colors[Math.floor(Math.random() * colors.length)];
    });

    let h2 = document.createElement("h2");
    h2.innerText = "This is an h2!";
    h2.className = "h2";
    div.appendChild(h2);
    document.body.appendChild(div);
    h2.addEventListener("dblclick", function () {
        h2.style.color = colors[Math.floor(Math.random() * colors.length)];
    });

    let h3 = document.createElement("h3");
    h3.innerText = "This is an h3!";
    h3.className = "h3";
    div.appendChild(h3);
    document.body.appendChild(div);
    h3.addEventListener("dblclick", function () {
        h3.style.color = colors[Math.floor(Math.random() * colors.length)];
    });

    let h4 = document.createElement("h4");
    h4.innerText = "This is an h4!";
    h4.className = "h4";
    div.appendChild(h4);
    document.body.appendChild(div);
    h4.addEventListener("dblclick", function () {
        h4.style.color = colors[Math.floor(Math.random() * colors.length)];
    });

    let h5 = document.createElement("h5");
    h5.innerText = "This is an h5!";
    h5.className = "h5";
    div.appendChild(h5);
    document.body.appendChild(div);
    h5.addEventListener("dblclick", function () {
        h5.style.color = colors[Math.floor(Math.random() * colors.length)];
    });

    let h6 = document.createElement("h6");
    h6.innerText = "This is an h6!";
    h6.className = "h6";
    div.appendChild(h6);
    document.body.appendChild(div);
    h6.addEventListener("dblclick", function () {
        h6.style.color = colors[Math.floor(Math.random() * colors.length)];
    });

    let btn = document.getElementsByClassName('btn');
    let ul = document.createElement("ul");
    document.body.appendChild(ul);

    let listCount = 1;

    btn[0].addEventListener("click", listButton);

    function listButton() {
        let list = document.createElement("li");
        document.body.appendChild(list);
        list.textContent = "This is a list item " + listCount++;

        list.addEventListener("click", function () {
            list.style.color = colors[Math.floor(Math.random() * colors.length)];
        })
        list.addEventListener("dblclick", function () {
            this.remove();
        })
    }



});
