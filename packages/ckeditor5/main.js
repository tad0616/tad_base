/**
 * This configuration was generated using the CKEditor 5 Builder. You can modify it anytime using this link:
 * https://ckeditor.com/ckeditor-5/builder/#installation/NoNgNARATAdA7DAzBSBGADAFgKyN9kKERKVTOEgDkwE5NNLEya50bU5KiptMfqUEAF4ALFOjDBUYCbLDT0AXUgAzFTUroo6CIqA=
 */

import {
	ClassicEditor,
	Alignment,
	Autoformat,
	AutoImage,
	AutoLink,
	Autosave,
	BlockQuote,
	Bold,
	Code,
	CodeBlock,
	Essentials,
	FindAndReplace,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	FullPage,
	GeneralHtmlSupport,
	Heading,
	Highlight,
	HorizontalLine,
	HtmlComment,
	HtmlEmbed,
	ImageBlock,
	ImageCaption,
	ImageInline,
	ImageInsert,
	ImageInsertViaUrl,
	ImageResize,
	ImageStyle,
	ImageTextAlternative,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Italic,
	Link,
	LinkImage,
	List,
	ListProperties,
	// Markdown,
	MediaEmbed,
	Paragraph,
	PasteFromMarkdownExperimental,
	PasteFromOffice,
	PlainTableOutput,
	RemoveFormat,
	ShowBlocks,
	SimpleUploadAdapter,
	SourceEditing,
	Strikethrough,
	Style,
	Subscript,
	Superscript,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableLayout,
	TableProperties,
	TableToolbar,
	TextTransformation,
	TodoList,
	Underline,
	WordCount
} from 'ckeditor5';

import translations from 'ckeditor5/translations/zh.js';

const LICENSE_KEY =
	'GPL';

const editorConfig = {
	toolbar: {
		items: [
			'undo',
			'redo',
			'|',
			'sourceEditing',
			'showBlocks',
			'|',
			'heading',
			'style',
			'|',
			'fontSize',
			'fontFamily',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'bold',
			'italic',
			'underline',
			'|',
			'link',
			'insertImage',
			'insertTable',
			'insertTableLayout',
			'highlight',
			'blockQuote',
			'codeBlock',
			'|',
			'alignment',
			'|',
			'bulletedList',
			'numberedList',
			'todoList',
			'outdent',
			'indent'
		],
		shouldNotGroupWhenFull: true
	},
	plugins: [
		Alignment,
		Autoformat,
		AutoImage,
		AutoLink,
		Autosave,
		BlockQuote,
		Bold,
		Code,
		CodeBlock,
		Essentials,
		FindAndReplace,
		FontBackgroundColor,
		FontColor,
		FontFamily,
		FontSize,
		FullPage,
		GeneralHtmlSupport,
		Heading,
		Highlight,
		HorizontalLine,
		HtmlComment,
		HtmlEmbed,
		ImageBlock,
		ImageCaption,
		ImageInline,
		ImageInsert,
		ImageInsertViaUrl,
		ImageResize,
		ImageStyle,
		ImageTextAlternative,
		ImageToolbar,
		ImageUpload,
		Indent,
		IndentBlock,
		Italic,
		Link,
		LinkImage,
		List,
		ListProperties,
		// Markdown,
		MediaEmbed,
		Paragraph,
		PasteFromMarkdownExperimental,
		PasteFromOffice,
		PlainTableOutput,
		RemoveFormat,
		ShowBlocks,
		SimpleUploadAdapter,
		SourceEditing,
		Strikethrough,
		Style,
		Subscript,
		Superscript,
		Table,
		TableCaption,
		TableCellProperties,
		TableColumnResize,
		TableLayout,
		TableProperties,
		TableToolbar,
		TextTransformation,
		TodoList,
		Underline,
		WordCount
	],
	fontFamily: {
		supportAllValues: true
	},
	fontSize: {
		options: [10, 12, 14, 'default', 18, 20, 22],
		supportAllValues: true
	},
	heading: {
		options: [
			{
				model: 'paragraph',
				title: 'Paragraph',
				class: 'ck-heading_paragraph'
			},
			{
				model: 'heading1',
				view: 'h1',
				title: '標題1',
				class: 'ck-heading_heading1'
			},
			{
				model: 'heading2',
				view: 'h2',
				title: '標題2',
				class: 'ck-heading_heading2'
			},
			{
				model: 'heading3',
				view: 'h3',
				title: '標題3',
				class: 'ck-heading_heading3'
			},
			{
				model: 'heading4',
				view: 'h4',
				title: '標題4',
				class: 'ck-heading_heading4'
			},
			{
				model: 'heading5',
				view: 'h5',
				title: '標題5',
				class: 'ck-heading_heading5'
			},
			{
				model: 'heading6',
				view: 'h6',
				title: '標題6',
				class: 'ck-heading_heading6'
			}
		]
	},
	pasteFromOffice: {
        // 保留或移除 Word 特定的樣式
        removeStyles: true,

        // 保留或移除 Word 特定的類別
        removeClasses: true,

        // 處理圖片
        handleImages: true
    },
	htmlSupport: {
		allow: [
			{
				name: /^.*$/,
				styles: true,
				attributes: true,
				classes: true
			}
		]
	},
	image: {
		toolbar: [
			'toggleImageCaption',
			'imageTextAlternative',
			'|',
			'imageStyle:inline',
			'imageStyle:wrapText',
			'imageStyle:breakText',
			'|',
			'resizeImage'
		]
	},
	initialData:initialData,
	language: 'zh',
	licenseKey: LICENSE_KEY,
	link: {
		addTargetToExternalLinks: true,
		defaultProtocol: 'https://',
		decorators: {
			toggleDownloadable: {
				mode: 'manual',
				label: 'Downloadable',
				attributes: {
					download: 'file'
				}
			}
		}
	},
	list: {
		properties: {
			styles: true,
			startIndex: true,
			reversed: true
		}
	},
	menuBar: {
		isVisible: true
	},
	placeholder: placeholder,
	style: {
		definitions: [
			{
				name: '文章類別',
				element: 'h3',
				classes: ['category']
			},
			{
				name: '主標題',
				element: 'h2',
				classes: ['document-title']
			},
			{
				name: '次標題',
				element: 'h3',
				classes: ['document-subtitle']
			},
			{
				name: '資訊框',
				element: 'p',
				classes: ['info-box']
			},
			{
				name: 'CTA Link Primary',
				element: 'a',
				classes: ['button', 'button--green']
			},
			{
				name: 'CTA Link Secondary',
				element: 'a',
				classes: ['button', 'button--black']
			},
			{
				name: 'Marker',
				element: 'span',
				classes: ['marker']
			},
			{
				name: 'Spoiler',
				element: 'span',
				classes: ['spoiler']
			}
		]
	},
	table: {
		contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
	},
    simpleUpload: {
        // 上傳 URL
        uploadUrl: xoopsUrl + '/modules/tad_base/packages/ckeditor5/upload.php',

        // 可選：設定 headers
        headers: {
            'X-CSRF-TOKEN': csrfToken,
        }
    },

	translations: [translations]
};

ClassicEditor.create(document.querySelector('#editor'), editorConfig).then(editor => {
	const wordCount = editor.plugins.get('WordCount');
	document.querySelector('#editor-word-count').appendChild(wordCount.wordCountContainer);

	return editor;
});
