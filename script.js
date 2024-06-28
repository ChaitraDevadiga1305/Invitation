const urlParams = new URLSearchParams(window.location.search);
const myparam = urlParams.get('myparam');
console.log(myparam);
document.getElementById("myparam").innerHTML = `<b>${myparam}</b>`;;

