define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.uploadfile/index',
        add_url: 'system.uploadfile/add',
        edit_url: 'system.uploadfile/edit',
        del_url: 'system.uploadfile/del',
        modify_url: 'system.uploadfile/modify',
        export_url:'system.uploadfile/export',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                cols: [[
                    {type: "checkbox"},
                    {field: 'id', width: 80, title: 'ID', sort: true, align: "center"},
                    {field: 'upload_type', minWidth: 80, title: '存储位置', align: "center", search: 'select', selectList: {'local': '本地', 'alioss': '阿里云', 'qnoss': '七牛云', ',txcos': '腾讯云'}},
                    {field: 'url', minWidth: 80, search: false, title: '图片信息', imageHeight: 40, align: "center", templet: ea.table.image},
                    {field: 'url', minWidth: 120, title: '保存地址', align: "center", templet: ea.table.url},
                    {field: 'original_name', minWidth: 80, title: '文件原名', align: "center"},
                    {field: 'mime_type', minWidth: 80, title: 'mime类型', align: "center"},
                    {field: 'file_ext', minWidth: 80, title: '文件后缀', align: "center"},
                    {field: 'create_time', minWidth: 80, title: '创建时间', align: "center", search: 'range'},
                    {width: 250, align: 'center', title: '操作', templet: ea.table.tool, operat: ['delete']}
                ]],
            });

            ea.listen();
        },
        add: function () {
            ea.listen();
        },
        edit: function () {
            ea.listen();
        },
        password: function () {
            ea.listen();
        }
    };
    return Controller;
});