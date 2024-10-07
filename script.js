function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}
function toggleSubOptions(selectedCategory) {
    var companyOptions = document.getElementById('sub-options');
    var gstOptions = document.getElementById('gst-sub-options');

    if (selectedCategory === 'Company Registration') {
        companyOptions.style.display = 'block';
        gstOptions.style.display = 'none';
    } else if (selectedCategory === 'GST Related') {
        gstOptions.style.display = 'block';
        companyOptions.style.display = 'none';
    } else {
        // Hide both if other categories are selected
        companyOptions.style.display = 'none';
        gstOptions.style.display = 'none';
    }
}
function scrollToSection() {
    const section = document.getElementById('container1');
    section.scrollIntoView({ behavior: 'smooth' });}

    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('show');
    }
    
    document.querySelector('.submit-btn h3').addEventListener('click', function () {
        const category = document.querySelector('input[name="category"]:checked').value;
        const subCategory = document.querySelector('input[name="sub-category"]:checked')
            ? document.querySelector('input[name="sub-category"]:checked').value
            : document.querySelector('input[name="gst-sub-category"]:checked')
                ? document.querySelector('input[name="gst-sub-category"]:checked').value
                : '';
        const query = document.getElementById('query').value;
    
        const formData = new FormData();
        formData.append('category', category);
        formData.append('sub-category', subCategory);
        formData.append('query', query);
    
        fetch('https://script.google.com/macros/s/AKfycbxwbOVUDLiZ-xUzctPnoZ_FBNfXpkH2Mf2vXj2PVRPclo2ziNNPd8JdgKC3SVEzab64xA/exec', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    alert('Form submitted successfully!');
                } else {
                    alert('There was a problem submitting the form.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
    
    
    function toggleSubOptions(selectedCategory) {
        var companyOptions = document.getElementById('sub-options');
        var gstOptions = document.getElementById('gst-sub-options');
    
        if (selectedCategory === 'Company Registration') {
            companyOptions.style.display = 'block';
            gstOptions.style.display = 'none';
        } else if (selectedCategory === 'GST Related') {
            gstOptions.style.display = 'block';
            companyOptions.style.display = 'none';
        } else {
            // Hide both if other categories are selected
            companyOptions.style.display = 'none';
            gstOptions.style.display = 'none';
        }
    }
    
    
    
    
    function scrollToSection() {
        const section = document.getElementById('container1');
        section.scrollIntoView({ behavior: 'smooth' });
    }