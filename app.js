var button = document.querySelector("#clickk");
var h1 = document.querySelector("h1");
var h3 = document.querySelector("h3");
var change = document.querySelector("#change");

button.addEventListener("click", function(){
	document.body.style.backgroundImage = "url('https://lh3.googleusercontent.com/ByAfbogaT1CfVHG7rvRo6BFaktnAjnigx82rANrlhgtPXUqjAq7yM2Uieiy_lrY0tgj1syj5NCC6wx1DgSKRJFxdoZMPfQOkh90MAV058NpttksQoRDLnNeuHo7RT3-bNkPtVWUzIB7P7YJoMd7G6ImA-VPsaDM8cOKhbZVw0lmkRqJyFog0J4CY7jjExIADoo7nuB2vVfSdNtCKSEqCfl_cf1bWID10OaGEKq26Vq-Ve4yfKdYtm7u1Rnlmn4TB9_3NYWqsjc92TRf9DPrpIvzzlfCuWLkLuOW_DO52QCc7-Twjx5oaqifnvYcu8bOjk2CeP4Q-QW4Ntd9TCaRq3d2eq457ZASqd4XPd8vUlEaoZif5kCwM8A5FFZNLIYzSEqVu5uJuYUJVu2akxpzcN-IDuP8P8CLQyzhUpdAhgNI3TdAtXsmz3UuDK6Qsrorp6yyqnwpx5mnKi4JWjkAMBZe24pWvN6odAJur_QE3TLL3FZ1--RtUIDKz3dpKkC_fVoQ5DuWHeY-CQMhEovdmuy2_oSJkUM8f0jIIeNFxrfOOWC_ntxYwRt0ADjErilDHDXlUsXgqpky8193TeBu0NLswXx2X_fexVVwx030LUVNwnnyr8lb3q10vILx7N-jG6MJvFffSzGq1ZJLEnyk152VYt5g-tBHARqzOc0Zyn7S3kuCEpq_8FPwR8PW8cQ=w873-h654-no?authuser=0')";
	h1.textContent = "It's Chess Time!"
    h3.textContent = "";
    change.textContent = "Chess Match";
    button.textContent = "Let's Play!";
});