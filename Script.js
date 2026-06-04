/**
 * Promise Example
 */
function promiseExample() {

    return new Promise((resolve, reject) => {

        const success = true;

        setTimeout(() => {

            if(success){
                resolve("Promise Resolved");
            }
            else{
                reject("Promise Rejected");
            }

        },2000);

    });

}

/**
 * Async Await Example
 */
async function asyncExample() {

    try {

        const result =
            await promiseExample();

        console.log(result);

    }
    catch(error) {

        console.error(error);

    }

}

/**
 * Fetch users from API
 */
async function fetchUsers() {

    const status =
        document.getElementById("status");

    const container =
        document.getElementById("userContainer");

    try {

        status.innerHTML =
            "Loading Users...";

        status.className =
            "loading";

        const response =
            await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

        const users =
            await response.json();

        container.innerHTML = "";

        users.forEach(user => {

            container.innerHTML += `
                <div class="card">
                    <h3>${user.name}</h3>
                    <p>Email: ${user.email}</p>
                    <p>Phone: ${user.phone}</p>
                    <p>City: ${user.address.city}</p>
                </div>
            `;
        });

        status.innerHTML =
            "Users Loaded Successfully";

    }
    catch(error){

        status.innerHTML =
            "Failed to Load Users";

        status.className =
            "error";

        console.error(error);

    }

}

document
.getElementById("loadUsersBtn")
.addEventListener("click", fetchUsers);

asyncExample();
