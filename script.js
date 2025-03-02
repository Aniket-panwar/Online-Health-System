 // JavaScript for filtering projects based on tabs
 document.querySelectorAll(".nav-link").forEach(tab => {
    tab.addEventListener("click", function () {
        let category = this.dataset.bsTarget.substring(1);
        let allProjects = document.querySelectorAll(".project-item").forEach(project => {
            project.parentElement.style.display = "none";
        });

        if (category === "all") {
            document.querySelectorAll(".project-item").forEach(project => {
                project.parentElement.style.display = "block";
            });
        } else {
            document.querySelectorAll("." + category).forEach(project => {
                project.style.display = "block";
            });
        }
    });
});
function searchParts() {
    let input = document.getElementById("search").value.toLowerCase();
    let rows = document.querySelectorAll("#donorTable tr" );
    rows.forEach(row => {
      let part = row.cells[0].textContent.toLowerCase();
      if (part.includes(input)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  }
  
  // helf section
  function searchItems() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const items = document.querySelectorAll('.help-item');

    items.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        const description = item.querySelector('p').textContent.toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}