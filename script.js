const form = document.getElementById("employeeForm");

const employeeList =
document.getElementById("employeeList");

loadEmployees();

form.addEventListener("submit", async(e) => {

    e.preventDefault();

    const employee = {

        name: name.value,
        email: email.value,
        department: department.value,
        salary: salary.value
    };

    await fetch(
        "http://localhost:5000/employees",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(employee)
        }
    );

    form.reset();

    loadEmployees();
});

async function loadEmployees(){

    const response = await fetch(
        "http://localhost:5000/employees"
    );

    const data = await response.json();

    employeeList.innerHTML = "";

    data.forEach(emp => {

        employeeList.innerHTML += `
        <div class="employee-card">

            <h3>${emp.name}</h3>

            <p>${emp.email}</p>

            <p>${emp.department}</p>

            <p>₹${emp.salary}</p>

            <button onclick="deleteEmployee(${emp.id})">
                Delete
            </button>

        </div>
        `;
    });
}

async function deleteEmployee(id){

    await fetch(
        `http://localhost:5000/employees/${id}`,
        {
            method:"DELETE"
        }
    );

    loadEmployees();
}