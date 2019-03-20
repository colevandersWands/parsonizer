function displayErrors(fb) {
    if(fb.errors.length > 0) {
        alert(fb.errors[0]);
    }
} 

function init(initial){
    var parsonow = new ParsonsWidget({
        'sortableId': 'sortable',
        'trashId': 'sortableTrash',
        'feedback_cb' : displayErrors,
        // 'max_wrong_lines': 1,
        "first_error_only": true
    });
    parsonow.init(initial);
    parsonow.shuffleLines();
    $("#newInstanceLink").click(function(event){
        event.preventDefault();
        parsonow.shuffleLines();
    });
    $("#feedbackLink").click(function(event){
        event.preventDefault();
        parsonow.getFeedback();
    });

    return parsonow;
};
