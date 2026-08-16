function generateQR() {
  const value = document.getElementById("text").value.trim();

  if (!value) {
    alert("Pehle text ya URL likhiye.");
    return;
  }

  const box = document.getElementById("qrcode");
  box.innerHTML = "";

  new QRCode(box, {
    text: value,
    width: 220,
    height: 220,
    correctLevel: QRCode.CorrectLevel.H
  });

  document.getElementById("download").style.display = "block";
}

function downloadQR() {
  const img = document.querySelector("#qrcode img");
  const canvas = document.querySelector("#qrcode canvas");

  const source = img ? img.src : canvas ? canvas.toDataURL("image/png") : null;

  if (!source) return;

  const a = document.createElement("a");
  a.href = source;
  a.download = "lucky-qr-code.png";
  a.click();
}
