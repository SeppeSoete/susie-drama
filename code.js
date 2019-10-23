window.onload = function(){
    draw_commands();

}

function draw_stapel(stapel){

}

function draw_to_id(String html, String id){
    document.getElementById(id).innerHTML = html;

}

//Generates the HTML for a button
function make_button(String id, String function_called, String text){
    return `<button id=${id} onclick=\"${function_called}\">${text}</button>`;
}
