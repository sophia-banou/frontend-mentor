$(document).ready(function () {
  $.getJSON("data.json", function (data) {
    var scoreList = $("#score-list");

    data.forEach((item) => {
      var listItem = $(`
                <li class="score-item" id="score-${item.category}">
                    <div class="score-item--left">
                        <img src=${item.icon} alt=${item.category} class="score-icon" />
                        <p class="category-span hgrotesk-700"> ${item.category} </p>  
                    </div>
                    <div class="score-item--right">
                        <p class="hgrotesk-500"> 
                            <span class="hgrotesk-700 score"> ${item.score} </span> 
                            <span class="score-total"> / 100 </span>
                        </p>
                    </div>
                </li>
                `);
      scoreList.append(listItem);
    });
  });

});
