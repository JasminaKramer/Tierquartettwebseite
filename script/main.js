console.log("HERE WE ARE GO AGAIN");

data.forEach(animal => {
    console.log(animal.name);
});

$(document).ready(function () {
    $.each(data, function (index, animal) {
        let divBox = $(`<div class="card-wrapper">
            <div class="card-content">
                <div class="card-number">${animal.group}${animal.group_number}</div>
                <div class="card-title">${animal.name_german}</div>
                <img src="images/f2.jpg" alt="${animal.name_german}" class="card-image" />
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
						
        $('#wrapper').append(divBox);
    });
});

