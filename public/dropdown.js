window.onload = function () {
    // You can clear specific data or use sessionStorage or cookies
    // Example using sessionStorage:
    sessionStorage.clear(); // Clear all stored data
    console.log("c");
};
window.onpopstate = (event) => {
    console.log(event);
};