//get element

window.addEventListener("DOMContentLoaded", (event)=> {
    axios.get("http://localhost:7000/get-orders")
        .then((response)=> {
            console.log(response.data.allOrders);
            for(var i=0; i<response.data.allOrders.length; i++){
                showOnScreen(response.data.allOrders[i]);
            }
        })
        .catch((error) => {
            console.log("get request error from axios", error);
        })
});

//post request

const form = document.getElementById("restForm");
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const price = document.getElementById("price").value;
    const dish = document.getElementById("dish").value;
    const table = document.getElementById("table").value;

    const Obj = {
        price,
        dish,
        table
    }

    axios.post("http://localhost:7000/add-order", Obj)
        .then((response)=> {
            console.log("new entered data: ",response.data);
            showOnScreen(response.data.newOrder);
        })
        .catch((error) => {
            console.log("axios post request failed: ", error);
        });
});



function showOnScreen(order){
    
    const t = order.table;
    let pElement;

    switch (t) {
        case "Table-1":
            pElement = document.getElementById("table1");
            break;
        case "Table-2":
            pElement = document.getElementById("table2");
            break;
        case "Table-3":
            pElement = document.getElementById("table3");
            break;
        default:
            console.log("Something is wrong in table selection");
            return;
    }


    const newElement = document.createElement("li");
    newElement.textContent = `${order.price} - ${order.dish} - ${order.table}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    newElement.appendChild(deleteBtn);

    // delete request

    deleteBtn.addEventListener("click", (event) => {
        const currentElement = event.target.parentElement;
        
        axios.delete(`http://localhost:7000/delete-order/${order.id}`)
            .then((response) => {
                console.log(response);
                pElement.removeChild(currentElement);
            })
            .catch((error) => {
                console.log("delete from axios error:", error);
            });
    });

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    newElement.appendChild(editBtn);

    editBtn.addEventListener("click", (event) => {
        const currentElement = event.target.parentElement;
        
        axios.delete(`http://localhost:7000/delete-order/${order.id}`)
            .then((response) => {
                console.log(response);
                pElement.removeChild(currentElement);
            })
            .catch((error) => {
                console.log("delete from axios error:", error);
            });
    });

    pElement.appendChild(newElement);
  
}



//https://crudcrud.com/api/3673d82bd5624f32be8846a83d730c02