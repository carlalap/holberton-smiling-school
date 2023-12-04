/****************************** */
/***** HOMEPAGE - Quotes Carousel ****/

$(document).ready(function() {
  $.ajax({
      url: 'https://smileschool-api.hbtn.info/xml/quotes',
      type: "get",
      dataType: "xml",  // Specify the expected data type
      beforeSend: function() {
          $("#QuotesLoader").show();
      },
      success: function(response) {
          $("#QuotesLoader").hide();

          // Handle XML data
          $(response).find('quote').each(function(i) {
              let $html = $(`
                  <div class="quote carousel-item ${i === 0 ? 'active' : ''}">
                      <div class="row mx-auto align-items-center">
                          <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
                              <img src=${$(this).find('pic_url').text()} class="d-block align-self-center" alt="Carousel Pic"/>
                          </div>
                          <div class="col-12 col-sm-8 offset-sm-2 col-lg-9 offset-lg-0">
                              <div class="quote-text">
                                  <p class="text-white"> ${$(this).find('text').text()} </p>
                                  <h4 class="text-white font-weight-bold">${$(this).find('name').text()}</h4>
                                  <span class="text-white">${$(this).find('title').text()}</span>
                              </div>
                          </div>
                      </div>
                  </div>`);
              $("#quotesCarouselInner").append($html);
          });
      }
  });
});

/*******  Homepage -  POPULAR TUTORIALS  *********/

$.ajax({
  url: 'https://smileschool-api.hbtn.info/xml/popular-tutorials',
  type: "get",
  dataType: "xml", // Set data type to xml
  beforeSend: function() {
      $("#videosLoader").show();
  },
  success: function(response) {
      $("#videosLoader").hide();
      // Clear the existing content in the carousel-inner
      $("#popularVideos").empty();

      $(response).find('video').each(function(index, element) {
          let $carouselItem = $('<div class="carousel-item"><div class="row"></div></div>');
          let $video = $(element);

          for (let j = index; j < index + 4 && j < $(response).find('video').length; j++) {
              let $stars = '';

              for (let k = 0; k < $video.find('star').text(); k++) {
                  $stars += '<img src="./images/star_on.png" width="15px" height="15px">';
              }

              for (let k = 0; k < 5 - $video.find('star').text(); k++) {
                  $stars += '<img src="./images/star_off.png" width="15px" height="15px">';
              }

              let $html = $(`
                  <div class="col-12 col-sm-4 col-lg-3 d-flex justify-content-center">
                      <div class="card">
                          <img src="${$video.find('thumb_url').text()}" class="card-img-top" alt="Video thumbnail"/>
                          <div class="card-img-overlay text-center">
                              <img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay"/>
                          </div>
                          <div class="card-body">
                              <h5 class="card-title font-weight-bold">${$video.find('title').text()}</h5>
                              <p class="card-text text-muted">${$video.find("sub-title").text()}</p>
                              <div class="creator d-flex align-items-center">
                                  <img src="${$video.find('author_pic_url').text()}" alt="Creator of Video" width="30px" class="rounded-circle"/>
                                  <h6 class="pl-3 m-0 main-color">${$video.find('author').text()}</h6>
                              </div>
                              <div class="info pt-3 d-flex justify-content-between">
                                  <div class="rating">
                                      ${$stars}
                                  </div>
                                  <span class="main-color">${$video.find('duration').text()}</span>
                              </div>
                          </div>
                      </div>
                  </div>`);

              $carouselItem.find('.row').append($html);
          }
          $("#popularVideos").append($carouselItem);
      });

      // Activate the first carousel item
      $("#popularVideos .carousel-item:first-child").addClass("active");
  },
  error: function(jqXHR, textStatus, errorThrown) {
      console.error('AJAX Error:', textStatus, errorThrown);
  }
});

/*********  SEARCH PRICING - QUOTES SECTION *************/

// See Quotes carousel

/**********LATEST VIDEOS - SECTION    */

  $.ajax({
    url: 'https://smileschool-api.hbtn.info/xml/latest-videos',
    type: "get",
    dataType: "xml", // Set data type to xml
    beforeSend: function() {
        $("#videosLoader").show();
    },
    success: function(response) {
        $("#videosLoader").hide();
        // Clear the existing content in the carousel-inner
        $("#latestVideos").empty();
  
        $(response).find('video').each(function(index, element) {
            let $carouselItem = $('<div class="carousel-item"><div class="row"></div></div>');
            let $video = $(element);
  
            for (let j = index; j < index + 4 && j < $(response).find('video').length; j++) {
                let $stars = '';
  
                for (let k = 0; k < $video.find('star').text(); k++) {
                    $stars += '<img src="./images/star_on.png" width="15px" height="15px">';
                }
  
                for (let k = 0; k < 5 - $video.find('star').text(); k++) {
                    $stars += '<img src="./images/star_off.png" width="15px" height="15px">';
                }
  
                let $html = $(`
                    <div class="col-12 col-sm-4 col-lg-3 d-flex justify-content-center">
                        <div class="card">
                            <img src="${$video.find('thumb_url').text()}" class="card-img-top" alt="Video thumbnail"/>
                            <div class="card-img-overlay text-center">
                                <img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay"/>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold">${$video.find('title').text()}</h5>
                                <p class="card-text text-muted">${$video.find("sub-title").text()}</p>
                                <div class="creator d-flex align-items-center">
                                    <img src="${$video.find('author_pic_url').text()}" alt="Creator of Video" width="30px" class="rounded-circle"/>
                                    <h6 class="pl-3 m-0 main-color">${$video.find('author').text()}</h6>
                                </div>
                                <div class="info pt-3 d-flex justify-content-between">
                                    <div class="rating">
                                        ${$stars}
                                    </div>
                                    <span class="main-color">${$video.find('duration').text()}</span>
                                </div>
                            </div>
                        </div>
                    </div>`);
  
                $carouselItem.find('.row').append($html);
            }
            $("#latestVideos").append($carouselItem);
        });
  
        // Activate the first carousel item
        $("#latestVideos .carousel-item:first-child").addClass("active");
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.error('AJAX Error:', textStatus, errorThrown);
    }
  });

/*********  SEARCH COURSES-SECTION  *************/

$.ajax({
  url: 'https://smileschool-api.hbtn.info/xml/courses',
  type: "get",
  dataType: "xml",
  beforeSend: function() {
      $("#CoursesLoader").show();
  },
  success: function(response) {
      $("#CoursesLoader").hide();

      let $t = $(response).find('topics').text().split(',');
      $("#topic-dropdownmenu").empty().append(`<button class="btn btn-secondary border-0 rounded-0 search-element w-100 text-left" type="button" id="current-topic" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          ${$t[0].substr(0, 1).toUpperCase() + $t[0].substr(1)}
      </button>
      <div class="dropdown-menu" id="topic-menu" aria-labelledby="topic-dropdownmenu"></div>`);

      let $topics = '';
      for (let i = 0; i < $t.length; i++) {
          $topics += `<button data-value="${$t[i]}" class="dropdown-item" type="button">${$t[i].substr(0, 1).toUpperCase() + $t[i].substr(1)}</button>`;
      }
      $("#topic-menu").append($topics);

      let $s = $(response).find('sorts').text().split(',');
      $("#sort-dropdownMenu").empty().append(`<button class="btn btn-secondary border-0 rounded-0 search-element w-100 text-left" type="button" id="current-sort" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          ${$s[0].substr(0, 1).toUpperCase() + $s[0].substr(1, 3) + ' ' + $s[0].substr(5, 1).toUpperCase() + $s[0].substr(6)}
      </button>
      <div class="dropdown-menu" id="sort-menu" aria-labelledby="sort-dropdownMenu"></div>`);

      let $sorts = '';
      for (let i = 0; i < $s.length; i++) {
          $sorts += `<button data-value="${$s[i]}" class="dropdown-item" type="button">${$s[i].substr(0, 1).toUpperCase() + $s[i].substr(1, 3) + ' ' + $s[i].substr(5, 1).toUpperCase() + $s[i].substr(6)}</button>`;
      }
      $("#sort-menu").append($sorts);

      $.displayCourses('', $('#current-topic').text().trim(), $('#current-sort').text().trim());

      let $topicVal;
      $('#topic-menu button').click(function(e) {
          $topicVal = e.target.getAttribute('data-value');
          $('#current-topic').text(e.target.textContent);
          $.displayCourses($("#user_search").val(), $('#current-topic').text().trim(), $('#current-sort').text().trim());
          console.log($("#user_search").val());
      });

      $('#sort-menu button').click(function(e) {
          $topicVal = e.target.getAttribute('data-value');
          $('#current-sort').text(e.target.textContent);
          $.displayCourses($("#user_search").val(), $('#current-topic').text().trim(), $('#current-sort').text().trim());
      });

      $('#user_search').on('input', function(e) {
          setTimeout(function() {
              $.displayCourses($("#user_search").val(), $('#current-topic').text().trim(), $('#current-sort').text().trim());
          }, 500);
      });
  },
  error: function(jqXHR, textStatus, errorThrown) {
      console.error('AJAX Error:', textStatus, errorThrown);
  }
});


/******************  RESULT SECTION  **********************/
    
$.displayCourses = function($q, $t, $s) {
  $.ajax({
      url: 'https://smileschool-api.hbtn.info/xml/courses',
      type: "get",
      dataType: "xml", // Set data type to xml
      data: {
          action: 'query',
          list: 'search',
          format: 'json',
          q: $q,
          topic: $t,
          sort: $s,
      },
      beforeSend: function() {
          $("#CoursesLoader").show();
      },
      success: function(response) {
          $("#CoursesLoader").hide();
          let $c = $(response).find('courses');

          $("#coursesvideos").empty();
          $("#numvideos").text(`${$c.length === 1 ? '1 video' : $c.length + ' videos'}`);

          $c.each(function() {
              let $stars = '';
              let $cItem = $(this);

              for (let j = 0; j < $cItem.find('star').text(); j++) {
                  $stars += '<img src="./images/star_on.png" width="15px" height="15px">';
              }

              for (let j = 0; j < 5 - $cItem.find('star').text(); j++) {
                  $stars += '<img src="./images/star_off.png" width="15px" height="15px">';
              }

              let $html = $(`
                  <div class="col-12 col-sm-4 col-lg-3 d-flex justify-content-center">
                      <div class="card">
                          <img src="${$cItem.find('thumb_url').text()}" class="card-img-top" alt="Video thumbnail"/>
                          <div class="card-img-overlay text-center">
                              <img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay"/>
                          </div>
                          <div class="card-body">
                              <h5 class="card-title font-weight-bold">${$cItem.find('title').text()}</h5>
                              <p class="card-text text-muted">
                                  ${$cItem.find("sub-title").text()}
                              </p>
                              <div class="creator d-flex align-items-center">
                                  <img src="${$cItem.find('author_pic_url').text()}" alt="Creator of Video" width="30px" class="rounded-circle"/>
                                  <h6 class="pl-3 m-0 main-color">${$cItem.find('author').text()}</h6>
                              </div>
                              <div class="info pt-3 d-flex justify-content-between">
                                  <div class="rating">
                                      ${$stars}
                                  </div>
                                  <span class="main-color">${$cItem.find('duration').text()}</span>
                              </div>
                          </div>
                      </div>
                  </div>`);

              $("#coursesvideos").append($html);
          });
      },
      error: function(jqXHR, textStatus, errorThrown) {
          console.error('AJAX Error:', textStatus, errorThrown);
      }
  });
};
