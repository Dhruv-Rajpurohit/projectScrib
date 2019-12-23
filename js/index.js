// To show the create menu for post
function showCreatePost() {
  var modal = document.getElementById("create-post-modal");
  modal.style.display = "flex";
}
// To hide the create menu for post
function hideCreatePostModal() {
  var modal = document.getElementById("create-post-modal");
  modal.style.display = "none";
}
// To go to postlist page 
function navigateToBlogList() {
  location.href = "html/postslist.html"
}
