#
# Python: 3.7.2
#
# Purpose: Creating a Nice and Mean game


def start():
    print("Hello {}!".format(get_name()))



def get_name():
    name = input('What is your name? ')
    return name



if __name__ == '__main__':
    start()

