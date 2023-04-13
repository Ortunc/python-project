function addTask() {
   var text = String($('#task').val());
   var createdDate = String(Date.now());
   todos.push({'createdDate':createdDate,'text':text,'ticked':false});
   $.cookie("todos",JSON.stringify(todos));

   $('#gorevler').append('<div class="gorev"><input type="checkbox" /><div class="metin">'+text+'</div> </p></div>');
   $('#task').val('');
};