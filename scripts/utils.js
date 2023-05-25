function toggleLoadingContainer(isLoading = false) {
    const loadingContainer = document.getElementById("loadingMessage");
    if (isLoading) {
        loadingContainer.classList.remove("visually-hidden");
    } else {
        loadingContainer.classList.add("visually-hidden");
    }
}