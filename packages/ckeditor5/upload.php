<?php
include_once __DIR__ . '/../../../../mainfile.php'; // XOOPS 環境
global $xoopsUser;

// 驗證 CSRF Token
$headers = getallheaders();
if (!isset($headers['X-CSRF-TOKEN']) ||
    $headers['X-CSRF-TOKEN'] !== $_SESSION['csrf_token']) {
    echo json_encode(['error' => ['message' => 'Invalid CSRF token' . $headers['X-CSRF-TOKEN'] . ' !== ' . $_SESSION['csrf_token']]]);
    exit;
}

header('Content-Type: application/json; charset=utf-8');

$uploadDir = XOOPS_ROOT_PATH . '/uploads/ckeditor5/';
$uploadUrl = XOOPS_URL . '/uploads/ckeditor5/';

// 建立目錄
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

// 檢查檔案
if (!isset($_FILES['upload']) || $_FILES['upload']['error'] !== UPLOAD_ERR_OK) {
    echo json_encode(['error' => ['message' => '上傳失敗']]);
    exit;
}

$ext      = pathinfo($_FILES['upload']['name'], PATHINFO_EXTENSION);
$filename = uniqid('img_') . '.' . strtolower($ext);
$filepath = $uploadDir . $filename;

if (move_uploaded_file($_FILES['upload']['tmp_name'], $filepath)) {
    echo json_encode([
        'url' => $uploadUrl . $filename,
    ]);
} else {
    echo json_encode(['error' => ['message' => '無法儲存檔案']]);
}
