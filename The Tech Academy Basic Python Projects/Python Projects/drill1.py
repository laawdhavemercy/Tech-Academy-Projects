
import os

fOne = "one.txt"
fTwo = 'two.txt'
fThree = 'three.txt'
fFour = 'four.txt'
fFive = 'five.txt'
fSix = 'six.txt'
fSeven = 'seven.txt'
fEight = 'eight.txt'
fNine = 'nine.txt'
fTen = 'ten.txt'
fPath = 'C:\\Users\\Student\\AppData\\Local\\Programs\\Python\\Python37-32\\Drills'

abPath1 = os.path.join(fPath,fOne)
print (abPath1)
print (os.path.getmtime(fOne))

abPath2 = os.path.join(fPath,fTwo)
print (abPath2)
print (os.path.getmtime(fTwo))

abPath3 = os.path.join(fPath,fThree)
print (abPath3)
print (os.path.getmtime(fThree))

abPath4 = os.path.join(fPath,fFour)
print (abPath4)
print (os.path.getmtime(fFour))

abPath5 = os.path.join(fPath,fFive)
print (abPath5)
print (os.path.getmtime(fFive))

abPath6 = os.path.join(fPath,fSix)
print (abPath6)
print (os.path.getmtime(fSix))

abPath7 = os.path.join(fPath,fSeven)
print (abPath7)
print (os.path.getmtime(fSeven))

abPath8 = os.path.join(fPath,fEight)
print (abPath8)
print (os.path.getmtime(fEight))

abPath9 = os.path.join(fPath,fNine)
print (abPath9)
print (os.path.getmtime(fNine))

abPath10 = os.path.join(fPath,fTen)
print (abPath10)
print (os.path.getmtime(fTen))
