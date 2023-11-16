const btn = document.querySelector("#btn");
const main = document.querySelector("#main");

const snote = ()=>{
                const notes = document.querySelectorAll(".box textarea");
                console.log(notes);
                const data = [];
                notes.forEach(
                    (note) =>{ 
                        data.push(note.value);
                    }
                )
                console.log(data);
                        localStorage.setItem("notes" , JSON.stringify(data));
            }
        

btn.addEventListener(
    "click" , function(){
        addnote();
        // alert()
    }
)


const addnote  = (text = "")=>{
        const node = document.createElement("div");
        node.classList.add("node");
        node.innerHTML = `
         <div class = "box">
            <div class="nav">
                <!-- heloo -->
                <div class="img">
                <img src="./save.png" class="save"></img>
                <img src="./delete.png" class = "trash"></img>
                </div>
            </div>
            <textarea>${text}</textarea>
        </div>
        `
        node.querySelector(".trash").addEventListener(
            "click" , function(){
                node.remove();
            }
        )
        node.querySelector(".save").addEventListener(
            "click" , function(){
                snote();
            }
        )
        main.appendChild(node);
        snote();

}

(
    function(){
        const lsnotes = JSON.parse(localStorage.getItem("notes"));
        lsnotes.forEach(
            (lsnote)=>{
                addnote(lsnote);
            }
        )
    }
)()