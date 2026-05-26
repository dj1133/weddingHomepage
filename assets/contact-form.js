const inquiryForms = document.querySelectorAll(".inquiry-form");

const getValue = (formData, key) => String(formData.get(key) || "").trim();

inquiryForms.forEach((form) => {
  const addDateButton = form.querySelector(".add-date");
  const extraDates = form.querySelector(".extra-dates");
  const status = form.querySelector(".form-status");

  addDateButton?.addEventListener("click", () => {
    const nextNumber = form.querySelectorAll('input[name="weddingDate"]').length + 1;
    const row = document.createElement("div");
    row.className = "date-row";
    row.innerHTML = `
      <label>${nextNumber}순위 날짜<input type="date" name="weddingDate"></label>
      <button type="button" class="ghost-button remove-date">삭제</button>
    `;
    extraDates.append(row);
  });

  extraDates?.addEventListener("click", (event) => {
    const removeButton = event.target.closest(".remove-date");
    if (!removeButton) return;
    removeButton.closest(".date-row")?.remove();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const venueName = form.dataset.venueName || getValue(formData, "desiredHall");
    const venueEmail = form.dataset.venueEmail;
    const dates = formData
      .getAll("weddingDate")
      .map((date) => String(date).trim())
      .filter(Boolean);

    const body = [
      `[${venueName} 상담 신청]`,
      "",
      `신랑 성함: ${getValue(formData, "groomName")}`,
      `신랑 연락처: ${getValue(formData, "groomPhone")}`,
      `신부 성함: ${getValue(formData, "brideName")}`,
      `신부 연락처: ${getValue(formData, "bridePhone")}`,
      `회신 이메일: ${getValue(formData, "replyEmail")}`,
      `결혼식 희망 날짜: ${dates.length ? dates.join(", ") : "미입력"}`,
      `예상 하객수: ${getValue(formData, "guestCount")}명`,
      `원하는 웨딩홀: ${getValue(formData, "desiredHall")}`,
      "",
      "[문의사항]",
      getValue(formData, "message"),
    ].join("\n");

    const subject = `[Lumiere Wedding 문의] ${venueName} 상담 신청`;
    const mailto = `mailto:${encodeURIComponent(venueEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    if (status) {
      status.textContent = "메일 앱이 열리면 내용을 확인한 뒤 전송해 주세요.";
    }
  });
});
