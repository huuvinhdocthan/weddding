// Link Google Drive album ảnh cưới — dùng chung cho cả 4 bản (VI / EN / 中文 / 한국어).
// Khi có link, dán vào giữa hai dấu nháy '' bên dưới, lưu file là hộp album tự hiện ra.
// Cả hai để trống '' thì hộp album bị ẩn khỏi trang; bên nào trống thì ẩn nút bên đó.
window.DRIVE_LINKS = {
  groom: 'https://huuvinhyenthi.io.vn', // Nhà trai
  bride: 'https://huuvinhyenthi.io.vn', // Nhà gái
};

document.querySelectorAll('[data-drive]').forEach((btn) => {
  const url = (window.DRIVE_LINKS[btn.dataset.drive] || '').trim();
  if (url) {
    btn.setAttribute('href', url);
    btn.closest('.drive-card')?.classList.add('has-link');
  }
});
