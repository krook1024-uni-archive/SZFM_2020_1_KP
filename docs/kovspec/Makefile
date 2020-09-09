FILE=index.txt
TARGETS=`cat $(FILE)`

all: clean main.pdf

main.pdf: index.txt
	pandoc -s $(TARGETS) -f markdown -t latex -o main.pdf --pdf-engine xelatex

clean:
	rm -f main.pdf
