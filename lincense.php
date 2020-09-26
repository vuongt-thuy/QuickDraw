<?php
include 'language.php';
?>

<!DOCTYPE html>
<html>
<!-- Mirrored from gartic.io/thanks by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 18 Aug 2020 07:03:35 GMT -->
<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<!-- /Added by HTTrack -->

<head>
    <title>
        <?php 
        if ($language == "vi") {
            echo("GIẤY PHÉP");
        } else {
            echo("LICENSE");
        }
        ?>
    </title>
    <link rel="icon" href="static/images/favicon.png">
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
    <script async="" src="../www.googletagservices.com/tag/js/gpt.js"></script>
    <script type="text/javascript" src="jquery-3.5.1.min.js"></script>
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
<script async="" src="../api.adinplay.com/libs/aiptag/pub/GTC/gartic.io/tag.min.js"></script>
<meta name="viewport" content="width=device-width" />
<meta charset="utf-8" />
<link rel="stylesheet" href="static/css/nprogress.css" />
<meta name="description" content="Help us to translate the game interface and join this golden players list" />
<meta name="next-head-count" content="5" />
<link rel="preload" href="_next/static/css/6bd8ec9d.99489d07.chunk.css" as="style" />
<link rel="stylesheet" href="_next/static/css/6bd8ec9d.99489d07.chunk.css" />
<link rel="preload" href="_next/static/jI9EZqYNN6u6IZXd9e4uV/pages/thanks.js" as="script" />
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
<script type="text/javascript" src="js/common.js"></script>
<script type="text/javascript">
    $(document).ready(function(){
        jQuery("#Username").text(getCookie("username")); 
    });
</script>
</head>

<body>
    <div id="background"></div>
    <div id="__next">
        <div class="nextCenter">
            <div id="content">
                <div class="screenSystem" style="height: ;">
                    <div id="screens">
                        <header class="">
                            <div class="logged">
                                <div class="getApp">
                                    <h5><?php echo $top_nav[$language]['0']; ?>!</h5>
                                    <span>
                                        <a class="ic-gPlay" href="#">
                                            <p>ANDROID</p>
                                        </a>
                                        <a class="ic-iOS" href="#">
                                            <p>iOS</p>
                                        </a>
                                    </span>
                                </div>
                                <div class="logo internal"><a href="index.php">
                                    <!-- <figure></figure> -->
                                    <img src="static/images/logo.png" alt="" width="94%">
                                </a></div>
                                <div class="userLogged">
                                    <div class="infos"><span id="Username"></span></div>
                                    <div>
                                        <div class="avatar">
                                            <div class="av avt0"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div>
                            <div class="title">
                                <span class="gTitle">
                                    <h2><?php echo $thanks_page[$language]['0']; ?></h2>
                                </span>
                            </div>
                            <div class="content thanks">
                                <div class="left">
                                    <span>
                                        <figure></figure>
                                        <?php 
                                        if ($language == "vi") {
                                            echo('<p>
                                                - Ứng dụng của chúng tôi phát triển dựa trên Google Input Tools. <br/><br/>
                                                - Dữ liệu đào tạo dựa trên Google\'s "Quick, Draw!" <a href="https://github.com/googlecreativelab/quickdraw-dataset" target="_blank"> QuickDraw Dataset</a> <br/>
                                                - Giấy phép: <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">https://creativecommons.org/licenses/by/4.0/</a>
                                                </p>');
                                        } else {
                                            echo('
                                                <p>
                                                - Our application developed based on Google Input Tools. <br/><br/>
                                                - Training data based on Google\'s "Quick, Draw!" <a href="https://github.com/googlecreativelab/quickdraw-dataset" target="_blank"> QuickDraw Dataset</a> <br/>
                                                - Licenes: <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">https://creativecommons.org/licenses/by/4.0/</a>
                                                </p>');
                                        }
                                        ?>
                                    </span>
                                    <a href="index.php"class="btYellowBig ic-copylink">
                                        <strong>
                                            <?php 
                                            if ($language == "vi") {
                                                echo("Chơi Game");
                                            } else {
                                                echo("Play Game");
                                            }
                                            ?>
                                        </strong>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <canvas id="fundo"></canvas>
    </div>

    <script nomodule="" src="_next/static/runtime/polyfills-72c223e6dcb99d818fa8.js"></script>
    <script async="" data-next-page="/thanks" src="_next/static/jI9EZqYNN6u6IZXd9e4uV/pages/thanks.js"></script>
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
<!-- Mirrored from gartic.io/thanks by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 18 Aug 2020 07:03:35 GMT -->

</html>