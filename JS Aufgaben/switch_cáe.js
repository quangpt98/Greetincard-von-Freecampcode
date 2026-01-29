let a = Number(prompt(`
    chọn cách tìm kiếm:
    1. Tìm Theo Tên
    2. Tìm Theo Tác giả
    3.Tìm theo nhà xuất bản
    4.tìm theo: Tiêu Đề`));
switch(a){
    case 1:
        alert("Bạn đã chọn tìm theo tên")
        break
    case 2:
        alert("Bạn đã chọn tìm theo Tác giả")
        break
    case 3:
        alert("Bạn đã chọn tìm theo Nhà Xuất Bản")
        break
    case 4:
        alert("Bạn đã chọn tìm theo Tiêu đề")
        break
    case exit:
        alert("Bạn đã thoát ra")
        break
    default:
        alert("Lựa chọn không hơp lệ")
}