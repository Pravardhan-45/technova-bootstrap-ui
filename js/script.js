// script.js - small interactive behaviors (form validation, year fill, etc.)

// set current year in footer
document.addEventListener('DOMContentLoaded', function () {
  const y = new Date().getFullYear();
  document.getElementById('year')?.textContent = y;
  document.getElementById('year2')?.textContent = y;
  document.getElementById('year3')?.textContent = y;

  // Bootstrap-style client-side validation
  var forms = document.querySelectorAll('.needs-validation');
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        // For internship deliverable: simulate success with a friendly message.
        event.preventDefault();
        const modal = bootstrap.Modal.getInstance(document.querySelector('.modal'));
        if (modal) modal.hide();
        showToast('Thanks! We received your message — we will reach out soon.');
      }
      form.classList.add('was-validated');
    }, false);
  });

  // Toast creation (dynamic)
  function showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'toast align-items-center text-bg-dark border-0 position-fixed bottom-0 end-0 m-3';
    toast.role = 'status';
    toast.ariaLive = 'polite';
    toast.ariaAtomic = 'true';
    toast.innerHTML = `
      <div class="d-flex">
        <div class="toast-body">${msg}</div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>`;
    document.body.appendChild(toast);
    const bsToast = new bootstrap.Toast(toast, { delay: 4000 });
    bsToast.show();
    toast.addEventListener('hidden.bs.toast', () => toast.remove());
  }
});
