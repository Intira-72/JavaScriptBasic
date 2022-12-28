// Confirm Dialog

function deleteData(){
    let result = confirm("Do you want to delete the data?");
    if(result){
        alert("Data has been deleted.");
    }else{
        alert("Data deletion has been cancelled.");
    }
};