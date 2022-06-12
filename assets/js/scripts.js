function lemonTea() {
    document.getElementById("lemon-tea").classList.remove("d-none");
    document.getElementById("lemon-tea-heading").innerHTML = "Recipe for Lemon Tea";
    document.getElementById("lt1").innerHTML = "Boil some water";
    document.getElementById("lt2").innerHTML = "Steep the water in the tea";
    document.getElementById("lt3").innerHTML = "Pour tea in the cup";
    document.getElementById("lt4").innerHTML = "Add lemon";
}

function coffee() {
    document.getElementById("coffee").classList.remove("d-none");
    document.getElementById("coffee-heading").innerHTML = "Recipe for Coffee";
    document.getElementById("c1").innerHTML = "Boil some water";
    document.getElementById("c2").innerHTML = "Brew the coffee grounds";
    document.getElementById("c3").innerHTML = "Pour coffee in the cup";
    document.getElementById("c4").innerHTML = "Add sugar and milk";
}

function hotChocolate() {
    document.getElementById("hot-chocolate").classList.remove("d-none");
    document.getElementById("hot-chocolate-heading").innerHTML = "Recipe for Hot Chocolate";
    document.getElementById("hc1").innerHTML = "Boil some water";
    document.getElementById("hc2").innerHTML = "Add drinking chocolate powder to the water";
    document.getElementById("hc3").innerHTML = "Pour chocolate in the cup";
}

function resetRecipe() {
    document.getElementById("lemon-tea").classList.add("d-none");
    document.getElementById("coffee").classList.add("d-none");
    document.getElementById("hot-chocolate").classList.add("d-none");
}