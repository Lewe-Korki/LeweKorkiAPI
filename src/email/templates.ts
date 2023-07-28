import { ContactRequest } from '@/types/contact'

const CSS = `


* {
  font-family: Rubik !important;
  margin: 5px 10px;
  color: #28353a;
}  
h1 {
  font-size: 26px;
  font-weight: 500;
  text-transform: uppercase;
  margin: 10px;
}
h2 {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 0;
  text-transform: uppercase;
}

p, div {
  font-size: 17px;
}

`

export const ContactRequestTemplate = (data: ContactRequest) => `
<html>
  <head>
    <meta charset="utf-8">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

    <style>    
      ${CSS}
    </style>
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
  </head>
  <body>
    <div></div>
    <h1>Zgłoszenie o udzielenie korepetycji - ${data.name}</h>
    
    <h2>Przedmiot: </h2>
    <div>${data.subject}</div>
    
    <h2>Miejsce: </h2>
    <div>${data.place}</div>
    
    <h2>Poziom: </h2>
    <div>${data.name}</div>
      
    <p> ${data.text} </p>
    
    <p>Kontakt: ${data.contact}</p>
  </body>
</html>

`
