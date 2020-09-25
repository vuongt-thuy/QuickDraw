<?php
include 'language.php';

$en_select = '';
$vi_select = '';
$language = '';

if ((isset($_GET['language']) && $_GET['language'] == 'en') || !isset($_GET['language'])) {
  $en_select = 'selected';
  $language = 'en';
} else {
  $vi_select = 'selected';
  $language = 'vi';
}
?>





<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quick Draw</title>
  <link rel="icon" href="static/images/favicon.png">
  <link rel="stylesheet" type="text/css" href="_next/static/css/6bd8ec9d.99489d07.chunk.css">
  <link rel="stylesheet" href="static/css/nprogress.css" />
  <script type="text/javascript" src="jquery-3.5.1.min.js"></script>

  <link rel="icon" type="image/x-icon" href="favicon.ico" />
  <link rel="manifest" href="manifest.json" />
  <meta name="theme-color" content="#0085FF" />
  <meta name="viewport" content="width=device-width, user-scalable=no" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  <meta name="apple-mobile-web-app-title" content="Gartic.io" />
  <link rel="apple-touch-icon" href="static/images/icons/192.html" />
  <meta property="og:image" content="static/images/thumbb6f5.png?v=10" />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:image" content="static/images/thumbb6f5.png?v=10" />
  <meta charset="UTF-8" />
  <script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-3906902-31"></script>
  <script async="" src="https://www.googletagservices.com/tag/js/gpt.js"></script>
  <script type="text/javascript" src="js/common.js"></script>
  <script>
    //analytics
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "UA-3906902-31");

    //adx
    var googletag = googletag || {};
    googletag.cmd = googletag.cmd || [];

    //ima
    var google = google || {};

    window.aiptag = window.aiptag || {
      cmd: []
    };
    aiptag.cmd.display = aiptag.cmd.display || [];
    aiptag.cmd.player = aiptag.cmd.player || [];

    aiptag.gdprShowConsentTool = true;
  </script>
  <script async="" src="https://api.adinplay.com/libs/aiptag/pub/GTC/gartic.io/tag.min.js"></script>
  <meta name="viewport" content="width=device-width" />
  <meta charset="utf-8" />
  <title>DrawPuzzle - Draw everything and Win</title>
  <meta name="description" content="" />
  <meta name="next-head-count" content="5" />
  <link rel="preload" href="_next/static/css/6bd8ec9d.99489d07.chunk.css" as="style" />
  <link rel="preload" href="_next/static/jI9EZqYNN6u6IZXd9e4uV/pages/index.js" as="script" />
  <link rel="preload" href="_next/static/jI9EZqYNN6u6IZXd9e4uV/pages/_app.js" as="script" />
  <link rel="preload" href="_next/static/runtime/webpack-9369c5c69dbf6d4912cb.js" as="script" />
  <link rel="preload" href="_next/static/chunks/framework.98c1b221acb34aa9927b.js" as="script" />
  <link rel="preload" href="_next/static/chunks/ea88be26.d6bd6ff5c3174e291010.js" as="script" />
  <link rel="preload" href="_next/static/chunks/6bd8ec9d.2c372599cf640b277883.js" as="script" />
  <link rel="preload" href="_next/static/chunks/commons.53b19a6d3b90ba94951f.js" as="script" />
  <link rel="preload" href="_next/static/chunks/900019541db2cde785725a04d23f9eb12f521a3a.e7d226ba7a0750015a7d.js" as="script" />
  <link rel="preload" href="_next/static/chunks/styles.3ae7cd3526c5aecda59d.js" as="script" />
  <link rel="preload" href="_next/static/runtime/main-4de108aaa74dc94c21f3.js" as="script" />
  <link rel="preload" href="_next/static/chunks/4c54af6f7da728cb81ab63f2943b52b7d8a59b2f.6e2ee8ef7ca0f7ff1529.js" as="script" />
  <link rel="preload" href="_next/static/chunks/69442508138b332cb1070c411bc37bdb1bd6eb52.67a895baa37b784729a6.js" as="script" />
</head>

<body onload="checkCookie()">
  <div id="background"></div>
  <div id="__next">
    <div class="nextCenter">
      <div id="content">
        <div class="screenSystem" style="height: ;">
          <div id="screens">
            <header class="">
              <div class="">
                <div class="getApp">
                  <h5><?php echo $top_nav[$language]['0']; ?></h5>
                  <span>
                    <a class="ic-gPlay" href="">
                      <p>ANDROID</p>
                    </a>
                    <a class="ic-iOS" href="">
                      <p>iOS</p>
                    </a>
                  </span>
                </div>
                <div class="logo">
                  <!-- <figure></figure> -->
                  <img src="static/images/logo.png" alt="" width="94%">
                  <span><?php echo $top_nav[$language]['1']; ?></span>
                </div>
                <a href="#" class="lastUpdates">
                  <h5><?php echo $top_nav[$language]['2']; ?></h5>
                  <span>
                    <strong></strong>
                    <p>
                      <?php 
                      if ($language == "vi") {
                        echo("Một đội - Một ước mơ ! ");
                      } else {
                        echo("One team – One dream !");
                      }
                      ?>
                    </p>
                  </span>
                </a>
              </div>
            </header>
            <div>
              <div class="title mobileHide">
                <span class="gTitle">
                  <h2>Draw Puzzle</h2>
                </span>
              </div>
              <div class="content home">
                <div class="anonymus">
                  <div class="form">
                    <h3><?php echo $content_left[$language]['0']; ?></h3>
                    <div class="avatar">
                      <div class="av avt0"></div>
                    </div>
                    <div class="containerForm">
                      <div class="fieldset nick">
                        <span><?php echo $content_left[$language]['1']; ?>:</span>
                        <label class="text">
                          <input id="usernameInput" type="text" maxlength="10" />
                        </label>
                      </div>
                      <div class="fieldset lang">
                        <span><?php echo $content_left[$language]['2']; ?>:</span>
                        <label class="select">
                          <select onchange="set_language()" name="language" id="language">
                            <optgroup label="Available Language">
                              <option value="en" <?php echo $en_select; ?>>English</option>
                              <option value="vi" <?php echo $vi_select; ?>>Tiếng Việt</option>

                            </optgroup>
                          </select>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="actions" id="myBtn">
                    <a class="btYellowBig ic-playHome">
                      <button onclick="OnClickSetCookie()">
                        <strong><?php echo $content_left[$language]['3']; ?>!</strong>
                      </button>
                    </a>
                  </div>
                </div>

              </div>
            </div>



            <footer>
              <nav>
                <!-- <a href="download.php?language=<?php echo $language ?>"><?php echo $footer[$language]['0']; ?></a> -->
                <a href="#">
                  <?php 
                      if ($language == "vi") {
                        echo("HOÀNG VIỆT THẮNG");
                      } else {
                        echo("HOANG VIET THANG");
                      }
                      ?>
                </a>
                <a href="#">
                  <?php 
                      if ($language == "vi") {
                        echo("VƯƠNG THỊ THUÝ");
                      } else {
                        echo("VUONG THI THUY");
                      }
                      ?>
                </a>
                <a href="#">
                  <?php 
                      if ($language == "vi") {
                        echo("NGUYỄN HỒNG MINH");
                      } else {
                        echo("NGUYEN HONG MINH");
                      }
                      ?>
                </a>
                <a href="lincense.php?language=<?php echo $language ?>">
                  <?php 
                      if ($language == "vi") {
                        echo("GIẤY PHÉP");
                      } else {
                        echo("LICENSE");
                      }
                      ?>
                </a>
              </nav>
              <div class="follow">
                <a href="#" class="ic-facebook"></a>
                <a href="#" class="ic-twitter"></a>
                <a href="#" class="ic-youtube"></a>
                <a href="#" class="ic-instagram"></a>
                <a href="#" class="ic-discord"></a>
              </div>
            </footer>
          </div>
        </div>
        <canvas id="fundo"></canvas>

        <script>
          // function set_language() {
          //     var language = jQuery('#language').val();
          //     var nameURL = window.location.hostname;
          //     window.location.href = "http://"+nameURL+"/QuickDraw/?language="+language;
          // }

          function set_language() {
            var language = jQuery('#language').val();
            var nameURL = window.location.hostname;
            var portNumber = window.location.port;
            window.location.href = "http://" + nameURL + ":" + portNumber + "/QuickDraw/?language=" + language;
          }
        </script>
        <script nomodule="" src="_next/static/runtime/polyfills-72c223e6dcb99d818fa8.js"></script>
        <script async="" data-next-page="/" src="_next/static/jI9EZqYNN6u6IZXd9e4uV/pages/index.js"></script>
        <script async="" data-next-page="/_app" src="_next/static/jI9EZqYNN6u6IZXd9e4uV/pages/_app.js"></script>
        <script src="_next/static/runtime/webpack-9369c5c69dbf6d4912cb.js" async=""></script>
        <script src="_next/static/chunks/framework.98c1b221acb34aa9927b.js" async=""></script>
        <script src="_next/static/chunks/ea88be26.d6bd6ff5c3174e291010.js" async=""></script>
        <script src="_next/static/chunks/6bd8ec9d.2c372599cf640b277883.js" async=""></script>
        <script src="_next/static/chunks/commons.53b19a6d3b90ba94951f.js" async=""></script>
        <script src="_next/static/chunks/900019541db2cde785725a04d23f9eb12f521a3a.e7d226ba7a0750015a7d.js" async=""></script>
        <script src="_next/static/chunks/styles.3ae7cd3526c5aecda59d.js" async=""></script>
        <script src="_next/static/runtime/main-4de108aaa74dc94c21f3.js" async=""></script>
        <script src="_next/static/chunks/4c54af6f7da728cb81ab63f2943b52b7d8a59b2f.6e2ee8ef7ca0f7ff1529.js" async=""></script>
        <script src="_next/static/chunks/69442508138b332cb1070c411bc37bdb1bd6eb52.67a895baa37b784729a6.js" async=""></script>
        <script src="_next/static/jI9EZqYNN6u6IZXd9e4uV/_buildManifest.js" async=""></script>
        <script src="_next/static/jI9EZqYNN6u6IZXd9e4uV/_ssgManifest.js" async=""></script>
      </body>

      </html>