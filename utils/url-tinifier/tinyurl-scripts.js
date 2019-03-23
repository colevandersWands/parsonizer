// https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
function hasher(challenge_raw){
    var hash = 0;
    if (challenge_raw.length == 0) return hash;
    for (i = 0; i < challenge_raw.length; i++) {
        char = challenge_raw.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}


// function get_tiny(long_url, cb) {
//   // var xhr = new XMLHttpRequest();
//   // var url = 'http://tinyurl.com/api-create.php?url='+long_url;
//   // console.log(url);
//   // xhr.open('GET', url);
//   // xhr.onload = function() {
//   //     if (xhr.status === 200) {
//   //         alert('User\'s name is ' + xhr.responseText);
//   //     }
//   //     else {
//   //         alert('Request failed.  Returned status of ' + xhr.status);
//   //     }
//   // };
//   // xhr.send();


//   var url = 'http://tinyurl.com/api-create.php?url='+long_url;
//   if(XMLHttpRequest)
//   {
//     var request = new XMLHttpRequest();
//     if("withCredentials" in request)
//     {
//      // Firefox 3.5 and Safari 4
//      request.open('GET', url, true);
//      request.onload = function() {
//                         if (request.status === 200) {
//                             alert('User\'s name is ' + request.responseText);
//                         } else {
//                             alert('Request failed.  Returned status of ' + request.status);
//                         }
//                       };
//      request.send();
//     }
//     else if (XDomainRequest)
//     {
//      // IE8
//      var xdr = new XDomainRequest();
//      xdr.open("get", url);
//      xdr.send();
   
//      // handle XDR responses -- not shown here :-)
//     }
   
//    // This version of XHR does not support CORS
//    // Handle accordingly
//   }
// };