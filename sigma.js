document.addEventListener('DOMContentLoaded', () => {
  const emailEl = document.getElementById('email');
  if (!emailEl) return;

  emailEl.addEventListener('click', () => {
    const email = 'mail@astr4x.com';
    navigator.clipboard.writeText(email).then(() => {
      alert('Copied on clipboard!');
    }).catch(err => {
      console.error('Idunno what happend, cant copy:', err);
    });
  });
});