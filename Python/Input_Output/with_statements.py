# With statements helps simplify working with exception handling
# It can help make closing files more transparents

filename = 'Input_Output\Sample_File\sample.txt'

# Standard method of opening and closing a file. Doing it this way,
#   an error while accessing the file may prevent file from closing
try:
    file = open(filename, 'r')
    content = file.read()
    print(content)
finally:
    file.close()

# Using with statements, the file is closed automatically
#   which is useful in the event of an I/O error
with open(filename, 'r') as file:
    content = file.read()
    print(content)
