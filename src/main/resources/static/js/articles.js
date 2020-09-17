const articles = {
    init() {
        const form = Array.from(document.querySelectorAll('.delete_form'));
        form.forEach(f => f.addEventListener('submit', e => e.preventDefault()));

        const deleteBtn = Array.from(document.querySelectorAll('.delete_btn'));
        deleteBtn.forEach(btn => btn.addEventListener('click', this.onDeleteBtnClicked));

        const commentEditBtn = document.querySelector('.comment_edit_btn');
        commentEditBtn.addEventListener('click', this.onCommentEditBtnClicked);

        const commentSubmitBtn = document.querySelector('.cmt_submit');
        commentSubmitBtn.addEventListener('click', this.onCommentSubmit);
    },
    onDeleteBtnClicked() {
        const res = confirm('정말 삭제하시겠습니까?');
        if (res == true) {
            $(this).closest('form').submit();
            alert('삭제되었습니다.');
        }
    },
    onCommentEditBtnClicked(e) {
        const comment = e.target.parentElement.nextElementSibling;
        const commentId = comment.id;
        if (e.target.textContent === '수정') {
            $('#comment_body').val(comment.textContent);
            $('#comment_body').focus();

            document.querySelector('.cmt_submit').textContent = '수정';
            document.querySelector('#comment_form').action = '/comment/edit/' + commentId;
            e.target.textContent = '수정 취소';
        } else {
            $('#comment_body').val('');
            document.querySelector('.cmt_submit').textContent = '수정';
            document.querySelector('#comment_form').action = '/comment/new/' + commentId;
            e.target.textContent = '등록';
        }
    },
    onCommentSubmit(e) {
        if (e.target.textContent === '수정') {
            alert('수정이 완료되었습니다.');
        }
    }
}

articles.init();