/* show sign in modal */
function showSignInModal() {
  var modal = document.getElementById("signin-modal");
  modal.style.display = "flex";
}

/* hide sign in modal */
function hideSignInModal() {
  var modal = document.getElementById("signin-modal");
  modal.style.display = "none";
}

/* show sign up modal */
function showSignUpModal() {
  var modal = document.getElementById("signup-modal");
  modal.style.display = "flex";
}

/* hide sign up modal */
function hideSignUpModal() {
  var modal = document.getElementById("signup-modal");
  modal.style.display = "none";
}

//like function
var numberOfClicks = 0;
function postLiked() {
  var button = document.getElementById("addLikes")
  button.innerHTML = '<i class="fa fa-thumbs-up ">' + '</i>' + '&nbsp;' + "Liked!";
  button.style.border = "none";
  numberOfClicks += 1;
  if (numberOfClicks != 0) {
    if (numberOfClicks == 1) {
      document.getElementById('likeCount').innerHTML = numberOfClicks + " person likes this!";
    }
    else {
      document.getElementById('likeCount').innerHTML = numberOfClicks + " people have liked this!";
    }
  }
}
