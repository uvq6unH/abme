document.addEventListener('DOMContentLoaded', function () {
    setupCustomDropdown();
    setupThemeSwitcher();
  });
  
  function setupCustomDropdown() {
    const customDropdown = document.querySelector('.select-custom');
    const optionsContainer = customDropdown.querySelector('.custom-options');
    
    customDropdown.addEventListener('click', function() {
      // Toggle display of the options
      optionsContainer.style.display = optionsContainer.style.display === 'block' ? 'none' : 'block';
    });
  
    optionsContainer.querySelectorAll('.custom-option').forEach(option => {
      option.addEventListener('click', function() {
        const value = this.getAttribute('data-value');
        const selectHidden = document.querySelector('.select-hidden');
        selectHidden.value = value;
        document.querySelector('.select-custom__trigger').textContent = this.textContent;
        optionsContainer.style.display = 'none';
      });
    });
  }
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.theme-switcher .dropdown-content a').forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const theme = this.getAttribute('data-theme');
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        });
    });

    // Cập nhật theme dựa trên lựa chọn đã lưu hoặc thiết lập hệ thống
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', savedTheme);
});
