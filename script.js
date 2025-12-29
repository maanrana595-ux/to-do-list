 $(document).ready(function () {
  // Add task with animation
  $("#add-btn").click(function () {
    const task = $("#task-input").val().trim();
    if (task !== "") {
      const newTask = $(`<li>${task}<span class="remove-btn">❌</span></li>`);
      $("#task-list").append(newTask.hide().slideDown("fast"));
      $("#task-input").val("");
    }
  });

  // Mark as done (glow effect toggle)
  $("#task-list").on("click", "li", function () {
    $(this).toggleClass("done");
  });

  // Remove task with fade out
  $("#task-list").on("click", ".remove-btn", function (e) {
    e.stopPropagation();
    $(this).parent().fadeOut(300, function () {
      $(this).remove();
    });
  });
});
