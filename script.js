function showTime() {
    const timeElement = document.getElementById("time");
    const now = new Date();
    timeElement.textContent = now.toLocaleTimeString();
}
setInterval(showTime, 1000);

function toggleBio() {
    const bio = document.getElementById("bio");
    const button = document.getElementById("toggleButton");
    bio.classList.toggle("hidden");
    button.textContent = bio.classList.contains("hidden") ? "Daha Fazla Gör" : "Daha Az Gör";
}


function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (category === 'all') {
            project.style.display = 'block';
        } else if (project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const formError = document.getElementById("formError");

    
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        formError.textContent = "Geçerli bir e-posta adresi giriniz.";
        return false;
    }

    
    if (name === "" || message === "") {
        formError.textContent = "Tüm alanları doldurunuz.";
        return false;
    }

    formError.textContent = ""; 
    alert("Form başarıyla gönderildi!");
    return true;
}
function openModal(imageSrc, captionText) {
    const modal = document.getElementById("projectModal");
    const modalImg = document.getElementById("modalImage");
    const caption = document.getElementById("modalCaption");

    modal.style.display = "block";
    modalImg.src = imageSrc;
    caption.textContent = captionText;
}

function closeModal() {
    const modal = document.getElementById("projectModal");
    modal.style.display = "none";
}

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        document.body.classList.add("fade-out");
        setTimeout(() => {
            window.location.href = event.target.href;
        }, 500); 
    });
});