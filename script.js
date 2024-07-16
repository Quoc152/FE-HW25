const fetchData = async () => {
    try {
        const response = await fetch('funFacts.json');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data);
        displayCards(data); // Hiển thị các cards khi dữ liệu đã được tải thành công
    } catch (error) {
        console.log('Error: ', error.message);
    } finally {
        console.log('Finish');
        alert('Finish');
    }
}

const displayCards = (funFacts) => {
    const cardContainer = document.getElementById('cardContainer');
    funFacts.forEach(fact => {
        const card = document.createElement('div');
        card.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-md');

        const title = document.createElement('h2');
        title.classList.add('text-xl', 'font-bold', 'mb-2');
        title.textContent = fact.title;

        const image = document.createElement('img');
        image.classList.add('w-full', 'rounded');
        image.src = fact.imageURL;
        image.alt = fact.title;

        const factTextContainer = document.createElement('div');
        factTextContainer.classList.add('flex','flex-col','gap-3','mb-2');

        // Split fact into two parts based on the source information
        const factParts = fact.funfact.split('Source:');

        const factText = document.createElement('p');
        factText.classList.add('text-gray-700', 'mb-2');
        factText.textContent = factParts[0].trim();

        const sourceText = document.createElement('p');
        sourceText.classList.add('text-sm', 'italic', 'text-gray-500');
        sourceText.textContent = `Source:${factParts[1].trim()}`;

        factTextContainer.appendChild(factText);
        factTextContainer.appendChild(sourceText);

        card.appendChild(title);
        card.appendChild(image);
        card.appendChild(factTextContainer);

        cardContainer.appendChild(card);
    });
}


fetchData();
