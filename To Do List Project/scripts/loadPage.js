function showTask(task) {
   var text = task['text'];
   $('#gorevler').append('<div class="gorev"><input type="checkbox" /><div class="metin">'+text+'</div> </p></div>');
};

if ($.cookie("todos") != undefined) {
   var todos = $.parseJSON($.cookie("todos"));
   todos.forEach(showTask);

} else {
   var todos = [];
   $.cookie("todos", JSON.stringify(todos));
}
