(function () {
  const statusMessage = document.getElementById("statusMessage");
  const createVaultBtn = document.getElementById("createVaultBtn");
  const openVaultBtn = document.getElementById("openVaultBtn");

  function updateStatus(message) {
    if (!statusMessage) {
      return;
    }

    statusMessage.textContent = message;
  }

  function handleCreateVaultClick() {
    updateStatus("Create New Vault clicked. Milestone 2 will load the create-vault screen.");
  }

  function handleOpenVaultClick() {
    updateStatus("Open Existing Vault clicked. Milestone 2 will load the unlock flow.");
  }

  if (createVaultBtn) {
    createVaultBtn.addEventListener("click", handleCreateVaultClick);
  }

  if (openVaultBtn) {
    openVaultBtn.addEventListener("click", handleOpenVaultClick);
  }

  updateStatus("App shell loaded successfully.");
})();