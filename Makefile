all: PutHTML

PutHTML:
	cp main.html /var/www/html/rockpapersissor/
	cp script.js /var/www/html/rockpapersissor/
	cp style.css /var/www/html/rockpapersissor/
	cp scissors.png /var/www/html/rockpapersissor/
	cp rock.png /var/www/html/rockpapersissor/
	cp paper.png /var/www/html/rockpapersissor/



	echo "Current contents of your HTML directory: "
	ls -l /var/www/html/rockpapersissor/
