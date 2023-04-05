import React, { useEffect, useState } from 'react'

const Imagenes = [
  "https://icongr.am/devicon/cplusplus-original.svg?size=128&color=currentColor", 
  "https://icongr.am/devicon/csharp-original.svg?size=128&color=currentColor", 
  "https://icongr.am/devicon/go-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/java-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/nodejs-original-wordmark.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/react-original-wordmark.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/ruby-original-wordmark.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/twitter-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/couchdb-original.svg?size=128&color=currentColor"

].flatMap((image) => [`a|${image}`, `b|${image}`]).sort(() => Math.random() - 0.5);

export default function MemoTest(){
  const [adivinado, setAdivinado] = useState<string[]>([]);
  const [seleccionado, setSeleccionado] = useState<string[]>([]);

  useEffect(() => {
      if(seleccionado.length === 2){
        if(seleccionado[0].split("|")[1] === seleccionado[1].split("|")[1] ){
          setAdivinado((adivinado) => adivinado.concat(seleccionado))
        }
        setTimeout(() =>setSeleccionado([]), 1000);
      }
  },[seleccionado])

  useEffect(() => {
      if(adivinado.length === Imagenes.length){
        alert("You win!");
        location.reload();
      }
  }, [adivinado])

  return (
    <ul style={{display: "grid", gridTemplateColumns:"repeat(auto-fill, minmax(128px, 1fr))", gap:24}}>
      {Imagenes.map((imagen) => {
        const [, url] = imagen.split("|");
        return(
        <li 
        onClick={() => seleccionado.length < 2 && setSeleccionado(seleccionado => seleccionado.concat(imagen))}
        style={{cursor:"pointer", padding:12, border: "1px solid #666", borderRadius:12}} 
        key={imagen}
        >
          {adivinado.includes(imagen) || seleccionado.includes(imagen) ?
          <img  alt="icon"  src={url} />
          : (
          <img  alt="icon" src="https://icongr.am/clarity/close.svg?size=128&color=currentColor"/>
          )}
          </li>
        )
      })}
    </ul>
  );
}
