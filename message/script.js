let but = document.querySelector("#but");
but.addEventListener("click", mes);

function mes() {
    let user = document.getElementsByName("user")[0].value;
    let message = document.getElementsByName("message")[0].value;

    let regExpBBBold = /<(b|u|i|s|h1|p)>(.*)<(\/)(b|u|i|s|h1|p)>/ig;

    message = message.replace(regExpBBBold, "<span style='color:red'>&lt;$1&gt;</span> $2 <span style='color:red'>&lt;$3$1&gt;</span><br>");

    document.write(`
    <fieldset>
    <legend>${user}</legend>
    <div>${message}</div>
    </fieldset>
    `);
}