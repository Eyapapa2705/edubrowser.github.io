function search() {
    const query = document.getElementById('searchInput').value;
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (query.trim() === '') {
        return;
    }

    // Mock search results
    const mockResults = [
        `Result for "${query}" 1`,
        `Result for "${query}" 2`,
        `Result for "${query}" 3`,
        `Result for "${query}" 4`
    ];

    // Display search results
    mockResults.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        resultItem.textContent = result;
        resultsContainer.appendChild(resultItem);
    });
}
