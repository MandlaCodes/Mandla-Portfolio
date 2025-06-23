
  // Simple portfolio filter script
  document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', e => {
      e.preventDefault();
      const filter = button.getAttribute('data-filter');

      // Toggle selected button styles
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');

      // Show/hide portfolio items
      document.querySelectorAll('.portfolio-item').forEach(item => {
        if (filter === '*' || item.classList.contains(filter.substring(1))) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });