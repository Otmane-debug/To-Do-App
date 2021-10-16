let data;

let x = document.getElementById("in");
let y = document.getElementById("ok");
let w = document.getElementById("del");
let z = document.getElementById("data");

function f1(data){
    let div = document.createElement("div");
    let del = document.createElement("button");

    div.style.marginLeft = "30%";
    div.style.marginRight = "30%";
    div.style.marginTop = "30px";
    div.style.width = "40%"
    div.innerHTML = data;

    del.innerHTML = "Remove";
    del.style.marginLeft = "30%";
    del.style.marginRight = "30%";

    z.append(div);
    z.append(del);

    del.onclick = () => {
        div.remove();
        del.remove();
    }
}

function f2(data){
    while(data.firstChild)
    {
        data.removeChild(data.firstChild);
    }
}

y.onclick = () => f1(x.value);
w.onclick = () => f2(z);