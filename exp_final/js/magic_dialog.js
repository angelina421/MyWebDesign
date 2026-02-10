document.addEventListener("DOMContentLoaded", () => {

  const comment_dialog = document.getElementById("commentDialog");
  const comment_form = document.getElementById("commentForm");
  const open_btn = document.getElementById("openCommentBtn"); 
  const close_btn = document.getElementById("closeDialogBtn");

  if (open_btn) {
    open_btn.onclick = () => {
      comment_dialog.showModal();
    };
  }

  if (close_btn) {
    close_btn.onclick = () => {
      comment_dialog.close();
    };
  }

  comment_form.onsubmit = (e) => {
    e.preventDefault();

    const submit_btn = comment_form.querySelector(".scroll_btn_confirm");
    const original_text = submit_btn.innerText;

    submit_btn.innerText = "镌刻中...";
    submit_btn.style.pointerEvents = "none";
    submit_btn.style.filter = "brightness(1.5)";

    const traveler_data = {
      name: document.getElementById("userName").value,
      message: document.getElementById("userMsg").value,
      time: new Date().toLocaleString()
    };

    console.log("契约已建立：", traveler_data);

    setTimeout(() => {
      submit_btn.innerText = original_text;
      submit_btn.style.pointerEvents = "auto";
      submit_btn.style.filter = "none";

      comment_dialog.close();
      comment_form.reset();

      alert(`契约达成！欢迎你，旅者 ${traveler_data.name}`);
    }, 1000);
  };

  comment_dialog.addEventListener("click", (e) => {
    if (e.target === comment_dialog) {
      comment_dialog.close();
    }
  });
});