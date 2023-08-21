document.getElementById("Articles").addEventListener("click",()=>{
   //<a href = "./index_articles"></a>
   window.open("./index_articles.html","_self")
})

function table()
{
   //criando os elementos
   const table = document.createElement("table");
   const table_content = document.createElement("tbody")

   //
   for(let i = 0;i<package.length;i++)
   {
      const row = document.createElement("tr")

      for(let j = 0;j<10;j++)
      {
         const cell = document.createElement("td")
         const cell_content = document.createTextNode("testeee")

         cell.appendChild(cell_content)
         row.appendChild(cell)
      }

      table_content.appendChild(row)
   }
   table.appendChild(table_content)
}