def bubble_sort(list):
    n = len(list)
    for i in range(n):
        for j in range(0,n-1-i):
            if list[j] > list [j+1]: #nếu trái lớn hơn phải thì đỗi lại
                list[j], list[j+1] = list[j+1], list[j]
    return list

def insertion_sort(list):
    n = len(list)
    for i in range(1,n):
        k = list[i]
        j = i- 1
        while j >= 0 and list[j] > k:
            list[j+1] = list[j]
            j -=1
        list[j+1] = k
    return list

def selection_sort(list):
    n = len(list)
    for i in range(n):     
        mini = i 
        for j in range(i+1,n):
            if list[j] < list[mini]:
                mini = j 
    list[i], list[mini] = list[mini], list[i]
    return list



def main():
    lista = [1, 4, 2, 5, 6, 8, 16, 19, 30, 12]
    a = bubble_sort(lista)
    b = insertion_sort(lista)
    c= selection_sort(lista)
    print(a)
    print(b)
    print(c)

if __name__== '__main__':
    main()