
$(document).ready(function () {

    var nguoiDungservice = new NguoiDungService();

    laydanhsachNguoiDung();

    $("#btnThemNguoiDung").click(function () {
        $(".modal-title").html("Thêm người dùng");
        var footer = "<button id='btnThem' class='btn btn-success'>Thêm</button><button id='btnDong' class='btn btn-danger' data-dismiss='modal'>Đóng</button>";
        $(".modal-footer").html(footer);
    });

    $("body").delegate("#btnThem", "click", function () {
        var taikhoan = $("#TaiKhoan").val();
        var hoTen = $("#HoTen").val();
        var matkhau = $("#MatKhau").val();
        var email = $("#Email").val();
        var sdt = $("#SoDienThoai").val();
        var maLoaiNguoiDung = $("#loaiNguoiDung").val();

        var nguoiDung=new NguoiDung(taikhoan, matkhau, hoTen, email, sdt, maLoaiNguoiDung);
        nguoiDungservice.ThemNguoiDung(nguoiDung);
        console.log(nguoiDung);
    })

    $("body").delegate("#btnSua", "click", function(){
        var taiKhoan=$(this).data("taikhoan");
        var ThongtinNguoiDung=nguoiDungservice.layDanhSachNguoiDung(taiKhoan);

        ThongtinNguoiDung.map(function(item){
            $("#TaiKhoan").val(item.TaiKhoan);
            $("#HoTen").val(item.HoTen);
            $("#MatKhau").val(item.MatKhau);
            $("#Email").val(item.Email);
            $("#SoDT").val(item.SoDT);
            $("#LoaiNguoiDung").val(item.MaLoaiNguoiDung);
        })
        console.log(taiKhoan);
        
    })

    $("body").delegate("#btnXoa", "click", function(){
        var taiKhoan=$(this).data("taikhoan");
        nguoiDungservice.XoaNguoiDung(taiKhoan);
        console.log(taiKhoan);
        
    })

    function laydanhsachNguoiDung(){
        nguoiDungservice.layDanhSachNguoiDung();
    }
})

