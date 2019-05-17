

mySentence = 'loves the color'

color_list = ['red','blue','black','brown','purple','gray']

def color_function(name):
    lst = []
    for i in color_list:
        msg = '{} {} {}'.format(name,mySentence,i)
        lst.append(msg)
    return lst





lst = color_function('Joshua')
for i in lst:
    print(i)
