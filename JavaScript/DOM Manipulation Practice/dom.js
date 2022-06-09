/*Selecting from the DOM*/

    // Examine document object
        // console.dir(document);

    // Document Object Properties Examples
        // console.log(document.domain);
        // console.log(document.URL);
        // console.log(document.title);
        // console.log(document.doctype);
        // console.log(document.head);
        // console.log(document.body);
        // console.log(document.all);
        // console.log(document.all[10]);
        // console.log(document.forms);
        // console.log(document.links);

    //getElementById

        const headerTitle = document.getElementById('header-title');
        const header = document.getElementById('main-header')
        // console.log(headerTitle);
        // headerTitle.textContent = 'Hello'
        // headerTitle.innerText = 'Goodbye'
        // console.log(headerTitle.textContent);
        // console.log(headerTitle.innerText); <--- Pays attention to styling
        // headerTitle.innerHTML = '<h3> Hello <h3>';
        // header.style.borderBottom = 'solid 3px black';

        //getElementsByClassName

        const items = document.getElementsByClassName('list-group-item');
        // console.log(items);
        // console.log(items[1]);
        // items[1].textContent = 'Hello 2';
        // items[1].style.fontWeight = 'bold';
        // items[1].style.backgroundColor = 'yellow';
        // // items.style.backgroundColor = 'grey'; <--- Gives error

        // for(let i = 0; i < items.length; i++){
        //     items[i].style.backgroundColor = '#f4f4f4';
        // }

    //getelementsByTagName

        const li = document.getElementsByTagName('li');
        // console.log(li);
        // console.log(li[1]);
        // li[1].textContent = 'Hello 2';
        // li[1].style.fontWeight = 'bold';
        // li[1].style.backgroundColor = 'yellow';
        // // li.style.backgroundColor = 'grey'; <--- Gives error

        // for(let i = 0; i < li.length; i++){
        //     li[i].style.backgroundColor = '#f4f4f4';
        // }

    //querySelector (can take in any css selector) (grabs first one)


        // header.style.borderBottom = 'solid 4px #ccc'

        const input = document.querySelector('input');
        // input.value = 'Hello World'
        
        const submit = document.querySelector('input[type="submit"]');
        // submit.value = 'SEND';

        const item = document.querySelector('.list-group-item');
        // item.style.color = 'red';

        const lastItem = document.querySelector('.list-group-item:last-child');
        // lastItem.style.color = 'blue';

        const secondItem = document.querySelector('.list-group-item:nth-child(2)');
        // secondItem.style.color = 'coral';

    //querySelectorAll
        const titles = document.querySelectorAll('.title');

        // console.log(titles);
        // titles[0].textContent = 'Hello';

        const odd = document.querySelectorAll('li:nth-child(odd)');
        const even = document.querySelectorAll('li:nth-child(even)');

        // for(let i = 0; i < odd.length; i++){
        //     odd[i].style.backgroundColor = '#f4f4f4';
        //     even[i].style.backgroundColor = '#ccc'
        // }


/*Traversing the Dom*/
    
    const itemList = document.querySelector('#items');

    // parentNode
        // console.log(itemList.parentNode);
        // itemList.parentNode.style.backgroundColor = '#f4f4f4';
        // console.log(itemList.parentNode.parentNode.parentNode);

    // parentElement
        // console.log(itemList.parentElement);
        // itemList.parentElement.style.backgroundColor = '#f4f4f4';
        // console.log(itemList.parentElement.parentElement.parentElement);
    
    // childNodes (Node-list ; counts white-space)
        // console.log(itemList.childNodes);

    // children (HTML collection)
        // console.log(itemList.children);
        // console.log(itemList.children[1]);
        // itemList.children[1].style.backgroundColor = 'yellow';

    //firstChild (Counts white-space)
        // console.log(itemList.firstChild);

    //firstElementChild
        // console.log(itemList.firstElementChild);
        // itemList.firstElementChild.textContent = 'Hello 1';

    // lastChild (Counts white-space)
    //     console.log(itemList.lastChild);

    // lastElementChild
        // console.log(itemList.lastElementChild);
        // itemList.lastElementChild.textContent = 'Hello 4';

    //nextSibling (Counts white-space)
        // console.log(itemList.nextSibling);

    //nextelementSibling
        // console.log(itemList.nextElementSibling);

    //previousSibling
        // console.log(itemList.previousSibling);

    //previousElementSibling
        // console.log(itemList.previousElementSibling);
        // itemList.previousElementSibling.style.color = 'green';


/*Creating DOM Elements*/

    //createElement
        //Create div
        const newDiv = document.createElement('div');

        //Add Class
        // newDiv.className = 'hello';

        //Add ID
        // newDiv.id = 'hello 1';

        //Add attr
        // newDiv.setAttribute('title', 'Hello div');

        //Create text node
        const newDivText = document.createTextNode('Hello World');

        //Add Text Node
        // newDiv.appendChild(newDivText);

        //Change Style
        // newDiv.style.fontSize = '30px';

        //Insert into DOM
        const container = document.querySelector('header .container');
        const h1 = document.querySelector('header h1');
        // container.insertBefore(newDiv,h1);

        // console.log(newDiv);

/*Events*/

    // Event Object & example button
        const button = document.getElementById('button')
        // button.addEventListener('click', function(e){
            // console.log('Button Clicked');
            // document.getElementById('header-title').textContent = 'Changed';
            // document.querySelector('#main').style.backgroundColor = '#f4f4f4';

            // console.log(e);
            // console.log(e.target);
            // console.log(e.target.id);
            // console.log(e.target.className);
            // console.log(e.target.classList);
            const output = document.getElementById('output');
            // output.innerHTML = '<h3>' + e.target.id + '</h3>';

            // console.log(e.type);
            // console.log(e.clientX);<--\
            //                             }-- Relative to window
            // console.log(e.clientY);<--/

            // console.log(e.offsettX);<--\
            //                             }-- Relative to element
            // console.log(e.offsetY);<--/

            // console.log(e.altKey);
            // console.log(e.ctrlKey);
            // console.log(e.shiftKey);
        // });

    // Mouse Events
        // button.addEventListener('click', runEvent);
        // button.addEventListener('dblclick', runEvent);
        // button.addEventListener('mousedown', runEvent);
        // button.addEventListener('mouseup', runEvent);

        const box = document.getElementById('box');

        // box.addEventListener('mouseenter',  runEvent);
        // box.addEventListener('mouseleave',  runEvent);

        /* mouseover and mouseout track inner elements as well*/
        // box.addEventListener('mouseover',  runEvent);
        // box.addEventListener('mouseout',  runEvent);

        // box.addEventListener('mousemove',  runEvent);

    //Keyboard & Input Events
            const itemInput = document.querySelector('input[type="text"]');

            // itemInput.addEventListener('keydown', runEvent);
            // itemInput.addEventListener('keyup', runEvent);
            // itemInput.addEventListener('keypress', runEvent);

            // itemInput.addEventListener('focus', runEvent);
            // itemInput.addEventListener('blur', runEvent);

            // itemInput.addEventListener('cut', runEvent);
            // itemInput.addEventListener('paste', runEvent);

            // itemInput.addEventListener('input', runEvent);


            const form = document.querySelector('form');
             form.addEventListener('submit', runEvent); //<--- default behavior only triggers for a moment [use e.preventDefault()]


            const select = document.querySelector('select');
            // select.addEventListener('change', runEvent);
            // select.addEventListener('input', runEvent);
        
        function runEvent(e){
            // e.preventDefault();
            console.log('EVENT TYPE: ' + e.type);
            // console.log(e.target.value);

            // output.innerHTML = '<h3> MouseX: ' + event.offsetX + '</h3><h3> MouseY: ' + event.offsetY + '</h3>';
            // box.style.backgroundColor = `rgb(${event.offsetX},${event.offsetY},40)`;
            // document.body.style.backgroundColor = `rgb(${event.offsetX},${event.offsetY},40)`;

        }
            
