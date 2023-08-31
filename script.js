function showDetails(causeId) {
    const modal = document.getElementById('detailsModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');

    // Simulated data for demonstration
    const causes = [
        { title: 'Cause 1', description: 'Supporting education in underprivileged areas.', image: 'cause1.jpeg' },
        { title: 'Cause 2', description: 'Providing clean water to rural communities.', image: 'cause2.jpg' },
    ];

    modalImage.src = causes[causeId - 1].image;
    modalTitle.textContent = causes[causeId - 1].title;
    modalDescription.textContent = causes[causeId - 1].description;

    modal.style.display = 'block';
}

function closeDetailsModal() {
    const modal = document.getElementById('detailsModal');
    modal.style.display = 'none';
}
