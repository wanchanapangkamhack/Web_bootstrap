function calculateGrade() {
    var studentName = document.getElementById("studentName").value;
    var score = document.getElementById("score").value;
    var result = document.getElementById("result");

    // ตรวจสอบว่ากรอกชื่อและคะแนนหรือยัง
    if (studentName === "") {
        alert("กรุณากรอกชื่อนักศึกษา");
        return;
    }

    if (score === "") {
        alert("กรุณากรอกคะแนน");
        return;
    }

    // แปลงคะแนนเป็นตัวเลข
    score = parseFloat(score);

    // ตรวจสอบว่าคะแนนอยู่ในช่วงที่ถูกต้องหรือไม่
    if (isNaN(score) || score < 0 || score > 100) {
        alert("กรุณากรอกคะแนนให้ถูกต้อง (0-100)");
        return;
    }

    // กำหนดเกณฑ์การให้เกรด
    var grade = "";
    if (score >= 80) {
        grade = "A";
    } else if (score >= 70) {
        grade = "B";
    } else if (score >= 60) {
        grade = "C";
    } else if (score >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    // แสดงผลลัพธ์
    result.innerHTML = "ชื่อนักศึกษา: " + studentName + "<br>คะแนนที่ได้: " + score + "<br>เกรด: " + grade;
}

function resetForm() {
    // ล้างข้อมูลในฟอร์ม
    document.getElementById("gradeForm").reset();

    // ล้างผลลัพธ์ที่แสดงอยู่
    document.getElementById("result").innerHTML = "";
}