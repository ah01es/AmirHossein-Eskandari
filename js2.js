function myfunction(){
    let user = localStorage.getItem('finalUsername');
    document.getElementById("h4").innerHTML=user;
    let pass = localStorage.getItem('finalpassword');
    document.getElementById("2h4").innerHTML=pass;
}