<div class="container sect4">
    <div class="advan">
        <h3>[[#[[*parent_catalog]].advan_title]]</h3>
        [[!getImageList?
        &docid=`[[*parent_catalog]]`
        &tvname=`migx_advan_catalog`
        &tpl=`@CODE:
        <div class="advan-item [[+idx:is=`1`:then=`mark-advan`]]">
            <div class="imgg"><img src="[[+image]]" alt="[[+alt]]"
                                   title="[[+img_title]]"></div>
            [[+text]]
        </div>
        `
        ]]
        <div class="clear"></div>
    </div>
</div>