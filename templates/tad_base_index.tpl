<{$toolbar}>
<{if $now_op}>
    <{include file="`$smarty.const.XOOPS_ROOT_PATH`/modules/$xoops_dirname/templates/op_`$now_op`.tpl"}>
<{/if}>

<script language="JavaScript" type="text/javascript">
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });
</script>