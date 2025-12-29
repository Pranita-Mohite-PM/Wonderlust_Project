
(() => {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();




// // // Example starter JavaScript for disabling form submissions if there are invalid fields
// // (() => {
// //   'use strict'

// //   // Fetch all the forms we want to apply custom Bootstrap validation styles to
// //   const forms = document.querySelectorAll('.needs-validation')

// //   // Loop over them and prevent submission
// //   Array.from(forms).forEach(form => {
// //     form.addEventListener('submit', event => {
      
// //       if (!form.checkValidity()) {
// //         event.preventDefault()
// //         event.stopPropagation()
// //       }

// //       form.classList.add('was-validated')
// //     }, false)
// //   })
// // })()


// // (() => {
// //   'use strict'

// //   const forms = document.querySelectorAll('.needs-validation')

// //   Array.from(forms).forEach(form => {
// //     form.addEventListener('submit', async (event) => {
// //       // event.preventDefault() // ❌ prevents page reload
// //       event.stopPropagation()

// //       if (!form.checkValidity()) {
// //         form.classList.add('was-validated')
// //         return
// //       }

// //       form.classList.add('was-validated')

// //       // Gather form data
// //       const formData = new FormData(form)
// //       const data = Object.fromEntries(formData.entries())

// //       // Example: send login request via fetch
// //       try {
// //         const res = await fetch('/login', {
// //           method: 'POST',
// //           headers: { 'Content-Type': 'application/json' },
// //           body: JSON.stringify(data)
// //         })

// //         const result = await res.json()
// //         if (result.success) {
// //           window.location.href = '/dashboard' // redirect manually
// //         } else {
// //           alert(result.message) // show error
// //         }
// //       } catch (err) {
// //         console.error(err)
// //       }
// //     }, false)
// //   })
// // })()


// (() => {
//   'use strict'
//   const forms = document.querySelectorAll('.needs-validation')
//   Array.from(forms).forEach(form => {
//     form.addEventListener('submit', event => {
//       if (!form.checkValidity()) {
//         event.preventDefault()
//         event.stopPropagation()
//       }
//       form.classList.add('was-validated')
//     }, false)
//   })
// })()
