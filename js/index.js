"use strict";

$(document).ready(() => {
  const key = "blackant";
  
  $("#modal-auth button").click(event => {
    const input = $(event.target).closest(".modal").find("input");
    if (input.val() !== key) {
      input.addClass("is-invalid").focus().parent().effect("shake", {distance:10}).parent().find("small").removeClass("d-none");
      return;
    }
    input.removeClass("is-invalid").closest(".modal").modal("hide");
  });
  
  $("#modal-auth").on("shown.bs.modal", event => {
    $(event.target).find("input").focus();
  }).modal("show");
});
