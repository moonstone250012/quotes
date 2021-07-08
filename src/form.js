const dform=document.getElementById(dform);
function formElement(label,type='text'){
    const labelE=document.createElement("label");
    const InputE=document.createElement("input");

    inputE.type=type;
    inputE.name=label;
    labelE.for=label;
    labelE.innerText=label;
    labelE.append(InputE);

    return labelE;
} 

const test=formElement('Name');

dform.append(test);
console.log(test);
const test1=formElement('Age');
dform.append(test1);
console.log(test1);





{/* <form action="POST" id="dform">
            <!--label for="name">
                Name
                <input type="text" name="name">
            </label>
            <label for="age">
                Age
                <input type="text" name="age">
            </label>
                Email
            <label for="Email">
                <input type="email" name="email">
            </label>
            <button type="submit">Submit</button-->
                Name
                <input type="text" name="name">
        </form> */}