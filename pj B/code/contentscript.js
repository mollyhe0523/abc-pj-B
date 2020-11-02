console.log("Yo what's up");

function getAllImg(){
  imgs=document.getElementsByTagName("img");
  console.log(imgs);
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].src="https://res.cloudinary.com/teepublic/image/private/s--95CZqlk---/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1471445514/production/designs/636999_1.jpg";
}
  ps=document.getElementsByTagName("p");
  console.log(ps);
  for (var i = 0; i < ps.length; i++) {
    ps[i].innerHTML="PEOPLE SHOULD NOT BE AFRAID OF THEIR GOVERNMENTS. GOVERNMENTS SHOULD BE AFRAID OF THEIR PEOPLE.";
}

}

function gotMessage(request,sender,sendResponse){
  console.log(request);
  getAllImg();
}

chrome.runtime.onMessage.addListener(gotMessage);
