$("#connectStrava").click(function() {
  console.log("Go connect to Strava");
  window.location = "https://www.strava.com/oauth/authorize?client_id=30652&response_type=code&redirect_uri=https://getpulsetrak.com/&approval_prompt=force&scope=read,activity:write";
  //window.location = "https://www.strava.com/oauth/authorize?client_id=30652&response_type=code&redirect_uri=http://localhost:5000/pulsetrak&approval_prompt=force&scope=read,activity:write";
});
