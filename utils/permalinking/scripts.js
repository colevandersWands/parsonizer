function read_challenge_query() {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var challenge_string = url.searchParams.get("challenge");
  return challenge_string;
};

function read_challenge_textarea() {
  var input_area = document.getElementById("input-area");
  return input_area.value;
};

function load_challenge(challenge) {
  var input_area = document.getElementById("input-area");
  input_area.value = challenge;
};

function generate_permalink() {
  var encoded_challenge;
  if (!read_challenge_textarea()) {
    encoded_challenge = current_challenge_encoded;
  } else {
    current_challenge_decoded = read_challenge_textarea();
    encoded_challenge = encode_challenge(current_challenge_decoded);
    current_challenge_encoded = encode_challenge(current_challenge_decoded);
  };
  var permalink = "https://janke-learning.github.io/parsonizer/?challenge="+encoded_challenge;
  var perma_display = document.getElementById("display-perma");
  perma_display.value = permalink;
};

function encode_challenge(string_challenge) {
  var coded_chars = [];
  for (var i = 0; i < string_challenge.length; i++) {
    coded_chars.push(string_challenge.charCodeAt(i));
  };
  var coded_challenge = coded_chars.join("-");
  return coded_challenge;
};

function decode_challenge(coded_challenge) {
  var arred_codes = coded_challenge.split("-");
  var stringed_codes = [];
  for (var i = 0; i < arred_codes.length; i++) {
    stringed_codes.push(String.fromCharCode(arred_codes[i]));
  };
  var string_challenge = stringed_codes.join("");
  return string_challenge;
};
