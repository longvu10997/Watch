function showTime() {
    let date = new Date();
    let h = date.getHours();// 0 -23
    let m = date.getMinutes();// 0 -59
    let s = date.getSeconds();// 0 -59
    let session ="AM";

    if(h == 0) {
        h == 12; // 0 là 24h nên đổi thành 12
    }

    if(h > 12) {
        h -= 12;// -12 để hiện h chiều. vd: (13-12=1h chiều)
        session = "PM";
    }

    h = (h < 10) ? `0${h}` : h;
    m = (m < 10) ? `0${m}` : m;
    s = (s < 10) ? `0${s}` : s;

    let time = `${h} : ${m} : ${s} ${session}`;
    document.getElementById("MyClock").innerText = time;
    /*sẽ không hiển thị nội dung của các phần tử ẩn (display: none)
     và sẽ loại bỏ các thẻ và ký tự HTML trong nội dung.
     Nó chỉ lấy nội dung mà người dùng thực sự thấy. */
    document.getElementById("MyClock").textContent = time;
    /* lấy tất cả nội dung, bao gồm cả các thẻ HTML,
     và không quan tâm đến việc phần tử có hiển thị hay không. */
    setTimeout(showTime, 1000);
}

showTime();