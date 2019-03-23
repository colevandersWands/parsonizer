function parsonizer_handler() {
	let text_area = document.getElementById("input-area");
	let code_to_parsonize = String(text_area.value);

  if (document.getElementById("newInstanceLink") === null) {
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

    var parsons_buttons = document.getElementById("parsons-buttons");
    parsons_buttons.appendChild(re_shuffle_button);
    parsons_buttons.appendChild(get_feedback_button);
    parsons_buttons.appendChild(history_button);
  };

    this_parson = init(code_to_parsonize);

  current_challenge = code_to_parsonize;
  current_challenge_encoded = encode_challenge(code_to_parsonize);

    text_area.value = "";
}

document.getElementById("parsonizer").addEventListener("click", parsonizer_handler);
