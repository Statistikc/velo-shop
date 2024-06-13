document.addEventListener("DOMContentLoaded", function () {
    const bikeList = [
        { id: 1, name: 'Велосипед Stels Talisman 16 Z010', type: 'Детский', price: 8990, availability: 'В наличии', monthlyPayment: 1499, image: 'images/bike-icons/bike1.jpg' },
        { id: 2, name: 'Велосипед Stels Talisman 14 Z010', type: 'Детский', price: 8650, availability: 'В наличии', monthlyPayment: 1442, image: 'images/bike-icons/bike2.jpg' },
        { id: 3, name: 'Велосипед Stels Navigator 500 MD 26 F010', type: 'Горный', price: 21520, availability: 'В наличии', monthlyPayment: 3587, image: 'images/bike-icons/bike3.jpg' },
        { id: 4, name: 'Велосипед Stels Navigator 460 MD K010', type: 'Горный', price: 34890, availability: 'В наличии', monthlyPayment: 5815, image: 'images/bike-icons/bike4.jpg' },
        { id: 5, name: 'Велосипед Stels Navigator 440 V 24 V030', type: 'Горный', price: 28100, availability: 'В наличии', monthlyPayment: 4684, image: 'images/bike-icons/bike5.jpg' },
        { id: 6, name: 'Велосипед Stels Navigator 300 Gent 28 Z010', type: 'Городской', price: 12770, availability: 'В наличии', monthlyPayment: 2129, image: 'images/bike-icons/bike6.jpg' }
    ];

    const bikeListContainer = document.getElementById('bike-list');

    bikeList.forEach(bike => {
        const bikeItem = document.createElement('div');
        bikeItem.className = 'bike-item';
        bikeItem.innerHTML = `
            <div class="bike-image">
                <img src="${bike.image}" alt="${bike.name}">
                <span class="badge">Хит</span>
            </div>
            <h3>${bike.name}</h3>
            <p class="availability">✔ ${bike.availability}</p>
            <p class="price">${bike.price} руб./шт</p>
            <p class="monthly-payment">от ${bike.monthlyPayment} руб. в месяц</p>
        `;
        bikeListContainer.appendChild(bikeItem);
    });
});