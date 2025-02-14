<script>
document.addEventListener("DOMContentLoaded", function() {
  // banner
    let banner = document.createElement("div");
banner.innerHTML = `
    <div id="quarto-announcement" data-announcement-id="703300c082156b429677c741d37e3cb3" class="alert alert-primary"><i class="bi bi-info-circle quarto-announcement-icon"></i><div class="quarto-announcement-content">
<p>This website is still under active development - all content subject to change</p>
</div>
<i class="bi bi-x-lg quarto-announcement-action"></i>
</div>`;
  document.body.prepend(banner);

// announcements
  let announcement = document.createElement("div");
announcement.innerHTML = `
    <div style="position: fixed; bottom: 20px; right: 20px; background: #ffcc00;
                padding: 15px; border-radius: 5px; box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
                font-weight: bold; z-index: 1000;">
      New Update: Check out the latest chapter on Bayesian Methods!
      <button onclick="this.parentElement.style.display='none'"
              style="margin-left: 10px; padding: 5px; background: red; color: white; border: none; cursor: pointer;">
        Dismiss
      </button>
    </div> `;
  document.body.appendChild(announcement);
});
</script>
