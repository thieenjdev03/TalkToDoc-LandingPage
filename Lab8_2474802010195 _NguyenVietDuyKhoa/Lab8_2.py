#Lab8_2474802010195 _NguyenVietDuyKhoa Bài 2
s1 = input('Nhập vào chuỗi 1: ')
s2 = input('Nhập vào chuỗi 2: ')
if s2.find(s1)!=-1: #Kiểm tra chuỗi 1 có nằm trong chuỗi 2 hay không?
    print(f'Chuỗi thứ 1: {s1} có nằm trong chuỗi thứ 2: {s2}')
else:
    print(f'Chuỗi thứ 1: {s1} không nằm trong chuỗi thứ 2: {s2}')
# Cách 2
if s1 in s2:
   print(f'Chuỗi thứ 1: {s1} có nằm trong chuỗi thứ 2: {s2}')
else:
    print(f'Chuỗi thứ 1: {s1} không nằm trong chuỗi thứ 2: {s2}')