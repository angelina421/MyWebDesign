import "./sidebar.js";
import "./termintal.js";
import "./slide.js";

document.addEventListener("DOMContentLoaded", () => {
  const dialog = document.getElementById("message-dialog-form");
  const showDialogButton = document.getElementById("show-message-dialog");

  if (dialog && showDialogButton) {
    showDialogButton.addEventListener("click", () => {
      dialog.showModal();
    });
    dialog.addEventListener("close", () => {
      console.log("留言弹窗已关闭。");
    });
  }
});
