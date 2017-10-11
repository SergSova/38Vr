<?php
/**
 * Created by PhpStorm.
 * User: sergsova
 * Date: 11.10.17
 * Time: 11:59
 */

$request = $_SERVER['REQUEST_URI'];

//if (strstr($request, 'blog')) {
//    $lng         = substr($request, 1, 2);
//    $lng         = $lng == 'en' ? $lng : 'ru';
//    $context_key = $modx->getObject('modContextSetting',
//        ['value' => $lng])->context_key;
//    $base        = substr($request, 0, strpos($request, 'blog') + 5);
//    $alias       = str_replace('/', '', substr($request, strlen($base)));
//    $id          = $modx->getObject('modResource',
//        ['alias' => $alias, 'context_key' => $context_key])->id;
//    var_dump($lng);
//    var_dump($context_key);
//    var_dump($base);
//    var_dump($alias);
//    var_dump($id);
////    die();
//    if ($id) {
//        $redirectUrl = $base . '?parent=' . $id;
//        var_dump($redirectUrl);
//        $modx->sendRedirect($redirectUrl,['type'=>'REDIRECT_META']);
//    }
//}