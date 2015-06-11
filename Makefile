publish:
	git add .
	git commit -am 'update'
	git push -u origin gitcafe-pages
	git push -u github master
	git push -u origin master
