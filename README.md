  

# Encurtador de Links

## Objetivos

Criar uma API onde desse para encurtar links, através de um código de Letras e Números onde será redireccionado para o link original, também com um recurso muito legal de contador de visualizações.

## Tecnologias

 - Node.js
 - Express
 - MongoDB
 

## Criando um Link Curto 

Usando o Método POST.

    localhost:8080/shortUrl/
    
	body: {
		originalUrl: "https://google.com"
	}


Retornando:

	"originalUrl": "https://google.com",
	"shortUrl": "w3JTi4AMJ",
	"createdAt": "2022-07-13T18:04:35.957Z",
	"counterViews": 0


## Acessando um Link

    localhost:8080/linkCurto/
    
 Exemplo:
 

    localhost:8080/w3JTi4AMJ/
