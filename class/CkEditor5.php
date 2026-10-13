<?php
namespace XoopsModules\Tad_base;

class CkEditor5
{
    private string $colName;
    private string $colId;
    private string $value;

    public function __construct(string $colName = '', string $value = '')
    {
        $this->colName = $colName;
        $this->colId   = "editor_{$colName}";
        $this->value   = $value;
    }

    public function setVar(string $var, mixed $val): void
    {
        if (property_exists($this, $var)) {
            $this->$var = $val;
        }
    }

    public function render(): string
    {
        global $xoTheme;
        $xoops_url = XOOPS_URL;
        $content   = htmlspecialchars($this->value, ENT_QUOTES | ENT_HTML5, 'UTF-8');

        // 設定基礎URL和腳本
        $scripts = '';
        if (!$xoTheme) {
            $scripts .= '<link rel="stylesheet" href="' . XOOPS_URL . '/modules/tad_base/packages/ckeditor5/style.css">';
            $scripts .= '<link rel="stylesheet" href="' . XOOPS_URL . '/modules/tad_base/packages/ckeditor5/ckeditor5.css">';
        } else {
            $xoTheme->addStylesheet(XOOPS_URL . '/modules/tad_base/packages/ckeditor5/style.css');
            $xoTheme->addStylesheet(XOOPS_URL . '/modules/tad_base/packages/ckeditor5/ckeditor5.css');
        }

        $csrf_token = $_SESSION['csrf_token'] = bin2hex(random_bytes(32));

        return <<<HTML
            $scripts
            <div class="main-container">
                <div
                    class="editor-container editor-container_classic-editor editor-container_include-style editor-container_include-word-count"
                    id="editor-container"
                >
                    <div class="editor-container__editor"><div id="editor"></div></div>
                    <div class="editor_container__word-count" id="editor-word-count"></div>
                </div>
            </div>

            <script type="importmap">
                {
                    "imports": {
                        "ckeditor5": "$xoops_url/modules/tad_base/packages/ckeditor5/ckeditor5.js",
                        "ckeditor5/": "$xoops_url/modules/tad_base/packages/ckeditor5/"
                    }
                }
            </script>
            <script>
                let xoopsUrl='{$xoops_url}';
                let initialData='{$content}';
                let placeholder='請輸入內容';
                let csrfToken = '{$csrf_token}';
            </script>
            <script type="module" src="$xoops_url/modules/tad_base/packages/ckeditor5/main.js">
            </script>
            <!-- A friendly reminder to run on a server, remove this during the integration. -->
            <script>
                    window.onload = function() {
                        if ( window.location.protocol === "file:" ) {
                            alert( "This sample requires an HTTP server. Please serve this file with a web server." );
                        }
                    };
            </script>
        HTML;
    }
}
