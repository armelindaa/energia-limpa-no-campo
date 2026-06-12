function mensagem(){
alert("☀️ A energia limpa é essencial para construir um agro mais forte e um futuro sustentável!");
}
*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
font-family:Arial, sans-serif;
background:#fffdf2;
color:#333;
}

header{
height:100vh;
background:linear-gradient(rgba(255,193,7,.4),
rgba(255,152,0,.4)),
url("https://images.unsplash.com/photo-1506744038136-46273834b3fb");
background-size:cover;
background-position:center;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
}

.hero{
max-width:800px;
color:white;
}

.hero h1{
font-size:60px;
}

.hero h2{
margin-top:20px;
font-size:30px;
}

.hero p{
margin:30px 0;
font-size:20px;
}

.botao{
background:#ffb300;
color:white;
text-decoration:none;
padding:15px 30px;
border-radius:40px;
}

nav{
background:#f9a825;
padding:20px;
text-align:center;
}

nav a{
color:white;
text-decoration:none;
margin:0 20px;
font-weight:bold;
}

section{
padding:80px 10%;
}

h2{
color:#f57f17;
margin-bottom:30px;
}

.cards{
display:flex;
gap:30px;
flex-wrap:wrap;
}

.card{
flex:1;
min-width:250px;
background:white;
padding:30px;
text-align:center;
border-radius:20px;
box-shadow:0 5px 15px rgba(0,0,0,.1);
}

.card i{
font-size:55px;
color:#ffc107;
margin-bottom:20px;
}

ul li{
margin:20px 0;
}

button{
margin-top:30px;
background:#ffb300;
color:white;
border:none;
padding:15px 30px;
border-radius:30px;
cursor:pointer;
}

footer{
background:#f57f17;
color:white;
text-align:center;
padding:30px;
}
