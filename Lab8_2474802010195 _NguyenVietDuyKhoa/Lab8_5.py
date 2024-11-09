#Lab8_2474802010195 _NguyenVietDuyKhoa Bài 5
s1 = input('Nhập theo cú pháp số điện thoại gọi; số giây gọi; thời gian gọi; số điện thoại nhận: ')
danhsach = s1.split(";")
print(danhsach)
so1 = danhsach[0]
so2 = danhsach[-1]
print(f'Bạn đã gọi từ số {so1} đến {so2}')

vaoluc = danhsach[2]
thoigian = int(danhsach[1]) #Giây

giay = thoigian%60
phut = int(thoigian/60)

tientra = (int(thoigian)*2500)/60

print(f'Vào lúc: {vaoluc}')
print(f'Thời gian gọi: {phut} phút {giay} giây')
print(f'Tiền cước phải trả là: {(2500/60)*thoigian}')