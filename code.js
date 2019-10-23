let drama_function_counter = -1;
let drama_functions_list = new Array;

window.onload = function()
{

}

//Constructor for DRAMA_Function data type
function DRAMA_FUNCTION()
{
    this.name = new String;
    this.variables = new Array;
    this.parameters = new Array;

}

function generate_stapel_html()
{
    html = "<table><tbody>"

    for(let index = drama_function_counter; index >=0; index--)
    {
        current_function = drama_functions_list[index];

        for( let var_idx = 0; var_idx < current_function.variables.length; var_idx++)
        {
            let css_class = "stapel_element";
            if(var_idx == 0)
                css_class += " thicc_top";
            html += `<tr><td class="${css_class}">${current_function.variables[var_idx]}</td></tr>`;

        }

        html += `<tr><td class="stapel_element">Oude R8</td></tr><tr><td class="stapel_element thicc_bottom">TKA: ${current_function.name}</td></tr>`

        for( let param_idx = 0; param_idx < current_function.parameters.length; param_idx++)
        {
            let css_class = "stapel_element";
            if(param_idx == current_function.parameters.length)
                css_class += " thicc_bottom";
            html += `<tr><td class="${css_class}">${current_function.parameters[param_idx]}</td></tr>`;
        }
    }

    html += "</table></tbody>"
    return html;
}

//Generates the html to configure a new function
function make_drama_function()
{
    drama_function_counter++;
    drama_functions_list[drama_function_counter] = new DRAMA_FUNCTION()
    html = new String;
    html += input("function_name", "Name of the function", "", true);
    html += "<br>";
    html += selection("field_type", ["Variable", "Parameter"]);
    html += input("field_name", " Name of the var/param","", false);
    html += button("submit_field", "add_new_field()", "add");
    html += "<br>"
    html += button("submit_function", "submit_function()", "Submit function call");
    return html;
}

//Gives the current function it's name and delete the function call interface
function submit_function()
{
    given_function_name = document.getElementById("function_name").value;
    drama_functions_list[drama_function_counter].name = given_function_name;
    draw_to_id("function_selection", "");
}

//adds a new element to the current function
function add_new_field()
{
    user_input = document.getElementById("field_name").value;
    type = document.getElementById("field_type").value;

    current_function = drama_functions_list[drama_function_counter];

    if(type == "Variable")
        current_function.variables.push(user_input);
    else if(type == "Parameter")
        current_function.parameters.push(user_input);
    else
        console.log("you dun fucked up.");
    
    
}

//Draws html from a given string to an element with the given id
function draw_to_id(id, html)
{
    document.getElementById(id).innerHTML = html;
}

//Generates the HTML for a button
function button(id, function_called, text)
{
    return `<button id=${id} onclick=\"${function_called}\">${text}</button>`;
}

//Generates the HTML for a selection
function selection(id, selection_list)
{
    html = `<select id=${id}>`;
    for(let i = 0; i < selection_list.length; i++)
    {
        html += `<option value=\"${selection_list[i]}\">${selection_list[i]}</option>`;
    }
    html += "</select>";
    return html;

}

//Generates the HTML for an input field
function input(id, text, text_in, br)
{
    html = `${text}: <input id=\"${id}\" type=\"text\" value=\"${text_in}\"/>`;
    if (br == true)
        html += "<br>";
    return html;
}
