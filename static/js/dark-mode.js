
(function() {
    var toggle = document.getElementById("dark-mode-toggle");
    var darkTheme = document.getElementById("dark-mode-theme");

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // dark mode
        setTheme('dark');
    } else {
        setTheme('light');
    }
    // Add to support dark mode
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (e.matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    })

    function setTheme(mode) {
        if (mode == 'dark') {
            console.log("dark--");
            darkTheme.disabled = false;
        } else if (mode == 'light') {
            darkTheme.disabled = true;
            console.log("light--");
        }
    }
})();