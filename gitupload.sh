if [ $# -ne 2 ]
	then 
	git add . && git commit -m "$1/minsekim" && git push
	echo "git add . && git commit -m \"$1/minsekim\" && git push"
else
	git add . && git commit -m "default_push/minsekim" && git push
fi
