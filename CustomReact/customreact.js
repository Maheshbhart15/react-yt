
function customRender(reactElemet,container){
    /*
    const domElment =document.createElement
    (reactElemet.type)
    domElment.innerHTML =reactElemet.childern
    domElment.setAttribute('href',reactElemet.props.href)
    domElment.setAttribute('target',reactElemet.props.target)

    container.appendChild(domElment)
    */
   const domElement =document.createElement(reactElemet.type)
   domElement.innerHTML=reactElemet.childern
   for (const prop in reactElemet.props) {
        if (prop === 'childern') continue;
        domElement.setAttribute(prop,reactElemet.props[prop])

   }
   container.appendChild(domElement)
}

const reactElemet ={
    type : 'a',
    props :{
        href : 'https://google.com',
        target:'_blank',
    },
    childern:'Click me to visit google '
}

const maincontainer=document.querySelector('#root');

customRender(reactElemet,maincontainer)