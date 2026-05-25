const frac = (top, bottom) => `<span class="frac"><span>${top}</span><span>${bottom}</span></span>`;
const radical = (value) => `<span class="radical">√<span>${value}</span></span>`;

const chapters = [
  {
    id: "toan8-chuong1",
    grade: "Toán 8",
    title: "Chương 1: Phân thức đại số",
    doc: "../Dethi/CHU%CC%9BO%CC%9BNG%201%20TOA%CC%81N%208.pdf",
    questions: [
      {
        text: `Với B ≠ 0, D ≠ 0, hai phân thức ${frac("A", "B")} và ${frac("C", "D")} bằng nhau khi nào?`,
        options: ["A.B = C.D", "A.C = B.D", "A.D = B.C", "A.C < B.D"],
        answer: 2,
        explain: "Đáp án theo PDF: C."
      },
      {
        text: `Phân thức ${frac("A", "B")} xác định khi?`,
        options: ["B ≠ 0", "B ≥ 0", "B ≤ 0", "A = 0"],
        answer: 0,
        explain: "Đáp án theo PDF: A."
      },
      {
        text: `Phân thức ${frac("x² + 1", "2x")} có giá trị bằng 1 khi x bằng?`,
        options: ["1", "2", "3", "-1"],
        answer: 1,
        explain: "Đáp án theo PDF: B."
      },
      {
        text: `Phân thức nào dưới đây không bằng với phân thức ${frac("3 - x", "3 + x")}?`,
        options: [frac("x - 3", "3 + x"), frac("x² - 6x + 9", "9 - x²"), frac("9 - x²", "(3 + x)²"), frac("x - 3", "-3 - x")],
        answer: 1,
        explain: "Đáp án theo PDF: B."
      },
      {
        text: "Chọn câu sai. Với đa thức B ≠ 0 ta có?",
        options: [`${frac("A", "B")} = ${frac("A.C", "B.C")} với C khác đa thức 0`, `${frac("A", "B")} = ${frac("A:C", "B:C")} với C khác đa thức 0`, `${frac("A", "B")} = ${frac("-A", "-B")}`, `${frac("A", "B")} = ${frac("A + C", "B + C")}`],
        answer: 3,
        explain: "Đáp án theo PDF: D."
      },
      {
        text: `Với B ≠ 0 thì kết quả của phép cộng ${frac("A", "B")} + ${frac("C", "B")} là:`,
        options: [frac("A.C", "B"), frac("A + C", "B"), frac("A + C", "B²"), frac("A + C", "2B")],
        answer: 1,
        explain: "Đáp án theo PDF: B."
      },
      {
        text: `Phân thức đối của phân thức ${frac("3", "x + 1")} là:`,
        options: [frac("-3", "x + 1"), frac("x + 1", "3"), frac("-3", "-x - 1"), frac("-3", "x - 1")],
        answer: 0,
        explain: "Đáp án theo PDF: A."
      },
      {
        text: `Thực hiện phép tính sau: ${frac("x³", "x² + 1")} + ${frac("x", "x² + 1")}`,
        options: ["-x", "2x", frac("x", "2"), "x"],
        answer: 3,
        explain: "Đáp án theo PDF: D."
      },
      {
        text: `Kết quả đúng của tổng ${frac("a - 2", "a - b")} + ${frac("b - 2", "b - a")} là:`,
        options: ["-1", "1", frac("a - b", "b - a"), frac("a + b - 4", "a - b")],
        answer: 1,
        explain: "Đáp án theo PDF: B."
      },
      {
        text: `Thực hiện phép tính ${frac("a", "a + 1")} - ${frac("a", "a - 1")} - ${frac("2a²", "1 - a²")} ta được kết quả gọn nhất là:`,
        options: [frac("2a", "a - 1"), frac("2a² + 2a", "(a - 1)(a + 1)"), frac("2a", "a + 1"), `-${frac("2a²", "(a - 1)(a + 1)")}`],
        answer: 2,
        explain: "Đáp án theo PDF: C."
      },
      {
        text: `Kết quả của phép nhân ${frac("A", "B")} . ${frac("C", "D")} là:`,
        options: [frac("A.C", "B.D"), frac("A.D", "B.C"), frac("A + C", "B + D"), frac("BD", "AC")],
        answer: 0,
        explain: "Đáp án theo PDF: A."
      },
      {
        text: `Thực hiện phép tính ${frac("3x + 12", "4x - 16")} . ${frac("8 - 2x", "x + 4")} ta được:`,
        options: [frac("3", "2"), frac("3", "2.(x - 4)"), frac("-3", "2"), frac("-3", "2.(x + 4)")],
        answer: 2,
        explain: "Đáp án theo PDF: C."
      },
      {
        text: `Phân thức nghịch đảo của phân thức ${frac("x", "x + 2")} là:`,
        options: [frac("x", "x + 2"), frac("x + 2", "x"), `-${frac("x + 2", "x")}`, `-${frac("x", "x + 2")}`],
        answer: 2,
        explain: "Đáp án theo PDF: C."
      },
      {
        text: `Kết quả của phép tính ${frac("3x", "x - 2")} : ${frac("3x - 5", "x - 2")} là:`,
        options: [frac("x", "x - 5"), frac("3x", "3x - 5"), frac("x", "3x - 5"), frac("3x", "x - 5")],
        answer: 1,
        explain: "Đáp án theo PDF: B."
      },
      {
        text: `Tìm biểu thức N, biết N : ${frac("x² + x + 1", "2x + 2")} = ${frac("x + 1", "x³ - 1")}`,
        options: [frac("1", "2.(x - 1)"), frac("1", "x - 1"), frac("1", "2.(x + 1)"), frac("2", "2.(1 - x)")],
        answer: 0,
        explain: "Đáp án theo PDF: A."
      }
    ]
  },
  {
    id: "toan8-chuong3",
    grade: "Toán 8",
    title: "Chương 3: Tứ giác",
    doc: "../Dethi/CHU%CC%9BO%CC%9BNG%203%20TOA%CC%81N%208.pdf",
    questions: [
      {
        text: "Giá treo đồ dưới đây có hình gì?",
        image: "assets/questions/t8-ch3-q1.png",
        options: ["Hình bình hành", "Hình chữ nhật", "Hình thang cân", "Hình thoi"],
        answer: 3,
        explain: "Đáp án theo PDF: D."
      },
      {
        text: "Hãy chọn câu sai.",
        options: [
          "Hình bình hành có hai đường chéo cắt nhau tại trung điểm mỗi đường",
          "Hình bình hành có hai góc đối bằng nhau",
          "Hình bình hành có hai đường chéo vuông góc với nhau",
          "Hai bình hành có hai cặp cạnh đối song song"
        ],
        answer: 2,
        explain: "Đáp án theo PDF: C."
      },
      {
        text: "Cho hình vẽ sau. Phát biểu nào dưới đây là đúng?",
        image: "assets/questions/t8-ch3-q3.png",
        options: ["ABCD là hình thoi", "ABCE là hình thang cân", "ABCD là hình bình hành", "ABCE là hình chữ nhật"],
        answer: 2,
        explain: "Đáp án theo PDF: C."
      },
      {
        text: "Tỉ số độ dài hai cạnh của hình bình hành là 3 : 5. Còn chu vi của nó bằng 48cm. Độ dài cạnh kề của hình bình hành là:",
        options: ["12cm và 20cm", "6cm và 10cm", "3cm và 5cm", "9cm và 15cm"],
        answer: 3,
        explain: "Đáp án theo PDF: D."
      },
      {
        text: "Cho hình thoi có độ dài hai đường chéo là 12cm và 16cm. Tính độ dài cạnh hình thoi.",
        options: ["12cm", "8cm", "20cm", "10cm"],
        answer: 3,
        explain: "Đáp án theo PDF: D."
      },
      {
        text: "Cho tam giác ABC, đường cao AH. Gọi I là trung điểm của AC, E là điểm đối xứng với H qua I. Tứ giác AECH là hình gì?",
        options: ["Hình chữ nhật", "Hình bình hành", "Hình thang cân", "Hình thang vuông"],
        answer: 0,
        explain: "Đáp án theo PDF: A."
      },
      {
        text: "Cho hình vuông ABCD. Trên các cạnh AB, BC, CD, DA lần lượt lấy các điểm E, F, G, H sao cho AE = BF = CG = DH. Tứ giác EFGH là hình gì?",
        options: ["Hình chữ nhật", "Hình vuông", "Hình bình hành", "Hình thoi"],
        answer: 1,
        explain: "Đáp án theo PDF: B."
      }
    ]
  },
  {
    id: "toan8-chuong4",
    grade: "Toán 8",
    title: "Chương 4: Dữ liệu và biểu đồ",
    doc: "../Dethi/CHU%CC%9BO%CC%9BNG%204%20TOA%CC%81N%208.pdf",
    questions: [
      {
        text: "Thân nhiệt (°C) của bạn An trong cùng khung giờ 7h sáng các ngày trong tuần được ghi lại trong bảng sau. Bạn An đã thu được dữ liệu trên bằng cách nào?",
        table: `
          <table class="data-table">
            <tr>
              <th>Thời điểm</th>
              <th>Thứ 2</th>
              <th>Thứ 3</th>
              <th>Thứ 4</th>
              <th>Thứ 5</th>
              <th>Thứ 6</th>
              <th>Thứ 7</th>
              <th>Chủ nhật</th>
            </tr>
            <tr>
              <th>Nhiệt độ (°C)</th>
              <td>36,5</td>
              <td>36,7</td>
              <td>36,8</td>
              <td>36,7</td>
              <td>37</td>
              <td>37,2</td>
              <td>36,8</td>
            </tr>
          </table>
        `,
        options: ["Xem tivi", "Lập bảng hỏi", "Ghi chép số liệu thống kê hằng ngày", "Thu thập từ các nguồn có sẵn như: sách, báo, web"],
        answer: 2,
        explain: "Đáp án theo PDF: C."
      },
      {
        text: "Cho bảng thống kê tỉ lệ phần trăm về các loại vật nuôi trong một trang trại. Giá trị chưa hợp lí trong bảng dữ liệu là",
        table: `
          <table class="data-table compact-table">
            <tr><th>Môn học</th><th>Tỉ lệ phần trăm</th></tr>
            <tr><td>Toán</td><td>45%</td></tr>
            <tr><td>Ngữ Văn</td><td>25%</td></tr>
            <tr><td>Lịch Sử</td><td>20%</td></tr>
            <tr><td>Địa lý</td><td>10%</td></tr>
            <tr><td>Thể dục</td><td>35%</td></tr>
            <tr><td>Tổng cộng</td><td>135%</td></tr>
          </table>
        `,
        options: ["Dữ liệu về tên các con vật", "Dữ liệu về tỉ lệ phần trăm", "Cả A và B đều đúng", "Cả A và B đều sai"],
        answer: 1,
        explain: "Đáp án theo PDF: B."
      },
      {
        text: "Một số con vật sống trên cạn: cá voi, chó, mèo, ngựa. Trong các dữ liệu trên, dữ liệu chưa hợp lí là:",
        options: ["Cá voi", "Chó", "Mèo", "Ngựa"],
        answer: 0,
        explain: "Đáp án theo PDF: A."
      },
      {
        text: "Trong các dữ liệu sau, dữ liệu nào không phải là dữ liệu định lượng?",
        options: [
          "Cân nặng của trẻ sơ sinh (đơn vị tính là gam): 4 000; 2 500; 5 000...",
          "Quốc tịch của các học sinh trong một trường quốc tế: Việt Nam, Lào, Campuchia...",
          "Chiều cao trung bình của một số loại thân cây gỗ (đơn vị tính là mét): 7; 8; 9,3...",
          "Số học sinh đeo kính trong một số lớp học (đơn vị tính là học sinh): 20; 10; 15..."
        ],
        answer: 1,
        explain: "Đáp án theo PDF: B."
      },
      {
        text: "Cho bảng thống kê về mức độ ảnh hưởng (đơn vị %) của các yếu tố đến chiều cao của trẻ. Bạn Nam muốn chiều cao phát triển tốt nên quan tâm đến chế độ nào nhất?",
        options: ["Chế độ thể dục thể thao", "Chế độ ngủ nghỉ", "Gen di truyền từ bố mẹ", "Chế độ ăn uống"],
        answer: 3,
        explain: "Đáp án theo PDF: D."
      },
      {
        text: "Chọn phát biểu đúng.",
        options: [
          "Chỉ khi biểu diễn dữ liệu trên bảng mới giúp ta có cái nhìn trực quan về dữ liệu",
          "Chỉ khi biểu diễn dữ liệu trên biểu đồ mới giúp ta có cái nhìn trực quan về dữ liệu",
          "Biểu diễn dữ liệu trên bảng và biểu đồ giúp ta có cái nhìn trực quan về dữ liệu",
          "Biểu diễn dữ liệu trên bảng và biểu đồ không giúp ta có cái nhìn trực quan về dữ liệu"
        ],
        answer: 2,
        explain: "Đáp án theo PDF: C."
      },
      {
        text: "Số lượt học sinh vắng được lớp trưởng thống kê trong một tuần của lớp 9A1 ở trường THCS Nguyễn Du. Các thông tin không hợp lí của bảng dưới đây là:",
        table: `
          <table class="data-table">
            <tr>
              <th>Ngày</th>
              <th>Thứ 2</th>
              <th>Thứ 3</th>
              <th>Thứ 4</th>
              <th>Thứ 5</th>
              <th>Thứ 6</th>
              <th>Thứ 7</th>
            </tr>
            <tr>
              <th>Số lượt vắng</th>
              <td>2</td>
              <td>k</td>
              <td>3</td>
              <td>p</td>
              <td>1</td>
              <td>0,5</td>
            </tr>
          </table>
        `,
        options: ["k, p, 0,5", "2", "3, 1", "k"],
        answer: 0,
        explain: "Đáp án theo PDF: A."
      },
      {
        text: "Hoa vẽ biểu đồ biểu thị tỉ lệ chi phí xây dựng nhà ở của gia đình theo bảng thống kê dưới đây. Bạn hãy cho biết biểu đồ Hoa vẽ đã chính xác chưa. Nếu chưa thì cần điều chỉnh lại như thế nào cho đúng?",
        image: "assets/questions/t8-ch4-q8-chart.png",
        table: `
          <table class="data-table compact-table">
            <tr><th>Loại chi phí</th><th>Số tiền (triệu đồng)</th></tr>
            <tr><td>Tiền công</td><td>250</td></tr>
            <tr><td>Gỗ</td><td>100</td></tr>
            <tr><td>Giám sát thi công</td><td>150</td></tr>
            <tr><td>Thép</td><td>52</td></tr>
            <tr><td>Gạch</td><td>200</td></tr>
            <tr><td>Xi măng</td><td>150</td></tr>
          </table>
        `,
        options: [
          "Hoa vẽ chính xác",
          "Chưa đúng, cần đổi chỗ phần chữ chú thích trên biểu đồ của thép cho gạch thì biểu đồ chính xác",
          "Chưa đúng, cần đổi chỗ phần chữ chú thích trên biểu đồ của tiền công cho gạch thì biểu đồ chính xác",
          "Chưa đúng, cần đổi chỗ phần chữ chú thích trên biểu đồ của xi măng cho gạch thì biểu đồ chính xác"
        ],
        answer: 3,
        explain: "Đáp án theo PDF: D."
      },
      {
        text: "Dựa theo dữ liệu ở bảng trong câu 1, Đội trưởng thông báo rằng tỉ số phần trăm của số lao động giỏi và số người ở cả đội là 65%. Thông báo đó của đội trưởng có đúng không?",
        image: "assets/questions/t8-ch4-q9-table.png",
        options: ["Thông báo đúng", "Thông báo của đội trưởng không đúng, tỉ số đúng là 50%", "Thông báo của đội trưởng không đúng, tỉ số đúng là 70%", "Thông báo của đội trưởng không đúng, tỉ số đúng là 60%"],
        answer: 3,
        explain: "Đáp án theo PDF: D."
      },
      {
        text: "Bạn Minh ghi chép điểm Toán của các bạn trong tổ 1 của lớp 8A trong bảng dưới. Hãy cho biết có bao nhiêu bạn được trên 7 điểm, đạt loại khá giỏi?",
        table: `
          <table class="data-table compact-table">
            <tr>
              <th>Điểm</th>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
            </tr>
            <tr>
              <th>Số bạn</th>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>1</td>
              <td>4</td>
              <td>1</td>
            </tr>
          </table>
        `,
        options: ["2", "3", "4", "5"],
        answer: 3,
        explain: "Đáp án theo PDF: D."
      }
    ]
  },
  {
    id: "toan9-chuong3",
    grade: "Toán 9",
    title: "Chương 3: Căn bậc hai và căn thức",
    doc: "../Dethi/CHU%CC%9BO%CC%9BNG%203%20TOA%CC%81N%209.pdf",
    questions: [
      {
        text: "Các căn bậc hai của 2500 là:",
        options: ["25 và -25", "50 và -50", "250 và -250", "500 và -250"],
        answer: 1,
        explain: "Đáp án theo PDF: B."
      },
      {
        text: `Kết quả của ${radical("225")} là:`,
        options: ["15", "-15", "25", "-25"],
        answer: 0,
        explain: "Đáp án theo PDF: A."
      },
      {
        text: `Kết quả của -${radical("1,21")} là:`,
        options: ["0,11", "-0,11", "1,1", "-1,1"],
        answer: 3,
        explain: "Đáp án theo PDF: D."
      },
      {
        text: `Kết quả của (${radical("2,14")})² + (-${radical("3,26")})² là:`,
        options: ["-1,12", "1,12", "5,4", "-5,4"],
        answer: 2,
        explain: "Đáp án theo PDF: C."
      },
      {
        text: "Cho x² = 10, giá trị của x là:",
        options: [`-${radical("10")}`, radical("10"), `${radical("10")} và -${radical("10")}`, `${radical("10")} hoặc -${radical("10")}`],
        answer: 3,
        explain: "Đáp án theo PDF: D."
      },
      {
        text: "Cho 4x² = 25, giá trị của x là:",
        options: [frac("25", "4") + " và -" + frac("25", "4"), frac("4", "25") + " và -" + frac("4", "25"), frac("5", "2") + " hoặc -" + frac("5", "2"), frac("2", "5") + " và -" + frac("2", "5")],
        answer: 2,
        explain: "Đáp án theo PDF: C."
      },
      {
        text: `Thực hiện phép tính ${frac(radical(`17 - 12${radical("2")}`), radical(`3 - 2${radical("2")}`))} ta có kết quả`,
        options: [`3 + 2${radical("2")}`, `1 + ${radical("2")}`, `${radical("2")} - 1`, `2 - ${radical("2")}`],
        answer: 2,
        explain: "Đáp án theo PDF: C."
      },
      {
        text: `Thực hiện phép tính ${radical(`4 + 2${radical("3")}`)} - ${radical(`4 - 2${radical("3")}`)} ta có kết quả:`,
        options: [`2${radical("3")}`, "4", "2", `-2${radical("3")}`],
        answer: 2,
        explain: "Đáp án theo PDF: C."
      },
      {
        text: `Thực hiện phép tính ${radical(`(${radical("3")} - 2)²`)} - ${radical(`(2${radical("3")} - 3)²`)} ta có kết quả:`,
        options: [`3${radical("3")} - 1`, `${radical("3")} + 1`, `5 - 3${radical("3")}`, `3${radical("3")} - 5`],
        answer: 2,
        explain: "Đáp án theo PDF: C."
      },
      {
        text: `Thực hiện phép tính (1 + ${frac(`3 - ${radical("3")}`, `${radical("3")} - 1`)})(${frac(`3 + ${radical("3")}`, `${radical("3")} + 1`)} - 1) ta có kết quả là:`,
        options: [`2${radical("3")}`, `-2${radical("3")}`, "-2", "2"],
        answer: 3,
        explain: "Đáp án theo PDF: D."
      }
    ]
  },
  {
    id: "toan9-chuong5",
    grade: "Toán 9",
    title: "Chương 5: Đường tròn",
    doc: "../Dethi/CHU%CC%9BO%CC%9BNG%205%20TOA%CC%81N%209.pdf",
    questions: [
      {
        text: "Cho đường thẳng b và một điểm I cách b một khoảng d = 8cm. Xác định vị trí tương đối của b với đường tròn (I; 5cm).",
        options: ["Cắt nhau", "Tiếp xúc", "Không giao nhau", "Trùng nhau"],
        answer: 2,
        explain: "Đáp án theo PDF: C."
      },
      {
        text: "Cho đường thẳng a và một điểm O cách a một khoảng 3cm. Vẽ đường tròn tâm O bán kính 5cm. Gọi M và N là các giao điểm của đường thẳng a và đường tròn (O; 5cm). Tính độ dài của dây MN.",
        options: ["10cm", "9cm", "8cm", "7cm"],
        answer: 2,
        explain: "Đáp án theo PDF: C."
      },
      {
        text: "Cho tam giác MNP có đường cao MH. Tìm tiếp tuyến của đường tròn (P; PH) tại H.",
        options: ["MN", "MH", "MP", "PN"],
        answer: 0,
        explain: "Đáp án theo PDF: A."
      },
      {
        text: "Cho AB và AC là hai tiếp tuyến của đường tròn (O) cắt nhau tại A. Biết AB = 5cm. Tính AC.",
        options: ["2cm", "3cm", "4cm", "5cm"],
        answer: 3,
        explain: "Đáp án theo PDF: D."
      },
      {
        text: "Góc ở tâm là góc",
        options: ["Có đỉnh trùng với tâm của đường tròn", "Có đỉnh nằm trên bán kính của đường tròn", "Có hai cạnh là hai đường kính của đường tròn", "Có đỉnh nằm trên đường tròn"],
        answer: 0,
        explain: "Đáp án theo PDF: A."
      },
      {
        text: "Hình nào dưới đây biểu diễn góc nội tiếp?",
        image: "assets/questions/t9-ch5-q6.png",
        options: ["Hình 1d", "Hình 1c", "Hình 1b", "Hình 1a"],
        answer: 2,
        explain: "Đáp án theo PDF: C."
      },
      {
        text: "Góc nội tiếp chắn nửa đường tròn có số đo là:",
        options: ["180°", "120°", "90°", "60°"],
        answer: 2,
        explain: "Đáp án theo PDF: C."
      },
      {
        text: "Cho hai tiếp tuyến của đường tròn (O) tại A và B cắt nhau tại M (Hình 2). Biết ∠AMB = 50°. Số đo cung nhỏ AB là:",
        image: "assets/questions/t9-ch5-q8.png",
        options: ["140°", "230°", "130°", "150°"],
        answer: 2,
        explain: "Đáp án theo PDF: C."
      },
      {
        text: "Trong Hình 3, ∠ACB là góc gì?",
        image: "assets/questions/t9-ch5-q9.png",
        options: ["Vuông", "Tù", "Nhọn", "Bẹt"],
        answer: 0,
        explain: "Đáp án theo PDF: A."
      },
      {
        text: "Hình vành khuyên giới hạn bởi hai đường tròn (O; 2cm) và (O; 4cm) có diện tích bằng",
        options: ["12 cm²", "24 cm²", "4π cm²", "12π cm²"],
        answer: 3,
        explain: "Đáp án theo PDF: D."
      }
    ]
  }
];

const grades = ["Toán 8", "Toán 9"];
const letters = ["A", "B", "C", "D"];
const storageKey = "nguyen-thi-thuy-math-quiz-results";
const gradeTabs = document.getElementById("gradeTabs");
const chapterList = document.getElementById("chapterList");
const quizForm = document.getElementById("quizForm");
const gradeBadge = document.getElementById("gradeBadge");
const courseCount = document.getElementById("courseCount");
const chapterMeta = document.getElementById("chapterMeta");
const chapterTitle = document.getElementById("chapterTitle");
const docLink = document.getElementById("docLink");
const totalCount = document.getElementById("totalCount");
const correctCount = document.getElementById("correctCount");
const wrongCount = document.getElementById("wrongCount");
const scoreCount = document.getElementById("scoreCount");
const submitButton = document.getElementById("submitButton");
const resetButton = document.getElementById("resetButton");
const resultText = document.getElementById("resultText");

let activeGrade = grades[0];
let activeChapterId = chapters[0].id;
let submitted = false;

function getGradeChapters() {
  return chapters.filter((chapter) => chapter.grade === activeGrade);
}

function getActiveChapter() {
  const gradeChapters = getGradeChapters();
  return gradeChapters.find((chapter) => chapter.id === activeChapterId) || gradeChapters[0];
}

function getStoredResults() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch (error) {
    return {};
  }
}

function setStoredResults(results) {
  localStorage.setItem(storageKey, JSON.stringify(results));
}

function getSavedAttempt(chapterId) {
  const results = getStoredResults();
  return results[chapterId]?.latest || null;
}

function saveAttempt(chapter, stats, answers) {
  const results = getStoredResults();
  const attempt = {
    chapterId: chapter.id,
    grade: chapter.grade,
    title: chapter.title,
    total: chapter.questions.length,
    correct: stats.correct,
    wrong: stats.wrong,
    score: Math.round((stats.correct / chapter.questions.length) * 100),
    answers,
    submittedAt: new Date().toISOString()
  };
  const chapterResults = results[chapter.id] || { history: [] };
  chapterResults.latest = attempt;
  chapterResults.history = [...(chapterResults.history || []), attempt];
  results[chapter.id] = chapterResults;
  setStoredResults(results);
}

function clearLatestAttempt(chapterId) {
  const results = getStoredResults();
  if (results[chapterId]) {
    delete results[chapterId].latest;
    setStoredResults(results);
  }
}

function collectAnswers(chapter) {
  return chapter.questions.map((_, index) => {
    const selected = quizForm.querySelector(`input[name="question-${index}"]:checked`);
    return selected ? Number(selected.value) : null;
  });
}

function restoreAnswers(answers) {
  answers.forEach((answer, index) => {
    if (answer === null || answer === undefined) return;
    const input = quizForm.querySelector(`input[name="question-${index}"][value="${answer}"]`);
    if (input) input.checked = true;
  });
}

function setQuizLocked(isLocked) {
  quizForm.querySelectorAll("input").forEach((input) => {
    input.disabled = isLocked;
  });
  submitButton.disabled = isLocked;
  submitButton.textContent = isLocked ? "Đã nộp bài" : "Nộp bài";
  quizForm.classList.toggle("locked", isLocked);
}

function formatDateTime(value) {
  return new Date(value).toLocaleString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
}

function updateSummary({ correct, wrong, total }) {
  totalCount.textContent = total;
  correctCount.textContent = correct;
  wrongCount.textContent = wrong;
  scoreCount.textContent = `${total ? Math.round((correct / total) * 100) : 0}%`;
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
  const savedAttempt = getSavedAttempt(chapter.id);
  submitted = false;
  chapterMeta.textContent = chapter.grade;
  chapterTitle.textContent = chapter.title;
  docLink.href = chapter.doc;
  resultText.textContent = "Chọn đáp án rồi bấm nộp bài để xem kết quả.";

  quizForm.innerHTML = chapter.questions.map((question, index) => `
    <article class="question-card" data-question="${index}">
      <div class="question-body">
        <p class="question-title">Câu ${index + 1}. ${question.text}</p>
        ${question.image ? `<img class="question-image" src="${question.image}" alt="Hình minh họa câu ${index + 1}">` : ""}
        ${question.table ? `<div class="table-scroll">${question.table}</div>` : ""}
        <div class="option-grid">
          ${question.options.map((option, optionIndex) => `
            <label class="option-label">
              <input type="radio" name="question-${index}" value="${optionIndex}">
              <span><strong>${letters[optionIndex]}.</strong> ${option}</span>
            </label>
          `).join("")}
        </div>
        <div class="feedback" hidden></div>
        ${question.explain ? `<p class="explanation" hidden>${question.explain}</p>` : ""}
      </div>
    </article>
  `).join("");

  if (savedAttempt) {
    restoreAnswers(savedAttempt.answers || []);
    gradeQuiz({ persist: false, message: `Đã nộp lúc ${formatDateTime(savedAttempt.submittedAt)}. Bấm Làm lại để làm lần mới.` });
  } else {
    updateSummary({ correct: 0, wrong: 0, total: chapter.questions.length });
    setQuizLocked(false);
  }
}

function resetQuiz() {
  const chapter = getActiveChapter();
  clearLatestAttempt(chapter.id);
  quizForm.reset();
  clearMarks();
  setQuizLocked(false);
  submitted = false;
  updateSummary({ correct: 0, wrong: 0, total: chapter.questions.length });
  resultText.textContent = "Đã xóa lựa chọn. Làm lại từ đầu nhé.";
}

function clearMarks() {
  quizForm.querySelectorAll(".question-card").forEach((card) => {
    card.classList.remove("correct", "wrong");
  });
  quizForm.querySelectorAll(".option-label").forEach((option) => {
    option.classList.remove("mark-correct", "mark-wrong");
  });
  quizForm.querySelectorAll(".feedback").forEach((feedback) => {
    feedback.hidden = true;
    feedback.textContent = "";
    feedback.className = "feedback";
  });
  quizForm.querySelectorAll(".explanation").forEach((explanation) => {
    explanation.hidden = true;
  });
}

function gradeQuiz({ persist = true, message = "" } = {}) {
  if (submitted && persist) {
    resultText.textContent = "Bài đã nộp rồi. Bấm Làm lại nếu muốn làm lại từ đầu.";
    return;
  }

  const chapter = getActiveChapter();
  let correct = 0;
  let wrong = 0;

  clearMarks();

  chapter.questions.forEach((question, index) => {
    const card = quizForm.querySelector(`[data-question="${index}"]`);
    const selected = quizForm.querySelector(`input[name="question-${index}"]:checked`);
    const selectedValue = selected ? Number(selected.value) : -1;
    const feedback = card.querySelector(".feedback");
    const explanation = card.querySelector(".explanation");
    const optionLabels = [...card.querySelectorAll(".option-label")];
    const correctLabel = optionLabels[question.answer];

    if (correctLabel) correctLabel.classList.add("mark-correct");

    if (selectedValue === question.answer) {
      correct += 1;
      card.classList.add("correct");
      feedback.hidden = false;
      feedback.textContent = "Đúng";
      feedback.classList.add("ok");
    } else {
      wrong += 1;
      card.classList.add("wrong");
      if (selected) selected.closest(".option-label").classList.add("mark-wrong");
      feedback.hidden = false;
      feedback.textContent = selected
        ? `Sai. Đáp án đúng là ${letters[question.answer]}.`
        : `Chưa chọn. Đáp án đúng là ${letters[question.answer]}.`;
      feedback.classList.add("bad");
    }

    if (explanation) explanation.hidden = false;
  });

  submitted = true;
  const stats = { correct, wrong, total: chapter.questions.length };
  updateSummary(stats);

  if (persist) saveAttempt(chapter, stats, collectAnswers(chapter));

  setQuizLocked(true);
  resultText.textContent = message || `Kết quả: đúng ${correct}/${chapter.questions.length} câu. Kết quả đã được lưu.`;
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

quizForm.addEventListener("change", () => {
  if (submitted) {
    resultText.textContent = "Bài đã nộp và bị khóa. Bấm Làm lại nếu muốn làm lần mới.";
  }
});

renderGradeButtons();
renderChapterButtons();
renderQuiz();
