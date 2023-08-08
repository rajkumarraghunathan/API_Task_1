async function art() {
  const response = await fetch("https://api.artic.edu/api/v1/artworks/");
  const data = await response.json();
  console.log(data);
  message(data.data);
}

function message(data) {
  console.log(data);
  let content = "";

  data.map((data) => {
    console.log(data);
    content += `
        <div class="card card1" style="width: 18rem;">
         <div class="card-body text-center ">       
        <p><b class ="color">${"ID"}</b><br> ${data.id}</p>
        <p><b class ="color">${"TITLE"}</b><br> ${data.title}</p>  
        <p><b class ="color">${"alt_classification_ids"}</b><br> ${
      data.alt_classification_ids
    }</p>
        <p><b class ="color">${"alt_material_ids"}</b><br> ${
      data.alt_material_ids
    }</p>          
          </div>
        </div>
        `;
    document.getElementById("demo").innerHTML = content;
  });
}

art();
