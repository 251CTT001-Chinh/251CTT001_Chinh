function chonmenu(muc) {
  document.getElementById("mucchon").textContent = muc;
}

function xemchitiet(chude) {
  document.getElementById("HĐ").textContent = chude;
}
function xemchitiet(ten, diem) {
  document.getElementById("HĐ").textContent = ten;
  document.getElementById("Điểm").textContent = "Điểm thưởng: " + diem;
  document.getElementById("mucchon").textContent = ten;
}
function updateTime() {
  const now = new Date();
  document.getElementById("thoigian").innerHTML = now.toLocaleString("vi-VN");
}
setInterval(updateTime, 1000);
updateTime();
