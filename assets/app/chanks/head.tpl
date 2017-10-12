<!doctype html>
<html lang="[[++cultureKey]]">
<head>
    <base href="[[++site_url]]"/>
    <meta charset="UTF-8">
    [[$tpl_seo]]

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"/>

    [[+mScrollbar:!empty=`
    <link rel="stylesheet"
          href="/assets/css/lib/jquery.mCustomScrollbar.min.css">
    `]]
    [[+style:!empty=`
    <link rel="stylesheet" href="/assets/css[[+css_path:default=`/`]]style.css">
    `]]
    [[+media:!empty=`
    <link rel="stylesheet" href="/assets/css[[+css_path:default=`/`]]media.css">
    `]]
    [[+vik:!empty=`
    <link rel="stylesheet" href="/assets/css[[+css_path:default=`/`]]vik.css">
    `]]
    [[+main:!empty=`
    <link rel="stylesheet" href="/assets/css[[+css_path:default=`/`]]main.css">
    `]]

</head>
<body class="[[+classes]]">