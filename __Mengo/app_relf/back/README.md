# Video  backend
Backend api using django &amp; vagrant

Open a terminal and follow these steps to run the server:

```
vagrant up
vagrant ssh
cd /vagrant
source ~/env/bin/activate
python manage.py runserver 0.0.0.0:8000
```

### 2 endpoints are available

1. http://localhost:8000/api/testaddresses/ (GET)
2. http://localhost:8000/api/testaddresses/ (POST)
 - Params 
 	- address (string) , 
	- is_bookmark (boolean)