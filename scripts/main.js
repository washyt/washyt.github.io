// carousel js
var slideIndex = 1;
showDivs(slideIndex);

// arrows
function plusDivs(n) {
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  // set slideIndex dynamically
  var i;
  var x = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" filled-dot", "");
  }

  // uses styles for filled and unfilled
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " filled-dot";
}

document.querySelector("#push").onclick = function () {
  // handle none inputs
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please enter a valid task");
  } else {
    // append div to task-id div
    document.querySelector("#tasks").innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector("#newtask input").value}
                </span>
                <button class="delete">
                    X
                </button>
            </div>
        `;

        // handle CRUD
    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};

/* demos used:
 https://www.w3schools.com/w3css/w3css_slideshow.asp
 https://www.geeksforgeeks.org/javascript-project-on-todo-list/

*/