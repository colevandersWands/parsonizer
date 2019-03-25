function parsons_buttons() {
    var re_shuffle_button = document.createElement("button");
    re_shuffle_button.id = "newInstanceLink";
    re_shuffle_button.innerHTML = "Re-Shuffle";

    var get_feedback_button = document.createElement("button");
    get_feedback_button.id = "feedbackLink";
    get_feedback_button.innerHTML = "Get Feedback";
    get_feedback_button.onclick = function(){
                                setTimeout(save_guess, 0);
                              };


    var modal_link = document.createElement("a");
    modal_link.style = "text-decoration: none; color: black;";
    modal_link.href = "#guesses-history";
    modal_link.setAttribute("data-modal-open", "");
    modal_link.innerHTML = "Review Guesses";
    var history_button = document.createElement("button");
    history_button.onclick = update_modal;
    history_button.appendChild(modal_link);

    var edit_button = document.createElement("button");
    edit_button.id = "edit";
    edit_button.innerHTML = "edit snippet";
    edit_button.onclick = function (){
                                        edit_mode(current_challenge);
                                    };

    var parsons_buttons = document.createElement("b");
    parsons_buttons.appendChild(re_shuffle_button);
    parsons_buttons.appendChild(get_feedback_button);
    parsons_buttons.appendChild(history_button);
    parsons_buttons.appendChild(document.createElement("br"));
    parsons_buttons.appendChild(edit_button);

    return parsons_buttons;
}