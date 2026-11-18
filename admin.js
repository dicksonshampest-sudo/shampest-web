// ===== ADMIN DASHBOARD =====
document.addEventListener('DOMContentLoaded', () => {
  // Sample form submit prevention
  const forms = document.querySelectorAll('.admin-form form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Admin functionality: data would be saved to database.');
    });
  });

  // Table delete buttons
  document.querySelectorAll('.admin-table .btn-small.danger').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm('Delete this item?')) {
        btn.closest('tr').remove();
      }
    });
  });
});