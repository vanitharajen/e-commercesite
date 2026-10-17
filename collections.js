var close=document.getElementById("close")
var offer=document.getElementById("offer")
close.addEventListener("click",function(){
    console.log("connect")
offer.style.display="none";
close.style.display="none";
})

const searchInput = document.getElementById("search");
const checkboxes = document.querySelectorAll(
    'aside input[type="checkbox"]'
);
const products = document.querySelectorAll("#products .product");

function filterProducts() {
    const searchText = searchInput.value.toLowerCase().trim();

    const selectedOccasions = [
        ...document.querySelectorAll(
            'input[value="summer"]:checked, input[value="ethnic"]:checked, input[value="festival"]:checked'
        )
    ].map(input => input.value);

    const selectedColors = [
        ...document.querySelectorAll(
            'input[value="red"]:checked, input[value="blue"]:checked, input[value="white"]:checked, input[value="green"]:checked'
        )
    ].map(input => input.value);

    const newOnly = document.querySelector(
        'input[value="new"]:checked'
    );

    products.forEach(product => {
        const name = product.dataset.name.toLowerCase();
        const occasion = product.dataset.occasion;
        const color = product.dataset.color;
        const arrival = product.dataset.arrival;

        const matchesSearch = name.includes(searchText);
        const matchesOccasion =
            selectedOccasions.length === 0 ||
            selectedOccasions.includes(occasion);
        const matchesColor =
            selectedColors.length === 0 ||
            selectedColors.includes(color);
        const matchesArrival =
            !newOnly || arrival === "new";

        product.style.display =
            matchesSearch && matchesOccasion &&
            matchesColor && matchesArrival
                ? ""
                : "none";
    });
}

searchInput.addEventListener("input", filterProducts);
checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", filterProducts);
});