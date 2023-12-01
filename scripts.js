/*****  Quotes Carousel ****/
$(document).ready(function() {
$.ajax({
    url: 'https://smileschool-api.hbtn.info/quotes',
    type: "get",
    beforeSend: function() {
    $("#QuotesLoader").show();
    },

        success: function(response) {
            $("#QuotesLoader").hide();
            for (let i=0; i < response.length; i++) {
                let $html = $(`
                <div class="carousel-item ${i === 0 ? 'active' : ''}">
                    <div class="row mx-auto align-items-center">
                        <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
                            <img src=${response[i].pic_url} class="d-block align-self-center" alt="Carousel Pic"/>
                        </div>
                        <div class="col-12 col-sm-8 offset-sm-2 col-lg-9 offset-lg-0">
                            <div class="text-white quote-text h4"> ${response[i].text} </div>
                            <div class="text-white quote-text font-weight-bold">${response[i].name}</div>
                            <div class="quote-text span text-white">${response[i].title}</div>
                        </div>
                    </div>
                </div>`);
                $("#quotesCarouselInner").append($html);
            }
        }

});

});