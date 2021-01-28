# Books-api
# Books-api
This an example of Rest framework api built using express.js.
This should be tested with POSTMAN.
# Installation
Assuming you are cloning repository in Desktop.
1)  `cd Desktop`
2) `git clone git@github.com:iammohit26/Books-api.git`
3) `cd books-api`
4) `npm install`
5) `npm start`

# Endpoints and their Uses

 1. **GET** :
    **URL** : localhost:3000/books
	**Body**:  Not required
	**Response**:  List of all the books present in the database
	
 2. **POST**:
    **URL**: localhost:3000/books
    **Body**: In postman select body->choose raw option -> Json format.
    Example data to be inserted in the body.
                    ``` {
                        "name" : "name of the book",
                        "price" : "price of that book",
                        "author" : "author of that book"
                    }```
    **Response**: 
    ```{ "_id": "unique id generated", name" : "name of the book", "price" : "price of that book", "author" : "author of that book" }```
			
 3. **Patch** (requires book id): 
    **URL**: localhost:3000/books/id_of_book
    **Body**: In postman select body->choose raw option -> Json format.
    Example data to be inserted in the body.
                    ``` [{ "propName" : "name","value" : "update the new name of book"}]```
						 
 4.  **GET**  (particular book):
    **URL** : localhost:3000/books/id_of_book
    **Body**:  Not required
    **Response**:  information about that book
 5. **DELETE** (requires book id):
    **URL** : localhost:3000/books/id_of_book
	**Body**:  Not required

	
