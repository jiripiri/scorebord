<script>
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");

let score = 0;

button1.onclick = () => {
   score += 1;
};
button2.onclick = () => {
   score -= 1;
};

function scoreUp() {
   let elements = document.getElementById("number");
   
   elements[i].classList.add("hidden");
   elements[score].classList.remove("hidden")
   
}

function scoreDown() {
   let elements = document.getElementsByClassName("number");
   
   elements[i].classList.add("hidden");
   elements[score].classList.remove("hidden");
   
}
</script>