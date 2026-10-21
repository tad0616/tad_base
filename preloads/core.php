<?php
defined('XOOPS_ROOT_PATH') || die('Restricted access.');

class Tad_baseCorePreload extends XoopsPreloadItem
{
    // to add PSR-4 autoloader

    /**
     * @param $args
     */
    public static function eventCoreIncludeCommonEnd($args)
    {
        require __DIR__ . '/autoloader.php';
    }

    // CK5 前台內容樣式全站載入：規則都限定在 .ck-content 內，各模組不必再自行呼叫
    public static function eventCoreHeaderAddmeta($args)
    {
        \XoopsModules\Tad_base\CkEditor5::loadContentCss();
    }
}
