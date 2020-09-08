FILE=index.txt
TARGETS=`cat $(FILE)`

main.pdf: index.txt
	pandoc -s $(TARGETS) -f markdown -t latex -o main.pdf --pdf-engine xelatex
