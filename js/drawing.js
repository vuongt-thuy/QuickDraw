
// Initialize Variables
var path, ink, scores;
var timers = 0, lastTimestamp = 0, lastTimestamp_check = 0, idx_guess = 0;
var d_scores = {};
var language = jQuery('#language').text();
var keywordRequired;
var p_title_en;
var numberOfAnswer = 0;
var totalQuizz = 10;
// Install Paper.js
paper.install(window);

// Initialize...
window.onload = function() {

  initInk();              // Initialize Ink array ()
  paper.setup('canvas');  // Setup Paper #canvas

  var tool = new Tool();  // Inititalize Paper Tool

  // Paper Tool Mouse Down Event
  tool.onMouseDown = function(event) {
    // New Paper Path and Settings
    path = new Path();          
    path.strokeColor = 'blue'; 
    path.strokeWidth = 4;

    // Get Time [ms] for each Guess (needed for accurate Google AI Guessing)
    var thisTimestamp = event.event.timeStamp;
    if(timers === 0){
      timers = 1;
      var time = 0;
    }else{
      var timeDelta = thisTimestamp - lastTimestamp;
      var time = ink[2][ink[2].length-1] + timeDelta;
    }
    
    // Get XY point from event w/ time [ms] to update Ink Array
    updateInk(event.point, time);
    // Draw XY point to Paper Path
    path.add(event.point);
    
    // Reset Timestamps
    lastTimestamp = thisTimestamp;
  }

  // Paper Tool Mouse Drag Event
  tool.onMouseDrag = function(event) {
    // Get Event Timestamp and Timestamp Delta
    var thisTimestamp = event.event.timeStamp ;
    var timeDelta = thisTimestamp - lastTimestamp;
    // Get new Time for Ink Array
    var time = ink[2][ink[2].length-1] + timeDelta;
    console.log(time);
    // Get XY point from event w/ time [ms] to update Ink Array
    updateInk(event.point, time);
    // Draw XY point to Paper Path
    path.add(event.point);
    
    // Reset Timestamps
    lastTimestamp = thisTimestamp;

    // Check Google AI Quickdraw every 250 m/s 
    if(thisTimestamp - lastTimestamp_check > 250){
      lastTimestamp_check = thisTimestamp;
    }
  }
  tool.onMouseUp = function(event){
    setTimeout(()=>{
      checkQuickDraw();
    },200);
  } 
}

// Initialize Ink Array
function initInk(){
  ink = [[],[],[]];
}

// Clear Paper Drawing Canvas
function clearDrawing() {

  // Remove Paper Path Layer
  paper.project.activeLayer.removeChildren();
  paper.view.draw();

  // Init Ink Array
  initInk();
  
  // Resert Variables
  timers = 0;
  idx_guess = 0;
  d_scores = {};
  document.getElementById("result").innerHTML = '';

}

// Update Ink Array w/ XY Point + Time
function updateInk(point, time){
  ink[0].push(point.x);
  ink[1].push(point.y);
  ink[2].push(time);
}

// Get Paper Canvas Dimensions Width/Height
function getCanvasDimensions(){
  var w = document.getElementById('canvas').offsetWidth;
  var h = document.getElementById('canvas').offsetHeight;
  return {height: h, width: w};
}

// Check Quickdraw Google AI API
function checkQuickDraw(){

  // Get Paper Canvas Weight/Height
  var c_dims = getCanvasDimensions();

  // Set Base URL for Quickdraw Google AI API
  var url = 'https://inputtools.google.com/request?ime=handwriting&app=quickdraw&dbg=1&cs=1&oe=UTF-8';
  
  // Set HTTP Headers
  var headers = {
    'Accept': '*/*',
    'Content-Type': 'application/json'
  };

  // Init HTTP Request
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  Object.keys(headers).forEach(function(key,index) {
    xhr.setRequestHeader(key, headers[key]); 
  });

  // HTTP Request On Load
  xhr.onload = function() {
    if (xhr.status === 200) {
      res = xhr.responseText; // HTTP Response Text
      parseResponse(res);     // Parse Response
      idx_guess += 1;         // Iterate Guess Index
    }
    else if (xhr.status !== 200) {
      console.log('Request failed.  Returned status of ' + xhr.status);
    }
  };

  // Create New Data Payload for Quickdraw Google AI API
  var data = {
    "input_type":0,
    "requests":[
    {
      "language":"quickdraw",
      "writing_guide":{"width": c_dims.width, "height":c_dims.height},
      "ink": [ink]
    }
    ]
  };

  // Convert Data Payload to JSON String
  var request_data = JSON.stringify(data);
  console.log(request_data);
  // Send HTTP Request w/ Data Payload
  xhr.send(request_data);

}

// Parse Quickdraw Google AI API Response
function parseResponse(res){
  // Convert Response String to JSON
  var res_j = JSON.parse(res);
  console.log(res_j);
  // Extract Guess Score String from Response and Convert to JSON
  scores = JSON.parse(res_j[1][0][3].debug_info.match(/SCORESINKS: (.+) Combiner:/)[1]);
  // Add New Guess Scores to Score History
  updateScoresHistory();
  // Plot Guess Scores
  result();

}

// Update Score History
function updateScoresHistory(){
  // Init Current Guesses Array
  var current_guesses = [];
  // Loop Through Each Score in Current List of Scores
  for(ii=0; ii<scores.length; ii++){
    // Get Guess+Score
    var guess = scores[ii][0];
    var score = scores[ii][1];

    // Add Guess+Score to Current Guess Array
    current_guesses.push(guess)
    
    // If Guess is in Data Scores (keys)...
    if(guess in d_scores){
      // Add Score to Data Scores
      d_scores[guess].push(score);
    // If Guess is Not In Data Scores... 
  }else{
      // Init New Guess Index Array for Guess and Add to Score
      d_scores[guess] = createArray(idx_guess+1, null);
      d_scores[guess][idx_guess] = score;
    }
  }

  // Loop through Guesses in Data Scores
  for(guess in d_scores){
    // If Guess Not in Current Guesses Array...
    if(current_guesses.indexOf(guess) == -1){
      // Add Null Guess to Array
      d_scores[guess].push(null);
    }
  }
}
function ConvertEnglishToVietnamese(eng){
  var vie;
  for (var i = 0; i < listKeywordEng.length; i++) {
    if (listKeywordEng[i] == eng) {
      vie = listKeywordVie[i];
    }
  }
  return vie;
}

function result() {
  var titleE = ["I see ", "This is "];
  var titleV = ["Tôi thấy ", "Có vẻ như là ","Đây là "];
  p_title_en = scores[0][0];
  var p_title_vn = ConvertEnglishToVietnamese(p_title_en);
  var translations = 
  { 
    "en" : { "keyword" : titleE[Math.floor(Math.random() * titleE.length)] + p_title_en },
    "vi" : { "keyword" : titleV[Math.floor(Math.random() * titleV.length)] + p_title_vn }
  };
  var resultText = translations[language].keyword;
  if (p_title_en == keywordRequired) {
    $('#tickTrue').css('display', 'block');
    numberOfAnswer++;
    document.getElementById("number-of-answers").innerHTML = numberOfAnswer + "/" + totalQuizz;
    document.getElementById("quizzWin").innerHTML = numberOfAnswer + "/" + totalQuizz;
    document.getElementById("quizzTimeOut").innerHTML = numberOfAnswer + "/" + totalQuizz;
    clearDrawing();
    setTimeout(() => {
      if (numberOfAnswer < totalQuizz) {
        InitKeyword();
      }else if(numberOfAnswer == totalQuizz){
        $('#showHint').css('display','none');
        $('#popUp').css('display', 'block');
        $('#winPopup').css('display','block');
        $('#tickTrue').css('display', 'none');
      }
    }, 2000);
  }else{
    document.getElementById("result").innerHTML = resultText;
  }
};

// Game Controller
function GameController(){
  console.log("gameController");
  $('#popUp').css('display', 'none');
  $('#winPopup').css('display','none');
  $('#timeOutPopup').css('display','none');
  document.getElementById("number-of-answers").innerHTML = numberOfAnswer + "/" + totalQuizz;
  document.getElementById("quizzWin").innerHTML = numberOfAnswer + "/" + totalQuizz;
  document.getElementById("quizzTimeOut").innerHTML = numberOfAnswer + "/" + totalQuizz;
  InitKeyword();
}
function InitKeyword(){
  $('#tickTrue').css('display', 'none');
  keywordRequired = listKeywordEng[Math.floor(Math.random() * listKeywordEng.length)];
  var keywordRequiredVie = ConvertEnglishToVietnamese(keywordRequired);
  var translationsKeyword =
  {
    "en" : {"keywordRequire" : keywordRequired},
    "vi" : {"keywordRequire" : keywordRequiredVie}
  };
  var keywordRequiredText = translationsKeyword[language].keywordRequire;
  document.getElementById("keywordRequired").innerHTML = keywordRequiredText;
  $.getJSON("Hint/stencils.json", function(data){
    $.each( data, function( key, val ) {
      if (key == keywordRequired) {
        document.getElementById('imageHint').src = val[0].src;
      }
    });
  }).fail(function(){
    console.log("An error has occurred.");
  });
}
function Skip(){
  console.log("Skip");
  clearDrawing();
  InitKeyword();
}
function ShowHint(){
  $('#popUp').css('display', 'block');
  $('#showHint').css('display', 'block');
}
function HideHint(){
  $('#showHint').css('display', 'none');
  $('#popUp').css('display', 'none');
}
// Create and Fill Array
function createArray(len, itm) {
  var arr1 = [itm],
  arr2 = [];
  while (len > 0) {
    if (len & 1) arr2 = arr2.concat(arr1);
    arr1 = arr1.concat(arr1);
    len >>>= 1;
  }
  return arr2;
}