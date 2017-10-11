<?php
/**
 * Created by PhpStorm.
 * User: sergsova
 * Date: 11.09.17
 * Time: 13:42
 */


if ( ! $id) {
    return;
}
echo $id == $modx->resource->id ? '' : 'href="'.$modx->makeUrl($id).'"';