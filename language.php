<?php 
$title = array(
	'en' => array("Contact", "Assets", "Thanks"),
	'vn' => array("Liên hệ", "Tài sản", "Lời cảm ơn")
);

$top_nav = array (
	'en' => array("GET THE APP!", "DRAW, GUESS, WIN", "LAST UPDATES", "INFO"),
	'vn' => array("TẢI ỨNG DỤNG!", "VẼ, ĐOÁN, THẮNG", "NHỮNG CẬP NHẬT TRƯỚC", "THÔNG TIN")
);

$content_left = array(
	'en' => array("QUICK PLAY", "NICKNAME", "LANGUAGE", "PLAY"),
	'vn' => array("CHƠI NGAY", "BIỆT DANH", "NGÔN NGỮ", "CHƠI")
);

$footer = array(
	'en' => array("ASSETS", "TERMS OF SERVICE", "PRIVACY", "THANKS", "CONTACT"),
	'vn' => array("TÀI SẢN", "ĐIỀU KHOẢN SỬ DỤNG", "QUYỀN RIÊNG TƯ", "LỜI CẢM ƠN", "LIÊN HỆ")
);

$assets_page = array(
	'en' => array('download'),
	'vn' => array('tải xuống')
);

$thanks_page = array(
	'en' => array("THANKS", "THANKS FOR HELPING US", "We would like to thank the people that voluntarily helped us to improve the game creating a better experience for the players around the world. Help us to translate the game interface and join this golden players list.", "CONTRIBUTE"),
	'vn' => array("CẢM ƠN", "CẢM ƠN ĐÃ GIÚP CHÚNG TÔI", "Chúng tôi muốn dành lời cảm ơn đến các tình nguyện viên đã giúp chúng tôi cải thiện trải nghiệm của người chơi trên khắp thế giới. Giúp chúng tôi dịch và tham gia vào danh sách thành viên gold.", "ĐÓNG GÓP")
);

$contact_page = array(
	'en' => array("CONTACT", "Name", "E-mail", "Message", "SEND"),
	'vn' => array("LIÊN HỆ", "Tên", "E-mail", "Tin nhắn", "GỬI")
);

$playgame = array(
	'en' => array("Play Game", "RESULT", "I see"),
	'vn' => array("Chơi game", "KẾT QUẢ", "Tôi thấy")
);

if (isset($_GET['language'])) {
    $language = $_GET['language'];
    if ($language == 'vn') {
        $language = 'vn';
    }else if ($language == 'en') {
        $language = 'en';
    }else if($language != 'vn' || $language != 'en') {
        $language = 'en';
    }
}
?>