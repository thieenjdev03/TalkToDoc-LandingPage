# Trang Chọn Loại Tài Khoản Đăng Ký

## Mô tả
Trang này cho phép người dùng chọn loại tài khoản để đăng ký trên TalkToDoc. Được tối ưu hóa cho thiết bị di động.

## Tính năng
- Giao diện thân thiện với mobile
- Chọn đăng ký với tư cách Bác sĩ hoặc Bệnh nhân
- Chuyển hướng tự động đến trang đăng ký tương ứng
- Liên kết đến trang đăng nhập

## Cách sử dụng
1. Truy cập `/signup-type`
2. Chọn loại tài khoản muốn đăng ký
3. Hệ thống sẽ chuyển hướng đến trang đăng ký tương ứng

## Routes
- `/signup-type` - Trang chọn loại tài khoản
- `/sign-up-doctor` - Trang đăng ký cho bác sĩ
- `/signup` - Trang đăng ký cho bệnh nhân
- `/signin` - Trang đăng nhập

## Components
- `MobileSignUpType` - Component chính cho giao diện mobile
- `SwitchSignUpType` - Component gốc (có thể sử dụng cho desktop) 