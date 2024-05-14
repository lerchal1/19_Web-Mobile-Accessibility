function toggleDropdown(dropdownId) {
    var dropdownToggler = document.getElementById('toggler-' + dropdownId);
    var dropdownMenu = document.getElementById('navbar-' + dropdownId);

    var isExpanded = dropdownToggler.getAttribute('aria-expanded') === 'true';

    dropdownToggler.setAttribute('aria-expanded', !isExpanded);
    dropdownMenu.style.display = isExpanded ? 'closed' : 'block';
}