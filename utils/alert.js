import Swal from 'sweetalert2';

const alert = (icon, title, msg) => {
  Swal.fire({
    icon: icon,
    title: title,
    text: msg,
    timer: 1500,
  });
};

const alertDialog = () => {
  Swal.fire({
    title: 'Do you want to save the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Saved!', '', 'success');
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info');
    }
  });
};

export default alert;
