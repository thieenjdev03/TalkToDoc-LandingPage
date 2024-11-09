#Lab8_2474802010195 _NguyenVietDuyKhoa Bài 6 
s1 = input('Nhập vào một chuỗi: ')
danhsach = s1.split()
danhsach2 = set(danhsach)#Chuyển danh sách từ list qua set để loại bỏ trùng nhau

print('Danh sách ban đầu: ',danhsach)
print("Danh sách loại bỏ trùng nhau: ",danhsach2)

sortedlist = sorted(danhsach2) #Sắp xếp
new = " ".join(sortedlist) # Nối các từ lại với nhau

print("Câu mới: ",new)