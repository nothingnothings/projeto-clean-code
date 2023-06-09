def create(m, n):
    if m == 'Max':
        return lambda v: v < n
    elif m == 'Min':
        return lambda v: v > n



max = create('Max', 31) # vai retornar a function de 'lambda v: v < 31' (pq 'n' vai ser esse segundo paramter, de 31)... 


print(max(15)) # vai retornar 'True' pq 15 é menor que 31
print(max(32))  # vai retornar 'False' pq 32 não é menor que 31


#código extremamente confuso, que poderia ser melhor.



#MESMO CÓDIGO, MAS REESCRITO DE MANEIRA MELHOR:



def create_validator(mode, number):
    if mode == 'Max':
        return lambda value: value < number
    elif mode == 'Min':
        return lambda value: value > number 



is_below_max = create_validator('Max', 31)


print(is_below_max(15))
print(is_below_max(32))







## versão refatorada do mesmo código (Agora com classes):



class ValidatableNumber:
    def __init__(self, number):
        self.number = number
    
    def is_bigger_than(self, other_number):
        return other_number < self.number
    
    def is_smaller_than(self, other_number):
        return other_number > self.number



input_number = ValidatableNumber(31)


print(input_number.is_bigger_than(15))
print(input_number.is_bigger_than(32))