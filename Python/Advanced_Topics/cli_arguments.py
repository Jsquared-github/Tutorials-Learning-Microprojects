# A program can be run from the CLI by navigating to the desired directory, typing python, and then the file name
# Python programs can accept arguments from the CLI also by using the standard sys library
import sys


# sys.argv prints all arguments passed in from the CLI as a list
# python cli_arguments.py arg1 arg1 = ['cli_arguments.py', 'arg1', 'arg2']
print(sys.argv)


# argparse.ArgumentParser() takes in potential arguments that can be passed from the CLI
# It's a more versatile way to recieve CLI arguments, but it is way more advance, so
#   learn more about it as needed.
