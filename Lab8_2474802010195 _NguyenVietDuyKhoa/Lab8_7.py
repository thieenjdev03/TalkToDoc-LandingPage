#Lab8_2474802010195 _NguyenVietDuyKhoa Bài 7
s1 = input('Nhập vào một chuỗi: ')
sochu = sum(1 for c in s1 if c.isalpha())
print("Số chứ cái: ", sochu)
sochuso = sum(1 for c in s1 if c.isdigit())
print("Số chữ số: ", sochuso)