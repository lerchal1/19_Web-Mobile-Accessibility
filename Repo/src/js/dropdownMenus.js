function toggleDropdown(dropdownId) {
    var dropdownToggler = document.getElementById('toggler-' + dropdownId);
    var dropdownMenu = document.getElementById('navbar-' + dropdownId);

    var isExpanded = dropdownToggler.getAttribute('aria-expanded');

    if(isExpanded === 'true') {
        dropdownToggler.setAttribute('aria-expanded', 'false');
        dropdownMenu.style.visibility = 'hidden';
    } else {
        dropdownToggler.setAttribute('aria-expanded', 'true');
        dropdownMenu.style.visibility = 'visible';
    }
}