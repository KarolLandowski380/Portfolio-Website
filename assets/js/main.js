/* Form phone number mask */

  const phoneInput = document.getElementById('phone');

  phoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');

    if (value.length > 9) {
      value = value.slice(0, 9);
    }

    if (value.length > 6) {
      value = value.replace(/(\d{3})(\d{3})(\d{0,3})/, '$1 $2 $3');
    } else if (value.length > 3) {
      value = value.replace(/(\d{3})(\d{0,3})/, '$1 $2');
    }

    e.target.value = value;
  });