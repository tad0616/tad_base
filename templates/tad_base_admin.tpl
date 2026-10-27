<div class="container-fluid" style="margin-bottom: 30px;">
    <{if $now_op}>
        <{include file="`$smarty.const.XOOPS_ROOT_PATH`/modules/$xoops_dirname/templates/op_`$now_op`.tpl"}>
    <{/if}>
</div>

<script language="JavaScript" type="text/javascript">
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });
</script>