<?php 
$title = array(
	'en' => array("Contact", "Assets", "Thanks"),
	'vi' => array("Liên hệ", "Tài sản", "Lời cảm ơn")
);

$top_nav = array (
	'en' => array("GET THE APP!", "DRAW EVERYTHING AND WIN", "FLAMES TEAM", "INFO"),
	'vi' => array("TẢI ỨNG DỤNG!", "VẼ MỌI THỨ VÀ CHIẾN THẮNG", "NHÓM FLAMES", "THÔNG TIN")
);

$content_left = array(
	'en' => array("QUICK PLAY", "NICKNAME", "LANGUAGE", "PLAY"),
	'vi' => array("CHƠI NGAY", "BIỆT DANH", "NGÔN NGỮ", "CHƠI")
);

$footer = array(
	'en' => array("ASSETS", "TERMS OF SERVICE", "PRIVACY", "THANKS", "CONTACT"),
	'vi' => array("TÀI SẢN", "ĐIỀU KHOẢN SỬ DỤNG", "QUYỀN RIÊNG TƯ", "LỜI CẢM ƠN", "LIÊN HỆ")
);

$assets_page = array(
	'en' => array('download'),
	'vi' => array('tải xuống')
);

$thanks_page = array(
	'en' => array("LICENSE", "THANKS FOR HELPING US", "We would like to thank the people that voluntarily helped us to improve the game creating a better experience for the players around the world. Help us to translate the game interface and join this golden players list.", "CONTRIBUTE"),
	'vi' => array("GIẤY PHÉP", "CẢM ƠN ĐÃ GIÚP CHÚNG TÔI", "Chúng tôi muốn dành lời cảm ơn đến các tình nguyện viên đã giúp chúng tôi cải thiện trải nghiệm của người chơi trên khắp thế giới. Giúp chúng tôi dịch và tham gia vào danh sách thành viên gold.", "ĐÓNG GÓP")
);

$contact_page = array(
	'en' => array("CONTACT", "Name", "E-mail", "Message", "SEND"),
	'vi' => array("LIÊN HỆ", "Tên", "E-mail", "Tin nhắn", "GỬI")
);

$playgame = array(
	'en' => array("Play Game", "RESULT", "I see"),
	'vi' => array("Chơi game", "KẾT QUẢ", "Tôi thấy")
);

if (isset($_GET['language'])) {
    $language = $_GET['language'];
    if ($language == 'vi') {
        $language = 'vi';
    }else if ($language == 'en') {
        $language = 'en';
    }else if($language != 'vi' || $language != 'en') {
        $language = 'en';
    }
}
?>