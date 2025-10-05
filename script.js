// простая модалка для увеличения фото
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".grid img");

    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
        <div class="modal-content">
            <img src="" alt="">
            <span class="close">&times;</span>
        </div>`;
    document.body.appendChild(modal);

    const modalImg = modal.querySelector("img");
    const close = modal.querySelector(".close");

    images.forEach(img => {
        img.addEventListener("click", () => {
            modalImg.src = img.src;
            modal.classList.add("show");
        });
    });

    close.addEventListener("click", () => modal.classList.remove("show"));
    modal.addEventListener("click", e => {
        if (e.target === modal) modal.classList.remove("show");
    });
});
