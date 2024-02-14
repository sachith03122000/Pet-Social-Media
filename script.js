document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var bio = document.getElementById('bio').value;
    var profilePic = document.getElementById('profile-pic').value;
    createProfile(name, bio, profilePic);
    document.getElementById('profile-form').reset();
  });
  
  document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var post = document.getElementById('post').value;
    var postImage = document.getElementById('post-image').value;
    createPost(post, postImage);
    document.getElementById('post-form').reset();
  });
  
  function createProfile(name, bio, profilePic) {
    var profileSection = document.getElementById('profile-section');
    var profile = document.createElement('div');
    profile.className = 'profile';
    profile.innerHTML = `
      <div class="profile-header">
        <img src="${profilePic}" alt="Profile Picture">
        <h3>${name}</h3>
      </div>
      <p>${bio}</p>
    `;
    profileSection.parentNode.insertBefore(profile, profileSection.nextSibling);
  }
  
  function createPost(post, postImage) {
    var feed = document.getElementById('feed');
    var postElement = document.createElement('div');
    postElement.className = 'post';
    postElement.innerHTML = `
      <div class="post-header">
        <img src="profile-picture.jpg" alt="Profile Picture">
        <h3>John Doe</h3>
      </div>
      <p>${post}</p>
    `;
  
    if (postImage) {
      var postImageElement = document.createElement('div');
      postImageElement.className = 'post-image';
      postImageElement.innerHTML = `<img src="${postImage}" alt="Post Image">`;
      postElement.appendChild(postImageElement);
    }
  
    var postActions = document.createElement('div');
    postActions.className = 'post-actions';
    postActions.innerHTML = `
      <button class="like-button">Like</button>
      <button class="comment-button">Comment</button>
    `;
    postElement.appendChild(postActions);
  
    feed.insertBefore(postElement, feed.firstChild);
  }
  