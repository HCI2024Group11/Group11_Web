function showSection(sectionId) {
  // Hide all sections
  console.log("hi");
  const sections = document.querySelectorAll(".content-section");
  sections.forEach((section) => (section.style.display = "none"));

  // Show the selected section
  const sectionToShow = document.getElementById(sectionId);
  sectionToShow.style.display = "block";
}
function toggleContent(index) {
  const content = document.getElementById("content-" + index);

  // Toggle the visibility of the content
  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}
