
import sqlite3

conn = sqlite3.connect('drill.db')


with conn:
    cur = conn.cursor()
    cur.execute('CREATE TABLE IF NO EXISTS tbl_drill( \
        ID INTEGER PRIMARY KEY AUTO INCREMENT, \
        col_fileName TEXT, \
        )')
    conn.commit()
conn.close()

conn = sqlite3.connect('drill.db')
with conn:
    cur = conn.cursor()
    cur.execute('INSERT INTO tbl_drill(col_fileName) VALUES (?)', \
                ('Hello.txt'))
    cur.execute('INSERT INTO tbl_drill(col_fileName) VALUES (?)', \
                ('information.docx'))
    cur.execute('INSERT INTO tbl_drill(col_fileName) VALUES (?)', \
                ('myImage.png'))
    cur.execute('INSERT INTO tbl_drill(col_fileName) VALUES (?)', \
                ('myMovie.mpg'))
    cur.execute('INSERT INTO tbl_drill(col_fileName) VALUES (?)', \
                ('World.txt'))
    cur.execute('INSERT INTO tbl_drill(col_fileName) VALUES (?)', \
                ('data.pdf'))
    cur.execute('INSERT INTO tbl_drill(col_fileName) VALUES (?)', \
                ('myPhoto.jpg'))
    conn.commit
conn.close()
    

conn = sqlite3.connect('drill.db')
with conn:
    cur = conn.cursor()
    cur.execute("SELECT col_fileName FROM tbl_drill WHERE col_fileName = '.txt.")
    varDrill = cur.fetchall()
    for item in varDrill:
        msg = "Files ending with .txt: \n{}\n{}".format(item[0],item[2])
    print(msg)
