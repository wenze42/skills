/* ============================================================
   quiz.js · 课程通用练习组件
   用法：
   <section class="quiz" data-answer="cccs"
            data-explain="为什么…" data-hint="提示…">
     <p class="q"><span class="qno">01</span>题干</p>
     <div class="options">
       <button class="option" data-key="cccs">CCCS</button>
       …
     </div>
     <p class="feedback" aria-live="polite"></p>
   </section>

   统计：页面内 <strong id="score"> 显示“一次答对 x / N”，
        <span id="bar"> 显示进度条宽度。
   ============================================================ */

(function () {
  "use strict";

  var quizzes = Array.prototype.slice.call(document.querySelectorAll(".quiz"));
  if (!quizzes.length) return;

  var total = quizzes.length;
  var solved = 0;
  var firstTry = 0;
  var scoreEl = document.getElementById("score");
  var barEl = document.getElementById("bar");

  function render() {
    if (scoreEl) scoreEl.textContent = firstTry + " / " + total;
    if (barEl) barEl.style.width = (solved / total) * 100 + "%";
  }

  quizzes.forEach(function (quiz, index) {
    var answer = quiz.getAttribute("data-answer");
    var explain = quiz.getAttribute("data-explain") || "";
    var hint = quiz.getAttribute("data-hint") || "还不对。回到上面的定义，再看一眼控制量和输出量。";
    var options = Array.prototype.slice.call(quiz.querySelectorAll(".option"));
    var feedback = quiz.querySelector(".feedback");
    var attempts = 0;
    var done = false;

    options.forEach(function (button) {
      button.type = "button";
      button.setAttribute("aria-label", "选项 " + (index + 1) + "：" + button.textContent.trim());

      button.addEventListener("click", function () {
        if (done || button.disabled) return;
        attempts += 1;

        if (button.getAttribute("data-key") === answer) {
          done = true;
          solved += 1;
          if (attempts === 1) firstTry += 1;

          button.classList.add("correct");
          options.forEach(function (other) { other.disabled = true; });

          if (feedback) {
            feedback.className = "feedback good";
            feedback.textContent =
              (attempts === 1 ? "答对了。" : "答对了（第 " + attempts + " 次尝试）。") +
              (explain ? " " + explain : "");
          }
          render();
        } else {
          button.classList.add("wrong");
          button.disabled = true;
          if (feedback) {
            feedback.className = "feedback bad";
            feedback.textContent = hint;
          }
        }
      });
    });
  });

  render();
})();
