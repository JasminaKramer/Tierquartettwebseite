console.log("HERE WE ARE GO AGAIN");

data.forEach(animal => {
    console.log(animal.name);
});

$(document).ready(function () {
    function displayCards(data) {
        $('.card-container').empty();
        $.each(data, function (index, animal) {
            let divBox = $(`<div class="card-wrapper">
                <div class="card-content">
                    <div class="card-number">${animal.group}${animal.group_number}</div>
                    <div class="card-title">${animal.name_german}</div>
                    <img src="images/${animal.name_german}.jpg" alt="${animal.name_german}" class="card-image" />
                    <div class="card-trivia">
                    ${animal.trivia_german}
                    </div>
                    <div class="stat-icon">
                        <img src="images/icons/weight.png" alt="weight" />
                    </div>
                    <div class="stat-value">${animal.max_weight}</div>
                    <div class="stat-icon">
                        <img src="images/icons/length.png" alt="length" />
                    </div>
                    <div class="stat-value">${animal.max_length}</div>
                    <div class="stat-icon">
                        <img src="images/icons/age.png" alt="maximum age" />
                    </div>
                    <div class="stat-value">${animal.max_age}</div>
                    <div class="stat-icon">
                        <img src="images/icons/speed.png" alt="max speed" />
                    </div>
                    <div class="stat-value">${animal.top_speed}</div>
                    <div class="stat-icon">
                        <img src="images/icons/offspring.png" alt="offspring count per cycle" />
                    </div>
                    <div class="stat-value">${animal.litter_size}</div>
                    <div class="stat-icon">
                        <img src="images/icons/death.png" alt="casualties per year" />
                    </div>
                    <div class="stat-value">${animal.deaths}</div>
                </div>
            </div>`);
                            
            $('.card-container').append(divBox);
        });
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function sortData(attribute) {
        return gmynd.sortData(data, [attribute]);
    }

    displayCards(data);

    $('#shuffle-button').click(function () {
        const shuffledData = shuffleArray([...data]);
        displayCards(shuffledData);
    });

    $('#sort-weight').click(function () {
        const sortedData = sortData('max_weight');
        displayCards(sortedData);
    });

    $('#sort-lifespan').click(function () {
        const sortedData = sortData('max_age');
        displayCards(sortedData);
    });

    $('#sort-speed').click(function () {
        const sortedData = sortData('top_speed');
        displayCards(sortedData);
    });

    $('#sort-length').click(function () {
        const sortedData = sortData('max_length');
        displayCards(sortedData);
    });
});