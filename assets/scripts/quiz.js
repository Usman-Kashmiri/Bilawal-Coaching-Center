function startquizbtn() {
    Swal.fire({
        title: 'Are you sure, you want to start quiz now?',
        icon: 'question',
        showClass: {
            popup: 'animate__animated animate__zoomIn'
        },
        hideClass: {
            popup: 'animate__animated animate__zoomOut'
        },
        showCloseButton: true,
        showDenyButton: true,
        confirmButtonText: `Yes, start now!`,
        denyButtonText: `No, cancel`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            open('book.html', '_self')
        } else if (result.isDenied) {
            return false
        }
    });
}