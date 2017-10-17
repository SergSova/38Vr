<div class="menus open">
    <div class="container">
        <div class="left-menus">
            <ul class="comp">
                <li class="home"><a [[!getLink?&id=`[[++site_start]]`]]>[[#[[++site_start]].pagetitle]]</a>
                </li><!--home-->
                <li class="home"><a [[!getLink?&id=`24`]]>[[#[[%24:bid]].pagetitle]]</a>
                </li>
                <!--about-->
                <li class="home home4"><a [[!getLink?&id=`[[%5:bid]]`]]>[[#[[%5:bid]].pagetitle]]</a>
                </li><!--services-->
                <li class="home home5"><a [[!getLink?&id=`[[%7:bid]]`]]>[[#[[%7:bid]].pagetitle]]</a>
                </li><!--portfolio-->
                <li class="home home9"><a [[!getLink?&id=`[[%15:bid]]`]]>[[#[[%15:bid]].pagetitle]]</a>
                </li><!--blog-->
                <li class="home"><a [[!getLink?&id=`[[%8:bid]]`]]>[[#[[%8:bid]].pagetitle]]</a>
                </li><!--contact-->
            </ul>
            <ul class="mobiles">
                <li class="pages"><a [[!getLink?&id=`[[++site_start]]`]]>[[#[[++site_start]].pagetitle]]</a>
                </li><!--home-->
                <li class="pages"><a [[!getLink?&id=`24`]]>[[#[[%24:bid]].pagetitle]]</a>
                </li>
                <!--about-->
                <li class="pages pages4"><a [[!getLink?&id=`[[%5:bid]]`]]>[[#[[%5:bid]].pagetitle]]</a>
                </li><!--services-->
                <li class="pages pages5"><a [[!getLink?&id=`[[%7:bid]]`]]>[[#[[%7:bid]].pagetitle]]</a>
                </li><!--portfolio-->
                <li class="pages pages9"><a [[!getLink?&id=`[[%15:bid]]`]]>[[#[[%15:bid]].pagetitle]]</a>
                </li><!--blog-->
                <li class="pages"><a [[!getLink?&id=`[[%8:bid]]`]]>[[#[[%8:bid]].pagetitle]]</a>
                </li><!--contact-->
            </ul>
        </div>
        <div class="under-movie">
            <div class="right-menus" id="boxscroll">
                <div class="movie-block">
                    <div class="movie">
                        [[!pdoResources?
                        &parents=`[[%5:bid]]`
                        &showLog=`0`
                        &select=`id,pagetitle,services_image`
                        &includeTVs=`services_image`
                        &tvPrefix=``
                        &depth=`0`
                        &tpl=`@INLINE <a href="{$_modx->makeUrl([[+id]])}">
                            <div class="item-movie">
                                <img src="[[+services_image]]"
                                     alt="[[+pagetitle]]">
                                <p>[[+pagetitle]]</p>
                            </div>
                        </a>`
                        ]]
                    </div>
                    <div class="movie5">
                        [[!pdoResources?
                        &parents=`[[%7:bid]]`
                        &showLog=`0`
                        &select=`id,pagetitle,port_main_img`
                        &includeTVs=`port_main_img`
                        &tvPrefix=``
                        &where=`{"template":4}`
                        &tpl=`@INLINE <a href="{$_modx->makeUrl([[+id]])}">
                            <div class="item-movie">
                                <img src="[[+port_main_img]]"
                                     alt="[[+pagetitle]]">
                                <p>[[+pagetitle]]</p>
                            </div>
                        </a>`
                        ]]
                    </div>
                    <div class="movie9">
                        [[!pdoResources?
                        &parents=`[[%16:bid]]`
                        &showLog=`0`
                        &select=`id,pagetitle,article_image`
                        &includeTVs=`article_image`
                        &tvPrefix=``
                        &where=`{"template":5}`
                        &tpl=`@INLINE <a href="{$_modx->makeUrl([[+id]])}">
                            <div class="item-movie">
                                <img src="[[+article_image]]"
                                     alt="[[+pagetitle]]">
                                <p>[[+pagetitle]]</p>
                            </div>
                        </a>`
                        ]]
                    </div>
                    <div class="movie0" style="opacity: 0;">
                        [[!pdoResources?
                        &parents=`[[%5:bid]]`
                        &showLog=`0`
                        &select=`id,pagetitle,services_image`
                        &includeTVs=`services_image`
                        &tvPrefix=``
                        &depth=`0`
                        &tpl=`@INLINE <a href="{$_modx->makeUrl([[+id]])}">
                            <div class="item-movie">
                                <img src="[[+services_image]]"
                                     alt="[[+pagetitle]]">
                                <p>[[+pagetitle]]</p>
                            </div>
                        </a>`
                        ]]
                    </div>
                </div>
            </div>
            <div class="upss-aroww"></div>
            <div class="down-aroww"></div>
            <div class="back"><img src="/assets/img/back.png" alt="">back
            </div>
        </div>
    </div>
    <div class="close">
        <div class="cross-menu">
            <div class="cross-obj">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
    <div class="wrap-lines5">
        <div class="wrap-container5">
            <div class="line line1">
                <div class="white-line"></div>
            </div>
            <div class="line line2">
                <div class="white-line"></div>
            </div>
            <div class="line line3">
                <div class="white-line"></div>
            </div>
            <div class="line line4">
                <div class="white-line"></div>
                <div class="white-line9"></div>
            </div>
        </div>
    </div>

    <div class="leter-menu"><img src="/assets/img/menu9.png" alt=""></div>
    <div class="link">
        <div class="block-link">
            <div class="item-link">
                <a href="javascript:void(0);">
                    <img src="/assets/img/face.png" alt="">
                </a>
            </div>
            <div class="item-link">
                <a href="javascript:void(0);">
                    <img src="/assets/img/insta.png" alt="">
                </a>
            </div>
            <div class="item-link">
                <a href="javascript:void(0);">
                    <img src="/assets/img/bebe.png" alt="">
                </a>
            </div>
        </div>
    </div>
    <div class="logo">
        <a [[!getLink?&id=`[[++site_start]]`]]>
            <img src="/assets/img/logo.png" alt="">
        </a>
    </div>
    <div class="lang">
        <div class="lang-block">
            <ul>
                [[!BabelLinks?
                &tpl=`babel_tpl`
                &activeCls=`acti`
                &showCurrent=`1`
                ]]
            </ul>
        </div>
    </div>
</div>
