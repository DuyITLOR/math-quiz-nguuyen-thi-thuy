const chapters = [
  {
    id: "toan8-chuong1",
    grade: "Toán 8",
    title: "Chương 1: Phân thức đại số",
    questions: [
      {
        text: "Với B khác 0 và D khác 0, hai phân thức A/B và C/D bằng nhau khi nào?",
        options: ["A.B = C.D", "A.C = B.D", "A.D = B.C", "A + D = B + C"],
        answer: 2,
        explain: "Hai phân thức bằng nhau khi tích chéo bằng nhau: A.D = B.C."
      },
      {
        text: "Phân thức (x + 2)/(x - 5) xác định khi nào?",
        options: ["x khác -2", "x khác 5", "x lớn hơn 5", "x bằng 5"],
        answer: 1,
        explain: "Mẫu thức phải khác 0 nên x - 5 khác 0, suy ra x khác 5."
      },
      {
        text: "Giá trị của phân thức (x - 3)/(x + 1) bằng 0 khi nào?",
        options: ["x = -1", "x = 0", "x = 3", "x = 1"],
        answer: 2,
        explain: "Phân thức bằng 0 khi tử bằng 0 và mẫu khác 0."
      },
      {
        text: "Rút gọn phân thức (6x²y)/(9xy²), với x, y khác 0.",
        options: ["2x/(3y)", "3x/(2y)", "2y/(3x)", "x/y"],
        answer: 0,
        explain: "Chia cả tử và mẫu cho 3xy được 2x/(3y)."
      },
      {
        text: "Mẫu thức chung của 1/(x - 2) và 3/(x + 2) là gì?",
        options: ["x - 2", "x + 2", "(x - 2)(x + 2)", "x² + 4"],
        answer: 2,
        explain: "Hai mẫu khác nhau nên mẫu thức chung là tích (x - 2)(x + 2)."
      },
      {
        text: "Tổng 2/(x + 1) + 3/(x + 1) bằng",
        options: ["5/(x + 1)", "6/(x + 1)", "5/(2x + 2)", "1/(x + 1)"],
        answer: 0,
        explain: "Cùng mẫu thì cộng tử và giữ nguyên mẫu."
      },
      {
        text: "Phân thức đối của 4/(x - 7) là",
        options: ["-4/(x - 7)", "4/(7 - x)", "(x - 7)/4", "Cả A và B đều đúng"],
        answer: 3,
        explain: "Vì 4/(7 - x) = -4/(x - 7), cả hai đều là phân thức đối."
      },
      {
        text: "Tích (x/5).(10/x), với x khác 0, bằng",
        options: ["2", "5", "10", "2x"],
        answer: 0,
        explain: "Rút gọn x và 10/5 được 2."
      },
      {
        text: "Thương (3x/4) : (9x/8), với x khác 0, bằng",
        options: ["2/3", "3/2", "6", "1/6"],
        answer: 0,
        explain: "Nhân với phân thức nghịch đảo: (3x/4).(8/9x) = 2/3."
      },
      {
        text: "Phân thức nghịch đảo của (x - 1)/(x + 3) là",
        options: ["(x + 3)/(x - 1)", "-(x - 1)/(x + 3)", "(x - 1)(x + 3)", "1/(x + 3)"],
        answer: 0,
        explain: "Phân thức nghịch đảo nhận được bằng cách đổi tử và mẫu."
      }
    ]
  },
  {
    id: "toan8-chuong3",
    grade: "Toán 8",
    title: "Chương 3: Tứ giác",
    questions: [
      {
        text: "Tứ giác có hai cặp cạnh đối song song là hình gì?",
        options: ["Hình thang", "Hình bình hành", "Hình thang cân", "Hình diều"],
        answer: 1,
        explain: "Đây là dấu hiệu nhận biết cơ bản của hình bình hành."
      },
      {
        text: "Trong hình bình hành, hai đường chéo có tính chất nào?",
        options: ["Bằng nhau", "Vuông góc", "Cắt nhau tại trung điểm mỗi đường", "Là tia phân giác của các góc"],
        answer: 2,
        explain: "Hai đường chéo hình bình hành cắt nhau tại trung điểm mỗi đường."
      },
      {
        text: "Hình bình hành có một góc vuông là",
        options: ["Hình thoi", "Hình chữ nhật", "Hình thang cân", "Hình diều"],
        answer: 1,
        explain: "Hình bình hành có một góc vuông thì bốn góc đều vuông."
      },
      {
        text: "Hình bình hành có hai cạnh kề bằng nhau là",
        options: ["Hình chữ nhật", "Hình thang", "Hình thoi", "Hình thang vuông"],
        answer: 2,
        explain: "Khi hai cạnh kề bằng nhau, bốn cạnh của hình bình hành bằng nhau."
      },
      {
        text: "Một hình bình hành có chu vi 56 cm, hai cạnh kề tỉ lệ 3 : 4. Hai cạnh kề là",
        options: ["12 cm và 16 cm", "14 cm và 18 cm", "6 cm và 8 cm", "21 cm và 28 cm"],
        answer: 0,
        explain: "Nửa chu vi là 28 cm. Tổng 3 phần + 4 phần = 7 phần, mỗi phần 4 cm."
      },
      {
        text: "Hình thoi có hai đường chéo dài 10 cm và 24 cm. Độ dài cạnh hình thoi là",
        options: ["12 cm", "13 cm", "17 cm", "26 cm"],
        answer: 1,
        explain: "Nửa hai đường chéo là 5 và 12. Cạnh là căn(5² + 12²) = 13."
      },
      {
        text: "Hình chữ nhật có hai đường chéo cắt nhau tại O. Phát biểu nào đúng?",
        options: ["OA = OB = OC = OD", "AC vuông góc BD", "AB = AD", "O nằm ngoài hình chữ nhật"],
        answer: 0,
        explain: "Đường chéo hình chữ nhật bằng nhau và cắt nhau tại trung điểm."
      },
      {
        text: "Hình vuông là hình thoi có thêm tính chất nào?",
        options: ["Có một góc vuông", "Có hai cạnh song song", "Có chu vi", "Có bốn cạnh"],
        answer: 0,
        explain: "Hình thoi có một góc vuông là hình vuông."
      },
      {
        text: "Tứ giác có bốn góc bằng nhau là",
        options: ["Hình bình hành", "Hình chữ nhật", "Hình thoi", "Hình thang cân"],
        answer: 1,
        explain: "Tổng bốn góc là 360 độ nên mỗi góc bằng 90 độ."
      },
      {
        text: "Hình thang cân có tính chất nào sau đây?",
        options: ["Hai cạnh bên bằng nhau", "Hai đường chéo vuông góc", "Bốn cạnh bằng nhau", "Hai góc kề một đáy bù nhau"],
        answer: 0,
        explain: "Hình thang cân có hai cạnh bên bằng nhau và hai đường chéo bằng nhau."
      }
    ]
  },
  {
    id: "toan8-chuong4",
    grade: "Toán 8",
    title: "Chương 4: Dữ liệu và biểu đồ",
    questions: [
      {
        text: "Bạn Lan đo chiều cao của mình mỗi tháng rồi ghi lại vào bảng. Cách thu thập dữ liệu này là",
        options: ["Phỏng vấn", "Quan sát và ghi chép trực tiếp", "Lấy từ báo chí", "Dự đoán"],
        answer: 1,
        explain: "Lan tự đo và ghi chép số liệu theo thời gian."
      },
      {
        text: "Dữ liệu nào sau đây là dữ liệu định tính?",
        options: ["Số học sinh trong lớp", "Chiều dài bàn học", "Màu áo đồng phục", "Điểm kiểm tra"],
        answer: 2,
        explain: "Màu áo là dữ liệu phân loại, không phải số đo."
      },
      {
        text: "Trong bảng tỉ lệ phần trăm các môn học yêu thích, tổng tỉ lệ bằng 125%. Bảng dữ liệu có vấn đề gì?",
        options: ["Tên môn học sai", "Tỉ lệ phần trăm chưa hợp lí", "Không có dữ liệu", "Không cần sửa"],
        answer: 1,
        explain: "Tổng tỉ lệ phần trăm của các nhóm không chồng lặp phải bằng 100%."
      },
      {
        text: "Một bảng thống kê số học sinh vắng ghi các giá trị 0, 1, 2, 1,5. Giá trị chưa hợp lí là",
        options: ["0", "1", "2", "1,5"],
        answer: 3,
        explain: "Số học sinh phải là số tự nhiên, không thể là 1,5 học sinh."
      },
      {
        text: "Biểu đồ cột phù hợp nhất để",
        options: ["So sánh số lượng giữa các nhóm", "Biểu diễn vị trí địa lí", "Vẽ hình thoi", "Tính căn bậc hai"],
        answer: 0,
        explain: "Biểu đồ cột giúp so sánh độ lớn giữa các nhóm dữ liệu."
      },
      {
        text: "Tổ 1 có điểm Toán: 6, 7, 8, 8, 9, 10. Có bao nhiêu bạn đạt trên 7 điểm?",
        options: ["2", "3", "4", "5"],
        answer: 2,
        explain: "Các điểm trên 7 là 8, 8, 9, 10 nên có 4 bạn."
      },
      {
        text: "Dữ liệu 'cá heo, mèo, chó, ngựa' trong nhóm con vật sống trên cạn có dữ liệu chưa hợp lí là",
        options: ["Cá heo", "Mèo", "Chó", "Ngựa"],
        answer: 0,
        explain: "Cá heo là động vật sống dưới nước."
      },
      {
        text: "Bảng thống kê nhiệt độ trong tuần gồm 36,4; 36,6; 36,8; 37,1. Đây là dữ liệu",
        options: ["Định tính", "Định lượng", "Không hợp lí", "Không thể ghi bằng bảng"],
        answer: 1,
        explain: "Nhiệt độ là số đo nên là dữ liệu định lượng."
      },
      {
        text: "Khi muốn biểu diễn cơ cấu chi tiêu của một gia đình theo tỉ lệ phần trăm, biểu đồ phù hợp là",
        options: ["Biểu đồ tranh", "Biểu đồ đoạn thẳng", "Biểu đồ hình quạt tròn", "Bảng nhân"],
        answer: 2,
        explain: "Biểu đồ quạt tròn phù hợp để thể hiện cơ cấu phần trăm."
      },
      {
        text: "Trong một lớp có 20 học sinh nữ và 20 học sinh nam. Tỉ lệ học sinh nữ là",
        options: ["20%", "40%", "50%", "60%"],
        answer: 2,
        explain: "Có 40 học sinh tất cả, nữ chiếm 20/40 = 50%."
      }
    ]
  },
  {
    id: "toan9-chuong3",
    grade: "Toán 9",
    title: "Chương 3: Căn bậc hai và căn thức",
    questions: [
      {
        text: "Các căn bậc hai của 81 là",
        options: ["9", "-9", "9 và -9", "81 và -81"],
        answer: 2,
        explain: "Vì 9² = 81 và (-9)² = 81."
      },
      {
        text: "Căn bậc hai số học của 49 là",
        options: ["7", "-7", "7 và -7", "2401"],
        answer: 0,
        explain: "Căn bậc hai số học là căn không âm."
      },
      {
        text: "Biểu thức căn(x - 4) xác định khi nào?",
        options: ["x > 4", "x >= 4", "x < 4", "x khác 4"],
        answer: 1,
        explain: "Biểu thức dưới dấu căn bậc hai phải không âm."
      },
      {
        text: "Rút gọn căn(25a²), với a >= 0.",
        options: ["5a", "-5a", "25a", "5a²"],
        answer: 0,
        explain: "Căn(25a²) = 5|a|, mà a >= 0 nên bằng 5a."
      },
      {
        text: "Kết quả của căn(12) là",
        options: ["2 căn 3", "3 căn 2", "6 căn 2", "4 căn 3"],
        answer: 0,
        explain: "12 = 4.3 nên căn(12) = 2 căn 3."
      },
      {
        text: "Tính căn(18) + căn(50).",
        options: ["8 căn 2", "6 căn 2", "10 căn 2", "68"],
        answer: 0,
        explain: "Căn(18)=3 căn 2, căn(50)=5 căn 2, tổng là 8 căn 2."
      },
      {
        text: "Giải phương trình x² = 36.",
        options: ["x = 6", "x = -6", "x = 6 hoặc x = -6", "x = 18"],
        answer: 2,
        explain: "Hai số đối nhau có bình phương bằng 36."
      },
      {
        text: "So sánh căn(7) và căn(10).",
        options: ["căn(7) > căn(10)", "căn(7) = căn(10)", "căn(7) < căn(10)", "Không so sánh được"],
        answer: 2,
        explain: "Hàm căn bậc hai đồng biến trên tập số không âm."
      },
      {
        text: "Rút gọn căn(3).căn(27).",
        options: ["9", "81", "3 căn 27", "30"],
        answer: 0,
        explain: "căn(3).căn(27) = căn(81) = 9."
      },
      {
        text: "Khử mẫu của 1/căn(5) được",
        options: ["căn(5)/5", "5/căn(5)", "1/5", "căn(5)"],
        answer: 0,
        explain: "Nhân cả tử và mẫu với căn(5)."
      }
    ]
  },
  {
    id: "toan9-chuong5",
    grade: "Toán 9",
    title: "Chương 5: Đường tròn",
    questions: [
      {
        text: "Đường thẳng a cách tâm O của đường tròn bán kính 6 cm một khoảng 4 cm. Vị trí tương đối là",
        options: ["Cắt nhau", "Tiếp xúc", "Không giao nhau", "Trùng nhau"],
        answer: 0,
        explain: "Khoảng cách từ tâm đến đường thẳng nhỏ hơn bán kính nên đường thẳng cắt đường tròn."
      },
      {
        text: "Đường thẳng b cách tâm I của đường tròn bán kính 5 cm một khoảng 5 cm. Vị trí tương đối là",
        options: ["Cắt nhau", "Tiếp xúc", "Không giao nhau", "Đi qua tâm"],
        answer: 1,
        explain: "Khoảng cách từ tâm đến đường thẳng bằng bán kính nên tiếp xúc."
      },
      {
        text: "Từ điểm M ngoài đường tròn (O), kẻ hai tiếp tuyến MA và MB. Nếu MA = 7 cm thì MB bằng",
        options: ["3,5 cm", "7 cm", "14 cm", "Không xác định"],
        answer: 1,
        explain: "Hai tiếp tuyến cắt nhau tại một điểm ngoài đường tròn thì bằng nhau."
      },
      {
        text: "Góc ở tâm là góc có",
        options: ["Đỉnh nằm trên đường tròn", "Đỉnh trùng với tâm đường tròn", "Hai cạnh là tiếp tuyến", "Đỉnh nằm ngoài đường tròn"],
        answer: 1,
        explain: "Định nghĩa góc ở tâm: đỉnh là tâm đường tròn."
      },
      {
        text: "Góc nội tiếp chắn nửa đường tròn có số đo là",
        options: ["45 độ", "60 độ", "90 độ", "180 độ"],
        answer: 2,
        explain: "Góc nội tiếp chắn nửa đường tròn là góc vuông."
      },
      {
        text: "Một góc nội tiếp chắn cung 80 độ. Số đo góc nội tiếp đó là",
        options: ["20 độ", "40 độ", "80 độ", "160 độ"],
        answer: 1,
        explain: "Góc nội tiếp bằng nửa số đo cung bị chắn."
      },
      {
        text: "Đường kính đi qua trung điểm của một dây không đi qua tâm thì",
        options: ["Song song với dây", "Vuông góc với dây", "Bằng dây", "Là tiếp tuyến"],
        answer: 1,
        explain: "Đường kính đi qua trung điểm dây không đi qua tâm thì vuông góc với dây."
      },
      {
        text: "Bán kính đi qua tiếp điểm của tiếp tuyến với đường tròn thì",
        options: ["Song song với tiếp tuyến", "Vuông góc với tiếp tuyến", "Bằng tiếp tuyến", "Không liên hệ"],
        answer: 1,
        explain: "Bán kính tại tiếp điểm vuông góc với tiếp tuyến."
      },
      {
        text: "Đường tròn tâm O bán kính 10 cm, dây AB cách tâm 6 cm. Độ dài dây AB là",
        options: ["6 cm", "8 cm", "12 cm", "16 cm"],
        answer: 3,
        explain: "Nửa dây bằng căn(10² - 6²) = 8, nên dây dài 16 cm."
      },
      {
        text: "Diện tích hình vành khuyên tạo bởi hai đường tròn đồng tâm bán kính 5 cm và 3 cm là",
        options: ["4π cm²", "8π cm²", "16π cm²", "25π cm²"],
        answer: 2,
        explain: "Diện tích bằng π(5² - 3²) = 16π cm²."
      }
    ]
  }
];

const grades = ["Toán 8", "Toán 9"];
const gradeTabs = document.getElementById("gradeTabs");
const chapterList = document.getElementById("chapterList");
const quizForm = document.getElementById("quizForm");
const gradeBadge = document.getElementById("gradeBadge");
const courseCount = document.getElementById("courseCount");
const chapterMeta = document.getElementById("chapterMeta");
const chapterTitle = document.getElementById("chapterTitle");
const totalCount = document.getElementById("totalCount");
const correctCount = document.getElementById("correctCount");
const wrongCount = document.getElementById("wrongCount");
const scoreCount = document.getElementById("scoreCount");
const submitButton = document.getElementById("submitButton");
const resetButton = document.getElementById("resetButton");
const resultText = document.getElementById("resultText");

let activeGrade = grades[0];
let activeChapterId = chapters[0].id;

function getGradeChapters() {
  return chapters.filter((chapter) => chapter.grade === activeGrade);
}

function getActiveChapter() {
  const gradeChapters = getGradeChapters();
  return gradeChapters.find((chapter) => chapter.id === activeChapterId) || gradeChapters[0];
}

function renderGradeButtons() {
  gradeTabs.innerHTML = grades.map((grade) => {
    const count = chapters.filter((chapter) => chapter.grade === grade).length;
    return `
      <button class="grade-button${grade === activeGrade ? " active" : ""}" type="button" data-grade="${grade}">
        ${grade.replace("Toán ", "Lớp ")} · ${count}
      </button>
    `;
  }).join("");
}

function renderChapterButtons() {
  const gradeChapters = getGradeChapters();
  courseCount.textContent = `${gradeChapters.length} chương`;
  gradeBadge.textContent = activeGrade;
  chapterList.innerHTML = gradeChapters.map((chapter) => `
    <button class="chapter-button${chapter.id === activeChapterId ? " active" : ""}" type="button" data-chapter="${chapter.id}">
      <span>${chapter.title}</span>
      <small>${chapter.questions.length} câu</small>
    </button>
  `).join("");
}

function renderQuiz() {
  const chapter = getActiveChapter();
  chapterMeta.textContent = chapter.grade;
  chapterTitle.textContent = chapter.title;
  totalCount.textContent = chapter.questions.length;
  correctCount.textContent = "0";
  wrongCount.textContent = "0";
  scoreCount.textContent = "0%";
  resultText.textContent = "";

  quizForm.innerHTML = chapter.questions.map((question, index) => `
    <article class="question-card" data-question="${index}">
      <div class="question-title">
        <span class="question-number">${index + 1}</span>
        <p>${question.text}</p>
      </div>
      <div class="option-list">
        ${question.options.map((option, optionIndex) => `
          <label class="option">
            <input type="radio" name="question-${index}" value="${optionIndex}">
            <span>${String.fromCharCode(65 + optionIndex)}. ${option}</span>
          </label>
        `).join("")}
      </div>
      <p class="explanation">${question.explain}</p>
    </article>
  `).join("");
}

function resetQuiz() {
  renderQuiz();
}

function gradeQuiz() {
  const chapter = getActiveChapter();
  let correct = 0;

  chapter.questions.forEach((question, index) => {
    const card = quizForm.querySelector(`[data-question="${index}"]`);
    const selected = quizForm.querySelector(`input[name="question-${index}"]:checked`);
    const selectedValue = selected ? Number(selected.value) : -1;

    card.classList.add("reviewed");
    card.querySelectorAll(".option").forEach((option, optionIndex) => {
      option.classList.remove("correct", "wrong");
      if (optionIndex === question.answer) {
        option.classList.add("correct");
      }
      if (optionIndex === selectedValue && selectedValue !== question.answer) {
        option.classList.add("wrong");
      }
    });

    if (selectedValue === question.answer) {
      correct += 1;
    }
  });

  const total = chapter.questions.length;
  const wrong = total - correct;
  const score = Math.round((correct / total) * 100);
  correctCount.textContent = correct;
  wrongCount.textContent = wrong;
  scoreCount.textContent = `${score}%`;
  resultText.textContent = `Bạn làm đúng ${correct}/${total} câu.`;
}

chapterList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-chapter]");
  if (!button) return;
  activeChapterId = button.dataset.chapter;
  renderChapterButtons();
  renderQuiz();
});

gradeTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-grade]");
  if (!button) return;
  activeGrade = button.dataset.grade;
  activeChapterId = getGradeChapters()[0].id;
  renderGradeButtons();
  renderChapterButtons();
  renderQuiz();
});

submitButton.addEventListener("click", gradeQuiz);
resetButton.addEventListener("click", resetQuiz);

renderGradeButtons();
renderChapterButtons();
renderQuiz();
