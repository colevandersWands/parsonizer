var query_challenge = read_challenge_query();

if (query_challenge) {
  current_challenge = decode_challenge(query_challenge);
  load_challenge(current_challenge);
};


// if (query_challenge) {
//   current_challenge_encoded = query_challenge;
//   current_challenge_decoded = decode_challenge(query_challenge);
//   load_challenge(current_challenge_decoded);
// };
