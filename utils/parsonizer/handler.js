function parsonizer_handler() {
	let text_area = document.getElementById("input-area");
	let code_to_parsonize = String(text_area.value);

	init(code_to_parsonize);

  current_challenge_decoded = code_to_parsonize;
  current_challenge_encoded = encode_challenge(code_to_parsonize);

	text_area.value = "";
}

document.getElementById("parsonizer").addEventListener("click", parsonizer_handler);