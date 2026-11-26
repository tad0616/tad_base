<?php
// 下方選單皆註解時仍需定義，避免 index.php 傳入未定義變數
$interface_menu = $interface_icon = [];

// //判斷是否對該模組有管理權限
// $is_admin = basename(__DIR__) . '_adm';
// if (!isset($_SESSION[$is_admin])) {
//     $_SESSION[$is_admin] = ($xoopsUser) ? $xoopsUser->isAdmin() : false;
// }

// //回模組首頁
// $interface_menu[_TAD_TO_MOD] = "index.php";
// $interface_icon[_TAD_TO_MOD] = "fa-chevron-right";

// //模組後台
// if ($_SESSION[$is_admin]) {
//     $interface_menu[_TAD_TO_ADMIN] = "admin/main.php";
//     $interface_icon[_TAD_TO_ADMIN] = "fa-chevron-right";
// }
