const linkCategory = document.querySelector("#linkCategory");
const submitButton = document.querySelector("#submitButton");
const addButton = document.querySelector("#addButton");
const cancelButton = document.querySelector("#cancelButton");
const addLinkPanel = document.querySelector("#addLinkPanel")

let linkCategories = [];
let links = [];

addButton.addEventListener("click", event => {
    event.preventDefault();
    showFormPanel();
});
function showFormPanel() {
    addLinkPanel.classList.remove("hidden");


}



cancelButton.addEventListener("click", event => {
    event.preventDefault();
    hideFormPanel();

});

function hideFormPanel() {
    addLinkPanel.classList.add('hidden');
}


linkCategory.addEventListener('keydown', function (event) {

    if (event.keyCode === 188) {
        event.preventDefault();

        linkCategories.push(linkCategory.value);
        linkCategory.value = "";
        // display updated categories //
        displayLinkCategories();
    }
})

function displayLinkCategories() {
    console.log("display Link Categories")
}


submitButton.addEventListener('click', event => {
    //stop form from submitting
    event.preventDefault();
    const title = linkTitle.value;
    const url = linkUrl.value;
    const categories = linkCategories;

    const newLink = {
        title,
        url,
        categories
    }
    console.log(newLink);

    // push new link to array 

    linkCategories.push(newLink);
    linkTitle.value = "";
    linkUrl.value = "";
    linkCategory.value = "";
    linkCategories = [];
    displayLinkCategories();

    // hide the addlink panle form
    hideFormPanel();
})