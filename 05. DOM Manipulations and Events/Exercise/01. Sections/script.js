function create(words) {
   const parent = document.getElementById('content');
   parent.addEventListener('click', onclick);
   for (const word of words) {
      const div = document.createElement('div');
      const paragraph = document.createElement('p');
      paragraph.textContent = word;
      paragraph.style.display = 'none';
      div.appendChild(paragraph);
      parent.appendChild(div);
   }
   function onclick(e)
   {
      if (e.target.tagName == "DIV") {
         e.target.firstChild.style.display = '';
      }
   }
}