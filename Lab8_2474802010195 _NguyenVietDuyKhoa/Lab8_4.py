#Lab8_2474802010195 _NguyenVietDuyKhoa Bài 4
s1 = input('Nhập đầy dủ họ và tên: ')
danhsach = s1.split(" ")
print(danhsach)
#In ra họ
print('Họ: ',danhsach[0]) #Phần tử đầu trong danh sách
# Tên 
print('Tên : ',danhsach[-1]) #Phần tử cuối trong danh sách
#Tên đệm
tendem =" ".join(danhsach[1:-1]) #Phần tử giữa
print('Tên đệm: ',tendem)