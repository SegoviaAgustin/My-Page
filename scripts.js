function changeContent(page) {
    const content = document.getElementById('content');

    if (page === 'Lobby') {
        content.innerHTML = `
            <h2>Welcome to the Lobby</h2>
            <p>For now, there is nothing here.</p>
        `;
    } else if (page === 'AboutMe') {
        content.innerHTML = `
            <h2>About Me</h2>
            <p>
            Hello, I am Segovia Agustin,
            I am 20 years old, I live in Chaco, Argentina,
            I am a graphic designer and programming student.
            </p>
        `;
    } else if (page === 'Services') {
        content.innerHTML = `
            <h2>Our Services</h2>
            <p>For now I am studying programming,
             but I have some knowledge in graphic design,
              I think it is my only service so far.</p>
        `;
    } else if (page === 'Contacts') {
        content.innerHTML = `
            <h2>Contact Me</h2>
            <p>Discord: starfluxx</p>
            <p>Instagram: <a href="https://www.instagram.com/segoviaagustin03/">segoviaagustin03</a></p>
            <p>GitHub: <a href="https://github.com/SegoviaAgustin">SegoviaAgustin</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/agustin-segovia03/">Agustin Segovia</a></p>
            <p>Behance: <a href="https://www.behance.net/agustnsegovia1">Agustin Segovia</a></p>
            <p>E-mail: <a href="mailto:segoviazxasqww@gmail.com">segoviazxasqww@gmail.com</a></p>
        `;
    }
}
