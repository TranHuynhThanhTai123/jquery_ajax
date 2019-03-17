function NguoiDungService() {
    this.layDanhSachNguoiDung = function () {
        $.ajax({
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung",
            type: "GET"
        })
            .done(function (danhSachNguoiDung) {
                console.log(danhSachNguoiDung);
                taoBang(danhSachNguoiDung);
            })//done tức đã thành công
            .fail(function (error) {
                console.log(error);
            })
    }

    this.ThemNguoiDung = function (nguoiDung) {
        $.ajax({
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung",
            type: "POST",
            data: nguoiDung//Vì có tham số truyền vào nên phải có data
        })
            .done(function (result) {
                if (result === "tai khoan da ton tai !") {
                    alert("Taì khoản đã tồn tại !");
                    console.log(result);
                }
                else {
                    location.href = "";
                }
            })
            .fail(function (error) {
                console.log(error);
            })
    }

    this.XoaNguoiDung = function (taiKhoan) {
        $.ajax({
            url: `http://svcy.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${taiKhoan}`,
            type: "DELETE"
        })
            .done(function (result) {
                location.href = "";
                console.log(result);
            })
            .fail(function (err) {
                console.log(err);
            })
    }

    // this.CapNhatNguoiDung=function(nguoiDung){
    //     var ngd=
    //     $.ajax({
    //         url: `http://svcy.myclass.vn/`,
    //         type: "PUT",
    //         dataType: "json"
    //         data: 
    //     })
    // }
}

function taoBang(danhSachNguoiDung) {
    var tblBody = "";
    danhSachNguoiDung.map(function (item, index) {
        console.log(item);

        tblBody += `<tr>
        <td>${index + 1}</td>
        <td>${item.TaiKhoan}</td>
        <td>${item.HoTen}</td>
        <td>${item.MatKhau}</td>
        <td>${item.Email}</td>
        <td>${item.SoDT}</td>
        <td>${item.TenLoaiNguoiDung}</td>
        <td><button id="btnSua" class="btn btn-primary" data-taikhoan='${item.TaiKhoan} data-togget='modal' data-togget='#modal'>Sửa</button><button id="btnXoa" class="btn btn-danger" data-taikhoan='${item.TaiKhoan}'>Xóa</button></td>
        </tr>`
    })
    $("#tblDanhSachNguoiDung").html(tblBody);


}