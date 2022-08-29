# To read a file, you need to open a file first
# open takes the filepath and the mode.
# Some modes:
#   'r' = read
#   'w' = write
#   'a' = append (add to end of file w/o changing contents)
#   'r+' = read and write

file = open('Input_Output\Sample_File\sample.txt', 'r')

# Checks if file is readable
# print(file.readable())

# Reads entire content from file
# print(file.read())

# Reads current line of file and moves pointer to next line
# print(file.readline())

# Puts lines of a file into a list
# print(file.readlines())

# Always close a file
file.close()

# If 'w' was the mode, any writting done would override the ENTIRE file
# Additionally, if the file doesn't exist 'w' mode would create the file
file = open('Input_Output\Sample_File\sample.txt', 'a')

# Checks if file is able to written to
# print(file.writable())

# Writes to the end of file b/c mode is 'a'
#file.write("\nLine 3: Line 3")

# Always close a file
# file.close()
