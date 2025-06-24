fetch("https://api.github.com/users/Nihalxyztr")
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    document.getElementById("profile").innerHTML = `
      <img src="${data.avatar_url}" alt="Avatar">
      <h2>${data.name || data.login}</h2>
      <a href="${data.html_url}" target="_blank">
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
             alt="GitHub" style="width: 20px; vertical-align: middle; margin-right: 5px;">
        Click On This Link!!
      </a>
    `;
  })
  .catch(function(err) {
    document.getElementById("profile").innerHTML = "<p>Error loading profile.</p>";
    console.error(err);
  });
